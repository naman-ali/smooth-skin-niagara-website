"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";
import type { GoogleReviewsProps } from "@/components/design-system/trust/GoogleReviews";
import Header from "@/components/Header";
import { CtaSection } from "@/components/CtaSection";
import { useConsultation } from "@/components/ConsultationModal";
import { cn } from "@/lib/utils";

const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;
const GoogleReviews = (
  GoogleReviewsModule as unknown as {
    GoogleReviews: React.FC<GoogleReviewsProps>;
  }
).GoogleReviews;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-[var(--font-body)] text-[12px] tracking-[0.16em] uppercase text-[var(--olive-600)] font-bold">
      {children}
    </span>
  );
}

interface TreatmentItem {
  id: string;
  tag: string;
  name: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  objectPosition: string;
  /** Larger image share and title — visual emphasis only. */
  featured?: boolean;
  /** Spans both grid columns on desktop. */
  wide?: boolean;
}

interface TreatmentCategory {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  /** Supporting offerings get a hairline rule separating them from primary treatments. */
  supporting?: boolean;
  items: TreatmentItem[];
}

const categories: TreatmentCategory[] = [
  {
    id: "laser",
    eyebrow: "LASER",
    title: "Laser Hair Removal",
    items: [
      {
        id: "laser",
        tag: "Laser",
        name: "Laser Hair Removal",
        description:
          "Long-term hair reduction for the face and body with Soprano ICE Platinum technology.",
        href: "/laser-hair-removal",
        image: "/assets/laser.jpg",
        alt: "Laser hair removal treatment on a client's leg",
        objectPosition: "center",
        featured: true,
        wide: true,
      },
    ],
  },
  {
    id: "skin-facials",
    eyebrow: "SKIN & FACIALS",
    title: "Skin Rejuvenation & Advanced Facials",
    items: [
      {
        id: "microneedling",
        tag: "Skin Renewal",
        name: "Microneedling CIT",
        description:
          "Collagen-induction therapy with eDermaStamp for smoother-looking texture, fine lines and overall skin renewal.",
        href: "/edermastamp-microneedling",
        image: "/assets/microneedling.jpg",
        alt: "Professional microneedling facial treatment",
        objectPosition: "75% center",
      },
      {
        id: "oxygeneo",
        tag: "3-in-1 Facial",
        name: "OxyGeneo 3-in-1 Super Facial",
        description:
          "Exfoliate, oxygenate and infuse in one personalized facial experience.",
        href: "/oxygeneo-3-1-super-facial",
        image: "/assets/oxygenero.jpg",
        alt: "Client receiving an OxyGeneo facial treatment",
        objectPosition: "center",
        featured: true,
      },
      {
        id: "celluma",
        tag: "LED Therapy",
        name: "Celluma LED Light Therapy",
        description:
          "Relaxing LED light therapy for skin-focused and wellness treatment goals.",
        href: "/celluma-led-light-therapy",
        image: "/assets/celluma.jpg",
        alt: "Client receiving Celluma LED light therapy",
        objectPosition: "70% center",
      },
      {
        id: "exosome",
        tag: "Regenerative",
        name: "Exosome Therapy",
        description:
          "Topical exosome serums that support skin renewal, hydration and radiance after microneedling, laser and other treatments.",
        href: "/exosome-therapy",
        image: "/assets/exosomes/MSC_Exosomes_Edited3.webp",
        alt: "Exosome therapy serum for skin rejuvenation",
        objectPosition: "center",
      },
    ],
  },
  {
    id: "lashes",
    eyebrow: "LASHES",
    title: "Lash Treatments",
    items: [
      {
        id: "eyelash",
        tag: "Lashes",
        name: "Eyelash Extensions",
        description:
          "Custom lash sets designed around your eye shape, natural lashes and preferred style.",
        href: "/eyelash-extensions",
        image: "/assets/eyelash.jpg",
        alt: "Close-up of custom eyelash extensions",
        objectPosition: "center 25%",
        featured: true,
        wide: true,
      },
    ],
  },
  {
    id: "enhancements",
    eyebrow: "ENHANCEMENTS & RECOVERY",
    title: "Treatment Enhancements & Recovery",
    description:
      "Professional products and supportive therapies designed to help recovery and enhance results after aesthetic treatments.",
    supporting: true,
    items: [
      {
        id: "readymedical",
        tag: "Recovery",
        name: "ReadyMedical Healing Solutions",
        description:
          "Ready-to-mix sterile healing solutions designed to support recovery and enhance results after aesthetic treatments.",
        href: "/readymedical",
        image: "/assets/readymedical/ready-medical-hero-1.jpg",
        alt: "ReadyMedical sterile healing solution products",
        objectPosition: "center",
        wide: true,
      },
    ],
  },
];

