import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { stepGroupLabel, type WizardStep } from "@/lib/client-form/steps";

export function FormProgress({
  steps,
  currentIndex,
}: {
  steps: WizardStep[];
  currentIndex: number;
}) {
  const total = steps.length;
  const percent = total > 1 ? Math.round((currentIndex / (total - 1)) * 100) : 0;

  // Dedupe consecutive identical labels (e.g. multiple treatment sections
  // sharing a label) into a compact breadcrumb trail for larger screens.
  const trail: { label: string; stepIndex: number }[] = [];
  steps.forEach((step, index) => {
    const label = stepGroupLabel(step);
    if (trail.length === 0 || trail[trail.length - 1].label !== label) {
      trail.push({ label, stepIndex: index });
    }
  });

  return (
    <div className="w-full">
      <div className="hidden items-center gap-1.5 pb-3 text-sm text-muted-foreground sm:flex sm:flex-wrap">
        {trail.map((item, i) => {
          const isActive =
            i === trail.length - 1
              ? currentIndex >= item.stepIndex
              : currentIndex >= item.stepIndex &&
                currentIndex < (trail[i + 1]?.stepIndex ?? total);
          const isPast = currentIndex > (trail[i + 1]?.stepIndex ?? total) - 1;
          return (
            <span key={`${item.label}-${item.stepIndex}`} className="flex items-center gap-1.5">
              <span
                className={cn(
                  "font-medium",
                  isActive
                    ? "text-foreground"
                    : isPast
                      ? "text-primary"
                      : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
              {i < trail.length - 1 ? (
                <span aria-hidden="true" className="text-border">
                  /
                </span>
              ) : null}
            </span>
          );
        })}
      </div>

      <p className="pb-2 text-sm font-medium text-muted-foreground sm:hidden">
        Step {currentIndex + 1} of {total}
      </p>

      <Progress
        value={percent}
        aria-label={`Step ${currentIndex + 1} of ${total}`}
      />
    </div>
  );
}
