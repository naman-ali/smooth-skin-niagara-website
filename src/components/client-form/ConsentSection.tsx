"use client";

import { Controller, useFormContext } from "react-hook-form";
import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { ConsentDefinition } from "@/lib/client-form/types";
import type { FormValues } from "@/lib/client-form/form-values";
import { FieldError } from "./questions/FieldError";

export function ConsentSection({ consent }: { consent: ConsentDefinition }) {
  const { control } = useFormContext<FormValues>();
  const fieldName = `consents.${consent.treatmentId}.accepted` as const;

  return (
    <section className="space-y-4 rounded-lg border border-border p-5" aria-labelledby={`${consent.treatmentId}-consent-heading`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3
          id={`${consent.treatmentId}-consent-heading`}
          className="font-display text-xl font-medium text-foreground"
        >
          {consent.title}
        </h3>
        <Badge variant={consent.status === "approved" ? "default" : "secondary"}>
          {consent.status === "approved" ? "Approved wording" : "Pending clinic content"}
        </Badge>
      </div>

      {consent.status === "pending-clinic-content" ? (
        <Alert variant="notice">
          <AlertTriangle aria-hidden="true" />
          <AlertDescription>
            This placeholder text is not a legally valid waiver. Clinic-approved
            wording will replace this section before production launch.
          </AlertDescription>
        </Alert>
      ) : null}

      <div className="max-h-72 space-y-4 overflow-y-auto rounded-md bg-muted/40 p-4 text-sm leading-relaxed text-foreground">
        {consent.content.map((block, index) => {
          switch (block.kind) {
            case "paragraph":
              return <p key={index}>{block.text}</p>;
            case "notice":
              return (
                <p key={index} className="font-medium text-foreground">
                  {block.text}
                </p>
              );
            case "clauses":
              return (
                <ol key={index} className="list-decimal space-y-2 pl-5">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              );
            case "bullets":
              return (
                <ul key={index} className="list-disc space-y-2 pl-5">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>

      <p className="text-xs text-muted-foreground">Consent version: {consent.version}</p>

      <Controller
        name={fieldName}
        control={control}
        render={({ field, fieldState }) => (
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <Checkbox
                id={fieldName}
                checked={field.value === true}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                aria-describedby={fieldState.error ? `${fieldName}-error` : undefined}
                aria-invalid={fieldState.error ? true : undefined}
                className="mt-0.5 h-6 w-6"
              />
              <Label htmlFor={fieldName} className="cursor-pointer text-[15px] font-normal leading-snug">
                {consent.acceptanceLabel}
              </Label>
            </div>
            <div className="pl-9">
              <FieldError id={`${fieldName}-error`} message={fieldState.error?.message} />
            </div>
          </div>
        )}
      />
    </section>
  );
}
