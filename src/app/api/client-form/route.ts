import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  alienriseAutoSyncEnabled,
  submitAlienriseReviewApproval,
  syncContactToAlienrise,
} from "@/lib/alienrise";
import { clientFormResolver } from "@/lib/client-form/validation";
import { buildClientFormSubmission } from "@/lib/client-form/submission";
import { sendWaiverCompletedNotification } from "@/lib/email";
import { normalizePhone } from "@/lib/phone";
import type { FormValues } from "@/lib/client-form/form-values";
import type { ClientFormSubmission } from "@/lib/client-form/submission";

async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) return null;
  const profile = await prisma.profile.findUnique({ where: { userId } });
  return profile?.role === "admin" ? userId : null;
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
      // Heal legacy/raw stored numbers with the freshly normalized one.
      data: {
        contactType: "client",
        ...(normalizedPhone ? { phone: normalizedPhone } : {}),
      },
    });
  }

  return prisma.contact.create({
    data: {
      name: `${client.firstName.trim()} ${client.lastName.trim()}`.trim(),
      email,
      phone: normalizedPhone || null,
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

  // Honeypot — bots that fill the hidden `website` field get a fake success
  // without touching the database or AlienRise.
  const honeypot = (body as { website?: unknown } | null)?.website;
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ id: "ok" }, { status: 201 });
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

  // The qualifying "new live customer" event is the FIRST client-form
  // submission for this contact — not the Contact row itself, which admin
  // adds, imports, and edits also touch without implying review intent.
  // Its ID also backs the temporary Idempotency-Key, so retries reuse the
  // original qualifying submission's key rather than inventing a new one.
  const firstSubmission = await prisma.clientFormSubmission.findFirst({
    where: { contactId: contact.id },
    orderBy: { submittedAt: "asc" },
    select: { id: true },
  });

  // Contact sync is facts-only and stays a separate operation from the
  // review-request submission below. Both are automatic flows, gated by
  // ALIENRISE_AUTO_SYNC — manual admin sync/retry still works either way.
  if (alienriseAutoSyncEnabled()) {
    await syncContactToAlienrise(contact);
  }

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

  // Explicit review intent: submit a requiresApproval request when this
  // contact has never had a successful submission — i.e. their first
  // qualifying form, plus natural retries after a failed/skipped attempt.
  // AlienRise — not this site — decides whether the customer already has a
  // review process and whether another request is allowed.
  if (
    alienriseAutoSyncEnabled() &&
    contact.alienriseReviewRequestStatus !== "submitted"
  ) {
    await submitAlienriseReviewApproval(
      contact,
      firstSubmission?.id ?? created.id,
    );
  }

  // Owner notification for every completed waiver. Runs last and never
  // throws — a Resend outage must not fail an otherwise-valid submission.
  await sendWaiverCompletedNotification(submission, created.id);

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
