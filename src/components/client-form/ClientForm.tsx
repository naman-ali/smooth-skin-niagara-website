"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FormProvider, useForm, useWatch, type Path } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  DEFAULT_FORM_VALUES,
  type FormValues,
} from "@/lib/client-form/form-values";
import { clientFormResolver } from "@/lib/client-form/validation";
import { buildWizardSteps, getStepFieldNames } from "@/lib/client-form/steps";
import { getTreatmentDefinition } from "@/lib/client-form/schema";
import { submitClientForm, ClientFormSubmitError } from "@/lib/client-form/api";
import { scrollToTop, focusFirstErrorField } from "@/lib/client-form/scroll";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FormProgress } from "./FormProgress";
import { FormNavigation } from "./FormNavigation";
import { FormSectionCard } from "./FormSectionCard";
import { TreatmentSelector } from "./TreatmentSelector";
import { ClientInfoStep } from "./ClientInfoStep";
import { SharedHealthStep } from "./SharedHealthStep";
import { TreatmentSectionStep } from "./TreatmentSectionStep";
import { ConsentsStep } from "./ConsentsStep";
import { ReviewStep } from "./ReviewStep";
import { AcknowledgementStep } from "./AcknowledgementStep";
import { SubmissionSuccess } from "./SubmissionSuccess";

export function ClientForm({ showHeader = true }: { showHeader?: boolean }) {
  const methods = useForm<FormValues>({
    defaultValues: DEFAULT_FORM_VALUES,
    resolver: clientFormResolver,
    mode: "onSubmit",
  });
  const { control, trigger, getValues, setValue, formState } = methods;

  const [stepIndex, setStepIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const watchedTreatments = useWatch({ control, name: "selectedTreatments" });
  const selectedTreatments = useMemo(
    () => watchedTreatments ?? [],
    [watchedTreatments],
  );
  const steps = useMemo(
    () => buildWizardSteps(selectedTreatments),
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

  // Keep the step index in range if the number of steps shrinks (e.g. a
  // treatment is deselected while on the treatment-selection step).
  const clampedStepIndex = Math.min(stepIndex, steps.length - 1);
  const currentStep = steps[clampedStepIndex];
  const isFirstStep = clampedStepIndex === 0;
  const isFinalStep = currentStep?.kind === "acknowledgement";

  const goToStep = (index: number) => {
    setStepIndex(index);
    scrollToTop(topRef.current);
  };

  const handleBack = () => {
    if (isFirstStep) return;
    goToStep(clampedStepIndex - 1);
  };

  const handleContinue = async () => {
    const fieldNames = getStepFieldNames(currentStep, selectedTreatments);
    const valid = fieldNames.length === 0 || (await trigger(fieldNames));

    if (!valid) {
      focusFirstErrorField(fieldNames, formState.errors);
      return;
    }

    if (isFinalStep) {
      await handleSubmit();
      return;
    }

    goToStep(clampedStepIndex + 1);
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
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
    setStepIndex(0);
    setIsSubmitted(false);
    scrollToTop(topRef.current);
  };

  if (isSubmitted) {
    return (
      <div
        ref={topRef}
        className={cn(
          "w-full",
          showHeader ? "mx-auto max-w-3xl px-4 py-10 sm:px-6" : "py-10",
        )}
      >
        <SubmissionSuccess onDone={handleReset} />
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <div
        ref={topRef}
        className={cn("w-full", showHeader && "pb-6 pt-8 sm:pt-12")}
      >
        {showHeader ? (
          <div className="mb-6 space-y-1">
            <p className="text-sm font-medium uppercase tracking-wide text-ink-600">
              Smooth Skin Niagara
            </p>
            <h1 className="font-display text-3xl font-medium text-olive-700 sm:text-4xl">
              Client Intake Form
            </h1>
          </div>
        ) : null}

        <div className={cn("mb-6", !showHeader && "hidden")}>
          <FormProgress steps={steps} currentIndex={clampedStepIndex} />
        </div>

        <StepContent
          stepIndex={clampedStepIndex}
          selectedTreatments={selectedTreatments}
          onEditStep={goToStep}
        />

        {submitError ? (
          <Alert variant="destructive" className="mt-6">
            <AlertDescription>{submitError}</AlertDescription>
          </Alert>
        ) : null}

        <FormNavigation
          onBack={handleBack}
          onContinue={handleContinue}
          isFirstStep={isFirstStep}
          isFinalStep={isFinalStep}
          isSubmitting={isSubmitting}
        />
      </div>
    </FormProvider>
  );
}

function StepContent({
  stepIndex,
  selectedTreatments,
  onEditStep,
}: {
  stepIndex: number;
  selectedTreatments: string[];
  onEditStep: (index: number) => void;
}) {
  const steps = buildWizardSteps(selectedTreatments);
  const step = steps[stepIndex];
  if (!step) return null;

  switch (step.kind) {
    case "treatment-select":
      return (
        <FormSectionCard
          title="Client Intake Form"
          description="Select the treatment you're visiting us for. You can select more than one."
        >
          <TreatmentSelector />
        </FormSectionCard>
      );
    case "client-info":
      return (
        <FormSectionCard
          title="Your Information"
          description="Please share your contact details. We only ask for this once."
        >
          <ClientInfoStep />
        </FormSectionCard>
      );
    case "shared-health":
      return (
        <FormSectionCard
          title="Health & Safety"
          description="Please answer these health and safety questions once for all selected treatments."
        >
          <SharedHealthStep selectedTreatments={selectedTreatments} />
        </FormSectionCard>
      );
    case "treatment-section": {
      const definition = getTreatmentDefinition(step.treatmentId);
      const section = definition?.sections.find((s) => s.id === step.sectionId);
      if (!definition || !section) return null;
      return (
        <FormSectionCard
          title={section.title}
          description={section.description}
        >
          <TreatmentSectionStep treatmentId={definition.id} section={section} />
        </FormSectionCard>
      );
    }
    case "consents":
      return (
        <FormSectionCard
          title="Consent"
          description="Please review and accept the consent for each treatment you selected."
        >
          <ConsentsStep selectedTreatments={selectedTreatments} />
        </FormSectionCard>
      );
    case "review":
      return (
        <FormSectionCard
          title="Review Your Information"
          description="Please check everything looks correct. You can edit any section before submitting."
        >
          <ReviewStep
            selectedTreatments={selectedTreatments}
            onEditStep={onEditStep}
          />
        </FormSectionCard>
      );
    case "acknowledgement":
      return (
        <FormSectionCard
          title="Final Acknowledgement"
          description="Please confirm your details before submitting your form."
        >
          <AcknowledgementStep />
        </FormSectionCard>
      );
  }
}
