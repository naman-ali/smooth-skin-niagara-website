"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { TREATMENT_DEFINITIONS } from "@/lib/client-form/schema";
import type { FormValues } from "@/lib/client-form/form-values";
import { FieldError } from "./questions/FieldError";

export function TreatmentSelector() {
  const { control } = useFormContext<FormValues>();

  return (
    <Controller
      name="selectedTreatments"
      control={control}
      render={({ field, fieldState }) => {
        const selected: string[] = field.value ?? [];

        const toggle = (id: string) => {
          if (selected.includes(id)) {
            field.onChange(selected.filter((t) => t !== id));
          } else {
            field.onChange([...selected, id]);
          }
        };

        return (
          <div id="selectedTreatments" className="space-y-4">
            <div
              role="group"
              aria-label="Select treatments"
              aria-describedby={
                fieldState.error ? "selectedTreatments-error" : undefined
              }
              className="grid gap-4 sm:grid-cols-2"
            >
              {TREATMENT_DEFINITIONS.map((treatment) => {
                const isSelected = selected.includes(treatment.id);
                return (
                  <button
                    key={treatment.id}
                    type="button"
                    role="checkbox"
                    aria-checked={isSelected}
                    onClick={() => toggle(treatment.id)}
                    className={cn(
                      "flex min-h-[120px] flex-col justify-between rounded-xl border-2 p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      isSelected
                        ? "border-primary bg-secondary"
                        : "border-input bg-background hover:bg-accent",
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-display text-xl font-medium text-foreground">
                        {treatment.name}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2",
                          isSelected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-input bg-background",
                        )}
                      >
                        {isSelected ? <Check className="h-4 w-4" /> : null}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {treatment.shortDescription}
                    </p>
                  </button>
                );
              })}
            </div>
            <FieldError
              id="selectedTreatments-error"
              message={fieldState.error?.message}
            />
          </div>
        );
      }}
    />
  );
}
