"use client";

import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FieldError } from "./FieldError";
import type { FormValues } from "@/lib/client-form/form-values";

/** Generic checkbox/acknowledgement question, used by the schema-driven renderer. */
export function CheckboxQuestion({
  name,
  label,
  description,
  compact = false,
}: {
  name: string;
  label: string;
  description?: string;
  compact?: boolean;
}) {
  const { control } = useFormContext<FormValues>();
  const errorId = `${name}-error`;

  return (
    <Controller
      name={name as never}
      control={control}
      render={({ field, fieldState }) => (
        <div
          id={`${name}-field`}
          className={cn("space-y-2", compact && "space-y-1")}
        >
          <div className="flex items-start gap-3">
            <Checkbox
              id={name}
              checked={field.value === true}
              onCheckedChange={(checked) => field.onChange(checked === true)}
              aria-describedby={fieldState.error ? errorId : undefined}
              aria-invalid={fieldState.error ? true : undefined}
              className={cn("mt-0.5", compact ? "h-4 w-4" : "h-6 w-6")}
            />
            <Label
              htmlFor={name}
              className={cn(
                "cursor-pointer font-normal leading-snug",
                compact ? "text-sm" : "text-[15px]",
              )}
            >
              {label}
            </Label>
          </div>
          {description ? (
            <p
              className={cn(
                "pl-9 text-muted-foreground",
                compact ? "text-xs" : "text-sm",
              )}
            >
              {description}
            </p>
          ) : null}
          <div className="pl-9">
            <FieldError id={errorId} message={fieldState.error?.message} />
          </div>
        </div>
      )}
    />
  );
}
