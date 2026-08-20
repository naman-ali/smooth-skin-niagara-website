import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  if (!SIGNING_SECRET) {
    return NextResponse.json(
      { error: "Missing CLERK_WEBHOOK_SECRET" },
      { status: 500 }
    );
  }

  const headerPayload = await headers();
  const svixHeaders = {
    "svix-id": headerPayload.get("svix-id") || "",
    "svix-timestamp": headerPayload.get("svix-timestamp") || "",
    "svix-signature": headerPayload.get("svix-signature") || "",
  };

  const payload = await request.text();
  const wh = new Webhook(SIGNING_SECRET);

  let event: any;
  try {
    event = wh.verify(payload, svixHeaders);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "user.created" || event.type === "user.updated") {
    const { id, email_addresses, primary_email_address_id } = event.data;
    const primary =
      email_addresses?.find(
        (e: any) => e.id === primary_email_address_id
      ) || email_addresses?.[0];
    const email = primary?.email_address || "";

    await prisma.profile.upsert({
      where: { userId: id },
      update: { email },
      create: { userId: id, email, role: "user" },
    });
  }

  if (event.type === "user.deleted") {
    const { id } = event.data;
    if (id) {
      await prisma.profile.deleteMany({ where: { userId: id } });
    }
  }

  return NextResponse.json({ ok: true });
}
