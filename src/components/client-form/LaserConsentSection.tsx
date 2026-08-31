"use client";

import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldError } from "./questions/FieldError";

const ACKNOWLEDGEMENTS = [
  {
    id: "risks",
    text: "I understand that the Soprano is a device used for laser hair removal and that clinical results may vary in different skin types and hair types. I understand there is a possibility of short-term effects such as reddening, blistering, scabbing, temporary bruising and temporary discoloration of the skin, as well as rare side effects such as scarring and permanent discoloration. These effects have been fully explained to me.",
  },
  {
    id: "treatmentResponse",
    text: "Clinical results may vary depending on individual factors, including medical history, skin and hair type, patient compliance with pre/post treatment instructions, and individual response to treatment. Average hair reduction at the end of consecutive sessions may be approximately 70%–95%. Up to 20% of the population may not respond to laser or light treatment. I understand that epilation with the Soprano system is an alternative method used for removing unwanted hair, such as shaving, waxing, chemical epilation and electrolysis.",
  },
  {
    id: "treatmentSeries",
    text: "I understand that treatment by the Soprano laser hair removal system involves a series of treatments and the fee structure has been fully explained to me.",
  },
  {
    id: "outcomesAndComplications",
    text: "I certify that I have been fully informed of the nature and purpose of the procedure, expected outcome and possible complications, and I understand that no guarantee can be given as to the final results obtained.",
  },
  {
    id: "cosmeticDecision",
    text: "I am fully aware that my condition is of cosmetic concern and that the decision to proceed is based solely on my expressed desire to do so.",
  },
  {
    id: "pregnancyAccutaneDevices",
    text: "I confirm that I am not pregnant or breastfeeding now, and that I have not taken Accutane within the last 6 months. I do not have a pacemaker or internal defibrillator.",
  },
  {
    id: "finalAcknowledgement",
    text: "I certify that I have been given the opportunity to ask questions and that I have read and fully understand the contents of this consent form.",
  },
];

const basePath = "consents.laser-hair-removal";

export function LaserConsentSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { control } = useFormContext();

  return (
    <div className={cn("space-y-8", compact && "space-y-6")}>
      <div>
        <h2 className="font-display text-2xl font-medium text-foreground">
          Laser Hair Removal Consent & Waiver
        </h2>
        <p className="mt-1 text-base text-muted-foreground">
          Please review each acknowledgement carefully before continuing.
        </p>
      </div>

      <ol className="space-y-6" aria-label="Informed consent acknowledgements">
        {ACKNOWLEDGEMENTS.map((item, index) => {
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

      <div className="rounded-lg border border-border bg-muted/20 p-4">
        <h3 className="mb-2 font-display text-lg font-medium text-foreground">
          Photography Permission
        </h3>
        <p className="mb-3 text-base leading-relaxed text-foreground">
          This is a separate permission. Answering &ldquo;No&rdquo; does not
          affect your ability to complete this treatment.
        </p>
        <Controller
          name={`${basePath}.photoPermission` as never}
          control={control}
          render={({ field }) => (
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Checkbox
                  id={`${basePath}.photoPermission`}
                  checked={field.value === true}
                  onCheckedChange={(checked) =>
                    field.onChange(checked === true)
                  }
                  className="mt-0.5 h-5 w-5"
                />
                <Label
                  htmlFor={`${basePath}.photoPermission`}
                  className="cursor-pointer text-base font-normal leading-snug text-foreground"
                >
                  I consent to photographs being taken and authorize their
                  anonymous use for medical audits, education and promotional
                  purposes.
                </Label>
              </div>

              {field.value === true ? (
                <Controller
                  name={`${basePath}.photoPermissionDetails` as never}
                  control={control}
                  render={({ field: detailsField }) => (
                    <div className="pl-8">
                      <Label
                        htmlFor={`${basePath}.photoPermissionDetails`}
                        className="text-sm font-normal text-muted-foreground"
                      >
                        Any restrictions or notes (optional)
                      </Label>
                      <Textarea
                        id={`${basePath}.photoPermissionDetails`}
                        value={detailsField.value ?? ""}
                        onChange={(e) => detailsField.onChange(e.target.value)}
                        placeholder="e.g. please avoid showing my face"
                        rows={2}
                        className="mt-1.5 min-h-[80px] text-sm"
                      />
                    </div>
                  )}
                />
              ) : null}
            </div>
          )}
        />
      </div>

      <div className="rounded-lg border border-border p-5">
        <h3 className="mb-4 font-display text-lg font-medium text-foreground">
          Consent Confirmation
        </h3>
        <div className="space-y-4">
          <div>
            <Label
              htmlFor={`${basePath}.typedName`}
              className="text-[15px] font-medium"
            >
              Type your full legal name
              <span aria-hidden="true" className="text-primary">
                {" "}
                *
              </span>
            </Label>
            <Controller
              name={`${basePath}.typedName` as never}
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <Input
                    id={`${basePath}.typedName`}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    aria-invalid={fieldState.error ? true : undefined}
                    aria-describedby={
                      fieldState.error
                        ? `${basePath}.typedName-error`
                        : undefined
                    }
                    className="mt-1.5 h-12 text-base"
                  />
                  <FieldError
                    id={`${basePath}.typedName-error`}
                    message={fieldState.error?.message}
                  />
                </>
              )}
            />
          </div>

          <Controller
            name={`${basePath}.accepted` as never}
            control={control}
            render={({ field, fieldState }) => (
              <div className="space-y-2 rounded-md bg-muted/40 p-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id={`${basePath}.accepted`}
                    checked={field.value === true}
                    onCheckedChange={(checked) =>
                      field.onChange(checked === true)
                    }
                    aria-describedby={
                      fieldState.error
                        ? `${basePath}.accepted-error`
                        : undefined
                    }
                    aria-invalid={fieldState.error ? true : undefined}
                    className="mt-0.5 h-6 w-6"
                  />
                  <Label
                    htmlFor={`${basePath}.accepted`}
                    className="cursor-pointer text-[15px] font-normal leading-relaxed"
                  >
                    I confirm that I have read and understood the Laser Hair
                    Removal Consent & Waiver above, that I have had the
                    opportunity to ask questions, and that I consent to proceed
                    with the treatment.
                  </Label>
                </div>
                <div className="pl-9">
                  <FieldError
                    id={`${basePath}.accepted-error`}
                    message={fieldState.error?.message}
                  />
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}
