"use client";

import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { ConsentDefinition } from "@/lib/client-form/types";
import type { FormValues } from "@/lib/client-form/form-values";
import { FieldError } from "./questions/FieldError";

export function ConsentSection({
  consent,
  compact = false,
}: {
  consent: ConsentDefinition;
  compact?: boolean;
}) {
  const { control } = useFormContext<FormValues>();
  const fieldName = `consents.${consent.treatmentId}.accepted` as const;

  return (
    <section
      className={cn(
        "space-y-4 rounded-lg border border-border",
        compact ? "p-3" : "p-5",
      )}
      aria-labelledby={`${consent.treatmentId}-consent-heading`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3
          id={`${consent.treatmentId}-consent-heading`}
          className={cn(
            "font-display font-medium text-foreground",
            compact ? "text-base" : "text-xl",
          )}
        >
          {consent.title}
        </h3>
        <Badge
          variant={consent.status === "approved" ? "default" : "secondary"}
        >
          {consent.status === "approved"
            ? "Approved wording"
            : "Pending clinic content"}
        </Badge>
      </div>

      <div
        className={cn(
          "space-y-4 rounded-md bg-muted/40 text-sm leading-relaxed text-foreground",
          compact ? "p-2.5 text-xs" : "p-4",
        )}
      >
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

      {consent.status === "approved" ? (
        <>
          <p
            className={cn(
              "text-muted-foreground",
              compact ? "text-[11px]" : "text-xs",
            )}
          >
            Consent version: {consent.version}
          </p>

          <Controller
            name={fieldName}
            control={control}
            render={({ field, fieldState }) => (
              <div className={cn("space-y-2", compact && "space-y-1")}>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id={fieldName}
                    checked={field.value === true}
                    onCheckedChange={(checked) =>
                      field.onChange(checked === true)
                    }
                    aria-describedby={
                      fieldState.error ? `${fieldName}-error` : undefined
                    }
                    aria-invalid={fieldState.error ? true : undefined}
                    className={cn("mt-0.5", compact ? "h-4 w-4" : "h-6 w-6")}
                  />
                  <Label
                    htmlFor={fieldName}
                    className={cn(
                      "cursor-pointer font-normal leading-snug",
                      compact ? "text-sm" : "text-[15px]",
                    )}
                  >
                    {consent.acceptanceLabel}
                  </Label>
                </div>
                <div className="pl-9">
                  <FieldError
                    id={`${fieldName}-error`}
                    message={fieldState.error?.message}
                  />
                </div>
              </div>
            )}
          />
        </>
      ) : null}
    </section>
  );
}
