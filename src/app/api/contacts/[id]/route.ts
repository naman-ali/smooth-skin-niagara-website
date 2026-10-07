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

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const adminId = await requireAdmin();
  if (!adminId) {
    return new NextResponse("Forbidden", { status: 403 });
  }
  const { id } = await params;
  const body = await request.json();
  if (typeof body?.phone === "string") {
    body.phone = normalizePhone(body.phone) || null;
  }
  if (typeof body?.email === "string") {
    body.email = normalizeEmail(body.email);
  }
  if ("dnc" in body && typeof body.dnc !== "boolean") {
    return NextResponse.json(
      { error: "dnc must be a boolean" },
      { status: 400 },
    );
  }
  const current = await prisma.contact.findUnique({ where: { id } });
  if (!current) {
    return new NextResponse("Not found", { status: 404 });
  }
  // Only re-check identity when email/phone actually change — flag-only
  // updates (e.g. dnc) shouldn't 409 on a pre-existing duplicate.
  if ("email" in body || "phone" in body) {
    const duplicate = await findDuplicateContact({
      email: "email" in body ? body.email : current.email,
      phone: "phone" in body ? body.phone : current.phone,
      excludeId: id,
    });
    if (duplicate) {
      return NextResponse.json(
        {
          error: `Duplicate: ${duplicate.name || duplicate.email || duplicate.phone} already has this email or phone.`,
          existing: duplicate,
        },
        { status: 409 },
      );
    }
  }
  const contact = await prisma.contact.update({
    where: { id },
    data: body,
  });
  if (alienriseAutoSyncEnabled() && contact.contactType !== "lead") {
    await syncContactToAlienrise(contact);
  }
  return NextResponse.json(contact);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const adminId = await requireAdmin();
  if (!adminId) {
    return new NextResponse("Forbidden", { status: 403 });
  }
  const { id } = await params;
  await prisma.contact.delete({ where: { id } });
  return new NextResponse(null, { status: 204 });
}
