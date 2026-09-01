import type { TreatmentFormDefinition } from "../types";

// NOTE: The source "Personal Information" block
// (waver-forms/smooth-skin-niagara-oxygeneo-consent.md) also asks for
// Tel/Mobile/E-mail, names, middle name, date of birth, gender and a full
// address. Most of these are already collected once in the shared "Your
// Information" step (Name, E-mail, Phone, Address) and the user explicitly
// asked not to change that step. Only the OxyGeneo treatment-specific Health
// Questionnaire and Contraindications are implemented below to stay 100%
// faithful to the source waiver.
export const oxygeneo: TreatmentFormDefinition = {
  id: "oxygeneo",
  name: "OxyGeneo",
  shortDescription: "OxyGeneo treatment consultation and treatment intake.",
  version: "2026-09-01",
  sections: [
    {
      id: "oxygeneo-health-questionnaire",
      title: "Health Questionnaire",
      description:
        "Please describe below, or enter \u201cNone\u201d if not applicable.",
      questions: [
        {
          id: "oxygeneo_existing_recent_illness",
          type: "textarea",
          label: "Existing or recent illnesses",
          placeholder: "Describe, or enter \u201cNone\u201d.",
          required: true,
        },
        {
          id: "oxygeneo_hospitalization_surgery",
          type: "textarea",
          label: "Hospitalizations / Surgery",
          placeholder: "Describe, or enter \u201cNone\u201d.",
          required: true,
        },
        {
          id: "oxygeneo_medications",
          type: "textarea",
          label: "Medications",
          placeholder: "List medications, or enter \u201cNone\u201d.",
          required: true,
        },
        {
          id: "oxygeneo_medication_intolerance_allergies",
          type: "textarea",
          label:
            "Medication intolerance / Allergies (including to cosmetic products; also check list of OxyGeneo ingredients on the package)",
          placeholder: "Describe, or enter \u201cNone\u201d.",
          required: true,
        },
        {
          id: "oxygeneo_aesthetic_procedures_area",
          type: "textarea",
          label: "Aesthetic procedures in treatment area",
          placeholder: "Describe, or enter \u201cNone\u201d.",
          required: true,
        },
      ],
    },
    {
      id: "oxygeneo-contraindications",
      title: "Medical Conditions / Contraindications",
      description: "Please indicate if any of the following apply to you.",
      questions: [
        {
          id: "oxygeneo_contra_skin_cancer",
          type: "yesNo",
          label: "Current or history of skin cancer, or pre-malignant moles.",
          required: true,
        },
        {
          id: "oxygeneo_contra_pregnant_nursing",
          type: "yesNo",
          label: "Pregnant or nursing.",
          required: true,
        },
        {
          id: "oxygeneo_contra_active_skin_condition",
          type: "yesNo",
          label:
            "Any active skin condition in the treatment area, such as sores, eczema, rash, fragile, swollen, burnt or injured skin, active acne, rosacea, dermatitis, psoriasis, or active Herpes Simplex.",
          required: true,
        },
        {
          id: "oxygeneo_contra_fresh_tan",
          type: "yesNo",
          label: "Excessive fresh skin tan (within the last few days).",
          required: true,
        },
        {
          id: "oxygeneo_contra_vascular_disorders",
          type: "yesNo",
          label: "Vascular disorders.",
          required: true,
        },
        {
          id: "oxygeneo_contra_severe_concurrent_disease",
          type: "yesNo",
          label:
            "Severe concurrent disease such as: un-controlled diabetes, nervous diseases, cardiac disorder and cancer.",
          required: true,
        },
        {
          id: "oxygeneo_contra_recent_procedure_accutane",
          type: "yesNo",
          label:
            "Any aesthetic procedure done recently within applied area or recent use of products such as Accutane or Retin A.",
          required: true,
        },
        {
          id: "oxygeneo_contra_allergies_hives",
          type: "yesNo",
          label:
            "Known allergies to cosmetic or other products or experienced severe allergic reactions like hives.",
          required: true,
        },
      ],
    },
  ],
  consent: {
    treatmentId: "oxygeneo",
    title: "OxyGeneo Treatment Consent",
    version: "oxygeneo-consent-2026-09-01",
    status: "approved",
    acceptanceLabel:
      "I confirm that I have read and understand the above information and consented to the treatment out of my own free will.",
    content: [
      {
        kind: "notice",
        text: "Client Declaration",
      },
      {
        kind: "paragraph",
        text: "I, the undersigned, pledge to inform of all changes in my physical condition.",
      },
      {
        kind: "paragraph",
        text: "I agree to undergo the treatment, as detailed below in this document. I was explained to and understood the results, the chances and the course of the treatment.",
      },
      {
        kind: "paragraph",
        text: "I confirm that I do not suffer from any of the above described conditions.",
      },
      {
        kind: "paragraph",
        text: "I have had the opportunity to consider the following information, ask questions and have had these answered satisfactorily by Ashley Wojnowski Custom Lash Lounge Inc. (Physician/ therapist/practitioner).",
      },
      {
        kind: "notice",
        text: "OxyGeneo Treatment",
      },
      {
        kind: "bullets",
        items: [
          "You are being treated with the Geneo+ platform for anti-aging and/or skin lightening treatments. The platform works with OxyGeneo Technology.",
          "Special gel will be applied on your face and the treatment will be performed using an applicator with a special capsule attached to it.",
          "During the treatment the reaction between the capsule and the gel will cause the infusion of the active ingredients.",
          "The treatment is none invasive, pleasant and does not require down time.",
        ],
      },
      {
        kind: "paragraph",
        text: "I understand that receiving the course of treatment is my choice.",
      },
      {
        kind: "notice",
        text: "Possible Side Effects",
      },
      {
        kind: "paragraph",
        text: "I was told about the possible side effects of the treatment including: excessive redness or swelling, itching, irritated skin, scratches, visible capillaries, sensitivity to touch, change of pigmentation, chance of transient skin break out such as pimples, allergic reaction. Although these effects are rare and expected to be temporary, any adverse reaction should be reported immediately.",
      },
      {
        kind: "notice",
        text: "Photography / Results Permission",
      },
      {
        kind: "paragraph",
        text: "I hereby approve use of the photos and results for scientific publications and marketing material (such as brochures, website, and presentations).",
      },
      {
        kind: "paragraph",
        text: "These publications should be done while maintaining my privacy and identification.",
      },
      {
        kind: "notice",
        text: "Final Consent",
      },
    ],
  },
};
