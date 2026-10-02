"use client";

import Header from "@/components/Header";
import { AshleySection } from "@/components/AshleySection";
import { EyelashHero } from "@/components/EyelashHero";
import { FindYourLook } from "@/components/FindYourLook";
import { EyelashResults } from "@/components/EyelashResults";
import { EyelashFaq } from "@/components/EyelashFaq";
import { CtaSection } from "@/components/CtaSection";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function EyelashExtensionsPage() {
  return (
    <>
      <Header />
      <main>
        <EyelashHero />
        <FindYourLook id="pricing" />
        <EyelashResults />
        <AshleySection />
        <ReviewsSection prioritizeService="lashes" />
        <EyelashFaq />
        <CtaSection />
      </main>
    </>
  );
}
