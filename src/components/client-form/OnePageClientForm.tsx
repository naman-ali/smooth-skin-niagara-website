"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FormProvider, useForm, useWatch, type Path } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DEFAULT_FORM_VALUES,
  type FormValues,
} from "@/lib/client-form/form-values";
import { clientFormResolver } from "@/lib/client-form/validation";
import { getSelectedTreatmentDefinitions } from "@/lib/client-form/schema";
import { getSharedQuestionsForTreatments } from "@/lib/client-form/schema/shared-questions";
import { flattenSectionQuestions } from "@/lib/client-form/conditional";
import { submitClientForm, ClientFormSubmitError } from "@/lib/client-form/api";
import { scrollToTop } from "@/lib/client-form/scroll";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FormSectionCard } from "./FormSectionCard";
import { TreatmentSelector } from "./TreatmentSelector";
import { ClientInfoStep } from "./ClientInfoStep";
import { TreatmentSectionStep } from "./TreatmentSectionStep";
import { ConsentsStep } from "./ConsentsStep";
import { AcknowledgementStep } from "./AcknowledgementStep";
import { SharedHealthStep } from "./SharedHealthStep";
import { SubmissionSuccess } from "./SubmissionSuccess";

/**
 * Compact, single-scroll version of the client intake form.
 * Renders the same fields as the wizard but lets the user fill and
 * submit everything in one continuous view. Optimised for larger
 * tablets and small desktops where vertical scrolling is fine.
 */
