"use client";

import * as ButtonModule from "@/components/design-system/core/Button";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";

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
  return (
    <section
      className="relative flex flex-col justify-between overflow-hidden border-b-2 border-[#bfae97] bg-olive-50"
      style={{ minHeight: 720 }}
    >
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/eyelash-extensions-hero-2.jpg)",
        }}
      />

      {/* Soft ivory gradient to keep copy legible while the right side stays visible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(251,250,247,0.92) 0%, rgba(251,250,247,0.78) 30%, rgba(251,250,247,0.42) 55%, transparent 82%)",
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 mx-auto flex w-full flex-1 flex-col items-center justify-center"
        style={{ maxWidth: "var(--container-max)", padding: "0 53px" }}
      >
        <div
          className="flex flex-col items-center text-center"
          style={{ width: "100%", maxWidth: 680 }}
        >
          {/* Eyebrow */}
          <div
            className="flex items-center justify-center gap-3.5"
            style={{ marginBottom: 28 }}
          >
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.16em]"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--olive-600)",
              }}
            >
              Niagara{" "}
              <span style={{ color: "var(--olive-700)" }}>
                Eyelash Extensions
              </span>
            </span>
            <span
              className="h-px w-12"
              style={{ background: "var(--olive-600)" }}
            />
          </div>

          {/* Headline */}
          <h1
            className="font-normal"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 80,
              lineHeight: 1.05,
              color: "var(--ink-900)",
              margin: "0 0 28px",
              textAlign: "center",
            }}
          >
            Wake Up With
            <br />
            Lashes You <em style={{ fontStyle: "italic" }}>Love</em>.
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--ink-600)",
              margin: "0 0 40px",
              maxWidth: 520,
              textAlign: "center",
            }}
          >
            Custom lash extensions designed around your eye shape, natural
            lashes and the look you want — from soft and subtle to full and
            dramatic.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center justify-center gap-4"
            style={{ marginBottom: 32 }}
          >
            <Button variant="primary" icon={<Arrow />}>
              Book Your Lash Appointment
            </Button>
            <a
              href="#pricing"
              className="text-base font-semibold underline underline-offset-4 transition-colors hover:text-olive-700"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--ink-900)",
              }}
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
