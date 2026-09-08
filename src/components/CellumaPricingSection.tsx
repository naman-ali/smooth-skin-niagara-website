"use client";

import { Clock, Leaf } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const options = [
  {
    duration: "15 Minutes",
    price: "$30",
    description:
      "A quick targeted LED session for smaller treatment areas or a simple add-on.",
    note: "Great for short, focused treatment time.",
    popular: false,
  },
  {
    duration: "20 Minutes",
    price: "$40",
    description:
      "A balanced standalone session for facial LED treatments and overall skin support.",
    note: "A great option for regular Celluma sessions.",
    popular: true,
  },
  {
    duration: "30 Minutes",
    price: "$60",
    description:
      "Our most complete Celluma session for a more comprehensive treatment or larger area.",
    note: "Ideal when more treatment time is recommended.",
    popular: false,
  },
];

export function CellumaPricingSection() {
  return (
    <section
      className={cn(
        "px-3 lg:px-[53px]",
        "pt-[80px] pb-[80px] bg-[var(--olive-100)]",
      )}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <header className="text-center mb-[48px]">
          <div className="flex items-center justify-center gap-[14px] mb-[24px]">
            <span className="w-[40px] h-[1px] bg-[var(--color-border-strong)]" />
            <span className="font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)]">
              Celluma Treatment Options
            </span>
            <span className="w-[40px] h-[1px] bg-[var(--color-border-strong)]" />
          </div>

          <h2
            className={cn(
              "text-center text-[36px] leading-[1.1] lg:text-[44px]",
              "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-0 mr-0 mb-[16px] ml-0",
            )}
          >
            Choose the Session That Fits Your Goals
          </h2>

          <p className="font-[var(--font-body)] text-[16px] leading-[1.6] text-[var(--color-text-secondary)] max-w-[680px] mt-0 mr-auto mb-0 ml-auto">
            Simple, non-invasive LED light therapy sessions designed around your
            skin concerns, treatment area and goals. Ashley can help recommend
            the most suitable session length for you.
          </p>
        </header>

        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            "gap-[24px] mb-[40px]",
          )}
        >
          {options.map((option) => (
            <div
              key={option.duration}
              className="flex flex-col items-center p-[36px] bg-[#fffdf9] rounded-[22px]"
              style={{
                border: option.popular
                  ? "1px solid var(--olive-600)"
                  : "1px solid var(--color-border)",
                boxShadow: option.popular
                  ? "0 8px 24px rgba(37,38,36,0.08)"
                  : "0 4px 20px rgba(37,38,36,0.03)",
              }}
            >
              {option.popular && (
                <span className="inline-block font-[var(--font-body)] text-[10px] font-extrabold tracking-[0.14em] uppercase text-[#fff] bg-[var(--olive-700)] pt-[5px] pr-[12px] pb-[5px] pl-[12px] rounded-[999px] mb-[18px]">
                  Most Popular
                </span>
              )}

              <Clock
                size={22}
                strokeWidth={1.5}
                style={{
                  color: "var(--color-brand-primary)",
                  marginBottom: 18,
                  opacity: 0.9,
                }}
              />

              <h3 className="font-[var(--font-display)] text-[28px] font-medium text-[var(--color-text-primary)] mt-0 mr-0 mb-[8px] ml-0">
                {option.duration}
              </h3>

              <p
                className="font-[var(--font-display)] text-[46px] font-normal leading-[1.1] mt-0 mr-0 mb-[16px] ml-0"
                style={{
                  color: option.popular
                    ? "var(--olive-700)"
                    : "var(--color-text-primary)",
                }}
              >
                {option.price}
              </p>

              <p className="font-[var(--font-body)] text-[15px] leading-[1.55] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[12px] ml-0 max-w-[280px]">
                {option.description}
              </p>

              <p
                className="font-[var(--font-body)] text-[13px] leading-[1.5] text-[var(--olive-500)] mt-auto mr-0 mb-0 ml-0"
                style={{ fontStyle: "italic" }}
              >
                {option.note}
              </p>
            </div>
          ))}
        </div>

        <div
          className="flex flex-wrap items-center gap-[18px] pt-[22px] pr-[28px] pb-[22px] pl-[28px] bg-[#fffdf9] rounded-[16px] mb-[48px]"
          style={{ border: "1px solid var(--color-border)" }}
        >
          <Leaf
            size={20}
            strokeWidth={1.5}
            style={{
              color: "var(--color-brand-primary)",
              flexShrink: 0,
              opacity: 0.85,
            }}
          />
          <p className="font-[var(--font-body)] text-[15px] leading-[1.6] text-[var(--color-text-secondary)] m-0 flex-[1_1_0] min-w-[240px]">
            Celluma sessions may also be added to selected treatments when
            appropriate. There is no downtime, and treatment is designed to be
            relaxing and non-invasive.
          </p>
        </div>

        <p className="flex items-center justify-center gap-[12px] font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-center text-[var(--olive-500)] opacity-[0.8] m-0">
          <span className="w-[40px] h-[1px] bg-[var(--color-border-strong)]" />
          Science + Skin + Wellness
          <span className="w-[40px] h-[1px] bg-[var(--color-border-strong)]" />
        </p>
      </div>
    </section>
  );
}
