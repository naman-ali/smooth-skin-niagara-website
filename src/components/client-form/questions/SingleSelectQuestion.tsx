"use client";

import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FieldError } from "./FieldError";
import type { FormValues } from "@/lib/client-form/form-values";
import type { SelectOption } from "@/lib/client-form/types";

export function SingleSelectQuestion({
  name,
  label,
  description,
  options,
  required,
}: {
  name: string;
  label: string;
  description?: string;
  options: SelectOption[];
  required?: boolean;
}) {
  const { control } = useFormContext<FormValues>();
  const errorId = `${name}-error`;
  const descriptionId = description ? `${name}-description` : undefined;

  return (
    <Controller
      name={name as never}
      control={control}
      render={({ field, fieldState }) => (
        <fieldset id={name} className="space-y-2">
          <legend className="text-[15px] font-medium leading-snug text-foreground">
            {label}
            {required ? (
              <span aria-hidden="true" className="text-primary">
                {" "}
                *
              </span>
            ) : null}
          </legend>
          {description ? (
            <p id={descriptionId} className="text-sm text-muted-foreground">
              {description}
            </p>
          ) : null}

          <RadioGroup
            value={typeof field.value === "string" ? field.value : undefined}
            onValueChange={field.onChange}
            aria-describedby={
              [descriptionId, fieldState.error ? errorId : undefined]
                .filter(Boolean)
                .join(" ") || undefined
            }
            aria-invalid={fieldState.error ? true : undefined}
            className="grid grid-cols-2 gap-3"
          >
            {options.map((option) => {
              const optionId = `${name}-${option.value}`;
              const selected = field.value === option.value;
              return (
                <Label
                  key={option.value}
                  htmlFor={optionId}
                  className={cn(
                    "flex min-h-[48px] cursor-pointer items-center justify-center rounded-lg border-2 px-4 py-3 text-base font-medium transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
                    selected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input bg-background text-foreground hover:bg-accent",
                  )}
                >
                  <RadioGroupItem
                    value={option.value}
                    id={optionId}
                    className="sr-only"
                  />
                  {option.label}
                </Label>
              );
            })}
          </RadioGroup>

          <FieldError id={errorId} message={fieldState.error?.message} />
        </fieldset>
      )}
    />
  );
}
