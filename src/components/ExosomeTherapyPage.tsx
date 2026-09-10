"use client";

import * as React from "react";
import {
  Check,
  Droplets,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import { CtaSection } from "@/components/CtaSection";
import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";
import type { GoogleReviewsProps } from "@/components/design-system/trust/GoogleReviews";
import { useConsultation } from "@/components/ConsultationModal";
import ExosomeIngredientsSection from "@/components/ExosomeIngredientsSection";
import { cn } from "@/lib/utils";

const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;
const GoogleReviews = (
  GoogleReviewsModule as unknown as {
    GoogleReviews: React.FC<GoogleReviewsProps>;
  }
).GoogleReviews;

const containerMax = "max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto";

const eyebrowStyle =
  "font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)]";

const displayHeadingStyle =
  "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <span className={cn("block", eyebrowStyle)}>{children}</span>;
}

function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-[32px] leading-[1.1] lg:text-[42px]",
        displayHeadingStyle,
        className,
      )}
    >
      {children}
    </h2>
  );
}

const benefitCards = [
  {
    title: "Youthful Radiance",
    icon: Sparkles,
    items: ["Nourishing", "Hydrating", "Volumizing"],
  },
  {
    title: "Anti-Aging Renewal",
    icon: Sun,
    items: ["Energizing", "Rejuvenating", "Illuminating"],
  },
];

const supportedTreatments = [
  "Microneedling",
  "RF Microneedling",
  "Chemical Peels",
  "Sonoporation",
  "Exfoliation",
  "IPL Photorejuvenation",
  "Dermabrasion",
  "Laser Resurfacing",
  "Electroporation",
  "LED Phototherapy",
];

