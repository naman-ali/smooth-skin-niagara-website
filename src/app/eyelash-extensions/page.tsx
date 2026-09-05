"use client";

import Header from "@/components/Header";
import { AshleySection } from "@/components/AshleySection";
import { EyelashHero } from "@/components/EyelashHero";
import { FindYourLook } from "@/components/FindYourLook";
import { EyelashResults } from "@/components/EyelashResults";
import { EyelashFaq } from "@/components/EyelashFaq";
import { CtaSection } from "@/components/CtaSection";

export default function EyelashExtensionsPage() {
  return (
    <>
      <Header />
      <EyelashHero />
      <AshleySection />
      <FindYourLook id="pricing" />
      <EyelashResults />
      <EyelashFaq />
      <CtaSection />
    </>
  );
}
