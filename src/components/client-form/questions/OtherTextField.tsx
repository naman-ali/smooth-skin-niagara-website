"use client";

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
}: {
  id: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div className="mt-1 max-w-md space-y-1.5 border-l-2 border-primary/30 pl-4">
      <Label htmlFor={id} className="text-sm font-medium text-foreground">
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
        className="h-11 text-base"
      />
    </div>
  );
}
