"use client";

import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FieldError } from "./FieldError";
import type { FormValues } from "@/lib/client-form/form-values";
import type { QuestionType } from "@/lib/client-form/types";
import { getNestedValue } from "@/lib/client-form/utils";

const HTML_INPUT_TYPE: Partial<Record<QuestionType, string>> = {
  text: "text",
  email: "email",
  phone: "tel",
  number: "text",
};

export function TextQuestion({
  name,
  type,
  label,
  description,
  helperText,
  placeholder,
  required,
  multiline,
  compact = false,
}: {
  name: string;
  type: QuestionType;
  label: string;
  description?: string;
  helperText?: string;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  compact?: boolean;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  const error = getNestedValue(errors, name) as
    | { message?: string }
    | undefined;
  const errorId = `${name}-error`;
  const descriptionId = description ? `${name}-description` : undefined;

  const ariaDescribedBy =
    [descriptionId, error ? errorId : undefined].filter(Boolean).join(" ") ||
    undefined;

  return (
    <div className={cn("space-y-2", compact && "space-y-1")}>
      <Label
        htmlFor={name}
        className={cn(
          "font-medium leading-snug",
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
      </Label>
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

      {multiline ? (
        <Textarea
          id={name}
          placeholder={placeholder}
          rows={compact ? 2 : 4}
          aria-describedby={ariaDescribedBy}
          aria-invalid={error ? true : undefined}
          className={cn(compact ? "min-h-[80px]" : "min-h-[110px]")}
          {...register(name as never)}
        />
      ) : (
        <Input
          id={name}
          type={HTML_INPUT_TYPE[type] ?? "text"}
          inputMode={
            type === "phone" ? "tel" : type === "number" ? "numeric" : undefined
          }
          placeholder={placeholder}
          aria-describedby={ariaDescribedBy}
          aria-invalid={error ? true : undefined}
          className={cn(compact ? "h-9" : "h-12")}
          {...register(name as never)}
        />
      )}

      {helperText ? (
        <p
          className={cn(
            "text-muted-foreground",
            compact ? "text-xs" : "text-sm",
          )}
        >
          {helperText}
        </p>
      ) : null}
      <FieldError id={errorId} message={error?.message as string | undefined} />
    </div>
  );
}
