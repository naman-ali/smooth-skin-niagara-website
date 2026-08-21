"use client";

import { Controller, useFormContext } from "react-hook-form";
import { OptionChip } from "./OptionChip";
import { OtherTextField } from "./OtherTextField";
import { FieldError } from "./FieldError";
import type { FormValues } from "@/lib/client-form/form-values";
import type { SelectOption, MultiSelectWithOtherAnswer } from "@/lib/client-form/types";

export function MultiSelectWithOtherQuestion({
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
  exclusiveOptions = [],
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
  exclusiveOptions?: string[];
}) {
  const { control } = useFormContext<FormValues>();
  const errorId = `${name}-error`;

  return (
    <Controller
      name={name as never}
      control={control}
      render={({ field, fieldState }) => {
        const answer = (field.value ?? {}) as MultiSelectWithOtherAnswer;
        const values = answer.values ?? [];
        const isOtherSelected = values.includes(otherValue);

        const toggle = (value: string) => {
          const isExclusive = exclusiveOptions.includes(value);
          let next: string[];
          if (values.includes(value)) {
            next = values.filter((v) => v !== value);
          } else if (isExclusive) {
            next = [value];
          } else {
            next = [...values.filter((v) => !exclusiveOptions.includes(v)), value];
          }
          field.onChange({
            values: next,
            otherText: next.includes(otherValue) ? answer.otherText : undefined,
          });
        };

        return (
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
              <p className="text-sm text-muted-foreground">{description}</p>
            ) : null}

            <div role="group" aria-label={label} className="flex flex-wrap gap-2">
              {options.map((option) => (
                <OptionChip
                  key={option.value}
                  label={option.label}
                  selected={values.includes(option.value)}
                  onClick={() => toggle(option.value)}
                />
              ))}
              {allowOther ? (
                <OptionChip
                  label={otherLabel}
                  selected={isOtherSelected}
                  onClick={() => toggle(otherValue)}
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
                onChange={(text) => field.onChange({ values, otherText: text })}
                required
              />
            ) : null}
          </fieldset>
        );
      }}
    />
  );
}
