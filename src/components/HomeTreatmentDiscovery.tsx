"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ArrowRight, Heart, Shield, Sparkles, User } from "lucide-react";
import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import { cn } from "@/lib/utils";

const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;

const containerMax = "max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto";

const displayHeadingStyle =
  "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]";

const bodyTextStyle =
  "font-[var(--font-body)] text-[var(--color-text-secondary)]";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-[var(--font-body)] text-[12px] tracking-[0.16em] uppercase text-[var(--olive-600)] font-bold">
      {children}
    </span>
  );
}

interface Treatment {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  size: "large" | "small";
  objectPosition: string;
  linkText: string;
}

const treatments: Treatment[] = [
  {
    id: "laser",
    eyebrow: "LASER",
    title: "Laser Hair Removal",
    description:
      "Long-term hair reduction for face and body using Soprano ICE Platinum.",
    href: "/laser-hair-removal",
    image: "/assets/laser.jpg",
    alt: "Laser hair removal treatment on a client's leg",
    size: "large",
    objectPosition: "center",
    linkText: "Explore Laser Hair Removal",
  },
  {
    id: "microneedling",
    eyebrow: "SKIN RENEWAL",
    title: "Microneedling",
    description:
      "Support smoother-looking texture, fine lines and overall skin renewal with eDermaStamp.",
    href: "/edermastamp-microneedling",
    image: "/assets/microneedling.jpg",
    alt: "Professional microneedling facial treatment",
    size: "small",
    objectPosition: "75% center",
    linkText: "Explore Microneedling",
  },
  {
    id: "pca",
    eyebrow: "PROFESSIONAL PEELS",
    title: "PCA SKIN Peels",
    description:
      "Professional chemical peels selected around your skin type and concerns.",
    href: "/cosmetic-grade-pca-skin-peels",
    image: "/assets/pca.jpg",
    alt: "Professional chemical peel being applied to a client's face",
    size: "small",
    objectPosition: "75% center",
    linkText: "Explore PCA SKIN Peels",
  },
  {
    id: "celluma",
    eyebrow: "LED THERAPY",
    title: "Celluma LED Light Therapy",
    description:
      "Relaxing LED light therapy for skin-focused and wellness treatment goals.",
    href: "/celluma-led-light-therapy",
    image: "/assets/celluma.jpg",
    alt: "Client receiving Celluma LED light therapy",
    size: "small",
    objectPosition: "70% center",
    linkText: "Explore Celluma",
  },
  {
    id: "eyelash",
    eyebrow: "LASHES",
    title: "Eyelash Extensions",
    description:
      "Custom lash sets designed around your eye shape, natural lashes and preferred style.",
    href: "/eyelash-extensions",
    image: "/assets/eyelash.jpg",
    alt: "Close-up of custom eyelash extensions",
    size: "small",
    objectPosition: "center 25%",
    linkText: "Explore Eyelash Extensions",
  },
  {
    id: "oxygeneo",
    eyebrow: "ADVANCED FACIAL",
    title: "OxyGeneo 3-in-1 Facial",
    description:
      "Exfoliate, oxygenate and infuse in one personalized facial experience.",
    href: "/oxygeneo-3-1-super-facial",
    image: "/assets/oxygenero.jpg",
    alt: "Client receiving an OxyGeneo facial treatment",
    size: "large",
    objectPosition: "center",
    linkText: "Explore OxyGeneo",
  },
];

function gridClasses(index: number) {
  switch (index) {
    case 0:
      return "lg:col-start-1 lg:row-start-1 lg:row-span-2";
    case 1:
      return "lg:col-start-2 lg:row-start-1";
    case 2:
      return "lg:col-start-2 lg:row-start-2";
    case 3:
      return "lg:col-start-2 lg:row-start-3";
    case 4:
      return "lg:col-start-2 lg:row-start-4";
    case 5:
      return "lg:col-start-1 lg:row-start-3 lg:row-span-2";
    default:
      return "";
  }
}

