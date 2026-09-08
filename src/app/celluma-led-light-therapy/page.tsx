"use client";

import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { FaqSection } from "@/components/FaqSection";
import Header from "@/components/Header";
import { CellumaHero } from "@/components/CellumaHero";
import { CellumaPricingSection } from "@/components/CellumaPricingSection";
import { CellumaScienceSection } from "@/components/CellumaScienceSection";
import { cellumaFaqCategories } from "@/lib/celluma-faq";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CtaSection } from "@/components/CtaSection";

const cellumaResults = [
  {
    title: "Inflammation & Redness",
    src: "/assets/celluma-before-after-1.jpeg",
  },
  {
    title: "Skin Rejuvenation",
    src: "/assets/celluma-before-after-2.jpeg",
  },
  {
    title: "Acne Support",
    src: "/assets/celluma-before-after-3.jpeg",
  },
  {
    title: "Microneedling + Celluma",
    src: "/assets/celluma-before-after-4.jpeg",
  },
];

function CellumaVideos() {
  const videos = [
    { id: "6Xzx92NxOeg", title: "How Celluma Works" },
    { id: "Y4MzecOzFxE", title: "Celluma Results" },
  ];

  return (
    <section className="bg-olive-100 px-3 py-16 lg:px-[53px] lg:py-[80px]">
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="mb-12 text-center">
          <p className="mb-4 font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-brand-primary)]">
            See It in Action
          </p>
          <h2 className="text-balance font-[var(--font-display)] text-[36px] font-normal leading-[1.1] text-[var(--color-text-primary)] lg:text-[44px]">
            Learn More About Celluma
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] font-[var(--font-body)] text-[16px] leading-[1.6] text-[var(--color-text-secondary)]">
            Watch how Celluma LED light therapy works and the kind of results it
            can support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {videos.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-[18px] bg-[#fff] shadow-[0_10px_30px_rgba(79,91,58,0.12)]"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CellumaLedLightTherapyPage() {
  return (
    <>
      <Header />
      <CellumaHero />
      <CellumaScienceSection />
      <CellumaVideos />
      <BeforeAfterSection
        eyebrow="Real Client Results"
        heading="Before & After"
        subheading="See how Celluma LED light therapy can support healthier-looking skin with real before-and-after results from Smooth Skin Niagara clients."
        items={cellumaResults}
        columns={2}
      />
      <CellumaPricingSection />
      <FaqSection
        eyebrow="Frequently Asked Questions"
        heading="Everything You Want to Know About Celluma LED Light Therapy"
        subheading="Learn what Celluma feels like, how treatments work, when you may see results, and whether LED light therapy may be right for you."
        categories={cellumaFaqCategories}
      />
      <ReviewsSection prioritizeService="celluma" />
      <CtaSection />
    </>
  );
}
