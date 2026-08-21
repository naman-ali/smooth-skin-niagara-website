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
  referralSource: ReferralSourceValue;
};

/** Answers for a single treatment, keyed by stable question id. */
export type TreatmentAnswers = Record<string, unknown>;

export type ConsentValue = {
  accepted: boolean;
};

export type AcknowledgementValues = {
  typedName: string;
  accepted: boolean;
};

export type FormValues = {
  selectedTreatments: string[];
  clientInfo: ClientInfoValues;
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
  referralSource: { value: "", otherText: "", referrerName: "" },
};

export const DEFAULT_FORM_VALUES: FormValues = {
  selectedTreatments: [],
  clientInfo: { ...EMPTY_CLIENT_INFO },
  treatmentAnswers: {},
  consents: {},
  acknowledgement: {
    typedName: "",
    accepted: false,
  },
};
