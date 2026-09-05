"use client";

import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";
import type { GoogleReviewsProps } from "@/components/design-system/trust/GoogleReviews";
import { CheckCircle2, Sparkles, Wind } from "lucide-react";
import React from "react";

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
  return (
    <section
      className="relative overflow-hidden border-b-2 border-[#bfae97] bg-olive-50"
      style={{ minHeight: 780, padding: "80px 53px 70px" }}
    >
      {/* Full-bleed background image - preserves aspect ratio, anchored right */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center lg:bg-right lg:[background-size:auto_100%]"
        style={{
          backgroundImage: "url(/assets/celluma-hero-bg.jpg)",
        }}
      />

      <div
        className="relative z-10 mx-auto w-full"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <div className="w-full min-w-0 lg:max-w-[55%] lg:min-w-[320px]">
          {/* Eyebrow */}
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
              Celluma LED Light Therapy{" "}
              <span style={{ color: "var(--color-brand-deep)" }}>
                · Niagara Falls
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

          {/* Headline */}
          <h1
            className="font-normal text-[44px] leading-[1.05] lg:text-[80px]"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
              margin: "0 0 31px",
            }}
          >
            Light Therapy for
            <br />
            <span style={{ fontStyle: "italic", color: "var(--olive-600)" }}>
              Healthier-Looking Skin
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-base leading-relaxed lg:text-[20px] lg:leading-[1.6]"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-text-secondary)",
              margin: "0 0 40px",
            }}
          >
            Celluma uses blue, red and near-infrared LED light to address
            concerns such as acne, visible signs of aging and discomfort — with
            a relaxing, non-invasive treatment and no downtime.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, marginBottom: 31 }}>
            <Button variant="primary" icon={<Arrow />}>
              Book Your Celluma Treatment
            </Button>
            <Button variant="secondary">See Treatment Options</Button>
          </div>

          <GoogleReviews rating="5.0" count="61+" />

          {/* Benefits */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 24,
              marginTop: 48,
            }}
          >
            {benefits.map((benefit, i) => (
              <React.Fragment key={benefit.title}>
                <div
                  style={{
                    flex: "1 1 180px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    minWidth: 180,
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-brand-primary)",
                    }}
                  >
                    <benefit.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 15,
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        marginBottom: 2,
                      }}
                    >
                      {benefit.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        lineHeight: 1.5,
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      {benefit.text}
                    </div>
                  </div>
                </div>
                {i < benefits.length - 1 && (
                  <div
                    className="hidden h-10 w-px lg:block"
                    style={{ background: "var(--color-border)" }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Right-side decorative accents (desktop only) */}
      <div
        className="pointer-events-none hidden text-right lg:block"
        style={{
          position: "absolute",
          top: "18%",
          right: 53,
          fontFamily: "var(--font-display)",
          fontSize: 22,
          fontStyle: "italic",
          fontWeight: 400,
          lineHeight: 1.2,
          color: "rgba(75, 75, 75, 0.85)",
        }}
      >
        Relax.
        <br />
        Rejuvenate.
        <br />
        Restore.
      </div>

      <div
        className="pointer-events-none hidden items-center gap-3 lg:flex"
        style={{
          position: "absolute",
          bottom: "14%",
          right: 53,
          fontFamily: "var(--font-body)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.8)",
          textShadow: "0 2px 12px rgba(0,0,0,0.25)",
        }}
      >
        <span
          style={{ width: 32, height: 1, background: "rgba(255,255,255,0.55)" }}
        />
        Science + Skin + Wellness
        <span
          style={{ width: 32, height: 1, background: "rgba(255,255,255,0.55)" }}
        />
      </div>
    </section>
  );
}
