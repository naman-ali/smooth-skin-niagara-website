"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FieldError } from "./FieldError";
import type { FormValues } from "@/lib/client-form/form-values";

export function YesNoQuestion({
  name,
  label,
  description,
  helperText,
  required,
  compact = false,
}: {
  name: string;
  label: string;
  description?: string;
  helperText?: string;
  required?: boolean;
  compact?: boolean;
}) {
  const { control } = useFormContext<FormValues>();
  const errorId = `${name}-error`;
  const descriptionId = description ? `${name}-description` : undefined;

  return (
    <Controller
      name={name as never}
      control={control}
      render={({ field, fieldState }) => {
        const stringValue =
          field.value === true
            ? "yes"
            : field.value === false
              ? "no"
              : undefined;

        return (
          <fieldset
            id={name}
            className={cn("space-y-2", compact && "space-y-1")}
          >
            <legend
              className={cn(
                "font-medium leading-snug text-foreground",
                compact ? "text-sm" : "text-[15px]",
              )}
            >
              {label}
              {required ? (
                <span aria-hidden="true" className="text-primary">
                  {" "}
                  *
                </span>
              ) : null}
            </legend>
            {description ? (
              <p
                id={descriptionId}
                className={cn(
                  "text-muted-foreground",
                  compact ? "text-xs" : "text-sm",
                )}
              >
                {description}
              </p>
            ) : null}

            <RadioGroup
              value={stringValue}
              onValueChange={(value) => field.onChange(value === "yes")}
              aria-describedby={
                [descriptionId, fieldState.error ? errorId : undefined]
                  .filter(Boolean)
                  .join(" ") || undefined
              }
              aria-invalid={fieldState.error ? true : undefined}
              className={cn(
                "flex flex-wrap w-fit",
                compact ? "gap-2" : "gap-3",
              )}
            >
              {(
                [
                  { value: "yes", text: "Yes", Icon: Check },
                  { value: "no", text: "No", Icon: X },
                ] as const
              ).map(({ value, text, Icon }) => {
                const optionId = `${name}-${value}`;
                const selected = stringValue === value;
                return (
                  <Label
                    key={value}
                    htmlFor={optionId}
                    className={cn(
                      "flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 px-4 font-medium transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
                      compact
                        ? "min-h-[36px] py-1.5 text-sm"
                        : "min-h-[48px] py-3 text-base",
                      selected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-input bg-background text-foreground hover:bg-accent",
                    )}
                  >
                    <RadioGroupItem
                      value={value}
                      id={optionId}
                      className={cn("sr-only")}
                    />
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {text}
                  </Label>
                );
              })}
            </RadioGroup>

            {helperText ? (
              <p className="text-sm text-muted-foreground">{helperText}</p>
            ) : null}
            <FieldError id={errorId} message={fieldState.error?.message} />
          </fieldset>
        );
      }}
    />
  );
}
