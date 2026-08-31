import { cn } from "@/lib/utils";
import type { FormSection } from "@/lib/client-form/types";
import { QuestionRenderer } from "./questions/QuestionRenderer";

export function TreatmentSectionStep({
  treatmentId,
  section,
  compact = false,
}: {
  treatmentId: string;
  section: FormSection;
  compact?: boolean;
}) {
  return (
    <div className={cn("space-y-7", compact && "space-y-4")}>
      {section.questions.map((question) => (
        <QuestionRenderer
          key={question.id}
          question={question}
          fieldPrefix={`treatmentAnswers.${treatmentId}`}
          compact={compact}
        />
      ))}
    </div>
  );
}
