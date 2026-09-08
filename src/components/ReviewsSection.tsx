"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import * as React from "react";
import {
  GOOGLE_REVIEWS_URL,
  orderReviews,
  type ServiceKey,
} from "@/lib/reviews";
import { cn } from "@/lib/utils";


const LONG_REVIEW_THRESHOLD = 600;
const PREVIEW_LENGTH = 130;

function Stars({ size = 15 }: { size?: number }) {
  return (
    <span
      className="inline-flex gap-[2px]"
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
            className="font-semibold text-[var(--olive-600)]"
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
      className="w-[52px] h-[52px] rounded-[50%] bg-[var(--olive-100)] text-[var(--ink-900)] inline-flex items-center justify-center cursor-pointer shrink-0" style={{ border: `1px solid ${hover ? "var(--olive-600)" : "var(--olive-300)"}`, transition: "border-color 200ms ease, transform 200ms ease", transform: hover
          ? `translateX(${direction === "prev" ? -2 : 2}px)`
          : "none" }}
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
      
      className={cn("relative overflow-hidden", "bg-[var(--olive-50)] pt-[90px] pr-[24px] pb-[90px] pl-[24px]")}
      onKeyDown={onKeyDown}
    >
      {/* Decorative botanical, desktop only */}
      <svg
        
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        aria-hidden="true"
        className={cn("pointer-events-none absolute left-0 top-0 hidden lg:block", "opacity-[0.16]")}
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

      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        {/* Header */}
        <div className="text-center hidden">
          <span
            className="font-[var(--font-body)] text-[12px] tracking-[0.18em] uppercase text-[var(--olive-600)] font-bold"
          >
            Real People &middot; Real Experiences
          </span>
          <div
            className="w-[56px] h-[1px] bg-[var(--olive-600)] opacity-[0.4] mt-[14px] mr-auto mb-0 ml-auto"
          />
          <h2
            
            className={cn("text-[40px] leading-[1.05] md:text-[56px] lg:text-[62px]", "font-[var(--font-display)] font-normal text-[var(--ink-900)] mt-[22px] mr-0 mb-[18px] ml-0")}
          >
            Trusted Care,{" "}
            <em className="text-[var(--olive-600)]" style={{ fontStyle: "italic" }}>
              In Their Words.
            </em>
          </h2>
          <p
            
            className={cn("mx-auto text-[16px] leading-relaxed lg:text-[17px]", "font-[var(--font-body)] text-[var(--ink-600)] max-w-[680px] mt-0 mr-auto mb-0 ml-auto")}
          >
            Real feedback from clients who trust Smooth Skin Niagara with their
            treatments, results and confidence.
          </p>
        </div>

        {/* Featured review carousel */}
        <div
          
          className={cn("relative mx-auto mt-14 flex items-center justify-center gap-6 lg:gap-10", "max-w-[1100px]")}
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
            
            className={cn("relative flex-1 text-center", "max-w-[900px]")}
            aria-live="polite"
          >
            <span
              aria-hidden="true"
              className="absolute top-[-56px] left-[50%] font-[var(--font-display)] text-[140px] leading-[1] text-[var(--olive-300)] opacity-[0.55] pointer-events-none select-none" style={{ transform: "translateX(-50%)" }}
            >
              &ldquo;
            </span>

            {review.text ? (
              <blockquote
                
                className={cn("text-[22px] leading-[1.45] md:text-[28px] lg:text-[31px]", "font-[var(--font-display)] text-[var(--ink-900)] m-0")} style={{ transition: "opacity 200ms ease" }}
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
                  
                  className={cn("mt-3 text-[22px] md:text-[26px]", "font-[var(--font-display)] text-[var(--ink-900)] m-0")}
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
                className="mt-[18px] font-[var(--font-body)] text-[13px] font-bold tracking-[0.08em] uppercase text-[var(--olive-600)] border-0 pb-[2px] cursor-pointer" style={{ background: "none", borderBottom: "1px solid var(--olive-300)" }}
              >
                {expanded ? "Show Less" : "Read Full Review"}
              </button>
            )}

            <p
              
              className={cn("mt-6", "font-[var(--font-body)] text-[13px] font-bold tracking-[0.14em] uppercase text-[var(--ink-900)] mt-[24px] mr-0 mb-0 ml-0")}
            >
              &mdash; {review.name}
            </p>
            {review.services && review.services.length > 0 && (
              <p
                className="font-[var(--font-body)] text-[11px] tracking-[0.18em] uppercase text-[var(--olive-600)] mt-[6px] mr-0 mb-0 ml-0"
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
              
              className={cn("mt-6", "font-[var(--font-body)] text-[12px] tracking-[0.22em] text-[var(--ink-600)]")}
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
              
              className={cn("px-8 text-left", "border-0 cursor-pointer")} style={{ background: "none", borderLeft: i === 0 ? "none" : "1px solid var(--olive-300)" }}
            >
              <Stars size={12} />
              <p
                
                className={cn("mt-3 text-[14px] leading-relaxed", "font-[var(--font-body)] text-[var(--ink-600)] mt-[12px] mr-0 mb-[10px] ml-0 min-h-[66px]")}
              >
                {p.text
                  ? truncate(p.text, PREVIEW_LENGTH)
                  : "5-star Google rating"}
              </p>
              <span
                className="font-[var(--font-body)] text-[12px] font-bold tracking-[0.1em] uppercase text-[var(--ink-900)]"
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
            
            className={cn("inline-flex w-full items-center justify-center gap-2 sm:w-auto", "h-[56px] pt-0 pr-[34px] pb-0 pl-[34px] rounded-[999px] bg-[var(--olive-600)] text-[#fff] font-[var(--font-body)] text-[15px] font-bold no-underline")}
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
