import type { Path } from "react-hook-form";
import {
  getSelectedTreatmentDefinitions,
  getTreatmentDefinition,
} from "./schema";
import { flattenSectionQuestions } from "./conditional";
import { getSharedQuestionsForTreatments } from "./schema/shared-questions";
import { PHOTO_RELEASE_CONSENT_ID } from "./schema/photo-release";
import type { FormValues } from "./form-values";

export type WizardStep =
  | { kind: "treatment-select" }
  | { kind: "client-info" }
  | { kind: "shared-health" }
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

  if (getSharedQuestionsForTreatments(selectedTreatments).length > 0) {
    steps.push({ kind: "shared-health" });
  }

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
    case "shared-health":
      return "Health & Safety";
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
    case "shared-health":
      return getSharedQuestionsForTreatments(selectedTreatments).map(
        (question) => `sharedAnswers.${question.id}` as Path<FormValues>,
      );
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
    case "consents": {
      const names: Path<FormValues>[] = [];
      for (const treatmentId of selectedTreatments) {
        if (treatmentId === "laser-hair-removal") {
          names.push(
            "consents.laser-hair-removal.acknowledgements.risks",
            "consents.laser-hair-removal.acknowledgements.individualResults",
            "consents.laser-hair-removal.acknowledgements.treatmentSeries",
            "consents.laser-hair-removal.acknowledgements.naturePurpose",
            "consents.laser-hair-removal.acknowledgements.pregnancyAccutaneDevices",
            "consents.laser-hair-removal.acknowledgements.cancellationPolicy",
            "consents.laser-hair-removal.acknowledgements.recommendedTreatments",
            "consents.laser-hair-removal.acknowledgements.promotionalExpiry",
            "consents.laser-hair-removal.photoConsent",
          );
        } else {
          names.push(`consents.${treatmentId}.accepted` as Path<FormValues>);
        }
      }
      names.push(
        `consents.${PHOTO_RELEASE_CONSENT_ID}.accepted` as Path<FormValues>,
      );
      return names;
    }
    case "review":
      return [];
    case "acknowledgement":
      return [
        "acknowledgement.typedName",
        "acknowledgement.accepted",
        "guardian.fullName",
        "guardian.accepted",
      ];
  }
}
