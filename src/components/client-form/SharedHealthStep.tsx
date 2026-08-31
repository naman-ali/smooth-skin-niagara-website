"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { getSharedQuestionsForTreatments } from "@/lib/client-form/schema/shared-questions";
import { QuestionRenderer } from "./questions/QuestionRenderer";

export function SharedHealthStep({
  selectedTreatments,
  compact = false,
}: {
  selectedTreatments: string[];
  compact?: boolean;
}) {
  const questions = useMemo(
    () => getSharedQuestionsForTreatments(selectedTreatments),
    [selectedTreatments],
  );

  if (questions.length === 0) return null;

  return (
    <div className={cn("space-y-7", compact && "space-y-4")}>
      {questions.map((question) => (
        <QuestionRenderer
          key={question.id}
          question={question}
          fieldPrefix="sharedAnswers"
          compact={compact}
        />
      ))}
    </div>
  );
}
