"use client";

import * as React from "react";
import { cn } from "@/lib/utils";


const wavelengths = [
  {
    label: "BLUE LIGHT",
    nm: "465 nm",
    color: "#3B82F6",
    benefit: "Targets acne-associated bacteria",
    copy: "Used for acne-focused treatments and clearer-looking skin.",
  },
  {
    label: "RED LIGHT",
    nm: "640 nm",
    color: "#EF4444",
    benefit: "Supports skin rejuvenation",
    copy: "Used to support the appearance of fine lines and overall skin quality.",
  },
  {
    label: "NEAR-INFRARED LIGHT",
    nm: "880 nm",
    color: "#B76E79",
    benefit: "Reaches deeper tissue",
    copy: "Used to support circulation and temporary relief of muscle and joint discomfort.",
  },
];

export function CellumaScienceSection() {
  return (
    <section
      
      className={cn("px-7 lg:px-[53px]", "pt-[80px] pb-[80px] bg-[#fdfaf3]")}
    >
      <div
        className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto"
      >
        <header className="text-center mb-[48px]">
          <span
            className="inline-block font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand-primary)] mb-[14px]"
          >
            THE SCIENCE OF LIGHT
          </span>

          <h2
            
            className={cn("text-center text-[40px] leading-[1.1] lg:text-5xl", "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-0 mr-0 mb-[12px] ml-0")}
          >
            <span className="block">Three Wavelengths.</span>
            <span
              className="block text-[var(--olive-600)]" style={{ fontStyle: "italic" }}
            >
              Different Depths. One Treatment.
            </span>
          </h2>

          <p
            className="font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-primary)] max-w-[760px] mt-0 mr-auto mb-0 ml-auto"
          >
            Celluma combines blue, red and near-infrared LED light. Each
            wavelength is absorbed differently by the skin and tissue, allowing
            treatment to be tailored to concerns such as acne, visible signs of
            aging and discomfort.
          </p>
        </header>

        <img
          src="/assets/celluma-3-lights.jpg"
          alt="Celluma LED wavelengths penetrating skin at different depths"
          className="block w-full max-w-[900px] h-auto mt-0 mr-auto mb-[48px] ml-auto"
        />

        <div
          
          className={cn("flex flex-col lg:flex-row", "justify-center mb-[64px]")}
        >
          {wavelengths.map((item, index) => (
            <React.Fragment key={item.label}>
              <div
                
                className={cn("box-border w-full px-6 py-8 text-center lg:flex-1 lg:w-auto", "min-w-0")}
              >
                <span
                  className="inline-block w-[8px] h-[8px] rounded-[50%] mb-[16px]" style={{ background: item.color }}
                />
                <p
                  className="font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-text-primary)] mt-0 mr-0 mb-[8px] ml-0"
                >
                  {item.label}
                </p>
                <p
                  className="font-[var(--font-display)] text-[36px] font-normal leading-[1.1] mt-0 mr-0 mb-[16px] ml-0" style={{ color: item.color }}
                >
                  {item.nm}
                </p>
                <h3
                  className="font-[var(--font-display)] text-[22px] font-medium leading-[1.2] text-[var(--color-text-primary)] mt-0 mr-0 mb-[8px] ml-0"
                >
                  {item.benefit}
                </h3>
                <p
                  className="font-[var(--font-body)] text-[16px] leading-[1.5] text-[var(--color-text-secondary)] m-0"
                >
                  {item.copy}
                </p>
              </div>

              {index < wavelengths.length - 1 && (
                <>
                  <div
                    
                    className={cn("hidden lg:block", "w-[1px] bg-[var(--color-border)]")} style={{ alignSelf: "stretch" }}
                  />
                  <div
                    
                    className={cn("block lg:hidden", "h-[1px] bg-[var(--color-border)]")}
                  />
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        <p
          className="font-[var(--font-body)] text-[11px] font-bold tracking-[0.22em] uppercase text-center text-[var(--olive-500)] opacity-[0.8] m-0"
        >
          &mdash;&mdash;&mdash;&mdash; NATURAL LIGHT. REAL RESULTS.
          &mdash;&mdash;&mdash;&mdash;
        </p>
      </div>
    </section>
  );
}
