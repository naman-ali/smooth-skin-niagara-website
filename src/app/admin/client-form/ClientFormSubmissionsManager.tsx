"use client";

import { useMemo, useState } from "react";
import {
  BadgeCheck,
  Calendar,
  Eye,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Search,
  Trash2,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getTreatmentDefinition } from "@/lib/client-form/schema";
import { flattenSectionQuestions } from "@/lib/client-form/conditional";
import { isQuestionVisible } from "@/lib/client-form/conditional";
import type { ClientFormSubmission } from "@/lib/client-form/submission";
import type {
  FormQuestion,
  MultiSelectWithOtherAnswer,
  SingleSelectWithOtherAnswer,
} from "@/lib/client-form/types";

type SubmissionSummary = {
  id: string;
  formVersion: string;
  selectedTreatments: string[];
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  submittedAt: string;
};

const TREATMENT_BADGE_STYLES: Record<string, string> = {
  "laser-hair-removal": "border-transparent bg-olive-100 text-olive-700",
  "lash-lift-tint": "border-transparent bg-ink-900/5 text-ink-900",
};

function treatmentLabel(id: string): string {
  return getTreatmentDefinition(id)?.name ?? id;
}

function treatmentBadgeClass(id: string): string {
  return TREATMENT_BADGE_STYLES[id] ?? "";
}

