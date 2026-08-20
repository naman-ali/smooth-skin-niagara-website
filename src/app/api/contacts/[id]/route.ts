import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
  const contact = await prisma.contact.update({
    where: { id },
    data: body,
  });
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
