"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle,
  Leaf,
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
import { useCallback, useRef, useState } from "react";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FaqSection } from "@/components/FaqSection";
import Header from "@/components/Header";
import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";
import type { GoogleReviewsProps } from "@/components/design-system/trust/GoogleReviews";
import { microneedlingFaqCategories } from "@/lib/microneedling-faq";

const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;
const GoogleReviews = (
  GoogleReviewsModule as unknown as {
    GoogleReviews: React.FC<GoogleReviewsProps>;
  }
).GoogleReviews;

const sectionPadding = "px-7 lg:px-[53px]";
const containerMax = { maxWidth: "var(--container-max)", margin: "0 auto" };

const eyebrowStyle = {
  fontFamily: "var(--font-body)",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "var(--color-brand-primary)",
};

const displayHeadingStyle = {
  fontFamily: "var(--font-display)",
  fontWeight: 400,
  color: "var(--color-text-primary)",
};

const bodyTextStyle = {
  fontFamily: "var(--font-body)",
  color: "var(--color-text-secondary)",
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="block" style={eyebrowStyle}>
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
      className="text-[36px] leading-[1.1] lg:text-[44px]"
      style={{ ...displayHeadingStyle, ...style }}
    >
      {children}
    </h2>
  );
}

function MicroneedlingHero() {
  return (
    <section
      className="relative overflow-hidden border-b-2 border-[#bfae97] bg-olive-50"
      style={{ minHeight: 820, padding: "80px 28px 70px" }}
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat lg:bg-right lg:[background-size:auto_100%]"
        style={{ backgroundImage: "url(/assets/microneedling-hero.jpg)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, var(--olive-50) 0%, rgba(245,242,235,0.92) 35%, rgba(245,242,235,0) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full" style={containerMax}>
        <div className="w-full min-w-0 lg:max-w-[55%] lg:min-w-[320px]">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 13,
              marginBottom: 31,
            }}
          >
            <span
              className="text-[12px] font-bold uppercase tracking-[0.16em]"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-brand-primary)",
              }}
            >
              EDERMASTAMP MICRONEEDLING{" "}
              <span style={{ color: "var(--color-brand-deep)" }}>
                · NIAGARA FALLS
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
            className="text-[44px] leading-[1.05] lg:text-[80px]"
            style={{
              ...displayHeadingStyle,
              margin: "0 0 31px",
            }}
          >
            Microneedling for
            <br />
            <span
              className="italic"
              style={{
                color: "var(--olive-600)",
                fontFamily: "var(--font-display)",
              }}
            >
              Smoother, Firmer-Looking Skin
            </span>
          </h1>

          <p
            className="text-base leading-relaxed lg:text-[20px] lg:leading-[1.6]"
            style={{
              ...bodyTextStyle,
              margin: "0 0 40px",
            }}
          >
            Professional eDermaStamp microneedling creates controlled
            microchannels in the skin to activate its natural renewal response —
            helping improve the appearance of fine lines, acne scars, uneven
            texture and overall skin quality.
          </p>

          <div
            className="flex flex-col gap-4 lg:flex-row"
            style={{ marginBottom: 31 }}
          >
            <Button variant="primary">
              Book Your Microneedling Treatment →
            </Button>
            <Link href="#treatment-options">
              <Button variant="secondary" style={{ width: "100%" }}>
                View Treatment Options
              </Button>
            </Link>
          </div>

          <GoogleReviews rating="5.0" count="61+" />

          <div
            className="mt-12 flex flex-wrap items-center gap-8"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              marginTop: 48,
            }}
          >
            {[
              { icon: Sparkles, text: "Professional eDermaStamp System" },
              { icon: Leaf, text: "Collagen Induction Therapy" },
              { icon: User, text: "Personalized Treatment" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--color-text-primary)",
                }}
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
      className={`${sectionPadding} bg-olive-50`}
      style={{ paddingTop: 90, paddingBottom: 90 }}
    >
      <div style={containerMax}>
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
            className="mx-auto max-w-[680px] text-base lg:text-[17px]"
            style={{ ...bodyTextStyle, lineHeight: 1.6, margin: "0 auto" }}
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
              style={{
                display: "flex",
                gap: 16,
                padding: "28px 24px",
                background: "var(--olive-100)",
                border: "1px solid var(--color-border)",
                borderRadius: 18,
              }}
            >
              <item.icon
                size={24}
                strokeWidth={1.4}
                color="var(--color-brand-primary)"
              />
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    fontWeight: 500,
                    color: "var(--color-text-primary)",
                    margin: "0 0 8px",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    ...bodyTextStyle,
                    fontSize: 15,
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mx-auto mt-12 max-w-[680px] text-center text-[15px]"
          style={{ ...bodyTextStyle, lineHeight: 1.6 }}
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
      className={`${sectionPadding} bg-olive-50`}
      style={{ paddingTop: 90, paddingBottom: 90 }}
    >
      <div style={containerMax}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src="/assets/microneedling-works.jpg"
              alt="eDermaStamp microneedling technology"
              className="w-full"
              style={{
                borderRadius: 18,
                border: "1px solid var(--color-border)",
              }}
            />
          </div>
          <div>
            <SectionEyebrow>COLLAGEN INDUCTION THERAPY</SectionEyebrow>
            <SectionHeading style={{ margin: "22px 0 20px" }}>
              Small Microchannels.
              <br />A Natural Renewal Response.
            </SectionHeading>
            <p
              className="mb-10 text-base lg:text-[17px]"
              style={{ ...bodyTextStyle, lineHeight: 1.65 }}
            >
              eDermaStamp uses fine, precisely controlled needles to create
              microscopic channels in the skin. These controlled micro-injuries
              activate the skin&apos;s normal healing response and processes
              involved in collagen formation.
            </p>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} style={{ display: "flex", gap: 20 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 28,
                      color: "var(--color-brand-primary)",
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 22,
                        fontWeight: 500,
                        color: "var(--color-text-primary)",
                        margin: "0 0 8px",
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      style={{
                        ...bodyTextStyle,
                        fontSize: 15,
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-12 inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-[13px]"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-text-secondary)",
              }}
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

const treatments = [
  {
    tag: "HYDRATION + RENEWAL",
    name: "Microneedling + Hyaluronic Acid",
    subtitle: "Deep Hydration & Skin Renewal",
    text: "A straightforward microneedling treatment paired with hyaluronic acid to support hydration while targeting fine lines, uneven texture and overall skin quality.",
    bestFor: ["Fine Lines", "Dryness", "Uneven Texture"],
    price: "$299",
    regularPrice: null,
    note: null,
  },
  {
    tag: "ADVANCED REJUVENATION",
    name: "Microneedling + Ready Medical Growth Factors",
    subtitle: "Advanced Rejuvenation & Repair",
    text: "An advanced microneedling option paired with Ready Medical growth factors for clients focused on visible aging, skin texture and post-acne concerns.",
    bestFor: ["Visible Aging", "Acne Scarring", "Skin Recovery"],
    price: "$390",
    regularPrice: "$450",
    note: null,
  },
  {
    tag: "FIRM + RENEW",
    name: "Microneedling + Hyaluronic Acid, PDRN & DMAE",
    subtitle: "For Firmer, More Refined-Looking Skin",
    text: "An advanced serum combination used alongside microneedling for clients focused on visible aging, texture, hydration and firmness.",
    bestFor: ["Fine Lines", "Loss of Firmness", "Photodamaged-Looking Skin"],
    price: "$390",
    regularPrice: "$450",
    note: null,
  },
  {
    tag: "ADVANCED RENEWAL",
    name: "Microneedling + Milk-Derived Exosomes & PDRN",
    subtitle: "Advanced Renewal, Texture & Brightening",
    text: "A premium microneedling option paired with a milk-derived exosome and PDRN serum protocol for clients looking for an advanced skin-renewal treatment.",
    bestFor: ["Texture", "Visible Aging", "Dullness"],
    price: "$490",
    regularPrice: null,
    note: "Not suitable for clients with a known dairy allergy. Please discuss allergies and medical history before treatment.",
  },
];

function MicroneedlingPricing() {
  return (
    <section
      id="treatment-options"
      className={`${sectionPadding} bg-olive-100`}
      style={{ paddingTop: 90, paddingBottom: 90 }}
    >
      <div style={containerMax}>
        <div className="mb-14 text-center">
          <SectionEyebrow>PERSONALIZED MICRONEEDLING</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Choose the Treatment That Fits Your Skin
          </SectionHeading>
          <p
            className="mx-auto max-w-[680px] text-base lg:text-[17px]"
            style={{ ...bodyTextStyle, lineHeight: 1.6 }}
          >
            Every option uses professional eDermaStamp microneedling, then pairs
            the treatment with a different professional serum protocol based on
            your skin concerns and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {treatments.map((t) => (
            <div
              key={t.name}
              style={{
                background: "#fff",
                border: "1px solid var(--color-border)",
                borderRadius: 20,
                padding: "40px 34px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  ...eyebrowStyle,
                  alignSelf: "flex-start",
                  padding: "6px 10px",
                  borderRadius: 6,
                  background: "var(--olive-100)",
                  border: "1px solid var(--color-border)",
                  marginBottom: 20,
                }}
              >
                {t.tag}
              </span>
              <h3
                style={{
                  ...displayHeadingStyle,
                  fontSize: 26,
                  margin: "0 0 6px",
                }}
              >
                {t.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  margin: "0 0 12px",
                }}
              >
                {t.subtitle}
              </p>
              <p
                className="text-[15px] leading-relaxed"
                style={{ ...bodyTextStyle, margin: "0 0 18px" }}
              >
                {t.text}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 24,
                }}
              >
                {t.bestFor.map((chip) => (
                  <span
                    key={chip}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--olive-700)",
                      background: "var(--olive-100)",
                      border: "1px solid var(--color-border)",
                      padding: "6px 10px",
                      borderRadius: 999,
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "auto" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 12,
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 34,
                      fontWeight: 500,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {t.price}
                  </span>
                  {t.regularPrice && (
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 18,
                        color: "var(--color-text-secondary)",
                        textDecoration: "line-through",
                      }}
                    >
                      Regular {t.regularPrice}
                    </span>
                  )}
                </div>
                {t.note && (
                  <p
                    style={{
                      ...bodyTextStyle,
                      fontSize: 13,
                      lineHeight: 1.5,
                    }}
                  >
                    {t.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <h4
            style={{
              ...displayHeadingStyle,
              fontSize: 26,
              margin: "0 0 10px",
            }}
          >
            Not sure which option is right for you?
          </h4>
          <p
            className="mb-8 text-[17px]"
            style={{ ...bodyTextStyle, lineHeight: 1.6 }}
          >
            We&apos;ll help you choose based on your skin, concerns and
            treatment goals.
          </p>
          <Button variant="primary">Book Your Microneedling Treatment →</Button>
        </div>
      </div>
    </section>
  );
}

const results = [
  {
    title: "Acne Scarring",
    beforeSrc: "/assets/hero-treatment.png",
    afterSrc: "/assets/hero-treatment-olive.png",
  },
  {
    title: "Skin Texture",
    beforeSrc: "/assets/hero-treatment.png",
    afterSrc: "/assets/hero-treatment-olive.png",
  },
  {
    title: "Stretch Marks",
    beforeSrc: "/assets/hero-treatment.png",
    afterSrc: "/assets/hero-treatment-olive.png",
  },
];

function MicroneedlingResults() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollPos, setScrollPos] = useState(0);

  const scroll = useCallback((direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    el.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
  }, []);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setScrollPos(el.scrollLeft);
  }, []);

  return (
    <section
      className={`${sectionPadding} bg-olive-50`}
      style={{ paddingTop: 90, paddingBottom: 90 }}
    >
      <div style={containerMax}>
        <div className="mb-12 text-center">
          <SectionEyebrow>BEFORE & AFTER</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Results That Develop Over Time
          </SectionHeading>
          <p
            className="mx-auto max-w-[680px] text-base lg:text-[17px]"
            style={{ ...bodyTextStyle, lineHeight: 1.6 }}
          >
            Microneedling works through the skin&apos;s natural renewal process,
            so improvements develop gradually. Explore examples showing changes
            in concerns such as acne scarring, texture, scars and stretch marks.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {results.map((item) => (
              <div
                key={item.title}
                className="w-full shrink-0 snap-center lg:w-[calc(33.333%-16px)]"
              >
                <BeforeAfter
                  beforeSrc={item.beforeSrc}
                  afterSrc={item.afterSrc}
                  title={item.title}
                  aspectRatio="4 / 5"
                />
                <p
                  className="mt-3 text-center text-[13px]"
                  style={{ ...bodyTextStyle }}
                >
                  Dermaroller® example result
                </p>
              </div>
            ))}
          </div>

          {scrollPos > 0 && (
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous result"
              className="absolute left-0 top-1/2 -translate-y-1/2 hidden h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white shadow-sm lg:flex"
            >
              <ArrowLeft size={18} color="var(--color-text-primary)" />
            </button>
          )}
          <button
            onClick={() => scroll(1)}
            aria-label="Next result"
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white shadow-sm lg:flex"
          >
            <ArrowRight size={18} color="var(--color-text-primary)" />
          </button>
        </div>

        <p
          className="mt-10 text-center text-[13px]"
          style={{ ...bodyTextStyle }}
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
      className={`${sectionPadding} bg-olive-100`}
      style={{ paddingTop: 90, paddingBottom: 90 }}
    >
      <div style={containerMax}>
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
              style={{
                background: "#fff",
                border: "1px solid var(--color-border)",
                borderRadius: 18,
                padding: "36px 30px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 26,
                  color: "var(--color-brand-primary)",
                }}
              >
                {step.number}
              </span>
              <h4
                style={{
                  ...displayHeadingStyle,
                  fontSize: 26,
                  margin: "16px 0 6px",
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  margin: "0 0 12px",
                }}
              >
                {step.sub}
              </p>
              <p
                className="text-[15px] leading-relaxed"
                style={{ ...bodyTextStyle }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[var(--color-border)] bg-olive-50 p-7 lg:flex-row">
          <div className="flex items-center gap-5">
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "var(--olive-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--color-border)",
              }}
            >
              <Sun size={22} color="var(--color-brand-primary)" />
            </div>
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  margin: 0,
                }}
              >
                Add Celluma LED Light Therapy
              </h4>
              <p
                style={{
                  ...bodyTextStyle,
                  fontSize: 15,
                  margin: "4px 0 0",
                }}
              >
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
      className={`${sectionPadding} bg-olive-50`}
      style={{ paddingTop: 90, paddingBottom: 90 }}
    >
      <div style={containerMax}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionEyebrow>SEE EDERMASTAMP IN ACTION</SectionEyebrow>
            <SectionHeading style={{ margin: "22px 0 16px" }}>
              See How Professional Microneedling Works
            </SectionHeading>
            <p
              className="text-base lg:text-[17px]"
              style={{ ...bodyTextStyle, lineHeight: 1.65 }}
            >
              Watch a quick introduction to the professional eDermaStamp system
              and how microneedling is performed.
            </p>
          </div>

          <div
            className="relative w-full overflow-hidden"
            style={{ borderRadius: 18, aspectRatio: "16 / 9" }}
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
                className="relative h-full w-full cursor-pointer border-0 p-0"
                aria-label="Play eDermaStamp introduction video"
                style={{
                  backgroundImage: "url(/assets/smooth-skin-tech.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.25)" }}
                >
                  <span
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    }}
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
  return (
    <section
      style={{
        position: "relative",
        padding: "90px 28px",
        background: "var(--ink-900)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 22,
          }}
        >
          <span
            style={{
              width: 48,
              height: 1,
              background: "var(--olive-500)",
            }}
          />
          <span
            style={{
              ...eyebrowStyle,
              color: "var(--olive-100)",
            }}
          >
            READY TO TAKE THE NEXT STEP?
          </span>
          <span
            style={{
              width: 48,
              height: 1,
              background: "var(--olive-500)",
            }}
          />
        </div>

        <h2
          style={{
            ...displayHeadingStyle,
            color: "var(--white)",
            fontSize: 52,
            lineHeight: 1.08,
            margin: "0 auto 18px",
            maxWidth: 760,
          }}
        >
          Let&apos;s Create Your
          <br />
          Personalized Microneedling Plan
        </h2>

        <p
          style={{
            ...bodyTextStyle,
            color: "var(--olive-200)",
            fontSize: 17,
            maxWidth: 620,
            margin: "0 auto 28px",
          }}
        >
          We&apos;ll take the time to understand your skin, concerns and goals,
          then recommend the microneedling option that makes the most sense for
          you.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            marginBottom: 60,
          }}
        >
          <Button
            variant="primary"
            style={{ maxWidth: 360, width: "100%", height: 64, fontSize: 17 }}
          >
            Book Your Microneedling Treatment →
          </Button>
          <a
            href="tel:+19059207229"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              maxWidth: 320,
              width: "100%",
              height: 60,
              borderRadius: 14,
              border: "1px solid var(--olive-700)",
              background: "var(--olive-100)",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
            }}
          >
            <Phone size={18} color="var(--color-brand-primary)" />
            <div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "var(--ink-900)",
                }}
              >
                (905) 920-7229
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--color-text-secondary)",
                }}
              >
                Call or Text
              </div>
            </div>
          </a>
        </div>

        <div
          className="mx-auto grid max-w-[1000px] grid-cols-1 gap-8 lg:grid-cols-3"
          style={{ alignItems: "start" }}
        >
          {reassuranceItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-center gap-4 px-6"
            >
              <div
                style={{
                  flexShrink: 0,
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "var(--olive-700)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <item.icon size={26} color="var(--olive-100)" />
              </div>
              <div className="text-left">
                <h4
                  style={{
                    ...displayHeadingStyle,
                    color: "var(--white)",
                    fontSize: 18,
                    margin: "0 0 4px",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    ...bodyTextStyle,
                    color: "var(--olive-200)",
                    fontSize: 14,
                    margin: 0,
                  }}
                >
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
        <MicroneedlingPricing />
        <MicroneedlingResults />
        <MicroneedlingProcess />
        <MicroneedlingVideo />
        <MicroneedlingFaq />
        <MicroneedlingFinalCta />
      </main>
    </>
  );
}
