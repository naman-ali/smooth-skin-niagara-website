import { cn } from "@/lib/utils";
import { getSelectedTreatmentDefinitions } from "@/lib/client-form/schema";
import { photoReleaseConsent } from "@/lib/client-form/schema/photo-release";
import { ConsentSection } from "./ConsentSection";
import { LaserConsentSection } from "./LaserConsentSection";

export function ConsentsStep({
  selectedTreatments,
  compact = false,
}: {
  selectedTreatments: string[];
  compact?: boolean;
}) {
  const definitions = getSelectedTreatmentDefinitions(selectedTreatments);

  return (
    <div className={cn("space-y-6", compact && "space-y-3")}>
      {definitions.map((definition) =>
        definition.id === "laser-hair-removal" ? (
          <LaserConsentSection key={definition.id} compact={compact} />
        ) : (
          <ConsentSection
            key={definition.id}
            consent={definition.consent}
            compact={compact}
          />
        ),
      )}
      {/* Applies once per submission regardless of which treatment(s) were selected. */}
      <ConsentSection consent={photoReleaseConsent} compact={compact} />
    </div>
  );
}
