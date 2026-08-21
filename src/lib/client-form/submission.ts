import { FORM_VERSION } from "./schema";
import type { ClientInfoValues, FormValues } from "./form-values";
import { getTreatmentDefinition } from "./schema";

export type ClientFormSubmission = {
  formVersion: string;
  selectedTreatments: string[];

  client: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      province: string;
      postalCode: string;
    };
    age?: number;
    referralSource?: string;
  };

  treatmentResponses: {
    [treatmentId: string]: {
      treatmentVersion: string;
      answers: Record<string, unknown>;
    };
  };

  consents: {
    [treatmentId: string]: {
      consentVersion?: string;
      consentStatus: string;
      accepted?: boolean;
    };
  };

  acknowledgement: {
    typedName: string;
    accepted: boolean;
    acceptedAt: string;
  };

  submittedAt: string;
};

function buildClient(client: ClientInfoValues): ClientFormSubmission["client"] {
  const parsedAge = client.age?.trim() ? Number(client.age) : undefined;
  return {
    firstName: client.firstName.trim(),
    lastName: client.lastName.trim(),
    email: client.email.trim(),
    phone: client.phone.trim(),
    address: {
      street: client.street.trim(),
      city: client.city.trim(),
      province: client.province.trim(),
      postalCode: client.postalCode.trim(),
    },
    age: Number.isFinite(parsedAge) ? parsedAge : undefined,
    referralSource: client.referralSource?.trim() || undefined,
  };
}

/**
 * Builds the single typed submission object from current form state.
 * The timestamp is generated only at the moment of (mock) submission.
 */
export function buildClientFormSubmission(values: FormValues): ClientFormSubmission {
  const submittedAt = new Date().toISOString();

  const treatmentResponses: ClientFormSubmission["treatmentResponses"] = {};
  const consents: ClientFormSubmission["consents"] = {};

  for (const treatmentId of values.selectedTreatments) {
    const definition = getTreatmentDefinition(treatmentId);
    if (!definition) continue;

    treatmentResponses[treatmentId] = {
      treatmentVersion: definition.version,
      answers: values.treatmentAnswers[treatmentId] ?? {},
    };

    const consentState = values.consents[treatmentId];
    consents[treatmentId] = {
      consentVersion: definition.consent.version,
      consentStatus: definition.consent.status,
      accepted: consentState?.accepted ?? false,
    };
  }

  return {
    formVersion: FORM_VERSION,
    selectedTreatments: values.selectedTreatments,
    client: buildClient(values.clientInfo),
    treatmentResponses,
    consents,
    acknowledgement: {
      typedName: values.acknowledgement.typedName.trim(),
      accepted: values.acknowledgement.accepted,
      acceptedAt: submittedAt,
    },
    submittedAt,
  };
}

/**
 * Mock submission handler. There is no backend yet: this simply hands the
 * fully-typed submission object to a callback so the eventual API call can
 * be dropped in without changing any form/rendering code.
 */
export async function mockSubmitClientForm(
  values: FormValues
): Promise<ClientFormSubmission> {
  const submission = buildClientFormSubmission(values);
  // Simulate network latency for a realistic submit experience.
  await new Promise((resolve) => setTimeout(resolve, 600));
  return submission;
}
