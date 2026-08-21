"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FieldError } from "./questions/FieldError";
import type { FormValues } from "@/lib/client-form/form-values";

type FieldConfig = {
  name: keyof FormValues["clientInfo"];
  label: string;
  type?: string;
  required?: boolean;
  span?: "full" | "half";
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};

const NAME_FIELDS: FieldConfig[] = [
  { name: "firstName", label: "First name", required: true, span: "half" },
  { name: "lastName", label: "Last name", required: true, span: "half" },
];

const ADDRESS_FIELDS: FieldConfig[] = [
  { name: "street", label: "Street address", required: true, span: "full" },
  { name: "city", label: "City", required: true, span: "half" },
  { name: "province", label: "Province", required: true, span: "half" },
  { name: "postalCode", label: "Postal code", required: true, span: "half" },
];

const CONTACT_FIELDS: FieldConfig[] = [
  { name: "email", label: "Email address", type: "email", required: true, span: "half" },
  {
    name: "phone",
    label: "Phone number",
    type: "tel",
    required: true,
    span: "half",
    inputMode: "tel",
  },
];

export function ClientInfoStep() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormValues>();

  const selectedTreatments = useWatch({ control, name: "selectedTreatments" }) ?? [];
  const ageRequired = selectedTreatments.includes("laser-hair-removal");

  const renderField = (field: FieldConfig) => {
    const error = errors.clientInfo?.[field.name];
    const id = `clientInfo.${field.name}`;
    return (
      <div
        key={field.name}
        className={field.span === "full" ? "sm:col-span-2" : undefined}
      >
        <Label htmlFor={id} className="text-[15px] font-medium">
          {field.label}
          {field.required ? (
            <span aria-hidden="true" className="text-primary">
              {" "}
              *
            </span>
          ) : null}
        </Label>
        <Input
          id={id}
          type={field.type ?? "text"}
          inputMode={field.inputMode}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-1.5 h-12 text-base"
          {...register(`clientInfo.${field.name}` as const)}
        />
        <FieldError id={`${id}-error`} message={error?.message as string | undefined} />
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2">{NAME_FIELDS.map(renderField)}</div>

      <div className="grid gap-5 sm:grid-cols-2">{CONTACT_FIELDS.map(renderField)}</div>

      <div className="space-y-1.5">
        <p className="text-[15px] font-medium text-foreground">Address</p>
        <div className="grid gap-5 sm:grid-cols-2">{ADDRESS_FIELDS.map(renderField)}</div>
      </div>

      <div>
        <Label htmlFor="clientInfo.age" className="text-[15px] font-medium">
          Age
          {ageRequired ? (
            <span aria-hidden="true" className="text-primary">
              {" "}
              *
            </span>
          ) : (
            <span className="text-muted-foreground font-normal"> (optional)</span>
          )}
        </Label>
        <Input
          id="clientInfo.age"
          inputMode="numeric"
          className="mt-1.5 h-12 max-w-[160px] text-base"
          aria-invalid={errors.clientInfo?.age ? true : undefined}
          aria-describedby={errors.clientInfo?.age ? "clientInfo.age-error" : undefined}
          {...register("clientInfo.age")}
        />
        <FieldError
          id="clientInfo.age-error"
          message={errors.clientInfo?.age?.message as string | undefined}
        />
      </div>

      <div>
        <Label htmlFor="clientInfo.referralSource" className="text-[15px] font-medium">
          How did you hear about us? If someone referred you, please include their
          name.
        </Label>
        <Textarea
          id="clientInfo.referralSource"
          rows={2}
          className="mt-1.5 min-h-[80px] text-base"
          {...register("clientInfo.referralSource")}
        />
      </div>
    </div>
  );
}
