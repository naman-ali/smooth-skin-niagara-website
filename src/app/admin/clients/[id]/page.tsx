import { currentUser } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ClientDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ClientDetailPage({
  params,
}: ClientDetailPageProps) {
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
  const client = await prisma.contact.findUnique({
    where: { id },
    include: {
      clientFormSubmissions: {
        orderBy: { submittedAt: "desc" },
      },
    },
  });

  if (!client) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{client.name}</h1>
        <Link
          href="/admin/contacts"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Back to Contacts
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            <strong>Email:</strong> {client.email}
          </p>
          <p>
            <strong>Phone:</strong> {client.phone || "-"}
          </p>
          <p>
            <strong>Contact Type:</strong>{" "}
            <span className="capitalize">{client.contactType}</span>
          </p>
          <p>
            <strong>Source:</strong> {client.source}
          </p>
          <p>
            <strong>Approved:</strong> {client.approved ? "Yes" : "No"}
          </p>
          <p>
            <strong>Created:</strong> {client.createdAt.toLocaleString()}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Client Form Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          {client.clientFormSubmissions.length === 0 ? (
            <p>No submissions found.</p>
          ) : (
            <ul className="space-y-4">
              {client.clientFormSubmissions.map((s) => (
                <li key={s.id} className="border-b pb-2 last:border-0">
                  <p>
                    <strong>Submission ID:</strong> {s.id}
                  </p>
                  <p>
                    <strong>Form Version:</strong> {s.formVersion}
                  </p>
                  <p>
                    <strong>Submitted:</strong> {s.submittedAt.toLocaleString()}
                  </p>
                  <p>
                    <strong>Treatments:</strong>{" "}
                    {s.selectedTreatments.join(", ") || "-"}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