function TreatmentCard({
  treatment,
  index,
}: {
  treatment: Treatment;
  index: number;
}) {
  const horizontalGradient =
    "linear-gradient(90deg, rgba(248,245,237,.98) 0%, rgba(248,245,237,.92) 35%, rgba(248,245,237,.55) 58%, rgba(248,245,237,.10) 78%, transparent 100%)";
  const gradient =
    treatment.size === "large"
      ? "linear-gradient(0deg, rgba(248,245,237,.98) 0%, rgba(248,245,237,.90) 32%, rgba(248,245,237,.35) 58%, transparent 78%)"
      : horizontalGradient;

  return (
    <Link
      href={treatment.href}
      className={`group relative block h-[340px] w-full overflow-hidden rounded-[24px] border border-[rgba(191,174,151,0.35)] bg-olive-50 transition-colors duration-[350ms] hover:border-[rgba(121,132,99,0.6)] md:h-[360px] lg:h-full ${gridClasses(index)}`}
      style={{ textDecoration: "none" }}
    >
      <Image
        src={treatment.image}
        alt={treatment.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        objectPosition={treatment.objectPosition}
        loading="lazy"
        className="object-cover transition-transform duration-[350ms] motion-reduce:transition-none motion-reduce:transform-none group-hover:scale-[1.035]"
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 lg:hidden"
        style={{ background: horizontalGradient }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
        style={{ background: gradient }}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 z-20 p-6 md:p-7 lg:p-8",
          "pr-[64px]",
        )}
        style={{ maxWidth: treatment.size === "large" ? 420 : 340 }}
      >
        <span
          className={cn(
            "mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em]",
            "font-[var(--font-body)] text-[var(--olive-600)]",
          )}
        >
          {treatment.eyebrow}
        </span>
        <h3
          className={cn(
            `leading-[1.05] ${
              treatment.size === "large"
                ? "text-[34px] lg:text-[42px]"
                : "text-[26px] lg:text-[30px]"
            }`,
            "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-0 mr-0 mb-[8px] ml-0",
          )}
        >
          {treatment.title}
        </h3>
        <p
          className={cn(
            "text-[15px] leading-[1.45] lg:text-[16px]",
            "font-[var(--font-body)] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[14px] ml-0",
          )}
        >
          {treatment.description}
        </p>
        <span
          className={cn(
            "inline-flex items-center gap-2 text-[14px] font-semibold lg:text-[15px]",
            "font-[var(--font-body)] text-[var(--olive-700)]",
          )}
        >
          {treatment.linkText}
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
      <div
        className={cn(
          "absolute bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--olive-600)] text-white transition-transform duration-300 group-hover:translate-x-1 md:bottom-6 md:right-6",
          "pointer-events-none",
        )}
      >
        <ArrowRight size={20} />
      </div>
    </Link>
  );
}

function TreatmentGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-[repeat(4,260px)]">
      {treatments.map((treatment, index) => (
        <TreatmentCard key={treatment.id} treatment={treatment} index={index} />
      ))}
    </div>
  );
}

function GuidancePanel() {
  const guidanceItems = [
    { icon: Sparkles, label: "Personalized Recommendations" },
    { icon: User, label: "Expert Guidance" },
    { icon: Shield, label: "Honest Advice" },
    { icon: Heart, label: "A More Confident You" },
  ];

  return (
    <div
      className={cn(
        "relative text-center",
        "bg-[rgba(251,250,247,0.96)] rounded-[26px] pt-[60px] pr-[24px] pb-[60px] pl-[24px]",
      )}
    >
      <Eyebrow>GUIDANCE FOR YOUR SKIN JOURNEY</Eyebrow>
      <h2
        className={cn(
          "mx-auto max-w-[520px] text-[30px] leading-[1.1] lg:text-[42px]",
          "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-[22px] mr-auto mb-[14px] ml-auto",
        )}
      >
        Not Sure Which Treatment Is Right for You?
      </h2>
      <p
        className={cn(
          "mx-auto max-w-[540px] text-[16px] leading-relaxed lg:text-[17px]",
          "font-[var(--font-body)] text-[var(--color-text-secondary)] mt-0 mr-auto mb-[28px] ml-auto",
        )}
      >
        Start with what you&apos;d like to improve and we&apos;ll point you in
        the right direction.
      </p>
      <Button
        variant="primary"
        icon={<ArrowRight size={18} />}
        onClick={() =>
          document.getElementById("why")?.scrollIntoView({ behavior: "smooth" })
        }
        style={{
          background: "var(--olive-600)",
          color: "#fff",
          borderColor: "var(--olive-600)",
          height: 56,
          padding: "0 32px",
        }}
      >
        Find Treatment by Concern
      </Button>

      <div className="mt-10 grid grid-cols-2 gap-y-4 md:grid-cols-4 md:gap-0 md:divide-x md:divide-olive-300">
        {guidanceItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center px-2 text-center"
          >
            <item.icon
              size={20}
              strokeWidth={1.5}
              color="var(--olive-600)"
              className="mb-[8px]"
            />
            <span
              className={cn(
                "text-[12px] font-semibold uppercase tracking-[0.12em]",
                "font-[var(--font-body)] text-[var(--color-text-primary)]",
              )}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HomeTreatmentDiscovery() {
  return (
    <section
      id="services"
      className={cn("bg-olive-100 px-3 lg:px-[53px]", "pt-[90px] pb-[90px]")}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="mb-14 text-center">
          <Eyebrow>TREATMENTS</Eyebrow>
          <h2
            className={cn(
              "text-[36px] leading-[1.1] lg:text-[48px]",
              "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-[22px] mr-0 mb-[16px] ml-0",
            )}
          >
            Treatments Tailored to You
          </h2>
          <p
            className={cn(
              "mx-auto max-w-[640px] text-[17px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)] leading-[1.6]",
            )}
          >
            Advanced skincare, laser and beauty treatments selected around your
            skin, your goals and your comfort.
          </p>
        </div>

        <TreatmentGrid />

        {/* <div style={{ marginTop: 64 }}>
          <GuidancePanel />
        </div> */}
      </div>
    </section>
  );
}
