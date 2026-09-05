"use client";

import { useState } from "react";
import { Eye, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SubmissionDetail } from "@/app/admin/client-form/ClientFormSubmissionsManager";
import { getTreatmentDefinition } from "@/lib/client-form/schema";
import type { ClientFormSubmission } from "@/lib/client-form/submission";

type ClientSubmissionSummary = {
  id: string;
  formVersion: string;
  selectedTreatments: string[];
  submittedAt: string;
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function treatmentLabel(id: string): string {
  return getTreatmentDefinition(id)?.name ?? id;
}

export function ClientSubmissionsList({
  submissions,
}: {
  submissions: ClientSubmissionSummary[];
}) {
  const [detail, setDetail] = useState<ClientFormSubmission | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const view = async (id: string) => {
    setDetailOpen(true);
    setDetail(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/client-form/${id}`);
      if (!res.ok) return;
      const record = await res.json();
      setDetail(record.submission as ClientFormSubmission);
    } finally {
      setLoading(false);
    }
  };

  if (submissions.length === 0) {
    return <p className="text-muted-foreground">No submissions found.</p>;
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Submitted</TableHead>
            <TableHead>Treatments</TableHead>
            <TableHead>Form Version</TableHead>
            <TableHead className="text-right">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((s) => (
            <TableRow
              key={s.id}
              className="cursor-pointer"
              onClick={() => view(s.id)}
            >
              <TableCell className="whitespace-nowrap">
                {formatDate(s.submittedAt)}
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {s.selectedTreatments.map((t) => (
                    <Badge key={t} variant="secondary">
                      {treatmentLabel(t)}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>{s.formVersion}</TableCell>
              <TableCell className="text-right">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    view(s.id);
                  }}
                >
                  <Eye className="size-4" />
                  <span className="sr-only">View submission</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent className="max-h-[90vh] max-w-7xl w-full overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Client Intake Form</DialogTitle>
            <DialogDescription>
              Full submission details, including consents and treatment answers.
            </DialogDescription>
          </DialogHeader>
          {loading || !detail ? (
            <div className="flex flex-col items-center gap-3 py-14 text-sm text-muted-foreground">
              <Loader2 className="size-5 animate-spin" />
              Loading submission...
            </div>
          ) : (
            <SubmissionDetail submission={detail} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
