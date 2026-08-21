"use client";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FormNavigation({
  onBack,
  onContinue,
  isFirstStep,
  isFinalStep,
  isSubmitting,
}: {
  onBack: () => void;
  onContinue: () => void;
  isFirstStep: boolean;
  isFinalStep: boolean;
  isSubmitting?: boolean;
}) {
  return (
    <div
      className="sticky bottom-0 -mx-4 mt-8 border-t border-border bg-background/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={onBack}
          disabled={isFirstStep || isSubmitting}
          className="h-12 min-w-[104px] text-base"
        >
          Back
        </Button>
        <Button
          type="button"
          size="lg"
          onClick={onContinue}
          disabled={isSubmitting}
          className="h-12 min-w-[140px] text-base"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting...
            </>
          ) : isFinalStep ? (
            "Submit Form"
          ) : (
            "Continue"
          )}
        </Button>
      </div>
    </div>
  );
}
