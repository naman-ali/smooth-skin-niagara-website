import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { clientFormResolver } from "@/lib/client-form/validation";
import { buildClientFormSubmission } from "@/lib/client-form/submission";
import type { FormValues } from "@/lib/client-form/form-values";
import type { ClientFormSubmission } from "@/lib/client-form/submission";
import { parsePhoneNumberFromString } from "libphonenumber-js";

async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) return null;
  const profile = await prisma.profile.findUnique({ where: { userId } });
  return profile?.role === "admin" ? userId : null;
}

function normalizePhone(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  const parsed = parsePhoneNumberFromString(trimmed);
  return parsed?.isValid() ? parsed.formatInternational() : trimmed;
}

async function findOrCreateContact(client: ClientFormSubmission["client"]) {
  const email = client.email.trim().toLowerCase();
  const normalizedPhone = normalizePhone(client.phone);

  if (normalizedPhone) {
    const byPhone = await prisma.contact.findFirst({
      where: { phone: normalizedPhone },
    });
    if (byPhone) {
      return prisma.contact.update({
        where: { id: byPhone.id },
        data: { contactType: "client" },
      });
    }
  }

  const byEmail = await prisma.contact.findFirst({ where: { email } });
  if (byEmail) {
    return prisma.contact.update({
      where: { id: byEmail.id },
      data: { contactType: "client" },
    });
  }

  return prisma.contact.create({
    data: {
      name: `${client.firstName.trim()} ${client.lastName.trim()}`.trim(),
      email,
      phone: normalizedPhone || null,
      message: "Client intake form submission",
      source: "client-form",
      contactType: "client",
    },
  });
}

/**
 * Public endpoint used by the client intake form. No auth is required
 * since this is filled out by prospective/returning clients, not staff.
 * The submitted answers are re-validated server-side with the same
 * resolver the form uses client-side before anything is persisted.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const values = (body as { values?: FormValues } | null)?.values;
  if (!values || typeof values !== "object") {
    return NextResponse.json(
      { error: "Missing form values." },
      { status: 400 },
    );
  }

  const { errors } = await clientFormResolver(
    values,
    {},
    { shouldUseNativeValidation: false, fields: {} },
  );
  if (errors && Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: "The form contains invalid or missing answers.", errors },
      { status: 422 },
    );
  }

  const submission = buildClientFormSubmission(values);
  const contact = await findOrCreateContact(submission.client);

  const created = await prisma.clientFormSubmission.create({
    data: {
      formVersion: submission.formVersion,
      selectedTreatments: submission.selectedTreatments,
      firstName: submission.client.firstName,
      lastName: submission.client.lastName,
      email: contact.email,
      phone: contact.phone ?? submission.client.phone,
      submission: submission as object,
      submittedAt: new Date(submission.submittedAt),
      contact: { connect: { id: contact.id } },
    },
  });

  return NextResponse.json({ id: created.id }, { status: 201 });
}

/** Admin-only: list submitted client intake forms, most recent first. */
export async function GET() {
  const adminId = await requireAdmin();
  if (!adminId) {
    return new NextResponse("Forbidden", { status: 403 });
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
  return NextResponse.json(submissions);
}
