"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldError } from "./questions/FieldError";
import type { FormValues } from "@/lib/client-form/form-values";

const ACKNOWLEDGEMENT_TEXT =
  "I confirm that the information I have provided in this form is accurate to the best of my knowledge and that I have reviewed the information shown above.";

export function AcknowledgementStep() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="acknowledgement.typedName" className="text-[15px] font-medium">
          Type your full legal name
          <span aria-hidden="true" className="text-primary">
            {" "}
            *
          </span>
        </Label>
        <Input
          id="acknowledgement.typedName"
          className="mt-1.5 h-12 text-base"
          aria-invalid={errors.acknowledgement?.typedName ? true : undefined}
          aria-describedby={
            errors.acknowledgement?.typedName ? "acknowledgement.typedName-error" : undefined
          }
          {...register("acknowledgement.typedName")}
        />
        <FieldError
          id="acknowledgement.typedName-error"
          message={errors.acknowledgement?.typedName?.message as string | undefined}
        />
      </div>

      <Controller
        name="acknowledgement.accepted"
        control={control}
        render={({ field, fieldState }) => (
          <div className="space-y-2 rounded-lg border border-border bg-muted/40 p-4">
            <div className="flex items-start gap-3">
              <Checkbox
                id="acknowledgement.accepted"
                checked={field.value === true}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                aria-describedby={fieldState.error ? "acknowledgement.accepted-error" : undefined}
                aria-invalid={fieldState.error ? true : undefined}
                className="mt-0.5 h-6 w-6"
              />
              <Label
                htmlFor="acknowledgement.accepted"
                className="cursor-pointer text-[15px] font-normal leading-relaxed"
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
