import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { normalizePhone } from "@/lib/phone";
import { findDuplicateContact, normalizeEmail } from "@/lib/contacts";
import {
  alienriseAutoSyncEnabled,
  syncContactToAlienrise,
} from "@/lib/alienrise";

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
  const items = (Array.isArray(body) ? body : [body]).map(
    (data: {
      name: string;
      email?: string;
      phone?: string | null;
      approved?: boolean;
      contactType?: string;
      source?: string;
      imageUrl?: string | null;
    }) => ({
      ...data,
      email: normalizeEmail(data.email),
      phone: normalizePhone(data.phone) || null,
    }),
  );
  // Same identity rule AlienRise applies: email OR phone match = duplicate.
  for (const data of items) {
    const existing = await findDuplicateContact(data);
    if (existing) {
      return NextResponse.json(
        {
          error: `Duplicate: ${existing.name || existing.email || existing.phone} already has this email or phone.`,
          existing,
        },
        { status: 409 },
      );
    }
  }
  const contacts = await Promise.all(
    items.map((data) => prisma.contact.create({ data })),
  );
  if (alienriseAutoSyncEnabled()) {
    await Promise.all(
      contacts
        .filter((c) => c.contactType !== "lead")
        .map((c) => syncContactToAlienrise(c)),
    );
  }
  return NextResponse.json(Array.isArray(body) ? contacts : contacts[0], {
    status: 201,
  });
}
