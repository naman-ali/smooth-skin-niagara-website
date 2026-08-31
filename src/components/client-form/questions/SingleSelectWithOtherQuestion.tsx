"use client";

import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { OptionChip } from "./OptionChip";
import { OtherTextField } from "./OtherTextField";
import { FieldError } from "./FieldError";
import type { FormValues } from "@/lib/client-form/form-values";
import type {
  SelectOption,
  SingleSelectWithOtherAnswer,
} from "@/lib/client-form/types";

export function SingleSelectWithOtherQuestion({
  name,
  label,
  description,
  options,
  required,
  allowOther,
  otherValue = "other",
  otherLabel = "Other",
  otherFieldLabel = "Please specify",
  otherPlaceholder,
  compact = false,
}: {
  name: string;
  label: string;
  description?: string;
  options: SelectOption[];
  required?: boolean;
  allowOther?: boolean;
  otherValue?: string;
  otherLabel?: string;
  otherFieldLabel?: string;
  otherPlaceholder?: string;
  compact?: boolean;
}) {
  const { control } = useFormContext<FormValues>();
  const errorId = `${name}-error`;

  return (
    <Controller
      name={name as never}
      control={control}
      render={({ field, fieldState }) => {
        const answer = (field.value ?? {}) as SingleSelectWithOtherAnswer;
        const isOtherSelected = answer.value === otherValue;

        const select = (value: string) => {
          field.onChange(
            value === otherValue
              ? { value, otherText: answer.otherText }
              : { value },
          );
        };

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
                className={cn(
                  "text-muted-foreground",
                  compact ? "text-xs" : "text-sm",
                )}
              >
                {description}
              </p>
            ) : null}

            <div
              role="radiogroup"
              aria-label={label}
              className={cn("flex flex-wrap", compact ? "gap-1.5" : "gap-2")}
            >
              {options.map((option) => (
                <OptionChip
                  key={option.value}
                  role="radio"
                  label={option.label}
                  selected={answer.value === option.value}
                  onClick={() => select(option.value)}
                  compact={compact}
                />
              ))}
              {allowOther ? (
                <OptionChip
                  role="radio"
                  label={otherLabel}
                  selected={isOtherSelected}
                  onClick={() => select(otherValue)}
                  compact={compact}
                />
              ) : null}
            </div>

            <FieldError id={errorId} message={fieldState.error?.message} />

            {allowOther && isOtherSelected ? (
              <OtherTextField
                id={`${name}-other`}
                label={otherFieldLabel}
                placeholder={otherPlaceholder}
                value={answer.otherText ?? ""}
                onChange={(text) =>
                  field.onChange({ value: answer.value, otherText: text })
                }
                required
                compact={compact}
              />
            ) : null}
          </fieldset>
        );
      }}
    />
  );
}
