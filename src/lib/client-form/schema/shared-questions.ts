import type { SharedQuestion } from "../types";

/**
 * Canonical health & safety questions that apply to more than one treatment.
 * These are asked once per form submission and the answers are available to
 * every applicable treatment's review and submission record.
 */
export const SHARED_QUESTIONS: SharedQuestion[] = [
  {
    id: "pregnant",
    type: "yesNo",
    label: "Are you pregnant?",
    required: true,
    appliesTo: [
      "laser-hair-removal",
      "eyelash-extensions",
      "lash-lift-tint",
      "celluma-led",
    ],
  },
  {
    id: "contactLenses",
    type: "yesNo",
    label: "Do you wear contact lenses?",
    helperText: "Contact lenses must be removed for treatment.",
    required: true,
    appliesTo: ["laser-hair-removal", "eyelash-extensions", "lash-lift-tint"],
  },
];

export function getSharedQuestionsForTreatments(
  treatmentIds: string[],
): SharedQuestion[] {
  return SHARED_QUESTIONS.filter((q) =>
    q.appliesTo.some((id) => treatmentIds.includes(id)),
  );
}
