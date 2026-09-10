"use client";

import * as React from "react";
import {
  Award,
  Beaker,
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

const usps = [
  {
    icon: ShieldCheck,
    title: "Sterile",
    text: "Medical-grade sterile ingredients prepared for safe application.",
  },
  {
    icon: Leaf,
    title: "No Preservatives",
    text: "100% preservative-free formulas that respect sensitive or treated skin.",
  },
  {
    icon: Zap,
    title: "Highly Potent",
    text: "Higher concentrations of active ingredients mixed fresh at application.",
  },
  {
    icon: Beaker,
    title: "Ready-to-Mix",
    text: "A unique system that activates the formula exactly when you need it.",
  },
];

const solutions = [
  {
    id: "hyaluronic-acid",
    icon: Droplets,
    title: "Sonicated Hyaluronic Acid",
    subtitle: "The hydrating foundation",
    image: "/assets/readymedical/RM-main-product-1024x405-1.jpg",
    description:
      "Our 100% preservative-free hyaluronic acid is mechanically fragmented into low, medium and high molecular weight by ultrasonic waves, without any chemicals.",
    results: [
      "Carries active ingredients into the skin",
      "Intensively hydrates",
      "Deactivates free radicals",
      "Reduces inflammation and irritation",
    ],
  },
  {
    id: "anti-aging",
    icon: Sparkles,
    title: "Anti-Aging Solution",
    subtitle: "HA + Growth Factors",
    image: "/assets/readymedical/ready-medical-antiaging.jpg",
    description:
      "Enriches the skin with therapeutic growth factors that promote wound healing, increase cell motility and stimulate dermal fibroblasts to regenerate collagen and elastin.",
    results: [
      "Stimulates collagen and elastin",
      "Hydrates the skin",
      "Reduces fine lines and wrinkles",
      "Promotes non-scarring wound healing",
      "Affordable alternative to blood extraction",
    ],
  },
  {
    id: "skin-healing",
    icon: Heart,
    title: "Skin Healing Solution",
    subtitle: "HA + Perfluorodecalin + Physalis Angulata",
    image: "/assets/readymedical/ready-medical-post-treatment.jpg",
    description:
      "Designed to accelerate the healing of damaged skin following aggressive treatments. The PFD + PA complex delivers powerful anti-inflammatory and immunomodulatory support.",
    results: [
      "Shortens treatment downtime",
      "Reduces inflammation and irritation",
      "Promotes non-scarring wound healing",
      "Improves immune response",
      "Repairs damaged proteins",
    ],
  },
  {
    id: "antioxidant",
    icon: Sun,
    title: "Antioxidant Solution",
    subtitle: "HA + Vitamin C",
    image: "/assets/readymedical/ready-medical-antioxidant.jpg",
    description:
      "Offers effective photo-protection and brightening benefits. The combination of hyaluronic acid with Vitamin C delivers strong antioxidant defence and anti-melanogenic properties.",
    results: [
      "Protects skin cells from photo-damage",
      "Brightens pigmented spots",
      "Boosts collagen synthesis",
      "Reduces inflammation",
      "Enriches skin with antioxidants",
    ],
  },
  {
    id: "acne",
    icon: Zap,
    title: "Acne Solution",
    subtitle: "HA + Acne Complex",
    image: "/assets/readymedical/ready-medical-acne.jpg",
    description:
      "Formulated to prevent the infestation of Propionibacterium acne bacteria and alleviate the irritation, inflammation and pigmentation associated with breakouts.",
    results: [
      "Inhibits propionibacterium acne growth",
      "Prevents breakouts and scarring",
      "Reduces irritation and inflammation",
      "Mattifies oily skin",
      "Lightens pigmented lesions",
    ],
  },
];

const whenToUse = [
  {
    id: "anti-aging-uses",
    title: "Anti-Aging Solution",
    uses: [
      "Radio-frequency",
      "Micro-needles",
      "Micro-needles with RF",
      "Peelings",
      "Alternative to blood extraction treatments",
    ],
  },
  {
    id: "skin-healing-uses",
    title: "Skin Healing Solution",
    uses: [
      "Intensive lasers and IPLs",
      "Ablative procedures",
      "Tattoo removal",
      "Strong chemical peels",
      "Directly on bleeding skin",
    ],
  },
  {
    id: "antioxidant-uses",
    title: "Antioxidant Solution",
    uses: [
      "Exfoliations",
      "Mesotherapy",
      "Radio-frequency",
      "Micro-needles",
      "Micro-needles with RF",
    ],
  },
  {
    id: "acne-uses",
    title: "Acne Solution",
    uses: [
      "Peelings",
      "Exfoliations",
      "Extractions",
      "Micro-needles",
      "Directly on active lesions",
    ],
  },
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
        <div className="w-full min-w-0 lg:max-w-[58%] lg:min-w-[320px]">
          <div className="flex items-center gap-[13px] mb-[31px]">
            <span
              className={cn(
                "text-[12px] font-bold uppercase tracking-[0.16em]",
                "font-[var(--font-body)] text-[var(--color-brand-primary)]",
              )}
            >
              MIX · HEAL · BOOST{" "}
              <span className="text-[var(--color-brand-deep)]">· NIAGARA</span>
            </span>
            <span className="w-[48px] h-[1px] bg-[var(--color-border-strong)]" />
          </div>

          <h1
            className={cn(
              "text-[34px] leading-[1.05] sm:text-[40px] lg:text-[76px] break-words",
              "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-0 mr-0 mb-[31px] ml-0",
            )}
          >
            ReadyMedical
            <br className="hidden md:inline" />
            <span
              className={cn(
                "italic",
                "text-[var(--olive-600)] font-[var(--font-display)]",
              )}
            >
              Healing Solutions
            </span>
          </h1>

          <p
            className={cn(
              "text-base leading-relaxed lg:text-[20px] lg:leading-[1.6]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[40px] ml-0",
            )}
          >
            The first professional line of ready-to-mix sterile products,
            specifically formulated to support and enhance the results of
            medical-aesthetic procedures and promote effective healing.
          </p>

          <div className={cn("flex flex-col gap-4 lg:flex-row", "mb-[31px]")}>
            <Button
              variant="primary"
              onClick={openConsultation}
              style={{ whiteSpace: "normal", maxWidth: "100%" }}
            >
              Book a Free Consultation &rarr;
            </Button>
            <Link href="#solutions" scroll>
              <Button
                variant="secondary"
                style={{ width: "100%", whiteSpace: "normal" }}
              >
                View ReadyMedical Solutions
              </Button>
            </Link>
          </div>

          <GoogleReviews rating="5.0" count="61+" />
        </div>
      </div>
    </section>
  );
}

