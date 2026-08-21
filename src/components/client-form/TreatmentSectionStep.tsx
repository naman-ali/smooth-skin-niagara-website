import type { FormSection } from "@/lib/client-form/types";
import { QuestionRenderer } from "./questions/QuestionRenderer";

export function TreatmentSectionStep({
  treatmentId,
  section,
}: {
  treatmentId: string;
  section: FormSection;
}) {
  return (
    <div className="space-y-7">
      {section.questions.map((question) => (
        <QuestionRenderer
          key={question.id}
          question={question}
          fieldPrefix={`treatmentAnswers.${treatmentId}`}
        />
      ))}
    </div>
  );
}
