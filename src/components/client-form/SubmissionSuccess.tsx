import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function SubmissionSuccess({ onDone }: { onDone: () => void }) {
  return (
    <Card className="border-border shadow-sm">
      <CardContent className="flex flex-col items-center gap-4 py-14 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <h1 className="font-display text-3xl font-medium text-foreground">Thank you</h1>
        <p className="max-w-sm text-base text-foreground">
          Your client form has been completed.
        </p>
        <p className="max-w-sm text-sm text-muted-foreground">
          If we need any additional information before your treatment, we&apos;ll
          let you know.
        </p>
        <Button type="button" size="lg" onClick={onDone} className="mt-4 h-12 min-w-[160px] text-base">
          Done
        </Button>
      </CardContent>
    </Card>
  );
}