function Hero() {
  const { open: openConsultation } = useConsultation();
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b-2 border-[#bfae97] bg-olive-100",
        "min-h-0 lg:min-h-[820px] pt-[80px] px-3 pb-[70px] lg:px-7",
      )}
    >
      <div
        className={cn(
          "relative z-10 mx-auto w-full",
          "max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto",
        )}
      >
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="w-full min-w-0 lg:max-w-[55%]">
            <div className="flex items-center gap-[13px] mb-[31px]">
              <span
                className={cn(
                  "text-[12px] font-bold uppercase tracking-[0.16em]",
                  "font-[var(--font-body)] text-[var(--color-brand-primary)]",
                )}
              >
                ADVANCED SKINCARE SCIENCE{" "}
                <span className="text-[var(--color-brand-deep)]">
                  · NIAGARA
                </span>
              </span>
              <span className="w-[48px] h-[1px] bg-[var(--color-border-strong)]" />
            </div>

            <h1
              className={cn(
                "text-[44px] leading-[1.05] lg:text-[76px]",
                "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-0 mr-0 mb-[31px] ml-0",
              )}
            >
              Exosome
              <br className="hidden md:inline" />
              <span
                className={cn(
                  "italic",
                  "text-[var(--olive-600)] font-[var(--font-display)]",
                )}
              >
                Therapy
              </span>
            </h1>

            <p
              className={cn(
                "text-base leading-relaxed lg:text-[20px] lg:leading-[1.6]",
                "font-[var(--font-body)] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[40px] ml-0",
              )}
            >
              Unlock the full potential of your skincare investment. Exosomes
              support the skin&apos;s natural renewal processes, helping to
              restore visible firmness, hydration and overall vitality.
            </p>

            <div className={cn("flex flex-col gap-4 lg:flex-row", "mb-[31px]")}>
              <Button
                variant="primary"
                onClick={openConsultation}
                style={{ whiteSpace: "normal", maxWidth: "100%" }}
              >
                Book a Free Consultation &rarr;
              </Button>
              <Link href="#benefits" scroll>
                <Button
                  variant="secondary"
                  style={{ width: "100%", whiteSpace: "normal" }}
                >
                  View Benefits
                </Button>
              </Link>
            </div>

            <GoogleReviews rating="5.0" count="61+" />
          </div>

          <div className="hidden w-full justify-center lg:flex lg:w-[45%]">
            <div className="flex items-end justify-center gap-4">
              <img
                src="/assets/exosomes/bioreg-exosome.webp"
                alt="BIOREG Exosome serum vial"
                className="h-auto max-h-[420px] w-auto object-contain"
              />
              <img
                src="/assets/exosomes/ExosomesHA_Transparent-1.webp"
                alt="BIOREG Exosome + HA topical serum vial"
                className="h-auto max-h-[420px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section id="benefits" className="py-[90px] px-3 lg:px-[53px] bg-olive-50">
      <div className={containerMax}>
        <div className="mb-[56px] text-center">
          <SectionEyebrow>BENEFITS</SectionEyebrow>
          <SectionHeading className="mt-3 mb-4">
            Radiance, Renewal and Visible Results
          </SectionHeading>
          <p className="mx-auto max-w-[620px] font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
            Exosome therapy is designed to nourish and rejuvenate the skin,
            supporting a brighter, smoother and more youthful-looking
            complexion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {benefitCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-[20px] bg-white p-8"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="flex h-[48px] w-[48px] items-center justify-center rounded-full text-[var(--color-brand-primary)]"
                    style={{ border: "1px solid var(--color-brand-primary)" }}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3
                    className={cn(
                      "text-[22px]",
                      "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] m-0",
                    )}
                  >
                    {card.title}
                  </h3>
                </div>
                <ul className="m-0 p-0" style={{ listStyle: "none" }}>
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="mb-3 flex items-start gap-3 font-[var(--font-body)] text-[16px] text-[var(--color-text-secondary)]"
                    >
                      <span className="mt-1 text-[var(--color-brand-primary)]">
                        <Check size={18} strokeWidth={2} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TreatmentAftercare() {
  return (
    <section className="py-[90px] px-3 lg:px-[53px] bg-white">
      <div className={containerMax}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div
            className="order-2 rounded-[20px] bg-olive-50 p-6 lg:order-1"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <img
              src="/assets/exosomes/MSC_Exosomes_Edited3.webp"
              alt="Exosome serum being applied during a professional aesthetic treatment"
              className="h-auto w-full rounded-[12px]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionEyebrow>REVOLUTIONIZING AFTERCARE</SectionEyebrow>
            <SectionHeading className="mt-3 mb-6">
              The Perfect Complement to Professional Treatments
            </SectionHeading>
            <p className="mb-6 font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
              Our sterile exosome solutions are designed to support and enhance
              a wide range of aesthetic procedures. Applied topically after
              treatment, the serum absorbs quickly to help activate the skin for
              visible hydration, tone and texture improvement.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {supportedTreatments.map((treatment) => (
                <div
                  key={treatment}
                  className="flex items-center gap-3 font-[var(--font-body)] text-[15px] text-[var(--color-text-primary)]"
                >
                  <span className="text-[var(--color-brand-primary)]">
                    <Check size={18} strokeWidth={2} />
                  </span>
                  {treatment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section className="py-[90px] px-3 lg:px-[53px] bg-olive-50">
      <div className={containerMax}>
        <div className="mb-[56px] text-center">
          <SectionEyebrow>MY SKIN CHEMISTRY</SectionEyebrow>
          <SectionHeading className="mt-3 mb-4">
            Sterile Exosome Serums
          </SectionHeading>
          <p className="mx-auto max-w-[620px] font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
            Professional-grade exosome solutions, developed to work beautifully
            on their own or as part of your favourite in-clinic treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              src: "/assets/exosomes/bioreg-exosome.webp",
              title: "BIOREG Exosome",
              text: "A potent exosome serum designed to support skin renewal and rejuvenation.",
            },
            {
              src: "/assets/exosomes/ExosomesHA_Transparent-1.webp",
              title: "BIOREG Exosome + HA",
              text: "Exosomes combined with hyaluronic acid for deep hydration and visible plumping.",
            },
            {
              src: "/assets/exosomes/MSC_Exosomes_Ingredients-copy.webp",
              title: "Multi-Active Complex",
              text: "Nourishing, volumizing, hydrating, plumping, energizing and rejuvenating actives.",
            },
          ].map((product) => (
            <div
              key={product.title}
              className="rounded-[20px] bg-white p-6 text-center"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <img
                src={product.src}
                alt={product.title}
                className="mx-auto mb-5 h-auto max-h-[260px] w-full object-contain"
              />
              <h3
                className={cn(
                  "mb-2 text-[20px]",
                  "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]",
                )}
              >
                {product.title}
              </h3>
              <p className="m-0 font-[var(--font-body)] text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
                {product.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ExosomeTherapyPage() {
  return (
    <>
      <Header />
      <Hero />
      <ExosomeIngredientsSection />
      <BenefitsSection />
      <TreatmentAftercare />
      <ProductShowcase />
      <CtaSection
        eyebrow="ELEVATE YOUR SKINCARE RESULTS"
        heading={
          <>
            Ready to Experience
            <br className="hidden md:inline" /> Exosome Therapy?
          </>
        }
        subheading="Book a complimentary consultation at Smooth Skin Niagara and learn how exosome therapy can amplify your skin’s natural renewal."
        buttonText="Book a Free Consultation"
        variant="light"
      />
    </>
  );
}
