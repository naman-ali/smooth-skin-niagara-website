"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useFormContext, useWatch } from "react-hook-form";
import type { FormQuestion } from "@/lib/client-form/types";
import type { FormValues } from "@/lib/client-form/form-values";
import { YesNoQuestion } from "./YesNoQuestion";
import { TextQuestion } from "./TextQuestion";
import { SingleSelectQuestion } from "./SingleSelectQuestion";
import { SingleSelectWithOtherQuestion } from "./SingleSelectWithOtherQuestion";
import { MultiSelectWithOtherQuestion } from "./MultiSelectWithOtherQuestion";
import { CheckboxQuestion } from "./CheckboxQuestion";

/**
 * Renders a single configured question (and its optional, possibly chained,
 * followUp questions), driven entirely by the question's `type`. Adding a
 * new treatment never requires touching this file as long as it reuses the
 * existing question types.
 */
export function QuestionRenderer({
  question,
  fieldPrefix,
  compact = false,
}: {
  question: FormQuestion;
  /** e.g. "treatmentAnswers.laser-hair-removal" */
  fieldPrefix: string;
  compact?: boolean;
}) {
  return (
    <QuestionNode
      question={question}
      fieldPrefix={fieldPrefix}
      compact={compact}
    />
  );
}

function QuestionNode({
  question,
  fieldPrefix,
  compact,
}: {
  question: FormQuestion;
  fieldPrefix: string;
  compact: boolean;
}) {
  const name = `${fieldPrefix}.${question.id}`;

  return (
    <div className={cn("space-y-4", compact && "space-y-2")}>
      <SingleQuestionField question={question} name={name} compact={compact} />
      {question.followUp ? (
        <FollowUpQuestion
          followUp={question.followUp}
          fieldPrefix={fieldPrefix}
          parentName={name}
          compact={compact}
        />
      ) : null}
    </div>
  );
}

function FollowUpQuestion({
  followUp,
  fieldPrefix,
  parentName,
  compact,
}: {
  followUp: FormQuestion;
  fieldPrefix: string;
  parentName: string;
  compact: boolean;
}) {
  const { control, setValue } = useFormContext<FormValues>();
  const parentValue = useWatch({ control, name: parentName as never });
  const followUpName = `${fieldPrefix}.${followUp.id}`;

  const visible = followUp.showWhen
    ? parentValue === followUp.showWhen.equals
    : true;

  useEffect(() => {
    if (!visible) {
      // Clear this followUp's value and any of its own nested followUps so
      // stale answers are never submitted for hidden conditional fields.
      clearQuestionChain(followUp, fieldPrefix, setValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, followUpName]);

  if (!visible) return null;

  return (
    <div className="ml-1 border-l-2 border-border pl-4">
      <QuestionNode
        question={followUp}
        fieldPrefix={fieldPrefix}
        compact={compact}
      />
    </div>
  );
}

function clearQuestionChain(
  question: FormQuestion,
  fieldPrefix: string,
  setValue: ReturnType<typeof useFormContext<FormValues>>["setValue"],
) {
  const name = `${fieldPrefix}.${question.id}`;
  setValue(name as never, undefined as never, {
    shouldValidate: false,
    shouldDirty: false,
  });
  if (question.followUp) {
    clearQuestionChain(question.followUp, fieldPrefix, setValue);
  }
}

function SingleQuestionField({
  question,
  name,
  compact = false,
}: {
  question: FormQuestion;
  name: string;
  compact?: boolean;
}) {
  switch (question.type) {
    case "yesNo":
      return (
        <YesNoQuestion
          name={name}
          label={question.label}
          description={question.description}
          helperText={question.helperText}
          required={question.required}
          compact={compact}
        />
      );
    case "singleSelect":
      return (
        <SingleSelectQuestion
          name={name}
          label={question.label}
          description={question.description}
          options={question.options ?? []}
          required={question.required}
          compact={compact}
        />
      );
    case "singleSelectWithOther":
      return (
        <SingleSelectWithOtherQuestion
          name={name}
          label={question.label}
          description={question.description}
          options={question.options ?? []}
          required={question.required}
          allowOther={question.allowOther}
          otherValue={question.otherValue}
          otherLabel={question.otherLabel}
          otherFieldLabel={question.otherFieldLabel}
          otherPlaceholder={question.otherPlaceholder}
          compact={compact}
        />
      );
    case "multiSelectWithOther":
      return (
        <MultiSelectWithOtherQuestion
          name={name}
          label={question.label}
          description={question.description}
          options={question.options ?? []}
          required={question.required}
          allowOther={question.allowOther}
          otherValue={question.otherValue}
          otherLabel={question.otherLabel}
          otherFieldLabel={question.otherFieldLabel}
          otherPlaceholder={question.otherPlaceholder}
          exclusiveOptions={question.exclusiveOptions}
          compact={compact}
        />
      );
    case "checkbox":
    case "acknowledgement":
      return (
        <CheckboxQuestion
          name={name}
          label={question.label}
          description={question.description}
          compact={compact}
        />
      );
    case "textarea":
      return (
        <TextQuestion
          name={name}
          type={question.type}
          label={question.label}
          description={question.description}
          helperText={question.helperText}
          placeholder={question.placeholder}
          required={question.required}
          multiline
          compact={compact}
        />
      );
    case "consentPlaceholder":
      return null;
    case "text":
    case "email":
    case "phone":
    case "number":
    default:
      return (
        <TextQuestion
          name={name}
          type={question.type}
          label={question.label}
          description={question.description}
          helperText={question.helperText}
          placeholder={question.placeholder}
          required={question.required}
          compact={compact}
        />
      );
  }
}
