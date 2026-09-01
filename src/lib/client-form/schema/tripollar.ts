import type { TreatmentFormDefinition } from "../types";

// NOTE: The source "Informed Consent Form for TriPollar Treatments" Personal
// Information block also asks for Name, Date of Birth, Address, Tel./Cell
// and E-mail — fields already collected once in the shared "Your
// Information" step (Name/Phone/Email always; Address currently only when
// Laser Hair Removal is selected). Only the two fields below (Occupation,
// preferred treatment time) are not collected anywhere else in the form, so
// only those are asked here to avoid asking the client twice. The source
// form's "Date of Birth" also does not match the shared form's existing
// "Age" field — this discrepancy has not been resolved and should be
// confirmed with the clinic before this treatment is used in production.
export const tripollar: TreatmentFormDefinition = {
  id: "tripollar",
  name: "TriPollar",
  shortDescription: "TriPollar treatment consultation and treatment intake.",
  version: "2026-09-01",
  sections: [
    {
      id: "tripollar-personal-details",
      title: "Personal Details",
      questions: [
        {
          id: "tripollar_occupation",
          type: "text",
          label: "Occupation",
          required: true,
        },
        {
          id: "tripollar_convenient_time",
          type: "text",
          label: "Time and days you would find most convenient for treatment",
          required: true,
        },
      ],
    },
    {
      id: "tripollar-health-questionnaire",
      title: "Health Questionnaire",
      questions: [
        {
          id: "tripollar_existing_recent_illness",
          type: "yesNo",
          label: "Do you have any existing or recent illnesses?",
          required: true,
          followUp: {
            id: "tripollar_existing_recent_illness_details",
            type: "textarea",
            label: "Please describe.",
            placeholder: "Describe the illness.",
            required: true,
            showWhen: {
              questionId: "tripollar_existing_recent_illness",
              equals: true,
            },
          },
        },
        {
          id: "tripollar_hospitalization_surgery",
          type: "yesNo",
          label: "Have you had any hospitalizations or surgeries?",
          required: true,
          followUp: {
            id: "tripollar_hospitalization_surgery_details",
            type: "textarea",
            label: "Please describe.",
            placeholder: "Describe the hospitalization or surgery.",
            required: true,
            showWhen: {
              questionId: "tripollar_hospitalization_surgery",
              equals: true,
            },
          },
        },
        {
          id: "tripollar_medication",
          type: "yesNo",
          label: "Are you currently taking any medications?",
          required: true,
          followUp: {
            id: "tripollar_medication_details",
            type: "textarea",
            label: "Please list them.",
            placeholder: "List your medications.",
            required: true,
            showWhen: {
              questionId: "tripollar_medication",
              equals: true,
            },
          },
        },
        {
          id: "tripollar_medicine_intolerance",
          type: "yesNo",
          label: "Do you have any medication intolerances or allergies?",
          required: true,
          followUp: {
            id: "tripollar_medicine_intolerance_details",
            type: "textarea",
            label: "Please describe.",
            placeholder: "Describe the intolerance or allergy.",
            required: true,
            showWhen: {
              questionId: "tripollar_medicine_intolerance",
              equals: true,
            },
          },
        },
        {
          id: "tripollar_aesthetic_procedures_area",
          type: "yesNo",
          label: "Have you had any aesthetic procedures in the treatment area?",
          required: true,
          followUp: {
            id: "tripollar_aesthetic_procedures_area_details",
            type: "textarea",
            label: "Please describe.",
            placeholder: "Describe the procedure(s).",
            required: true,
            showWhen: {
              questionId: "tripollar_aesthetic_procedures_area",
              equals: true,
            },
          },
        },
      ],
    },
    {
      id: "tripollar-contraindications",
      title: "Have You Experienced Any of the Following Conditions?",
      description: "Please indicate if any apply to you.",
      questions: [
        {
          id: "tripollar_contra_under_18",
          type: "checkbox",
          label: "Under 18 years of age.",
          required: false,
        },
        {
          id: "tripollar_contra_implanted_devices",
          type: "checkbox",
          label:
            "Pacemaker or internal defibrillator, implanted neuro-stimulators or any other internal electric device.",
          required: false,
        },
        {
          id: "tripollar_contra_metal_implants",
          type: "checkbox",
          label: "Metal implants or other implants in the treatment area.",
          required: false,
        },
        {
          id: "tripollar_contra_pregnancy_nursing",
          type: "checkbox",
          label:
            "Pregnancy or nursing or treatment on abdomen during the menstrual cycle.",
          required: false,
        },
        {
          id: "tripollar_contra_cancer",
          type: "checkbox",
          label:
            "Current or history of cancer, especially skin cancer, or pre-malignant moles.",
          required: false,
        },
        {
          id: "tripollar_contra_immunosuppression",
          type: "checkbox",
          label:
            "Impaired immune system due to immunosuppressive diseases such as AIDS and HIV, or use of immunosuppressive medications.",
          required: false,
        },
        {
          id: "tripollar_contra_cardiac_epilepsy",
          type: "checkbox",
          label:
            "Severe concurrent conditions such as cardiac disorders or epilepsy.",
          required: false,
        },
        {
          id: "tripollar_contra_heat_sensitive_condition",
          type: "checkbox",
          label:
            "Condition which could be adversely affected by heat. A history of diseases stimulated by heat, such as recurrent Herpes Simplex in the treatment area.",
          required: false,
        },
        {
          id: "tripollar_contra_temperature_perception",
          type: "checkbox",
          label: "Diminished or exaggerated perception of temperature changes.",
          required: false,
        },
        {
          id: "tripollar_contra_sensory_impairment",
          type: "checkbox",
          label:
            "Areas of sensory impairment such as in cases of nerve lesions and neuropathies.",
          required: false,
        },
        {
          id: "tripollar_contra_active_skin_condition",
          type: "checkbox",
          label:
            "Any active condition in the treatment area such as sores, hemorrhages or risk of hemorrhages, septic conditions, psoriasis, eczema and rash as well as irritated or damaged skin due to excessive fresh tanning.",
          required: false,
        },
        {
          id: "tripollar_contra_varicose_veins",
          type: "checkbox",
          label: "Varicose veins in the treatment area.",
          required: false,
        },
        {
          id: "tripollar_contra_skin_disorders",
          type: "checkbox",
          label:
            "History of skin disorders such as keloid scarring, abnormal wound healing, as well as very dry and fragile skin.",
          required: false,
        },
        {
          id: "tripollar_contra_recent_invasive_procedure",
          type: "checkbox",
          label:
            "Any surgical, invasive, ablative procedure in the treatment area before complete healing.",
          required: false,
        },
        {
          id: "tripollar_contra_impaired_healing",
          type: "checkbox",
          label: "Any medical condition that might impair skin healing.",
          required: false,
        },
      ],
    },
  ],
  consent: {
    treatmentId: "tripollar",
    title: "TriPollar Treatment Informed Consent",
    version: "tripollar-consent-2026-09-01",
    status: "approved",
    acceptanceLabel:
      "I confirm that I have read and understand the above information and take the treatment out of my own free will.",
    content: [
      {
        kind: "notice",
        text: "Client Declaration and Consent",
      },
      {
        kind: "paragraph",
        text: "I, the undersigned, pledge to inform of all changes in my physical condition.",
      },
      {
        kind: "paragraph",
        text: "I agree to undergo the treatment, as detailed below in this document. I was explained and I understood the results, the chances and the course of the treatment.",
      },
      {
        kind: "paragraph",
        text: "I confirm that I do not suffer from any of the above described conditions.",
      },
      {
        kind: "paragraph",
        text: "I have had the opportunity to consider the following information, ask questions and have had these answered satisfactorily by the treating practitioner.",
      },
      {
        kind: "paragraph",
        text: "I understand that taking the treatment course is my choice and that I am free to withdraw at any time, without giving any reason.",
      },
      {
        kind: "notice",
        text: "Possible Side Effects",
      },
      {
        kind: "paragraph",
        text: "I was told about the possible side effects of the treatment including: local pain, excessive skin redness (erythema), excessive swelling (edema), damage to the natural skin texture (crust, blister, and burn), excessive tingling sensation, fragile skin and bruising. Although these effects are rare and expected to be temporary, any adverse reaction should be reported immediately.",
      },
    ],
  },
};
