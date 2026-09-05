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
      style={{
        position: "relative",
        padding: "90px 53px",
        overflow: "hidden",
        backgroundImage: "url(/assets/ashley-section-bg-4.png)",
        backgroundSize: "auto 118%",
        backgroundPosition: "center 8%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 32,
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "1 1 320px", minWidth: 280, maxWidth: 380 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 13,
              marginBottom: 22,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-brand-primary)",
                fontWeight: 700,
              }}
            >
              Meet Ashley
            </span>
            <span
              style={{
                width: 48,
                height: 1,
                background: "var(--color-border-strong)",
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 48,
              lineHeight: 1.1,
              color: "var(--color-text-primary)",
              margin: "0 0 8px",
              textShadow:
                "0 1px 12px var(--olive-50), 0 1px 3px var(--olive-50)",
            }}
          >
            Ashley Romano
          </h2>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: 22,
              lineHeight: 1.3,
              color: "var(--color-brand-deep)",
              margin: "0 0 22px",
              textShadow:
                "0 1px 12px var(--olive-50), 0 1px 3px var(--olive-50)",
            }}
          >
            The expert behind Smooth Skin Niagara
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--color-text-primary)",
              margin: "0 0 26px",
              textShadow:
                "0 1px 14px var(--olive-50), 0 1px 4px var(--olive-50), 0 1px 4px var(--olive-50)",
            }}
          >
            Ashley is the founder of Smooth Skin Niagara and personally performs
            every treatment. With more than 10 years of experience, she is known
            for her thoughtful, professional approach and her ability to make
            every client feel comfortable and confident right away.
          </p>
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
        <div style={{ flex: "0 1 32%", minWidth: 0 }} />
        <div
          style={{
            flex: "1 1 260px",
            minWidth: 260,
            maxWidth: 340,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {rightTestimonials.map((t, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={{ willChange: "transform" }}
            >
              <TestimonialQuote quote={t.quote} author={t.author} rating={5} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
