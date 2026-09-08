"use client";

import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";
import type { GoogleReviewsProps } from "@/components/design-system/trust/GoogleReviews";
import { CheckCircle2, Sparkles, Wind } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { useConsultation } from "@/components/ConsultationModal";

const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;
const GoogleReviews = (
  GoogleReviewsModule as unknown as {
    GoogleReviews: React.FC<GoogleReviewsProps>;
  }
).GoogleReviews;

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

const benefits = [
  {
    icon: CheckCircle2,
    title: "Non-Invasive",
    text: "No needles or downtime",
  },
  {
    icon: Wind,
    title: "Relaxing Treatment",
    text: "Simply unwind while the light works",
  },
  {
    icon: Sparkles,
    title: "Skin-Focused Care",
    text: "Designed around your skin concerns and goals",
  },
];

export function CellumaHero() {
  const { open: openConsultation } = useConsultation();
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b-2 border-[#bfae97] bg-olive-50",
        "min-h-[780px] pt-[80px] pr-[53px] pb-[70px] pl-[53px]",
      )}
    >
      {/* Full-bleed background image - preserves aspect ratio, anchored right */}
      <div
        className={cn(
          "absolute inset-0 z-0 bg-no-repeat bg-cover bg-center lg:bg-right lg:[background-size:auto_100%]",
          "bg-[url('/assets/celluma-hero-bg.jpg')]",
        )}
      />

      {/* Left-side gradient wash behind the content */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-[1] hidden lg:block",
          "bg-[linear-gradient(toright,var(--olive-50)0%,rgba(245,242,235,0.92)35%,rgba(245,242,235,0)70%)]",
        )}
      />

      <div
        className={cn(
          "relative z-10 mx-auto w-full",
          "max-w-[var(--container-max)]",
        )}
      >
        <div className="w-full min-w-0 lg:max-w-[55%] lg:min-w-[320px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-[13px] mb-[31px]">
            <span className="font-[var(--font-body)] text-[12px] tracking-[0.16em] uppercase text-[var(--color-brand-primary)] font-bold">
              Celluma LED Light Therapy{" "}
              <span className="text-[var(--color-brand-deep)]">
                · Niagara Falls
              </span>
            </span>
            <span className="w-[48px] h-[1px] bg-[var(--color-border-strong)]" />
          </div>

          {/* Headline */}
          <h1
            className={cn(
              "font-normal text-[44px] leading-[1.05] lg:text-[80px]",
              "font-[var(--font-display)] text-[var(--color-text-primary)] mt-0 mr-0 mb-[31px] ml-0",
            )}
          >
            Light Therapy for
            <br />
            <span
              className="text-[var(--olive-600)]"
              style={{ fontStyle: "italic" }}
            >
              Healthier-Looking Skin
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={cn(
              "text-base leading-relaxed lg:text-[20px] lg:leading-[1.6]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[40px] ml-0",
            )}
          >
            Celluma uses blue, red and near-infrared LED light to address
            concerns such as acne, visible signs of aging and discomfort — with
            a relaxing, non-invasive treatment and no downtime.
          </p>

          {/* CTAs */}
          <div className="flex gap-[16px] mb-[31px]">
            <Button
              variant="primary"
              icon={<Arrow />}
              onClick={openConsultation}
            >
              I want a Free Consultation
            </Button>
            <Button variant="secondary">See Treatment Options</Button>
          </div>

          <GoogleReviews rating="5.0" count="61+" />

          {/* Benefits */}
          <div className="flex flex-wrap justify-between items-center gap-[24px] mt-[48px]">
            {benefits.map((benefit, i) => (
              <React.Fragment key={benefit.title}>
                <div className="flex-[1_1_180px] flex items-center gap-[16px] min-w-[180px]">
                  <div
                    className="shrink-0 w-[48px] h-[48px] rounded-[50%] flex items-center justify-center text-[var(--color-brand-primary)]"
                    style={{ border: "1px solid var(--color-border)" }}
                  >
                    <benefit.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-text-primary)] mb-[2px]">
                      {benefit.title}
                    </div>
                    <div className="font-[var(--font-body)] text-[14px] leading-[1.5] text-[var(--color-text-secondary)]">
                      {benefit.text}
                    </div>
                  </div>
                </div>
                {i < benefits.length - 1 && (
                  <div
                    className={cn(
                      "hidden h-10 w-px lg:block",
                      "bg-[var(--color-border)]",
                    )}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Right-side decorative accents (desktop only) */}
      <div
        className={cn(
          "pointer-events-none hidden text-right lg:block",
          "absolute top-[18%] right-[53px] font-[var(--font-display)] text-[22px] font-normal leading-[1.2] text-[rgba(75,75,75,0.85)]",
        )}
        style={{ fontStyle: "italic" }}
      >
        Relax.
        <br />
        Rejuvenate.
        <br />
        Restore.
      </div>

      <div
        className={cn(
          "pointer-events-none hidden items-center gap-3 lg:flex",
          "absolute bottom-[14%] right-[53px] font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[rgba(255,255,255,0.8)]",
        )}
        style={{ textShadow: "0 2px 12px rgba(0,0,0,0.25)" }}
      >
        <span className="w-[32px] h-[1px] bg-[rgba(255,255,255,0.55)]" />
        Science + Skin + Wellness
        <span className="w-[32px] h-[1px] bg-[rgba(255,255,255,0.55)]" />
      </div>
    </section>
  );
}
