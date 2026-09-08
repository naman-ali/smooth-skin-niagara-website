"use client";

import {
  ArrowRight,
  Award,
  Heart,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  User,
} from "lucide-react";
import { HomeTreatmentDiscovery } from "./HomeTreatmentDiscovery";
import Link from "next/link";
import * as React from "react";
import Header from "@/components/Header";
import { AshleySection } from "@/components/AshleySection";
import { CtaSection } from "@/components/CtaSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";
import type { GoogleReviewsProps } from "@/components/design-system/trust/GoogleReviews";

const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;
const GoogleReviews = (
  GoogleReviewsModule as unknown as {
    GoogleReviews: React.FC<GoogleReviewsProps>;
  }
).GoogleReviews;

const containerMax = { maxWidth: "var(--container-max)", margin: "0 auto" };
const displayHeadingStyle = {
  fontFamily: "var(--font-display)",
  fontWeight: 400,
  color: "var(--color-text-primary)",
};
const bodyTextStyle = {
  fontFamily: "var(--font-body)",
  color: "var(--color-text-secondary)",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 12,
        letterSpacing: "0.16em",
        textTransform: "uppercase" as const,
        color: "var(--color-brand-primary)",
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  );
}

function HomeHero() {
  const trustPoints = [
    {
      icon: Award,
      title: "10+ Years Experience",
      sub: "Trusted care in aesthetic skincare",
    },
    {
      icon: Sparkles,
      title: "Advanced Professional Technology",
      sub: "Proven systems. Real results.",
    },
    {
      icon: User,
      title: "Personalized Treatment Plans",
      sub: "Tailored to your skin and goals",
    },
    {
      icon: MapPin,
      title: "Niagara Falls, Ontario",
      sub: "Your local skincare destination",
    },
  ];

  return (
    <section
      className="relative min-h-[760px] overflow-hidden lg:min-h-[840px]"
      style={{
        backgroundImage: "url(/assets/home-hero-2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "70% center",
      }}
    >
      <div
        className="pointer-events-none absolute bottom-44 left-6 z-20 hidden lg:block"
        style={{
          fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
          fontSize: 28,
          color: "var(--olive-600)",
          lineHeight: 1.2,
          opacity: 0.85,
          transform: "rotate(-4deg)",
        }}
      >
        More confident.
        <br />
        More you.
      </div>

      <div
        className="relative z-10 flex min-h-[760px] flex-col px-6 lg:min-h-[840px] lg:px-12"
        style={{ paddingTop: 60, paddingBottom: 40 }}
      >
        <div
          className="flex flex-1 items-center justify-center"
          style={{ paddingBottom: 120 }}
        >
          <div
            className="w-full max-w-[720px] text-center lg:-translate-x-[8%]"
            style={{ maxWidth: 720 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                marginBottom: 28,
              }}
            >
              <Eyebrow>SMOOTH SKIN NIAGARA</Eyebrow>
              <span
                style={{
                  width: 64,
                  height: 1,
                  background: "var(--olive-600)",
                  opacity: 0.4,
                }}
              />
            </div>

            <h1
              className="text-[46px] leading-[1.02] md:text-[62px] lg:text-[68px]"
              style={{
                ...displayHeadingStyle,
                margin: "0 0 28px",
              }}
            >
              Feel Good in Your Skin.
              <br />
              <span
                className="italic"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--olive-600)",
                }}
              >
                At Every Stage.
              </span>
            </h1>

            <p
              className="mx-auto text-[17px] leading-relaxed lg:text-[19px]"
              style={{ ...bodyTextStyle, margin: "0 0 36px", maxWidth: 620 }}
            >
              Advanced skincare, laser and beauty treatments thoughtfully
              selected around your skin, your goals and the way you want to
              feel.
            </p>

            <div
              className="mx-auto flex flex-col items-center gap-3 lg:flex-row lg:justify-center"
              style={{ marginBottom: 28 }}
            >
              <Link href="#services" style={{ textDecoration: "none" }}>
                <Button
                  variant="primary"
                  icon={<ArrowRight size={18} />}
                  style={{
                    width: "min(100%, 360px)",
                    height: 60,
                    background: "var(--olive-600)",
                    color: "#fff",
                    borderColor: "var(--olive-600)",
                  }}
                >
                  Find Your Treatment
                </Button>
              </Link>
              <Link
                href="/laser-hair-removal"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="secondary"
                  style={{
                    width: "min(100%, 360px)",
                    height: 54,
                    background: "rgba(251, 250, 247, 0.65)",
                    color: "var(--olive-700)",
                    borderColor: "var(--olive-600)",
                    borderWidth: 1,
                  }}
                >
                  Book a Free Consultation
                </Button>
              </Link>
            </div>

            <div className="flex justify-center">
              <GoogleReviews rating="5.0" count="61+" />
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full" style={{ marginBottom: 16 }}>
          <p
            className="text-center text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--olive-700)",
              opacity: 0.85,
            }}
          >
            SKIN · CONFIDENCE · CARE
          </p>
        </div>

        <div
          className="w-full border border-[rgba(191,174,151,0.35)] bg-[rgba(251,250,247,0.86)]"
          style={{ borderRadius: 14 }}
        >
          <div className="grid grid-cols-2 gap-y-6 divide-y divide-olive-300 py-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-y-0">
            {trustPoints.map((point, i) => (
              <div
                key={point.title}
                className={`flex flex-col items-center justify-center px-4 text-center lg:px-6 ${
                  i === trustPoints.length - 1 ? "lg:border-r-0" : ""
                }`}
              >
                <point.icon
                  size={22}
                  strokeWidth={1.5}
                  color="var(--olive-600)"
                  style={{ marginBottom: 10 }}
                />
                <h4
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    margin: "0 0 4px",
                    lineHeight: 1.25,
                  }}
                >
                  {point.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    color: "var(--color-text-secondary)",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {point.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeServices() {
  return <HomeTreatmentDiscovery />;
}

function HomeWhy() {
  return (
    <section id="why" className="bg-olive-50" style={{ padding: "90px 53px" }}>
      <div style={containerMax}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>WHY SMOOTH SKIN NIAGARA</Eyebrow>
            <h2
              className="text-[36px] leading-[1.1] lg:text-[44px]"
              style={{ ...displayHeadingStyle, margin: "22px 0 20px" }}
            >
              A Personal Approach to Aesthetic Care
            </h2>
            <p
              className="mb-8 text-[17px] leading-relaxed"
              style={{ ...bodyTextStyle }}
            >
              Every client is assessed individually. Ashley selects the right
              treatment, strength and plan for your skin and goals — without
              one-size-fits-all promises.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  icon: User,
                  title: "One-on-One Care",
                  text: "Ashley performs treatments personally and takes time to understand your goals.",
                },
                {
                  icon: Shield,
                  title: "Thoughtful Selection",
                  text: "Treatments are chosen based on your skin, health and desired outcome.",
                },
                {
                  icon: Heart,
                  title: "Comfort First",
                  text: "A calm, professional environment where you can ask questions and feel at ease.",
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
                      fontSize: 20,
                      margin: "0 0 8px",
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
          <div className="relative rounded-2xl border border-[var(--color-border)] bg-olive-100 p-10">
            <img
              src="/assets/ashley-section-bg-4.png"
              alt="Smooth Skin Niagara treatment environment"
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-2xl object-cover opacity-40"
            />
            <div className="relative z-10">
              <h3
                className="mb-4 text-[26px]"
                style={{ ...displayHeadingStyle }}
              >
                Ready to Get Started?
              </h3>
              <p
                className="mb-6 text-[16px] leading-relaxed"
                style={{ ...bodyTextStyle }}
              >
                Call or text the studio to ask questions or book your first
                appointment.
              </p>
              <a
                href="tel:+19059207229"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "var(--font-body)",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                }}
              >
                <Phone size={20} color="var(--color-brand-primary)" />
                (905) 920-7229
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <HomeServices />
        <AshleySection />
        <ReviewsSection />
        <HomeWhy />
        <CtaSection />
      </main>
    </>
  );
}
