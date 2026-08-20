import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ContactsManager from "./ContactsManager";

export default async function AdminContactsPage() {
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

  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
  });

  const serializedContacts = contacts.map((c) => ({
    ...c,
    createdAt: c.createdAt.toISOString(),
  }));

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Contacts</h1>
      <ContactsManager contacts={serializedContacts} />
    </main>
  );
}
