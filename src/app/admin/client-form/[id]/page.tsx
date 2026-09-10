import { currentUser } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
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
import { SubmissionDetail } from "@/app/admin/client-form/ClientFormSubmissionsManager";
import type { ClientFormSubmission } from "@/lib/client-form/submission";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

function formatDate(iso: string | Date): string {
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default async function ClientFormSubmissionDetailPage({
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
  const record = await prisma.clientFormSubmission.findUnique({
    where: { id },
    include: { contact: true },
  });

  if (!record) {
    notFound();
  }

  const submission = record.submission as unknown as ClientFormSubmission;

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <Link
          href="/admin/client-form"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "inline-flex items-center gap-1.5",
          )}
        >
          <ArrowLeft className="size-4" />
          Back to submissions
        </Link>
        {record.contact ? (
          <Link
            href={`/admin/contacts/${record.contact.id}`}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "inline-flex items-center gap-1.5",
            )}
          >
            View contact
          </Link>
        ) : null}
      </div>

      <div className="space-y-1">
        <h1 className="text-3xl font-bold">
          {record.firstName} {record.lastName}
        </h1>
        <p className="text-muted-foreground">
          Client intake form submitted {formatDate(record.submittedAt)}.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Submission Details</CardTitle>
          <CardDescription>
            Full waiver and intake form details for this submission.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SubmissionDetail submission={submission} />
        </CardContent>
      </Card>
    </div>
  );
}
