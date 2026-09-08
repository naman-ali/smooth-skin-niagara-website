"use client";

import * as React from "react";
import {
  Phone,
  MessageSquareText,
  X,
  Check,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

const PHONE_DISPLAY = "(905) 920-7229";
const PHONE_TEL = "tel:+19059207229";
const PHONE_SMS = "sms:+19059207229";

interface ModalReview {
  name: string;
  relativeDate: string;
  text: string;
  highlights: string[];
}

const MODAL_REVIEWS: ModalReview[] = [
  {
    name: "Elise Cardamone",
    relativeDate: "Google review",
    text: "I highly recommend Ashley! She is so knowledgeable about the laser hair removal process and always makes me feel comfortable during my sessions.",
    highlights: [
      "so knowledgeable about the laser hair removal process",
      "feel comfortable",
    ],
  },
  {
    name: "Anne Beach",
    relativeDate: "Google review",
    text: "Professional and accommodating! There is no better place in this area! Highly recommend.",
    highlights: [
      "Professional and accommodating",
      "no better place in this area",
    ],
  },
  {
    name: "Bri Lennie",
    relativeDate: "Google review",
    text: "I was nervous going into my first laser appointment, but immediately felt comfortable when I got there. Ashley is super friendly, very knowledgeable and informative.",
    highlights: [
      "immediately felt comfortable",
      "very knowledgeable and informative",
    ],
  },
  {
    name: "Adri Black",
    relativeDate: "Google review",
    text: "Ashley is fantastic!! She is very knowledgeable about what she does and does a great job at talking you through every step and making you feel comfortable and at ease.",
    highlights: ["talking you through every step", "comfortable and at ease"],
  },
  {
    name: "Stephanie D",
    relativeDate: "Google review",
    text: "Not only have I seen great results — Ashley is very knowledgeable, personable and it's clear she is passionate about her work. She made me feel at ease right away.",
    highlights: ["seen great results", "made me feel at ease right away"],
  },
  {
    name: "Brooke Cote",
    relativeDate: "Google review",
    text: "Wonderful, knowledgeable and friendly service! I recommend her regularly to my family and friends.",
    highlights: ["Wonderful, knowledgeable and friendly service"],
  },
];

function Stars({ size = 13 }: { size?: number }) {
  return (
    <span
      className="inline-flex gap-[2px]"
      role="img"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className="fill-[var(--star-yellow)] text-[var(--star-yellow)]"
        />
      ))}
    </span>
  );
}

