"use client";

import { BeforeAfter } from "@/components/BeforeAfter";
import * as React from "react";

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
        style={{
          maxWidth,
          margin: "0 auto",
        }}
      >
        {(eyebrow || heading || subheading) && (
          <header
            style={{
              textAlign: "center",
              marginBottom: heading ? 48 : 0,
            }}
          >
            {eyebrow && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    width: 40,
                    height: 1,
                    background: "var(--color-border-strong)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--color-brand-primary)",
                  }}
                >
                  {eyebrow}
                </span>
                <span
                  style={{
                    width: 40,
                    height: 1,
                    background: "var(--color-border-strong)",
                  }}
                />
              </div>
            )}

            {heading && (
              <h2
                className="text-center text-[36px] leading-[1.1] lg:text-[44px]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  color: "var(--color-text-primary)",
                  margin: "0 0 16px",
                }}
              >
                {heading}
              </h2>
            )}

            {subheading && (
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--color-text-secondary)",
                  maxWidth: 680,
                  margin: "0 auto",
                }}
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
