"use client";

import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldError } from "./questions/FieldError";
import type { FormValues } from "@/lib/client-form/form-values";

const ACKNOWLEDGEMENT_TEXT =
  "I confirm that the information I have provided in this form is accurate to the best of my knowledge and that I have reviewed the information shown above.";

export function AcknowledgementStep({
  compact = false,
}: {
  compact?: boolean;
}) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <div className={cn("space-y-6", compact && "space-y-4")}>
      <div>
        <Label
          htmlFor="acknowledgement.typedName"
          className={cn("font-medium", compact ? "text-sm" : "text-[15px]")}
        >
          Type your full legal name
          <span aria-hidden="true" className="text-primary">
            {" "}
            *
          </span>
        </Label>
        <Input
          id="acknowledgement.typedName"
          className={cn("mt-1.5", compact ? "h-9 text-sm" : "h-12 text-base")}
          aria-invalid={errors.acknowledgement?.typedName ? true : undefined}
          aria-describedby={
            errors.acknowledgement?.typedName
              ? "acknowledgement.typedName-error"
              : undefined
          }
          {...register("acknowledgement.typedName")}
        />
        <FieldError
          id="acknowledgement.typedName-error"
          message={
            errors.acknowledgement?.typedName?.message as string | undefined
          }
        />
      </div>

      <Controller
        name="acknowledgement.accepted"
        control={control}
        render={({ field, fieldState }) => (
          <div
            className={cn(
              "space-y-2 rounded-lg border border-border bg-muted/40",
              compact ? "p-3" : "p-4",
            )}
          >
            <div className="flex items-start gap-3">
              <Checkbox
                id="acknowledgement.accepted"
                checked={field.value === true}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                aria-describedby={
                  fieldState.error
                    ? "acknowledgement.accepted-error"
                    : undefined
                }
                aria-invalid={fieldState.error ? true : undefined}
                className={cn("mt-0.5", compact ? "h-4 w-4" : "h-6 w-6")}
              />
              <Label
                htmlFor="acknowledgement.accepted"
                className={cn(
                  "cursor-pointer font-normal leading-relaxed",
                  compact ? "text-sm" : "text-[15px]",
                )}
              >
                {ACKNOWLEDGEMENT_TEXT}
              </Label>
            </div>
            <div className="pl-9">
              <FieldError
                id="acknowledgement.accepted-error"
                message={fieldState.error?.message}
              />
            </div>
          </div>
        )}
      />
    </div>
  );
}