/** Renders review text with highlight phrases in bold olive green. */
function HighlightedText({
  text,
  highlights,
}: {
  text: string;
  highlights: string[];
}) {
  const escaped = highlights
    .filter(Boolean)
    .map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (escaped.length === 0) return <>{text}</>;

  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);
  const lowered = highlights.map((h) => h.toLowerCase());

  return (
    <>
      {parts.map((part, i) =>
        lowered.includes(part.toLowerCase()) ? (
          <strong key={i} className="font-bold text-[var(--olive-600)]">
            {part}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </>
  );
}

function ReviewSlider() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const total = MODAL_REVIEWS.length;

  const goTo = React.useCallback(
    (i: number) => setIndex(((i % total) + total) % total),
    [total],
  );

  React.useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const review = MODAL_REVIEWS[index];

  const arrowClass =
    "flex h-[36px] w-[36px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text-secondary)] transition-all duration-200 hover:border-[var(--olive-600)] hover:text-[var(--color-brand-primary)]";

  return (
    <div
      className="flex flex-1 flex-col justify-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <p className="mb-[14px] font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-text-secondary)]">
        What clients say about Ashley
      </p>

      <div className="flex items-center gap-[10px] sm:gap-[14px]">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous review"
          className={arrowClass}
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </button>

        <div
          key={index}
          aria-live="polite"
          className="min-w-0 flex-1"
          style={{ animation: "consultation-review-fade 450ms ease both" }}
        >
          <div className="mb-[8px] flex justify-center">
            <Stars />
          </div>
          <blockquote className="m-0 min-h-[60px] text-balance break-words font-[var(--font-display)] text-[15px] italic leading-[1.5] text-[var(--color-text-primary)] sm:min-h-[72px] sm:text-[16px] lg:min-h-[110px] lg:text-[17px]">
            &ldquo;
            <HighlightedText
              text={review.text}
              highlights={review.highlights}
            />
            &rdquo;
          </blockquote>
          <p className="mb-0 mt-[10px] font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-text-primary)]">
            — {review.name}
            <span className="ml-[6px] font-medium normal-case tracking-normal text-[var(--color-text-secondary)]">
              · {review.relativeDate}
            </span>
          </p>
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next review"
          className={arrowClass}
        >
          <ChevronRight size={18} strokeWidth={2} />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-[14px] flex items-center justify-center gap-[7px]">
        {MODAL_REVIEWS.map((r, i) => (
          <button
            key={r.name}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show review ${i + 1}`}
            className="h-[6px] cursor-pointer rounded-full border-0 p-0 transition-all duration-300"
            style={{
              width: i === index ? 18 : 6,
              background:
                i === index ? "var(--color-brand-primary)" : "var(--olive-300)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

interface ConsultationContextValue {
  open: () => void;
}

const ConsultationContext = React.createContext<ConsultationContextValue>({
  open: () => {},
});

export function useConsultation() {
  return React.useContext(ConsultationContext);
}

export function ConsultationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);

  React.useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close]);

  return (
    <ConsultationContext.Provider value={{ open }}>
      {children}
      {isOpen && <ConsultationModal onClose={close} />}
    </ConsultationContext.Provider>
  );
}

const trustPoints = [
  "Free consultation",
  "No obligation",
  "10+ years experience",
];

function ConsultationModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a free consultation"
      onClick={(e) => {
        if (e.currentTarget === e.target) onClose();
      }}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[rgba(31,36,24,0.55)] p-0 backdrop-blur-[6px] sm:items-center sm:p-6"
    >
      <style>
        {`@keyframes consultation-review-fade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }`}
      </style>
      <div className="relative flex max-h-[92dvh] w-full max-w-[520px] flex-col overflow-hidden rounded-t-[24px] bg-[var(--olive-50)] shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:rounded-[24px] lg:max-h-[88dvh] lg:max-w-[940px]">
        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute -top-[120px] left-1/2 h-[260px] w-[420px] -translate-x-1/2 rounded-full lg:left-[27%]"
          style={{
            background:
              "radial-gradient(circle at center, var(--olive-500) 0%, transparent 70%)",
            opacity: 0.16,
          }}
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-[16px] top-[16px] z-10 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(255,255,255,0.7)] text-[var(--color-text-secondary)] transition-colors duration-200 hover:bg-white hover:text-[var(--color-text-primary)]"
        >
          <X size={18} strokeWidth={1.75} />
        </button>

        <div className="relative flex-1 overflow-y-auto overflow-x-hidden lg:grid lg:grid-cols-[1.15fr_1fr]">
          {/* Left column — CTA */}
          <div className="px-6 pb-[30px] pt-16 text-center sm:px-[42px] sm:pb-[36px] sm:pt-[44px] lg:flex lg:flex-col lg:justify-center">
            {/* Avatar */}
            <div className="mx-auto mb-[18px] flex h-[104px] w-[104px] items-center justify-center rounded-full bg-[var(--olive-100)] p-[5px] shadow-[0_10px_30px_rgba(79,91,58,0.22)] ring-1 ring-[var(--olive-500)]">
              <img
                src="/assets/ashley-about.jpg"
                alt="Ashley, founder of Smooth Skin Niagara"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <p className="mb-[10px] font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-primary)]">
              Ashley · Founder, Smooth Skin Niagara
            </p>

            <h2 className="mx-auto mb-[14px] mt-0 max-w-[400px] text-balance break-words font-[var(--font-display)] text-[28px] font-medium leading-[1.12] text-[var(--color-text-primary)] sm:text-[36px]">
              Let&apos;s find the right treatment for you
            </h2>

            <p className="mx-auto mb-[26px] mt-0 max-w-[400px] text-balance font-[var(--font-body)] text-[15px] leading-[1.65] text-[var(--color-text-secondary)] sm:text-[16px]">
              Call or text Ashley directly and she&apos;ll answer your questions
              and help you book your free consultation.
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-[12px]">
              <a
                href={PHONE_TEL}
                className="group flex h-auto min-h-[56px] items-center justify-center gap-[10px] whitespace-normal rounded-[14px] bg-[var(--cta-primary-bg)] px-4 py-3 font-[var(--font-body)] text-[16px] font-semibold text-[var(--cta-primary-text)] no-underline transition-all duration-300 hover:bg-[var(--cta-primary-hover)] hover:shadow-[0_6px_20px_rgba(79,91,58,0.28)] sm:h-[58px] sm:text-[17px]"
              >
                <Phone size={19} strokeWidth={1.75} />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={PHONE_SMS}
                className="flex h-auto min-h-[54px] items-center justify-center gap-[10px] whitespace-normal rounded-[14px] border border-[var(--color-border-strong)] bg-[var(--olive-100)] px-4 py-3 font-[var(--font-body)] text-[16px] font-semibold text-[var(--color-text-primary)] no-underline transition-colors duration-300 hover:bg-[var(--olive-200)]"
              >
                <MessageSquareText
                  size={19}
                  strokeWidth={1.75}
                  className="text-[var(--color-brand-primary)]"
                />
                Text Ashley instead
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-[24px] flex flex-wrap items-center justify-center gap-x-[18px] gap-y-[8px]">
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="flex items-center gap-[6px] font-[var(--font-body)] text-[13px] font-medium text-[var(--color-text-secondary)]"
                >
                  <Check
                    size={14}
                    strokeWidth={2.5}
                    className="text-[var(--color-brand-primary)]"
                  />
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-[20px] flex items-center justify-center gap-[7px] border-t border-[var(--color-border)] pt-[18px]">
              <MapPin
                size={14}
                strokeWidth={1.75}
                className="shrink-0 text-[var(--color-brand-primary)]"
              />
              <span className="font-[var(--font-body)] text-[13px] text-[var(--color-text-secondary)]">
                5985 Ernest Crescent, Niagara Falls
              </span>
            </div>
          </div>

          {/* Right column — client reviews */}
          <div className="flex border-t border-[var(--color-border)] bg-[var(--olive-100)] px-6 py-[28px] text-center sm:px-[34px] lg:border-l lg:border-t-0 lg:py-[36px]">
            <ReviewSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
