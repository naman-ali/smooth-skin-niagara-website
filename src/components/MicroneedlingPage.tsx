"use client";

import {
  Check,
  CheckCircle,
  Clock,
  Info,
  Leaf,
  Plus,
  Phone,
  Play,
  Shield,
  Sparkles,
  Sun,
  Thermometer,
  User,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import { FaqSection } from "@/components/FaqSection";
import Header from "@/components/Header";
import * as ButtonModule from "@/components/design-system/core/Button";
import { useConsultation } from "@/components/ConsultationModal";
import { AshleySection } from "@/components/AshleySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import type { ButtonProps } from "@/components/design-system/core/Button";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/reviews";
import type { GoogleReviewsProps } from "@/components/design-system/trust/GoogleReviews";
import { microneedlingFaqCategories } from "@/lib/microneedling-faq";
import { cn } from "@/lib/utils";

const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;
const GoogleReviews = (
  GoogleReviewsModule as unknown as {
    GoogleReviews: React.FC<GoogleReviewsProps>;
  }
).GoogleReviews;

const sectionPadding = "px-3 lg:px-[53px]";
const containerMax = "max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto";

const eyebrowStyle =
  "font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)]";

const displayHeadingStyle =
  "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]";

const bodyTextStyle =
  "font-[var(--font-body)] text-[var(--color-text-secondary)]";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "block",
        "font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)]",
      )}
    >
      {children}
    </span>
  );
}

function SectionHeading({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      className={cn(
        "text-[36px] leading-[1.1] lg:text-[44px]",
        "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]",
      )}
      style={{ ...style }}
    >
      {children}
    </h2>
  );
}

