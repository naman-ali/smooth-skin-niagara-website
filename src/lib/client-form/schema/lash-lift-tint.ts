import type { TreatmentFormDefinition } from "../types";

export const lashLiftTint: TreatmentFormDefinition = {
  id: "lash-lift-tint",
  name: "Lash Lift & Tint",
  shortDescription: "Lash Lift & Tint client intake.",
  version: "2026-09-01",
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
        },
        {
          id: "lash_latex_acrylic_allergy",
          type: "yesNo",
          label: "Do you have an allergy to latex or acrylic nails?",
          required: true,
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
        },
        {
          id: "lash_back_pain",
          type: "yesNo",
          label: "Do you experience back pain?",
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
          label: "What side do you sleep on?",
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
            label: "If so, how was your experience?",
            required: false,
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
            label: "Please describe your sensitivity.",
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
    title: "Lash Lift & Tint Waiver & Release",
    version: "lash-lift-tint-waiver-2026-09-01",
    status: "approved",
    acceptanceLabel:
      "The information that I have provided is true to the best of my knowledge. I give permission to Ashley Wojnowski at Custom Lash to perform the procedure and understand that she will take every precaution to minimize or eliminate any negative reactions that may occur because of the treatment. I agree to follow the aftercare advice given and understand that failure to do so can cause damage to natural lashes, risk of perm failure and, as such, my therapist will not be held responsible. I understand results are not guaranteed and treatments are non-refundable however Ashley Wojnowski at Custom Lash Lounge will work with me to rectify any issues.",
    content: [
      {
        kind: "paragraph",
        text: "I authorize Ashley Wojnowski at Custom Lash Lounge professional to perform the Lash Lift and or tint procedure to my eyelashes. I understand this procedure requires my lashes to be glued to a silicon pad with a water-soluble adhesive and lifted onto a silicon pad with a curling agent, a conditioning agent, tinting agent (to eyelashes or separate eyebrow treatment) and nourishing oil. I understand that it is my responsibility to be still during the procedure and to keep my eyes closed during the process unless otherwise advised. I have been fully informed as to the methods and procedures concerning the Lash Lift procedure.",
      },
      {
        kind: "paragraph",
        text: "Some cases may result in complications such as transient eye redness, eye irritation, eye pain, eye itching, discomfort or allergic reaction to the products used to lift or black eyelash tint. In rare cases eye infection or blurriness could occur. If at any time I (or the technician) are uncomfortable with the Lash Lift procedure, I will inform the technician and she will gladly rectify the problem, including ending the session if I (or the technician) wish.",
      },
      {
        kind: "paragraph",
        text: "It has been represented to me that no guarantees, warranties, promises, commitments or other statements as to the results of this treatment have been made. I acknowledge that I have no representation or guarantees, and I am consenting to the procedure at my own risk. All conditions must be revealed or disclosed by me to the technician regarding my health history, medications being taken and any past reactions to products used or medications taken. Additional conditions could be discovered during the procedure, which could affect my ability to tolerate the procedure.",
      },
      {
        kind: "paragraph",
        text: "I herein signed, release, give up, acquit, and discharge Custom Lash Lounge and or anyone affiliated thereto including any partnership, corporations, or company associated with said individual from any claims or damages of any nature. I agree to pay any costs of legal services necessary to effect said release. I further agree that this release shall be in contemplation of any possible damages, either known or unknown at the signing of this release and said damages are specifically waived following the signing of this release. I further agree to hold Custom Lash Lounge professional nameless and harmless from all damages. I release Custom Lash Lounge from any responsibility for pre-existing conditions I have not revealed or any consequential change to those conditions that arise after the procedure. I accept full responsibility for these and any other complications, which may arise or result during or following the Lash Lift procedure now and continued treatments, which are to be performed at my request. I certify I am of sound mind, and fully understand that there might be other unknown risks not reasonably foreseeable now.",
      },
    ],
  },
};
