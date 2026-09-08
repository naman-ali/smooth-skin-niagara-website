"use client";

import { BeforeAfter } from "@/components/BeforeAfter";
import * as React from "react";
import { cn } from "@/lib/utils";


export type BeforeAfterItem = {
  beforeSrc: string;
  afterSrc: string;
  title?: string;
  aspectRatio?: string;
  objectPosition?: string;
  beforeClassName?: string;
  afterClassName?: string;
};

export interface BeforeAfterSectionProps {
  eyebrow?: string;
  heading?: React.ReactNode;
  subheading?: string;
  items: BeforeAfterItem[];
  columns?: 1 | 2 | 3 | 4;
  background?: string;
  padding?: { top?: number; bottom?: number };
  maxWidth?: string | number;
  gap?: number;
}

const columnsClass: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

export function BeforeAfterSection({
  eyebrow,
  heading,
  subheading,
  items,
  columns = 3,
  background = "var(--olive-50)",
  padding = { top: 80, bottom: 80 },
  maxWidth = "var(--container-max)",
  gap = 32,
}: BeforeAfterSectionProps) {
  const gridClass = columnsClass[columns] ?? columnsClass[3];

  return (
    <section
      className="px-7 lg:px-[53px]"
      style={{
        paddingTop: padding.top,
        paddingBottom: padding.bottom,
        background,
      }}
    >
      <div
        className="mt-0 mr-auto mb-0 ml-auto" style={{ maxWidth }}
      >
        {(eyebrow || heading || subheading) && (
          <header
            className="text-center" style={{ marginBottom: heading ? 48 : 0 }}
          >
            {eyebrow && (
              <div
                className="flex items-center justify-center gap-[14px] mb-[24px]"
              >
                <span
                  className="w-[40px] h-[1px] bg-[var(--color-border-strong)]"
                />
                <span
                  className="font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)]"
                >
                  {eyebrow}
                </span>
                <span
                  className="w-[40px] h-[1px] bg-[var(--color-border-strong)]"
                />
              </div>
            )}

            {heading && (
              <h2
                
                className={cn("text-center text-[36px] leading-[1.1] lg:text-[44px]", "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-0 mr-0 mb-[16px] ml-0")}
              >
                {heading}
              </h2>
            )}

            {subheading && (
              <p
                className="font-[var(--font-body)] text-[16px] leading-[1.6] text-[var(--color-text-secondary)] max-w-[680px] mt-0 mr-auto mb-0 ml-auto"
              >
                {subheading}
              </p>
            )}
          </header>
        )}

        <div className={`grid ${gridClass}`} style={{ gap }}>
          {items.map((item, index) => (
            <BeforeAfter
              key={item.title || index}
              beforeSrc={item.beforeSrc}
              afterSrc={item.afterSrc}
              title={item.title}
              aspectRatio={item.aspectRatio}
              objectPosition={item.objectPosition}
              beforeClassName={item.beforeClassName}
              afterClassName={item.afterClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
