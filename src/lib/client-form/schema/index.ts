import type { TreatmentFormDefinition } from "../types";
import { laserHairRemoval } from "./laser-hair-removal";
import { lashLiftTint } from "./lash-lift-tint";

/**
 * Frontend form version. Bump this whenever the shared client-information
 * questions or overall submission shape changes. Individual treatments
 * carry their own `version` for treatment-specific question changes.
 */
export const FORM_VERSION = "2026-08-21";

/**
 * The registry of all available treatments. Adding a new treatment only
 * requires creating a new definition file and registering it here \u2014
 * no changes to the wizard, renderer, or validation engine are needed.
 */
export const TREATMENT_DEFINITIONS: TreatmentFormDefinition[] = [
  laserHairRemoval,
  lashLiftTint,
];

export function getTreatmentDefinition(
  treatmentId: string
): TreatmentFormDefinition | undefined {
  return TREATMENT_DEFINITIONS.find((t) => t.id === treatmentId);
}

export function getSelectedTreatmentDefinitions(
  selectedTreatments: string[]
): TreatmentFormDefinition[] {
  return selectedTreatments
    .map((id) => getTreatmentDefinition(id))
    .filter((t): t is TreatmentFormDefinition => Boolean(t));
}

export { laserHairRemoval, lashLiftTint };
