"use client";

import React, { useEffect, useRef } from "react";
import * as TestimonialQuoteModule from "@/components/design-system/trust/TestimonialQuote";

const TestimonialQuote: any = (TestimonialQuoteModule as any).TestimonialQuote;

export function AshleySection() {
  const rightTestimonials = [
    {
      quote: (
        <>
          Ashley is <strong>extremely kind, knowledgeable</strong>, and truly
          amazing at what she does. She makes you feel{" "}
          <strong>comfortable instantly</strong>.
        </>
      ),
      author: "Bri McKinnon",
    },
    {
      quote: (
        <>
          Ashley made me <strong>feel at ease right away</strong>, talking me
          through appointments and the entire process.
        </>
      ),
      author: "Stephanie D",
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const onFrame = () => {
      if (window.innerWidth < 1024) {
        cardRefs.current.forEach((el) => {
          if (el) el.style.transform = "none";
        });
        raf = requestAnimationFrame(onFrame);
        return;
      }
      const now = performance.now() / 1000;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const phase = i * Math.PI;
        const loopX = Math.sin(now * 0.8 + phase) * 6;
        const loopY = Math.cos(now * 0.6 + phase) * 5;

        const mouseX = (mouse.current.x / window.innerWidth - 0.5) * 14;
        const mouseY = (mouse.current.y / window.innerHeight - 0.5) * 12;
        el.style.transform = `translate3d(${loopX + mouseX}px, ${loopY + mouseY}px, 0)`;
        el.style.willChange = "transform";
      });
      raf = requestAnimationFrame(onFrame);
    };
    raf = requestAnimationFrame(onFrame);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="relative pt-[90px] px-3 pb-[90px] lg:px-[53px] overflow-hidden bg-none lg:bg-[url('/assets/ashley-section-bg-4.png')] bg-no-repeat"
      style={{ backgroundSize: "auto 118%", backgroundPosition: "center 8%" }}
    >
      <div className="relative max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto flex flex-wrap gap-[32px] items-start">
        <div className="w-full min-w-0 lg:flex-[1_1_320px] lg:min-w-[280px] lg:max-w-[380px]">
          <div className="flex items-center gap-[13px] mb-[22px]">
            <span className="font-[var(--font-body)] text-[12px] tracking-[0.16em] uppercase text-[var(--color-brand-primary)] font-bold">
              Meet Ashley
            </span>
            <span className="w-[48px] h-[1px] bg-[var(--color-border-strong)]" />
          </div>
          <h2
            className="font-[var(--font-display)] font-medium text-[36px] leading-[1.1] lg:text-[48px] text-[var(--color-text-primary)] mt-0 mr-0 mb-[8px] ml-0"
            style={{
              textShadow:
                "0 1px 12px var(--olive-50), 0 1px 3px var(--olive-50)",
            }}
          >
            Ashley
          </h2>
          <h3
            className="font-[var(--font-display)] font-normal text-[22px] leading-[1.3] text-[var(--color-brand-deep)] mt-0 mr-0 mb-[22px] ml-0"
            style={{
              textShadow:
                "0 1px 12px var(--olive-50), 0 1px 3px var(--olive-50)",
            }}
          >
            The expert behind Smooth Skin Niagara
          </h3>
          <p
            className="font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-primary)] mt-0 mr-0 mb-[26px] ml-0"
            style={{
              textShadow:
                "0 1px 14px var(--olive-50), 0 1px 4px var(--olive-50), 0 1px 4px var(--olive-50)",
            }}
          >
            Ashley is the founder of Smooth Skin Niagara and personally performs
            every treatment. With more than 10 years of experience, she is known
            for her thoughtful, professional approach and her ability to make
            every client feel comfortable and confident right away.
          </p>
          <div className="hidden lg:block">
            <TestimonialQuote
              quote={
                <>
                  Ashley was <strong>clear, professional</strong>, and I truly
                  appreciated her <strong>patience and guidance</strong>. What a
                  wonderful human being.
                </>
              }
              author="Anderson Lopez Pena"
              rating={5}
            />
          </div>
        </div>
        <img
          src="/assets/ashley-section-bg-4.png"
          alt="Ashley portrait"
          className="w-full max-w-[440px] h-auto object-contain mx-auto lg:hidden"
        />
        <div className="hidden lg:block lg:flex-[0_1_32%] lg:min-w-0" />
        <div className="hidden lg:flex w-full min-w-0 lg:flex-[1_1_260px] lg:min-w-[260px] lg:max-w-[340px] flex-col gap-[18px]">
          {rightTestimonials.map((t, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="will-change-transform"
            >
              <TestimonialQuote quote={t.quote} author={t.author} rating={5} />
            </div>
          ))}
        </div>
        <div className="w-full lg:hidden flex flex-col gap-[18px]">
          <TestimonialQuote
            quote={
              <>
                Ashley was <strong>clear, professional</strong>, and I truly
                appreciated her <strong>patience and guidance</strong>. What a
                wonderful human being.
              </>
            }
            author="Anderson Lopez Pena"
            rating={5}
          />
          {rightTestimonials.map((t, i) => (
            <TestimonialQuote
              key={i}
              quote={t.quote}
              author={t.author}
              rating={5}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
