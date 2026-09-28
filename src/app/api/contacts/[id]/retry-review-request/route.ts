import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { submitAlienriseReviewApproval } from "@/lib/alienrise";

async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) return null;
  const profile = await prisma.profile.findUnique({ where: { userId } });
  return profile?.role === "admin" ? userId : null;
}

/**
 * Admin recovery action: re-send the requiresApproval review request for a
 * customer whose last submission failed. Safe — it simply calls
 * /api/v1/review-requests again and AlienRise resolves the customer's
 * current state (a replayed/lost earlier request returns the existing
 * result instead of duplicating).
 *
 * The compatibility Idempotency-Key is always derived from the ORIGINAL
 * qualifying client-form submission — never a different local ID.
 */
export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const adminId = await requireAdmin();
  if (!adminId) {
    return new NextResponse("Forbidden", { status: 403 });
  }
  const { id } = await params;
  const contact = await prisma.contact.findUnique({ where: { id } });
  if (!contact) {
    return new NextResponse("Not found", { status: 404 });
  }

  const firstSubmission = await prisma.clientFormSubmission.findFirst({
    where: { contactId: contact.id },
    orderBy: { submittedAt: "asc" },
    select: { id: true },
  });
  if (!firstSubmission) {
    // The qualifying submission ID backs the Idempotency-Key; inventing a
    // different key would change its semantics, so fail loudly instead.
    console.error(
      `Cannot retry review request for contact ${contact.id}: no qualifying client-form submission found.`,
    );
    return new NextResponse(
      "Cannot retry: this contact has no qualifying client-form submission.",
      { status: 422 },
    );
  }

  await submitAlienriseReviewApproval(contact, firstSubmission.id);

  const fresh = await prisma.contact.findUnique({
    where: { id },
    select: {
      alienriseReviewRequestStatus: true,
      alienriseReviewSubmittedAt: true,
      alienriseReviewRequestError: true,
    },
  });
  return NextResponse.json(fresh);
}
