// The single react-hook-form value tree used across the entire wizard.
// Keeping one flat-ish form instance (instead of one per step) lets the
// wizard validate only the fields relevant to the current step while
// preserving every other answer when navigating Back/Continue/Edit.

export type ReferralSourceValue = {
  value: string;
  otherText: string;
  referrerName: string;
};

export type ClientInfoValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  province: string;
  postalCode: string;
  age: string;
  emergencyContact: string;
  referralSource: ReferralSourceValue;
};

/** Answers for a single treatment, keyed by stable question id. */
export type TreatmentAnswers = Record<string, unknown>;

export type LaserConsentAcknowledgements = {
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

export type ConsentValue = {
  accepted: boolean;
  /** Detailed acknowledgements for Laser Hair Removal consent. */
  acknowledgements?: Partial<LaserConsentAcknowledgements>;
  /** Name typed for Laser Hair Removal consent final acceptance. */
  typedName?: string;
  /** Timestamp generated on submission. */
  acceptedAt?: string;
};

export type AcknowledgementValues = {
  typedName: string;
  accepted: boolean;
};

export type FormValues = {
  selectedTreatments: string[];
  clientInfo: ClientInfoValues;
  sharedAnswers: Record<string, unknown>;
  treatmentAnswers: Record<string, TreatmentAnswers>;
  consents: Record<string, ConsentValue>;
  acknowledgement: AcknowledgementValues;
};

export const EMPTY_CLIENT_INFO: ClientInfoValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  province: "",
  postalCode: "",
  age: "",
  emergencyContact: "",
  referralSource: { value: "", otherText: "", referrerName: "" },
};

export const DEFAULT_FORM_VALUES: FormValues = {
  selectedTreatments: [],
  clientInfo: { ...EMPTY_CLIENT_INFO },
  sharedAnswers: {},
  treatmentAnswers: {},
  consents: {
    "laser-hair-removal": {
      accepted: false,
      acknowledgements: {
        risks: false,
        individualResults: false,
        treatmentSeries: false,
        naturePurpose: false,
        pregnancyAccutaneDevices: false,
        cancellationPolicy: false,
        photography: false,
        recommendedTreatments: false,
        promotionalExpiry: false,
      },
      typedName: "",
    },
  },
  acknowledgement: {
    typedName: "",
    accepted: false,
  },
};
