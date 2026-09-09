"use client";

import { Controller, useFormContext, useWatch } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldError } from "./questions/FieldError";
import type { FormValues } from "@/lib/client-form/form-values";
import { getSelectedTreatmentDefinitions } from "@/lib/client-form/schema";
import { isMinorAge } from "@/lib/client-form/guardian";

const GENERIC_ACKNOWLEDGEMENT_TEXT =
  "I confirm that the information I have provided is accurate to the best of my knowledge and that I have reviewed and accepted the consent forms for the treatments selected above.";

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

  const selectedTreatments =
    useWatch({ control, name: "selectedTreatments" }) ?? [];
  const definitions = getSelectedTreatmentDefinitions(selectedTreatments);
  const acknowledgementText =
    definitions.length === 1
      ? `I confirm that the information I have provided is accurate to the best of my knowledge and that I have read, understood and accepted the ${definitions[0].name} consent above.`
      : GENERIC_ACKNOWLEDGEMENT_TEXT;

  const age = useWatch({ control, name: "clientInfo.age" });
  const isMinor = isMinorAge(age);

  return (
    <div className={cn("space-y-6", compact && "space-y-4")}>
      {isMinor ? <GuardianSection compact={compact} /> : null}

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
          className={cn("mt-1.5", compact ? "h-9" : "h-12")}
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
                {acknowledgementText}
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

function GuardianSection({ compact = false }: { compact?: boolean }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <div
      className={cn(
        "space-y-4 rounded-lg border border-border bg-muted/20",
        compact ? "p-3" : "p-4",
      )}
    >
      <div>
        <p
          className={cn(
            "font-display font-medium text-foreground",
            compact ? "text-sm" : "text-base",
          )}
        >
          Parent / Guardian Information
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Because the client is under 18, a parent or legal guardian must
          confirm the information above and consent on their behalf.
        </p>
      </div>

      <div>
        <Label
          htmlFor="guardian.fullName"
          className={cn("font-medium", compact ? "text-sm" : "text-[15px]")}
        >
          Parent / Guardian Full Legal Name
          <span aria-hidden="true" className="text-primary">
            {" "}
            *
          </span>
        </Label>
        <Input
          id="guardian.fullName"
          className={cn("mt-1.5", compact ? "h-9" : "h-12")}
          aria-invalid={errors.guardian?.fullName ? true : undefined}
          aria-describedby={
            errors.guardian?.fullName ? "guardian.fullName-error" : undefined
          }
          {...register("guardian.fullName")}
        />
        <FieldError
          id="guardian.fullName-error"
          message={errors.guardian?.fullName?.message as string | undefined}
        />
      </div>

      <Controller
        name="guardian.accepted"
        control={control}
        render={({ field, fieldState }) => (
          <div className="space-y-2 rounded-md bg-muted/40 p-3">
            <div className="flex items-start gap-3">
              <Checkbox
                id="guardian.accepted"
                checked={field.value === true}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                aria-describedby={
                  fieldState.error ? "guardian.accepted-error" : undefined
                }
                aria-invalid={fieldState.error ? true : undefined}
                className={cn("mt-0.5", compact ? "h-4 w-4" : "h-6 w-6")}
              />
              <Label
                htmlFor="guardian.accepted"
                className={cn(
                  "cursor-pointer font-normal leading-relaxed",
                  compact ? "text-sm" : "text-[15px]",
                )}
              >
                I confirm that I am the parent or legal guardian of the client
                named above, that I have reviewed the information and applicable
                consent, and that I authorize the treatment on their behalf.
              </Label>
            </div>
            <div className="pl-9">
              <FieldError
                id="guardian.accepted-error"
                message={fieldState.error?.message}
              />
            </div>
          </div>
        )}
      />
    </div>
  );
}