function initials(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase() || "?";
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function ClientFormSubmissionsManager({
  submissions: initial,
}: {
  submissions: SubmissionSummary[];
}) {
  const [submissions, setSubmissions] = useState(initial);
  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState<ClientFormSubmission | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<SubmissionSummary | null>(
    null,
  );
  const [deleting, setDeleting] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return submissions;
    return submissions.filter((s) =>
      [s.firstName, s.lastName, s.email, s.phone]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [submissions, query]);

  const viewDetail = async (id: string) => {
    setDetailOpen(true);
    setDetailLoading(true);
    setDetail(null);
    try {
      const res = await fetch(`/api/client-form/${id}`);
      if (!res.ok) return;
      const record = await res.json();
      setDetail(record.submission as ClientFormSubmission);
    } finally {
      setDetailLoading(false);
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/client-form/${deleteTarget.id}`, {
        method: "DELETE",
      });
      if (!res.ok) return;
      setSubmissions((prev) => prev.filter((s) => s.id !== deleteTarget.id));
      setDeleteTarget(null);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <Card>
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1.5">
            <CardTitle>Submissions</CardTitle>
            <CardDescription>
              Completed client intake forms, most recent first.
            </CardDescription>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, email, phone..."
              className="pl-9"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Treatments</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="py-14 text-center text-muted-foreground"
                  >
                    {submissions.length === 0
                      ? "No submissions yet."
                      : "No submissions match your search."}
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((s) => (
                  <TableRow key={s.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-olive-100 text-sm font-semibold text-olive-700">
                          {initials(s.firstName, s.lastName)}
                        </span>
                        <span className="font-medium text-foreground">
                          {s.firstName} {s.lastName}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p className="text-foreground">{s.email}</p>
                        <p className="text-muted-foreground">{s.phone}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {s.selectedTreatments.map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className={treatmentBadgeClass(t)}
                          >
                            {treatmentLabel(t)}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                      {formatDate(s.submittedAt)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => viewDetail(s.id)}
                        >
                          <Eye className="size-4" />
                          <span className="sr-only">View</span>
                        </Button>
                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() => setDeleteTarget(s)}
                        >
                          <Trash2 className="size-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Client Intake Form</DialogTitle>
            <DialogDescription>
              Full submission details, including consents and treatment answers.
            </DialogDescription>
          </DialogHeader>
          {detailLoading || !detail ? (
            <div className="flex flex-col items-center gap-3 py-14 text-sm text-muted-foreground">
              <Loader2 className="size-5 animate-spin" />
              Loading submission...
            </div>
          ) : (
            <SubmissionDetail submission={detail} />
          )}
        </DialogContent>
      </Dialog>

      <Dialog
        open={Boolean(deleteTarget)}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Delete submission?</DialogTitle>
            <DialogDescription>
              {deleteTarget
                ? `This will permanently remove ${deleteTarget.firstName} ${deleteTarget.lastName}'s intake form. This cannot be undone.`
                : ""}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setDeleteTarget(null)}
              disabled={deleting}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={confirmDelete}
              disabled={deleting}
            >
              {deleting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

/** Renders a single question's stored answer as a short, human-readable string. */
function formatAnswer(question: FormQuestion, value: unknown): string {
  if (value === undefined || value === null || value === "") return "—";

  const otherValue = question.otherValue ?? "other";
  const optionLabel = (v: string) =>
    question.options?.find((o) => o.value === v)?.label ?? v;

  switch (question.type) {
    case "yesNo":
    case "checkbox":
    case "acknowledgement":
      return value === true ? "Yes" : "No";
    case "singleSelect":
      return typeof value === "string" ? optionLabel(value) : "—";
    case "singleSelectWithOther": {
      const answer = value as Partial<SingleSelectWithOtherAnswer>;
      if (!answer.value) return "—";
      if (answer.value === otherValue) {
        return answer.otherText?.trim() || "Other";
      }
      return optionLabel(answer.value);
    }
    case "multiSelectWithOther": {
      const answer = value as Partial<MultiSelectWithOtherAnswer>;
      if (!answer.values || answer.values.length === 0) return "—";
      const labels = answer.values.map((v) =>
        v === otherValue ? answer.otherText?.trim() || "Other" : optionLabel(v),
      );
      return labels.join(", ");
    }
    case "number":
      return String(value);
    default:
      return typeof value === "string" ? value : String(value);
  }
}

function SubmissionDetail({
  submission,
}: {
  submission: ClientFormSubmission;
}) {
  return (
    <div className="space-y-6 text-sm">
      <section className="flex items-start gap-4 rounded-lg border border-border bg-muted/40 p-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-olive-100 text-base font-semibold text-olive-700">
          {initials(submission.client.firstName, submission.client.lastName)}
        </span>
        <div className="min-w-0 flex-1 space-y-1.5">
          <p className="font-display text-lg font-medium text-foreground">
            {submission.client.firstName} {submission.client.lastName}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="size-3.5" /> {submission.client.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="size-3.5" /> {submission.client.phone}
            </span>
          </div>
          <p className="inline-flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="size-3.5 shrink-0" />
            {submission.client.address
              ? `${submission.client.address.street}, ${submission.client.address.city}, ${submission.client.address.province} ${submission.client.address.postalCode}`
              : "No address provided"}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs text-muted-foreground">
            {submission.client.age ? (
              <span className="inline-flex items-center gap-1.5">
                <User className="size-3.5" /> Age {submission.client.age}
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-3.5" />
              {formatDate(submission.submittedAt)}
            </span>
            {submission.client.referralSource ? (
              <span>Heard from: {submission.client.referralSource.label}</span>
            ) : null}
          </div>
        </div>
      </section>

      <section className="space-y-2">
        <div className="flex flex-wrap gap-1.5">
          {submission.selectedTreatments.map((t) => (
            <Badge
              key={t}
              variant="secondary"
              className={treatmentBadgeClass(t)}
            >
              {treatmentLabel(t)}
            </Badge>
          ))}
        </div>
      </section>

      <Separator />

      {submission.selectedTreatments.map((treatmentId) => {
        const definition = getTreatmentDefinition(treatmentId);
        const answers =
          submission.treatmentResponses[treatmentId]?.answers ?? {};
        if (!definition) return null;
        return (
          <section key={treatmentId} className="space-y-4">
            <h3 className="font-display text-lg font-medium text-foreground">
              {definition.name}
            </h3>
            {definition.sections.map((section) => {
              const questions = flattenSectionQuestions(section).filter((q) =>
                isQuestionVisible(q.showWhen, answers),
              );
              if (questions.length === 0) return null;
              return (
                <div key={section.id} className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {section.title}
                  </p>
                  <dl className="divide-y divide-border rounded-md border border-border">
                    {questions.map((question) => (
                      <div
                        key={question.id}
                        className="grid grid-cols-1 gap-1 px-3 py-2 sm:grid-cols-2 sm:gap-4"
                      >
                        <dt className="text-muted-foreground">
                          {question.label}
                        </dt>
                        <dd className="font-medium text-foreground">
                          {formatAnswer(question, answers[question.id])}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              );
            })}
          </section>
        );
      })}

      <Separator />

      <section className="space-y-2">
        <h3 className="font-display text-lg font-medium text-foreground">
          Consent &amp; Acknowledgement
        </h3>
        <div className="space-y-2 rounded-md border border-border p-3">
          {submission.selectedTreatments.map((t) => {
            const consent = submission.consents[t];
            if (!consent) return null;
            return (
              <div
                key={t}
                className="flex items-center justify-between gap-4 text-sm"
              >
                <span className="text-muted-foreground">
                  {treatmentLabel(t)} consent
                </span>
                <span
                  className={
                    consent.accepted
                      ? "inline-flex items-center gap-1.5 font-medium text-olive-700"
                      : "inline-flex items-center gap-1.5 font-medium text-destructive"
                  }
                >
                  <BadgeCheck className="size-4" />
                  {consent.accepted ? "Accepted" : "Not accepted"}
                </span>
              </div>
            );
          })}
          <Separator />
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            <span className="text-muted-foreground">Typed legal name</span>
            <span className="font-medium text-foreground">
              {submission.acknowledgement.typedName}
            </span>
            <span className="text-muted-foreground">Final acknowledgement</span>
            <span className="font-medium text-foreground">
              {submission.acknowledgement.accepted
                ? "Accepted"
                : "Not accepted"}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
