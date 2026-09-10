import { z } from "zod";
import type { FieldErrors, Resolver } from "react-hook-form";
import type { FormValues, LaserConsentAcknowledgements } from "./form-values";
import type {
  FormQuestion,
  MultiSelectWithOtherAnswer,
  SingleSelectWithOtherAnswer,
} from "./types";
import {
  getSelectedTreatmentDefinitions,
  getTreatmentDefinition,
} from "./schema";
import { getSharedQuestionsForTreatments } from "./schema/shared-questions";
import { PHOTO_RELEASE_CONSENT_ID } from "./schema/photo-release";
import { flattenSectionsQuestions, isQuestionVisible } from "./conditional";
import { isMinorAge } from "./guardian";

// Zod primitives used to validate individual leaf answers. The overall
// submission shape is dynamic (it depends on which treatments were
// selected), so rather than a single static zod object for the whole
// form, each field is validated with a focused zod schema and the results
// are assembled into a react-hook-form-compatible error tree below.
const PHONE_RE = /^[0-9+()\-.\s]{7,}$/;

const emailSchema = z
  .string()
  .trim()
  .min(1, "Email address is required.")
  .email("Enter a valid email address.");

const phoneSchema = z
  .string()
  .trim()
  .min(1, "Phone number is required.")
  .regex(PHONE_RE, "Enter a valid phone number.");

const requiredText = (message: string) => z.string().trim().min(1, message);

const yesNoSchema = z.boolean({
  message: "Please select Yes or No.",
});

const ageSchema = z
  .string()
  .trim()
  .regex(/^[0-9]{1,3}$/, "Enter a valid age.");

function firstIssueMessage(
  result: z.ZodSafeParseResult<unknown>,
): string | undefined {
  if (result.success) return undefined;
  return result.error.issues[0]?.message ?? "This field is required.";
}

function singleSelectWithOtherError(
  question: FormQuestion,
  value: unknown,
): string | undefined {
  const answer = (value ?? {}) as Partial<SingleSelectWithOtherAnswer>;
  if (!answer.value) return "Please select an option.";
  const otherValue = question.otherValue ?? "other";
  if (question.allowOther && answer.value === otherValue) {
    if (!answer.otherText || !answer.otherText.trim()) {
      return "Please provide more detail.";
    }
  }
  return undefined;
}

function multiSelectWithOtherError(
  question: FormQuestion,
  value: unknown,
): string | undefined {
  const answer = (value ?? {}) as Partial<MultiSelectWithOtherAnswer>;
  if (!answer.values || answer.values.length === 0) {
    return "Please select at least one option.";
  }
  const otherValue = question.otherValue ?? "other";
  if (question.allowOther && answer.values.includes(otherValue)) {
    if (!answer.otherText || !answer.otherText.trim()) {
      return "Please provide more detail.";
    }
  }
  return undefined;
}

function questionError(
  question: FormQuestion,
  value: unknown,
): string | undefined {
  if (!question.required) return undefined;

  switch (question.type) {
    case "yesNo":
      return firstIssueMessage(yesNoSchema.safeParse(value));
    case "singleSelect":
      return firstIssueMessage(
        requiredText("Please select an option.").safeParse(value),
      );
    case "singleSelectWithOther":
      return singleSelectWithOtherError(question, value);
    case "multiSelectWithOther":
      return multiSelectWithOtherError(question, value);
    case "checkbox":
    case "acknowledgement":
      return value === true ? undefined : "This must be accepted to continue.";
    case "email":
      return firstIssueMessage(emailSchema.safeParse(value));
    case "phone":
      return firstIssueMessage(phoneSchema.safeParse(value));
    case "number":
      return firstIssueMessage(
        requiredText("This field is required.").safeParse(
          value === undefined || value === null ? "" : String(value),
        ),
      );
    case "text":
    case "textarea":
    default:
      return firstIssueMessage(
        requiredText("This field is required.").safeParse(
          typeof value === "string" ? value : "",
        ),
      );
  }
}

type FieldErrorMap = Record<string, { type: string; message: string }>;

