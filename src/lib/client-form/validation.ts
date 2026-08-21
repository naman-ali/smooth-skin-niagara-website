import { z } from "zod";
import type { FieldErrors, Resolver } from "react-hook-form";
import type { FormValues } from "./form-values";
import type {
  FormQuestion,
  MultiSelectWithOtherAnswer,
  SingleSelectWithOtherAnswer,
} from "./types";
import { getSelectedTreatmentDefinitions } from "./schema";
import { flattenSectionsQuestions, isQuestionVisible } from "./conditional";

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
  selectedTreatments: string[],
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

  const ageRequired = selectedTreatments.includes("laser-hair-removal");
  if (ageRequired) {
    setIfError(
      "age",
      requiredText("Age is required for Laser Hair Removal.")
        .pipe(ageSchema)
        .safeParse(clientInfo.age),
    );
  } else if (clientInfo.age.trim()) {
    setIfError("age", ageSchema.safeParse(clientInfo.age));
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

function buildConsentErrors(
  selectedTreatments: string[],
  consents: FormValues["consents"],
): Record<string, { accepted: { type: string; message: string } }> {
  const result: Record<
    string,
    { accepted: { type: string; message: string } }
  > = {};
  for (const treatmentId of selectedTreatments) {
    if (!consents[treatmentId]?.accepted) {
      result[treatmentId] = {
        accepted: {
          type: "validation",
          message: "Please accept this consent to continue.",
        },
      };
    }
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

  const clientInfoErrors = buildClientInfoErrors(
    values.clientInfo,
    values.selectedTreatments,
  );
  if (Object.keys(clientInfoErrors).length)
    errors.clientInfo = clientInfoErrors;

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
  if (Object.keys(consentErrors).length) errors.consents = consentErrors;

  const acknowledgementErrors = buildAcknowledgementErrors(
    values.acknowledgement,
  );
  if (Object.keys(acknowledgementErrors).length) {
    errors.acknowledgement = acknowledgementErrors;
  }

  return { values, errors } as unknown as Awaited<
    ReturnType<Resolver<FormValues>>
  >;
};

export const clientFormResolver: Resolver<FormValues> = resolver;
