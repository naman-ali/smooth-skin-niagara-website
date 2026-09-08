"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import * as React from "react";
import {
  GOOGLE_REVIEWS_URL,
  orderReviews,
  type ServiceKey,
} from "@/lib/reviews";

const LONG_REVIEW_THRESHOLD = 600;
const PREVIEW_LENGTH = 130;

function Stars({ size = 15 }: { size?: number }) {
  return (
    <span
      style={{ display: "inline-flex", gap: 2 }}
      role="img"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="var(--star-yellow)"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

/** Renders review text with highlight phrases in brand olive. */
function HighlightedText({
  text,
  highlights,
}: {
  text: string;
  highlights?: string[];
}) {
  if (!highlights || highlights.length === 0) return <>{text}</>;

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
          <strong
            key={i}
            style={{ fontWeight: 600, color: "var(--olive-600)" }}
          >
            {part}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </>
  );
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 40 ? lastSpace : max).trimEnd()}\u2026`;
}

function NavButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const [hover, setHover] = React.useState(false);
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={direction === "prev" ? "Previous review" : "Next review"}
      style={{
        width: 52,
        height: 52,
        borderRadius: "50%",
        border: `1px solid ${hover ? "var(--olive-600)" : "var(--olive-300)"}`,
        background: "var(--olive-100)",
        color: "var(--ink-900)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "border-color 200ms ease, transform 200ms ease",
        transform: hover
          ? `translateX(${direction === "prev" ? -2 : 2}px)`
          : "none",
        flexShrink: 0,
      }}
    >
      <Icon size={20} strokeWidth={1.75} />
    </button>
  );
}

export function ReviewsSection({
  prioritizeService,
}: {
  prioritizeService?: ServiceKey;
}) {
  const reviews = React.useMemo(
    () => orderReviews(prioritizeService),
    [prioritizeService],
  );
  const [index, setIndex] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const touchStartX = React.useRef<number | null>(null);

  const total = reviews.length;
  const review = reviews[index];

  const goTo = React.useCallback(
    (i: number) => {
      setIndex(((i % total) + total) % total);
      setExpanded(false);
    },
    [total],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 48) goTo(index + (delta < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  // Three supporting previews: the next reviews in sequence.
  const previews = [1, 2, 3].map((offset) => ({
    review: reviews[(index + offset) % total],
    index: (index + offset) % total,
  }));

  const isLong = (review.text?.length ?? 0) > LONG_REVIEW_THRESHOLD;
  const visibleText =
    review.text && isLong && !expanded
      ? truncate(review.text, LONG_REVIEW_THRESHOLD)
      : review.text;

  return (
    <section
      aria-label="Google Reviews"
      className="relative overflow-hidden"
      style={{ background: "var(--olive-50)", padding: "90px 24px" }}
      onKeyDown={onKeyDown}
    >
      {/* Decorative botanical, desktop only */}
      <svg
        className="pointer-events-none absolute left-0 top-0 hidden lg:block"
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        aria-hidden="true"
        style={{ opacity: 0.16 }}
      >
        <path
          d="M-10 30 C 60 60, 110 110, 150 200"
          stroke="var(--olive-600)"
          strokeWidth="2"
        />
        {[40, 70, 100, 130].map((y, i) => (
          <ellipse
            key={i}
            cx={30 + i * 30}
            cy={y}
            rx="18"
            ry="7"
            fill="var(--olive-600)"
            transform={`rotate(${30 + i * 10} ${30 + i * 30} ${y})`}
          />
        ))}
      </svg>

      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        {/* Header */}
        <div className="text-center hidden">
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--olive-600)",
              fontWeight: 700,
            }}
          >
            Real People &middot; Real Experiences
          </span>
          <div
            style={{
              width: 56,
              height: 1,
              background: "var(--olive-600)",
              opacity: 0.4,
              margin: "14px auto 0",
            }}
          />
          <h2
            className="text-[40px] leading-[1.05] md:text-[56px] lg:text-[62px]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "var(--ink-900)",
              margin: "22px 0 18px",
            }}
          >
            Trusted Care,{" "}
            <em style={{ color: "var(--olive-600)", fontStyle: "italic" }}>
              In Their Words.
            </em>
          </h2>
          <p
            className="mx-auto text-[16px] leading-relaxed lg:text-[17px]"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--ink-600)",
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            Real feedback from clients who trust Smooth Skin Niagara with their
            treatments, results and confidence.
          </p>
        </div>

        {/* Featured review carousel */}
        <div
          className="relative mx-auto mt-14 flex items-center justify-center gap-6 lg:gap-10"
          style={{ maxWidth: 1100 }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client reviews"
          tabIndex={0}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="hidden md:block">
            <NavButton direction="prev" onClick={() => goTo(index - 1)} />
          </div>

          <div
            className="relative flex-1 text-center"
            style={{ maxWidth: 900 }}
            aria-live="polite"
          >
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -56,
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "var(--font-display)",
                fontSize: 140,
                lineHeight: 1,
                color: "var(--olive-300)",
                opacity: 0.55,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              &ldquo;
            </span>

            {review.text ? (
              <blockquote
                className="text-[22px] leading-[1.45] md:text-[28px] lg:text-[31px]"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--ink-900)",
                  margin: 0,
                  transition: "opacity 200ms ease",
                }}
              >
                <HighlightedText
                  text={visibleText ?? ""}
                  highlights={review.highlights}
                />
              </blockquote>
            ) : (
              <div>
                <Stars size={20} />
                <p
                  className="mt-3 text-[22px] md:text-[26px]"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--ink-900)",
                    margin: 0,
                  }}
                >
                  5-star Google rating
                </p>
              </div>
            )}

            {isLong && (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                style={{
                  marginTop: 18,
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--olive-600)",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid var(--olive-300)",
                  paddingBottom: 2,
                  cursor: "pointer",
                }}
              >
                {expanded ? "Show Less" : "Read Full Review"}
              </button>
            )}

            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ink-900)",
                margin: "24px 0 0",
              }}
            >
              &mdash; {review.name}
            </p>
            {review.services && review.services.length > 0 && (
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--olive-600)",
                  margin: "6px 0 0",
                }}
              >
                {review.services.join(" \u00b7 ")}
              </p>
            )}

            {/* Mobile arrows */}
            <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
              <NavButton direction="prev" onClick={() => goTo(index - 1)} />
              <NavButton direction="next" onClick={() => goTo(index + 1)} />
            </div>

            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                letterSpacing: "0.22em",
                color: "var(--ink-600)",
              }}
              aria-label={`Review ${index + 1} of ${total}`}
            >
              {String(index + 1).padStart(2, "0")} / {total}
            </p>
          </div>

          <div className="hidden md:block">
            <NavButton direction="next" onClick={() => goTo(index + 1)} />
          </div>
        </div>

        {/* Supporting previews */}
        <div className="mx-auto mt-16 hidden max-w-[1000px] grid-cols-3 md:grid">
          {previews.map(({ review: p, index: pi }, i) => (
            <button
              key={`${p.name}-${pi}`}
              type="button"
              onClick={() => goTo(pi)}
              aria-label={`Show review by ${p.name}`}
              className="px-8 text-left"
              style={{
                background: "none",
                border: "none",
                borderLeft: i === 0 ? "none" : "1px solid var(--olive-300)",
                cursor: "pointer",
              }}
            >
              <Stars size={12} />
              <p
                className="mt-3 text-[14px] leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--ink-600)",
                  margin: "12px 0 10px",
                  minHeight: 66,
                }}
              >
                {p.text
                  ? truncate(p.text, PREVIEW_LENGTH)
                  : "5-star Google rating"}
              </p>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-900)",
                }}
              >
                {p.name}
              </span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center px-4">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            style={{
              height: 56,
              padding: "0 34px",
              borderRadius: 999,
              background: "var(--olive-600)",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Read All Google Reviews
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
