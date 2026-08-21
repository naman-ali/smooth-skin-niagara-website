import type { SelectOption, TreatmentFormDefinition } from "../types";

const LASER_TREATMENT_AREA_OPTIONS: SelectOption[] = [
  { value: "face", label: "Face" },
  { value: "upper_lip", label: "Upper Lip" },
  { value: "chin", label: "Chin" },
  { value: "neck", label: "Neck" },
  { value: "underarms", label: "Underarms" },
  { value: "arms", label: "Arms" },
  { value: "bikini", label: "Bikini" },
  { value: "brazilian", label: "Brazilian" },
  { value: "legs", label: "Legs" },
  { value: "back", label: "Back" },
  { value: "chest", label: "Chest" },
  { value: "abdomen", label: "Abdomen" },
];

export const laserHairRemoval: TreatmentFormDefinition = {
  id: "laser-hair-removal",
  name: "Laser Hair Removal",
  shortDescription: "Laser hair removal consultation and treatment intake.",
  version: "2026-08-21",
  sections: [
    {
      id: "laser-medical-history",
      title: "Medical History",
      description:
        "Please answer the following questions carefully so we can determine whether your treatment can be performed safely.",
      questions: [
        {
          id: "laser_cancer_history",
          type: "yesNo",
          label:
            "Do you currently have, or have you previously had, cancer \u2014 especially malignant melanoma, recurrent non-melanoma skin cancer, or pre-cancerous lesions?",
          required: true,
          followUp: {
            id: "laser_cancer_history_details",
            type: "textarea",
            label: "Please provide details.",
            required: true,
            showWhen: { questionId: "laser_cancer_history", equals: true },
          },
        },
        {
          id: "laser_active_infection",
          type: "yesNo",
          label: "Do you currently have an active infection?",
          required: true,
          followUp: {
            id: "laser_active_infection_details",
            type: "textarea",
            label: "Please provide details.",
            required: true,
            showWhen: { questionId: "laser_active_infection", equals: true },
          },
        },
        {
          id: "laser_light_sensitive_condition",
          type: "yesNo",
          label:
            "Do you have a condition that may be stimulated by light, such as recurrent Herpes Simplex, Systemic Lupus Erythematosus, or Porphyria?",
          required: true,
          followUp: {
            id: "laser_light_sensitive_condition_details",
            type: "textarea",
            label: "Please provide details.",
            required: true,
            showWhen: {
              questionId: "laser_light_sensitive_condition",
              equals: true,
            },
          },
        },
        {
          id: "laser_photosensitive_medication",
          type: "yesNo",
          label:
            "Do you use photosensitive medication or herbs that may cause sensitivity to light exposure, such as Isotretinoin, tetracycline, or St. John's Wort?",
          required: true,
          followUp: {
            id: "laser_photosensitive_medication_details",
            type: "textarea",
            label: "Please list them.",
            required: true,
            showWhen: {
              questionId: "laser_photosensitive_medication",
              equals: true,
            },
          },
        },
        {
          id: "laser_immunosuppression",
          type: "yesNo",
          label:
            "Do you have an immunosuppressive condition or use immunosuppressive medication?",
          description:
            "The existing clinic form includes conditions such as AIDS/HIV infection in this question.",
          required: true,
          followUp: {
            id: "laser_immunosuppression_details",
            type: "textarea",
            label: "Please provide details.",
            required: true,
            showWhen: { questionId: "laser_immunosuppression", equals: true },
          },
        },
        {
          id: "laser_hormonal_disorder",
          type: "yesNo",
          label:
            "Do you have a history of hormonal or endocrine disorders, such as polycystic ovary syndrome (PCOS)?",
          required: true,
          followUp: {
            id: "laser_hormonal_disorder_details",
            type: "textarea",
            label: "Please provide details.",
            required: true,
            showWhen: { questionId: "laser_hormonal_disorder", equals: true },
          },
        },
        {
          id: "laser_diabetes",
          type: "yesNo",
          label: "Do you have diabetes?",
          required: true,
          followUp: {
            id: "laser_diabetes_controlled",
            type: "yesNo",
            label: "Is your diabetes currently under control?",
            required: true,
            showWhen: { questionId: "laser_diabetes", equals: true },
          },
        },
        {
          id: "laser_bleeding_disorder",
          type: "yesNo",
          label:
            "Do you have a history of bleeding/coagulation disorders, or do you use anticoagulants?",
          required: true,
          followUp: {
            id: "laser_bleeding_disorder_details",
            type: "textarea",
            label: "Please provide details.",
            required: true,
            showWhen: { questionId: "laser_bleeding_disorder", equals: true },
          },
        },
        {
          id: "laser_keloid_scarring",
          type: "yesNo",
          label: "Do you have a history of keloid scarring?",
          required: true,
        },
        {
          id: "laser_very_dry_skin",
          type: "yesNo",
          label: "Do you have very dry skin?",
          required: true,
        },
        {
          id: "laser_recent_sun_exposure",
          type: "yesNo",
          label:
            "Have you had significant sun exposure or artificial tanning during the 3\u20134 weeks before treatment?",
          required: true,
          followUp: {
            id: "laser_recent_sun_exposure_details",
            type: "textarea",
            label: "Please provide details.",
            required: true,
            showWhen: {
              questionId: "laser_recent_sun_exposure",
              equals: true,
            },
          },
        },
        {
          id: "laser_pregnant",
          type: "yesNo",
          label: "Are you pregnant?",
          required: true,
        },
      ],
    },
    {
      id: "laser-medications",
      title: "Medications & Other Information",
      questions: [
        {
          id: "laser_medications",
          type: "textarea",
          label:
            "What medications are you currently taking, including aspirin?",
          placeholder: "List medications, or enter \u201cNone\u201d.",
          required: true,
        },
        {
          id: "laser_alcohol_consumption",
          type: "singleSelectWithOther",
          label: "How often do you consume alcohol?",
          required: true,
          options: [
            { value: "never", label: "Never" },
            { value: "occasionally", label: "Occasionally" },
            { value: "1_2_per_week", label: "1\u20132 times per week" },
            { value: "3_5_per_week", label: "3\u20135 times per week" },
            { value: "daily", label: "Daily" },
          ],
          allowOther: true,
          otherFieldLabel: "Please describe.",
        },
        {
          id: "laser_allergies",
          type: "yesNo",
          label: "Do you have any allergies?",
          required: true,
          followUp: {
            id: "laser_allergies_details",
            type: "textarea",
            label: "Please list your allergies.",
            required: true,
            showWhen: { questionId: "laser_allergies", equals: true },
          },
        },
        {
          id: "laser_herbal_preparations",
          type: "yesNo",
          label:
            "Are you currently taking any herbal preparations, such as St. John's Wort?",
          required: true,
          followUp: {
            id: "laser_herbal_preparations_details",
            type: "textarea",
            label: "Please list them.",
            required: true,
            showWhen: {
              questionId: "laser_herbal_preparations",
              equals: true,
            },
          },
        },
        {
          id: "laser_contact_lenses",
          type: "yesNo",
          label: "Do you wear contact lenses?",
          required: true,
        },
      ],
    },
    {
      id: "laser-skin-treatment-details",
      title: "Skin & Treatment Details",
      questions: [
        {
          id: "laser_ancestral_background",
          type: "text",
          label:
            "What is your ethnic/ancestral background on both parents' sides?",
          required: true,
        },
        {
          id: "laser_sun_response",
          type: "singleSelectWithOther",
          label:
            "What happens to your skin when exposed to the sun without protection?",
          required: true,
          options: [
            {
              value: "burns_very_easily_no_tan",
              label: "Burns very easily and does not tan",
            },
            {
              value: "burns_easily_tans_minimally",
              label: "Burns easily and tans minimally",
            },
            {
              value: "sometimes_burns_gradually_tans",
              label: "Sometimes burns and gradually tans",
            },
            {
              value: "rarely_burns_tans_easily",
              label: "Rarely burns and tans easily",
            },
            {
              value: "very_rarely_never_burns_tans_very_easily",
              label: "Very rarely/never burns and tans very easily",
            },
          ],
          allowOther: true,
          otherFieldLabel: "Please describe how your skin responds to the sun.",
        },
        {
          id: "laser_last_sun_exposure",
          type: "singleSelectWithOther",
          label:
            "When were you last exposed to the sun for a long period, including a tanning booth?",
          required: true,
          options: [
            { value: "within_last_week", label: "Within the last week" },
            { value: "1_2_weeks_ago", label: "1\u20132 weeks ago" },
            { value: "3_4_weeks_ago", label: "3\u20134 weeks ago" },
            { value: "1_3_months_ago", label: "1\u20133 months ago" },
            {
              value: "more_than_3_months_ago",
              label: "More than 3 months ago",
            },
            { value: "dont_remember", label: "I don't remember" },
          ],
          allowOther: true,
          otherFieldLabel: "Please specify approximately when.",
        },
        {
          id: "laser_chemical_tanning",
          type: "yesNo",
          label: "Do you use chemical sun tanning lotions?",
          required: true,
        },
        {
          id: "laser_upcoming_sun_holiday",
          type: "yesNo",
          label: "Are you planning a holiday in the sun soon?",
          required: true,
          followUp: {
            id: "laser_upcoming_sun_holiday_details",
            type: "textarea",
            label: "Please provide details.",
            required: true,
            showWhen: {
              questionId: "laser_upcoming_sun_holiday",
              equals: true,
            },
          },
        },
        {
          id: "laser_treatment_area",
          type: "multiSelectWithOther",
          label: "What area or areas would you like treated?",
          required: true,
          options: LASER_TREATMENT_AREA_OPTIONS,
          allowOther: true,
          otherFieldLabel: "Please specify treatment area(s).",
        },
        {
          id: "laser_previous_treatment",
          type: "yesNo",
          label:
            "Have you previously had laser or light-based hair removal treatment in these areas?",
          required: true,
          followUp: {
            id: "laser_previous_treatment_areas",
            type: "multiSelectWithOther",
            label: "Which area(s) were previously treated?",
            required: true,
            options: LASER_TREATMENT_AREA_OPTIONS,
            allowOther: true,
            otherFieldLabel: "Please specify treatment area(s).",
            showWhen: {
              questionId: "laser_previous_treatment",
              equals: true,
            },
            followUp: {
              id: "laser_previous_treatment_details",
              type: "textarea",
              label:
                "Is there anything else you'd like us to know about your previous treatment?",
              required: false,
            },
          },
        },
      ],
    },
  ],
  consent: {
    treatmentId: "laser-hair-removal",
    title: "Laser Hair Removal Consent & Waiver",
    version: "pending-1",
    status: "pending-clinic-content",
    acceptanceLabel:
      "I have read and agree to the Laser Hair Removal Consent & Waiver above.",
    content: [
      {
        kind: "notice",
        text: "Clinic-approved Laser Hair Removal consent and waiver wording will appear here before production launch. This placeholder is not a legally valid waiver.",
      },
      {
        kind: "paragraph",
        text: "This section is reserved for the complete Informed Consent \u2014 Soprano Lite Laser Hair Removal System \u2014 Client Profile/Consent/Waiver & Release, once the full legal text is supplied by Smooth Skin Niagara.",
      },
      {
        kind: "clauses",
        items: [
          "Placeholder acknowledgement clause 1 \u2014 to be replaced with clinic-approved wording.",
          "Placeholder acknowledgement clause 2 \u2014 to be replaced with clinic-approved wording.",
          "Placeholder acknowledgement clause 3 \u2014 to be replaced with clinic-approved wording.",
        ],
      },
      {
        kind: "bullets",
        items: [
          "Risks and side effects (pending clinic content)",
          "Pre- and post-treatment care (pending clinic content)",
          "Release and waiver terms (pending clinic content)",
        ],
      },
    ],
  },
};