function buildClientInfoErrors(
  clientInfo: FormValues["clientInfo"],
): FieldErrorMap {
  const errors: FieldErrorMap = {};
  const setIfError = (
    key: keyof FormValues["clientInfo"],
    result: z.ZodSafeParseResult<unknown>,
  ) => {
    const message = firstIssueMessage(result);
    if (message) errors[key] = { type: "validation", message };
  };

  setIfError(
    "firstName",
    requiredText("First name is required.").safeParse(clientInfo.firstName),
  );
  setIfError(
    "lastName",
    requiredText("Last name is required.").safeParse(clientInfo.lastName),
  );
  setIfError("email", emailSchema.safeParse(clientInfo.email));
  setIfError("phone", phoneSchema.safeParse(clientInfo.phone));
  setIfError(
    "street",
    requiredText("Street address is required.").safeParse(clientInfo.street),
  );
  setIfError(
    "city",
    requiredText("City is required.").safeParse(clientInfo.city),
  );
  setIfError(
    "province",
    requiredText("Province is required.").safeParse(clientInfo.province),
  );
  setIfError(
    "postalCode",
    requiredText("Postal code is required.").safeParse(clientInfo.postalCode),
  );

  setIfError(
    "age",
    requiredText("Age is required.").pipe(ageSchema).safeParse(clientInfo.age),
  );

  const emergencyPhone = clientInfo.emergencyContactPhone.trim();
  if (emergencyPhone) {
    setIfError("emergencyContactPhone", phoneSchema.safeParse(emergencyPhone));
  }

  if (
    clientInfo.referralSource.value === "other" &&
    !clientInfo.referralSource.otherText.trim()
  ) {
    errors.referralSource = {
      type: "validation",
      message: "Please tell us how you heard about us.",
    };
  }

  return errors;
}

function buildTreatmentAnswerErrors(
  selectedTreatments: string[],
  treatmentAnswers: FormValues["treatmentAnswers"],
): Record<string, FieldErrorMap> {
  const result: Record<string, FieldErrorMap> = {};
  for (const definition of getSelectedTreatmentDefinitions(
    selectedTreatments,
  )) {
    const questions = flattenSectionsQuestions(definition.sections);
    const answers = treatmentAnswers[definition.id] ?? {};
    const questionErrors: FieldErrorMap = {};
    for (const question of questions) {
      if (!isQuestionVisible(question.showWhen, answers)) continue;
      const message = questionError(question, answers[question.id]);
      if (message)
        questionErrors[question.id] = { type: "validation", message };
    }
    if (Object.keys(questionErrors).length > 0) {
      result[definition.id] = questionErrors;
    }
  }
  return result;
}

function buildSharedAnswerErrors(
  selectedTreatments: string[],
  sharedAnswers: FormValues["sharedAnswers"],
): Record<string, { type: string; message: string }> | undefined {
  const result: Record<string, { type: string; message: string }> = {};
  for (const question of getSharedQuestionsForTreatments(selectedTreatments)) {
    const message = questionError(question, sharedAnswers[question.id]);
    if (message) result[question.id] = { type: "validation", message };
  }
  return Object.keys(result).length ? result : undefined;
}

const ACKNOWLEDGEMENT_LABELS: Record<
  keyof LaserConsentAcknowledgements,
  string
> = {
  risks: "Please acknowledge the treatment risks.",
  individualResults: "Please acknowledge the treatment response information.",
  treatmentSeries: "Please acknowledge the treatment series information.",
  naturePurpose:
    "Please acknowledge the nature, purpose and outcomes of the procedure.",
  pregnancyAccutaneDevices:
    "Please acknowledge the pregnancy, Accutane and device information.",
  cancellationPolicy: "Please acknowledge the cancellation policy.",
  recommendedTreatments:
    "Please acknowledge the recommended number of treatments.",
  promotionalExpiry:
    "Please acknowledge the promotional package expiry information.",
};

function buildLaserConsentErrors(
  value: FormValues["consents"]["laser-hair-removal"],
): Record<string, unknown> {
  const errors: Record<string, unknown> = {};
  const acknowledgements: Record<string, { type: string; message: string }> =
    {};
  const ack = value?.acknowledgements ?? {};
  for (const key of Object.keys(
    ACKNOWLEDGEMENT_LABELS,
  ) as (keyof LaserConsentAcknowledgements)[]) {
    if (!ack[key]) {
      acknowledgements[key] = {
        type: "validation",
        message: ACKNOWLEDGEMENT_LABELS[key],
      };
    }
  }
  if (Object.keys(acknowledgements).length > 0) {
    errors.acknowledgements = acknowledgements;
  }

  if (value?.photoConsent !== true && value?.photoConsent !== false) {
    errors.photoConsent = {
      type: "validation",
      message: "Please select Yes or No for the photography consent.",
    };
  }

  return errors;
}

