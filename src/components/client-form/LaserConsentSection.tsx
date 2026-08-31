"use client";

import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldError } from "./questions/FieldError";

const ACKNOWLEDGEMENTS = [
  {
    id: "risks",
    text: "I understand that the Diode/Laser is a device used for hair removal and that clinical results may vary in different skin types and hair types. I understand there is a possibility of short-term effects such as reddening, blistering, scabbing, temporary bruising, and temporary discoloration of the skin, as well as rare side effects such as scarring and permanent discoloration. These effects have been fully explained to me.",
  },
  {
    id: "individualResults",
    text: "Clinical results may vary depending on individual factors, including medical history, skin and hair type, patient compliance with pre/post treatment instructions, and individual response to treatment. I understand that epilation with the Diode laser system is a safe alternative to methods used for removing unwanted hair, such as shaving, waxing, chemical epilation, and electrolysis. Zero epilation will be done during/in between tx.",
  },
  {
    id: "treatmentSeries",
    text: "I understand that treatment by the Diode laser hair removal system involves a series of treatments, and the fee structure has been fully explained to me.",
  },
  {
    id: "naturePurpose",
    text: "I certify that I have been fully informed of the nature and purpose of the procedure, expected outcomes and possible complications, and I understand that no guarantee can be given as to the result obtained. I am fully aware that my condition is of cosmetic concern and that the decision to proceed is based solely on my expressed desire to do so.",
  },
  {
    id: "pregnancyAccutaneDevices",
    text: "I confirm that I am not pregnant at this time, and that I have not taken Accutane within the last 6 months. I do not have a pacemaker or internal defibrillator.",
  },
  {
    id: "cancellationPolicy",
    text: "I understand the cancellation policy. Failure to provide 24 notice or no show will require a deposit to be scheduled for the next appointment. If a package is purchased and there is a no show or less than 24hrs notice for the cancellation the amount for that session will be lost due to lost income for that appointment time.",
  },
  {
    id: "photography",
    text: "I consent to the taking of photographs and authorize their anonymous use for the purposes of medical audit and/or promotion.",
  },
  {
    id: "recommendedTreatments",
    text: "I understand it is recommended that I have between 6-10 treatments for optimal results and follow up with maintenance treatments as needed to maintain my results.",
  },
  {
    id: "promotionalExpiry",
    text: "I understand all laser promotional packages expire after 1 year from the date of purchase.",
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
        <p className="mt-3 text-base text-foreground">
          I duly authorize{" "}
          <span className="font-semibold">Ashley Wojnowski</span> to perform the{" "}
          <span className="font-semibold">DIODE Laser Hair Removal</span>{" "}
          procedure.
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
              Patient's Name (Print)
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
                    I certify that I have been given the opportunity to ask
                    questions and that I have read and fully understand the
                    contents of this consent form.
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
