"use client";

import {
  Check,
  Clock,
  Droplets,
  Heart,
  Layers,
  Leaf,
  Lightbulb,
  Shield,
  Sparkles,
  Sun,
  User,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import Header from "@/components/Header";
import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";
import type { GoogleReviewsProps } from "@/components/design-system/trust/GoogleReviews";
import { pcaPeelsFaqCategories } from "@/lib/pca-peels-faq";
import { useConsultation } from "@/components/ConsultationModal";
import { ReviewsSection } from "@/components/ReviewsSection";
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
        "text-[36px] leading-[1.1] break-words text-balance lg:text-[44px]",
        "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]",
      )}
      style={{ ...style }}
    >
      {children}
    </h2>
  );
}

function PcaHero() {
  const { open: openConsultation } = useConsultation();
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b-2 border-[#bfae97] bg-olive-50",
        "min-h-0 lg:min-h-[760px] py-16 px-7 lg:pt-[80px] lg:pb-[70px]",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 z-0 bg-cover bg-center bg-no-repeat lg:bg-right lg:[background-size:auto_100%]",
          "bg-[url('/assets/skin-peels-hero.jpg')]",
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
              PROFESSIONAL PCA SKIN PEELS{" "}
              <span className="text-[var(--color-brand-deep)]">
                · NIAGARA FALLS
              </span>
            </span>
            <span className="w-[48px] h-[1px] bg-[var(--color-border-strong)]" />
          </div>

          <h1
            className={cn(
              "text-[36px] leading-[1.08] break-words text-balance md:text-[44px] lg:text-[80px]",
              "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-0 mr-0 mb-[31px] ml-0",
            )}
          >
            Reveal Brighter,
            <br className="hidden md:inline" />
            <span
              className={cn(
                "italic",
                "text-[var(--olive-600)] font-[var(--font-display)]",
              )}
            >
              Smoother-Looking Skin.
            </span>
          </h1>

          <p
            className={cn(
              "text-base leading-relaxed lg:text-[20px] lg:leading-[1.6]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[40px] ml-0",
            )}
          >
            Professional PCA SKIN chemical peels are customized to your skin and
            concerns, helping exfoliate surface buildup and improve the
            appearance of uneven texture, dullness, breakouts and visible signs
            of aging.
          </p>

          <div className={cn("flex flex-col gap-4 lg:flex-row", "mb-[31px]")}>
            <Button
              variant="primary"
              onClick={openConsultation}
              style={{ whiteSpace: "normal", maxWidth: "100%" }}
            >
              I want a Free Consultation →
            </Button>
            <Link href="#peel-options">
              <Button
                variant="secondary"
                style={{ width: "100%", whiteSpace: "normal" }}
              >
                View Peel Options
              </Button>
            </Link>
          </div>

          <GoogleReviews rating="5.0" count="61+" />

          <div
            className={cn(
              "mt-12 flex flex-wrap items-stretch gap-8",
              "mt-[48px]",
            )}
          >
            {[
              {
                title: "Professional PCA SKIN Treatments",
                sub: "Selected for your individual skin",
              },
              {
                title: "Personalized Peel Selection",
                sub: "Treatment strength based on your needs",
              },
              {
                title: "Minimal Disruption",
                sub: "Many professional peels involve little downtime",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-[12px] max-w-[260px]"
              >
                <Check
                  size={22}
                  strokeWidth={1.5}
                  color="var(--color-brand-primary)"
                  style={{ flexShrink: 0, marginTop: 3 }}
                />
                <div>
                  <strong className="font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-text-primary)]">
                    {item.title}
                  </strong>
                  <p className="font-[var(--font-body)] text-[var(--color-text-secondary)] text-[13px] mt-[4px] mr-0 mb-0 ml-0">
                    {item.sub}
                  </p>
                </div>
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
    icon: Layers,
    title: "Uneven Texture",
    text: "Helps smooth the appearance of rough or uneven surface texture.",
  },
  {
    icon: Sun,
    title: "Dull-Looking Skin",
    text: "Exfoliation can reveal fresher, brighter-looking skin underneath accumulated surface cells.",
  },
  {
    icon: Sparkles,
    title: "Fine Lines",
    text: "Selected peel treatments can improve the visible appearance of fine lines and signs of aging.",
  },
  {
    icon: Shield,
    title: "Breakouts & Congestion",
    text: "Certain professional peel options may be used as part of a treatment plan for acne-prone or congested skin.",
  },
  {
    icon: Droplets,
    title: "Uneven Skin Tone",
    text: "Professional peels can help improve the appearance of uneven tone and discoloration.",
  },
  {
    icon: Heart,
    title: "Overall Skin Refresh",
    text: "Ideal for clients looking to maintain a smoother, clearer and more radiant-looking complexion.",
  },
];

function PcaConcerns() {
  return (
    <section
      className={cn(`${sectionPadding} bg-olive-50`, "py-16 lg:py-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <SectionEyebrow>PERSONALIZED SKIN RENEWAL</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Target the Concerns You See in the Mirror
          </SectionHeading>
          <p
            className={cn(
              "mx-auto max-w-[700px] text-base lg:text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
            )}
          >
            Professional chemical peels remove accumulated surface cells and
            support a fresher-looking complexion. Your treatment is selected
            according to your skin condition, sensitivity and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((item) => (
            <div
              key={item.title}
              className="bg-[#fff] rounded-[18px] pt-[30px] pr-[30px] pb-[30px] pl-[30px]"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <item.icon
                size={28}
                strokeWidth={1.5}
                color="var(--color-brand-primary)"
                className="mb-[16px]"
              />
              <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[22px] mt-0 mr-0 mb-[8px] ml-0">
                {item.title}
              </h4>
              <p
                className={cn(
                  "text-[15px] leading-relaxed",
                  "font-[var(--font-body)] text-[var(--color-text-secondary)]",
                )}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p
          className={cn(
            "mt-10 text-center text-[15px]",
            "font-[var(--font-body)] text-[var(--color-text-secondary)]",
          )}
        >
          The right peel depends on your skin — stronger is not automatically
          better. We&apos;ll select the appropriate treatment after assessing
          your skin.
        </p>
      </div>
    </section>
  );
}

const peels = [
  {
    tag: "GENTLE + VERSATILE",
    name: "PCA Sensi Peel",
    for: "For sensitive skin and surface renewal",
    price: "$150",
    text: "A gentler professional peel option designed to improve surface texture, brightness and the appearance of uneven skin tone.",
    note: "Your treatment may be customized with appropriate corrective products based on your skin.",
    bestFor: ["Sensitive Skin", "Texture", "Uneven Tone"],
  },
  {
    tag: "VISIBLE AGING",
    name: "PCA Ultra Peel",
    for: "For maturing skin and visible fine lines",
    price: "$180",
    text: "A professional peel formulated for concerns associated with maturing skin, helping improve the appearance of fine lines while supporting a more even-looking complexion.",
    note: null,
    bestFor: ["Fine Lines", "Maturing Skin", "Uneven Tone"],
  },
  {
    tag: "REFRESH + BRIGHTEN",
    name: "OXY PCA Peel",
    for: "For dull, tired-looking skin",
    price: "$180",
    text: "A customized treatment combining professional exfoliation with an oxygenating treatment approach to leave the complexion looking refreshed, brighter and more radiant.",
    note: null,
    bestFor: ["Dullness", "Texture", "Skin Refresh"],
  },
  {
    tag: "ADVANCED RENEWAL",
    name: "Retinol PCA Peel",
    for: "A more intensive renewal option",
    price: "$180",
    text: "A professional peel treatment enhanced with retinol for clients who are appropriate candidates for a more intensive skin-renewal protocol.",
    note: "This option may involve more visible shedding and is not appropriate for every client. Suitability will be assessed before treatment.",
    bestFor: ["Visible Aging", "Texture", "Uneven Tone"],
  },
];

function PcaPeels() {
  const { open: openConsultation } = useConsultation();
  return (
    <section
      id="peel-options"
      className={cn(`${sectionPadding} bg-olive-100`, "py-16 lg:py-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <SectionEyebrow>TREATMENT OPTIONS</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Find the Peel That Fits Your Skin
          </SectionHeading>
          <p
            className={cn(
              "mx-auto max-w-[720px] text-base lg:text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
            )}
          >
            Different PCA SKIN peel formulations are designed for different skin
            types and concerns. You don&apos;t need to choose alone — we&apos;ll
            recommend the most appropriate option based on your skin and desired
            result.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {peels.map((peel) => (
            <div
              key={peel.name}
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
                {peel.tag}
              </span>
              <h3 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[28px] mt-0 mr-0 mb-[6px] ml-0">
                {peel.name}
              </h3>
              <p className="font-[var(--font-body)] text-[16px] font-semibold text-[var(--color-text-primary)] mt-0 mr-0 mb-[10px] ml-0">
                {peel.for}
              </p>
              <p
                className={cn(
                  "text-[15px] leading-relaxed",
                  "font-[var(--font-body)] text-[var(--color-text-secondary)] mb-[14px]",
                )}
              >
                {peel.text}
              </p>
              <div className="flex flex-wrap gap-2">
                {peel.bestFor.map((chip) => (
                  <span
                    key={chip}
                    className="font-[var(--font-body)] text-[11px] font-semibold text-[var(--olive-700)] bg-[var(--olive-100)] pt-[5px] pr-[8px] pb-[5px] pl-[8px] rounded-[999px]"
                    style={{ border: "1px solid var(--color-border)" }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              {peel.note && (
                <p
                  className={cn(
                    "mt-4 text-[13px] leading-relaxed",
                    "font-[var(--font-body)] text-[var(--color-text-secondary)]",
                  )}
                >
                  {peel.note}
                </p>
              )}
              <div
                className={cn(
                  "mt-5",
                  "font-[var(--font-display)] text-[34px] font-medium text-[var(--color-text-primary)] mt-[auto]",
                )}
              >
                {peel.price}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[26px] mt-0 mr-0 mb-[10px] ml-0">
            Not sure which peel to book?
          </h4>
          <p
            className={cn(
              "mb-8 text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
            )}
          >
            That&apos;s completely fine. We&apos;ll assess your skin and
            recommend the most suitable PCA SKIN treatment at your appointment.
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

function PcaHowItWorks() {
  return (
    <section
      className={cn(`${sectionPadding} bg-olive-50`, "py-16 lg:py-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <SectionEyebrow>YOUR TREATMENT</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Professional Exfoliation, Personalized to Your Skin
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Assess",
              sub: "We Start With Your Skin",
              text: "Before treatment, we'll review your skin, current products, sensitivities and the concerns you'd like to address.",
            },
            {
              number: "02",
              title: "Treat",
              sub: "Your Peel Is Applied Professionally",
              text: "The selected PCA SKIN treatment is applied in a controlled professional setting and may be customized or layered according to your skin and treatment plan.",
            },
            {
              number: "03",
              title: "Renew",
              sub: "Let Your Skin Do the Rest",
              text: "Over the following days, your complexion may feel smoother and look refreshed as treated surface cells naturally shed and renew.",
            },
          ].map((step) => (
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

        <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-olive-100 p-8 text-center">
          <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[22px] mt-0 mr-0 mb-[10px] ml-0">
            You Don&apos;t Have to Visibly Peel for a Peel to Work
          </h4>
          <p
            className={cn(
              "text-base",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6] m-0",
            )}
          >
            Visible flaking varies from person to person and treatment to
            treatment. A professional chemical peel can still improve the
            appearance of the skin even when there is little or no visible
            peeling.
          </p>
        </div>
      </div>
    </section>
  );
}

function PcaAddOns() {
  return (
    <section
      className={cn(`${sectionPadding} bg-olive-100`, "py-16 lg:py-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-12 text-center">
          <SectionEyebrow>OPTIONAL ADD-ONS</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Customize Your Appointment
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
          {[
            {
              name: "Ready Medical",
              price: "$110",
              detail:
                "An advanced professional add-on that may be incorporated when appropriate for your treatment goals.",
            },
            {
              name: "Exosome Add-On",
              price: "$110",
              detail:
                "A premium treatment add-on available for selected skincare protocols.",
            },
            {
              name: "Celluma LED Light Therapy",
              price: "$30",
              detail:
                "30 Minutes — A relaxing LED add-on after selected treatments.",
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
          Add-ons are selected according to treatment suitability and your
          individual skin plan.
        </p>

        <div className="mt-8 text-center">
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
            Learn About Celluma LED Light Therapy →
          </Link>
        </div>
      </div>
    </section>
  );
}

function PcaWhyProfessional() {
  return (
    <section
      className={cn(`${sectionPadding} bg-olive-50`, "py-16 lg:py-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src="/assets/hero-treatment.png"
              alt="Professional PCA SKIN chemical peel treatment"
              loading="lazy"
              className={cn(
                "w-full object-cover",
                "rounded-[18px] aspect-[4/3]",
              )}
              style={{ border: "1px solid var(--color-border)" }}
            />
          </div>

          <div>
            <SectionEyebrow>PROFESSIONAL SKINCARE</SectionEyebrow>
            <SectionHeading style={{ margin: "22px 0 20px" }}>
              Your Peel Should Fit Your Skin — Not the Other Way Around.
            </SectionHeading>
            <p
              className={cn(
                "mb-8 text-[17px] leading-relaxed",
                "font-[var(--font-body)] text-[var(--color-text-secondary)]",
              )}
            >
              Professional chemical peels aren&apos;t one-size-fits-all. Skin
              sensitivity, current condition, home skincare and treatment goals
              all influence which formulation and treatment approach makes sense
              for you.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  icon: User,
                  title: "Professionally Selected",
                  text: "Your peel is selected after assessing your skin rather than relying on a generic treatment strength.",
                },
                {
                  icon: Leaf,
                  title: "Customizable Treatment",
                  text: "Professional peel treatments can be adjusted according to skin response and treatment goals.",
                },
                {
                  icon: Clock,
                  title: "Pre- & Post-Treatment Guidance",
                  text: "Good preparation and aftercare are an important part of a professional peel treatment plan.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <item.icon
                    size={24}
                    strokeWidth={1.5}
                    color="var(--color-brand-primary)"
                    className="mb-[12px]"
                  />
                  <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[19px] mt-0 mr-0 mb-[6px] ml-0">
                    {item.title}
                  </h4>
                  <p
                    className={cn(
                      "text-[14px] leading-relaxed",
                      "font-[var(--font-body)] text-[var(--color-text-secondary)]",
                    )}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PcaWhatToExpect() {
  return (
    <section
      className={cn(`${sectionPadding} bg-olive-100`, "py-16 lg:py-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <SectionEyebrow>BEFORE + AFTER</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Know What to Expect From Your Peel
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div
            className="bg-[#fff] rounded-[18px] pt-[36px] pr-[30px] pb-[36px] pl-[30px]"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[24px] mt-0 mr-0 mb-[14px] ml-0">
              Before Your Appointment
            </h4>
            <p
              className={cn(
                "mb-4 text-[15px] leading-relaxed",
                "font-[var(--font-body)] text-[var(--color-text-secondary)]",
              )}
            >
              Let us know about:
            </p>
            <ul
              className="m-0 pl-[20px] text-[var(--color-text-secondary)] text-[15px] leading-[1.5]"
              style={{ listStyle: "disc" }}
            >
              {[
                "prescription skincare",
                "retinoids",
                "recent aesthetic treatments",
                "active irritation",
                "recent significant sun exposure",
                "pregnancy",
                "medications",
                "allergies",
                "any relevant health conditions",
              ].map((i) => (
                <li key={i} className="mb-[6px]">
                  {i}
                </li>
              ))}
            </ul>
            <p
              className={cn(
                "mt-4 text-[15px] leading-relaxed",
                "font-[var(--font-body)] text-[var(--color-text-secondary)]",
              )}
            >
              Your skincare routine may need to be adjusted before treatment.
            </p>
          </div>

          <div
            className="bg-[#fff] rounded-[18px] pt-[36px] pr-[30px] pb-[36px] pl-[30px]"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[24px] mt-0 mr-0 mb-[14px] ml-0">
              Immediately After
            </h4>
            <p
              className={cn(
                "mb-4 text-[15px] leading-relaxed",
                "font-[var(--font-body)] text-[var(--color-text-secondary)]",
              )}
            >
              Depending on the peel and your skin, you may experience:
            </p>
            <ul
              className="m-0 pl-[20px] text-[var(--color-text-secondary)] text-[15px] leading-[1.5]"
              style={{ listStyle: "disc" }}
            >
              {[
                "temporary redness",
                "tightness",
                "dryness",
                "sensitivity",
                "visible flaking or peeling",
              ].map((i) => (
                <li key={i} className="mb-[6px]">
                  {i}
                </li>
              ))}
            </ul>
            <p
              className={cn(
                "mt-4 text-[15px] leading-relaxed",
                "font-[var(--font-body)] text-[var(--color-text-secondary)]",
              )}
            >
              Not everyone visibly peels.
            </p>
          </div>

          <div
            className="bg-[#fff] rounded-[18px] pt-[36px] pr-[30px] pb-[36px] pl-[30px]"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <h4 className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[24px] mt-0 mr-0 mb-[14px] ml-0">
              During Recovery
            </h4>
            <p
              className={cn(
                "mb-4 text-[15px] leading-relaxed",
                "font-[var(--font-body)] text-[var(--color-text-secondary)]",
              )}
            >
              Follow your personalized aftercare instructions carefully.
              Generally:
            </p>
            <ul
              className="m-0 pl-[20px] text-[var(--color-text-secondary)] text-[15px] leading-[1.5]"
              style={{ listStyle: "disc" }}
            >
              {[
                "treat the skin gently",
                "avoid picking or pulling peeling skin",
                "avoid unnecessary sun exposure",
                "use appropriate SPF",
                "avoid harsh exfoliating products until instructed",
                "keep the skin appropriately moisturized",
              ].map((i) => (
                <li key={i} className="mb-[6px]">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PcaFaq() {
  return (
    <FaqSection
      eyebrow="FREQUENTLY ASKED QUESTIONS"
      heading="Your PCA SKIN Chemical Peel Questions, Answered"
      subheading="Clear answers about professional peels, recovery, aftercare and whether a PCA SKIN peel may be suitable for your skin."
      categories={pcaPeelsFaqCategories}
    />
  );
}

function PcaFinalCta() {
  return (
    <CtaSection
      eyebrow="READY TO TAKE THE NEXT STEP?"
      heading={<>Let&apos;s Find the Right Peel for Your Skin</>}
      subheading="We'll assess your skin, discuss the concerns you'd like to improve and recommend the PCA SKIN treatment that best fits your needs."
      phone="(905) 920-7229"
      phoneLabel="Call or Text"
      benefits={[
        {
          icon: <User size={26} color="var(--olive-100)" />,
          title: "Personalized Selection",
          text: "The right peel for your skin",
        },
        {
          icon: <Shield size={26} color="var(--olive-100)" />,
          title: "Professional Treatment",
          text: "Performed in a controlled setting",
        },
        {
          icon: <Lightbulb size={26} color="var(--olive-100)" />,
          title: "Clear Aftercare",
          text: "Know what to expect after treatment",
        },
      ]}
    />
  );
}

export default function PcaPeelsPage() {
  return (
    <>
      <Header />
      <main>
        <PcaHero />
        <PcaConcerns />
        <PcaPeels />
        <PcaHowItWorks />
        <PcaAddOns />
        <PcaWhyProfessional />
        <PcaWhatToExpect />
        <PcaFaq />
        <ReviewsSection prioritizeService="peel" />
        <PcaFinalCta />
      </main>
    </>
  );
}
