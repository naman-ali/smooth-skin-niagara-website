"use client";

import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { FaqSection } from "@/components/FaqSection";
import Header from "@/components/Header";
import { CellumaHero } from "@/components/CellumaHero";
import { CellumaPricingSection } from "@/components/CellumaPricingSection";
import { CellumaScienceSection } from "@/components/CellumaScienceSection";
import { cellumaFaqCategories } from "@/lib/celluma-faq";

const cellumaResults = [
  {
    title: "Skin Rejuvenation",
    beforeSrc: "/assets/hero-treatment.png",
    afterSrc: "/assets/hero-treatment-olive.png",
  },
  {
    title: "Acne Support",
    beforeSrc: "/assets/hero-treatment.png",
    afterSrc: "/assets/hero-treatment-olive.png",
  },
  {
    title: "Overall Glow",
    beforeSrc: "/assets/hero-treatment.png",
    afterSrc: "/assets/hero-treatment-olive.png",
  },
];

export default function CellumaLedLightTherapyPage() {
  return (
    <>
      <Header />
      <CellumaHero />
      <CellumaScienceSection />
      <BeforeAfterSection
        eyebrow="Real Client Results"
        heading="Before & After"
        subheading="See how Celluma LED light therapy can support healthier-looking skin with real before-and-after results from Smooth Skin Niagara clients."
        items={cellumaResults}
      />
      <CellumaPricingSection />
      <FaqSection
        eyebrow="Frequently Asked Questions"
        heading="Everything You Want to Know About Celluma LED Light Therapy"
        subheading="Learn what Celluma feels like, how treatments work, when you may see results, and whether LED light therapy may be right for you."
        categories={cellumaFaqCategories}
      />
    </>
  );
}
