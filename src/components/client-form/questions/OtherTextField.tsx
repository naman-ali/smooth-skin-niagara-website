"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * Free-text field revealed when an "Other" option is selected. Purely
 * presentational/controlled \u2014 the owning select component manages the
 * value so it can be cleared as soon as "Other" is deselected.
 */
export function OtherTextField({
  id,
  label = "Please specify",
  placeholder,
  value,
  onChange,
  required,
  compact = false,
}: {
  id: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "mt-1 max-w-md border-l-2 border-primary/30 pl-4",
        compact ? "space-y-1" : "space-y-1.5",
      )}
    >
      <Label
        htmlFor={id}
        className={cn(
          "font-medium text-foreground",
          compact ? "text-xs" : "text-sm",
        )}
      >
        {label}
        {required ? (
          <span aria-hidden="true" className="text-primary">
            {" "}
            *
          </span>
        ) : null}
      </Label>
      <Input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(compact ? "h-8 text-sm" : "h-11 text-base")}
      />
    </div>
  );
}
