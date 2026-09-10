"use client";

import { useFormContext } from "react-hook-form";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getSelectedTreatmentDefinitions } from "@/lib/client-form/schema";
import {
  flattenSectionQuestions,
  isQuestionVisible,
} from "@/lib/client-form/conditional";
import { buildWizardSteps, type WizardStep } from "@/lib/client-form/steps";
import type {
  FormValues,
  ReferralSourceValue,
} from "@/lib/client-form/form-values";
import type {
  FormQuestion,
  MultiSelectWithOtherAnswer,
  SingleSelectWithOtherAnswer,
} from "@/lib/client-form/types";
import {
  getReferralSourceLabel,
  REFERRAL_OTHER_VALUE,
} from "@/lib/client-form/referral-source";
import { getSharedQuestionsForTreatments } from "@/lib/client-form/schema/shared-questions";
import {
  PHOTO_RELEASE_CONSENT_ID,
  photoReleaseConsent,
} from "@/lib/client-form/schema/photo-release";
import { isMinorAge } from "@/lib/client-form/guardian";

function formatAnswer(question: FormQuestion, value: unknown): string {
  if (question.type === "singleSelectWithOther") {
    const answer = value as Partial<SingleSelectWithOtherAnswer> | undefined;
    if (!answer?.value) return "Not answered";
    const otherValue = question.otherValue ?? "other";
    if (answer.value === otherValue) return answer.otherText || "Other";
    return (
      question.options?.find((o) => o.value === answer.value)?.label ??
      answer.value
    );
  }

  if (question.type === "multiSelectWithOther") {
    const answer = value as Partial<MultiSelectWithOtherAnswer> | undefined;
    if (!answer?.values || answer.values.length === 0) return "Not answered";
    const otherValue = question.otherValue ?? "other";
    return answer.values
      .map((v) =>
        v === otherValue
          ? answer.otherText || "Other"
          : (question.options?.find((o) => o.value === v)?.label ?? v),
      )
      .join(", ");
  }

  if (value === undefined || value === null || value === "")
    return "Not answered";
  if (question.type === "yesNo") return value === true ? "Yes" : "No";
  if (question.type === "singleSelect") {
    const option = question.options?.find((o) => o.value === value);
    return option?.label ?? String(value);
  }
  return String(value);
}

function formatReferralSource(referral: ReferralSourceValue): string {
  if (!referral.value) return "Not answered";
  const label = getReferralSourceLabel(referral.value);
  if (referral.value === REFERRAL_OTHER_VALUE && referral.otherText.trim()) {
    return referral.otherText.trim();
  }
  if (referral.referrerName.trim()) {
    return `${label} \u2014 referred by ${referral.referrerName.trim()}`;
  }
  return label;
}

function findSectionStepIndex(
  steps: WizardStep[],
  treatmentId: string,
  sectionId: string,
): number {
  return steps.findIndex(
    (s) =>
      s.kind === "treatment-section" &&
      s.treatmentId === treatmentId &&
      s.sectionId === sectionId,
  );
}

