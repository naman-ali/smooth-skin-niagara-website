import type { FormQuestion, FormSection, ShowWhen } from "./types";

/**
 * Evaluates a question's `showWhen` condition against the current set of
 * answers for a single treatment. Generic and config-driven \u2014 new
 * treatments can define their own dependencies without touching this file.
 */
export function isQuestionVisible(
  showWhen: ShowWhen | undefined,
  answers: Record<string, unknown>
): boolean {
  if (!showWhen) return true;
  const value = answers[showWhen.questionId];
  return value === showWhen.equals;
}

/** Flattens a section's questions with their (possible) followUp question. */
export function flattenSectionQuestions(section: FormSection): FormQuestion[] {
  const result: FormQuestion[] = [];
  for (const question of section.questions) {
    result.push(question);
    if (question.followUp) {
      result.push(question.followUp);
    }
  }
  return result;
}

export function flattenSectionsQuestions(sections: FormSection[]): FormQuestion[] {
  return sections.flatMap(flattenSectionQuestions);
}

/**
 * Given a treatment's flattened question list and the current answers,
 * returns a new answers object with any now-hidden question's value
 * cleared. This prevents submitting stale answers for conditional fields
 * that are no longer visible.
 */
export function clearHiddenAnswers(
  questions: FormQuestion[],
  answers: Record<string, unknown>
): Record<string, unknown> {
  const next = { ...answers };
  let changed = false;
  for (const question of questions) {
    if (!question.showWhen) continue;
    const visible = isQuestionVisible(question.showWhen, next);
    if (!visible && next[question.id] !== undefined) {
      next[question.id] = undefined;
      changed = true;
    }
  }
  return changed ? next : answers;
}
