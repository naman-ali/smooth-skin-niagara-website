import type { FormSection } from "../types";

/**
 * Shared "Skin Assessment & Treatment Goals" section for facial treatments.
 * Question ids are namespaced with the treatment's id prefix to match the
 * per-treatment id convention used across the other schemas.
 */
export function skinAssessmentSection(idPrefix: string): FormSection {
  return {
    id: `${idPrefix}-skin-assessment`,
    title: "Skin Assessment & Treatment Goals",
    description:
      "Your skin is unique, and understanding its current condition and your personal skincare goals allows us to customize your treatment for the best possible experience. Please take a moment to tell us about your skin.",
    questions: [
      {
        id: `${idPrefix}_skin_type`,
        type: "multiSelectWithOther",
        label: "How would you describe your skin type?",
        description: "Please select all that apply.",
        required: true,
        options: [
          { value: "normal", label: "Normal" },
          { value: "dry", label: "Dry" },
          { value: "oily", label: "Oily" },
          {
            value: "combination",
            label: "Combination (oily in some areas, dry in others)",
          },
          { value: "sensitive_reactive", label: "Sensitive or reactive" },
          { value: "unsure", label: "Unsure" },
        ],
        exclusiveOptions: ["unsure"],
      },
      {
        id: `${idPrefix}_skin_feel`,
        type: "multiSelectWithOther",
        label: "How does your skin typically feel?",
        description: "Please select all that apply.",
        required: true,
        options: [
          { value: "tight_dehydrated", label: "Tight or dehydrated" },
          { value: "dry_rough_flaky", label: "Dry, rough, or flaky" },
          { value: "comfortable_balanced", label: "Comfortable and balanced" },
          { value: "oily_shiny", label: "Oily or shiny" },
          {
            value: "easily_irritated_redness",
            label: "Easily irritated or prone to redness",
          },
          {
            value: "itchy_stinging_burning",
            label: "Itchy, stinging, or burning",
          },
        ],
        allowOther: true,
        otherFieldLabel: "Other",
      },
      {
        id: `${idPrefix}_skin_concerns`,
        type: "multiSelectWithOther",
        label: "What are your primary skin concerns?",
        description: "Please select all that apply.",
        required: true,
        options: [
          { value: "fine_lines_wrinkles", label: "Fine lines and wrinkles" },
          {
            value: "loss_firmness_elasticity",
            label: "Loss of firmness or elasticity",
          },
          {
            value: "hyperpigmentation_dark_spots",
            label: "Hyperpigmentation or dark spots",
          },
          {
            value: "sun_damage_uneven_tone",
            label: "Sun damage or uneven skin tone",
          },
          { value: "acne_breakouts", label: "Acne or breakouts" },
          {
            value: "enlarged_pores_congestion",
            label: "Enlarged pores or congestion",
          },
          { value: "dryness_dehydration", label: "Dryness or dehydration" },
          { value: "redness_sensitivity", label: "Redness or sensitivity" },
          { value: "dull_tired_skin", label: "Dull or tired-looking skin" },
          { value: "uneven_rough_texture", label: "Uneven or rough texture" },
        ],
        allowOther: true,
        otherFieldLabel: "Other",
      },
      {
        id: `${idPrefix}_product_reactions`,
        type: "multiSelectWithOther",
        label:
          "How does your skin typically react to skincare products or facial treatments?",
        description: "Please select all that apply.",
        required: true,
        options: [
          { value: "no_reaction", label: "No noticeable reaction" },
          {
            value: "mild_redness_resolves",
            label: "Mild redness that resolves quickly",
          },
          { value: "tingling_stinging", label: "Tingling or stinging" },
          { value: "burning_irritation", label: "Burning or irritation" },
          { value: "breakouts", label: "Breakouts" },
          {
            value: "itching_swelling_rash",
            label: "Itching, swelling, or rash",
          },
          { value: "unsure", label: "Unsure" },
        ],
        exclusiveOptions: ["no_reaction", "unsure"],
        followUp: {
          id: `${idPrefix}_previous_reactions`,
          type: "textarea",
          label: "Please describe any previous reactions.",
          required: false,
        },
      },
      {
        id: `${idPrefix}_current_products`,
        type: "textarea",
        label:
          "What skincare products or active ingredients are you currently using?",
        helperText:
          "Examples: retinol, tretinoin, exfoliating acids (AHA/BHA), vitamin C, acne treatments, or prescription skincare.",
        placeholder: "List products, or enter \u201cNone\u201d.",
        required: true,
      },
      {
        id: `${idPrefix}_recent_experiences`,
        type: "multiSelectWithOther",
        label: "Have you experienced any of the following recently?",
        description: "Please select all that apply.",
        required: true,
        options: [
          {
            value: "excessive_dryness_peeling",
            label: "Excessive dryness or peeling",
          },
          { value: "unusual_sensitivity", label: "Unusual skin sensitivity" },
          {
            value: "sunburn_sun_exposure",
            label: "Sunburn or prolonged sun exposure",
          },
          {
            value: "recent_facial_treatments",
            label: "Recent facial treatments or exfoliation",
          },
          {
            value: "skin_condition_changes",
            label: "Changes in your skin condition",
          },
          { value: "none", label: "None of the above" },
        ],
        exclusiveOptions: ["none"],
        followUp: {
          id: `${idPrefix}_recent_experiences_details`,
          type: "textarea",
          label: "Please provide details, including when.",
          required: false,
        },
      },
      {
        id: `${idPrefix}_treatment_goals`,
        type: "textarea",
        label:
          "What would you most like to achieve from your facial treatments?",
        required: true,
      },
      {
        id: `${idPrefix}_anything_else`,
        type: "textarea",
        label:
          "Is there anything else you would like your skincare professional to know about your skin?",
        required: false,
      },
      {
        id: `${idPrefix}_change_one_thing`,
        type: "textarea",
        label: "If you could change one thing about your skin, what would it be?",
        required: true,
        helperText:
          "Your responses help us assess your skin\u2019s needs, identify potential sensitivities, and recommend treatments appropriate for your current skin condition. Treatments may be adjusted or postponed when necessary to prioritize skin health and safety.",
      },
    ],
  };
}
