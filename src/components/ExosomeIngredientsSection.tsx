"use client";

import Image from "next/image";
import {
  Atom,
  Check,
  Droplet,
  Hexagon,
  Pill,
  ShieldCheck,
  Sprout,
} from "lucide-react";

const ingredients = [
  {
    title: "Peptides & Proteins",
    description: "Support skin structure",
    icon: Atom,
  },
  {
    title: "Growth Factors",
    description: "Encourage renewal",
    icon: Sprout,
  },
  {
    title: "High-Efficiency Nutrients",
    description: "Replenish essential support",
    icon: Hexagon,
  },
  {
    title: "Lipid Complex",
    description: "Help reinforce the barrier",
    icon: Droplet,
  },
  {
    title: "Vitamins",
    description: "Nourish recovering skin",
    icon: Pill,
  },
  {
    title: "Antioxidants",
    description: "Help defend against stress",
    icon: ShieldCheck,
  },
];

const introItems = [
  "Supports the skin's natural renewal cycle",
  "Delivers bioactive molecules where they are needed",
  "Helps improve the appearance of tone, texture and hydration",
  "Compatible with many professional aesthetic treatments",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center justify-center gap-4">
      <span className="h-px w-12 bg-[#667451]/70 sm:w-16" />
      <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#596849] sm:text-xs">
        {children}
      </p>
      <span className="h-px w-12 bg-[#667451]/70 sm:w-16" />
    </div>
  );
}

export default function ExosomeIngredientsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f2] py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-14 max-w-5xl text-center lg:mb-16">
          <Eyebrow>WHAT ARE EXOSOMES?</Eyebrow>

          <h2 className="text-balance text-[38px] font-light leading-[1.05] tracking-[-0.04em] text-[#171917] sm:text-5xl lg:text-[64px]">
            Nature&apos;s Cellular{" "}
            <span className="italic text-[#60704f]">Messengers.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[850px] text-base leading-7 text-[#61645f] sm:text-lg lg:text-xl lg:leading-8">
            Exosomes are microscopic, naturally occurring vesicles that act as
            messengers between cells. They carry a concentrated payload of
            growth factors, peptides, lipids and proteins — supporting
            communication that helps skin look smoother, firmer and more
            radiant.
          </p>

          <p className="mx-auto mt-4 max-w-[850px] text-base leading-7 text-[#61645f] sm:text-lg lg:text-xl lg:leading-8">
            My Skin Chemistry&apos;s milk-derived exosomes are formulated into a
            topical serum designed to elevate the results of aesthetic
            treatments. Used on their own or paired with microneedling, laser or
            other non-invasive procedures, exosomes help improve the look of
            tone, texture and hydration.
          </p>

          <ul className="mx-auto mt-8 flex w-full max-w-[850px] flex-col flex-wrap items-start gap-x-8 gap-y-3 text-left sm:flex-row sm:justify-center lg:gap-x-12">
            {introItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base text-[#61645f] sm:text-lg"
              >
                <span className="mt-1 text-[#5b6d48]">
                  <Check size={18} strokeWidth={2} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mb-14 max-w-5xl text-center lg:mb-16">
          <Eyebrow>What&apos;s Inside Exosomes</Eyebrow>

          <h3 className="text-balance text-[32px] font-light leading-[1.05] tracking-[-0.04em] text-[#171917] sm:text-4xl lg:text-[48px]">
            Targeted Ingredients.{" "}
            <span className="italic text-[#60704f]">Smarter Recovery.</span>
          </h3>

          <p className="mx-auto mt-6 max-w-[850px] text-base leading-7 text-[#61645f] sm:text-lg lg:text-xl lg:leading-8">
            A concentrated blend of skin-supporting ingredients selected to help
            nourish, protect and support the skin after professional treatments.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.35fr] lg:gap-14 xl:gap-20">
          <div className="relative mx-auto w-full max-w-[600px]">
            <div className="absolute left-0 top-[3%] z-20 hidden xl:block">
              <p className="text-[11px] font-semibold uppercase leading-[1.45] tracking-[0.25em] text-[#596849]">
                Healthier
                <br />
                Skin Tomorrow
              </p>

              <div className="ml-10 mt-3 h-20 w-px bg-[#7a876a]/50" />
            </div>

            <div className="relative aspect-square w-full">
              <Image
                src="/assets/exosomes/exosome-molecule.png"
                alt="Illustration representing exosome skin-supporting ingredients"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </div>

            <div className="mt-2 flex items-end justify-between gap-4">
              <p className="hidden text-[11px] font-semibold uppercase leading-[1.45] tracking-[0.25em] text-[#596849] xl:block">
                Science
                <br />
                For Real Results
              </p>

              <div className="mx-auto text-center">
                <p className="text-sm text-[#5d615d] sm:text-base">
                  Professional post-treatment support
                </p>

                <span className="mx-auto mt-3 block h-px w-14 bg-[#7a876a]/50" />
              </div>

              <div className="hidden w-[100px] xl:block" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {ingredients.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="
                  group
                  flex min-h-[150px] items-center gap-5
                  rounded-[28px]
                  border border-[#aab29d]
                  bg-white/55
                  px-6 py-7
                  backdrop-blur-[2px]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white/80
                  hover:shadow-[0_18px_45px_rgba(63,74,51,0.08)]
                  sm:px-7
                  lg:min-h-[160px]
                "
              >
                <div
                  className="
                    flex h-[76px] w-[76px] shrink-0
                    items-center justify-center
                    rounded-full bg-[#e9ede3]
                    text-[#5b6d48]
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                >
                  <Icon strokeWidth={1.8} className="h-8 w-8" />
                </div>

                <div>
                  <h3 className="text-[18px] font-semibold leading-tight tracking-[-0.02em] text-[#171917] sm:text-xl">
                    {title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-6 text-[#686b66] sm:text-base">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
