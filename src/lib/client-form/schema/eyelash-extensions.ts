import type { SelectOption, TreatmentFormDefinition } from "../types";

const EYELASH_SLEEP_POSITION_OPTIONS: SelectOption[] = [
  { value: "left", label: "Left" },
  { value: "right", label: "Right" },
  { value: "stomach", label: "Stomach" },
  { value: "back", label: "Back" },
];

export const eyelashExtensions: TreatmentFormDefinition = {
  id: "eyelash-extensions",
  name: "Eyelash Extensions",
  shortDescription: "Eyelash extension intake and consent.",
  version: "2026-08-31",
  sections: [
    {
      id: "eyelash-health-info",
      title: "Health & Lash Information",
      questions: [
        {
          id: "eyelash_thyroid",
          type: "yesNo",
          label: "Do you have Hyperthyroidism or Hypothyroidism?",
          required: true,
        },
        {
          id: "eyelash_latex_allergy",
          type: "yesNo",
          label: "Do you have an allergy to latex?",
          required: true,
        },
        {
          id: "eyelash_acrylic_nail_polish_allergy",
          type: "yesNo",
          label: "Do you have an allergy to acrylic nails or nail polish?",
          required: true,
        },
        {
          id: "eyelash_asthma",
          type: "yesNo",
          label: "Do you have asthma?",
          required: true,
        },
        {
          id: "eyelash_recent_chemotherapy",
          type: "yesNo",
          label: "Have you received chemotherapy within the last 6 months?",
          required: true,
        },
        {
          id: "eyelash_claustrophobia",
          type: "yesNo",
          label: "Do you experience claustrophobia?",
          required: true,
        },
        {
          id: "eyelash_light_sensitive",
          type: "yesNo",
          label: "Are you sensitive to light?",
          required: true,
        },
        {
          id: "eyelash_smoker",
          type: "yesNo",
          label: "Do you smoke?",
          required: true,
        },
        {
          id: "eyelash_eye_disorders",
          type: "yesNo",
          label: "Do you have any eye disorders?",
          required: true,
          followUp: {
            id: "eyelash_eye_disorders_details",
            type: "textarea",
            label: "Please provide details.",
            required: true,
            showWhen: { questionId: "eyelash_eye_disorders", equals: true },
          },
        },
        {
          id: "eyelash_back_pain",
          type: "yesNo",
          label: "Do you experience back pain?",
          required: true,
        },
        {
          id: "eyelash_birth_control",
          type: "yesNo",
          label: "Are you currently taking birth control?",
          required: true,
        },
        {
          id: "eyelash_oily_skin_hair",
          type: "yesNo",
          label: "Do you have oily skin and/or hair?",
          required: true,
        },
        {
          id: "eyelash_vitamin_serums",
          type: "yesNo",
          label: "Do you use Vitamin E or Vitamin C face/eye serums?",
          required: true,
        },
        {
          id: "eyelash_face_wash",
          type: "text",
          label: "What face wash do you use?",
          required: false,
        },
        {
          id: "eyelash_exercise",
          type: "yesNo",
          label: "Do you exercise?",
          required: true,
        },
      ],
    },
    {
      id: "eyelash-lifestyle-history",
      title: "Lifestyle & Lash History",
      questions: [
        {
          id: "eyelash_sleep_position",
          type: "singleSelect",
          label: "What side do you sleep on?",
          required: true,
          options: EYELASH_SLEEP_POSITION_OPTIONS,
        },
        {
          id: "eyelash_tanning",
          type: "yesNo",
          label: "Do you use tanning beds or spray tan often?",
          required: true,
        },
        {
          id: "eyelash_previous_extensions",
          type: "yesNo",
          label: "Have you worn eyelash extensions before?",
          required: true,
          followUp: {
            id: "eyelash_previous_extensions_notes",
            type: "textarea",
            label: "Please tell us about your previous experience.",
            required: false,
            showWhen: {
              questionId: "eyelash_previous_extensions",
              equals: true,
            },
          },
        },
        {
          id: "eyelash_other_sensitivities",
          type: "yesNo",
          label: "Do you have any other sensitivities?",
          required: true,
          followUp: {
            id: "eyelash_other_sensitivities_details",
            type: "textarea",
            label: "Please describe your sensitivity.",
            required: true,
            showWhen: {
              questionId: "eyelash_other_sensitivities",
              equals: true,
            },
          },
        },
        {
          id: "eyelash_additional_notes",
          type: "textarea",
          label:
            "Additional notes — list any medications or vitamins you are taking.",
          required: false,
        },
      ],
    },
    {
      id: "eyelash-photo-permission",
      title: "Photo & Marketing Release",
      description:
        "This is optional. Answering no does not affect your treatment.",
      questions: [
        {
          id: "eyelash_photo_permission",
          type: "checkbox",
          label:
            "I give permission for Custom Lounge Inc. to take before and after photos of my eyelashes and use them for marketing, promotional, or before and after educational purposes. I understand my identity will not be revealed without my permission.",
          required: false,
        },
      ],
    },
  ],
  consent: {
    treatmentId: "eyelash-extensions",
    title: "Eyelash Extensions Waiver & Release",
    version: "eyelash-waiver-2026-08-31",
    status: "approved",
    acceptanceLabel:
      "I certify that I have read this waiver form thoroughly and fully understand its content. I voluntarily agree to the terms and conditions set forth above.",
    content: [
      {
        kind: "notice",
        text: "Custom Lounge Inc. – Ashley Wojnowski",
      },
      {
        kind: "paragraph",
        text: "I hereby give my consent to receive eyelash extension services by a trained technician at Custom Lounge Inc., under the supervision of Ashley Wojnowski. I understand that eyelash extensions involve the use of adhesives and bonding agents that may cause irritation or allergic reaction in some individuals.",
      },
      {
        kind: "notice",
        text: "Risks and Acknowledgments",
      },
      {
        kind: "paragraph",
        text: "I understand and agree to the following:",
      },
      {
        kind: "bullets",
        items: [
          "Eyelash extensions may cause eye irritation, discomfort, or allergic reactions.",
          "I will inform the technician of any known allergies, eye conditions, skin sensitivities, or other medical conditions that may affect the procedure.",
          "I understand that proper aftercare is essential to maintaining the extensions and preventing irritation or infection.",
          "Contact lenses are to be removed before the appointment.",
          "I have been informed and understand that the retention of the extensions varies based on personal aftercare, skin type, and natural lash cycle.",
          "The technician is not liable for any damage caused to my natural lashes during or after the procedure. All efforts are placed to protect the natural eyelashes and maintain health through the wear of eyelash extensions.",
          "Your time and my time is extremely valuable. I work solely one on one and respect your time. I ask the same in return. For future appointments please be on time and cancellations must allow 48 hrs notice. If notice is not given after the first offence a non refundable deposit will be required to hold your appointment. No show appointments thereafter will need to pay upfront for entire treatment when rescheduling.",
        ],
      },
      {
        kind: "notice",
        text: "Aftercare Instructions",
      },
      {
        kind: "paragraph",
        text: "I acknowledge that I have received and understand the aftercare instructions, including but not limited to:",
      },
      {
        kind: "bullets",
        items: [
          "Avoid water, steam, or heavy sweating for the first 24–48 hours.",
          "Do not rub, tug, or pull on the extensions.",
          "Avoid oil-based products on or near the eyes.",
          "Gently cleanse lashes with an approved lash cleanser.",
          "Chlorine, salt water, sunscreen, and tears all have a breakdown effect on eyelash extensions.",
        ],
      },
      {
        kind: "notice",
        text: "Waiver of Liability",
      },
      {
        kind: "paragraph",
        text: "By signing this form:",
      },
      {
        kind: "bullets",
        items: [
          "I release Ashley Wojnowski, Custom Lounge Inc., from any liability related to the eyelash extension procedure.",
          "I agree to keep my eyes closed during the whole treatment.",
          "Cell phone use during treatment is completely prohibited.",
          "I understand that no guarantees have been made as to the results.",
          "I agree not to hold the technician or business liable for any complications that may arise due to the service provided.",
          "If you experience issues such as excessive shedding or unhappy with the look of the lashes please notify Ashley within 3 days of your appointment. Refunds are not provided, but concerns will be addressed accordingly. For any allergy removal will be provided at not charge.",
          "It is up to you to provide updated medical history.",
        ],
      },
      {
        kind: "notice",
        text: "Cancellation Policy",
      },
      {
        kind: "paragraph",
        text: "We kindly ask for at least 24 hours’ notice for any cancellations or rescheduling. Appointments canceled with less than 24 hours’ notice, as well as no-shows, may be subject to a cancellation fee of up to the full appointment amount. We appreciate your understanding and respect for our time.",
      },
      {
        kind: "notice",
        text: "Lash Fills",
      },
      {
        kind: "paragraph",
        text: "Lash fill appointments are based on time since your last appointment and the condition of your remaining extensions. I currently offer 2 week and 3 weeks fills. Please note: Regardless of the timeframe, if less than 50% of lash extensions remain, pricing may increase and/or the appointment may need to be booked as a longer fill or full set. Fill appointments are allotted 45 minutes, so if retention is low, the lashes may not appear as full by the end of the service.",
      },
      {
        kind: "notice",
        text: "Client Declaration",
      },
      {
        kind: "paragraph",
        text: "The information that I have provided is true to the best of my knowledge. I give permission to Ashley At Smooth Skin Niagara to perform the procedure and understand that she will take every precaution to minimize or eliminate any negative reactions that may occur as a result of the treatment. I agree to follow the aftercare advice given and understand that failure to do so can cause premature loss of the lashes and, as such, my therapist will not be held responsible.",
      },
    ],
  },
};
