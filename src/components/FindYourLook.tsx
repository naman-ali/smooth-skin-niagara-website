"use client";

import React from "react";
import { cn } from "@/lib/utils";


interface TreatmentCard {
  badge: string;
  image: string;
  name: string;
  descriptor: string;
  description: string;
  priceLabel: string;
  price: string;
  maintenance: string;
  policy: string;
}

const treatments: TreatmentCard[] = [
  {
    badge: "LASH EXTENSIONS",
    image: "/assets/Classic-Set.jpg",
    name: "Classic",
    descriptor: "SOFT & NATURAL",
    description:
      "One extension per natural lash for clean, effortless definition.",
    priceLabel: "FULL SET",
    price: "$150",
    maintenance: "2 Week Fill $50 · 3 Week Fill $55 · Removal $25",
    policy: "After 4 weeks, full set pricing applies.",
  },
  {
    badge: "LASH EXTENSIONS",
    image: "/assets/Hybrid-Full-Set.jpeg",
    name: "Hybrid",
    descriptor: "TEXTURED & FULLER",
    description:
      "A blend of Classic and Volume techniques for added fullness with a soft, dimensional finish.",
    priceLabel: "FULL SET",
    price: "$160",
    maintenance: "2 Week Fill $70 · 3 Week Fill $80 · Removal $25",
    policy: "After 4 weeks, full set pricing applies.",
  },
  {
    badge: "LASH EXTENSIONS",
    image: "/assets/Volume-Full-Set.jpeg",
    name: "Volume",
    descriptor: "FULL & FLUFFY",
    description:
      "Lightweight volume fans create a fuller, softer look that can be customized from refined to more dramatic.",
    priceLabel: "FULL SET",
    price: "$190",
    maintenance: "2 Week Fill $80 · 3 Week Fill $100 · Removal $25",
    policy: "After 4 weeks, full set pricing applies.",
  },
  {
    badge: "NATURAL LASH TREATMENT",
    image: "/assets/Lash-Lift-Tint.jpeg",
    name: "Lash Lift & Tint",
    descriptor: "NATURALLY LIFTED & DEFINED",
    description:
      "Enhance the curl, shape and definition of your own lashes without adding extensions.",
    priceLabel: "TREATMENT",
    price: "$90",
    maintenance: "Enhances your natural lashes without extensions.",
    policy: "",
  },
];

function SectionEyebrow() {
  return (
    <div
      
      className={cn("mb-6 flex items-center justify-center gap-4", "font-[var(--font-body)]")}
    >
      <span  className={cn("h-px w-12", "bg-[var(--olive-600)]")} />
      <span
        
        className={cn("text-[11px] font-semibold uppercase tracking-[0.16em]", "text-[var(--olive-600)]")}
      >
        FIND YOUR LOOK
      </span>
      <span  className={cn("h-px w-12", "bg-[var(--olive-600)]")} />
    </div>
  );
}

function TreatmentCard({ card }: { card: TreatmentCard }) {
  return (
    <div
      
      className={cn("group flex flex-col overflow-hidden transition-all duration-200 ease-out hover:-translate-y-[3px]", "bg-[var(--olive-100)] rounded-[24px]")} style={{ border: "1px solid var(--olive-300)", boxShadow: "0 1px 2px rgba(37,38,36,0.04)" }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={card.image}
          alt={card.name}
          className="h-full w-full object-cover"
        />
        <span
          
          className={cn("absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em]", "bg-[rgba(251,250,247,0.92)] text-[var(--olive-700)] font-[var(--font-body)]")}
        >
          {card.badge}
        </span>
      </div>

      <div
        
        className={cn("flex flex-col items-center px-6 pb-8 pt-6 text-center", "gap-[4px]")}
      >
        <h3
          
          className={cn("font-normal", "font-[var(--font-display)] text-[38px] leading-[1.1] text-[var(--ink-900)] m-0")}
        >
          {card.name}
        </h3>

        <span
          
          className={cn("text-[12px] font-semibold uppercase tracking-[0.16em]", "font-[var(--font-body)] text-[var(--olive-600)] mb-[8px]")}
        >
          {card.descriptor}
        </span>

        <p
          
          className={cn("text-[15px] leading-relaxed", "font-[var(--font-body)] text-[var(--ink-600)] mt-0 mr-0 mb-[24px] ml-0 max-w-[280px]")}
        >
          {card.description}
        </p>

        <span
          
          className={cn("h-px w-12", "bg-[var(--olive-300)] mb-[20px]")}
        />

        <span
          
          className={cn("text-[11px] font-semibold uppercase tracking-[0.16em]", "font-[var(--font-body)] text-[var(--ink-600)]")}
        >
          {card.priceLabel}
        </span>

        <span
          
          className={cn("font-normal", "font-[var(--font-display)] text-[50px] leading-[1.05] text-[var(--ink-900)] mt-[4px] mr-0 mb-[12px] ml-0")}
        >
          {card.price}
        </span>

        <p
          
          className={cn("text-sm leading-relaxed", "font-[var(--font-body)] text-[var(--ink-600)] m-0")}
        >
          {card.maintenance}
        </p>

        {card.policy && (
          <p
            
            className={cn("mt-3 text-xs italic", "font-[var(--font-body)] text-[var(--ink-600)] m-0")}
          >
            {card.policy}
          </p>
        )}
      </div>
    </div>
  );
}

export function FindYourLook({ id }: { id?: string }) {
  return (
    <section
      id={id}
      
      className={cn("py-24 md:py-32", "bg-[var(--olive-50)]")}
    >
      <div  className={cn("mx-auto w-full px-6 lg:px-12", "max-w-[1400px]")}>
        <div className="mb-16 flex flex-col items-center text-center">
          <SectionEyebrow />

          <h2
            
            className={cn("font-normal", "font-[var(--font-display)] text-[60px] leading-[1.05] text-[var(--ink-900)] mt-0 mr-0 mb-[24px] ml-0 text-center")}
          >
            Lashes,{" "}
            <em
              
              className={cn("font-normal italic", "text-[var(--olive-700)]")}
            >
              Your Way.
            </em>
          </h2>

          <p
            
            className={cn("text-lg leading-relaxed", "font-[var(--font-body)] text-[var(--ink-600)] max-w-[720px] text-center m-0")}
          >
            Whether you want barely-there definition or a fuller, more dramatic
            look, every set is customized to suit your eyes and natural lashes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {treatments.map((t) => (
            <TreatmentCard key={t.name} card={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
