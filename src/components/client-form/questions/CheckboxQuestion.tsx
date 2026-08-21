"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FieldError } from "./FieldError";
import type { FormValues } from "@/lib/client-form/form-values";

/** Generic checkbox/acknowledgement question, used by the schema-driven renderer. */
export function CheckboxQuestion({
  name,
  label,
  description,
}: {
  name: string;
  label: string;
  description?: string;
}) {
  const { control } = useFormContext<FormValues>();
  const errorId = `${name}-error`;

  return (
    <Controller
      name={name as never}
      control={control}
      render={({ field, fieldState }) => (
        <div id={`${name}-field`} className="space-y-2">
          <div className="flex items-start gap-3">
            <Checkbox
              id={name}
              checked={field.value === true}
              onCheckedChange={(checked) => field.onChange(checked === true)}
              aria-describedby={fieldState.error ? errorId : undefined}
              aria-invalid={fieldState.error ? true : undefined}
              className="mt-0.5 h-6 w-6"
            />
            <Label
              htmlFor={name}
              className="cursor-pointer text-[15px] font-normal leading-snug"
            >
              {label}
            </Label>
          </div>
          {description ? (
            <p className="pl-9 text-sm text-muted-foreground">{description}</p>
          ) : null}
          <div className="pl-9">
            <FieldError id={errorId} message={fieldState.error?.message} />
          </div>
        </div>
      )}
    />
  );
}
