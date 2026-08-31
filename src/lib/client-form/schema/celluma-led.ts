import type { TreatmentFormDefinition } from "../types";

export const cellumaLed: TreatmentFormDefinition = {
  id: "celluma-led",
  name: "Celluma LED",
  shortDescription: "Celluma LED light therapy intake and consent.",
  version: "2026-08-31",
  sections: [
    {
      id: "celluma-pre-care",
      title: "Pre-Care",
      description: "Please read carefully and initial to confirm you understand.",
      questions: [
        {
          id: "celluma_pre_tanning",
          type: "acknowledgement",
          label:
            "DON'T go to a tanning bed two weeks prior to treatment. This practice should be discontinued due to the increased risk of skin cancer and signs of aging.",
          required: true,
        },
        {
          id: "celluma_pre_other_treatment",
          type: "acknowledgement",
          label: "DON'T have another treatment unless recommended.",
          required: true,
        },
        {
          id: "celluma_pre_waxing",
          type: "acknowledgement",
          label:
            "DON'T wax, tweeze or use depilatory creams for 7 days prior.",
          required: true,
        },
        {
          id: "celluma_pre_sun_exposure",
          type: "acknowledgement",
          label:
            "AVOID extended sun exposure especially in the 10 days prior to treatment.",
          required: true,
        },
        {
          id: "celluma_pre_retinoids",
          type: "acknowledgement",
          label:
            "DELAY use of Tretinoin, Retin-A, Renova, Differin, Tazorac, EpiDuo, Ziana and high-percentage AHA and BHA products for approximately seven days prior to treatment. Consult your Physician before temporarily discontinuing use of any prescription medications.",
          required: true,
        },
      ],
    },
    {
      id: "celluma-general-acknowledgements",
      title: "General Acknowledgements",
      description: "Please initial to confirm you understand.",
      questions: [
        {
          id: "celluma_gen_precautions",
          type: "acknowledgement",
          label:
            "I understand there are other precautions that should be considered before receiving LED therapy treatments and may require a doctor's release and/or I assume any risk involved.",
          required: true,
        },
        {
          id: "celluma_gen_reactions",
          type: "acknowledgement",
          label:
            "I understand that reactions are rare, but may include nausea, dizziness, weakness, and possible skin reactions including redness and/or other irritations.",
          required: true,
        },
        {
          id: "celluma_gen_guarantees",
          type: "acknowledgement",
          label:
            "I understand that while the goal of this treatment is to improve the vitality of the skin, no specific guarantees of the result can or have been made.",
          required: true,
        },
        {
          id: "celluma_gen_disclosure",
          type: "acknowledgement",
          label:
            "I understand that it is imperative to my health that I disclose all of the information requested in the Client Profile/Health History.",
          required: true,
        },
        {
          id: "celluma_gen_conditions",
          type: "acknowledgement",
          label:
            "I have cited all conditions and circumstances regarding my health history, medications being taken, and any past reactions to products or medications.",
          required: true,
        },
        {
          id: "celluma_gen_additional",
          type: "acknowledgement",
          label:
            "I understand that additional conditions could occur or be discovered during the procedure which could affect my ability to tolerate the procedure.",
          required: true,
        },
      ],
    },
    {
      id: "celluma-contraindications",
      title: "Medical Contraindications",
      description: "Please initial if any of the following apply to you.",
      questions: [
        {
          id: "celluma_contra_epilepsy",
          type: "checkbox",
          label: "Epilepsy",
          required: false,
        },
        {
          id: "celluma_contra_ms",
          type: "checkbox",
          label: "Multiple Sclerosis (MS)",
          required: false,
        },
        {
          id: "celluma_contra_open_wounds",
          type: "checkbox",
          label: "Open wounds",
          required: false,
        },
        {
          id: "celluma_contra_trying_pregnant",
          type: "checkbox",
          label: "Are you currently trying to become pregnant?",
          required: false,
        },
        {
          id: "celluma_contra_porphyria",
          type: "checkbox",
          label: "Porphyria",
          required: false,
        },
        {
          id: "celluma_contra_lupus",
          type: "checkbox",
          label: "Lupus",
          required: false,
        },
        {
          id: "celluma_contra_erythematosis",
          type: "checkbox",
          label: "Erythematosis",
          required: false,
        },
        {
          id: "celluma_contra_photosensitive_eczema",
          type: "checkbox",
          label: "Photosensitive Eczema",
          required: false,
        },
        {
          id: "celluma_contra_albinism",
          type: "checkbox",
          label: "Hypomelanism (Albinism)",
          required: false,
        },
        {
          id: "celluma_contra_skin_cancer",
          type: "checkbox",
          label: "Skin Cancer",
          required: false,
        },
        {
          id: "celluma_contra_eye_disease",
          type: "checkbox",
          label: "Eye Disease",
          required: false,
        },
        {
          id: "celluma_contra_retinal_abnormalities",
          type: "checkbox",
          label: "Retinal Abnormalities",
          required: false,
        },
        {
          id: "celluma_contra_light_sensitive",
          type: "checkbox",
          label: "Light Sensitivities/Illnesses you are aware of",
          required: false,
        },
        {
          id: "celluma_contra_tetracycline",
          type: "checkbox",
          label:
            "Tetracycline's (Antibiotic) also known as Retin-A, Renova, Atralin, among others. You can be treated if Tretinoin is used only at night.",
          required: false,
        },
      ],
    },
  ],
  consent: {
    treatmentId: "celluma-led",
    title: "Celluma LED Consent",
    version: "celluma-waiver-2026-08-31",
    status: "approved",
    acceptanceLabel:
      "I HAVE CAREFULLY READ, UNDERSTOOD AND ACKNOWLEDGE ALL OF THE ABOVE STATEMENTS.",
    content: [
      {
        kind: "paragraph",
        text: "I hereby authorize Ashley Wojnowski certified personnel to perform the following procedures or treatments:",
      },
      {
        kind: "notice",
        text: "Celluma light therapy LED (Light Emitting Diode)",
      },
      {
        kind: "paragraph",
        text: "Although every precaution will be taken to ensure your safety and wellbeing before, during and after your LED treatment, please be aware of the following information and possible risks.",
      },
      {
        kind: "notice",
        text: "About Celluma",
      },
      {
        kind: "paragraph",
        text: "Biophotonic therapy is based on LED technology and is the application of light energy to the body for therapeutic benefits. It promotes a natural photo biochemical reaction similar to the process of plant photosynthesis. The energy delivered by the Light Emitting Diodes (LEDs) has been shown to enhance cellular metabolism, accelerate the repair and replenishment of damaged skin cells, as well as stimulate the production of collagen - the foundation of a healthy and smooth skin. Research has shown that LED Light Therapy may help to smooth skin texture, improve skin firmness and resilience, increase the lymphatic system activity, restore skin's natural cellular activity, and reduce the appearance of fine lines, wrinkles and superficial hyperpigmentation. The treatment is for all skin types and it is non-ablative, non-invasive, painless with absolutely no downtime. Patients or clients can return to their normal activity immediately after the treatment.",
      },
      {
        kind: "notice",
        text: "How safe is biophotonic therapy?",
      },
      {
        kind: "paragraph",
        text: "Biophotonic therapy is based on light-emitting diode (LED) arrays developed for NASA manned space flight experiments. In comparison to lasers, the patented LED technology generates negligible amounts of heat and is not considered a significant risk device.",
      },
      {
        kind: "notice",
        text: "Does biophotonic therapy utilize UV light?",
      },
      {
        kind: "paragraph",
        text: "No. Biophotonic devices utilize a combination of red, blue and infrared (not visible to the naked eye) light emitting diodes (LEDs) only.",
      },
      {
        kind: "notice",
        text: "How many Celluma treatments will I need?",
      },
      {
        kind: "paragraph",
        text: "This depends largely on the severity of the skin condition that is being treated, and how much improvement is needed. For optimal results, the recommended frequency of red or blue LED light treatments is one 30 minute session two times a week for 6-8 weeks. Maintenance treatments are recommended every 4-6 weeks.",
      },
      {
        kind: "notice",
        text: "Procedure Consent",
      },
      {
        kind: "paragraph",
        text: "I, the undersigned, consent to authorize Ashley Wojnowski Custom Lash Lounge Inc. to perform the LED Light procedure on me.",
      },
      {
        kind: "clauses",
        items: [
          "The nature and purpose of the treatment has been explained to me, and any questions I have regarding this treatment have been explained to my satisfaction.",
          "I understand that with any treatment, certain risks are involved and that any complications or side effects from unknown causes could occur. I freely assume these risks.",
          "I understand that the LED light procedure should not be administered to people with the following conditions and I do not have any of these conditions.",
        ],
      },
      {
        kind: "bullets",
        items: [
          "Persons diagnosed with basil cell carcinoma",
          "Pregnancy",
          "Epilepsy",
          "Taking medications that cause sensitivity to light (example: tetracycline)",
          "Broken or inflamed areas of skin",
          "Botox or cosmetic fillers (must wait a min of 5-days post treatment)",
        ],
      },
      {
        kind: "notice",
        text: "Privacy Policy",
      },
      {
        kind: "paragraph",
        text: "We value your privacy and are committed to maintaining your security and confidentiality in the use of any information you choose to share with us. We do not disclose identifiable information to any third party without your consent. Further, we do not sell, rent, or otherwise allow the unauthorized outside use of personal information such as names, addresses, phone numbers, or e-mail addresses in our database without your permission. Copies of this form and signature will be valid as if original if this document is digitally scanned. If any part of this Release is found to be invalid by the courts having jurisdiction, or becomes inoperative for any reason, such invalidity shall not affect the validity and enforceability of any other provision of this release.",
      },
      {
        kind: "notice",
        text: "Cancellation Policy",
      },
      {
        kind: "paragraph",
        text: "We require a 24-hour cancellation notice. If I cancel within 24 hours of a reserved session, I will lose or forfeit my session. If I fail to show up or am more than 5 minutes late, I will lose or forfeit my session due to staff wages and fees paid for my session. Our cancellation policy has been created to ensure that our loyal clients are not disturbed by the tardiness of clients who do not show up on time, or who cancel within 24 hours of an appointment. When reserved sessions are unattended, this means that loyal clients missed the opportunity of having that particular time period.",
      },
      {
        kind: "notice",
        text: "Purchase and Reservation Policy",
      },
      {
        kind: "paragraph",
        text: "Sessions will only be confirmed and allowed up to the amount of pre-paid sessions. All sales are final and non-refundable. We reserve the right to terminate any client's session, package, or contract, without refunding any monies if the client has broken any terms or policies. All purchases are final, non-refundable and non-transferable. I understand if I have purchased and pre-paid for a first-time customer promotion, that I may not use or purchase another first-time promotion without consent. I further state that I am of lawful age and legally competent to sign this release. The procedures, alternatives and risks have been explained to me and I have been given the opportunity to ask questions. I understand it is my responsibility to inform the staff is there are any changes to my medical history. I understand the terms herein is contractual and not a mere recital. I have signed this document of my own free act.",
      },
      {
        kind: "notice",
        text: "Final Acknowledgement",
      },
      {
        kind: "paragraph",
        text: "I HAVE CAREFULLY READ, UNDERSTOOD AND ACKNOWLEDGE ALL OF THE ABOVE STATEMENTS.",
      },
    ],
  },
};
