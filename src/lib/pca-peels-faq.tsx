"use client";

import { Calendar, Heart, Shield } from "lucide-react";
import React from "react";

export const pcaPeelsFaqCategories = [
  {
    id: "treatment",
    label: "TREATMENT & RESULTS",
    heading: "Treatment & Results",
    description: "What professional PCA SKIN chemical peels are and what they can address.",
    icon: ({ color = "currentColor" }: { color?: string }) => (
      <Heart color={color} size={20} strokeWidth={1.5} />
    ),
    questions: [
      {
        q: "What is a PCA SKIN chemical peel?",
        a: (
          <>
            <p>
              A professional chemical peel uses carefully selected exfoliating
              ingredients to remove accumulated surface cells and support the
              appearance of fresher, smoother-looking skin.
            </p>
            <p style={{ marginTop: 12 }}>
              PCA SKIN offers different professional peel formulations so
              treatment can be selected according to skin type, condition and
              goals.
            </p>
          </>
        ),
      },
      {
        q: "Which PCA peel is right for me?",
        a: (
          <>
            <p>You don&apos;t need to know before booking.</p>
            <p style={{ marginTop: 12 }}>
              We offer several treatment approaches, including Sensi Peel, Ultra
              Peel, OXY PCA Peel and a retinol-enhanced PCA treatment.
            </p>
            <p style={{ marginTop: 12 }}>
              We&apos;ll assess your skin and recommend the most appropriate
              option.
            </p>
          </>
        ),
      },
      {
        q: "What can a chemical peel improve?",
        a: (
          <>
            <p>
              Depending on the treatment selected, professional chemical peels
              may help improve the appearance of:
            </p>
            <ul
              style={{
                margin: "12px 0 0",
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
              }}
            >
              <li>uneven texture</li>
              <li>dullness</li>
              <li>fine lines</li>
              <li>discoloration</li>
              <li>acne-prone or congested skin</li>
              <li>uneven tone</li>
            </ul>
          </>
        ),
      },
      {
        q: "Will my skin definitely peel?",
        a: (
          <>
            <p>No.</p>
            <p style={{ marginTop: 12 }}>
              Visible peeling is not required for a professional peel to be
              effective.
            </p>
            <p style={{ marginTop: 12 }}>
              Some clients experience noticeable flaking or shedding, while
              others experience very little.
            </p>
          </>
        ),
      },
      {
        q: "When will I see results?",
        a: (
          <>
            <p>
              Some clients notice that their skin feels smoother or looks
              brighter after recovery from a single treatment.
            </p>
            <p style={{ marginTop: 12 }}>
              More significant concerns may benefit from a series of treatments.
            </p>
            <p style={{ marginTop: 12 }}>
              Results vary according to skin condition, treatment selection and
              home care.
            </p>
          </>
        ),
      },
      {
        q: "How often can I have a chemical peel?",
        a: (
          <>
            <p>
              Treatment frequency depends on the peel used, your skin and your
              treatment goals.
            </p>
            <p style={{ marginTop: 12 }}>
              Rather than applying the same schedule to everyone, we&apos;ll
              recommend appropriate timing for your individual plan.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "recovery",
    label: "RECOVERY & AFTERCARE",
    heading: "Recovery & Aftercare",
    description: "What to expect during and after a PCA SKIN chemical peel.",
    icon: ({ color = "currentColor" }: { color?: string }) => (
      <Calendar color={color} size={20} strokeWidth={1.5} />
    ),
    questions: [
      {
        q: "Is there downtime after a PCA peel?",
        a: (
          <>
            <p>Downtime varies by treatment.</p>
            <p style={{ marginTop: 12 }}>
              Some professional peels involve little visible peeling, while
              stronger or retinol-enhanced treatments may result in more
              noticeable dryness, flaking or shedding.
            </p>
            <p style={{ marginTop: 12 }}>
              We&apos;ll explain what to expect from the treatment selected for
              you.
            </p>
          </>
        ),
      },
      {
        q: "How long does peeling last?",
        a: (
          <>
            <p>
              If visible peeling occurs, it commonly develops over the days
              following treatment.
            </p>
            <p style={{ marginTop: 12 }}>
              Duration and intensity vary significantly depending on the
              formulation, number of layers and individual skin response.
            </p>
          </>
        ),
      },
      {
        q: "Can I wear makeup after my peel?",
        a: (
          <>
            <p>Follow the aftercare instructions provided for your specific treatment.</p>
            <p style={{ marginTop: 12 }}>
              It is generally best to keep freshly treated skin simple and avoid
              unnecessary irritation immediately after a peel.
            </p>
          </>
        ),
      },
      {
        q: "Can I pick peeling skin?",
        a: (
          <>
            <p>No.</p>
            <p style={{ marginTop: 12 }}>
              Do not pull, pick or manually exfoliate shedding skin. Allow it to
              come away naturally.
            </p>
          </>
        ),
      },
      {
        q: "What skincare should I use afterward?",
        a: (
          <>
            <p>Use the gentle post-treatment routine recommended for you.</p>
            <p style={{ marginTop: 12 }}>
              Sun protection, hydration and avoiding irritating active
              ingredients are particularly important while the skin recovers.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "safety",
    label: "SAFETY & SUITABILITY",
    heading: "Safety & Suitability",
    description: "Who a PCA SKIN chemical peel may be appropriate for.",
    icon: ({ color = "currentColor" }: { color?: string }) => (
      <Shield color={color} size={20} strokeWidth={1.5} />
    ),
    questions: [
      {
        q: "Are PCA SKIN peels suitable for all skin types?",
        a: (
          <>
            <p>
              PCA SKIN offers professional peel options that can be used across
              a broad range of skin types, including options formulated for
              sensitive skin.
            </p>
            <p style={{ marginTop: 12 }}>
              However, that does not mean every peel is suitable for every
              person.
            </p>
            <p style={{ marginTop: 12 }}>
              Your skin and medical history should be assessed before treatment.
            </p>
          </>
        ),
      },
      {
        q: "Can I get a peel if I have sensitive skin?",
        a: (
          <>
            <p>Potentially.</p>
            <p style={{ marginTop: 12 }}>
              Sensi Peel is specifically positioned as a gentler PCA SKIN peel
              option, but suitability still depends on your current skin
              condition and history.
            </p>
          </>
        ),
      },
      {
        q: "Who should not have a chemical peel?",
        a: (
          <>
            <p>
              Treatment may need to be delayed or avoided depending on factors
              such as:
            </p>
            <ul
              style={{
                margin: "12px 0 0",
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
              }}
            >
              <li>active infection or open skin</li>
              <li>significant irritation</li>
              <li>recent sunburn</li>
              <li>certain medications</li>
              <li>prescription retinoids</li>
              <li>recent aesthetic procedures</li>
              <li>pregnancy depending on the treatment ingredients</li>
              <li>conditions that affect healing</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              Always disclose your medical history, medications and skincare
              before treatment.
            </p>
          </>
        ),
      },
      {
        q: "Can chemical peels help acne?",
        a: (
          <>
            <p>
              Certain professional chemical peels may be incorporated into
              treatment plans for acne-prone skin and congestion.
            </p>
            <p style={{ marginTop: 12 }}>
              The appropriate treatment depends on the type and severity of the
              acne and the current condition of your skin.
            </p>
          </>
        ),
      },
      {
        q: "Can PCA peels be combined with other treatments?",
        a: (
          <>
            <p>Sometimes.</p>
            <p style={{ marginTop: 12 }}>
              Selected add-ons or complementary treatments may be incorporated
              when appropriate, but combination treatments should be determined
              based on your skin and treatment plan rather than automatically
              added.
            </p>
          </>
        ),
      },
    ],
  },
];
