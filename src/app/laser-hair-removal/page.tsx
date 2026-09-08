"use client";

import React from "react";
import Header from "@/components/Header";
import { AshleySection } from "@/components/AshleySection";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";
import type { GoogleReviewsProps } from "@/components/design-system/trust/GoogleReviews";
import * as TrustStripModule from "@/components/design-system/trust/TrustStrip";
import type { TrustStripProps } from "@/components/design-system/trust/TrustStrip";
import { useConsultation } from "@/components/ConsultationModal";

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
  const { open: openConsultation } = useConsultation();
  return (
    <section
      className="relative pt-[80px] pr-[53px] pb-[70px] pl-[53px] overflow-hidden"
      style={{ borderBottom: "2px solid #bfae97" }}
    >
      <div
        className="absolute bg-[url('/assets/hero-treatment-olive.png')] bg-cover"
        style={{ inset: 0, backgroundPosition: "right center" }}
      />
      <div
        className="absolute bg-[linear-gradient(toright,var(--olive-50)0%,var(--olive-50)44%,transparent66%)]"
        style={{ inset: 0 }}
      />
      <div className="relative max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="max-w-[42%] min-w-[320px]">
          <div className="flex items-center gap-[13px] mb-[31px]">
            <span className="font-[var(--font-body)] text-[12px] tracking-[0.16em] uppercase text-[var(--color-brand-primary)] font-bold">
              Niagara{" "}
              <span className="text-[var(--color-brand-deep)]">
                Laser Hair Removal
              </span>
            </span>
            <span className="w-[48px] h-[1px] bg-[var(--color-border-strong)]" />
          </div>
          <h1 className="font-[var(--font-display)] font-normal text-[80px] leading-[1.05] text-[var(--color-text-primary)] mt-0 mr-0 mb-[31px] ml-0">
            Confident Skin.
            <br />
            Every Day.
          </h1>
          <p className="font-[var(--font-body)] text-[20px] leading-[1.6] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[40px] ml-0">
            Advanced laser technology meets personalized care for long-lasting
            results and beautifully smooth skin.
          </p>
          <div className="flex gap-[16px] mb-[31px]">
            <Button
              variant="primary"
              icon={<Arrow />}
              onClick={openConsultation}
            >
              I want a Free Consultation
            </Button>
            <Button variant="secondary">View Results</Button>
          </div>
          <GoogleReviews />
        </div>
      </div>
      <div className="relative max-w-[var(--container-max)] mt-[62px] mr-auto mb-0 ml-auto">
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
      className="flex items-center gap-[16px] pt-[20px] pr-[22px] pb-[20px] pl-[22px] rounded-[14px] bg-[var(--olive-50)]"
      style={{
        flexDirection: align === "left" ? "row" : "row-reverse",
        border: "1px solid var(--color-border)",
        textAlign: align,
      }}
    >
      <span
        className="w-[44px] h-[44px] rounded-[50%] text-[var(--color-brand-primary)] flex items-center justify-center shrink-0"
        style={{ border: "1px solid var(--color-brand-primary)" }}
      >
        {icon}
      </span>
      <p className="font-[var(--font-body)] text-[15px] leading-[1.5] text-[var(--color-text-primary)] m-0">
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
          Gradual, long-term hair reduction{" "}
          <strong>with a treatment series</strong>
        </>
      ),
    },
  ];
  const rightFeatures = [
    {
      icon: <Group />,
      text: (
        <>
          Multiple wavelengths to address{" "}
          <strong>different skin and hair types</strong>
        </>
      ),
    },
    {
      icon: <Clock />,
      text: (
        <>
          <strong>Built-in cooling</strong> designed for comfortable sessions
        </>
      ),
    },
    {
      icon: <Check />,
      text: (
        <>
          Personalized settings <strong>selected for your skin and hair</strong>
        </>
      ),
    },
  ];

  return (
    <section className="pt-[90px] pr-[53px] pb-[90px] pl-[53px] bg-[var(--olive-50)]">
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="text-center mb-[56px]">
          <div className="flex items-center justify-center gap-[13px] mb-[22px]">
            <span className="font-[var(--font-body)] text-[12px] tracking-[0.16em] uppercase text-[var(--color-brand-primary)] font-bold">
              Advanced Laser Technology
            </span>
            <span className="w-[48px] h-[1px] bg-[var(--color-border-strong)]" />
          </div>
          <h2 className="font-[var(--font-display)] font-normal text-[48px] leading-[1.1] text-[var(--color-text-primary)] mt-0 mr-0 mb-[16px] ml-0">
            Meet the Soprano ICE Platinum
          </h2>
          <p className="font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)] mt-0 mr-auto mb-0 ml-auto max-w-[560px]">
            Three laser wavelengths in one advanced system with built-in cooling
            for comfortable, effective results.
          </p>
        </div>
        <div className="flex items-center justify-center gap-[32px] flex-wrap">
          <div className="flex-[1_1_280px] max-w-[340px] flex flex-col gap-[18px]">
            {leftFeatures.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} align="left">
                {f.text}
              </FeatureCard>
            ))}
          </div>
          <div className="flex-[0_1_320px] min-w-[220px] flex justify-center">
            <img
              src="/assets/smooth-skin-tech.png"
              alt="Soprano ICE Platinum laser device"
              className="w-full max-w-[300px] h-auto"
            />
          </div>
          <div className="flex-[1_1_280px] max-w-[340px] flex flex-col gap-[18px]">
            {rightFeatures.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} align="right">
                {f.text}
              </FeatureCard>
            ))}
          </div>
        </div>
        <div className="text-center mt-[48px]">
          <Button variant="primary" icon={<Arrow />}>
            Explore Laser Hair Removal
          </Button>
        </div>
      </div>
    </section>
  );
}