function TreatmentsHero() {
  const { open: openConsultation } = useConsultation();

  return (
    <section className="bg-olive-100 px-3 pt-[70px] pb-[56px] lg:px-[53px] lg:pt-[90px] lg:pb-[70px]">
      <div className="mx-auto max-w-[var(--container-max)] text-center">
        <Eyebrow>MENU OF SERVICES</Eyebrow>
        <h1
          className={cn(
            "mx-auto mt-[20px] mb-[18px] max-w-[720px] text-[42px] leading-[1.05] md:text-[56px] lg:text-[64px]",
            "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]",
          )}
        >
          Treatments &amp; Services
        </h1>
        <p
          className={cn(
            "mx-auto mt-0 mb-[30px] max-w-[640px] text-[17px] leading-[1.6] lg:text-[19px]",
            "font-[var(--font-body)] text-[var(--color-text-secondary)]",
          )}
        >
          The full menu of laser, skin, facial and lash treatments at Smooth
          Skin Niagara in Niagara Falls. Every service begins with a free,
          no-pressure consultation.
        </p>

        <div className="mx-auto mb-[26px] flex flex-col items-center gap-3 md:flex-row md:justify-center">
          <Button
            variant="primary"
            icon={<ArrowRight size={18} />}
            onClick={openConsultation}
            style={{
              width: "min(100%, 340px)",
              height: 56,
              background: "var(--olive-600)",
              color: "#fff",
              borderColor: "var(--olive-600)",
            }}
          >
            Free Consultation
          </Button>
          <a
            href="tel:+19059207229"
            className={cn(
              "inline-flex h-[56px] w-full items-center justify-center gap-[10px] rounded-[14px] px-[28px] no-underline md:w-auto",
              "font-[var(--font-body)] text-[16px] font-semibold text-[var(--olive-700)]",
            )}
            style={{
              background: "rgba(251, 250, 247, 0.65)",
              border: "1px solid var(--olive-600)",
            }}
          >
            <Phone size={17} />
            Call or Text (905) 920-7229
          </a>
        </div>

        <div className="mb-[18px] flex justify-center">
          <GoogleReviews rating="5.0" count="61+" />
        </div>

        <p
          className={cn(
            "m-0 inline-flex items-center gap-[7px] text-[13px] font-medium",
            "font-[var(--font-body)] text-[var(--color-text-secondary)]",
          )}
        >
          <MapPin size={14} color="var(--olive-600)" />
          5985 Ernest Crescent, Niagara Falls, ON
        </p>
      </div>
    </section>
  );
}

