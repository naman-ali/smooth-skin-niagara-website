import type { Path } from "react-hook-form";
import {
  getSelectedTreatmentDefinitions,
  getTreatmentDefinition,
} from "./schema";
import { flattenSectionQuestions } from "./conditional";
import type { FormValues } from "./form-values";

export type WizardStep =
  | { kind: "treatment-select" }
  | { kind: "client-info" }
  | {
      kind: "treatment-section";
      treatmentId: string;
      sectionId: string;
      sectionTitle: string;
    }
  | { kind: "consents" }
  | { kind: "review" }
  | { kind: "acknowledgement" };

/**
 * Builds the ordered list of wizard steps for the currently selected
 * treatments. The number and content of steps changes dynamically \u2014
 * adding a new treatment definition automatically inserts its sections
 * here without any changes to this function.
 */
export function buildWizardSteps(selectedTreatments: string[]): WizardStep[] {
  const steps: WizardStep[] = [{ kind: "treatment-select" }];

  if (selectedTreatments.length === 0) {
    return steps;
  }

  steps.push({ kind: "client-info" });

  for (const definition of getSelectedTreatmentDefinitions(
    selectedTreatments,
  )) {
    for (const section of definition.sections) {
      steps.push({
        kind: "treatment-section",
        treatmentId: definition.id,
        sectionId: section.id,
        sectionTitle: section.title,
      });
    }
  }

  steps.push({ kind: "consents" });
  steps.push({ kind: "review" });
  steps.push({ kind: "acknowledgement" });

  return steps;
}

/** Short label used for the desktop/tablet breadcrumb-style progress bar. */
export function stepGroupLabel(step: WizardStep): string {
  switch (step.kind) {
    case "treatment-select":
      return "Treatment";
    case "client-info":
      return "Information";
    case "treatment-section":
      return step.sectionTitle;
    case "consents":
      return "Consent";
    case "review":
      return "Review";
    case "acknowledgement":
      return "Submit";
  }
}

/**
 * Returns the react-hook-form field paths that belong to a given step, so
 * `trigger()` can validate only what is visible on screen before allowing
 * Continue. This keeps validation scoped to the current step while every
 * other answer in the form remains untouched.
 */
export function getStepFieldNames(
  step: WizardStep,
  selectedTreatments: string[],
): Path<FormValues>[] {
  switch (step.kind) {
    case "treatment-select":
      return ["selectedTreatments"];
    case "client-info":
      return [
        "clientInfo.firstName",
        "clientInfo.lastName",
        "clientInfo.email",
        "clientInfo.phone",
        "clientInfo.street",
        "clientInfo.city",
        "clientInfo.province",
        "clientInfo.postalCode",
        "clientInfo.age",
        "clientInfo.referralSource",
      ];
    case "treatment-section": {
      const definition = getTreatmentDefinition(step.treatmentId);
      if (!definition) return [];
      const section = definition.sections.find((s) => s.id === step.sectionId);
      if (!section) return [];
      return flattenSectionQuestions(section).map(
        (question) =>
          `treatmentAnswers.${step.treatmentId}.${question.id}` as Path<FormValues>,
      );
    }
    case "consents":
      return selectedTreatments.map(
        (treatmentId) => `consents.${treatmentId}.accepted` as Path<FormValues>,
      );
    case "review":
      return [];
    case "acknowledgement":
      return ["acknowledgement.typedName", "acknowledgement.accepted"];
  }
}