function TreatmentAreas() {
  const areas = [
    { title: "Face & Neck", sub: "Upper lip, chin, jawline, sideburns" },
    { title: "Underarms", sub: "Smooth, low-maintenance results" },
    { title: "Arms", sub: "Full arms, half arms or forearms" },
    { title: "Bikini Area", sub: "Bikini, Brazilian or Hollywood" },
    { title: "Legs", sub: "Full legs, lower legs or thighs" },
    { title: "Back & Chest", sub: "For a smoother, cleaner look" },
  ];

  return (
    <section className="pt-[90px] pr-[53px] pb-[90px] pl-[53px] bg-[var(--olive-100)]">
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="text-center mb-[56px]">
          <div className="flex items-center justify-center gap-[13px] mb-[22px]">
            <span className="font-[var(--font-body)] text-[12px] tracking-[0.16em] uppercase text-[var(--color-brand-primary)] font-bold">
              Treatment Areas
            </span>
            <span className="w-[48px] h-[1px] bg-[var(--color-border-strong)]" />
          </div>
          <h2 className="font-[var(--font-display)] font-normal text-[48px] leading-[1.1] text-[var(--color-text-primary)] mt-0 mr-0 mb-[16px] ml-0">
            Smooth Skin, Anywhere You Want It
          </h2>
          <p className="font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)] mt-0 mr-auto mb-0 ml-auto max-w-[560px]">
            Personalized laser hair removal treatments for the face, body and
            everything in between.
          </p>
        </div>
        <div
          className="grid gap-[24px]"
          style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
        >
          {areas.map((area) => (
            <div
              key={area.title}
              className="flex items-start gap-[16px] pt-[26px] pr-[28px] pb-[26px] pl-[28px] rounded-[16px] bg-[#fff]"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span
                className="w-[40px] h-[40px] rounded-[50%] text-[var(--color-brand-primary)] flex items-center justify-center shrink-0"
                style={{ border: "1px solid var(--color-brand-primary)" }}
              >
                <Check />
              </span>
              <div>
                <h4 className="font-[var(--font-display)] text-[20px] font-normal text-[var(--color-text-primary)] mt-0 mr-0 mb-[4px] ml-0">
                  {area.title}
                </h4>
                <p className="font-[var(--font-body)] text-[14px] text-[var(--color-text-secondary)] m-0">
                  {area.sub}
                </p>
              </div>
            </div>
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
      <TreatmentAreas />
      <FaqSection />
      <ReviewsSection prioritizeService="laser" />
      <CtaSection />
    </>
  );
}