function UspSection() {
  return (
    <section className="py-[70px] px-3 lg:px-[53px] bg-olive-50">
      <div className={containerMax}>
        <div className="text-center mb-[48px]">
          <SectionEyebrow>WHY READYMEDICAL</SectionEyebrow>
          <SectionHeading className="mt-3">
            Sterile. Potent. Purpose-Built.
          </SectionHeading>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className="flex flex-col items-start rounded-[16px] bg-white p-6"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <span
                  className="mb-4 flex h-[48px] w-[48px] items-center justify-center rounded-full text-[var(--color-brand-primary)]"
                  style={{ border: "1px solid var(--color-brand-primary)" }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3
                  className={cn(
                    "mb-2 text-[20px]",
                    "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]",
                  )}
                >
                  {usp.title}
                </h3>
                <p className="m-0 font-[var(--font-body)] text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
                  {usp.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-[70px] px-3 lg:px-[53px] bg-white">
      <div className={containerMax}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionEyebrow>HOW IT WORKS</SectionEyebrow>
            <SectionHeading className="mt-3 mb-6">
              Freshly Mixed at the Moment of Application
            </SectionHeading>
            <p className="mb-6 font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
              ReadyMedical features a unique mixing system that allows you to
              combine sterile hyaluronic acid with a complex of therapeutic
              ingredients of your choice, at the moment of application. This
              keeps every molecule stable, sterile and potent until it touches
              the skin.
            </p>
            <ul className="m-0 p-0" style={{ listStyle: "none" }}>
              {[
                "Ingredients remain stable and highly potent in the package",
                "Products contain higher concentrations of actives",
                "Every application is sterile and preservative-free",
                "Safe for any skin, including open wounds and bleeding areas",
              ].map((item) => (
                <li
                  key={item}
                  className="mb-3 flex items-start gap-3 font-[var(--font-body)] text-[15px] text-[var(--color-text-primary)]"
                >
                  <span className="mt-1 text-[var(--color-brand-primary)]">
                    <Check size={18} strokeWidth={2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                src: "/assets/readymedical/before.png",
                label: "1. Active + HA",
              },
              {
                src: "/assets/readymedical/during.png",
                label: "2. Mix",
              },
              {
                src: "/assets/readymedical/after.png",
                label: "3. Go",
              },
            ].map((step) => (
              <div
                key={step.label}
                className="rounded-[20px] bg-white p-4 text-center"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <img
                  src={step.src}
                  alt={step.label}
                  className="mx-auto mb-3 h-auto w-full max-w-[220px]"
                />
                <span className="font-[var(--font-body)] text-[14px] font-semibold text-[var(--color-text-primary)]">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="py-[90px] px-3 lg:px-[53px] bg-olive-50">
      <div className={containerMax}>
        <div className="mb-[56px] text-center">
          <SectionEyebrow>PERFECTING EVERY TREATMENT</SectionEyebrow>
          <SectionHeading className="mt-3 mb-4">
            Ready-to-Mix Sterile Healing Solutions
          </SectionHeading>
          <p className="mx-auto max-w-[620px] font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
            Five targeted formulas designed to boost results after aesthetic
            treatments and support faster, healthier-looking recovery.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.id}
                className="rounded-[20px] bg-white p-7"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="flex h-[44px] w-[44px] items-center justify-center rounded-full text-[var(--color-brand-primary)]"
                    style={{ border: "1px solid var(--color-brand-primary)" }}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3
                      className={cn(
                        "text-[20px] leading-[1.2]",
                        "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] m-0",
                      )}
                    >
                      {solution.title}
                    </h3>
                    <p className="m-0 font-[var(--font-body)] text-[13px] text-[var(--color-brand-primary)]">
                      {solution.subtitle}
                    </p>
                  </div>
                </div>
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="mb-5 w-full rounded-[12px] bg-white object-contain"
                />
                <p className="mb-5 font-[var(--font-body)] text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
                  {solution.description}
                </p>
                <p className="mb-2 font-[var(--font-body)] text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--color-text-primary)]">
                  Boosted Results
                </p>
                <ul className="m-0 p-0" style={{ listStyle: "none" }}>
                  {solution.results.map((result) => (
                    <li
                      key={result}
                      className="mb-2 flex items-start gap-2 font-[var(--font-body)] text-[14px] text-[var(--color-text-secondary)]"
                    >
                      <span className="mt-1 text-[var(--color-brand-primary)]">
                        <Check size={14} strokeWidth={2.5} />
                      </span>
                      {result}
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

function WhenToUse() {
  return (
    <section className="py-[90px] px-3 lg:px-[53px] bg-white">
      <div className={containerMax}>
        <div className="mb-[56px] text-center">
          <SectionEyebrow>WHEN TO USE READYMEDICAL</SectionEyebrow>
          <SectionHeading className="mt-3 mb-4">
            The Right Solution After Every Treatment
          </SectionHeading>
          <p className="mx-auto max-w-[620px] font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
            Use immediately after lasers, IPLs, radio-frequency, micro-needling
            and virtually any clinic treatment — or at home between sessions to
            reduce downtime and improve results.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {whenToUse.map((group) => (
            <div
              key={group.id}
              className="rounded-[20px] bg-olive-100 p-7"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <h3
                className={cn(
                  "mb-4 text-[22px]",
                  "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]",
                )}
              >
                {group.title}
              </h3>
              <ul className="m-0 p-0" style={{ listStyle: "none" }}>
                {group.uses.map((use) => (
                  <li
                    key={use}
                    className="mb-2 flex items-start gap-3 font-[var(--font-body)] text-[15px] text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-1 text-[var(--color-brand-primary)]">
                      <Check size={16} strokeWidth={2.5} />
                    </span>
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  const resultImages = [
    {
      src: "/assets/readymedical/ba-eyebrows.jpg",
      alt: "ReadyMedical before and after result on eyebrows",
    },
    {
      src: "/assets/readymedical/ba-eyes.jpg",
      alt: "ReadyMedical before and after result around eyes",
    },
    {
      src: "/assets/readymedical/ba-hands.jpg",
      alt: "ReadyMedical before and after result on hands",
    },
    {
      src: "/assets/readymedical/ba-mouth.jpg",
      alt: "ReadyMedical before and after result around mouth",
    },
  ];

  return (
    <section className="py-[90px] px-3 lg:px-[53px] bg-olive-50">
      <div className={containerMax}>
        <div className="mb-[56px] text-center">
          <SectionEyebrow>REAL RESULTS</SectionEyebrow>
          <SectionHeading className="mt-3 mb-4">
            See the Results for Yourself
          </SectionHeading>
          <p className="mx-auto max-w-[620px] font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
            Before-and-after images from clients whose healing and results were
            supported by ReadyMedical.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {resultImages.map((image, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[16px] bg-white border border-[var(--color-border)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScienceSection() {
  return (
    <section className="py-[90px] px-3 lg:px-[53px] bg-olive-50">
      <div className={containerMax}>
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-4 flex justify-center">
            <span
              className="flex h-[64px] w-[64px] items-center justify-center rounded-full text-[var(--color-brand-primary)]"
              style={{ border: "1px solid var(--color-brand-primary)" }}
            >
              <Award size={28} strokeWidth={1.5} />
            </span>
          </div>
          <SectionEyebrow>THE SCIENCE BEHIND READYMEDICAL</SectionEyebrow>
          <SectionHeading className="mt-3 mb-4">
            Clinically Tested. Proven Results.
          </SectionHeading>
          <p className="font-[var(--font-body)] text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">
            The efficacy of all ReadyMedical products has been proven by
            clinical tests performed by an impartial laboratory at the
            University of Pavia, Italy. The results demonstrate how the active
            ingredients perform at different stages of the healing process
            compared to untreated control samples — giving you confidence in
            every application.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ReadyMedicalPage() {
  return (
    <>
      <Header />
      <Hero />
      <UspSection />
      <SolutionsSection />
      <WhenToUse />
      <ResultsSection />
      <CtaSection
        eyebrow="BOOST YOUR TREATMENT RESULTS"
        heading={
          <>
            Ready to Enhance
            <br className="hidden md:inline" /> Your Aesthetic Results?
          </>
        }
        subheading="Book a complimentary consultation at Smooth Skin Niagara and discover which ReadyMedical solution is right for your treatments."
        buttonText="Book a Free Consultation"
        variant="light"
      />
    </>
  );
}
