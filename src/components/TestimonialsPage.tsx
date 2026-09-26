"use client";

import Header from "@/components/Header";
import { CtaSection } from "@/components/CtaSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { GOOGLE_REVIEWS_URL } from "@/lib/reviews";

export function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-olive-50">
        <section className="px-3 pt-[64px] md:px-10 lg:pt-[90px]">
          <div className="mx-auto max-w-[var(--container-max)] text-center">
            <div className="mb-[22px] flex items-center justify-center gap-[13px]">
              <span className="font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary)]">
                Client Reviews
              </span>
              <span className="h-[1px] w-[48px] bg-[var(--color-border-strong)]" />
            </div>
            <h1 className="mx-auto mb-[16px] max-w-[760px] font-[var(--font-display)] text-[40px] font-normal leading-[1.1] text-[var(--color-text-primary)] md:text-[56px]">
              What Niagara Falls Clients Say About Smooth Skin Niagara
            </h1>
            <p className="mx-auto mb-[14px] max-w-[640px] font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
              Real reviews from real clients across laser hair removal,
              lashes, microneedling, facials and skin treatments.
            </p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-brand-primary)] no-underline"
            >
              See our reviews on Google →
            </a>
          </div>
        </section>
        <ReviewsSection />
        <CtaSection />
      </main>
    </>
  );
}
