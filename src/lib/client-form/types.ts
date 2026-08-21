// Core schema-driven types for the dynamic client intake form engine.
// These types describe form STRUCTURE/CONFIGURATION only. They are kept
// separate from rendering (see components/client-form) and validation
// (see lib/client-form/validation.ts).

export type QuestionType =
  | "text"
  | "email"
  | "phone"
  | "number"
  | "textarea"
  | "yesNo"
  | "singleSelect"
  | "checkbox"
  | "acknowledgement"
  | "consentPlaceholder";

/** A condition that determines whether a question should be shown. */
export type ShowWhen = {
  questionId: string;
  equals: boolean | string | number;
};

export type SelectOption = {
  value: string;
  label: string;
};

export type FormQuestion = {
  /** Stable, machine-friendly identifier. Never derived from label text. */
  id: string;
  type: QuestionType;
  label: string;
  description?: string;
  required?: boolean;
  options?: SelectOption[];
  placeholder?: string;
  /** Optional helper/example text rendered subtly below the field. */
  helperText?: string;
  /** Show this question only when the referenced question's answer matches. */
  showWhen?: ShowWhen;
  /** A follow-up question rendered indented directly beneath this one. */
  followUp?: FormQuestion;
};

export type FormSection = {
  id: string;
  title: string;
  description?: string;
  questions: FormQuestion[];
};

export type ConsentContentBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "notice"; text: string }
  | { kind: "clauses"; items: string[] }
  | { kind: "bullets"; items: string[] };

export type ConsentStatus = "pending-clinic-content" | "approved";

export type ConsentDefinition = {
  treatmentId: string;
  title: string;
  version: string;
  status: ConsentStatus;
  content: ConsentContentBlock[];
  /** Label for the required acceptance checkbox on the consent step. */
  acceptanceLabel: string;
};

export type TreatmentFormDefinition = {
  id: string;
  name: string;
  shortDescription: string;
  version: string;
  sections: FormSection[];
  consent: ConsentDefinition;
};
