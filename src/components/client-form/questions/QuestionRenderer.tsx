"use client";

import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import type { FormQuestion } from "@/lib/client-form/types";
import type { FormValues } from "@/lib/client-form/form-values";
import { YesNoQuestion } from "./YesNoQuestion";
import { TextQuestion } from "./TextQuestion";
import { SingleSelectQuestion } from "./SingleSelectQuestion";
import { CheckboxQuestion } from "./CheckboxQuestion";

/**
 * Renders a single configured question (and its optional followUp), driven
 * entirely by the question's `type`. Adding a new treatment never requires
 * touching this file as long as it reuses the existing question types.
 */
export function QuestionRenderer({
  question,
  fieldPrefix,
}: {
  question: FormQuestion;
  /** e.g. "treatmentAnswers.laser-hair-removal" */
  fieldPrefix: string;
}) {
  const name = `${fieldPrefix}.${question.id}`;

  return (
    <div className="space-y-4">
      <SingleQuestionField question={question} name={name} />
      {question.followUp ? (
        <FollowUpQuestion
          followUp={question.followUp}
          fieldPrefix={fieldPrefix}
          parentName={name}
        />
      ) : null}
    </div>
  );
}

function FollowUpQuestion({
  followUp,
  fieldPrefix,
  parentName,
}: {
  followUp: FormQuestion;
  fieldPrefix: string;
  parentName: string;
}) {
  const { control, setValue } = useFormContext<FormValues>();
  const parentValue = useWatch({ control, name: parentName as never });
  const followUpName = `${fieldPrefix}.${followUp.id}`;

  const visible = followUp.showWhen
    ? parentValue === followUp.showWhen.equals
    : true;

  useEffect(() => {
    if (!visible) {
      setValue(followUpName as never, undefined as never, {
        shouldValidate: false,
        shouldDirty: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, followUpName]);

  if (!visible) return null;

  return (
    <div className="ml-1 border-l-2 border-border pl-4">
      <SingleQuestionField question={followUp} name={followUpName} />
    </div>
  );
}

function SingleQuestionField({
  question,
  name,
}: {
  question: FormQuestion;
  name: string;
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
        />
      );
    case "checkbox":
    case "acknowledgement":
      return (
        <CheckboxQuestion
          name={name}
          label={question.label}
          description={question.description}
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
        />
      );
  }
}
