import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { syncContactToAlienrise } from "@/lib/alienrise";

async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) return null;
  const profile = await prisma.profile.findUnique({ where: { userId } });
  return profile?.role === "admin" ? userId : null;
}

export async function GET() {
  const adminId = await requireAdmin();
  if (!adminId) {
    return new NextResponse("Forbidden", { status: 403 });
  }
  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(contacts);
}

export async function POST(request: NextRequest) {
  const adminId = await requireAdmin();
  if (!adminId) {
    return new NextResponse("Forbidden", { status: 403 });
  }
  const body = await request.json();
  const items = Array.isArray(body) ? body : [body];
  const contacts = await Promise.all(
    items.map((data: any) =>
      prisma.contact.create({
        data: { ...data, phone: data.phone || null },
      }),
    ),
  );
  await Promise.all(
    contacts
      .filter((c) => c.contactType !== "lead")
      .map((c) => syncContactToAlienrise(c)),
  );
  return NextResponse.json(Array.isArray(body) ? contacts : contacts[0], {
    status: 201,
  });
}
