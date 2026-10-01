// Admin-only test helper: builds a fully-populated FormValues tree with
// realistic dummy data so a submission can be tested end-to-end without
// typing. The generator is schema-driven — it walks each treatment's
// question definitions — so it keeps working as treatments/questions change.

import {
  getSelectedTreatmentDefinitions,
  TREATMENT_DEFINITIONS,
} from "./schema";
import { getSharedQuestionsForTreatments } from "./schema/shared-questions";
import { PHOTO_RELEASE_CONSENT_ID } from "./schema/photo-release";
import { flattenSectionsQuestions, isQuestionVisible } from "./conditional";
import {
  REFERRAL_SOURCE_OPTIONS,
  REFERRER_NAME_VALUES,
} from "./referral-source";
import type { FormQuestion } from "./types";
import type { FormValues } from "./form-values";

const FIRST_NAMES = [
  "Maria",
  "Sofia",
  "Emma",
  "Olivia",
  "Jessica",
  "Amanda",
  "Sarah",
  "Laura",
];

const STREETS = ["123 Test Avenue", "456 Sample Road", "789 Demo Street"];

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/** Canadian 555-01xx numbers are reserved for fictional use. */
function testPhone(): string {
  const suffix = String(Math.floor(Math.random() * 90) + 10);
  return `(905) 555-01${suffix}`;
}

function testEmail(firstName: string): string {
  const suffix = Math.floor(Math.random() * 9000) + 1000;
  return `${firstName.toLowerCase()}.test+${suffix}@example.com`;
}

function dummyTextValue(question: FormQuestion): string {
  const context =
    `${question.id} ${question.label} ${question.placeholder ?? ""}`.toLowerCase();
  if (context.includes("occupation")) return "Office Manager";
  if (context.includes("convenient") || context.includes("time and days"))
    return "Weekday evenings";
  if (context.includes("area")) return "Full face";
  if (context.includes("describe") || context.includes("details"))
    return "None";
  return "Test";
}

function dummyValue(question: FormQuestion, forceYes = false): unknown {
  switch (question.type) {
    case "yesNo":
      return forceYes;
    case "acknowledgement":
      return true;
    case "checkbox":
      // Optional checkboxes are contraindication lists — a healthy test
      // client leaves them unchecked. Required ones are consent ticks.
      return question.required === true;
    case "singleSelect":
      return pick(
        question.options?.length
          ? question.options
          : [{ value: "test", label: "Test" }],
      ).value;
    case "singleSelectWithOther": {
      const other = question.otherValue ?? "other";
      const options = (question.options ?? []).filter(
        (o) => o.value !== other,
      );
      return {
        value: options.length ? pick(options).value : "test",
        otherText: "",
      };
    }
    case "multiSelectWithOther": {
      const other = question.otherValue ?? "other";
      const exclusive = question.exclusiveOptions ?? [];
      const options = (question.options ?? []).filter(
        (o) => o.value !== other,
      );
      if (exclusive.length && Math.random() < 0.3) {
        return { values: [pick(exclusive)], otherText: "" };
      }
      const nonExclusive = options.filter(
        (o) => !exclusive.includes(o.value),
      );
      const pool = nonExclusive.length ? nonExclusive : options;
      return {
        values: [pool.length ? pick(pool).value : "test"],
        otherText: "",
      };
    }
    case "email":
      return testEmail("client");
    case "phone":
      return testPhone();
    case "number":
      return String(25 + Math.floor(Math.random() * 30));
    case "text":
    case "textarea":
    default:
      return dummyTextValue(question);
  }
}

/**
 * Walks a flattened question list in order so `showWhen` conditions see the
 * answers already generated above them (e.g. a "Yes" reveals its follow-up,
 * which then gets filled too). Exactly one top-level yes/no per treatment is
 * answered "Yes" so follow-up fields are exercised while the rest read like
 * a healthy client.
 */
function dummyAnswers(questions: FormQuestion[]): Record<string, unknown> {
  const answers: Record<string, unknown> = {};
  const topLevelYesNo = questions.filter(
    (q) => q.type === "yesNo" && !q.showWhen,
  );
  const yesId = topLevelYesNo.length ? pick(topLevelYesNo).id : null;

  for (const question of questions) {
    if (!isQuestionVisible(question.showWhen, answers)) continue;
    answers[question.id] = dummyValue(question, question.id === yesId);
  }
  return answers;
}

export function buildTestFormValues(): FormValues {
  const firstName = pick(FIRST_NAMES);
  const lastName = "Test";
  const treatmentIds = TREATMENT_DEFINITIONS.map((t) => t.id);

  const treatmentAnswers: FormValues["treatmentAnswers"] = {};
  const consents: FormValues["consents"] = {};
  for (const definition of getSelectedTreatmentDefinitions(treatmentIds)) {
    treatmentAnswers[definition.id] = dummyAnswers(
      flattenSectionsQuestions(definition.sections),
    );
    consents[definition.id] =
      definition.id === "laser-hair-removal"
        ? {
            accepted: true,
            acknowledgements: {
              risks: true,
              individualResults: true,
              treatmentSeries: true,
              naturePurpose: true,
              pregnancyAccutaneDevices: true,
              cancellationPolicy: true,
              recommendedTreatments: true,
              promotionalExpiry: true,
            },
            photoConsent: Math.random() < 0.5,
          }
        : { accepted: true };
  }
  consents[PHOTO_RELEASE_CONSENT_ID] = { accepted: true };

  const sharedAnswers: Record<string, unknown> = {};
  for (const question of getSharedQuestionsForTreatments(treatmentIds)) {
    sharedAnswers[question.id] =
      question.id === "contactLenses" ? Math.random() < 0.5 : false;
  }

  const referral = pick(REFERRAL_SOURCE_OPTIONS);

  return {
    selectedTreatments: treatmentIds,
    clientInfo: {
      firstName,
      lastName,
      email: testEmail(firstName),
      phone: testPhone(),
      street: pick(STREETS),
      city: "Niagara Falls",
      province: "ON",
      postalCode: "L2E 6T1",
      age: String(25 + Math.floor(Math.random() * 30)),
      emergencyContactName: `${pick(FIRST_NAMES)} ${lastName}`,
      emergencyContactPhone: testPhone(),
      referralSource: {
        value: referral.value,
        otherText: "",
        referrerName: REFERRER_NAME_VALUES.includes(referral.value)
          ? "Test Referrer"
          : "",
      },
    },
    sharedAnswers,
    treatmentAnswers,
    consents,
    acknowledgement: {
      typedName: `${firstName} ${lastName}`,
      accepted: true,
    },
    // Age is always 25+ so the guardian block is never required.
    guardian: { fullName: "", accepted: false },
  };
}
