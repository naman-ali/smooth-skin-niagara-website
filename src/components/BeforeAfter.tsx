"use client";

import React, { useCallback, useRef, useState } from "react";

export type BeforeAfterProps = {
  beforeSrc: string;
  afterSrc: string;
  title?: string;
  aspectRatio?: string;
};

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  title,
  aspectRatio = "4 / 5",
}: BeforeAfterProps) {
  const [percent, setPercent] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updateFromEvent = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPercent((x / rect.width) * 100);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => updateFromEvent(e.clientX);

  const onTouchMove = (e: React.TouchEvent) =>
    e.touches[0] && updateFromEvent(e.touches[0].clientX);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio,
          borderRadius: 14,
          overflow: "hidden",
          cursor: "ew-resize",
          background: "var(--olive-100)",
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        {/* Before image as the base layer */}
        <img
          src={beforeSrc}
          alt="Before"
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            pointerEvents: "none",
          }}
        />

        {/* After image clipped from the right */}
        <img
          src={afterSrc}
          alt="After"
          draggable={false}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            clipPath: `inset(0 0 0 ${percent}%)`,
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        {/* Labels */}
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            zIndex: 20,
            fontFamily: "var(--font-body)",
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#fff",
            background: "rgba(0,0,0,0.55)",
            padding: "5px 9px",
            borderRadius: 6,
          }}
        >
          Before
        </span>
        <span
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 20,
            fontFamily: "var(--font-body)",
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#fff",
            background: "rgba(0,0,0,0.55)",
            padding: "5px 9px",
            borderRadius: 6,
          }}
        >
          After
        </span>

        {/* Drag hint */}
        <span
          style={{
            position: "absolute",
            bottom: 12,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 20,
            fontFamily: "var(--font-body)",
            fontSize: 11,
            color: "rgba(255,255,255,0.95)",
            background: "rgba(0,0,0,0.35)",
            padding: "4px 10px",
            borderRadius: 12,
            whiteSpace: "nowrap",
          }}
        >
          Hover to reveal
        </span>

        {/* Slider line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${percent}%`,
            width: 2,
            transform: "translateX(-50%)",
            background: "rgba(255,255,255,0.95)",
            zIndex: 30,
            boxShadow: "0 0 6px rgba(0,0,0,0.2)",
            pointerEvents: "none",
          }}
        />

        {/* Drag handle */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: `${percent}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 40,
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
            pointerEvents: "none",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--olive-700)"
            strokeWidth="2"
          >
            <path d="M9 5l-7 7 7 7" />
            <path d="M15 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {title ? (
        <h4
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            fontWeight: 500,
            color: "var(--color-text-primary)",
            margin: 0,
            textAlign: "center",
          }}
        >
          {title}
        </h4>
      ) : null}
    </div>
  );
}
