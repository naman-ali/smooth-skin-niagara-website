"use client";

import * as React from "react";
import { useConsultation } from "@/components/ConsultationModal";

const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 10h18" />
  </svg>
);

const PersonIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const defaultBenefits = [
  {
    icon: <CalendarIcon />,
    title: "Free Consultation",
    text: "No pressure, just expert advice",
  },
  {
    icon: <PersonIcon />,
    title: "Personalized Plan",
    text: "Tailored to your skin, goals and lifestyle",
  },
  {
    icon: <ShieldIcon />,
    title: "Trusted & Professional",
    text: "You're in safe, experienced hands",
  },
];

interface BenefitItem {
  icon?: React.ReactNode;
  title: string;
  text: string;
}

interface CtaSectionProps {
  variant?: "light" | "dark";
  eyebrow?: string;
  heading?: React.ReactNode;
  subheading?: string;
  buttonText?: string;
  phone?: string;
  phoneLabel?: string;
  benefits?: BenefitItem[];
}

export function CtaSection({
  variant = "dark",
  eyebrow = "READY TO TAKE THE NEXT STEP?",
  heading = (
    <>
      Your Best Results Start
      <br />
      With the Right Plan
    </>
  ),
  subheading = "Book a complimentary consultation and get personalized recommendations based on your skin, goals and lifestyle.",
  buttonText = "I want a Free Consultation",
  phone = "(905) 920-7229",
  phoneLabel = "Call or Text",
  benefits = defaultBenefits,
}: CtaSectionProps) {
  const { open: openConsultation } = useConsultation();
  const theme =
    variant === "dark"
      ? {
          background: "var(--ink-900)",
          eyebrowText: "var(--olive-100)",
          eyebrowLine: "var(--olive-500)",
          heading: "var(--white)",
          text: "var(--olive-200)",
          border: "var(--olive-700)",
          phoneBorder: "var(--olive-700)",
          phoneBg: "rgba(255, 255, 255, 0.04)",
          phoneIcon: "var(--olive-500)",
          iconBg: "var(--olive-700)",
          iconColor: "var(--olive-100)",
        }
      : {
          background: "var(--olive-50)",
          eyebrowText: "var(--color-brand-primary)",
          eyebrowLine: "var(--color-border-strong)",
          heading: "var(--color-text-primary)",
          text: "var(--color-text-secondary)",
          border: "var(--color-border)",
          phoneBorder: "var(--color-border-strong)",
          phoneBg: "var(--olive-100)",
          phoneIcon: "var(--color-brand-primary)",
          iconBg: "var(--olive-100)",
          iconColor: "var(--color-brand-primary)",
        };

  return (
    <section
      className="relative overflow-hidden py-[66px] px-6 md:px-10"
      style={{ background: theme.background }}
    >
      {variant === "dark" && (
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, var(--olive-600) 0%, transparent 70%)",
            opacity: 0.08,
          }}
        />
      )}

      <div className="relative z-10 mx-auto max-w-[var(--container-max)] text-center">
        <div className="mb-[22px] flex items-center justify-center gap-[14px]">
          <span
            className="h-[1.5px] w-[60px] rounded-full"
            style={{ background: theme.eyebrowLine, opacity: 0.6 }}
          />
          <span
            className="whitespace-nowrap font-[var(--font-body)] text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: theme.eyebrowText }}
          >
            {eyebrow}
          </span>
          <span
            className="h-[1.5px] w-[60px] rounded-full"
            style={{ background: theme.eyebrowLine, opacity: 0.6 }}
          />
        </div>

        <h2
          className="mx-auto mb-[26px] mt-0 max-w-[800px] font-[var(--font-display)] text-[40px] font-normal leading-[1.08] md:text-[52px] lg:text-[58px]"
          style={{ color: theme.heading }}
        >
          {heading}
        </h2>

        <p
          className="mx-auto mb-[30px] mt-0 max-w-[680px] font-[var(--font-body)] text-[17px] leading-[1.6] md:text-[19px]"
          style={{ color: theme.text }}
        >
          {subheading}
        </p>

        <div className="mb-[50px] flex flex-col items-center gap-[10px]">
          <button
            type="button"
            onClick={openConsultation}
            className="group flex h-[58px] w-full items-center justify-between rounded-[14px] bg-[var(--cta-primary-bg)] px-[28px] font-[var(--font-body)] text-[17px] font-semibold text-[var(--cta-primary-text)] transition-all duration-300 hover:bg-[var(--cta-primary-hover)] hover:shadow-[0_6px_20px_rgba(79,91,58,0.28)] md:max-w-[420px]"
          >
            {buttonText}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </button>

          <a
            href="tel:+19059207229"
            className="flex h-[54px] w-full items-center justify-center gap-[10px] rounded-[14px] px-[24px] font-[var(--font-body)] text-[16px] font-medium no-underline transition-colors duration-300 md:max-w-[420px]"
            style={{
              border: `1px solid ${theme.phoneBorder}`,
              background: theme.phoneBg,
            }}
          >
            <span style={{ color: theme.phoneIcon }}>
              <PhoneIcon />
            </span>
            <span style={{ color: theme.text }}>{phoneLabel}</span>
            <span style={{ color: theme.text }}>·</span>
            <span className="font-semibold" style={{ color: theme.heading }}>
              {phone}
            </span>
          </a>
        </div>

        <div className="mx-auto flex max-w-[900px] flex-col items-start gap-[28px] md:flex-row md:items-center md:justify-center md:gap-0">
          {benefits.map((item, i) => (
            <React.Fragment key={i}>
              <div className="flex w-full items-center justify-start gap-[14px] md:flex-1 md:justify-center">
                <div
                  className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full"
                  style={{ background: theme.iconBg, color: theme.iconColor }}
                >
                  {item.icon}
                </div>
                <div className="text-left">
                  <h4
                    className="mb-[3px] mt-0 font-[var(--font-display)] text-[18px] font-normal"
                    style={{ color: theme.heading }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="m-0 font-[var(--font-body)] text-[14px] leading-[1.5]"
                    style={{ color: theme.text }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
              {i < 2 && (
                <div
                  className="hidden h-[48px] w-[1px] md:block"
                  style={{ background: theme.border, opacity: 0.4 }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