export function ReviewStep({
  selectedTreatments,
  onEditStep,
}: {
  selectedTreatments: string[];
  onEditStep: (stepIndex: number) => void;
}) {
  const { getValues } = useFormContext<FormValues>();
  const values = getValues();
  const steps = buildWizardSteps(selectedTreatments);
  const clientInfoStepIndex = steps.findIndex((s) => s.kind === "client-info");
  const sharedHealthStepIndex = steps.findIndex(
    (s) => s.kind === "shared-health",
  );
  const consentsStepIndex = steps.findIndex((s) => s.kind === "consents");
  const acknowledgementStepIndex = steps.findIndex(
    (s) => s.kind === "acknowledgement",
  );
  const definitions = getSelectedTreatmentDefinitions(selectedTreatments);
  const isMinor = isMinorAge(values.clientInfo.age);

  return (
    <div className="space-y-8">
      <ReviewGroup
        title="Your Information"
        onEdit={() => onEditStep(clientInfoStepIndex)}
      >
        <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
          <ReviewItem
            label="Name"
            value={`${values.clientInfo.firstName} ${values.clientInfo.lastName}`.trim()}
          />
          <ReviewItem label="Phone" value={values.clientInfo.phone} />
          <ReviewItem label="Email" value={values.clientInfo.email} />
          <ReviewItem
            label="Address"
            value={[
              values.clientInfo.street,
              values.clientInfo.city,
              values.clientInfo.province,
              values.clientInfo.postalCode,
            ]
              .filter(Boolean)
              .join(", ")}
          />
          <ReviewItem label="Age" value={values.clientInfo.age} />
          <ReviewItem
            label="Emergency contact name"
            value={values.clientInfo.emergencyContactName}
          />
          <ReviewItem
            label="Emergency contact phone"
            value={values.clientInfo.emergencyContactPhone}
          />
          {values.clientInfo.referralSource.value ? (
            <ReviewItem
              label="How they heard about us"
              value={formatReferralSource(values.clientInfo.referralSource)}
            />
          ) : null}
        </dl>
      </ReviewGroup>

      {getSharedQuestionsForTreatments(selectedTreatments).length > 0 && (
        <ReviewGroup
          title="Health & Safety"
          onEdit={() =>
            onEditStep(
              sharedHealthStepIndex >= 0
                ? sharedHealthStepIndex
                : clientInfoStepIndex,
            )
          }
        >
          <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {getSharedQuestionsForTreatments(selectedTreatments).map(
              (question) => (
                <ReviewItem
                  key={question.id}
                  label={question.label}
                  value={formatAnswer(
                    question,
                    values.sharedAnswers?.[question.id],
                  )}
                />
              ),
            )}
          </dl>
        </ReviewGroup>
      )}

      {definitions.map((definition) => {
        const answers = values.treatmentAnswers[definition.id] ?? {};
        return (
          <ReviewGroup
            key={definition.id}
            title={definition.name}
            onEdit={() =>
              onEditStep(
                findSectionStepIndex(
                  steps,
                  definition.id,
                  definition.sections[0].id,
                ),
              )
            }
          >
            <div className="space-y-5">
              {definition.sections.map((section) => (
                <div key={section.id}>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">
                      {section.title}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        onEditStep(
                          findSectionStepIndex(
                            steps,
                            definition.id,
                            section.id,
                          ),
                        )
                      }
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                      <Pencil className="h-3 w-3" aria-hidden="true" />
                      Edit
                    </button>
                  </div>
                  <dl className="space-y-2.5">
                    {flattenSectionQuestions(section)
                      .filter((q) => isQuestionVisible(q.showWhen, answers))
                      .map((question) => (
                        <ReviewItem
                          key={question.id}
                          label={question.label}
                          value={formatAnswer(question, answers[question.id])}
                          stacked
                        />
                      ))}
                  </dl>
                </div>
              ))}
            </div>
          </ReviewGroup>
        );
      })}

      {isMinor && (
        <ReviewGroup
          title="Parent / Guardian"
          onEdit={() => onEditStep(acknowledgementStepIndex)}
        >
          <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            <ReviewItem
              label="Guardian full legal name"
              value={values.guardian.fullName}
            />
            <ReviewItem
              label="Guardian confirmation"
              value={values.guardian.accepted ? "Confirmed" : "Not confirmed"}
            />
          </dl>
        </ReviewGroup>
      )}

      <ReviewGroup
        title="Consents"
        onEdit={() => onEditStep(consentsStepIndex)}
      >
        <dl className="space-y-2.5">
          {definitions.map((definition) => (
            <div key={definition.id}>
              <dt className="text-sm text-muted-foreground">
                {definition.name}
              </dt>
              <dd className="text-[15px] font-medium text-foreground">
                {definition.id === "laser-hair-removal" ? (
                  <LaserConsentReview
                    consent={values.consents["laser-hair-removal"]}
                  />
                ) : definition.consent.status === "pending-clinic-content" ? (
                  <span className="text-muted-foreground">
                    Awaiting clinic consent form
                  </span>
                ) : (
                  <span>
                    {values.consents[definition.id]?.accepted
                      ? "Accepted"
                      : "Not accepted"}
                  </span>
                )}
              </dd>
            </div>
          ))}
          <div>
            <dt className="text-sm text-muted-foreground">
              {photoReleaseConsent.title}
            </dt>
            <dd className="text-[15px] font-medium text-foreground">
              {values.consents[PHOTO_RELEASE_CONSENT_ID]?.accepted
                ? "Accepted"
                : "Not accepted"}
            </dd>
          </div>
        </dl>
      </ReviewGroup>
    </div>
  );
}

function LaserConsentReview({
  consent,
}: {
  consent: FormValues["consents"]["laser-hair-removal"] | undefined;
}) {
  const ack = consent?.acknowledgements ?? {};
  const allAcknowledged =
    ack.risks === true &&
    ack.individualResults === true &&
    ack.treatmentSeries === true &&
    ack.naturePurpose === true &&
    ack.pregnancyAccutaneDevices === true &&
    ack.cancellationPolicy === true &&
    ack.recommendedTreatments === true &&
    ack.promotionalExpiry === true;

  const photoConsent = consent?.photoConsent;
  const photoConsentLabel =
    photoConsent === true
      ? "Yes"
      : photoConsent === false
        ? "No"
        : "Not answered";

  return (
    <div className="space-y-1">
      <p>
        {allAcknowledged
          ? "Required acknowledgements completed"
          : "Acknowledgements incomplete"}
      </p>
      <p>Photography permission: {photoConsentLabel}</p>
    </div>
  );
}

function ReviewGroup({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl font-medium text-foreground">
          {title}
        </h3>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onEdit}
          className="gap-1.5"
        >
          <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
          Edit
        </Button>
      </div>
      {children}
      <Separator />
    </div>
  );
}

function ReviewItem({
  label,
  value,
  stacked,
}: {
  label: string;
  value: string;
  stacked?: boolean;
}) {
  return (
    <div className={stacked ? "" : undefined}>
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-[15px] font-medium text-foreground">
        {value || "\u2014"}
      </dd>
    </div>
  );
}
