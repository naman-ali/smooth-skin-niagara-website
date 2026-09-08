import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ClientFormSubmissionsManager from "./ClientFormSubmissionsManager";

export default async function AdminClientFormPage() {
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

  const submissions = await prisma.clientFormSubmission.findMany({
    orderBy: { submittedAt: "desc" },
    select: {
      id: true,
      formVersion: true,
      selectedTreatments: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      submittedAt: true,
    },
  });

  const serialized = submissions.map((s) => ({
    ...s,
    submittedAt: s.submittedAt.toISOString(),
  }));

  return (
    <div className="w-full">
      <div className="mb-8 space-y-1">
        <h1 className="text-3xl font-bold">Client Form Submissions</h1>
        <p className="text-muted-foreground">
          Review completed intake forms submitted by clients.
        </p>
      </div>

      <ClientFormSubmissionsManager submissions={serialized} />
    </div>
  );
}
