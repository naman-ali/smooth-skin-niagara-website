"use client";

import { Calendar, Heart, Shield } from "lucide-react";
import React from "react";

export const microneedlingFaqCategories = [
  {
    id: "treatment",
    label: "TREATMENT & RESULTS",
    heading: "Treatment & Results",
    description:
      "What microneedling is, how it works, and what to expect from a treatment series.",
    icon: ({ color = "currentColor" }: { color?: string }) => (
      <Heart color={color} size={20} strokeWidth={1.5} />
    ),
    questions: [
      {
        q: "What is microneedling?",
        a: (
          <>
            <p>
              Microneedling is a minimally invasive treatment that uses very
              fine needles to create controlled microscopic channels in the
              skin. This activates the skin&apos;s natural repair response and
              processes involved in collagen formation, which is why
              microneedling is also called Collagen Induction Therapy.
            </p>
          </>
        ),
      },
      {
        q: "What is eDermaStamp?",
        a: (
          <>
            <p>
              eDermaStamp is the professional microneedling system used at
              Smooth Skin Niagara. It uses a powered handpiece designed for
              controlled, precise microneedling treatments.
            </p>
          </>
        ),
      },
      {
        q: "What can microneedling help improve?",
        a: (
          <>
            <p>
              Microneedling is commonly used to improve the appearance of fine
              lines, acne scars, uneven texture, enlarged-looking pores, uneven
              skin tone, selected scars and stretch marks. Suitability depends
              on your individual skin and concern.
            </p>
          </>
        ),
      },
      {
        q: "How many microneedling treatments will I need?",
        a: (
          <>
            <p>
              There is no single number that is right for everyone. Some clients
              choose occasional skin-renewal treatments, while concerns such as
              acne scarring commonly require a treatment series. Your
              recommended schedule depends on your skin, treatment depth,
              concern and goals.
            </p>
          </>
        ),
      },
      {
        q: "When will I see results?",
        a: (
          <>
            <p>
              Results develop gradually because skin remodeling takes time. Some
              people notice changes in texture within several weeks, while
              continued improvement may develop over the following months.
            </p>
          </>
        ),
      },
      {
        q: "Are microneedling results permanent?",
        a: (
          <>
            <p>
              Microneedling can create lasting improvement in some treated
              concerns, but skin continues to change and age naturally. Sun
              exposure, lifestyle, skincare and future maintenance treatments
              can all influence long-term results.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "preparation",
    label: "PREPARATION & RECOVERY",
    heading: "Preparation & Recovery",
    description:
      "How to prepare, what to expect during healing, and how to care for your skin after treatment.",
    icon: ({ color = "currentColor" }: { color?: string }) => (
      <Calendar color={color} size={20} strokeWidth={1.5} />
    ),
    questions: [
      {
        q: "Does microneedling hurt?",
        a: (
          <>
            <p>
              Sensation varies depending on the treatment area, treatment depth
              and individual sensitivity. You may feel pressure, warmth,
              scratching or prickling during treatment.
            </p>
          </>
        ),
      },
      {
        q: "Is there downtime?",
        a: (
          <>
            <p>
              Microneedling typically involves some temporary downtime. Redness,
              warmth, sensitivity, dryness, mild swelling or flaking can occur
              and generally improve over the following days. Deeper treatments
              may require longer recovery.
            </p>
          </>
        ),
      },
      {
        q: "Can I wear makeup after microneedling?",
        a: (
          <>
            <p>
              Your skin needs time to recover. Generally, avoid makeup for at
              least the first 24 hours or until your skin is ready according to
              your specific aftercare instructions.
            </p>
          </>
        ),
      },
      {
        q: "What should I avoid after treatment?",
        a: (
          <>
            <p>
              Follow the clinic&apos;s specific microneedling aftercare
              instructions. Generally: treat the skin gently, avoid picking or
              exfoliating, avoid unnecessary sun exposure, use appropriate sun
              protection, and avoid harsh or irritating skincare until the skin
              has recovered.
            </p>
          </>
        ),
      },
      {
        q: "How long will my skin stay red?",
        a: (
          <>
            <p>
              Visible redness commonly improves within a few days. The amount of
              redness varies with treatment depth, treatment area and individual
              skin response.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "safety",
    label: "SAFETY & OPTIONS",
    heading: "Safety & Options",
    description:
      "Who is suitable, how the four treatment options compare, and what to discuss before booking.",
    icon: ({ color = "currentColor" }: { color?: string }) => (
      <Shield color={color} size={20} strokeWidth={1.5} />
    ),
    questions: [
      {
        q: "Is microneedling suitable for all skin tones?",
        a: (
          <>
            <p>
              Microneedling can generally be performed across a wide range of
              skin tones because the treatment does not rely on targeting
              pigment with heat. Suitability still depends on your individual
              skin condition, medical history and treatment goals.
            </p>
          </>
        ),
      },
      {
        q: "Who may not be suitable for microneedling?",
        a: (
          <>
            <p>
              Microneedling is not appropriate for everyone. Tell us before
              treatment if you have an active skin infection, significant active
              inflammatory acne in the treatment area, a history of abnormal or
              keloid scarring, conditions that affect healing, significant
              current skin irritation, recent sunburn, prescription medications
              or skincare that may affect healing, current or recent
              isotretinoin use, or any relevant medical condition or recent
              procedure.
            </p>
          </>
        ),
      },
      {
        q: "What's the difference between the four microneedling options?",
        a: (
          <>
            <p>
              All four treatments use professional eDermaStamp microneedling.
              The difference is the professional serum protocol paired with the
              treatment:
            </p>
            <ul
              className="mt-[12px] mr-0 mb-0 ml-0 pl-[20px] text-[var(--color-text-secondary)]" style={{ listStyle: "disc" }}
            >
              <li>
                <strong>Hyaluronic Acid</strong> — focused on hydration and
                straightforward skin renewal.
              </li>
              <li>
                <strong>Ready Medical Growth Factors</strong> — an advanced
                rejuvenation option.
              </li>
              <li>
                <strong>Hyaluronic Acid + PDRN + DMAE</strong> — focused on
                visible aging, texture and firmness.
              </li>
              <li>
                <strong>Milk-Derived Exosomes + PDRN</strong> — the
                clinic&apos;s premium advanced renewal option.
              </li>
            </ul>
            <p className="mt-[12px]">
              We&apos;ll help you choose based on your skin rather than
              expecting you to decide from ingredient names alone.
            </p>
          </>
        ),
      },
      {
        q: "Can I add Celluma after microneedling?",
        a: (
          <>
            <p>
              Yes, Celluma LED light therapy may be incorporated after selected
              microneedling treatments when appropriate. Smooth Skin Niagara
              currently offers a 30-minute Celluma add-on for $30.
            </p>
          </>
        ),
      },
      {
        q: "What should I tell you before treatment?",
        a: (
          <>
            <p>
              Please tell us about allergies, medications, prescription
              skincare, pregnancy, recent procedures, active skin conditions,
              history of poor wound healing or abnormal scarring, and anything
              else that may affect treatment or healing.
            </p>
          </>
        ),
      },
    ],
  },
];
