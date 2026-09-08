"use client";

import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Clock,
  Droplets,
  Filter,
  Leaf,
  Lightbulb,
  Radio,
  Sparkles,
  Sun,
  User,
  Waves,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { useCallback, useRef, useState } from "react";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import Header from "@/components/Header";
import * as ButtonModule from "@/components/design-system/core/Button";
import { useConsultation } from "@/components/ConsultationModal";
import { ReviewsSection } from "@/components/ReviewsSection";
import type { ButtonProps } from "@/components/design-system/core/Button";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";
import type { GoogleReviewsProps } from "@/components/design-system/trust/GoogleReviews";
import { oxygeneoFaqCategories } from "@/lib/oxygeneo-faq";
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

function OxyHero() {
  const { open: openConsultation } = useConsultation();
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b-2 border-[#bfae97] bg-olive-50",
        "min-h-0 lg:min-h-[800px] pt-[80px] pr-[28px] pb-[70px] pl-[28px]",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 z-0 bg-cover bg-center bg-no-repeat lg:bg-right lg:[background-size:auto_100%]",
          "bg-[url('/assets/oxygeneo-hero.jpg')]",
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
            <span
              className={cn(
                "text-[12px] font-bold uppercase tracking-[0.16em]",
                "font-[var(--font-body)] text-[var(--color-brand-primary)]",
              )}
            >
              OXYGENEO 3-IN-1 SUPER FACIAL{" "}
              <span className="text-[var(--color-brand-deep)]">
                · NIAGARA FALLS
              </span>
            </span>
            <span className="w-[48px] h-[1px] bg-[var(--color-border-strong)]" />
          </div>

          <h1
            className={cn(
              "text-[44px] leading-[1.05] lg:text-[80px]",
              "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-0 mr-0 mb-[31px] ml-0",
            )}
          >
            Your Best Skin,
            <br className="hidden md:inline" />
            <span
              className={cn(
                "italic",
                "text-[var(--olive-600)] font-[var(--font-display)]",
              )}
            >
              All in One Facial.
            </span>
          </h1>

          <p
            className={cn(
              "text-base leading-relaxed lg:text-[20px] lg:leading-[1.6]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[40px] ml-0",
            )}
          >
            Experience a personalized OxyGeneo facial that combines exfoliation,
            natural skin oxygenation and ingredient infusion in one relaxing
            treatment — designed to leave skin feeling smoother, refreshed and
            radiant with no downtime.
          </p>

          <div className={cn("flex flex-col gap-4 lg:flex-row", "mb-[31px]")}>
            <Button
              variant="primary"
              onClick={openConsultation}
              style={{ whiteSpace: "normal", maxWidth: "100%" }}
            >
              I want a Free Consultation →
            </Button>
            <Link href="#treatment-options">
              <Button
                variant="secondary"
                style={{ width: "100%", whiteSpace: "normal" }}
              >
                Explore Treatment Options
              </Button>
            </Link>
          </div>

          <GoogleReviews rating="5.0" count="61+" />

          <div
            className={cn(
              "mt-12 flex flex-wrap items-center gap-8",
              "flex flex-wrap gap-[24px] mt-[48px]",
            )}
          >
            {[
              { icon: Sparkles, text: "3-in-1 Technology" },
              { icon: User, text: "Personalized to Your Skin" },
              { icon: Clock, text: "No Downtime" },
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
                <div>
                  <strong className="font-semibold">{item.text}</strong>
                  <div className="text-[13px] text-[var(--color-text-secondary)]">
                    {item.text === "3-in-1 Technology" &&
                      "Exfoliate · Oxygenate · Infuse"}
                    {item.text === "Personalized to Your Skin" &&
                      "OxyPod selected around your concerns"}
                    {item.text === "No Downtime" &&
                      "Return to your day right away"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OxyHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Exfoliate",
      sub: "Reveal a Smoother Surface",
      text: "The OxyPod gently exfoliates the outermost layer of skin, helping remove dead surface cells and improve the look and feel of skin texture.",
      img: "/assets/oxygeneo -step-1.jpg",
      alt: "OxyGeneo exfoliation step",
    },
    {
      number: "02",
      title: "Oxygenate",
      sub: "Support Oxygenation From Within",
      text: "The OxyGeneo treatment creates carbon dioxide bubbles at the skin's surface. This triggers a natural physiological response known as the Bohr Effect, increasing oxygen-rich blood flow to the treatment area.",
      img: "/assets/oxygeneo -step-2.jpg",
      alt: "OxyGeneo oxygenation step",
    },
    {
      number: "03",
      title: "Infuse",
      sub: "Deliver Ingredients Selected for Your Skin",
      text: "While the treatment is taking place, the skin is exposed to active ingredients selected according to your concerns and treatment goals.",
      img: "/assets/oxygeneo -step-3.jpg",
      alt: "OxyGeneo infusion step",
    },
  ];

  return (
    <section
      className={cn(`${sectionPadding} bg-olive-50`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <SectionEyebrow>THE OXYGENEO DIFFERENCE</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Three Steps. One Complete Facial.
          </SectionHeading>
          <p
            className={cn(
              "mx-auto max-w-[680px] text-base lg:text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
            )}
          >
            OxyGeneo combines three complementary treatment steps in a single
            facial experience — resurfacing the skin, supporting natural
            oxygenation and delivering a personalized serum protocol.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#fff] rounded-[18px] overflow-hidden"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <img
                src={step.img}
                alt={step.alt}
                loading="lazy"
                className={cn("w-full object-cover", "aspect-[4/3]")}
                style={{ borderBottom: "1px solid var(--color-border)" }}
              />
              <div className="pt-[36px] pr-[30px] pb-[36px] pl-[30px]">
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
            </div>
          ))}
        </div>

        <div
          className={cn(
            "mt-10 text-center text-[13px] font-bold uppercase tracking-[0.22em]",
            "font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)]",
          )}
        >
          Exfoliate · Oxygenate · Infuse
        </div>
      </div>
    </section>
  );
}

const treatments = [
  {
    tag: "ESSENTIAL 3-IN-1 FACIAL",
    name: "Express OxyGeneo",
    subtitle: "A focused treatment for fresh, radiant-looking skin.",
    price: "$185 + HST",
    includes: [
      "Personalized OxyPod selection",
      "OxyGeneo exfoliation, oxygenation and infusion",
      "Hot towels and steam",
      "Infrared facial massage",
      "Hydration and lymphatic-drainage focused massage",
      "Finishing cream",
    ],
    footer:
      "Ideal when you want the core OxyGeneo experience without additional technologies.",
  },
  {
    tag: "ENHANCED TREATMENT",
    name: "Deluxe OxyGeneo",
    subtitle:
      "The OxyGeneo experience with additional lifting, infusion and relaxation.",
    price: "$225 + HST",
    includes: [
      "TriPollar RF Eye Lift",
      "Celltense serum",
      "Ultrasound infusion",
      "Additional infrared massage",
      "Lymphatic drainage",
      "Facial and neck massage",
    ],
    footer:
      "A great option before a special event when you want a refreshed, lifted-looking finish with no downtime.",
  },
  {
    tag: "MOST COMPREHENSIVE",
    name: "Signature OxyGeneo",
    subtitle: "Our most complete OxyGeneo facial experience.",
    price: "$285 + HST",
    includes: [
      "Deep-cleansing treatment mask",
      "TriPollar radiofrequency treatment",
      "Targeted eye treatment",
      "Steamed hot towels",
      "Signature OxyGeneo facial",
      "Ultrasound infusion",
      "30 minutes of Celluma LED light therapy",
      "Relaxing hand and arm massage",
    ],
    footer:
      "Designed for clients who want the fullest combination of OxyGeneo, RF, ultrasound and LED technologies in one appointment.",
  },
];

function OxyPricing() {
  const { open: openConsultation } = useConsultation();
  return (
    <section
      id="treatment-options"
      className={cn(`${sectionPadding} bg-olive-100`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <SectionEyebrow>CHOOSE YOUR EXPERIENCE</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Find the OxyGeneo Facial That Fits Your Goals
          </SectionHeading>
          <p
            className={cn(
              "mx-auto max-w-[720px] text-base lg:text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
            )}
          >
            From a focused glow-boosting treatment to our most comprehensive
            facial experience, choose the level of treatment that fits your
            skin, schedule and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {treatments.map((t) => (
            <div
              key={t.name}
              className="bg-[#fff] rounded-[20px] pt-[40px] pr-[34px] pb-[40px] pl-[34px] flex flex-col"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span
                className="font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)] pt-[6px] pr-[10px] pb-[6px] pl-[10px] rounded-[6px] bg-[var(--olive-100)] mb-[20px]"
                style={{
                  alignSelf: "flex-start",
                  border: "1px solid var(--color-border)",
                }}
              >
                {t.tag}
              </span>
              <h3 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[28px] mt-0 mr-0 mb-[6px] ml-0">
                {t.name}
              </h3>
              <p className="font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-text-primary)] mt-0 mr-0 mb-[12px] ml-0">
                {t.subtitle}
              </p>
              <ul
                className="mt-0 mr-0 mb-[18px] ml-0 pl-[20px] text-[var(--color-text-secondary)] text-[15px] leading-[1.55]"
                style={{ listStyle: "disc" }}
              >
                {t.includes.map((item) => (
                  <li key={item} className="mb-[6px]">
                    {item}
                  </li>
                ))}
              </ul>
              <p
                className={cn(
                  "mt-auto text-[15px]",
                  "font-[var(--font-body)] text-[var(--color-text-secondary)] mt-[auto]",
                )}
              >
                {t.footer}
              </p>
              <div
                className={cn(
                  "mt-5",
                  "font-[var(--font-display)] text-[34px] font-medium text-[var(--color-text-primary)]",
                )}
              >
                {t.price}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[26px] mt-0 mr-0 mb-[10px] ml-0">
            Not sure which one to choose?
          </h4>
          <p
            className={cn(
              "mb-8 text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
            )}
          >
            We&apos;ll recommend the most suitable option based on your skin,
            goals and how comprehensive you want your treatment to be.
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

const oxypods = [
  {
    key: "detox",
    name: "DETOX",
    sub: "Green Tea",
    for: "For Sensitive or Stressed-Looking Skin",
    text: "Designed for skin that looks irritated, congested or in need of calming support.",
    bestFor: ["Sensitivity", "Visible Redness", "Environmental Stress"],
    icon: Leaf,
    accent: "var(--olive-600)",
  },
  {
    key: "hydrate",
    name: "HYDRATE",
    sub: "Blue Spirulina",
    for: "For Dry, Dehydrated Skin",
    text: "Focused on hydration and supporting softer, more comfortable-looking skin.",
    bestFor: ["Dryness", "Dehydration", "Skin Comfort"],
    icon: Droplets,
    accent: "#4A90A4",
  },
  {
    key: "illuminate",
    name: "ILLUMINATE",
    sub: "Vitamin C + Kojic Acid",
    for: "For Brightness & Uneven-Looking Tone",
    text: "Designed to support a brighter-looking complexion and improve the appearance of uneven tone.",
    bestFor: ["Dullness", "Uneven Tone", "Brightness"],
    icon: Sun,
    accent: "#C89F4C",
  },
  {
    key: "balance",
    name: "BALANCE",
    sub: "Activated Bamboo Charcoal",
    for: "For Oily or Congested-Looking Skin",
    text: "Focused on cleansing and refreshing skin that appears oily or congested.",
    bestFor: ["Oiliness", "Congestion", "Visible Pores"],
    icon: Filter,
    accent: "#6B6B6B",
  },
  {
    key: "revive",
    name: "REVIVE",
    sub: "Red Algae",
    for: "For Visible Signs of Aging",
    text: "Designed for clients focused on firmness, fine lines and overall skin vitality.",
    bestFor: ["Fine Lines", "Firmness", "Skin Rejuvenation"],
    icon: Sparkles,
    accent: "#A85C5C",
  },
];

function OxyOxyPods() {
  return (
    <section
      className={cn(`${sectionPadding} bg-olive-50`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <SectionEyebrow>PERSONALIZED TO YOUR SKIN</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            One Facial. Five Ways to Customize It.
          </SectionHeading>
          <p
            className={cn(
              "mx-auto max-w-[680px] text-base lg:text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
            )}
          >
            Your OxyPod is selected according to your skin concerns and desired
            results, so the treatment can be adapted whether your priority is
            hydration, clarity, brightness, balance or rejuvenation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {oxypods.map((pod) => (
            <div
              key={pod.key}
              className="bg-[#fff] rounded-[18px] pt-[28px] pr-[24px] pb-[28px] pl-[24px]"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <div
                className="w-[46px] h-[46px] rounded-[50%] text-[#fff] flex items-center justify-center mb-[18px]"
                style={{ background: pod.accent }}
              >
                <pod.icon size={22} strokeWidth={1.6} />
              </div>
              <span
                className="font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)] text-[10px]"
                style={{ color: pod.accent }}
              >
                {pod.name}
              </span>
              <p className="font-[var(--font-body)] text-[13px] font-semibold text-[var(--color-text-secondary)] mt-[6px] mr-0 mb-[10px] ml-0">
                {pod.sub}
              </p>
              <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[20px] mt-0 mr-0 mb-[10px] ml-0">
                {pod.for}
              </h4>
              <p
                className={cn(
                  "mb-4 text-[14px] leading-relaxed",
                  "font-[var(--font-body)] text-[var(--color-text-secondary)]",
                )}
              >
                {pod.text}
              </p>
              <div className="flex flex-wrap gap-2">
                {pod.bestFor.map((chip) => (
                  <span
                    key={chip}
                    className="font-[var(--font-body)] text-[11px] font-semibold text-[var(--olive-700)] bg-[var(--olive-100)] pt-[5px] pr-[8px] pb-[5px] pl-[8px] rounded-[999px]"
                    style={{ border: "1px solid var(--color-border)" }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-olive-100 p-8 text-center">
          <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[24px] mt-0 mr-0 mb-[8px] ml-0">
            You Don&apos;t Need to Choose Before You Arrive
          </h4>
          <p
            className={cn(
              "text-base",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6] m-0",
            )}
          >
            We&apos;ll look at your skin and select the OxyPod that best fits
            your concerns and treatment goals before beginning your facial.
          </p>
        </div>
      </div>
    </section>
  );
}

function OxyAdvancedTech() {
  return (
    <section
      className={cn(`${sectionPadding} bg-olive-100`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <SectionEyebrow>MORE THAN A FACIAL</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Advanced Technology, Personalized to You
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              icon: Radio,
              title: "TriPollar Radiofrequency",
              sub: "Firming & Lifting Support",
              text: "TriPollar RF is used in selected treatments to deliver controlled radiofrequency energy into the skin, supporting a firmer and more lifted-looking appearance.",
            },
            {
              icon: Waves,
              title: "Ultrasound Infusion",
              sub: "Enhance the Infusion Step",
              text: "Low-intensity ultrasound is incorporated into selected OxyGeneo treatments to support ingredient delivery and complement the overall facial experience.",
            },
            {
              icon: Lightbulb,
              title: "Celluma LED Light Therapy",
              sub: "A Relaxing LED Finish",
              text: "The Signature OxyGeneo includes 30 minutes of Celluma LED light therapy as part of the complete treatment experience.",
            },
          ].map((tech) => (
            <div
              key={tech.title}
              className="bg-[#fff] rounded-[18px] pt-[36px] pr-[30px] pb-[36px] pl-[30px]"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <div
                className="w-[56px] h-[56px] rounded-[50%] bg-[var(--olive-100)] flex items-center justify-center mb-[20px]"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <tech.icon
                  size={26}
                  strokeWidth={1.5}
                  color="var(--color-brand-primary)"
                />
              </div>
              <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[24px] mt-0 mr-0 mb-[6px] ml-0">
                {tech.title}
              </h4>
              <p className="font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-text-primary)] mt-0 mr-0 mb-[10px] ml-0">
                {tech.sub}
              </p>
              <p
                className={cn(
                  "text-[15px] leading-relaxed",
                  "font-[var(--font-body)] text-[var(--color-text-secondary)]",
                )}
              >
                {tech.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/celluma-led-light-therapy"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 600,
              color: "var(--color-brand-primary)",
              textDecoration: "none",
            }}
          >
            Explore Celluma LED Light Therapy →
          </Link>
        </div>
      </div>
    </section>
  );
}

function OxyAddOns() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className={cn(`${sectionPadding} bg-olive-50`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-12 text-center">
          <SectionEyebrow>PERSONALIZE YOUR APPOINTMENT</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Enhance Your OxyGeneo Treatment
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
          {[
            {
              name: "Celluma LED Light Therapy",
              price: "$30",
              detail: "30 Minutes — Regular standalone price: $60",
            },
            {
              name: "Treatment Mask",
              price: "$50",
              detail:
                "Pore Detox · Charcoal Detox · Hyaluronic Acid · Exfoliating Mud",
            },
            {
              name: "Extend Your OxyGeneo Treatment",
              price: "$50 per additional area",
              detail: "Neck · Chest · Back",
            },
            {
              name: "Additional TriPollar RF Area",
              price: "$50 per additional area",
              detail: "Add RF to an additional area during your visit",
            },
          ].map((item, i, arr) => (
            <div
              key={item.name}
              className="pt-[26px] pr-[28px] pb-[26px] pl-[28px] flex flex-col gap-[4px]"
              style={{
                borderBottom:
                  i < arr.length - 1
                    ? "1px solid var(--color-border)"
                    : undefined,
              }}
            >
              <div className="flex justify-between items-center gap-[16px]">
                <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[20px] m-0">
                  {item.name}
                </h4>
                <span className="font-[var(--font-body)] text-[18px] font-bold text-[var(--color-brand-primary)] whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-[14px] m-0">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <p
          className={cn(
            "mt-6 text-center text-[13px]",
            "font-[var(--font-body)] text-[var(--color-text-secondary)]",
          )}
        >
          All prices are subject to HST. Add-ons are recommended based on
          treatment suitability and your goals.
        </p>

        <div className="mt-14">
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            className={cn(
              "flex w-full items-center justify-between rounded-xl border border-[var(--color-border)] bg-olive-100 px-6 py-5 text-left",
              "cursor-pointer",
            )}
          >
            <span className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[20px]">
              Standalone TriPollar RF Pricing
            </span>
            <ChevronDown
              size={22}
              color="var(--color-text-secondary)"
              style={{
                transform: open ? "rotate(180deg)" : undefined,
                transition: "transform 0.2s",
              }}
            />
          </button>
          {open && (
            <div
              className="rounded-b-xl border-x border-b border-[var(--color-border)] bg-white px-6 py-5"
              style={{ borderTop: 0 }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { label: "Full Face", price: "$150" },
                  { label: "Eye Lift, Neck or Décolleté", price: "$125" },
                  { label: "Full Face + Neck", price: "$180" },
                  { label: "Full Face + Neck + Décolleté", price: "$215" },
                ].map((rf) => (
                  <div
                    key={rf.label}
                    className="flex justify-between pt-[12px] pr-0 pb-[12px] pl-0 font-[var(--font-body)]"
                    style={{ borderBottom: "1px solid var(--color-border)" }}
                  >
                    <span className="text-[var(--color-text-primary)]">
                      {rf.label}
                    </span>
                    <span className="font-semibold text-[var(--color-brand-primary)]">
                      {rf.price}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className={cn(
                  "mt-4 text-[13px]",
                  "font-[var(--font-body)] text-[var(--color-text-secondary)]",
                )}
              >
                Prices subject to HST.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const results = [
  {
    title: "Fresh Glow",
    beforeSrc: "/assets/hero-treatment.png",
    afterSrc: "/assets/hero-treatment-olive.png",
  },
  {
    title: "Hydrated Skin",
    beforeSrc: "/assets/hero-treatment.png",
    afterSrc: "/assets/hero-treatment-olive.png",
  },
  {
    title: "Brighter Tone",
    beforeSrc: "/assets/hero-treatment.png",
    afterSrc: "/assets/hero-treatment-olive.png",
  },
];

function OxyResults() {
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
      className={cn(`${sectionPadding} bg-olive-100`, "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-12 text-center">
          <SectionEyebrow>BEFORE & AFTER</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Fresh, Radiant Results
          </SectionHeading>
          <p
            className={cn(
              "mx-auto max-w-[680px] text-base lg:text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
            )}
          >
            OxyGeneo is designed to leave skin looking refreshed after
            treatment, while consistent skincare and repeated treatments may
            support continued improvements in hydration, texture and overall
            appearance.
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
                  className={cn(
                    "mt-3 text-center text-[13px]",
                    "font-[var(--font-body)] text-[var(--color-text-secondary)]",
                  )}
                >
                  OxyGeneo manufacturer example
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

function OxyFaq() {
  return (
    <FaqSection
      eyebrow="FREQUENTLY ASKED QUESTIONS"
      heading="Your OxyGeneo Facial Questions, Answered"
      subheading="Clear answers about the 3-in-1 treatment, what to expect, how to choose your treatment and whether OxyGeneo may be right for you."
      categories={oxygeneoFaqCategories}
    />
  );
}

function OxyFinalCta() {
  return (
    <CtaSection
      eyebrow="READY FOR YOUR GLOW?"
      heading={
        <>
          Let&apos;s Create Your
          <br className="hidden md:inline" />
          Personalized Facial
        </>
      }
      subheading="We'll look at your skin, discuss your concerns and help you choose the OxyGeneo treatment and OxyPod that best fit your goals."
      phone="(905) 920-7229"
      phoneLabel="Call or Text"
      benefits={[
        {
          icon: <User size={26} color="var(--olive-100)" />,
          title: "Personalized Care",
          text: "Selected around your skin",
        },
        {
          icon: <Sparkles size={26} color="var(--olive-100)" />,
          title: "Advanced Technology",
          text: "3-in-1 OxyGeneo treatment",
        },
        {
          icon: <Clock size={26} color="var(--olive-100)" />,
          title: "No Downtime",
          text: "Fresh-looking skin without a long recovery",
        },
      ]}
    />
  );
}

export default function OxyGeneoPage() {
  return (
    <>
      <Header />
      <main>
        <OxyHero />
        <OxyHowItWorks />
        <OxyPricing />
        <OxyOxyPods />
        <OxyAdvancedTech />
        <OxyAddOns />
        <OxyResults />
        <OxyFaq />
        <ReviewsSection prioritizeService="facial" />
        <OxyFinalCta />
      </main>
    </>
  );
}