function MicroneedlingHero() {
  const { open: openConsultation } = useConsultation();
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b-2 border-[#bfae97] bg-olive-50",
        "min-h-0 lg:min-h-[820px] pt-[80px] px-3 pb-[70px] lg:px-7",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 z-0 bg-cover bg-center bg-no-repeat lg:bg-right lg:[background-size:auto_100%]",
          "bg-[url('/assets/microneedling-hero.jpg')]",
        )}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, var(--olive-50) 0%, rgba(245,242,235,0.95) 40%, rgba(245,242,235,0.55) 62%, transparent 78%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(245,242,235,0.94) 0%, rgba(245,242,235,0.8) 55%, rgba(245,242,235,0.35) 100%)",
        }}
      />

      <div
        className={cn(
          "relative z-10 mx-auto w-full",
          "max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto",
        )}
      >
        <div className="w-full min-w-0 lg:max-w-[55%] lg:min-w-[320px]">
          <div className="flex items-center gap-[13px] mb-[31px]">
            <h1
              className={cn(
                "m-0 text-[12px] font-bold uppercase tracking-[0.16em]",
                "font-[var(--font-body)] text-[var(--color-brand-primary)]",
              )}
            >
              eDermaStamp Microneedling{" "}
              <span className="text-[var(--color-brand-deep)]">
                · Niagara Falls
              </span>
            </h1>
            <span className="w-[48px] h-[1px] bg-[var(--color-border-strong)]" />
          </div>

          <p
            className={cn(
              "text-[44px] leading-[1.05] lg:text-[80px]",
              "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-0 mr-0 mb-[31px] ml-0",
            )}
          >
            Microneedling for
            <br className="hidden md:inline" />
            <span
              className={cn(
                "italic",
                "text-[var(--olive-600)] font-[var(--font-display)]",
              )}
            >
              Smoother, Firmer-Looking Skin
            </span>
          </p>

          <p
            className={cn(
              "text-base leading-relaxed lg:text-[20px] lg:leading-[1.6]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[40px] ml-0",
            )}
          >
            Professional eDermaStamp microneedling creates controlled
            microchannels in the skin to activate its natural renewal response,
            helping improve the appearance of fine lines, acne scars, uneven
            texture and overall skin quality.
          </p>

          <div className={cn("flex flex-col gap-4 lg:flex-row", "mb-[31px]")}>
            <Button
              variant="primary"
              onClick={openConsultation}
              style={{ whiteSpace: "normal", maxWidth: "100%" }}
            >
              I want a Free Consultation →
            </Button>
            <Button
              variant="secondary"
              href="#results"
              style={{ maxWidth: "100%", whiteSpace: "normal" }}
            >
              View Results
            </Button>
          </div>

          <GoogleReviews rating={GOOGLE_RATING} count={GOOGLE_REVIEW_COUNT} />

          <div
            className={cn(
              "mt-12 flex flex-wrap items-center gap-8",
              "flex flex-wrap gap-[24px] mt-[48px]",
            )}
          >
            {[
              { icon: Sparkles, text: "Professional eDermaStamp System" },
              { icon: Leaf, text: "Collagen Induction Therapy" },
              { icon: User, text: "Personalized Treatment" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-[14px] font-[var(--font-body)] text-[15px] text-[var(--color-text-primary)]"
              >
                <item.icon
                  size={22}
                  strokeWidth={1.5}
                  color="var(--color-brand-primary)"
                />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const concerns = [
  {
    icon: Sparkles,
    title: "Fine Lines & Wrinkles",
    text: "Supports gradual skin renewal to soften the visible appearance of fine lines and improve overall texture.",
  },
  {
    icon: CheckCircle,
    title: "Acne Scars",
    text: "Can help improve the appearance and texture of certain acne scars over a series of treatments.",
  },
  {
    icon: Leaf,
    title: "Uneven Texture",
    text: "Supports smoother, more refined-looking skin by encouraging the skin's natural repair response.",
  },
  {
    icon: Sun,
    title: "Enlarged-Looking Pores",
    text: "Improved skin texture can help reduce the visible appearance of enlarged pores.",
  },
  {
    icon: Shield,
    title: "Uneven Tone",
    text: "Can support a brighter, more even-looking complexion as the skin renews.",
  },
  {
    icon: Thermometer,
    title: "Scars & Stretch Marks",
    text: "Collagen Induction Therapy may also be used on selected scars and stretch marks on the body.",
  },
];

function MicroneedlingConcerns() {
  return (
    <section
      className={cn(`${sectionPadding} bg-olive-50`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <SectionEyebrow>SKIN RENEWAL · FROM WITHIN</SectionEyebrow>
          <SectionHeading
            style={{
              margin: "0 0 16px",
              marginTop: 22,
            }}
          >
            What Can Microneedling Help Improve?
          </SectionHeading>
          <p
            className={cn(
              "mx-auto max-w-[680px] text-base lg:text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6] mt-0 mr-auto mb-0 ml-auto",
            )}
          >
            Microneedling is used to support the skin&apos;s natural renewal
            process and can improve the appearance of several common texture,
            scarring and aging concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {concerns.map((item) => (
            <div
              key={item.title}
              className="flex gap-[16px] pt-[28px] pr-[24px] pb-[28px] pl-[24px] bg-[var(--olive-100)] rounded-[18px]"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <item.icon
                size={24}
                strokeWidth={1.4}
                color="var(--color-brand-primary)"
              />
              <div>
                <h4 className="font-[var(--font-display)] text-[18px] font-medium text-[var(--color-text-primary)] mt-0 mr-0 mb-[8px] ml-0">
                  {item.title}
                </h4>
                <p className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-[15px] leading-[1.55] m-0">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className={cn(
            "mx-auto mt-12 max-w-[680px] text-center text-[15px]",
            "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
          )}
        >
          Not sure whether microneedling is suitable for your concern?
          We&apos;ll assess your skin before recommending treatment.
        </p>
      </div>
    </section>
  );
}

function MicroneedlingHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Treat",
      text: "The eDermaStamp handpiece creates controlled microchannels at a treatment depth selected for your skin and concern.",
    },
    {
      number: "02",
      title: "Renew",
      text: "The microscopic channels close while the skin begins its natural repair process.",
    },
    {
      number: "03",
      title: "Rejuvenate",
      text: "Skin remodeling continues over time, helping improve texture, firmness and the appearance of scars and fine lines.",
    },
  ];

  return (
    <section
      className={cn(`${sectionPadding} bg-olive-50`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src="/assets/microneedling-works.jpg"
              alt="eDermaStamp microneedling technology"
              className={cn("w-full", "rounded-[18px]")}
              style={{ border: "1px solid var(--color-border)" }}
            />
          </div>
          <div>
            <SectionEyebrow>COLLAGEN INDUCTION THERAPY</SectionEyebrow>
            <SectionHeading style={{ margin: "22px 0 20px" }}>
              Small Microchannels.
              <br className="hidden md:inline" />A Natural Renewal Response.
            </SectionHeading>
            <p
              className={cn(
                "mb-10 text-base lg:text-[17px]",
                "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.65]",
              )}
            >
              eDermaStamp uses fine, precisely controlled needles to create
              microscopic channels in the skin. These controlled micro-injuries
              activate the skin&apos;s normal healing response and processes
              involved in collagen formation.
            </p>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-[20px]">
                  <span className="font-[var(--font-display)] text-[28px] text-[var(--color-brand-primary)] leading-[1]">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="font-[var(--font-display)] text-[22px] font-medium text-[var(--color-text-primary)] mt-0 mr-0 mb-[8px] ml-0">
                      {step.title}
                    </h4>
                    <p className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-[15px] leading-[1.6] m-0">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={cn(
                "mt-12 inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-[13px]",
                "font-[var(--font-body)] text-[var(--color-text-secondary)]",
              )}
            >
              <Sparkles size={16} color="var(--color-brand-primary)" />
              Professional eDermaStamp Microneedling · Dermaroller® Technology
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface PricingItem {
  tag: string;
  name: string;
  programBadge?: string;
  text: string;
  bestFor: string[];
  price: string;
  priceCaption?: string;
  meta?: string;
  note?: string;
}

// Provisional price pending Ashley's confirmation
const PIGMENT_PROGRAM_PRICE = "$2,000";

const treatmentGroups: { label: string; items: PricingItem[] }[] = [
  {
    label: "eDermaStamp® Treatments",
    items: [
      {
        tag: "SIGNATURE",
        name: "Signature eDermaStamp® Face",
        text: "Our classic collagen-induction treatment for the face, customized to your skin concerns. Infused with a sterile, high-potency hyaluronic acid serum and finished with customized post-treatment care.",
        bestFor: [
          "Fine Lines",
          "Texture",
          "Enlarged Pores",
          "Dullness",
          "Firmness",
        ],
        price: "$350",
        meta: "≈ 60 minutes",
      },
      {
        tag: "FACE + NECK",
        name: "eDermaStamp® Face + Neck",
        text: "Extends your collagen-induction treatment beyond the face to address visible signs of aging and loss of firmness through the neck.",
        bestFor: ["Fine Lines", "Crepey Texture", "Firmness", "Uneven Tone"],
        price: "$425",
        meta: "≈ 75 minutes",
      },
      {
        tag: "MOST COMPREHENSIVE",
        name: "eDermaStamp® Face + Neck + Décolleté",
        text: "Our most comprehensive collagen-induction treatment, a beautiful choice for improving the appearance of sun-damaged, aging or textured skin across these commonly neglected areas.",
        bestFor: ["Sun Damage", "Aging Skin", "Texture", "Rejuvenation"],
        price: "$500",
        meta: "≈ 90 minutes",
      },
    ],
  },
  {
    label: "Advanced Skin Regeneration",
    items: [
      {
        tag: "GROWTH FACTORS",
        name: "Growth Factor Rejuvenation",
        text: "Advanced eDermaStamp® microneedling infused with professional growth factors (signal proteins that act like little instructions telling your skin cells to repair and renew) to support collagen production and overall skin rejuvenation.",
        bestFor: [
          "Fine Lines",
          "Firmness",
          "Dull Skin",
          "Post-Acne Skin",
          "Rejuvenation",
        ],
        price: "$450",
        meta: "Face treatment",
      },
      {
        tag: "SKIN REPAIR",
        name: "PDRN Rejuvenation",
        text: "A targeted skin-rejuvenation treatment combining eDermaStamp® microneedling with PDRN (Salmon DNA) and DMAE. PDRN provides DNA fragments that support the skin's natural repair and renewal processes, while DMAE helps promote a firmer, more toned appearance. Together, this advanced combination helps improve the appearance of fine lines, wrinkles, loss of firmness, elasticity and overall skin texture, leaving the skin looking smoother, refreshed and revitalized.",
        bestFor: [
          "Fine Lines",
          "Elasticity",
          "Post-Acne Skin",
          "Photodamaged Skin",
        ],
        price: "$475",
        meta: "Face treatment",
      },
      {
        tag: "MOST ADVANCED",
        name: "Advanced Regenerative eDermaStamp®",
        text: "An advanced skin-renewal treatment combining sterile Milk Exosomes and PDRN with eDermaStamp® microneedling. This regenerative combination supports the skin's natural repair and renewal processes while helping improve the appearance of fine lines, wrinkles, uneven texture, elasticity and overall skin quality. Ideal for clients looking for an elevated rejuvenation treatment to promote smoother, healthier-looking, more revitalized skin.",
        bestFor: ["Rejuvenation", "Firmness", "Radiance", "Skin Quality"],
        price: "$550",
        meta: "Face treatment",
      },
    ],
  },
  {
    label: "Targeted Correction",
    items: [
      {
        tag: "SCARRING + TEXTURE",
        name: "Acne Scarring / Texture",
        text: "Customized eDermaStamp® treatment designed specifically around acne scarring, enlarged pores and uneven skin texture, paired with a medical-grade acne serum to support clearer-looking skin. Treatment intensity and areas are customized to your skin and goals.",
        bestFor: ["Acne Scarring", "Enlarged Pores", "Uneven Texture"],
        price: "Starting at $400",
      },
      {
        tag: "PIGMENT + SUN DAMAGE",
        name: "Pigment & Sun-Damage Correction",
        programBadge: "7-Session Program",
        text: "A specialized seven-session eDermaStamp® program designed to improve the appearance of uneven pigmentation, sun damage and skin tone. Each session uses a targeted pigment-correcting serum, with a take-home roller included to support your at-home care routine.",
        bestFor: ["Specialized Serums", "Take-Home Roller"],
        price: PIGMENT_PROGRAM_PRICE,
        priceCaption: "Complete Program",
        note: "Includes all seven professional sessions, specialized serum ampoules and a take-home roller. Consultation recommended before starting. Treatment suitability is assessed individually.",
      },
    ],
  },
];

const seriesPackages = [
  { name: "Signature Face", price: "$945", regular: "$1,050" },
  { name: "Face + Neck", price: "$1,148", regular: "$1,275" },
  { name: "Face + Neck + Décolleté", price: "$1,350", regular: "$1,500" },
];

export function MicroneedlingPricing() {
  const { open: openConsultation } = useConsultation();
  return (
    <section
      id="treatment-options"
      className={cn(`${sectionPadding} bg-olive-100`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <SectionEyebrow>
            eDermaStamp® Collagen Induction Therapy
          </SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Choose the Treatment That Fits Your Skin
          </SectionHeading>
          <p
            className={cn(
              "mx-auto max-w-[680px] text-base lg:text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
            )}
          >
            Performed by Ashley with 8+ years of microneedling experience. Every
            treatment is customized to your skin and your goals.
          </p>
        </div>

        {treatmentGroups.map((group) => (
          <div key={group.label} className="mb-14 last:mb-0">
            <div className="mb-8 flex items-center gap-[16px]">
              <span className={eyebrowStyle}>{group.label}</span>
              <span className="h-[1px] flex-1 bg-[var(--color-border)]" />
            </div>

            <div
              className={cn(
                "grid grid-cols-1 gap-6 md:grid-cols-2",
                group.items.length > 2 && "lg:grid-cols-3",
              )}
            >
              {group.items.map((t) => (
                <div
                  key={t.name}
                  className="bg-[#fff] rounded-[20px] pt-[34px] pr-[30px] pb-[34px] pl-[30px] flex flex-col"
                  style={{ border: "1px solid var(--color-border)" }}
                >
                  <div className="mb-[18px] flex items-center justify-between gap-[10px]">
                    <span
                      className="font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)] pt-[6px] pr-[10px] pb-[6px] pl-[10px] rounded-[6px] bg-[var(--olive-100)]"
                      style={{ border: "1px solid var(--color-border)" }}
                    >
                      {t.tag}
                    </span>
                    {t.meta && (
                      <span className="flex items-center gap-[6px] font-[var(--font-body)] text-[12px] font-medium text-[var(--color-text-secondary)] whitespace-nowrap">
                        <Clock
                          size={13}
                          strokeWidth={1.75}
                          className="text-[var(--color-brand-primary)]"
                        />
                        {t.meta}
                      </span>
                    )}
                  </div>
                  <h3 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[24px] mt-0 mr-0 mb-[12px] ml-0">
                    {t.name}
                  </h3>
                  {t.programBadge && (
                    <span
                      className="inline-block font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary)] bg-[var(--olive-100)] pt-[4px] pr-[10px] pb-[4px] pl-[10px] rounded-[999px] mb-[12px]"
                      style={{ border: "1px solid var(--color-border)" }}
                    >
                      {t.programBadge}
                    </span>
                  )}
                  <p
                    className={cn(
                      "text-[15px] leading-relaxed",
                      "font-[var(--font-body)] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[18px] ml-0",
                    )}
                  >
                    {t.text}
                  </p>
                  <div className="flex flex-wrap gap-[8px] mb-[24px]">
                    {t.bestFor.map((chip) => (
                      <span
                        key={chip}
                        className="font-[var(--font-body)] text-[12px] font-semibold text-[var(--olive-700)] bg-[var(--olive-100)] pt-[6px] pr-[10px] pb-[6px] pl-[10px] rounded-[999px]"
                        style={{ border: "1px solid var(--color-border)" }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="mt-[auto]">
                    <div className="flex items-baseline gap-[12px] mb-[4px]">
                      <span className="font-[var(--font-display)] text-[32px] font-medium text-[var(--color-text-primary)]">
                        {t.price}
                      </span>
                    </div>
                    {t.priceCaption && (
                      <span className="block font-[var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-primary)] mb-[6px]">
                        {t.priceCaption}
                      </span>
                    )}
                    {t.note && (
                      <p className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-[13px] leading-[1.5] mt-[8px] mb-0">
                        {t.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Add-on */}
        <div
          className="mt-4 flex flex-col items-start gap-[14px] rounded-[16px] bg-white p-[26px] sm:flex-row sm:items-center sm:justify-between"
          style={{ border: "1px solid var(--color-border)" }}
        >
          <div className="flex items-center gap-[16px]">
            <span
              className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[var(--olive-100)] text-[var(--color-brand-primary)]"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <Plus size={20} strokeWidth={1.75} />
            </span>
            <div>
              <h4 className="font-[var(--font-display)] text-[20px] font-medium text-[var(--color-text-primary)] m-0">
                Enhance with Celluma® LED Light Therapy
              </h4>
              <p className="font-[var(--font-body)] text-[14px] leading-[1.55] text-[var(--color-text-secondary)] m-0 mt-[4px]">
                A calming, restorative finishing step, especially beneficial for
                additional soothing and post-treatment support.
              </p>
            </div>
          </div>
          <span className="font-[var(--font-display)] text-[28px] font-medium text-[var(--color-text-primary)] whitespace-nowrap">
            +$40
          </span>
        </div>

        {/* Series of 3 */}
        <div className="mt-12 rounded-[20px] bg-ink-900 p-[34px] sm:p-[44px]">
          <div className="mb-[26px] text-center">
            <span className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--olive-100)]">
              Save with a series of 3 · ~10% savings
            </span>
            <h4 className="font-[var(--font-display)] text-[28px] font-normal text-white mt-[12px] mr-0 mb-0 ml-0">
              Microneedling Series
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-3">
            {seriesPackages.map((p) => (
              <div
                key={p.name}
                className="rounded-[14px] px-[22px] py-[22px] text-center"
                style={{
                  border: "1px solid var(--olive-700)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <p className="font-[var(--font-body)] text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--olive-200)] m-0">
                  {p.name}
                </p>
                <p className="font-[var(--font-display)] text-[30px] font-medium text-white mt-[8px] mr-0 mb-[2px] ml-0">
                  {p.price}
                </p>
                <p className="font-[var(--font-body)] text-[13px] text-[var(--olive-200)] m-0">
                  <span className="line-through opacity-70">
                    Regular {p.regular}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-[22px] max-w-[560px] text-center font-[var(--font-body)] text-[14px] leading-[1.6] text-[var(--olive-200)]">
            A series is recommended when the goal is progressive improvement in
            collagen, texture, scarring or overall skin quality. Treatments are
            spaced according to your individual skin and treatment plan.
          </p>
        </div>

        <div className="mt-14 text-center">
          <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[26px] mt-0 mr-0 mb-[10px] ml-0">
            Your skin. Your treatment.
          </h4>
          <p
            className={cn(
              "mb-8 text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
            )}
          >
            There is no one-size-fits-all microneedling treatment. We&apos;ll
            help you choose based on your skin, concerns and treatment goals.
          </p>
          <Button
            variant="primary"
            onClick={openConsultation}
            style={{ whiteSpace: "normal", maxWidth: "100%" }}
          >
            I want a Free Consultation →
          </Button>
        </div>
      </div>
    </section>
  );
}

interface ConfiguratorArea {
  id: string;
  label: string;
  summaryName?: string;
  description?: string;
  price?: number;
  duration?: string;
}

interface ConfiguratorSerum {
  id: string;
  name: string;
  description: string;
  concerns: string[];
  faceUpgrade: number;
}

const configuratorAreas: ConfiguratorArea[] = [
  {
    id: "face",
    label: "Face",
    summaryName: "Face",
    price: 350,
    duration: "≈ 60 minutes",
  },
  { id: "neck", label: "Neck Only", price: 350, duration: "≈ 45 minutes" },
  {
    id: "decollete",
    label: "Décolleté Only",
    price: 350,
    duration: "≈ 45 minutes",
  },
  {
    id: "neck-decollete",
    label: "Neck + Décolleté",
    price: 425,
    duration: "≈ 60 minutes",
  },
  {
    id: "face-neck",
    label: "Face + Neck",
    price: 425,
    duration: "≈ 75 minutes",
  },
  {
    id: "face-neck-decollete",
    label: "Face + Neck + Décolleté",
    price: 500,
    duration: "≈ 90 minutes",
  },
];

// Serum upgrade amounts apply on top of any confirmed treatment-area price.
const serumUpgradeConfirmedAreas = new Set(configuratorAreas.map((a) => a.id));

const CELLUMA_ADDON_PRICE = 40;

// Applied during every treatment; advanced serums are added on top.
const baseSerum: ConfiguratorSerum = {
  id: "signature-hydrating",
  name: "Signature Hydrating Serum",
  description:
    "A sterile, high-potency hyaluronic acid serum applied during every treatment. It deeply hydrates, supports the skin's recovery and creates the smooth base every advanced serum builds on.",
  concerns: ["Hydration", "Recovery", "Glow"],
  faceUpgrade: 0,
};

// Serum upgrades are priced per vial; one vial is used per session.
const configuratorSerums: ConfiguratorSerum[] = [
  {
    id: "rm-growth-factor",
    name: "Ready Medical Growth Factor",
    description:
      "A sterile Ready Medical formulation featuring growth factors, signal proteins that tell your skin cells to repair and renew. Supports collagen production and skin regeneration, a popular choice for softening the look of fine lines and improving overall texture.",
    concerns: ["Fine Lines", "Skin Texture", "Skin Renewal", "Post-Acne Skin"],
    faceUpgrade: 115,
  },
  {
    id: "rm-vitamin-c",
    name: "Ready Medical Vitamin C",
    description:
      "A sterile Ready Medical vitamin C formulation that helps brighten the complexion, supports collagen and improves the look of dullness, uneven tone and pigmentation.",
    concerns: ["Dullness", "Uneven Tone", "Pigmentation", "Radiance"],
    faceUpgrade: 115,
  },
  {
    id: "rm-acne-solution",
    name: "Ready Medical Acne Solution",
    description:
      "A sterile Ready Medical formulation designed for acne-prone and congested skin. Helps calm the look of breakouts, refine the appearance of enlarged pores and support clearer-looking skin.",
    concerns: ["Acne-Prone Skin", "Breakouts", "Enlarged Pores", "Congestion"],
    faceUpgrade: 115,
  },
  {
    id: "pdrn-dmae-ha",
    name: "PDRN + DMAE + HA",
    description:
      "An advanced formulation combining PDRN (salmon DNA) to support the skin's natural repair and renewal, DMAE to promote a firmer, more toned appearance, and hyaluronic acid for deep hydration. A great choice for firmness, elasticity, fine lines and overall skin texture.",
    concerns: ["Fine Lines", "Firmness", "Elasticity", "Hydration"],
    faceUpgrade: 150,
  },
];

const SERIES_DISCOUNT = 0.1;

const configuratorSessions = [
  { id: "single", label: "Single Session", count: 1, discount: 0 },
  { id: "series-3", label: "Series of 3", count: 3, discount: SERIES_DISCOUNT },
  { id: "series-6", label: "Series of 6", count: 6, discount: SERIES_DISCOUNT },
];

const pigmentProgramIncludes = [
  "Seven professional microneedling sessions",
  "Seven XCellarisPRO High Light serum ampoules",
  "Take-home roller",
];

const pigmentProgramIngredients = [
  "Niacinamide",
  "Mandelic Acid",
  "Morus Alba Root Extract",
];

const pigmentKitImageSrc = "/assets/xcellarispro-high-light-serum.jpg";

// Dark luxury treatment for the specialized pigment program card.
const pigmentDark = {
  bg: "linear-gradient(150deg, #2E3B21 0%, #212B17 55%, #182110 100%)",
  border: "rgba(245,242,235,0.16)",
  gold: "#C8B48A",
  goldBg: "rgba(200,180,138,0.12)",
  goldBorder: "rgba(200,180,138,0.38)",
  title: "#F5F2EB",
  body: "rgba(245,242,235,0.72)",
  muted: "rgba(245,242,235,0.52)",
  chipBg: "rgba(245,242,235,0.07)",
  chipBorder: "rgba(245,242,235,0.18)",
};

const configuratorRadioCard =
  "group block cursor-pointer rounded-[16px] border border-[var(--color-border)] bg-white p-[18px] transition-colors has-[:checked]:border-[var(--color-brand-primary)] has-[:checked]:bg-[var(--olive-100)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--color-brand-primary)] has-[:focus-visible]:ring-offset-2";

const configuratorRadioDot =
  "mt-[2px] h-[18px] w-[18px] shrink-0 rounded-full border-2 border-[var(--color-border-strong)] bg-transparent transition-all group-has-[:checked]:border-[var(--color-brand-primary)] group-has-[:checked]:bg-[var(--color-brand-primary)] group-has-[:checked]:shadow-[inset_0_0_0_3px_#fff]";

const configuratorCheckboxBox =
  "mt-[2px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] border-2 border-[var(--color-border-strong)] transition-all group-has-[:checked]:border-[var(--color-brand-primary)] group-has-[:checked]:bg-[var(--color-brand-primary)]";

const configuratorCheckboxCheck =
  "text-white opacity-0 transition group-has-[:checked]:opacity-100";

function TreatmentAreaIcon({ areaId }: { areaId: string }) {
  const showFace = areaId === "face" || areaId.startsWith("face-");
  const showNeck = areaId.includes("neck");
  const showDecollete = areaId.includes("decollete");
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="h-[72px] w-[72px] shrink-0"
    >
      <g fill="var(--olive-200)">
        {showFace && <ellipse cx="32" cy="15.5" rx="9.5" ry="10.5" />}
        {showNeck && <path d="M28.5 24 h7 v9.5 h-7 Z" />}
        {showDecollete && (
          <path d="M28.5 33.5 L35.5 33.5 Q41 37 43 43 Q32 49 21 43 Q23 37 28.5 33.5 Z" />
        )}
      </g>
      <g
        fill="none"
        stroke="var(--color-text-secondary)"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <ellipse cx="32" cy="15.5" rx="9.5" ry="10.5" />
        <path d="M28.5 24.5 L28.5 34" />
        <path d="M35.5 24.5 L35.5 34" />
        <path d="M28.5 34 Q24 36 21 40" />
        <path d="M35.5 34 Q40 36 43 40" />
        <path d="M8 54 C13 40 22 33 32 33 C42 33 51 40 56 54" />
      </g>
    </svg>
  );
}

function MicroneedlingConfigurator() {
  const { open: openConsultation } = useConsultation();
  const [areaId, setAreaId] = useState("face");
  const [serumIds, setSerumIds] = useState<string[]>([]);
  const [sessionId, setSessionId] = useState("single");
  const [celluma, setCelluma] = useState(false);
  const [showBaseSerumNote, setShowBaseSerumNote] = useState(false);

  const area = configuratorAreas.find((a) => a.id === areaId)!;
  const selectedSerums = configuratorSerums.filter((s) =>
    serumIds.includes(s.id),
  );
  const serumUpgrade = selectedSerums.reduce((sum, s) => sum + s.faceUpgrade, 0);
  const toggleSerum = (id: string) =>
    setSerumIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  const upgradeConfirmed =
    serumUpgrade === 0 || serumUpgradeConfirmedAreas.has(area.id);
  const priceConfirmed = area.price !== undefined && upgradeConfirmed;
  const session = configuratorSessions.find((s) => s.id === sessionId)!;
  const serumUpgradeDetail = [
    selectedSerums.length > 1 ? `${selectedSerums.length} serums` : null,
    session.count > 1 && serumUpgrade > 0
      ? `${session.count} × $${serumUpgrade.toLocaleString("en-CA")} per session`
      : null,
  ]
    .filter(Boolean)
    .join(", ");
  const perSession = (area.price ?? 0) + serumUpgrade;
  const seriesUndiscounted = perSession * session.count;
  const seriesDiscountAmount =
    Math.round(seriesUndiscounted) -
    Math.round(seriesUndiscounted * (1 - session.discount));
  const total = priceConfirmed
    ? Math.round(seriesUndiscounted * (1 - session.discount)) +
      (celluma ? CELLUMA_ADDON_PRICE * session.count : 0)
    : null;

  return (
    <section
      id="customize-treatment"
      className={cn(`${sectionPadding} bg-olive-50`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <SectionEyebrow>eDermaStamp® Microneedling</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Estimate Your Treatment Cost
          </SectionHeading>
          <p
            className={cn(
              "mx-auto max-w-[680px] text-base lg:text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
            )}
          >
            Choose your options below for an instant estimate. Every treatment
            is performed by Ashley with 8+ years of microneedling experience,
            and the final plan is tailored to your skin during a free
            consultation.
          </p>
        </div>

        <div className="border border-transparent p-0 sm:rounded-[24px] sm:border-[var(--color-border)] sm:bg-white sm:p-[36px]">
          <fieldset className="m-0 min-w-0 border-0 p-0">
            <legend className="mb-[18px] p-0">
              <span className={eyebrowStyle}>Step 1</span>
              <span className="mt-[6px] block font-[var(--font-display)] text-[20px] lg:text-[22px] font-normal text-[var(--color-text-primary)]">
                eDermaStamp® Microneedling — Choose Your Treatment Area
              </span>
            </legend>
            <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 lg:grid-cols-3">
              {configuratorAreas.map((a) => (
                <label key={a.id} className={configuratorRadioCard}>
                  <input
                    type="radio"
                    name="mn-treatment-area"
                    value={a.id}
                    checked={areaId === a.id}
                    onChange={() => setAreaId(a.id)}
                    className="sr-only"
                  />
                  <span className="flex items-start justify-between gap-[12px]">
                    <span className="flex min-w-0 items-start gap-[12px]">
                      <TreatmentAreaIcon areaId={a.id} />
                      <span className="min-w-0">
                        <span className="block font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-text-primary)]">
                          {a.label}
                        </span>
                        {a.description && (
                          <span className="mt-[4px] block font-[var(--font-body)] text-[12px] leading-[1.55] text-[var(--color-text-secondary)]">
                            {a.description}
                          </span>
                        )}
                        {a.price !== undefined ? (
                          <span className="mt-[4px] block font-[var(--font-display)] text-[22px] font-medium text-[var(--color-text-primary)]">
                            ${a.price}
                          </span>
                        ) : (
                          <span className="mt-[4px] block font-[var(--font-body)] text-[13px] text-[var(--color-text-secondary)]">
                            Price to be confirmed
                          </span>
                        )}
                        {a.duration && (
                          <span className="mt-[2px] block font-[var(--font-body)] text-[12px] text-[var(--color-text-secondary)]">
                            {a.duration}
                          </span>
                        )}
                        {a.price === undefined && (
                          <span className="mt-[6px] inline-block font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
                            Proposed
                          </span>
                        )}
                      </span>
                    </span>
                    <span aria-hidden="true" className={configuratorRadioDot} />
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="m-0 mt-[34px] min-w-0 border-0 p-0">
            <legend className="mb-[6px] p-0">
              <span className={eyebrowStyle}>Step 2</span>
              <span className="mt-[6px] block font-[var(--font-display)] text-[20px] lg:text-[22px] font-normal text-[var(--color-text-primary)]">
                Choose Your Serums
              </span>
            </legend>
            <p className="mt-0 mr-0 mb-[18px] ml-0 font-[var(--font-body)] text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
              Every treatment includes our Signature Hydrating Serum, applied as
              the hydrating base during your treatment. Add one or more advanced
              serums to target your specific skin goals — each is priced per
              vial.
            </p>
            <button
              type="button"
              onClick={() => setShowBaseSerumNote((v) => !v)}
              aria-expanded={showBaseSerumNote}
              aria-controls="mn-base-serum-note"
              className="block w-full cursor-pointer rounded-[16px] border border-[var(--color-brand-primary)] bg-[var(--olive-100)] p-[18px] text-left"
            >
              <span className="flex items-start justify-between gap-[12px]">
                <span className="min-w-0">
                  <span className="block font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-text-primary)]">
                    {baseSerum.name}
                  </span>
                  <span className="mt-[2px] block font-[var(--font-display)] text-[16px] font-medium text-[var(--color-text-primary)]">
                    Included
                    <span className="ml-[4px] font-[var(--font-body)] text-[12px] font-normal text-[var(--color-text-secondary)]">
                      in every treatment
                    </span>
                  </span>
                  <span className="mt-[8px] block font-[var(--font-body)] text-[13px] leading-[1.55] text-[var(--color-text-secondary)]">
                    {baseSerum.description}
                  </span>
                  <span className="mt-[10px] flex flex-wrap gap-[6px]">
                    {baseSerum.concerns.map((c) => (
                      <span
                        key={c}
                        className="font-[var(--font-body)] text-[11px] font-semibold text-[var(--olive-700)] bg-white pt-[3px] pr-[8px] pb-[3px] pl-[8px] rounded-[999px]"
                        style={{ border: "1px solid var(--color-border)" }}
                      >
                        {c}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="relative mt-[2px] shrink-0">
                  <span
                    aria-hidden="true"
                    className="flex h-[22px] w-[22px] items-center justify-center rounded-[6px] border-2 border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)]"
                  >
                    <Check size={14} strokeWidth={3} className="text-white" />
                  </span>
                  {showBaseSerumNote && (
                    <span
                      id="mn-base-serum-note"
                      className="absolute right-0 top-[calc(100%+12px)] z-10 block w-[230px] rounded-[14px] bg-white px-[14px] py-[11px] font-[var(--font-body)] text-[13px] leading-[1.55] text-[var(--color-text-secondary)] shadow-[0_10px_30px_rgba(0,0,0,0.14)]"
                      style={{ border: "1px solid var(--color-border)" }}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute -top-[7px] right-[5px] h-[12px] w-[12px] rotate-45 bg-white"
                        style={{
                          borderLeft: "1px solid var(--color-border)",
                          borderTop: "1px solid var(--color-border)",
                        }}
                      />
                      This serum can&apos;t be removed — it&apos;s the hydrating
                      base applied during every treatment so the device glides
                      smoothly and your skin stays protected. Advanced serums
                      are added on top of it.
                    </span>
                  )}
                </span>
              </span>
            </button>
            <span className="mt-[22px] mb-[12px] block font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-text-secondary)]">
              Optional Upgrades
            </span>
            <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2">
              {configuratorSerums.map((s) => (
                <label key={s.id} className={configuratorRadioCard}>
                  <input
                    type="checkbox"
                    name="mn-serum"
                    value={s.id}
                    checked={serumIds.includes(s.id)}
                    onChange={() => toggleSerum(s.id)}
                    className="sr-only"
                  />
                  <span className="flex items-start justify-between gap-[12px]">
                    <span className="min-w-0">
                      <span className="block font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-text-primary)]">
                        {s.name}
                      </span>
                      <span className="mt-[2px] block font-[var(--font-display)] text-[16px] font-medium text-[var(--color-text-primary)]">
                        +${s.faceUpgrade}
                        <span className="ml-[4px] font-[var(--font-body)] text-[12px] font-normal text-[var(--color-text-secondary)]">
                          per vial
                        </span>
                      </span>
                      <span className="mt-[8px] block font-[var(--font-body)] text-[13px] leading-[1.55] text-[var(--color-text-secondary)]">
                        {s.description}
                      </span>
                      <span className="mt-[10px] flex flex-wrap gap-[6px]">
                        {s.concerns.map((c) => (
                          <span
                            key={c}
                            className="font-[var(--font-body)] text-[11px] font-semibold text-[var(--olive-700)] bg-[var(--olive-100)] pt-[3px] pr-[8px] pb-[3px] pl-[8px] rounded-[999px]"
                            style={{ border: "1px solid var(--color-border)" }}
                          >
                            {c}
                          </span>
                        ))}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={configuratorCheckboxBox}
                    >
                      <Check
                        size={14}
                        strokeWidth={3}
                        className={configuratorCheckboxCheck}
                      />
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="m-0 mt-[34px] min-w-0 border-0 p-0">
            <legend className="mb-[6px] p-0">
              <span className={eyebrowStyle}>Step 3</span>
              <span className="mt-[6px] block font-[var(--font-display)] text-[20px] lg:text-[22px] font-normal text-[var(--color-text-primary)]">
                Choose Your Sessions — Single or Series
              </span>
            </legend>
            <p className="mt-0 mr-0 mb-[18px] ml-0 font-[var(--font-body)] text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
              A series is recommended for progressive improvement in collagen,
              texture and overall skin quality. Save 10% with a series of 3 or 6
              sessions.
            </p>
            <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-3">
              {configuratorSessions.map((s) => {
                const preview = priceConfirmed
                  ? Math.round(perSession * s.count * (1 - s.discount)) +
                    (celluma ? CELLUMA_ADDON_PRICE * s.count : 0)
                  : null;
                return (
                  <label key={s.id} className={configuratorRadioCard}>
                    <input
                      type="radio"
                      name="mn-sessions"
                      value={s.id}
                      checked={sessionId === s.id}
                      onChange={() => setSessionId(s.id)}
                      className="sr-only"
                    />
                    <span className="flex items-start justify-between gap-[12px]">
                      <span className="min-w-0">
                        <span className="block font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-text-primary)]">
                          {s.label}
                        </span>
                        {s.discount > 0 && (
                          <span className="mt-[6px] inline-block font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-brand-primary)] bg-[var(--olive-100)] pt-[3px] pr-[8px] pb-[3px] pl-[8px] rounded-[999px]">
                            Save {s.discount * 100}%
                          </span>
                        )}
                        <span className="mt-[6px] block font-[var(--font-display)] text-[20px] font-medium text-[var(--color-text-primary)]">
                          {preview !== null
                            ? `$${preview.toLocaleString("en-CA")}`
                            : "Price to be confirmed"}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={configuratorRadioDot}
                      />
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-[26px]">
            <span className={eyebrowStyle}>Complementary Treatments</span>
            <label className={cn(configuratorRadioCard, "mt-[12px] flex")}>
              <input
                type="checkbox"
                checked={celluma}
                onChange={(e) => setCelluma(e.target.checked)}
                className="sr-only"
              />
              <span className="flex min-w-0 flex-1 items-start gap-[14px]">
                <span aria-hidden="true" className={configuratorCheckboxBox}>
                  <Check
                    size={14}
                    strokeWidth={3}
                    className={configuratorCheckboxCheck}
                  />
                </span>
                <span className="min-w-0">
                  <span className="block font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-text-primary)]">
                    Enhance Your Treatment with Celluma® LED Light Therapy
                  </span>
                  <span className="mt-[4px] block font-[var(--font-body)] text-[13px] leading-[1.55] text-[var(--color-text-secondary)]">
                    An optional calming LED light therapy session to complement
                    your treatment.
                  </span>
                </span>
              </span>
              <span className="shrink-0 font-[var(--font-display)] text-[20px] font-medium text-[var(--color-text-primary)]">
                +${CELLUMA_ADDON_PRICE}
              </span>
            </label>
          </div>

          <div
            aria-live="polite"
            className="mt-[36px] rounded-[20px] bg-white p-[24px] sm:bg-[var(--olive-50)] sm:p-[32px]"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <div className="mb-[26px] max-w-[680px]">
              <span className={eyebrowStyle}>Your Treatment Estimate</span>
              <h4 className="mt-[10px] mr-0 mb-[10px] ml-0 font-[var(--font-display)] text-[24px] font-normal leading-[1.2] text-[var(--color-text-primary)] sm:text-[28px]">
                Your Selections and Estimated Cost
              </h4>
              <p className="m-0 font-[var(--font-body)] text-[14px] leading-[1.65] text-[var(--color-text-secondary)]">
                These selections are a starting point to help you explore your
                options and estimate the cost. Every client&apos;s skin is
                unique, and your final treatment plan and pricing will be
                confirmed during a free consultation with Ashley.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-2">
              <div
                className="rounded-[16px] bg-[var(--olive-50)] p-[22px] sm:bg-white sm:p-[26px]"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <span className={eyebrowStyle}>Your Selected Options</span>
                <dl className="mt-[14px] font-[var(--font-body)] text-[14px]">
                  <div className="flex items-baseline justify-between gap-[14px] border-b border-[var(--color-border)] pb-[9px]">
                    <dt className="text-[var(--color-text-secondary)]">
                      Treatment area
                    </dt>
                    <dd className="m-0 text-right font-semibold text-[var(--color-text-primary)]">
                      {area.label}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-[14px] border-b border-[var(--color-border)] py-[9px]">
                    <dt className="text-[var(--color-text-secondary)]">
                      Skincare formulation
                    </dt>
                    <dd className="m-0 text-right font-semibold text-[var(--color-text-primary)]">
                      {selectedSerums.length > 0
                        ? `${baseSerum.name} + ${selectedSerums.map((s) => s.name).join(", ")}`
                        : baseSerum.name}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-[14px] border-b border-[var(--color-border)] py-[9px]">
                    <dt className="text-[var(--color-text-secondary)]">
                      Treatment package
                    </dt>
                    <dd className="m-0 text-right font-semibold text-[var(--color-text-primary)]">
                      {session.label}
                      {session.count > 1 ? " sessions" : ""}
                    </dd>
                  </div>
                  {celluma && (
                    <div className="flex items-baseline justify-between gap-[14px] border-b border-[var(--color-border)] py-[9px]">
                      <dt className="text-[var(--color-text-secondary)]">
                        Celluma® LED Light Therapy
                      </dt>
                      <dd className="m-0 text-right font-semibold text-[var(--color-text-primary)]">
                        Included in estimate
                        {session.count > 1
                          ? ` (${session.count} sessions)`
                          : ""}
                      </dd>
                    </div>
                  )}
                </dl>

                <div className="mt-[16px] space-y-[8px] font-[var(--font-body)] text-[14px]">
                  <div className="flex items-baseline justify-between gap-[14px]">
                    <span className="text-[var(--color-text-secondary)]">
                      Treatment
                      {session.count > 1 && area.price !== undefined
                        ? ` (${session.count} × $${area.price.toLocaleString("en-CA")})`
                        : ""}
                    </span>
                    <span className="font-medium tabular-nums text-[var(--color-text-primary)]">
                      {area.price !== undefined
                        ? `$${(area.price * session.count).toLocaleString("en-CA")}`
                        : "To be confirmed"}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-[14px]">
                    <span className="text-[var(--color-text-secondary)]">
                      Serum upgrade
                      {serumUpgradeDetail ? ` (${serumUpgradeDetail})` : ""}
                    </span>
                    <span className="font-medium tabular-nums text-[var(--color-text-primary)]">
                      {serumUpgrade === 0
                        ? "Included"
                        : upgradeConfirmed
                          ? `+$${(serumUpgrade * session.count).toLocaleString("en-CA")}`
                          : "To be confirmed"}
                    </span>
                  </div>
                  {session.discount > 0 && priceConfirmed && (
                    <div className="flex items-baseline justify-between gap-[14px] text-[var(--color-brand-primary)]">
                      <span>Series discount ({session.discount * 100}%)</span>
                      <span className="font-medium tabular-nums">
                        −${seriesDiscountAmount.toLocaleString("en-CA")}
                      </span>
                    </div>
                  )}
                  {celluma && (
                    <div className="flex items-baseline justify-between gap-[14px]">
                      <span className="text-[var(--color-text-secondary)]">
                        Celluma LED
                        {session.count > 1
                          ? ` (${session.count} × $${CELLUMA_ADDON_PRICE})`
                          : ""}
                      </span>
                      <span className="font-medium tabular-nums text-[var(--color-text-primary)]">
                        +$
                        {(CELLUMA_ADDON_PRICE * session.count).toLocaleString(
                          "en-CA",
                        )}
                      </span>
                    </div>
                  )}
                  <div className="mt-[14px] flex items-baseline justify-between gap-[14px] border-t border-[var(--color-border)] pt-[14px]">
                    <span className="font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-text-primary)]">
                      Estimated Total
                    </span>
                    {total !== null ? (
                      <span className="font-[var(--font-display)] text-[30px] font-medium leading-[1.1] tabular-nums text-[var(--color-text-primary)]">
                        ${total.toLocaleString("en-CA")}
                        <span className="ml-[4px] font-[var(--font-body)] text-[12px] font-normal text-[var(--color-text-secondary)]">
                          CAD
                        </span>
                      </span>
                    ) : (
                      <span className="text-right">
                        <span className="block font-[var(--font-display)] text-[20px] font-medium leading-[1.2] text-[var(--color-text-primary)]">
                          Price to be confirmed
                        </span>
                        <span className="mt-[2px] block font-[var(--font-body)] text-[12px] leading-[1.4] text-[var(--color-text-secondary)]">
                          Pricing and availability to be confirmed during
                          consultation.
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col rounded-[16px] bg-[var(--olive-100)] p-[22px] sm:p-[26px]"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <span className={eyebrowStyle}>A Personalized Approach</span>
                <h4 className="mt-[10px] mr-0 mb-[10px] ml-0 font-[var(--font-display)] text-[22px] font-normal leading-[1.25] text-[var(--color-text-primary)] sm:text-[26px]">
                  Every Skin Is Different.
                  <br />
                  Your Treatment Should Be Too.
                </h4>
                <p className="m-0 font-[var(--font-body)] text-[14px] leading-[1.65] text-[var(--color-text-secondary)]">
                  This estimated cost is based on your selections. During your
                  free consultation, Ashley will assess your skin, discuss your
                  concerns and recommend a treatment plan tailored specifically
                  to you.
                </p>
                <div className="mt-auto pt-[22px]">
                  <Button
                    variant="primary"
                    onClick={openConsultation}
                    style={{ width: "100%", whiteSpace: "normal" }}
                  >
                    Get My Personalized Treatment Plan →
                  </Button>
                  <p className="mb-0 mt-[10px] text-center font-[var(--font-body)] text-[12px] text-[var(--color-text-secondary)]">
                    Free consultation · No obligation
                  </p>
                  <p className="mb-0 mt-[16px] flex items-start gap-[8px] border-t border-[var(--color-border)] pt-[14px] font-[var(--font-body)] text-[12px] leading-[1.5] text-[var(--color-text-secondary)]">
                    <Info
                      size={14}
                      className="mt-[1px] shrink-0 text-[var(--color-text-secondary)]"
                    />
                    <span>
                      Pricing shown in Canadian dollars. Treatment suitability,
                      product selection and final pricing will be confirmed
                      during your consultation.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-[16px]">
            <span className={eyebrowStyle}>
              Specialized Correction Programs
            </span>
            <span className="h-[1px] flex-1 bg-[var(--color-border)]" />
          </div>
          <p className="mt-0 mr-0 mb-8 ml-0 max-w-[640px] font-[var(--font-body)] text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
            Targeted treatments for specific skin concerns that may require a
            different approach.
          </p>
          <div
            className="w-full rounded-[20px] p-[26px] sm:p-[34px]"
            style={{
              background: pigmentDark.bg,
              border: `1px solid ${pigmentDark.border}`,
              boxShadow: "0 28px 60px -24px rgba(24,33,16,0.5)",
            }}
          >
            <div className="flex flex-col gap-[26px] lg:flex-row lg:items-stretch">
              <div className="flex min-w-0 flex-1 flex-col">
                <span
                  className="mb-[18px] inline-block self-start rounded-[6px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.22em]"
                  style={{
                    color: pigmentDark.gold,
                    background: pigmentDark.goldBg,
                    border: `1px solid ${pigmentDark.goldBorder}`,
                  }}
                >
                  Specialized Pigment Program
                </span>
                <h3
                  className="mt-0 mr-0 mb-[10px] ml-0 font-[var(--font-display)] text-[26px] font-normal sm:text-[30px]"
                  style={{ color: pigmentDark.title }}
                >
                  Pigment & Sun-Damage Correction
                </h3>
                <span
                  className="mb-[14px] inline-block self-start rounded-[999px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: pigmentDark.title,
                    background: pigmentDark.chipBg,
                    border: `1px solid ${pigmentDark.chipBorder}`,
                  }}
                >
                  7-Session Program
                </span>
                <p
                  className="mt-0 mr-0 mb-[14px] ml-0 font-[var(--font-body)] text-[15px] leading-relaxed"
                  style={{ color: pigmentDark.body }}
                >
                  A specialized seven-session eDermaStamp® program designed to
                  improve the appearance of uneven pigmentation, sun damage and
                  overall skin tone. Each session pairs professional
                  microneedling with XCellarisPRO High Light Serum by
                  Dermaroller®, a pigment-correcting formulation that helps
                  regulate melanin production and brighten the complexion. A
                  take-home roller is included to support your results between
                  visits.
                </p>
                <ul className="mt-0 mr-0 mb-[16px] ml-0 space-y-[8px] p-0">
                  {pigmentProgramIncludes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-[10px] font-[var(--font-body)] text-[14px]"
                      style={{ color: pigmentDark.body }}
                    >
                      <Check
                        size={16}
                        strokeWidth={2}
                        className="mt-[2px] shrink-0"
                        style={{ color: pigmentDark.gold }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mb-[18px]">
                  <span
                    className="mb-[8px] block font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: pigmentDark.muted }}
                  >
                    Key active ingredients
                  </span>
                  <span className="flex flex-wrap gap-[6px]">
                    {pigmentProgramIngredients.map((ing) => (
                      <span
                        key={ing}
                        className="rounded-[999px] pt-[4px] pr-[9px] pb-[4px] pl-[9px] font-[var(--font-body)] text-[11px] font-semibold"
                        style={{
                          color: pigmentDark.title,
                          background: pigmentDark.chipBg,
                          border: `1px solid ${pigmentDark.chipBorder}`,
                        }}
                      >
                        {ing}
                      </span>
                    ))}
                  </span>
                </div>
                <div
                  className="mt-auto pt-[18px]"
                  style={{
                    borderTop: `1px solid ${pigmentDark.border}`,
                  }}
                >
                  <span
                    className="block font-[var(--font-display)] text-[32px] font-medium leading-[1.1]"
                    style={{ color: pigmentDark.title }}
                  >
                    {PIGMENT_PROGRAM_PRICE}
                  </span>
                  <span
                    className="mt-[4px] block font-[var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: pigmentDark.gold }}
                  >
                    Complete Program
                  </span>
                  <p
                    className="mt-[10px] mb-0 font-[var(--font-body)] text-[13px] leading-[1.5]"
                    style={{ color: pigmentDark.muted }}
                  >
                    Consultation recommended before starting. Treatment
                    suitability is assessed individually.
                  </p>
                </div>
              </div>
              <div className="shrink-0 lg:w-[420px]">
                <img
                  src={pigmentKitImageSrc}
                  alt="XCellarisPRO High Light Serum pigment correction ampoules by Dermaroller"
                  className="w-full rounded-[14px]"
                  style={{ border: `1px solid ${pigmentDark.border}` }}
                />
                <p
                  className="mt-[8px] font-[var(--font-body)] text-[11px] leading-[1.5]"
                  style={{ color: pigmentDark.muted }}
                >
                  XCellarisPRO® High Light Serum for Pigment Correction by
                  Dermaroller®
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const microneedlingResults = [
  {
    src: "/assets/dermaroller-scar-1.jpg",
    title: "Acne Scarring",
  },
  {
    src: "/assets/dermaroller-scar-2.jpg",
    title: "Acne Scarring",
  },
  {
    src: "/assets/dermaroller-scar-3.jpg",
    title: "Acne Scarring",
  },
  {
    src: "/assets/dermaroller-scar-5.jpg",
    title: "Acne Scarring",
  },
  {
    src: "/assets/dermaroller-scar-6.jpg",
    title: "Acne Scarring",
  },
  {
    src: "/assets/dermaroller-skin-tightening-1.jpg",
    title: "Skin Tightening",
  },
  {
    src: "/assets/dermaroller-stretch-marks-1.jpg",
    title: "Stretch Marks",
  },
  {
    src: "/assets/dermaroller-stretch-marks-2.jpg",
    title: "Stretch Marks",
  },
  {
    src: "/assets/dermaroller-wrinkles-1.jpg",
    title: "Wrinkles",
  },
  {
    src: "/assets/dermaroller-wrinkles-3.jpg",
    title: "Wrinkles",
  },
];

function MicroneedlingResults() {
  return (
    <section
      id="results"
      className={cn(`${sectionPadding} bg-olive-50`, "py-16 lg:py-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-12 text-center">
          <SectionEyebrow>BEFORE & AFTER</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Results That Develop Over Time
          </SectionHeading>
          <p
            className={cn(
              "mx-auto max-w-[680px] text-base lg:text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
            )}
          >
            Microneedling works through the skin&apos;s natural renewal process,
            so improvements develop gradually. Explore examples showing changes
            in concerns such as acne scarring, texture, scars and stretch marks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {microneedlingResults.map((item) => (
            <div
              key={item.src}
              className="overflow-hidden rounded-[18px] bg-[#fff]"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <img
                src={item.src}
                alt={`Microneedling ${item.title} before and after`}
                loading="lazy"
                className="h-auto w-full object-contain"
              />
              <p
                className={cn(
                  "mt-0 py-3 text-center text-[13px]",
                  "font-[var(--font-body)] text-[var(--color-text-secondary)]",
                )}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <p
          className={cn(
            "mt-10 text-center text-[13px]",
            "font-[var(--font-body)] text-[var(--color-text-secondary)]",
          )}
        >
          *Individual results vary.
        </p>
      </div>
    </section>
  );
}

function MicroneedlingProcess() {
  const steps = [
    {
      number: "01",
      title: "Before",
      sub: "Prepare Your Skin",
      text: "We'll review your skin, goals, relevant medical history and current skincare before beginning. Please let us know about prescription skincare, medications, recent sun exposure or any active skin irritation.",
    },
    {
      number: "02",
      title: "During",
      sub: "Precision Microneedling",
      text: "The eDermaStamp handpiece is passed across the treatment area at a depth appropriate for your skin and treatment goals. You may feel pressure, warmth, scratching or prickling depending on the treatment area and depth.",
    },
    {
      number: "03",
      title: "After",
      sub: "Give Your Skin Time to Recover",
      text: "Temporary redness, warmth, tightness, dryness or mild swelling can occur after microneedling and generally improves over the following days. Skin renewal continues after the visible redness has settled.",
    },
  ];

  return (
    <section
      className={cn(`${sectionPadding} bg-olive-100`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <SectionEyebrow>YOUR APPOINTMENT</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            What to Expect From Microneedling
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#fff] rounded-[18px] pt-[36px] pr-[30px] pb-[36px] pl-[30px]"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span className="font-[var(--font-display)] text-[26px] text-[var(--color-brand-primary)]">
                {step.number}
              </span>
              <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[26px] mt-[16px] mr-0 mb-[6px] ml-0">
                {step.title}
              </h4>
              <p className="font-[var(--font-body)] text-[16px] font-semibold text-[var(--color-text-primary)] mt-0 mr-0 mb-[12px] ml-0">
                {step.sub}
              </p>
              <p
                className={cn(
                  "text-[15px] leading-relaxed",
                  "font-[var(--font-body)] text-[var(--color-text-secondary)]",
                )}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[var(--color-border)] bg-olive-50 p-7 lg:flex-row">
          <div className="flex items-center gap-5">
            <div
              className="w-[48px] h-[48px] rounded-[50%] bg-[var(--olive-100)] flex items-center justify-center"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <Sun size={22} color="var(--color-brand-primary)" />
            </div>
            <div>
              <h4 className="font-[var(--font-body)] text-[16px] font-semibold text-[var(--color-text-primary)] m-0">
                Add Celluma LED Light Therapy
              </h4>
              <p className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-[15px] mt-[4px] mr-0 mb-0 ml-0">
                30 Minutes · $30 Add-On
              </p>
            </div>
          </div>
          <Link
            href="/celluma-led-light-therapy"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 600,
              color: "var(--color-brand-primary)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
              whiteSpace: "nowrap",
            }}
          >
            Learn About Celluma LED Light Therapy →
          </Link>
        </div>
      </div>
    </section>
  );
}

function MicroneedlingVideo() {
  const [load, setLoad] = useState(false);

  return (
    <section
      className={cn(`${sectionPadding} bg-olive-50`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionEyebrow>SEE EDERMASTAMP IN ACTION</SectionEyebrow>
            <SectionHeading style={{ margin: "22px 0 16px" }}>
              See How Professional Microneedling Works
            </SectionHeading>
            <p
              className={cn(
                "text-base lg:text-[17px]",
                "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.65]",
              )}
            >
              Watch a quick introduction to the professional eDermaStamp system
              and how microneedling is performed.
            </p>
          </div>

          <div
            className={cn(
              "relative w-full overflow-hidden",
              "rounded-[18px] aspect-[16/9]",
            )}
          >
            {load ? (
              <iframe
                src="https://www.youtube.com/embed/fb7hKzxkkpY?autoplay=1"
                title="See eDermaStamp in action"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="h-full w-full border-0"
              />
            ) : (
              <button
                onClick={() => setLoad(true)}
                aria-label="Play eDermaStamp introduction video"
                className={cn(
                  "relative h-full w-full cursor-pointer border-0 p-0",
                  "bg-[url('/assets/youtube-thumbnail-microneedling.png')] bg-cover bg-center",
                )}
              >
                <span
                  className={cn(
                    "absolute inset-0 flex items-center justify-center",
                    "bg-[rgba(0,0,0,0.25)]",
                  )}
                >
                  <span
                    className="w-[72px] h-[72px] rounded-[50%] bg-[#fff] flex items-center justify-center"
                    style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
                  >
                    <Play
                      size={28}
                      color="var(--color-brand-primary)"
                      fill="var(--color-brand-primary)"
                    />
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function MicroneedlingFaq() {
  return (
    <FaqSection
      eyebrow="FREQUENTLY ASKED QUESTIONS"
      heading="Your Microneedling Questions, Answered"
      subheading="Clear answers about treatment, recovery, safety and how to choose the right microneedling option for your skin."
      categories={microneedlingFaqCategories}
    />
  );
}

const reassuranceItems = [
  {
    icon: User,
    title: "Personalized Treatment",
    text: "Tailored to your skin and concerns",
  },
  {
    icon: Sparkles,
    title: "Professional Technology",
    text: "eDermaStamp microneedling",
  },
  {
    icon: Check,
    title: "Clear Guidance",
    text: "Know what to expect before and after treatment",
  },
];

function MicroneedlingFinalCta() {
  const { open: openConsultation } = useConsultation();
  return (
    <section className="relative py-16 px-3 lg:px-7 lg:py-[90px] bg-[var(--ink-900)] overflow-hidden">
      <div className="relative z-[10] max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto text-center">
        <div className="flex items-center justify-center gap-[16px] mb-[22px]">
          <span className="w-[48px] h-[1px] bg-[var(--olive-500)]" />
          <span className="font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)] text-[var(--olive-100)]">
            READY TO TAKE THE NEXT STEP?
          </span>
          <span className="w-[48px] h-[1px] bg-[var(--olive-500)]" />
        </div>

        <h2 className="text-balance font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[var(--white)] text-[40px] leading-[1.08] lg:text-[52px] mt-0 mr-auto mb-[18px] ml-auto max-w-[760px]">
          Let&apos;s Create Your
          <br className="hidden md:inline" />
          Personalized Microneedling Plan
        </h2>

        <p className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-[var(--olive-200)] text-[17px] max-w-[620px] mt-0 mr-auto mb-[28px] ml-auto">
          We&apos;ll take the time to understand your skin, concerns and goals,
          then recommend the microneedling option that makes the most sense for
          you.
        </p>

        <div className="flex flex-col items-center gap-[14px] mb-[60px]">
          <Button
            variant="primary"
            onClick={openConsultation}
            style={{
              maxWidth: 360,
              width: "100%",
              height: "auto",
              minHeight: 64,
              fontSize: 17,
              whiteSpace: "normal",
            }}
          >
            I want a Free Consultation →
          </Button>
          <a
            href="tel:+19059207229"
            className="flex items-center justify-center gap-[12px] max-w-[320px] w-full h-auto min-h-[60px] whitespace-normal rounded-[14px] bg-[var(--olive-100)] no-underline font-[var(--font-body)]"
            style={{ border: "1px solid var(--olive-700)" }}
          >
            <Phone size={18} color="var(--color-brand-primary)" />
            <div>
              <div className="text-[18px] font-semibold text-[var(--ink-900)]">
                (905) 920-7229
              </div>
              <div className="text-[12px] text-[var(--color-text-secondary)]">
                Call or Text
              </div>
            </div>
          </a>
        </div>

        <div
          className={cn(
            "mx-auto grid max-w-[1000px] grid-cols-1 gap-8 lg:grid-cols-3",
            "items-start",
          )}
        >
          {reassuranceItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-center gap-4 px-6"
            >
              <div className="shrink-0 w-[64px] h-[64px] rounded-[50%] bg-[var(--olive-700)] flex items-center justify-center">
                <item.icon size={26} color="var(--olive-100)" />
              </div>
              <div className="text-left">
                <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[var(--white)] text-[18px] mt-0 mr-0 mb-[4px] ml-0">
                  {item.title}
                </h4>
                <p className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-[var(--olive-200)] text-[14px] m-0">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MicroneedlingPage() {
  return (
    <>
      <Header />
      <main>
        <MicroneedlingHero />
        <MicroneedlingConcerns />
        <MicroneedlingHowItWorks />
        <MicroneedlingResults />
        <AshleySection />
        <ReviewsSection prioritizeService="microneedling" />
        <MicroneedlingConfigurator />
        <MicroneedlingProcess />
        <MicroneedlingVideo />
        <MicroneedlingFaq />
        <MicroneedlingFinalCta />
      </main>
    </>
  );
}
