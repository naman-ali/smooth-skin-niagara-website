import { currentUser } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function PostLoginPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const profile = await prisma.profile.findUnique({
    where: { userId: user.id },
    select: { role: true },
  });

  redirect(profile?.role === "admin" ? "/admin" : "/");
}
