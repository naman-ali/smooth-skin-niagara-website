"use client";

import React, { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";


export type BeforeAfterProps = {
  beforeSrc: string;
  afterSrc: string;
  title?: string;
  aspectRatio?: string;
  objectPosition?: string;
  beforeClassName?: string;
  afterClassName?: string;
};

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  title,
  aspectRatio = "4 / 5",
  objectPosition = "center",
  beforeClassName,
  afterClassName,
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
    <div className="flex flex-col gap-[14px]">
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        className="relative w-full rounded-[14px] overflow-hidden bg-[var(--olive-100)] select-none" style={{ aspectRatio, cursor: "ew-resize", WebkitUserSelect: "none" }}
      >
        {/* Before image as the base layer */}
        <img
          src={beforeSrc}
          alt="Before"
          draggable={false}
          
          className={cn(beforeClassName, "absolute w-full h-[100%] object-cover pointer-events-none")} style={{ inset: 0, objectPosition }}
        />

        {/* After image clipped from the right */}
        <img
          src={afterSrc}
          alt="After"
          draggable={false}
          
          className={cn(afterClassName, "absolute w-full h-[100%] object-cover z-[10] pointer-events-none")} style={{ inset: 0, objectPosition, clipPath: `inset(0 0 0 ${percent}%)` }}
        />

        {/* Labels */}
        <span
          className="absolute top-[12px] left-[12px] z-[20] font-[var(--font-body)] text-[10px] font-extrabold tracking-[0.08em] uppercase text-[#fff] bg-[rgba(0,0,0,0.55)] pt-[5px] pr-[9px] pb-[5px] pl-[9px] rounded-[6px]"
        >
          Before
        </span>
        <span
          className="absolute top-[12px] right-[12px] z-[20] font-[var(--font-body)] text-[10px] font-extrabold tracking-[0.08em] uppercase text-[#fff] bg-[rgba(0,0,0,0.55)] pt-[5px] pr-[9px] pb-[5px] pl-[9px] rounded-[6px]"
        >
          After
        </span>

        {/* Drag hint */}
        <span
          className="absolute bottom-[12px] left-[50%] z-[20] font-[var(--font-body)] text-[11px] text-[rgba(255,255,255,0.95)] bg-[rgba(0,0,0,0.35)] pt-[4px] pr-[10px] pb-[4px] pl-[10px] rounded-[12px] whitespace-nowrap" style={{ transform: "translateX(-50%)" }}
        >
          Hover to reveal
        </span>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[rgba(255,255,255,0.95)] z-[30] pointer-events-none" style={{ left: `${percent}%`, transform: "translateX(-50%)", boxShadow: "0 0 6px rgba(0,0,0,0.2)" }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-[50%] z-[40] w-[38px] h-[38px] rounded-[50%] bg-[#fff] flex items-center justify-center pointer-events-none" style={{ left: `${percent}%`, transform: "translate(-50%, -50%)", boxShadow: "0 2px 10px rgba(0,0,0,0.25)" }}
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
          className="font-[var(--font-display)] text-[20px] font-medium text-[var(--color-text-primary)] m-0 text-center"
        >
          {title}
        </h4>
      ) : null}
    </div>
  );
}
