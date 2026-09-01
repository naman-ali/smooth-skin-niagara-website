"use client";

import { Controller, useFormContext, useWatch } from "react-hook-form";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FieldError } from "./questions/FieldError";
import type { FormValues } from "@/lib/client-form/form-values";

type AcknowledgementItem = {
  id: string;
  kind: "checkbox" | "photoConsent";
  text: string;
};

const ACKNOWLEDGEMENTS: AcknowledgementItem[] = [
  {
    id: "risks",
    kind: "checkbox",
    text: "I understand that the Diode/Laser is a device used for hair removal and that clinical results may vary in different skin types and hair types. I understand there is a possibility of short-term effects such as reddening, blistering, scabbing, temporary bruising, and temporary discoloration of the skin, as well as rare side effects such as scarring and permanent discoloration. These effects have been fully explained to me.",
  },
  {
    id: "individualResults",
    kind: "checkbox",
    text: "Clinical results may vary depending on individual factors, including medical history, skin and hair type, patient compliance with pre/post treatment instructions, and individual response to treatment. I understand that epilation with the Diode laser system is a safe alternative to methods used for removing unwanted hair, such as shaving, waxing, chemical epilation, and electrolysis. Zero epilation will be done during/in between tx.",
  },
  {
    id: "treatmentSeries",
    kind: "checkbox",
    text: "I understand that treatment by the Diode laser hair removal system involves a series of treatments, and the fee structure has been fully explained to me.",
  },
  {
    id: "naturePurpose",
    kind: "checkbox",
    text: "I certify that I have been fully informed of the nature and purpose of the procedure, expected outcomes and possible complications, and I understand that no guarantee can be given as to the result obtained. I am fully aware that my condition is of cosmetic concern and that the decision to proceed is based solely on my expressed desire to do so.",
  },
  {
    id: "pregnancyAccutaneDevices",
    kind: "checkbox",
    text: "I confirm that I am not pregnant at this time, and that I have not taken Accutane within the last 6 months. I do not have a pacemaker or internal defibrillator.",
  },
  {
    id: "cancellationPolicy",
    kind: "checkbox",
    text: "I understand the cancellation policy. Failure to provide 24 notice or no show will require a deposit to be scheduled for the next appointment. If a package is purchased and there is a no show or less than 24hrs notice for the cancellation the amount for that session will be lost due to lost income for that appointment time.",
  },
  {
    id: "photography",
    kind: "photoConsent",
    text: "I consent to the taking of photographs and authorize their anonymous use for the purposes of medical audit and/or promotion.",
  },
  {
    id: "recommendedTreatments",
    kind: "checkbox",
    text: "I understand it is recommended that I have between 6-10 treatments for optimal results and follow up with maintenance treatments as needed to maintain my results.",
  },
  {
    id: "promotionalExpiry",
    kind: "checkbox",
    text: "I understand all laser promotional packages expire after 1 year from the date of purchase.",
  },
];

const basePath = "consents.laser-hair-removal";

export function LaserConsentSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { control } = useFormContext<FormValues>();
  const clientInfo = useWatch({ control, name: "clientInfo" });
  const fullName =
    `${clientInfo?.firstName ?? ""} ${clientInfo?.lastName ?? ""}`.trim();

  return (
    <div className={cn("space-y-8", compact && "space-y-6")}>
      <div>
        <h2 className="font-display text-2xl font-medium text-foreground">
          Laser Hair Removal Consent & Waiver
        </h2>
        <p className="mt-1 text-base text-muted-foreground">
          Please review each acknowledgement carefully before continuing.
        </p>
        <p className="mt-3 text-base text-foreground">
          I duly authorize{" "}
          <span className="font-semibold">Ashley Wojnowski</span> to perform the{" "}
          <span className="font-semibold">DIODE Laser Hair Removal</span>{" "}
          procedure.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Consent for:{" "}
          <span className="font-medium text-foreground">
            {fullName || "\u2014"}
          </span>
        </p>
      </div>

      <ol className="space-y-6" aria-label="Informed consent acknowledgements">
        {ACKNOWLEDGEMENTS.map((item, index) => {
          if (item.kind === "photoConsent") {
            const fieldName = `${basePath}.photoConsent` as const;
            return (
              <li
                key={item.id}
                className="flex flex-col gap-3 rounded-lg border border-border bg-muted/20 p-4"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
                  <span
                    className="shrink-0 rounded-full bg-olive-100 px-3 py-1 text-sm font-semibold text-olive-800"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Photography Permission
                    </p>
                    <p className="mt-1 text-base leading-relaxed text-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
                <Controller
                  name={fieldName as never}
                  control={control}
                  render={({ field, fieldState }) => {
                    const stringValue =
                      field.value === true
                        ? "yes"
                        : field.value === false
                          ? "no"
                          : undefined;
                    return (
                      <div className="pl-0 sm:pl-12">
                        <RadioGroup
                          value={stringValue}
                          onValueChange={(value) =>
                            field.onChange(value === "yes")
                          }
                          aria-describedby={
                            fieldState.error ? `${fieldName}-error` : undefined
                          }
                          aria-invalid={fieldState.error ? true : undefined}
                          className="flex w-fit flex-wrap gap-3"
                        >
                          {(
                            [
                              { value: "yes", text: "Yes", Icon: Check },
                              { value: "no", text: "No", Icon: X },
                            ] as const
                          ).map(({ value, text, Icon }) => {
                            const optionId = `${fieldName}-${value}`;
                            const selected = stringValue === value;
                            return (
                              <Label
                                key={value}
                                htmlFor={optionId}
                                className={cn(
                                  "flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-base font-medium transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
                                  selected
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-input bg-background text-foreground hover:bg-accent",
                                )}
                              >
                                <RadioGroupItem
                                  value={value}
                                  id={optionId}
                                  className="sr-only"
                                />
                                <Icon className="h-4 w-4" aria-hidden="true" />
                                {text}
                              </Label>
                            );
                          })}
                        </RadioGroup>
                        <div className="pl-0">
                          <FieldError
                            id={`${fieldName}-error`}
                            message={fieldState.error?.message}
                          />
                        </div>
                      </div>
                    );
                  }}
                />
              </li>
            );
          }

          const fieldName = `${basePath}.acknowledgements.${item.id}` as const;
          return (
            <li
              key={item.id}
              className="flex flex-col gap-3 rounded-lg border border-border bg-muted/20 p-4"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
                <span
                  className="shrink-0 rounded-full bg-olive-100 px-3 py-1 text-sm font-semibold text-olive-800"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <p className="text-base leading-relaxed text-foreground">
                  {item.text}
                </p>
              </div>
              <Controller
                name={fieldName as never}
                control={control}
                render={({ field, fieldState }) => (
                  <div className="pl-0 sm:pl-12">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id={`${fieldName}-checkbox`}
                        checked={field.value === true}
                        onCheckedChange={(checked) =>
                          field.onChange(checked === true)
                        }
                        aria-describedby={
                          fieldState.error ? `${fieldName}-error` : undefined
                        }
                        aria-invalid={fieldState.error ? true : undefined}
                        className="mt-0.5 h-5 w-5"
                      />
                      <Label
                        htmlFor={`${fieldName}-checkbox`}
                        className="cursor-pointer text-base font-normal leading-snug text-foreground"
                      >
                        I understand
                      </Label>
                    </div>
                    <div className="pl-8">
                      <FieldError
                        id={`${fieldName}-error`}
                        message={fieldState.error?.message}
                      />
                    </div>
                  </div>
                )}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
