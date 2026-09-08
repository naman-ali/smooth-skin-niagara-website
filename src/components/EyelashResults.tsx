"use client";

import React, { useState } from "react";
import * as ButtonModule from "@/components/design-system/core/Button";
import { BeforeAfter } from "@/components/BeforeAfter";

const Button: any = (ButtonModule as any).Button;

interface LashResult {
  title: string;
  before: string;
  after: string;
  aspectRatio?: string;
  objectPosition?: string;
}

const results: LashResult[] = [
  {
    title: "Classic",
    before: "/assets/eyelash-extensions-hero.jpg",
    after: "/assets/eyelash-extensions-hero.jpg",
    aspectRatio: "4 / 5",
    objectPosition: "right",
  },
  {
    title: "Hybrid",
    before: "/assets/Hybrid-Full-Set.jpeg",
    after: "/assets/Hybrid-Full-Set.jpeg",
    aspectRatio: "4 / 5",
  },
  {
    title: "Volume",
    before: "/assets/Volume-Full-Set.jpeg",
    after: "/assets/Volume-Full-Set.jpeg",
    aspectRatio: "4 / 5",
  },
  {
    title: "Lash Lift & Tint",
    before: "/assets/Lash-Lift-Tint.jpeg",
    after: "/assets/Lash-Lift-Tint.jpeg",
    aspectRatio: "4 / 5",
  },
];

export function EyelashResults() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(results.map((r) => r.title))),
  ];

  const filtered =
    activeCategory === "All"
      ? results
      : results.filter((r) => r.title === activeCategory);

  return (
    <section className="pt-[90px] pr-[53px] pb-[90px] pl-[53px] bg-[var(--olive-100)]">
      <div
        className="relative max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto"
      >
        <div className="text-center mb-[56px]">
          <div
            className="flex items-center justify-center gap-[13px] mb-[22px]"
          >
            <span
              className="font-[var(--font-body)] text-[12px] tracking-[0.16em] uppercase text-[var(--color-brand-primary)] font-bold"
            >
              Real Lash Results
            </span>
            <span
              className="w-[48px] h-[1px] bg-[var(--color-border-strong)]"
            />
          </div>
          <h2
            className="font-[var(--font-display)] font-normal text-[48px] leading-[1.1] text-[var(--color-text-primary)] mt-0 mr-0 mb-[16px] ml-0"
          >
            Before &amp; After
          </h2>
          <p
            className="font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)] mt-0 mr-auto mb-0 ml-auto max-w-[560px]"
          >
            See the difference customized lash extensions can make — from
            subtle definition to full, fluffy volume.
          </p>
          <div
            className="flex flex-wrap justify-center gap-[12px] mt-[28px]"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "primary" : "secondary"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            justifyItems: "center",
          }}
        >
          {filtered.map((r, i) => (
            <div key={i} className="w-full max-w-[420px]">
              <BeforeAfter
                beforeSrc={r.before}
                afterSrc={r.after}
                title={r.title}
                aspectRatio={r.aspectRatio}
                objectPosition={r.objectPosition}
                beforeClassName="grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
