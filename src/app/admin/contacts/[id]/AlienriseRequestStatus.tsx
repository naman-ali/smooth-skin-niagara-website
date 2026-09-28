"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AlienriseRequestStatusProps {
  contactId: string;
  status: string | null;
  submittedAt: string | Date | null;
  error: string | null;
}

// We only track whether OUR /review-requests call was submitted — never
// AlienRise-side approval, queueing, or workflow state.
const STATUS_LABELS: Record<string, string> = {
  submitted: "Submitted to AlienRise",
  failed: "Failed to submit",
};

export function AlienriseRequestStatus({
  contactId,
  status,
  submittedAt,
  error,
}: AlienriseRequestStatusProps) {
  const router = useRouter();
  const [retrying, setRetrying] = useState(false);
  const [retryError, setRetryError] = useState<string | null>(null);

  if (!status) return null;

  const retry = async () => {
    setRetrying(true);
    setRetryError(null);
    try {
      const res = await fetch(
        `/api/contacts/${contactId}/retry-review-request`,
        { method: "POST" },
      );
      if (!res.ok) throw new Error((await res.text()) || "Retry failed");
      router.refresh();
    } catch (err) {
      setRetryError(err instanceof Error ? err.message : "Retry failed");
    } finally {
      setRetrying(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 sm:col-span-2">
      <Badge
        variant={status === "failed" ? "destructive" : "secondary"}
        className={
          status === "submitted"
            ? "bg-green-100 text-green-700 hover:bg-green-100"
            : undefined
        }
      >
        AlienRise review: {STATUS_LABELS[status] ?? status}
      </Badge>
      {status === "submitted" && submittedAt ? (
        <span className="text-sm text-muted-foreground">
          Submitted {new Date(submittedAt).toLocaleString()}
        </span>
      ) : null}
      {status === "failed" ? (
        <>
          <Button
            size="sm"
            variant="outline"
            onClick={retry}
            disabled={retrying}
          >
            {retrying ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <RefreshCw className="size-4" />
            )}
            Retry
          </Button>
          <span className="text-sm text-destructive">
            {error ?? retryError ?? "Unknown error"}
          </span>
        </>
      ) : null}
    </div>
  );
}
