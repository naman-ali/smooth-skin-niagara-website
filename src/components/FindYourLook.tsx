"use client";

import React from "react";

interface TreatmentCard {
  badge: string;
  image: string;
  name: string;
  descriptor: string;
  description: string;
  priceLabel: string;
  price: string;
  maintenance: string;
  policy: string;
}

const treatments: TreatmentCard[] = [
  {
    badge: "LASH EXTENSIONS",
    image: "/assets/Classic-Set.jpg",
    name: "Classic",
    descriptor: "SOFT & NATURAL",
    description:
      "One extension per natural lash for clean, effortless definition.",
    priceLabel: "FULL SET",
    price: "$150",
    maintenance: "2 Week Fill $50 · 3 Week Fill $55 · Removal $25",
    policy: "After 4 weeks, full set pricing applies.",
  },
  {
    badge: "LASH EXTENSIONS",
    image: "/assets/Hybrid-Full-Set.jpeg",
    name: "Hybrid",
    descriptor: "TEXTURED & FULLER",
    description:
      "A blend of Classic and Volume techniques for added fullness with a soft, dimensional finish.",
    priceLabel: "FULL SET",
    price: "$160",
    maintenance: "2 Week Fill $70 · 3 Week Fill $80 · Removal $25",
    policy: "After 4 weeks, full set pricing applies.",
  },
  {
    badge: "LASH EXTENSIONS",
    image: "/assets/Volume-Full-Set.jpeg",
    name: "Volume",
    descriptor: "FULL & FLUFFY",
    description:
      "Lightweight volume fans create a fuller, softer look that can be customized from refined to more dramatic.",
    priceLabel: "FULL SET",
    price: "$190",
    maintenance: "2 Week Fill $80 · 3 Week Fill $100 · Removal $25",
    policy: "After 4 weeks, full set pricing applies.",
  },
  {
    badge: "NATURAL LASH TREATMENT",
    image: "/assets/Lash-Lift-Tint.jpeg",
    name: "Lash Lift & Tint",
    descriptor: "NATURALLY LIFTED & DEFINED",
    description:
      "Enhance the curl, shape and definition of your own lashes without adding extensions.",
    priceLabel: "TREATMENT",
    price: "$90",
    maintenance: "Enhances your natural lashes without extensions.",
    policy: "",
  },
];

function SectionEyebrow() {
  return (
    <div
      className="mb-6 flex items-center justify-center gap-4"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <span className="h-px w-12" style={{ background: "var(--olive-600)" }} />
      <span
        className="text-[11px] font-semibold uppercase tracking-[0.16em]"
        style={{ color: "var(--olive-600)" }}
      >
        FIND YOUR LOOK
      </span>
      <span className="h-px w-12" style={{ background: "var(--olive-600)" }} />
    </div>
  );
}

function TreatmentCard({ card }: { card: TreatmentCard }) {
  return (
    <div
      className="group flex flex-col overflow-hidden transition-all duration-200 ease-out hover:-translate-y-[3px]"
      style={{
        background: "var(--olive-100)",
        border: "1px solid var(--olive-300)",
        borderRadius: 24,
        boxShadow: "0 1px 2px rgba(37,38,36,0.04)",
      }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={card.image}
          alt={card.name}
          className="h-full w-full object-cover"
        />
        <span
          className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em]"
          style={{
            background: "rgba(251, 250, 247, 0.92)",
            color: "var(--olive-700)",
            fontFamily: "var(--font-body)",
          }}
        >
          {card.badge}
        </span>
      </div>

      <div
        className="flex flex-col items-center px-6 pb-8 pt-6 text-center"
        style={{ gap: 4 }}
      >
        <h3
          className="font-normal"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 38,
            lineHeight: 1.1,
            color: "var(--ink-900)",
            margin: 0,
          }}
        >
          {card.name}
        </h3>

        <span
          className="text-[12px] font-semibold uppercase tracking-[0.16em]"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--olive-600)",
            marginBottom: 8,
          }}
        >
          {card.descriptor}
        </span>

        <p
          className="text-[15px] leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--ink-600)",
            margin: "0 0 24px",
            maxWidth: 280,
          }}
        >
          {card.description}
        </p>

        <span
          className="h-px w-12"
          style={{ background: "var(--olive-300)", marginBottom: 20 }}
        />

        <span
          className="text-[11px] font-semibold uppercase tracking-[0.16em]"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--ink-600)",
          }}
        >
          {card.priceLabel}
        </span>

        <span
          className="font-normal"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 50,
            lineHeight: 1.05,
            color: "var(--ink-900)",
            margin: "4px 0 12px",
          }}
        >
          {card.price}
        </span>

        <p
          className="text-sm leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--ink-600)",
            margin: 0,
          }}
        >
          {card.maintenance}
        </p>

        {card.policy && (
          <p
            className="mt-3 text-xs italic"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--ink-600)",
              margin: 0,
            }}
          >
            {card.policy}
          </p>
        )}
      </div>
    </div>
  );
}

export function FindYourLook({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="py-24 md:py-32"
      style={{ background: "var(--olive-50)" }}
    >
      <div className="mx-auto w-full px-6 lg:px-12" style={{ maxWidth: 1400 }}>
        <div className="mb-16 flex flex-col items-center text-center">
          <SectionEyebrow />

          <h2
            className="font-normal"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 60,
              lineHeight: 1.05,
              color: "var(--ink-900)",
              margin: "0 0 24px",
              textAlign: "center",
            }}
          >
            Lashes,{" "}
            <em
              className="font-normal italic"
              style={{ color: "var(--olive-700)" }}
            >
              Your Way.
            </em>
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--ink-600)",
              maxWidth: 720,
              textAlign: "center",
              margin: 0,
            }}
          >
            Whether you want barely-there definition or a fuller, more dramatic
            look, every set is customized to suit your eyes and natural lashes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {treatments.map((t) => (
            <TreatmentCard key={t.name} card={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
