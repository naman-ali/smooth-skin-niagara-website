import { FORM_VERSION } from "./schema";
import type {
  ClientInfoValues,
  FormValues,
  ReferralSourceValue,
} from "./form-values";
import { getTreatmentDefinition } from "./schema";
import {
  REFERRAL_OTHER_VALUE,
  REFERRER_NAME_VALUES,
  getReferralSourceLabel,
} from "./referral-source";

type LaserConsentSubmission = {
  consentVersion: string;
  acknowledgements: {
    risks: boolean;
    individualResults: boolean;
    treatmentSeries: boolean;
    naturePurpose: boolean;
    pregnancyAccutaneDevices: boolean;
    cancellationPolicy: boolean;
    photography: boolean;
    recommendedTreatments: boolean;
    promotionalExpiry: boolean;
  };
  typedName: string;
  accepted: boolean;
  acceptedAt: string;
};

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
    referralSource?: {
      value: string;
      label: string;
      otherText?: string;
      referrerName?: string;
    };
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

  laserConsent?: LaserConsentSubmission;

  acknowledgement: {
    typedName: string;
    accepted: boolean;
    acceptedAt: string;
  };

  submittedAt: string;
};

function buildReferralSource(
  referral: ReferralSourceValue,
): ClientFormSubmission["client"]["referralSource"] {
  if (!referral.value) return undefined;

  const result: NonNullable<ClientFormSubmission["client"]["referralSource"]> =
    {
      value: referral.value,
      label: getReferralSourceLabel(referral.value),
    };
  if (referral.value === REFERRAL_OTHER_VALUE && referral.otherText.trim()) {
    result.otherText = referral.otherText.trim();
  }
  if (
    REFERRER_NAME_VALUES.includes(referral.value) &&
    referral.referrerName.trim()
  ) {
    result.referrerName = referral.referrerName.trim();
  }
  return result;
}

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
    referralSource: buildReferralSource(client.referralSource),
  };
}

/**
 * Builds the single typed submission object from current form state.
 * The timestamp is generated only at the moment of (mock) submission.
 */
export function buildClientFormSubmission(
  values: FormValues,
): ClientFormSubmission {
  const submittedAt = new Date().toISOString();

  const treatmentResponses: ClientFormSubmission["treatmentResponses"] = {};
  const consents: ClientFormSubmission["consents"] = {};
  let laserConsent: ClientFormSubmission["laserConsent"] | undefined;

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

    if (treatmentId === "laser-hair-removal") {
      const ack = consentState?.acknowledgements ?? {};
      laserConsent = {
        consentVersion: definition.consent.version,
        acknowledgements: {
          risks: ack.risks ?? false,
          individualResults: ack.individualResults ?? false,
          treatmentSeries: ack.treatmentSeries ?? false,
          naturePurpose: ack.naturePurpose ?? false,
          pregnancyAccutaneDevices: ack.pregnancyAccutaneDevices ?? false,
          cancellationPolicy: ack.cancellationPolicy ?? false,
          photography: ack.photography ?? false,
          recommendedTreatments: ack.recommendedTreatments ?? false,
          promotionalExpiry: ack.promotionalExpiry ?? false,
        },
        typedName: (consentState?.typedName ?? "").trim(),
        accepted: consentState?.accepted ?? false,
        acceptedAt: submittedAt,
      };
    }
  }

  return {
    formVersion: FORM_VERSION,
    selectedTreatments: values.selectedTreatments,
    client: buildClient(values.clientInfo),
    treatmentResponses,
    consents,
    laserConsent,
    acknowledgement: {
      typedName: values.acknowledgement.typedName.trim(),
      accepted: values.acknowledgement.accepted,
      acceptedAt: submittedAt,
    },
    submittedAt,
  };
}
