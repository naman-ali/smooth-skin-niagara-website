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
import { isMinorAge } from "./guardian";

type LaserConsentSubmission = {
  consentVersion: string;
  acknowledgements: {
    risks: boolean;
    individualResults: boolean;
    treatmentSeries: boolean;
    naturePurpose: boolean;
    pregnancyAccutaneDevices: boolean;
    cancellationPolicy: boolean;
    recommendedTreatments: boolean;
    promotionalExpiry: boolean;
  };
  /** Explicit Yes/No answer to the photography permission clause. */
  photoConsent: boolean | null;
  /** The single, form-wide typed legal name used as the digital signature. */
  typedName: string;
  accepted: boolean;
  acceptedAt: string;
};

type GuardianSubmission = {
  required: boolean;
  fullName: string;
  accepted: boolean;
  acceptedAt: string;
} | null;

export type ClientFormSubmission = {
  formVersion: string;
  selectedTreatments: string[];

  client: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address?: {
      street: string;
      city: string;
      province: string;
      postalCode: string;
    };
    age?: number;
    emergencyContact?: string;
    referralSource?: {
      value: string;
      label: string;
      otherText?: string;
      referrerName?: string;
    };
  };

  sharedAnswers: Record<string, unknown>;

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

  guardian: GuardianSubmission;

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

function buildClient(
  client: ClientInfoValues,
  selectedTreatments: string[],
): ClientFormSubmission["client"] {
  const parsedAge = client.age?.trim() ? Number(client.age) : undefined;
  const laserSelected = selectedTreatments.includes("laser-hair-removal");
  const eyelashSelected = selectedTreatments.includes("eyelash-extensions");
  return {
    firstName: client.firstName.trim(),
    lastName: client.lastName.trim(),
    email: client.email.trim(),
    phone: client.phone.trim(),
    address: laserSelected
      ? {
          street: client.street.trim(),
          city: client.city.trim(),
          province: client.province.trim(),
          postalCode: client.postalCode.trim(),
        }
      : undefined,
    age: Number.isFinite(parsedAge) ? parsedAge : undefined,
    emergencyContact: eyelashSelected
      ? client.emergencyContact.trim() || undefined
      : undefined,
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

    // Laser Hair Removal no longer collects its own typed name/accept
    // checkbox (see LaserConsentSection) — the single Final Acknowledgement
    // below is the one digital signature that covers every selected
    // treatment's consent, so it is used as the source of truth here too.
    const isLaser = treatmentId === "laser-hair-removal";
    const accepted = isLaser
      ? values.acknowledgement.accepted
      : (consentState?.accepted ?? false);

    consents[treatmentId] = {
      consentVersion: definition.consent.version,
      consentStatus: definition.consent.status,
      accepted,
    };

    if (isLaser) {
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
          recommendedTreatments: ack.recommendedTreatments ?? false,
          promotionalExpiry: ack.promotionalExpiry ?? false,
        },
        photoConsent: consentState?.photoConsent ?? null,
        typedName: values.acknowledgement.typedName.trim(),
        accepted,
        acceptedAt: submittedAt,
      };
    }
  }

  const guardian: GuardianSubmission = isMinorAge(values.clientInfo.age)
    ? {
        required: true,
        fullName: values.guardian.fullName.trim(),
        accepted: values.guardian.accepted,
        acceptedAt: submittedAt,
      }
    : null;

  return {
    formVersion: FORM_VERSION,
    selectedTreatments: values.selectedTreatments,
    client: buildClient(values.clientInfo, values.selectedTreatments),
    sharedAnswers: values.sharedAnswers ?? {},
    treatmentResponses,
    consents,
    laserConsent,
    guardian,
    acknowledgement: {
      typedName: values.acknowledgement.typedName.trim(),
      accepted: values.acknowledgement.accepted,
      acceptedAt: submittedAt,
    },
    submittedAt,
  };
}
