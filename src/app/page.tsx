"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import { AshleySection } from "@/components/AshleySection";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";
import type { GoogleReviewsProps } from "@/components/design-system/trust/GoogleReviews";
import * as TrustStripModule from "@/components/design-system/trust/TrustStrip";
import type { TrustStripProps } from "@/components/design-system/trust/TrustStrip";

const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;
const GoogleReviews = (
  GoogleReviewsModule as unknown as {
    GoogleReviews: React.FC<GoogleReviewsProps>;
  }
).GoogleReviews;
const TrustStrip = (
  TrustStripModule as unknown as { TrustStrip: React.FC<TrustStripProps> }
).TrustStrip;
const Arrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const Pin = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
const Shield = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6l-9-4Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const Leaf = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 21s-8-4.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.5-8 11-8 11Z" />
  </svg>
);
const Person = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);
const PulseWave = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M2 12h4l2 6 4-14 3 8h7" />
  </svg>
);
const BarChart = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>
);
const Group = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="9" cy="8" r="3" />
    <path d="M2 20c0-3.3 3-5 7-5s7 1.7 7 5" />
    <path d="M16 5.5a3 3 0 0 1 0 6" />
    <path d="M17.5 15.2c2.6.5 4.5 2 4.5 4.8" />
  </svg>
);
const Clock = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);
const Check = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 22c4-1.5 7-5 7-10V6l-7-3-7 3v6c0 5 3 8.5 7 10Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        padding: "80px 53px 70px",
        overflow: "hidden",
        borderBottom: "2px solid #bfae97",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/assets/hero-treatment-olive.png)",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, var(--olive-50) 0%, var(--olive-50) 44%, transparent 66%)",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: "42%", minWidth: 320 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 13,
              marginBottom: 31,
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
              Niagara{" "}
              <span style={{ color: "var(--color-brand-deep)" }}>
                Laser Hair Removal
              </span>
            </span>
            <span
              style={{
                width: 48,
                height: 1,
                background: "var(--color-border-strong)",
              }}
            />
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: 80,
              lineHeight: 1.05,
              color: "var(--color-text-primary)",
              margin: "0 0 31px",
            }}
          >
            Confident Skin.
            <br />
            Every Day.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 20,
              lineHeight: 1.6,
              color: "var(--color-text-secondary)",
              margin: "0 0 40px",
            }}
          >
            Advanced laser technology meets personalized care for long-lasting
            results and beautifully smooth skin.
          </p>
          <div style={{ display: "flex", gap: 16, marginBottom: 31 }}>
            <Button variant="primary" icon={<Arrow />}>
              Book Your Free Consultation
            </Button>
            <Button variant="secondary">View Results</Button>
          </div>
          <GoogleReviews />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "62px auto 0",
        }}
      >
        <TrustStrip
          items={[
            {
              icon: <Pin />,
              title: "Proudly Serving",
              desc: "Niagara Falls and surrounding communities",
            },
            {
              icon: <Shield />,
              title: "Safe & Effective",
              desc: "Advanced technology for all skin types",
            },
            {
              icon: <Leaf />,
              title: "Long-Lasting Results",
              desc: "Noticeable reduction in fewer sessions",
            },
            {
              icon: <Person />,
              title: "Personalized Care",
              desc: "Customized treatments for your unique skin",
            },
          ]}
        />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  children,
  align,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  align: "left" | "right";
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: align === "left" ? "row" : "row-reverse",
        alignItems: "center",
        gap: 16,
        padding: "20px 22px",
        border: "1px solid var(--color-border)",
        borderRadius: 14,
        background: "var(--olive-50)",
        textAlign: align,
      }}
    >
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "1px solid var(--color-brand-primary)",
          color: "var(--color-brand-primary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          lineHeight: 1.5,
          color: "var(--color-text-primary)",
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}

function TechnologySection() {
  const leftFeatures = [
    {
      icon: <Leaf />,
      text: (
        <>
          Pain-free treatment, <strong>even on sensitive areas</strong>
        </>
      ),
    },
    {
      icon: <PulseWave />,
      text: (
        <>
          3 wavelengths fire <strong>simultaneously in one pass</strong>
        </>
      ),
    },
    {
      icon: <BarChart />,
      text: (
        <>
          <strong>70&ndash;90% hair clearance</strong> after 6&ndash;10 sessions
        </>
      ),
    },
  ];
  const rightFeatures = [
    {
      icon: <Group />,
      text: (
        <>
          Effective for most skin tones, <strong>including tanned skin</strong>
        </>
      ),
    },
    {
      icon: <Clock />,
      text: (
        <>
          <strong>Zero downtime</strong> &mdash; return to activity immediately
        </>
      ),
    },
    {
      icon: <Check />,
      text: (
        <>
          Safe for all ages, <strong>including young teenagers</strong>
        </>
      ),
    },
  ];

  return (
    <section
      style={{
        padding: "90px 53px",
        background: "var(--olive-50)",
      }}
    >
      <div
        style={{
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
              Advanced Laser Technology
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
            Meet the Soprano ICE Platinum
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
            Three laser wavelengths in one advanced system with built-in cooling
            for comfortable, effective results.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1 1 280px",
              maxWidth: 340,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {leftFeatures.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} align="left">
                {f.text}
              </FeatureCard>
            ))}
          </div>
          <div
            style={{
              flex: "0 1 320px",
              minWidth: 220,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/assets/smooth-skin-tech.png"
              alt="Soprano ICE Platinum laser device"
              style={{ width: "100%", maxWidth: 300, height: "auto" }}
            />
          </div>
          <div
            style={{
              flex: "1 1 280px",
              maxWidth: 340,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {rightFeatures.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} align="right">
                {f.text}
              </FeatureCard>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Button variant="primary" icon={<Arrow />}>
            Explore Laser Hair Removal
          </Button>
        </div>
      </div>
    </section>
  );
}

const results = [
  {
    title: "Legs",
    before: "/assets/hero-treatment.png",
    after: "/assets/hero-treatment-olive.png",
  },
  {
    title: "Underarms",
    before: "/assets/hero-treatment.png",
    after: "/assets/hero-treatment-olive.png",
  },
  {
    title: "Hollywood",
    before: "/assets/hero-treatment.png",
    after: "/assets/hero-treatment-olive.png",
  },
  {
    title: "Full Face",
    before: "/assets/hero-treatment.png",
    after: "/assets/hero-treatment-olive.png",
  },
  {
    title: "Bikini",
    before: "/assets/hero-treatment.png",
    after: "/assets/hero-treatment-olive.png",
  },
  {
    title: "Back",
    before: "/assets/hero-treatment.png",
    after: "/assets/hero-treatment-olive.png",
  },
];

function ResultsSection() {
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
              Real Client Results
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
            Real before-and-after results from Smooth Skin Niagara clients,
            achieved with personalized laser treatments and advanced technology.
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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 32,
          }}
        >
          {filtered.map((r, i) => (
            <BeforeAfter
              key={i}
              beforeSrc={r.before}
              afterSrc={r.after}
              title={r.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AshleySection />
      <TechnologySection />
      <ResultsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
