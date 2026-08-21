import type { TreatmentFormDefinition } from "../types";

export const lashLiftTint: TreatmentFormDefinition = {
  id: "lash-lift-tint",
  name: "Lash Lift & Tint",
  shortDescription: "Lash Lift & Tint client intake.",
  version: "2026-08-21",
  sections: [
    {
      id: "lash-health-treatment",
      title: "Health & Treatment Information",
      questions: [
        {
          id: "lash_thyroid",
          type: "yesNo",
          label: "Do you have Hyperthyroidism or Hypothyroidism?",
          required: true,
          followUp: {
            id: "lash_thyroid_details",
            type: "textarea",
            label: "Please provide details.",
            required: true,
            showWhen: { questionId: "lash_thyroid", equals: true },
          },
        },
        {
          id: "lash_latex_acrylic_allergy",
          type: "yesNo",
          label: "Do you have an allergy to latex or acrylic nails?",
          required: true,
          followUp: {
            id: "lash_latex_acrylic_allergy_details",
            type: "textarea",
            label: "Please provide details.",
            required: true,
            showWhen: {
              questionId: "lash_latex_acrylic_allergy",
              equals: true,
            },
          },
        },
        {
          id: "lash_asthma",
          type: "yesNo",
          label: "Do you have asthma?",
          required: true,
        },
        {
          id: "lash_recent_chemotherapy",
          type: "yesNo",
          label: "Have you received chemotherapy within the last 6 months?",
          required: true,
        },
        {
          id: "lash_claustrophobia",
          type: "yesNo",
          label: "Do you experience claustrophobia?",
          required: true,
        },
        {
          id: "lash_light_sensitive",
          type: "yesNo",
          label: "Are you sensitive to light?",
          required: true,
        },
        {
          id: "lash_smoker",
          type: "yesNo",
          label: "Do you smoke?",
          required: true,
        },
        {
          id: "lash_eye_disorders",
          type: "yesNo",
          label: "Do you have any eye disorders?",
          required: true,
          followUp: {
            id: "lash_eye_disorders_details",
            type: "textarea",
            label: "Please provide details.",
            required: true,
            showWhen: { questionId: "lash_eye_disorders", equals: true },
          },
        },
        {
          id: "lash_contact_lenses",
          type: "yesNo",
          label: "Do you wear contact lenses?",
          helperText: "Contact lenses must be removed for treatment.",
          required: true,
        },
        {
          id: "lash_back_pain",
          type: "yesNo",
          label: "Do you experience back pain?",
          required: true,
        },
        {
          id: "lash_pregnant",
          type: "yesNo",
          label: "Are you pregnant?",
          required: true,
        },
        {
          id: "lash_birth_control",
          type: "yesNo",
          label: "Are you currently taking birth control?",
          required: true,
        },
        {
          id: "lash_oily_skin_hair",
          type: "yesNo",
          label: "Do you have oily skin and/or hair?",
          required: true,
        },
        {
          id: "lash_vitamin_serums",
          type: "yesNo",
          label: "Do you use Vitamin E or Vitamin C face/eye serums?",
          required: true,
        },
        {
          id: "lash_exercise",
          type: "yesNo",
          label: "Do you exercise?",
          required: true,
        },
      ],
    },
    {
      id: "lash-lifestyle-history",
      title: "Lifestyle & Lash History",
      questions: [
        {
          id: "lash_sleep_position",
          type: "singleSelect",
          label: "What side do you usually sleep on?",
          required: true,
          options: [
            { value: "left", label: "Left" },
            { value: "right", label: "Right" },
            { value: "stomach", label: "Stomach" },
            { value: "back", label: "Back" },
          ],
        },
        {
          id: "lash_tanning",
          type: "yesNo",
          label: "Do you use tanning beds or spray tan often?",
          required: true,
        },
        {
          id: "lash_previous_extensions",
          type: "yesNo",
          label: "Have you worn eyelash extensions before?",
          required: true,
          followUp: {
            id: "lash_previous_extensions_experience",
            type: "textarea",
            label: "How was your experience?",
            required: true,
            showWhen: {
              questionId: "lash_previous_extensions",
              equals: true,
            },
          },
        },
        {
          id: "lash_other_sensitivities",
          type: "yesNo",
          label: "Do you have any other sensitivities?",
          required: true,
          followUp: {
            id: "lash_other_sensitivities_details",
            type: "textarea",
            label: "Please provide details.",
            required: true,
            showWhen: {
              questionId: "lash_other_sensitivities",
              equals: true,
            },
          },
        },
        {
          id: "lash_medications_vitamins",
          type: "textarea",
          label:
            "Additional notes \u2014 please list any medications or vitamins you are taking.",
          required: false,
        },
      ],
    },
    {
      id: "lash-photo-permissions",
      title: "Photo Permissions",
      description:
        "These are separate permissions. Answering \u201cNo\u201d to either does not affect your ability to complete this treatment.",
      questions: [
        {
          id: "lash_photo_permission",
          type: "yesNo",
          label: "Do you allow before-and-after photos to be taken?",
          required: true,
        },
        {
          id: "lash_marketing_photo_permission",
          type: "yesNo",
          label:
            "Do you allow before-and-after photos of your eyes to be shared for social media and marketing purposes?",
          required: true,
        },
      ],
    },
  ],
  consent: {
    treatmentId: "lash-lift-tint",
    title: "Lash Lift & Tint Consent",
    version: "pending-1",
    status: "pending-clinic-content",
    acceptanceLabel:
      "I have read and agree to the Lash Lift & Tint Consent above.",
    content: [
      {
        kind: "notice",
        text: "Clinic-approved Lash Lift & Tint consent and waiver wording will appear here before production launch. This placeholder is not a legally valid waiver.",
      },
      {
        kind: "paragraph",
        text: "This section is reserved for the complete Lash Lift & Tint treatment consent, once the full legal text is supplied by Smooth Skin Niagara.",
      },
      {
        kind: "clauses",
        items: [
          "Placeholder acknowledgement clause 1 \u2014 to be replaced with clinic-approved wording.",
          "Placeholder acknowledgement clause 2 \u2014 to be replaced with clinic-approved wording.",
        ],
      },
    ],
  },
};