function TreatmentCard({ item }: { item: TreatmentItem }) {
  const { featured, wide } = item;

  return (
    <Link
      href={item.href}
      className={cn(
        "group relative flex flex-col overflow-hidden no-underline md:flex-row",
        "rounded-[16px] border border-[rgba(191,174,151,0.45)] bg-[var(--surface-card)]",
        "shadow-[0_1px_2px_rgba(37,38,36,0.04),0_10px_28px_rgba(37,38,36,0.05)]",
        "transition-all duration-300",
        "hover:-translate-y-[3px] hover:border-[rgba(102,112,82,0.55)]",
        "hover:shadow-[0_2px_4px_rgba(37,38,36,0.05),0_18px_42px_rgba(37,38,36,0.10)]",
        wide && "lg:col-span-2",
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] w-full overflow-hidden",
          "md:aspect-auto md:self-stretch",
          featured
            ? "md:w-[40%] md:min-h-[290px]"
            : "md:w-[36%] md:min-h-[230px]",
          wide && !featured && "md:w-[34%]",
        )}
      >
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes={
            wide
              ? "(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 560px"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 36vw, 280px"
          }
          loading="lazy"
          className="object-cover transition-transform duration-500 motion-reduce:transition-none motion-reduce:transform-none group-hover:scale-[1.045]"
          style={{ objectPosition: item.objectPosition }}
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-9">
        <span
          className={cn(
            "mb-[10px] block text-[11px] font-semibold uppercase tracking-[0.18em]",
            "font-[var(--font-body)] text-[var(--olive-600)] opacity-90",
          )}
        >
          {item.tag}
        </span>
        <h3
          className={cn(
            featured
              ? "text-[30px] md:text-[36px]"
              : "text-[25px] md:text-[30px]",
            "leading-[1.12]",
            "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-0 mr-0 mb-[10px] ml-0",
          )}
        >
          {item.name}
        </h3>
        <p
          className={cn(
            "text-[15px] leading-[1.6] md:text-[16px]",
            "font-[var(--font-body)] text-[var(--color-text-secondary)] mt-0 mr-0 mb-0 ml-0",
            featured ? "max-w-[460px]" : "max-w-[380px]",
          )}
        >
          {item.description}
        </p>
        <span
          className={cn(
            "mt-[22px] inline-flex w-fit items-center gap-2 pb-[4px]",
            "border-b border-[rgba(102,112,82,0.35)] transition-colors duration-300 group-hover:border-[var(--olive-600)]",
            "font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--olive-700)]",
          )}
        >
          Explore Treatment
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

function CategorySection({ category }: { category: TreatmentCategory }) {
  return (
    <div
      className={cn(
        category.supporting &&
          "border-t border-[var(--color-border)] pt-[56px] md:pt-[64px]",
      )}
    >
      <header className="mb-[32px] lg:mb-[40px]">
        <div className="flex items-center gap-[22px]">
          <Eyebrow>{category.eyebrow}</Eyebrow>
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-[var(--color-border)]"
          />
        </div>
        <h2
          className={cn(
            "mt-[16px] mb-0 text-[32px] leading-[1.08] md:text-[42px]",
            "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]",
          )}
        >
          {category.title}
        </h2>
        {category.description && (
          <p
            className={cn(
              "mt-[12px] mb-0 max-w-[560px] text-[15px] leading-[1.6] md:text-[16px]",
              "font-[var(--font-body)] text-[var(--color-text-secondary)]",
            )}
          >
            {category.description}
          </p>
        )}
      </header>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
        {category.items.map((item) => (
          <TreatmentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function GuidanceCta() {
  const { open: openConsultation } = useConsultation();

  return (
    <section className="bg-olive-100 px-3 py-[76px] lg:px-[53px] lg:py-[92px]">
      <div className="mx-auto max-w-[640px] text-center">
        <span
          aria-hidden="true"
          className="mx-auto mb-[24px] block h-px w-[72px] bg-[var(--olive-600)] opacity-50"
        />
        <Eyebrow>GUIDANCE FOR YOUR SKIN JOURNEY</Eyebrow>
        <h2
          className={cn(
            "mx-auto mt-[18px] mb-[16px] max-w-[560px] text-[32px] leading-[1.1] md:text-[42px]",
            "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]",
          )}
        >
          Not Sure Which Treatment Is Right for You?
        </h2>
        <p
          className={cn(
            "mx-auto mt-0 mb-[30px] max-w-[520px] text-[16px] leading-[1.65] lg:text-[17px]",
            "font-[var(--font-body)] text-[var(--color-text-secondary)]",
          )}
        >
          Tell Ashley your skin goals and she will help you choose the treatment
          that fits — no pressure, no obligation.
        </p>
        <Button
          variant="primary"
          icon={<ArrowRight size={18} />}
          onClick={openConsultation}
          style={{
            background: "var(--olive-600)",
            color: "#fff",
            borderColor: "var(--olive-600)",
            height: 56,
            padding: "0 32px",
          }}
        >
          Book a Free Consultation
        </Button>
      </div>
    </section>
  );
}

export default function TreatmentsPage() {
  return (
    <>
      <Header />
      <main>
        <TreatmentsHero />
        <section className="bg-olive-50 px-3 pt-[60px] pb-[84px] lg:px-[53px] lg:pt-[76px] lg:pb-[100px]">
          <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-[80px] md:gap-[104px]">
            {categories.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))}
          </div>
        </section>
        <GuidanceCta />
        <CtaSection variant="dark" />
      </main>
    </>
  );
}
