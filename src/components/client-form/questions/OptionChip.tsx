"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A single tappable, pill-shaped option used by single/multi-select
 * questions. Deliberately compact (not a full card) but with a large
 * enough touch target for phone/iPad use.
 */
export function OptionChip({
  label,
  selected,
  onClick,
  role = "checkbox",
  compact = false,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  role?: "radio" | "checkbox";
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      role={role}
      aria-checked={selected}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        compact
          ? "min-h-8 px-3 py-1 text-xs"
          : "min-h-11 px-4 py-2 text-[15px]",
        selected
          ? "border-primary bg-primary text-primary-foreground"
          : "border-input bg-background text-foreground hover:bg-accent",
      )}
    >
      {selected ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : null}
      {label}
    </button>
  );
}
