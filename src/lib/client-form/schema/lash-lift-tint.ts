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
          type: "singleSelectWithOther",
          label: "How often do you exercise?",
          required: true,
          options: [
            { value: "never_rarely", label: "Never / Rarely" },
            { value: "occasionally", label: "Occasionally" },
            { value: "few_times_per_week", label: "A few times per week" },
            { value: "most_days", label: "Most days" },
          ],
          allowOther: true,
          otherFieldLabel: "Please specify.",
        },
      ],
    },
    {
      id: "lash-lifestyle-history",
      title: "Lifestyle & Lash History",
      questions: [
        {
          id: "lash_sleep_position",
          type: "singleSelectWithOther",
          label: "What position do you usually sleep in?",
          required: true,
          options: [
            { value: "left", label: "Left side" },
            { value: "right", label: "Right side" },
            { value: "stomach", label: "Stomach" },
            { value: "back", label: "Back" },
            { value: "change_positions", label: "I change positions" },
          ],
          allowOther: true,
          otherFieldLabel: "Please specify.",
        },
        {
          id: "lash_tanning",
          type: "multiSelectWithOther",
          label: "Do you use any of the following?",
          required: true,
          options: [
            { value: "tanning_bed", label: "Tanning bed" },
            { value: "spray_tan", label: "Spray tan" },
            { value: "self_tanning_products", label: "Self-tanning products" },
            { value: "none", label: "None" },
          ],
          exclusiveOptions: ["none"],
          allowOther: true,
          otherFieldLabel: "Please specify.",
        },
        {
          id: "lash_previous_extensions",
          type: "yesNo",
          label: "Have you worn eyelash extensions before?",
          required: true,
          followUp: {
            id: "lash_previous_extensions_experience",
            type: "multiSelectWithOther",
            label: "How was your previous experience?",
            required: true,
            options: [
              { value: "good", label: "Good" },
              { value: "okay", label: "Okay" },
              { value: "poor", label: "Poor" },
              {
                value: "irritation_sensitivity",
                label: "Had irritation or sensitivity",
              },
              { value: "retention_issues", label: "Had retention issues" },
            ],
            allowOther: true,
            otherFieldLabel: "Please describe.",
            showWhen: {
              questionId: "lash_previous_extensions",
              equals: true,
            },
            followUp: {
              id: "lash_previous_extensions_notes",
              type: "textarea",
              label: "Anything else you'd like us to know?",
              required: false,
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
            type: "multiSelectWithOther",
            label: "Please select what applies.",
            required: true,
            options: [
              { value: "sensitive_skin", label: "Sensitive skin" },
              { value: "sensitive_eyes", label: "Sensitive eyes" },
              { value: "adhesive_sensitivity", label: "Adhesive sensitivity" },
              {
                value: "fragrance_sensitivity",
                label: "Fragrance sensitivity",
              },
              {
                value: "skin_product_sensitivity",
                label: "Skin-product sensitivity",
              },
            ],
            allowOther: true,
            otherFieldLabel: "Please describe your sensitivity.",
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