function buildConsentErrors(
  selectedTreatments: string[],
  consents: FormValues["consents"],
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const treatmentId of selectedTreatments) {
    const definition = getTreatmentDefinition(treatmentId);
    if (!definition) continue;

    if (treatmentId === "laser-hair-removal") {
      const laserErrors = buildLaserConsentErrors(consents[treatmentId]);
      if (Object.keys(laserErrors).length > 0) {
        result[treatmentId] = laserErrors;
      }
      continue;
    }

    if (
      definition.consent.status === "approved" &&
      !consents[treatmentId]?.accepted
    ) {
      result[treatmentId] = {
        accepted: {
          type: "validation",
          message: "Please accept this consent to continue.",
        },
      };
    }
  }

  // Applies once per submission regardless of which treatment(s) were
  // selected, so it is validated unconditionally rather than per treatment.
  if (!consents[PHOTO_RELEASE_CONSENT_ID]?.accepted) {
    result[PHOTO_RELEASE_CONSENT_ID] = {
      accepted: {
        type: "validation",
        message: "Please accept the photo release to continue.",
      },
    };
  }

  return result;
}

function buildAcknowledgementErrors(
  acknowledgement: FormValues["acknowledgement"],
): FieldErrorMap {
  const errors: FieldErrorMap = {};
  const nameMessage = firstIssueMessage(
    requiredText("Please type your full legal name.").safeParse(
      acknowledgement.typedName,
    ),
  );
  if (nameMessage)
    errors.typedName = { type: "validation", message: nameMessage };
  if (!acknowledgement.accepted) {
    errors.accepted = {
      type: "validation",
      message: "Please confirm before submitting.",
    };
  }
  return errors;
}

/**
 * Only required when the client's existing Age answer indicates they are
 * under 18. The Laser Hair Removal paperwork includes a
 * "Patient/Guardian signature — Under age 18" line; this reuses the Age
 * field already collected rather than adding a new age question.
 */
function buildGuardianErrors(
  clientInfo: FormValues["clientInfo"],
  guardian: FormValues["guardian"],
): FieldErrorMap {
  const errors: FieldErrorMap = {};
  if (!isMinorAge(clientInfo.age)) return errors;

  const nameMessage = firstIssueMessage(
    requiredText("Parent/guardian full legal name is required.").safeParse(
      guardian.fullName,
    ),
  );
  if (nameMessage)
    errors.fullName = { type: "validation", message: nameMessage };

  if (!guardian.accepted) {
    errors.accepted = {
      type: "validation",
      message: "Guardian confirmation is required for clients under 18.",
    };
  }
  return errors;
}

/**
 * Custom react-hook-form resolver. The schema for treatment answers is
 * dynamic (dependent on which treatments are selected), so this resolver
 * re-derives the relevant zod validators from current form values on every
 * call rather than relying on a single static schema.
 */
const resolver = async (values: FormValues) => {
  const errors: FieldErrors<FormValues> = {};

  if (!values.selectedTreatments || values.selectedTreatments.length === 0) {
    errors.selectedTreatments = {
      type: "validation",
      message: "Please select at least one treatment.",
    };
  }

  const clientInfoErrors = buildClientInfoErrors(values.clientInfo);
  if (Object.keys(clientInfoErrors).length)
    errors.clientInfo = clientInfoErrors;

  const sharedAnswerErrors = buildSharedAnswerErrors(
    values.selectedTreatments,
    values.sharedAnswers ?? {},
  );
  if (sharedAnswerErrors && Object.keys(sharedAnswerErrors).length) {
    errors.sharedAnswers = sharedAnswerErrors as unknown as FieldErrors<
      FormValues["sharedAnswers"]
    >;
  }

  const treatmentAnswerErrors = buildTreatmentAnswerErrors(
    values.selectedTreatments,
    values.treatmentAnswers,
  );
  if (Object.keys(treatmentAnswerErrors).length) {
    errors.treatmentAnswers = treatmentAnswerErrors;
  }

  const consentErrors = buildConsentErrors(
    values.selectedTreatments,
    values.consents,
  );
  if (Object.keys(consentErrors).length) {
    errors.consents = consentErrors as unknown as FieldErrors<
      FormValues["consents"]
    >;
  }

  const acknowledgementErrors = buildAcknowledgementErrors(
    values.acknowledgement,
  );
  if (Object.keys(acknowledgementErrors).length) {
    errors.acknowledgement = acknowledgementErrors;
  }

  const guardianErrors = buildGuardianErrors(
    values.clientInfo,
    values.guardian,
  );
  if (Object.keys(guardianErrors).length) {
    errors.guardian = guardianErrors;
  }

  return { values, errors } as unknown as Awaited<
    ReturnType<Resolver<FormValues>>
  >;
};

export const clientFormResolver: Resolver<FormValues> = resolver;
