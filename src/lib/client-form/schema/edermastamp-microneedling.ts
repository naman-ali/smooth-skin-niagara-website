import type { TreatmentFormDefinition } from "../types";

// NOTE: The source "Personal Information" block
// (waver-forms/smooth-skin-niagara-edermastamp-microneedling.md) also asks
// for Name, Date of Birth, Address, Tel./Cell and E-mail Address. Those are
// already collected in the shared "Your Information" step, and the user
// asked not to change that step. Only Occupation and the preferred treatment
// area are added here to avoid asking the client twice. The source
// "Date of Birth" does not match the shared form's existing "Age" field and
// has not been added.
export const edermastampMicroneedling: TreatmentFormDefinition = {
  id: "edermastamp-microneedling",
  name: "eDermaStamp / DermaRoller Microneedling",
  shortDescription: "Microneedling for collagen induction and scar reduction.",
  version: "2026-09-01",
  sections: [
    {
      id: "edermastamp-personal-details",
      title: "Personal Details",
      questions: [
        {
          id: "edermastamp_occupation",
          type: "text",
          label: "Occupation",
          required: true,
        },
      ],
    },
    {
      id: "edermastamp-treatment-request",
      title: "Treatment Request",
      questions: [
        {
          id: "edermastamp_preferred_areas",
          type: "textarea",
          label: "Preferred areas to be treated",
          placeholder: "Describe the area(s) you would like treated.",
          required: true,
        },
      ],
    },
    {
      id: "edermastamp-health-questionnaire",
      title: "Health Questionnaire",
      questions: [
        {
          id: "edermastamp_existing_recent_illness",
          type: "yesNo",
          label: "Do you have any existing or recent illnesses?",
          required: true,
          followUp: {
            id: "edermastamp_existing_recent_illness_details",
            type: "textarea",
            label: "Please describe.",
            placeholder: "Describe the illness.",
            required: true,
            showWhen: {
              questionId: "edermastamp_existing_recent_illness",
              equals: true,
            },
          },
        },
        {
          id: "edermastamp_hospitalization_surgery",
          type: "yesNo",
          label: "Have you had any hospitalizations or surgeries?",
          required: true,
          followUp: {
            id: "edermastamp_hospitalization_surgery_details",
            type: "textarea",
            label: "Please provide details and dates.",
            placeholder: "Describe the hospitalization or surgery.",
            required: true,
            showWhen: {
              questionId: "edermastamp_hospitalization_surgery",
              equals: true,
            },
          },
        },
        {
          id: "edermastamp_medication",
          type: "yesNo",
          label: "Are you currently taking any medications?",
          required: true,
          followUp: {
            id: "edermastamp_medication_details",
            type: "textarea",
            label: "Please list them.",
            placeholder: "List your medications.",
            required: true,
            showWhen: {
              questionId: "edermastamp_medication",
              equals: true,
            },
          },
        },
        {
          id: "edermastamp_medicine_intolerance",
          type: "yesNo",
          label: "Do you have any medication intolerances?",
          required: true,
          followUp: {
            id: "edermastamp_medicine_intolerance_details",
            type: "textarea",
            label: "Please describe.",
            placeholder: "Describe the intolerance.",
            required: true,
            showWhen: {
              questionId: "edermastamp_medicine_intolerance",
              equals: true,
            },
          },
        },
        {
          id: "edermastamp_aesthetic_procedures_area",
          type: "yesNo",
          label:
            "Have you had any aesthetic procedures in the treatment area within the last 6 months?",
          required: true,
          followUp: {
            id: "edermastamp_aesthetic_procedures_area_details",
            type: "textarea",
            label: "Please provide details and dates.",
            placeholder: "Describe the procedure(s).",
            required: true,
            showWhen: {
              questionId: "edermastamp_aesthetic_procedures_area",
              equals: true,
            },
          },
        },
        {
          id: "edermastamp_allergies",
          type: "yesNo",
          label:
            "Do you have any allergies, including to cosmetic products?",
          required: true,
          followUp: {
            id: "edermastamp_allergies_details",
            type: "textarea",
            label: "Please describe.",
            placeholder: "List your allergies.",
            required: true,
            showWhen: {
              questionId: "edermastamp_allergies",
              equals: true,
            },
          },
        },
      ],
    },
    {
      id: "edermastamp-contraindications",
      title: "Do any of the following conditions apply to you?",
      description: "Please indicate if any.",
      questions: [
        {
          id: "edermastamp_contra_under_18",
          type: "checkbox",
          label: "Under 18 years of age.",
          required: false,
        },
        {
          id: "edermastamp_contra_pregnancy_nursing",
          type: "checkbox",
          label: "Pregnancy or nursing.",
          required: false,
        },
        {
          id: "edermastamp_contra_cancer",
          type: "checkbox",
          label:
            "Current or history of cancer, especially skin cancer, or pre-malignant moles.",
          required: false,
        },
        {
          id: "edermastamp_contra_active_skin_condition",
          type: "checkbox",
          label:
            "Any active condition in the treatment area such as sores, active pustular acne, rosacea, keloid or raised scars, septic conditions, psoriasis, eczema and rash as well as irritated or damaged skin due to excessive fresh tanning.",
          required: false,
        },
        {
          id: "edermastamp_contra_infections",
          type: "checkbox",
          label:
            "Any active bacterial, viral or fungal infections.",
          required: false,
        },
        {
          id: "edermastamp_contra_vascular_disorders",
          type: "checkbox",
          label:
            "Vascular disorders such as: un-controlled diabetes, nervous diseases, cardiac disorder and cancer. In such cases, consult the treating physician.",
          required: false,
        },
        {
          id: "edermastamp_contra_accutane_retin_a",
          type: "checkbox",
          label:
            "Any recent use of products such as Accutane or Retin A.",
          required: false,
        },
        {
          id: "edermastamp_contra_blood_meds",
          type: "checkbox",
          label:
            "Taking blood pressure, blood thinning or heart medications.",
          required: false,
        },
        {
          id: "edermastamp_contra_actinic_immunosuppression",
          type: "checkbox",
          label: "Actinic (solar) keratosis - Immunosuppression.",
          required: false,
        },
      ],
    },
    {
      id: "edermastamp-acknowledgements",
      title: "Complications, Risks & Treatment Acknowledgements",
      description:
        "Please initial each line to confirm you understand.",
      questions: [
        {
          id: "edermastamp_ack_erythema",
          type: "acknowledgement",
          label:
            "The skin may remain red for generally 24 hours up to four days after eDermaStamp treatment. As the skin heals the erythema will resolve.",
          required: true,
        },
        {
          id: "edermastamp_ack_serums",
          type: "acknowledgement",
          label:
            "I understand that a eDermaStamp can be combined with the application of serums, nutritional factors, and vitamins to stimulate optimal collagen production.",
          required: true,
        },
        {
          id: "edermastamp_ack_bruising",
          type: "acknowledgement",
          label: "I understand bruising may occur as a result of treatment.",
          required: true,
        },
        {
          id: "edermastamp_ack_hyperpigmentation",
          type: "acknowledgement",
          label:
            "A small number of patients may experience a hyper-pigmentation of the skin surface (especially if the skin is exposed to the sun).",
          required: true,
        },
        {
          id: "edermastamp_ack_sun_exposure",
          type: "acknowledgement",
          label:
            "I understand that in order to avoid possible adverse reactions I need to refrain from any intensive sun exposure and/or solarium for a period of 2 weeks. I shall use a sun block with a protection factor of 15 or higher.",
          required: true,
        },
        {
          id: "edermastamp_ack_exercise",
          type: "acknowledgement",
          label:
            "I understand that in order avoid possible adverse reactions I also need to refrain from any exercise following the treatment for a period of 24 hours.",
          required: true,
        },
        {
          id: "edermastamp_ack_post_care",
          type: "acknowledgement",
          label:
            "I shall follow the prescribed post procedure skin care to avoid infection.",
          required: true,
        },
        {
          id: "edermastamp_ack_designated_products",
          type: "acknowledgement",
          label:
            "I understand that the post-treatment care regime is done with designated Dermaroller products which were specifically formulated for the treatment.",
          required: true,
        },
        {
          id: "edermastamp_ack_additional_treatments",
          type: "acknowledgement",
          label:
            "I understand that I may require additional treatments in order to achieve maximum results and that some imperfections are not amenable to a eDermaStamp treatment.",
          required: true,
        },
        {
          id: "edermastamp_ack_former_conditions",
          type: "acknowledgement",
          label:
            "I understand that prior to treatment I must provide the treating clinician with any information regarding my former skin conditions and illnesses, including personal history of herpes simplex.",
          required: true,
        },
        {
          id: "edermastamp_ack_herpes",
          type: "acknowledgement",
          label:
            "I understand that patients with a history of herpes simplex (cold sores) may experience a flare up of the disease.",
          required: true,
        },
        {
          id: "edermastamp_ack_infection",
          type: "acknowledgement",
          label: "I understand that infection is a rare possibility.",
          required: true,
        },
      ],
    },
  ],
  consent: {
    treatmentId: "edermastamp-microneedling",
    title: "eDermaStamp / Dermaroller Treatment Consent",
    version: "edermastamp-consent-2026-09-01",
    status: "approved",
    acceptanceLabel:
      "I acknowledge that I have read and filled out the patient registration and medical history form fully and correctly to the best of my knowledge, and that the information that I have supplied is correct.",
    content: [
      {
        kind: "notice",
        text: "For Collagen Induction + Scar Reduction Therapy",
      },
      {
        kind: "paragraph",
        text: "I am requesting a eDermaStamp: Collagen Induction/Scar Reduction/Hair Growth treatment of the skin for fine wrinkles, acne scarring or skin changes associated with actinic damage or ageing, and voluntarily by consent authorize this procedure.",
      },
      {
        kind: "notice",
        text: "Procedure Information",
      },
      {
        kind: "paragraph",
        text: "I understand that eDermaStamp Treatment utilizes fine micro-needles to puncture into the skin surface. As a consequence, the repair process releases numerous growth and healing factors that stimulate new collagen to be deposited under the skin surface. The repair process will actually extend over a twelve to sixteen week period after treatment.",
      },
      {
        kind: "paragraph",
        text: "I also understand that I may require a series of treatments to achieve the maximum cosmetic result. The procedure and complications have been explained to me and I have had the opportunity to have my questions answered.",
      },
      {
        kind: "paragraph",
        text: "I have been advised that the object of the procedure I have requested is improvement in appearance, not perfection. It is possible for imperfections to persist, and that the result might not live up to my expectations or goals.",
      },
      {
        kind: "paragraph",
        text: "I fully understand that the service provider cannot guarantee results. I acknowledge that no written or implied verbal guarantee, warranty, or assurance has been made to me regarding the outcome of the procedure that I herein requested and authorized. I also understand the limitations of this procedure.",
      },
      {
        kind: "notice",
        text: "Photography Permission",
      },
      {
        kind: "paragraph",
        text: "I hereby give permission for photographs of the intended treatment site for diagnostic purposes and to enhance the medical record. I agree that these photographs will remain the clinic's property.",
      },
      {
        kind: "paragraph",
        text: "I further authorize to use these photographs for marketing purposes. It is specifically understood that in any such publication or use, I shall not be identifiable.",
      },
      {
        kind: "notice",
        text: "Treatment Instructions & Client Declaration",
      },
      {
        kind: "paragraph",
        text: "I agree to follow the instructions given to me by the clinic to the best of my ability before, during, and after the procedure.",
      },
      {
        kind: "paragraph",
        text: "I understand that patient responsibility and proper performance of the post-treatment care are critical to the success of the treatment.",
      },
      {
        kind: "paragraph",
        text: "I have thoroughly read and understand the instructions and reviewed them with the treatment provider.",
      },
      {
        kind: "notice",
        text: "Medical History Declaration",
      },
      {
        kind: "paragraph",
        text: "I, the undersigned, pledge to inform of all changes in my physical condition.",
      },
      {
        kind: "paragraph",
        text: "I confirm that I do not suffer from any of the above described conditions.",
      },
      {
        kind: "paragraph",
        text: "I declared that the above information is true and correct.",
      },
    ],
  },
};
