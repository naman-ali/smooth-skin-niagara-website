import { currentUser } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SubmissionDetail } from "@/app/admin/client-form/ClientFormSubmissionsManager";
import { getTreatmentDefinition } from "@/lib/client-form/schema";
import type { ClientFormSubmission } from "@/lib/client-form/submission";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Mail,
  Phone,
  User,
  XCircle,
} from "lucide-react";

function formatDate(iso: string | Date): string {
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function sourceLabel(source: string): string {
  return source
    .replace(/_/g, " ")
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}

function treatmentLabel(id: string): string {
  return getTreatmentDefinition(id)?.name ?? id;
}

export default async function ContactDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const profile = await prisma.profile.findUnique({
    where: { userId: user.id },
  });
  if (!profile || profile.role !== "admin") {
    return (
      <div className="p-20 text-center text-lg text-red-600">
        You don&apos;t have permission to view this page.
      </div>
    );
  }

  const { id } = await params;
  const contact = await prisma.contact.findUnique({
    where: { id },
    include: {
      clientFormSubmissions: {
        orderBy: { submittedAt: "desc" },
      },
    },
  });

  if (!contact) {
    notFound();
  }

  return (
    <div className="w-full space-y-6">
      <Link
        href="/admin/contacts"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "inline-flex items-center gap-1.5",
        )}
      >
        <ArrowLeft className="size-4" />
        Back to contacts
      </Link>

      <div className="space-y-1">
        <h1 className="text-3xl font-bold">{contact.name}</h1>
        <p className="text-muted-foreground">Contact record and history.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Details</CardTitle>
          <CardDescription>Basic information for this contact.</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-muted-foreground" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-muted-foreground" />
              <span>{contact.phone || "—"}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="size-4 shrink-0 text-muted-foreground" />
              <span className="capitalize">{contact.contactType}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-4 shrink-0 text-muted-foreground" />
              <span>Added {formatDate(contact.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              {contact.approved ? (
                <Badge
                  variant="default"
                  className="bg-green-100 text-green-700 hover:bg-green-100"
                >
                  <CheckCircle2 className="size-3" />
                  Approved
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <XCircle className="size-3" />
                  Pending approval
                </Badge>
              )}
              <span className="text-sm text-muted-foreground">
                Source: {sourceLabel(contact.source)}
              </span>
            </div>
          </dl>
        </CardContent>
      </Card>

      {contact.imageUrl ? (
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Source Image</CardTitle>
            <CardDescription>
              The image uploaded with this contact (e.g. signed waiver form).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-lg border bg-muted">
              <img
                src={`/api/images/view?pathname=${encodeURIComponent(
                  contact.imageUrl,
                )}`}
                alt={`Uploaded source document for ${contact.name}`}
                className="h-auto w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>
      ) : null}

      <div className="space-y-3">
        <h2 className="text-2xl font-bold">
          Client Form Submissions ({contact.clientFormSubmissions.length})
        </h2>
        {contact.clientFormSubmissions.length === 0 ? (
          <p className="text-muted-foreground">
            No intake forms have been submitted for this contact yet.
          </p>
        ) : contact.clientFormSubmissions.length > 1 ? (
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Treatments</TableHead>
                    <TableHead>Form Version</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contact.clientFormSubmissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="whitespace-nowrap">
                        {formatDate(submission.submittedAt)}
                      </TableCell>
                      <TableCell>
                        {submission.selectedTreatments
                          .map((t) => treatmentLabel(t))
                          .join(", ")}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {submission.formVersion}
                      </TableCell>
                      <TableCell className="text-right">
                        <Link
                          href={`/admin/client-form/${submission.id}`}
                          className={cn(
                            buttonVariants({ variant: "outline", size: "sm" }),
                            "inline-flex items-center gap-1.5",
                          )}
                        >
                          View submission
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {contact.clientFormSubmissions.map((submission) => (
              <Card key={submission.id}>
                <CardHeader>
                  <CardTitle className="text-base font-medium">
                    Submitted {formatDate(submission.submittedAt)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <SubmissionDetail
                    submission={
                      submission.submission as unknown as ClientFormSubmission
                    }
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
