"use client";

import * as ButtonModule from "@/components/design-system/core/Button";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";
import { cn } from "@/lib/utils";
import { useConsultation } from "@/components/ConsultationModal";

const Button: any = (ButtonModule as any).Button;
const GoogleReviews: any = (GoogleReviewsModule as any).GoogleReviews;

const Arrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function EyelashHero() {
  const { open: openConsultation } = useConsultation();
  return (
    <section
      className={cn(
        "relative flex flex-col justify-between overflow-hidden border-b-2 border-[#bfae97] bg-olive-50",
        "min-h-0 lg:min-h-[720px]",
      )}
    >
      {/* Full-bleed background image */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat",
          "bg-[url('/assets/eyelash-extensions-hero-2.jpg')]",
        )}
      />

      {/* Soft ivory wash behind the centered copy for readability on all screens */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 75% at 50% 45%, rgba(251,250,247,0.94) 0%, rgba(251,250,247,0.8) 50%, rgba(251,250,247,0.35) 80%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(251,250,247,0.55) 0%, transparent 25%, transparent 70%, rgba(251,250,247,0.7) 100%)",
        }}
      />

      {/* Main content */}
      <div
        className={cn(
          "relative z-10 mx-auto flex w-full flex-1 flex-col items-center justify-center",
          "max-w-[var(--container-max)] py-0 px-7 lg:px-[53px]",
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center text-center",
            "w-full max-w-[680px]",
          )}
        >
          {/* Eyebrow */}
          <div
            className={cn(
              "flex items-center justify-center gap-3.5",
              "mb-[28px]",
            )}
          >
            <span
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.16em]",
                "font-[var(--font-body)] text-[var(--olive-600)]",
              )}
            >
              Niagara{" "}
              <span className="text-[var(--olive-700)]">
                Eyelash Extensions
              </span>
            </span>
            <span className={cn("h-px w-12", "bg-[var(--olive-600)]")} />
          </div>

          {/* Headline */}
          <h1
            className={cn(
              "font-normal",
              "font-[var(--font-display)] text-[44px] leading-[1.05] text-[var(--ink-900)] lg:text-[80px] mt-0 mr-0 mb-[28px] ml-0 text-center",
            )}
          >
            Wake Up With
            <br className="hidden md:inline" />
            Lashes You <em style={{ fontStyle: "italic" }}>Love</em>.
          </h1>

          {/* Subheadline */}
          <p
            className={cn(
              "text-lg leading-relaxed",
              "font-[var(--font-body)] text-[var(--ink-600)] mt-0 mr-0 mb-[40px] ml-0 max-w-[520px] text-center",
            )}
          >
            Custom lash extensions designed around your eye shape, natural
            lashes and the look you want — from soft and subtle to full and
            dramatic.
          </p>

          {/* CTAs */}
          <div
            className={cn(
              "flex flex-wrap items-center justify-center gap-4",
              "mb-[32px]",
            )}
          >
            <Button
              variant="primary"
              icon={<Arrow />}
              onClick={openConsultation}
              style={{ whiteSpace: "normal", flexShrink: 1 }}
            >
              I want a Free Consultation
            </Button>
            <a
              href="#pricing"
              className={cn(
                "text-base font-semibold underline underline-offset-4 transition-colors hover:text-olive-700",
                "font-[var(--font-body)] text-[var(--ink-900)]",
              )}
            >
              View Pricing
            </a>
          </div>

          <GoogleReviews rating="5.0" count="61+" />
        </div>
      </div>
    </section>
  );
}
