"use client";

import { Award } from "lucide-react";
import Header from "@/components/Header";
import { CtaSection } from "@/components/CtaSection";
import { ReviewsSection } from "@/components/ReviewsSection";

const certificates = [
  "DermaRoller Certification",
  "OxyGeneo Certification",
  "OxyGeneo Advanced Certification",
  "Laser Hair Removal Certification",
  "Lash Master Xtreme Lashes",
  "Russian Volume Eyelash Excellence",
  "Lash Lift Sugarlash",
  "Waxing Beauty Institute",
  "eXtreme Lashes Certified Lash Stylist",
];

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="bg-olive-50">
        {/* Bio / Intro */}
        <section className="relative overflow-hidden px-3 py-[90px] md:px-10">
          <div className="mx-auto max-w-[var(--container-max)]">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="mb-[22px] flex items-center gap-[13px]">
                  <span className="font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary)]">
                    Meet Ashley
                  </span>
                  <span className="h-[1px] w-[48px] bg-[var(--color-border-strong)]" />
                </div>

                <h1 className="mb-[8px] font-[var(--font-display)] text-[44px] lg:text-[48px] font-medium leading-[1.1] text-[var(--color-text-primary)]">
                  Ashley
                </h1>
                <p className="mb-[26px] font-[var(--font-body)] text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">
                  Founder of Smooth Skin Niagara
                </p>

                <div className="space-y-[18px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-primary)]">
                  <p>
                    Ashley has been trained and certified with the very best in
                    all aspects of services offered. Being passionate to deliver
                    results, advise and give friendly relating experiences is
                    what she most believes in. Xtreme Lashes, Alma lasers and
                    DermaSpark are world renowned, leaders in industries Gold
                    standards. “I treat my clients the way I would want to be
                    treated.”
                  </p>

                  <p>
                    With 10 years in the industry and ongoing education for the
                    business, over the years Ashley is proud to complete all
                    certification for Xtreme Lashes, Laser hair removal, skin
                    care and microneedling. Along with electrolysis and
                    providing in house education training with Xtreme Lashes in
                    the Niagara Region.
                  </p>

                  <p>
                    Being able to treat a wide variety of clients is important
                    to Ashley as we all have different needs, wants and looks
                    making each service available custom tailored for every
                    client that walks through the door. Whether you desire a
                    soft classic set of lashes, annoying stubborn hair to be
                    gone for good or treating wrinkles, acne or tightening skin
                    under the eye area, Smooth Skin Niagara has made a one stop
                    shop for all your beauty needs!
                  </p>
                </div>

                <blockquote className="mt-[32px] border-l-2 border-[var(--olive-600)] pl-[20px] font-[var(--font-display)] text-[22px] italic leading-[1.4] text-[var(--color-text-primary)]">
                  &ldquo;My mission is to help you look and feel your best
                  whether it be enhancing your natural look or providing you
                  with your hair removal needs. Experience relaxing, beautiful
                  and effective treatments at Smooth Skin Niagara.&rdquo;
                  <footer className="mt-[8px] font-[var(--font-body)] text-[14px] not-italic font-semibold text-[var(--color-text-secondary)]">
                    — Ashley
                  </footer>
                </blockquote>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-olive-200">
                  <img
                    src="/assets/ashley-about.jpg"
                    alt="Ashley, founder of Smooth Skin Niagara"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-olive-100 px-3 py-[90px] md:px-10">
          <div className="mx-auto max-w-[var(--container-max)]">
            <div className="mb-[22px] flex items-center gap-[13px]">
              <span className="font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary)]">
                Certifications
              </span>
              <span className="h-[1px] w-[48px] bg-[var(--color-border-strong)]" />
            </div>

            <h2 className="mb-[48px] font-[var(--font-display)] text-[40px] font-normal leading-[1.1] text-[var(--color-text-primary)]">
              Training &amp; Certification
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-start gap-[14px] rounded-[14px] border border-[var(--color-border)] bg-olive-50 p-6"
                >
                  <Award
                    size={24}
                    strokeWidth={1.5}
                    className="mt-[2px] shrink-0 text-[var(--color-brand-primary)]"
                  />
                  <span className="font-[var(--font-body)] text-[16px] font-medium text-[var(--color-text-primary)]">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social / Mission */}
        <section className="bg-ink-900 px-3 py-[90px] md:px-10">
          <div className="mx-auto max-w-[var(--container-max)]">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-[22px] font-[var(--font-display)] text-[40px] font-normal leading-[1.1] text-white">
                  Connect with me on Social Media
                </h2>

                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/smooth_skin_niagara/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[var(--olive-700)] font-[var(--font-body)] text-[13px] font-semibold text-[var(--olive-100)] transition-colors duration-300 hover:bg-olive-700 hover:text-white"
                  >
                    IG
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="inline-flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[var(--olive-700)] font-[var(--font-body)] text-[13px] font-semibold text-[var(--olive-100)] transition-colors duration-300 hover:bg-olive-700 hover:text-white"
                  >
                    FB
                  </a>
                </div>
              </div>

              <blockquote className="font-[var(--font-display)] text-[24px] italic leading-[1.4] text-white">
                &ldquo;My mission is to help you look and feel your best whether
                it be enhancing your natural look or providing you with your
                hair removal needs. Experience relaxing, beautiful and effective
                treatments at Smooth Skin Niagara.&rdquo;
                <footer className="mt-[12px] font-[var(--font-body)] text-[15px] not-italic font-semibold text-[var(--olive-200)]">
                  — Ashley
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* WALAD */}
        <section className="px-3 py-[90px] md:px-10">
          <div className="mx-auto max-w-[var(--container-max)]">
            <div className="rounded-[14px] border border-[var(--color-border)] bg-olive-100 p-8 md:p-12">
              <div className="mb-[14px] flex items-center gap-[13px]">
                <span className="font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary)]">
                  WALAD
                </span>
                <span className="h-[1px] w-[48px] bg-[var(--color-border-strong)]" />
              </div>

              <h2 className="mb-[14px] font-[var(--font-display)] text-[36px] font-normal leading-[1.1] text-[var(--color-text-primary)]">
                Proud member of WALAD
              </h2>

              <p className="max-w-[720px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
                Proud member of WALAD (World Association of Lash and
                Development) for continuing education and keeping up to date
                with the lash industry.
              </p>
            </div>
          </div>
        </section>

        <ReviewsSection />
        <CtaSection />
      </main>
    </>
  );
}
