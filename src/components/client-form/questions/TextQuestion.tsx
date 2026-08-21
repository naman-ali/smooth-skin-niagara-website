"use client";

import { useFormContext } from "react-hook-form";
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
}: {
  name: string;
  type: QuestionType;
  label: string;
  description?: string;
  helperText?: string;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
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
    <div className="space-y-2">
      <Label htmlFor={name} className="text-[15px] font-medium leading-snug">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-primary">
            {" "}
            *
          </span>
        ) : null}
      </Label>
      {description ? (
        <p id={descriptionId} className="text-sm text-muted-foreground">
          {description}
        </p>
      ) : null}

      {multiline ? (
        <Textarea
          id={name}
          placeholder={placeholder}
          rows={4}
          aria-describedby={ariaDescribedBy}
          aria-invalid={error ? true : undefined}
          className="min-h-[110px] text-base"
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
          className="h-12 text-base"
          {...register(name as never)}
        />
      )}

      {helperText ? (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      ) : null}
      <FieldError id={errorId} message={error?.message as string | undefined} />
    </div>
  );
}
