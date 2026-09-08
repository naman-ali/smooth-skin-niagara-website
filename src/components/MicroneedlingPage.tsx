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
import { cn } from "@/lib/utils";


const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;
const GoogleReviews = (
  GoogleReviewsModule as unknown as {
    GoogleReviews: React.FC<GoogleReviewsProps>;
  }
).GoogleReviews;

const sectionPadding = "px-7 lg:px-[53px]";
const containerMax = "max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto";

const eyebrowStyle = "font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)]";

const displayHeadingStyle = "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]";

const bodyTextStyle = "font-[var(--font-body)] text-[var(--color-text-secondary)]";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span  className={cn("block", "font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)]")}>
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
      
      className={cn("text-[36px] leading-[1.1] lg:text-[44px]", "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]")} style={{ ...style }}
    >
      {children}
    </h2>
  );
}

function MicroneedlingHero() {
  return (
    <section
      
      className={cn("relative overflow-hidden border-b-2 border-[#bfae97] bg-olive-50", "min-h-[820px] pt-[80px] pr-[28px] pb-[70px] pl-[28px]")}
    >
      <div
        
        className={cn("absolute inset-0 z-0 bg-cover bg-center bg-no-repeat lg:bg-right lg:[background-size:auto_100%]", "bg-[url('/assets/microneedling-hero.jpg')]")}
      />
      <div
        
        className={cn("pointer-events-none absolute inset-0 z-[1] hidden lg:block", "bg-[linear-gradient(toright,var(--olive-50)0%,rgba(245,242,235,0.92)35%,rgba(245,242,235,0)70%)]")}
      />

      <div  className={cn("relative z-10 mx-auto w-full", "max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto")}>
        <div className="w-full min-w-0 lg:max-w-[55%] lg:min-w-[320px]">
          <div
            className="flex items-center gap-[13px] mb-[31px]"
          >
            <span
              
              className={cn("text-[12px] font-bold uppercase tracking-[0.16em]", "font-[var(--font-body)] text-[var(--color-brand-primary)]")}
            >
              EDERMASTAMP MICRONEEDLING{" "}
              <span className="text-[var(--color-brand-deep)]">
                · NIAGARA FALLS
              </span>
            </span>
            <span
              className="w-[48px] h-[1px] bg-[var(--color-border-strong)]"
            />
          </div>

          <h1
            
            className={cn("text-[44px] leading-[1.05] lg:text-[80px]", "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-0 mr-0 mb-[31px] ml-0")}
          >
            Microneedling for
            <br />
            <span
              
              className={cn("italic", "text-[var(--olive-600)] font-[var(--font-display)]")}
            >
              Smoother, Firmer-Looking Skin
            </span>
          </h1>

          <p
            
            className={cn("text-base leading-relaxed lg:text-[20px] lg:leading-[1.6]", "font-[var(--font-body)] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[40px] ml-0")}
          >
            Professional eDermaStamp microneedling creates controlled
            microchannels in the skin to activate its natural renewal response —
            helping improve the appearance of fine lines, acne scars, uneven
            texture and overall skin quality.
          </p>

          <div
            
            className={cn("flex flex-col gap-4 lg:flex-row", "mb-[31px]")}
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
            
            className={cn("mt-12 flex flex-wrap items-center gap-8", "flex flex-wrap gap-[24px] mt-[48px]")}
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
            
            className={cn("mx-auto max-w-[680px] text-base lg:text-[17px]", "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6] mt-0 mr-auto mb-0 ml-auto")}
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
              className="flex gap-[16px] pt-[28px] pr-[24px] pb-[28px] pl-[24px] bg-[var(--olive-100)] rounded-[18px]" style={{ border: "1px solid var(--color-border)" }}
            >
              <item.icon
                size={24}
                strokeWidth={1.4}
                color="var(--color-brand-primary)"
              />
              <div>
                <h4
                  className="font-[var(--font-display)] text-[18px] font-medium text-[var(--color-text-primary)] mt-0 mr-0 mb-[8px] ml-0"
                >
                  {item.title}
                </h4>
                <p
                  className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-[15px] leading-[1.55] m-0"
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          
          className={cn("mx-auto mt-12 max-w-[680px] text-center text-[15px]", "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]")}
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
              
              className={cn("w-full", "rounded-[18px]")} style={{ border: "1px solid var(--color-border)" }}
            />
          </div>
          <div>
            <SectionEyebrow>COLLAGEN INDUCTION THERAPY</SectionEyebrow>
            <SectionHeading style={{ margin: "22px 0 20px" }}>
              Small Microchannels.
              <br />A Natural Renewal Response.
            </SectionHeading>
            <p
              
              className={cn("mb-10 text-base lg:text-[17px]", "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.65]")}
            >
              eDermaStamp uses fine, precisely controlled needles to create
              microscopic channels in the skin. These controlled micro-injuries
              activate the skin&apos;s normal healing response and processes
              involved in collagen formation.
            </p>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-[20px]">
                  <span
                    className="font-[var(--font-display)] text-[28px] text-[var(--color-brand-primary)] leading-[1]"
                  >
                    {step.number}
                  </span>
                  <div>
                    <h4
                      className="font-[var(--font-display)] text-[22px] font-medium text-[var(--color-text-primary)] mt-0 mr-0 mb-[8px] ml-0"
                    >
                      {step.title}
                    </h4>
                    <p
                      className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-[15px] leading-[1.6] m-0"
                    >
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              
              className={cn("mt-12 inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-[13px]", "font-[var(--font-body)] text-[var(--color-text-secondary)]")}
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
      
      className={cn(`${sectionPadding} bg-olive-100`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <SectionEyebrow>PERSONALIZED MICRONEEDLING</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Choose the Treatment That Fits Your Skin
          </SectionHeading>
          <p
            
            className={cn("mx-auto max-w-[680px] text-base lg:text-[17px]", "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]")}
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
              className="bg-[#fff] rounded-[20px] pt-[40px] pr-[34px] pb-[40px] pl-[34px] flex flex-col" style={{ border: "1px solid var(--color-border)" }}
            >
              <span
                className="font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)] pt-[6px] pr-[10px] pb-[6px] pl-[10px] rounded-[6px] bg-[var(--olive-100)] mb-[20px]" style={{ alignSelf: "flex-start", border: "1px solid var(--color-border)" }}
              >
                {t.tag}
              </span>
              <h3
                className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[26px] mt-0 mr-0 mb-[6px] ml-0"
              >
                {t.name}
              </h3>
              <p
                className="font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-text-primary)] mt-0 mr-0 mb-[12px] ml-0"
              >
                {t.subtitle}
              </p>
              <p
                
                className={cn("text-[15px] leading-relaxed", "font-[var(--font-body)] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[18px] ml-0")}
              >
                {t.text}
              </p>
              <div
                className="flex flex-wrap gap-[8px] mb-[24px]"
              >
                {t.bestFor.map((chip) => (
                  <span
                    key={chip}
                    className="font-[var(--font-body)] text-[12px] font-semibold text-[var(--olive-700)] bg-[var(--olive-100)] pt-[6px] pr-[10px] pb-[6px] pl-[10px] rounded-[999px]" style={{ border: "1px solid var(--color-border)" }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-[auto]">
                <div
                  className="flex items-baseline gap-[12px] mb-[10px]"
                >
                  <span
                    className="font-[var(--font-display)] text-[34px] font-medium text-[var(--color-text-primary)]"
                  >
                    {t.price}
                  </span>
                  {t.regularPrice && (
                    <span
                      className="font-[var(--font-body)] text-[18px] text-[var(--color-text-secondary)] line-through"
                    >
                      Regular {t.regularPrice}
                    </span>
                  )}
                </div>
                {t.note && (
                  <p
                    className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-[13px] leading-[1.5]"
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
            className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[26px] mt-0 mr-0 mb-[10px] ml-0"
          >
            Not sure which option is right for you?
          </h4>
          <p
            
            className={cn("mb-8 text-[17px]", "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]")}
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
      
      className={cn(`${sectionPadding} bg-olive-50`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-12 text-center">
          <SectionEyebrow>BEFORE & AFTER</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Results That Develop Over Time
          </SectionHeading>
          <p
            
            className={cn("mx-auto max-w-[680px] text-base lg:text-[17px]", "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]")}
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
                  
                  className={cn("mt-3 text-center text-[13px]", "font-[var(--font-body)] text-[var(--color-text-secondary)]")}
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
          
          className={cn("mt-10 text-center text-[13px]", "font-[var(--font-body)] text-[var(--color-text-secondary)]")}
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
              className="bg-[#fff] rounded-[18px] pt-[36px] pr-[30px] pb-[36px] pl-[30px]" style={{ border: "1px solid var(--color-border)" }}
            >
              <span
                className="font-[var(--font-display)] text-[26px] text-[var(--color-brand-primary)]"
              >
                {step.number}
              </span>
              <h4
                className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[26px] mt-[16px] mr-0 mb-[6px] ml-0"
              >
                {step.title}
              </h4>
              <p
                className="font-[var(--font-body)] text-[16px] font-semibold text-[var(--color-text-primary)] mt-0 mr-0 mb-[12px] ml-0"
              >
                {step.sub}
              </p>
              <p
                
                className={cn("text-[15px] leading-relaxed", "font-[var(--font-body)] text-[var(--color-text-secondary)]")}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[var(--color-border)] bg-olive-50 p-7 lg:flex-row">
          <div className="flex items-center gap-5">
            <div
              className="w-[48px] h-[48px] rounded-[50%] bg-[var(--olive-100)] flex items-center justify-center" style={{ border: "1px solid var(--color-border)" }}
            >
              <Sun size={22} color="var(--color-brand-primary)" />
            </div>
            <div>
              <h4
                className="font-[var(--font-body)] text-[16px] font-semibold text-[var(--color-text-primary)] m-0"
              >
                Add Celluma LED Light Therapy
              </h4>
              <p
                className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-[15px] mt-[4px] mr-0 mb-0 ml-0"
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
              
              className={cn("text-base lg:text-[17px]", "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.65]")}
            >
              Watch a quick introduction to the professional eDermaStamp system
              and how microneedling is performed.
            </p>
          </div>

          <div
            
            className={cn("relative w-full overflow-hidden", "rounded-[18px] aspect-[16/9]")}
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
                className={cn("relative h-full w-full cursor-pointer border-0 p-0", "bg-[url('/assets/smooth-skin-tech.png')] bg-cover bg-center")}
              >
                <span
                  
                  className={cn("absolute inset-0 flex items-center justify-center", "bg-[rgba(0,0,0,0.25)]")}
                >
                  <span
                    className="w-[72px] h-[72px] rounded-[50%] bg-[#fff] flex items-center justify-center" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
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
      className="relative pt-[90px] pr-[28px] pb-[90px] pl-[28px] bg-[var(--ink-900)] overflow-hidden"
    >
      <div
        className="relative z-[10] max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto text-center"
      >
        <div
          className="flex items-center justify-center gap-[16px] mb-[22px]"
        >
          <span
            className="w-[48px] h-[1px] bg-[var(--olive-500)]"
          />
          <span
            className="font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)] text-[var(--olive-100)]"
          >
            READY TO TAKE THE NEXT STEP?
          </span>
          <span
            className="w-[48px] h-[1px] bg-[var(--olive-500)]"
          />
        </div>

        <h2
          className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[var(--white)] text-[52px] leading-[1.08] mt-0 mr-auto mb-[18px] ml-auto max-w-[760px]"
        >
          Let&apos;s Create Your
          <br />
          Personalized Microneedling Plan
        </h2>

        <p
          className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-[var(--olive-200)] text-[17px] max-w-[620px] mt-0 mr-auto mb-[28px] ml-auto"
        >
          We&apos;ll take the time to understand your skin, concerns and goals,
          then recommend the microneedling option that makes the most sense for
          you.
        </p>

        <div
          className="flex flex-col items-center gap-[14px] mb-[60px]"
        >
          <Button
            variant="primary"
            style={{ maxWidth: 360, width: "100%", height: 64, fontSize: 17 }}
          >
            Book Your Microneedling Treatment →
          </Button>
          <a
            href="tel:+19059207229"
            className="flex items-center justify-center gap-[12px] max-w-[320px] w-full h-[60px] rounded-[14px] bg-[var(--olive-100)] no-underline font-[var(--font-body)]" style={{ border: "1px solid var(--olive-700)" }}
          >
            <Phone size={18} color="var(--color-brand-primary)" />
            <div>
              <div
                className="text-[18px] font-semibold text-[var(--ink-900)]"
              >
                (905) 920-7229
              </div>
              <div
                className="text-[12px] text-[var(--color-text-secondary)]"
              >
                Call or Text
              </div>
            </div>
          </a>
        </div>

        <div
          
          className={cn("mx-auto grid max-w-[1000px] grid-cols-1 gap-8 lg:grid-cols-3", "items-start")}
        >
          {reassuranceItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-center gap-4 px-6"
            >
              <div
                className="shrink-0 w-[64px] h-[64px] rounded-[50%] bg-[var(--olive-700)] flex items-center justify-center"
              >
                <item.icon size={26} color="var(--olive-100)" />
              </div>
              <div className="text-left">
                <h4
                  className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[var(--white)] text-[18px] mt-0 mr-0 mb-[4px] ml-0"
                >
                  {item.title}
                </h4>
                <p
                  className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-[var(--olive-200)] text-[14px] m-0"
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
