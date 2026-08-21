"use client";

import { Controller, useFormContext, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "./questions/FieldError";
import { OptionChip } from "./questions/OptionChip";
import { OtherTextField } from "./questions/OtherTextField";
import type {
  FormValues,
  ReferralSourceValue,
} from "@/lib/client-form/form-values";
import {
  REFERRAL_OTHER_VALUE,
  REFERRAL_SOURCE_OPTIONS,
  REFERRER_NAME_VALUES,
} from "@/lib/client-form/referral-source";

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
  {
    name: "email",
    label: "Email address",
    type: "email",
    required: true,
    span: "half",
  },
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

  const selectedTreatments =
    useWatch({ control, name: "selectedTreatments" }) ?? [];
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
        <FieldError
          id={`${id}-error`}
          message={error?.message as string | undefined}
        />
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {NAME_FIELDS.map(renderField)}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {CONTACT_FIELDS.map(renderField)}
      </div>

      <div className="space-y-1.5">
        <p className="text-[15px] font-medium text-foreground">Address</p>
        <div className="grid gap-5 sm:grid-cols-2">
          {ADDRESS_FIELDS.map(renderField)}
        </div>
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
            <span className="text-muted-foreground font-normal">
              {" "}
              (optional)
            </span>
          )}
        </Label>
        <Input
          id="clientInfo.age"
          inputMode="numeric"
          className="mt-1.5 h-12 max-w-[160px] text-base"
          aria-invalid={errors.clientInfo?.age ? true : undefined}
          aria-describedby={
            errors.clientInfo?.age ? "clientInfo.age-error" : undefined
          }
          {...register("clientInfo.age")}
        />
        <FieldError
          id="clientInfo.age-error"
          message={errors.clientInfo?.age?.message as string | undefined}
        />
      </div>

      <ReferralSourceField />
    </div>
  );
}

function ReferralSourceField() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>();
  const error = errors.clientInfo?.referralSource;

  return (
    <Controller
      name="clientInfo.referralSource"
      control={control}
      render={({ field }) => {
        const answer: ReferralSourceValue = field.value;
        const isOther = answer.value === REFERRAL_OTHER_VALUE;
        const showReferrerName = REFERRER_NAME_VALUES.includes(answer.value);

        const select = (value: string) => {
          field.onChange({
            value,
            otherText: value === REFERRAL_OTHER_VALUE ? answer.otherText : "",
            referrerName: REFERRER_NAME_VALUES.includes(value)
              ? answer.referrerName
              : "",
          });
        };

        return (
          <fieldset id="clientInfo.referralSource" className="space-y-2">
            <legend className="text-[15px] font-medium leading-snug text-foreground">
              How did you hear about us?
            </legend>
            <div
              role="radiogroup"
              aria-label="How did you hear about us?"
              className="flex flex-wrap gap-2"
            >
              {REFERRAL_SOURCE_OPTIONS.map((option) => (
                <OptionChip
                  key={option.value}
                  role="radio"
                  label={option.label}
                  selected={answer.value === option.value}
                  onClick={() => select(option.value)}
                />
              ))}
              <OptionChip
                role="radio"
                label="Other"
                selected={isOther}
                onClick={() => select(REFERRAL_OTHER_VALUE)}
              />
            </div>
            <FieldError
              id="clientInfo.referralSource-error"
              message={error?.message as string | undefined}
            />

            {showReferrerName ? (
              <div className="mt-2 max-w-md space-y-1.5">
                <Label
                  htmlFor="clientInfo.referralSource.referrerName"
                  className="text-sm font-medium text-foreground"
                >
                  Who referred you?{" "}
                  <span className="font-normal text-muted-foreground">
                    (optional)
                  </span>
                </Label>
                <Input
                  id="clientInfo.referralSource.referrerName"
                  value={answer.referrerName}
                  onChange={(e) =>
                    field.onChange({ ...answer, referrerName: e.target.value })
                  }
                  className="h-11 text-base"
                />
              </div>
            ) : null}

            {isOther ? (
              <OtherTextField
                id="clientInfo.referralSource.otherText"
                label="Please tell us how you heard about us."
                value={answer.otherText}
                onChange={(text) =>
                  field.onChange({ ...answer, otherText: text })
                }
                required
              />
            ) : null}
          </fieldset>
        );
      }}
    />
  );
}
