import { getSelectedTreatmentDefinitions } from "@/lib/client-form/schema";
import { ConsentSection } from "./ConsentSection";

export function ConsentsStep({ selectedTreatments }: { selectedTreatments: string[] }) {
  const definitions = getSelectedTreatmentDefinitions(selectedTreatments);

  return (
    <div className="space-y-6">
      {definitions.map((definition) => (
        <ConsentSection key={definition.id} consent={definition.consent} />
      ))}
    </div>
  );
}
