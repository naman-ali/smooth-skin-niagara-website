"use client";

import { useMemo, useRef, useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import {
  DEFAULT_FORM_VALUES,
  type FormValues,
} from "@/lib/client-form/form-values";
import { clientFormResolver } from "@/lib/client-form/validation";
import { buildWizardSteps, getStepFieldNames } from "@/lib/client-form/steps";
import { getTreatmentDefinition } from "@/lib/client-form/schema";
import { mockSubmitClientForm } from "@/lib/client-form/submission";
import { scrollToTop, focusFirstErrorField } from "@/lib/client-form/scroll";
import { FormProgress } from "./FormProgress";
import { FormNavigation } from "./FormNavigation";
import { FormSectionCard } from "./FormSectionCard";
import { TreatmentSelector } from "./TreatmentSelector";
import { ClientInfoStep } from "./ClientInfoStep";
import { TreatmentSectionStep } from "./TreatmentSectionStep";
import { ConsentsStep } from "./ConsentsStep";
import { ReviewStep } from "./ReviewStep";
import { AcknowledgementStep } from "./AcknowledgementStep";
import { SubmissionSuccess } from "./SubmissionSuccess";

export function ClientForm() {
  const methods = useForm<FormValues>({
    defaultValues: DEFAULT_FORM_VALUES,
    resolver: clientFormResolver,
    mode: "onSubmit",
  });
  const { control, trigger, getValues, formState } = methods;

  const [stepIndex, setStepIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    try {
      // Mock submission only \u2014 no backend exists yet. The returned
      // object is intentionally not logged or persisted anywhere.
      await mockSubmitClientForm(getValues());
      setIsSubmitted(true);
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
      <div ref={topRef} className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
        <SubmissionSuccess onDone={handleReset} />
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <div
        ref={topRef}
        className="mx-auto w-full max-w-3xl px-4 pb-6 pt-8 sm:px-6 sm:pt-12"
      >
        <div className="mb-6 space-y-1">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Smooth Skin Niagara
          </p>
          <h1 className="font-display text-3xl font-medium text-foreground sm:text-4xl">
            Client Intake Form
          </h1>
        </div>

        <div className="mb-6">
          <FormProgress steps={steps} currentIndex={clampedStepIndex} />
        </div>

        <StepContent
          stepIndex={clampedStepIndex}
          selectedTreatments={selectedTreatments}
          onEditStep={goToStep}
        />

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
