import { currentUser } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Calendar } from "lucide-react";
import { ClientSubmissionsList } from "./ClientSubmissionsList";

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

  const submissions = client.clientFormSubmissions.map((s) => ({
    id: s.id,
    formVersion: s.formVersion,
    selectedTreatments: s.selectedTreatments,
    submittedAt: s.submittedAt.toISOString(),
  }));

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
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant={client.approved ? "default" : "secondary"}>
              {client.approved ? "Approved" : "Pending"}
            </Badge>
            <Badge variant="outline" className="capitalize">
              {client.contactType}
            </Badge>
            <Badge variant="outline">{client.source}</Badge>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-2 text-foreground">
              <Mail className="size-4 text-muted-foreground" />
              {client.email}
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Phone className="size-4 text-muted-foreground" />
              {client.phone || "-"}
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Calendar className="size-4 text-muted-foreground" />
              {client.createdAt.toLocaleString()}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Client Form Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <ClientSubmissionsList submissions={submissions} />
        </CardContent>
      </Card>
    </div>
  );
}
