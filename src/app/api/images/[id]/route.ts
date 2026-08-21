import { auth } from "@clerk/nextjs/server";
import { get } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

async function requireAdmin() {
  const { userId } = await auth();
  return userId || null;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const adminId = await requireAdmin();
  if (!adminId) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const { id } = await params;
  const contact = await prisma.contact.findUnique({ where: { id } });
  if (!contact || !contact.imageUrl) {
    return new NextResponse("Not found", { status: 404 });
  }

  const result = await get(contact.imageUrl, { access: "private" });
  if (result?.statusCode !== 200 || !result.stream) {
    return new NextResponse("Not found", { status: 404 });
  }

  return new NextResponse(result.stream, {
    headers: {
      "Content-Type": result.blob.contentType,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