export function OnePageClientForm() {
  const methods = useForm<FormValues>({
    defaultValues: DEFAULT_FORM_VALUES,
    resolver: clientFormResolver,
    mode: "onSubmit",
  });
  const { control, getValues, setValue, trigger } = methods;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const watchedTreatments = useWatch({ control, name: "selectedTreatments" });
  const selectedTreatments = useMemo(
    () => watchedTreatments ?? [],
    [watchedTreatments],
  );

  const selectedDefinitions = useMemo(
    () => getSelectedTreatmentDefinitions(selectedTreatments),
    [selectedTreatments],
  );

  // Prefill any "typed legal name" fields from the client info entered at the
  // top of the form. The user can still override each field manually.
  const clientInfo = useWatch({ control, name: "clientInfo" });
  const previousFullName = useRef("");
  useEffect(() => {
    const first = clientInfo?.firstName?.trim() ?? "";
    const last = clientInfo?.lastName?.trim() ?? "";
    const fullName = `${first} ${last}`.trim();
    const nameFields: Path<FormValues>[] = [
      "acknowledgement.typedName",
      "consents.laser-hair-removal.typedName",
    ];
    for (const field of nameFields) {
      const current = (getValues(field) as string | undefined) ?? "";
      if (!current || current === previousFullName.current) {
        setValue(field, fullName, {
          shouldValidate: false,
          shouldDirty: false,
        });
      }
    }
    previousFullName.current = fullName;
  }, [clientInfo, getValues, setValue]);

  const allFieldNames = useMemo(() => {
    const names: Path<FormValues>[] = [
      "selectedTreatments",
      "clientInfo.firstName",
      "clientInfo.lastName",
      "clientInfo.email",
      "clientInfo.phone",
      "clientInfo.street",
      "clientInfo.city",
      "clientInfo.province",
      "clientInfo.postalCode",
      "clientInfo.age",
      "clientInfo.emergencyContact",
      "clientInfo.referralSource",
    ];

    for (const definition of selectedDefinitions) {
      for (const section of definition.sections) {
        for (const question of flattenSectionQuestions(section)) {
          names.push(
            `treatmentAnswers.${definition.id}.${question.id}` as Path<FormValues>,
          );
        }
      }
    }

    for (const question of getSharedQuestionsForTreatments(
      selectedTreatments,
    )) {
      names.push(`sharedAnswers.${question.id}` as Path<FormValues>);
    }

    for (const treatmentId of selectedTreatments) {
      if (treatmentId === "laser-hair-removal") {
        names.push(
          "consents.laser-hair-removal.acknowledgements.risks",
          "consents.laser-hair-removal.acknowledgements.individualResults",
          "consents.laser-hair-removal.acknowledgements.treatmentSeries",
          "consents.laser-hair-removal.acknowledgements.naturePurpose",
          "consents.laser-hair-removal.acknowledgements.pregnancyAccutaneDevices",
          "consents.laser-hair-removal.acknowledgements.cancellationPolicy",
          "consents.laser-hair-removal.acknowledgements.photography",
          "consents.laser-hair-removal.acknowledgements.recommendedTreatments",
          "consents.laser-hair-removal.acknowledgements.promotionalExpiry",
          "consents.laser-hair-removal.typedName",
          "consents.laser-hair-removal.accepted",
        );
      } else {
        names.push(`consents.${treatmentId}.accepted` as Path<FormValues>);
      }
    }

    names.push("acknowledgement.typedName", "acknowledgement.accepted");
    return names;
  }, [selectedDefinitions, selectedTreatments]);

  const handleSubmit = async () => {
    if (isSubmitting) return;
    const valid = await trigger(allFieldNames);
    if (!valid) {
      scrollToTop(topRef.current);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await submitClientForm(getValues());
      setIsSubmitted(true);
      scrollToTop(topRef.current);
    } catch (error) {
      setSubmitError(
        error instanceof ClientFormSubmitError
          ? error.message
          : "We couldn't submit your form. Please check your connection and try again.",
      );
      scrollToTop(topRef.current);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    methods.reset(DEFAULT_FORM_VALUES);
    setIsSubmitted(false);
    scrollToTop(topRef.current);
  };

  if (isSubmitted) {
    return (
      <div ref={topRef} className="py-10">
        <SubmissionSuccess onDone={handleReset} />
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <div ref={topRef} className="space-y-4">
        <FormSectionCard
          title="1. Select Treatment(s)"
          description="Choose the treatment(s) you're visiting us for."
          compact
        >
          <TreatmentSelector />
        </FormSectionCard>

        {selectedTreatments.length > 0 && (
          <FormSectionCard
            title="2. Your Information"
            description="We only ask for this once."
            compact
          >
            <ClientInfoStep compact />
          </FormSectionCard>
        )}

        {getSharedQuestionsForTreatments(selectedTreatments).length > 0 && (
          <FormSectionCard
            title="3. Health & Safety"
            description="Answered once for all selected treatments."
            compact
          >
            <SharedHealthStep selectedTreatments={selectedTreatments} compact />
          </FormSectionCard>
        )}

        {selectedDefinitions.map((definition) => (
          <FormSectionCard
            key={definition.id}
            title={definition.name}
            description={null}
            compact
          >
            <div className="space-y-5">
              {definition.sections.map((section) => (
                <div key={section.id}>
                  {section.title ? (
                    <h3 className="mb-2 font-display text-base font-medium text-foreground">
                      {section.title}
                    </h3>
                  ) : null}
                  <TreatmentSectionStep
                    treatmentId={definition.id}
                    section={section}
                    compact
                  />
                </div>
              ))}
            </div>
          </FormSectionCard>
        ))}

        {selectedTreatments.length > 0 && (
          <FormSectionCard
            title="4. Consents"
            description="Please review and accept the consent for each treatment."
          >
            <ConsentsStep selectedTreatments={selectedTreatments} />
          </FormSectionCard>
        )}

        {selectedTreatments.length > 0 && (
          <FormSectionCard
            title="5. Final Acknowledgement"
            description={null}
            compact
          >
            <AcknowledgementStep compact />
          </FormSectionCard>
        )}

        {submitError ? (
          <Alert variant="destructive">
            <AlertDescription>{submitError}</AlertDescription>
          </Alert>
        ) : null}

        {selectedTreatments.length > 0 && (
          <div className="sticky bottom-0 -mx-4 border-t border-border bg-background/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none">
            <div className="flex justify-end">
              <Button
                type="button"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="h-9 min-w-[140px] text-sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      className="h-3.5 w-3.5 animate-spin"
                      aria-hidden="true"
                    />
                    Submitting...
                  </>
                ) : (
                  "Submit Form"
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </FormProvider>
  );
}
