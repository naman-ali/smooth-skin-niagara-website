import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requestReviewFromAlienrise } from "@/lib/alienrise";

async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) return null;
  const profile = await prisma.profile.findUnique({ where: { userId } });
  return profile?.role === "admin" ? userId : null;
}

export async function POST(request: NextRequest) {
  const adminId = await requireAdmin();
  if (!adminId) {
    return new NextResponse("Forbidden", { status: 403 });
  }
  const body = await request.json();
  const ids: unknown = body?.ids;
  if (!Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json({ error: "No contact ids provided" }, { status: 400 });
  }
  const contacts = await prisma.contact.findMany({
    where: { id: { in: ids.filter((id): id is string => typeof id === "string") } },
  });
  const results = await Promise.all(
    contacts.map(async (contact) => ({
      contactId: contact.id,
      ...(await requestReviewFromAlienrise(contact)),
    })),
  );
  return NextResponse.json({ results });
}
