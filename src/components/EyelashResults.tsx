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
    <section style={{ padding: "90px 53px", background: "var(--olive-100)" }}>
      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 13,
              marginBottom: 22,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-brand-primary)",
                fontWeight: 700,
              }}
            >
              Real Lash Results
            </span>
            <span
              style={{
                width: 48,
                height: 1,
                background: "var(--color-border-strong)",
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: 48,
              lineHeight: 1.1,
              color: "var(--color-text-primary)",
              margin: "0 0 16px",
            }}
          >
            Before &amp; After
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--color-text-secondary)",
              margin: "0 auto",
              maxWidth: 560,
            }}
          >
            See the difference customized lash extensions can make — from
            subtle definition to full, fluffy volume.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
              marginTop: 28,
            }}
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
