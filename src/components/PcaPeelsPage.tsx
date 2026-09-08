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

function PcaHero() {
  return (
    <section
      className="relative overflow-hidden border-b-2 border-[#bfae97] bg-olive-50"
      style={{ minHeight: 760, padding: "80px 28px 70px" }}
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat lg:bg-right lg:[background-size:auto_100%]"
        style={{ backgroundImage: "url(/assets/skin-peels-hero.jpg)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, var(--olive-50) 0%, rgba(245,242,235,0.92) 38%, rgba(245,242,235,0) 70%)",
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
              PROFESSIONAL PCA SKIN PEELS{" "}
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
            Reveal Brighter,
            <br />
            <span
              className="italic"
              style={{
                color: "var(--olive-600)",
                fontFamily: "var(--font-display)",
              }}
            >
              Smoother-Looking Skin.
            </span>
          </h1>

          <p
            className="text-base leading-relaxed lg:text-[20px] lg:leading-[1.6]"
            style={{ ...bodyTextStyle, margin: "0 0 40px" }}
          >
            Professional PCA SKIN chemical peels are customized to your skin and
            concerns, helping exfoliate surface buildup and improve the
            appearance of uneven texture, dullness, breakouts and visible signs
            of aging.
          </p>

          <div
            className="flex flex-col gap-4 lg:flex-row"
            style={{ marginBottom: 31 }}
          >
            <Button variant="primary">Book Your Skin Peel →</Button>
            <Link href="#peel-options">
              <Button variant="secondary" style={{ width: "100%" }}>
                View Peel Options
              </Button>
            </Link>
          </div>

          <GoogleReviews rating="5.0" count="61+" />

          <div
            className="mt-12 flex flex-wrap items-stretch gap-8"
            style={{ marginTop: 48 }}
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
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  maxWidth: 260,
                }}
              >
                <Check
                  size={22}
                  strokeWidth={1.5}
                  color="var(--color-brand-primary)"
                  style={{ flexShrink: 0, marginTop: 3 }}
                />
                <div>
                  <strong
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {item.title}
                  </strong>
                  <p
                    style={{
                      ...bodyTextStyle,
                      fontSize: 13,
                      margin: "4px 0 0",
                    }}
                  >
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
      className={`${sectionPadding} bg-olive-50`}
      style={{ paddingTop: 90, paddingBottom: 90 }}
    >
      <div style={containerMax}>
        <div className="mb-14 text-center">
          <SectionEyebrow>PERSONALIZED SKIN RENEWAL</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Target the Concerns You See in the Mirror
          </SectionHeading>
          <p
            className="mx-auto max-w-[700px] text-base lg:text-[17px]"
            style={{ ...bodyTextStyle, lineHeight: 1.6 }}
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
              style={{
                background: "#fff",
                border: "1px solid var(--color-border)",
                borderRadius: 18,
                padding: "30px",
              }}
            >
              <item.icon
                size={28}
                strokeWidth={1.5}
                color="var(--color-brand-primary)"
                style={{ marginBottom: 16 }}
              />
              <h4
                style={{
                  ...displayHeadingStyle,
                  fontSize: 22,
                  margin: "0 0 8px",
                }}
              >
                {item.title}
              </h4>
              <p
                className="text-[15px] leading-relaxed"
                style={{ ...bodyTextStyle }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-10 text-center text-[15px]"
          style={{ ...bodyTextStyle }}
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
  return (
    <section
      id="peel-options"
      className={`${sectionPadding} bg-olive-100`}
      style={{ paddingTop: 90, paddingBottom: 90 }}
    >
      <div style={containerMax}>
        <div className="mb-14 text-center">
          <SectionEyebrow>TREATMENT OPTIONS</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Find the Peel That Fits Your Skin
          </SectionHeading>
          <p
            className="mx-auto max-w-[720px] text-base lg:text-[17px]"
            style={{ ...bodyTextStyle, lineHeight: 1.6 }}
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
                {peel.tag}
              </span>
              <h3
                style={{
                  ...displayHeadingStyle,
                  fontSize: 28,
                  margin: "0 0 6px",
                }}
              >
                {peel.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  margin: "0 0 10px",
                }}
              >
                {peel.for}
              </p>
              <p
                className="text-[15px] leading-relaxed"
                style={{ ...bodyTextStyle, marginBottom: 14 }}
              >
                {peel.text}
              </p>
              <div className="flex flex-wrap gap-2">
                {peel.bestFor.map((chip) => (
                  <span
                    key={chip}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--olive-700)",
                      background: "var(--olive-100)",
                      border: "1px solid var(--color-border)",
                      padding: "5px 8px",
                      borderRadius: 999,
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              {peel.note && (
                <p
                  className="mt-4 text-[13px] leading-relaxed"
                  style={{ ...bodyTextStyle }}
                >
                  {peel.note}
                </p>
              )}
              <div
                className="mt-5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 34,
                  fontWeight: 500,
                  color: "var(--color-text-primary)",
                  marginTop: "auto",
                }}
              >
                {peel.price}
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
            Not sure which peel to book?
          </h4>
          <p
            className="mb-8 text-[17px]"
            style={{ ...bodyTextStyle, lineHeight: 1.6 }}
          >
            That&apos;s completely fine. We&apos;ll assess your skin and
            recommend the most suitable PCA SKIN treatment at your appointment.
          </p>
          <Button variant="primary">Book Your Skin Peel →</Button>
        </div>
      </div>
    </section>
  );
}

function PcaHowItWorks() {
  return (
    <section
      className={`${sectionPadding} bg-olive-50`}
      style={{ paddingTop: 90, paddingBottom: 90 }}
    >
      <div style={containerMax}>
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

        <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-olive-100 p-8 text-center">
          <h4
            style={{
              ...displayHeadingStyle,
              fontSize: 22,
              margin: "0 0 10px",
            }}
          >
            You Don&apos;t Have to Visibly Peel for a Peel to Work
          </h4>
          <p
            className="text-base"
            style={{ ...bodyTextStyle, lineHeight: 1.6, margin: 0 }}
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
      className={`${sectionPadding} bg-olive-100`}
      style={{ paddingTop: 90, paddingBottom: 90 }}
    >
      <div style={containerMax}>
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
              style={{
                padding: "26px 28px",
                borderBottom:
                  i < arr.length - 1
                    ? "1px solid var(--color-border)"
                    : undefined,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <h4
                  style={{
                    ...displayHeadingStyle,
                    fontSize: 20,
                    margin: 0,
                  }}
                >
                  {item.name}
                </h4>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "var(--color-brand-primary)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.price}
                </span>
              </div>
              <p
                style={{
                  ...bodyTextStyle,
                  fontSize: 14,
                  margin: 0,
                }}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-6 text-center text-[13px]"
          style={{ ...bodyTextStyle }}
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
      className={`${sectionPadding} bg-olive-50`}
      style={{ paddingTop: 90, paddingBottom: 90 }}
    >
      <div style={containerMax}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src="/assets/hero-treatment.png"
              alt="Professional PCA SKIN chemical peel treatment"
              loading="lazy"
              className="w-full object-cover"
              style={{
                borderRadius: 18,
                border: "1px solid var(--color-border)",
                aspectRatio: "4 / 3",
              }}
            />
          </div>

          <div>
            <SectionEyebrow>PROFESSIONAL SKINCARE</SectionEyebrow>
            <SectionHeading style={{ margin: "22px 0 20px" }}>
              Your Peel Should Fit Your Skin — Not the Other Way Around.
            </SectionHeading>
            <p
              className="mb-8 text-[17px] leading-relaxed"
              style={{ ...bodyTextStyle }}
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
                    style={{ marginBottom: 12 }}
                  />
                  <h4
                    style={{
                      ...displayHeadingStyle,
                      fontSize: 19,
                      margin: "0 0 6px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ ...bodyTextStyle }}
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
      className={`${sectionPadding} bg-olive-100`}
      style={{ paddingTop: 90, paddingBottom: 90 }}
    >
      <div style={containerMax}>
        <div className="mb-14 text-center">
          <SectionEyebrow>BEFORE + AFTER</SectionEyebrow>
          <SectionHeading style={{ margin: "22px 0 16px" }}>
            Know What to Expect From Your Peel
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--color-border)",
              borderRadius: 18,
              padding: "36px 30px",
            }}
          >
            <h4
              style={{
                ...displayHeadingStyle,
                fontSize: 24,
                margin: "0 0 14px",
              }}
            >
              Before Your Appointment
            </h4>
            <p
              className="mb-4 text-[15px] leading-relaxed"
              style={{ ...bodyTextStyle }}
            >
              Let us know about:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
                fontSize: 15,
                lineHeight: 1.5,
              }}
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
                <li key={i} style={{ marginBottom: 6 }}>
                  {i}
                </li>
              ))}
            </ul>
            <p
              className="mt-4 text-[15px] leading-relaxed"
              style={{ ...bodyTextStyle }}
            >
              Your skincare routine may need to be adjusted before treatment.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid var(--color-border)",
              borderRadius: 18,
              padding: "36px 30px",
            }}
          >
            <h4
              style={{
                ...displayHeadingStyle,
                fontSize: 24,
                margin: "0 0 14px",
              }}
            >
              Immediately After
            </h4>
            <p
              className="mb-4 text-[15px] leading-relaxed"
              style={{ ...bodyTextStyle }}
            >
              Depending on the peel and your skin, you may experience:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
                fontSize: 15,
                lineHeight: 1.5,
              }}
            >
              {[
                "temporary redness",
                "tightness",
                "dryness",
                "sensitivity",
                "visible flaking or peeling",
              ].map((i) => (
                <li key={i} style={{ marginBottom: 6 }}>
                  {i}
                </li>
              ))}
            </ul>
            <p
              className="mt-4 text-[15px] leading-relaxed"
              style={{ ...bodyTextStyle }}
            >
              Not everyone visibly peels.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              border: "1px solid var(--color-border)",
              borderRadius: 18,
              padding: "36px 30px",
            }}
          >
            <h4
              style={{
                ...displayHeadingStyle,
                fontSize: 24,
                margin: "0 0 14px",
              }}
            >
              During Recovery
            </h4>
            <p
              className="mb-4 text-[15px] leading-relaxed"
              style={{ ...bodyTextStyle }}
            >
              Follow your personalized aftercare instructions carefully.
              Generally:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
                fontSize: 15,
                lineHeight: 1.5,
              }}
            >
              {[
                "treat the skin gently",
                "avoid picking or pulling peeling skin",
                "avoid unnecessary sun exposure",
                "use appropriate SPF",
                "avoid harsh exfoliating products until instructed",
                "keep the skin appropriately moisturized",
              ].map((i) => (
                <li key={i} style={{ marginBottom: 6 }}>
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
      buttonText="Book Your Skin Peel"
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
        <PcaFinalCta />
      </main>
    </>
  );
}
