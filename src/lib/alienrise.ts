import type { Contact } from "@prisma/client";
import { prisma } from "@/lib/prisma";

type AlienriseContact = {
  id?: string;
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
};

/**
 * Kill-switch for AUTOMATIC AlienRise calls only — the background contact
 * sync on form submissions/imports/edits and the automatic review-request
 * submission. Set ALIENRISE_AUTO_SYNC=false to pause those automatic flows
 * without removing the API key. Explicit admin actions (manual "Sync to
 * AlienRise" bulk sync, review-request retry) are NOT affected. Defaults
 * to enabled.
 */
export function alienriseAutoSyncEnabled() {
  return process.env.ALIENRISE_AUTO_SYNC !== "false";
}

function config() {
  const apiKey = process.env.ALIENRISE_API;
  if (!apiKey) return null;
  const baseUrl = (
    process.env.ALIENRISE_API_URL ?? "http://localhost:3000/api/v1"
  ).replace(/\/+$/, "");
  return { apiKey, baseUrl };
}

/**
 * Normalize into the AlienRise contact shape. Returns null when there is
 * no usable identifier — the API requires at least one of email/phone.
 */
function toAlienriseContact(contact: AlienriseContact) {
  const email = contact.email?.trim() || undefined;
  const phone = contact.phone?.trim() || undefined;
  if (!email && !phone) return null;

  let firstName = contact.firstName?.trim() || undefined;
  let lastName = contact.lastName?.trim() || undefined;
  if (firstName === undefined && lastName === undefined && contact.name) {
    const parts = contact.name.trim().split(/\s+/);
    firstName = parts.shift() || undefined;
    lastName = parts.join(" ") || undefined;
  }

  return { firstName, lastName, email, phone };
}

export type AlienriseResult = { ok: true } | { ok: false; error: string };

/**
 * Upsert a customer in AlienRise through the Developer API
 * (POST /api/v1/contacts/upsert). The API dedupes on email/phone, so
 * repeated calls are safe. This is strictly facts-only — it never creates
 * review intent. Never throws — a failed sync must not break contact
 * creation — but the result is returned so callers (e.g. the admin bulk
 * sync) can report per-contact outcomes.
 */
export async function syncContactToAlienrise(
  contact: AlienriseContact,
): Promise<AlienriseResult> {
  const cfg = config();
  if (!cfg) return { ok: false, error: "ALIENRISE_API is not configured" };

  const body = toAlienriseContact(contact);
  if (!body) return { ok: false, error: "Contact has no email or phone" };

  try {
    const res = await fetch(`${cfg.baseUrl}/contacts/upsert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cfg.apiKey}`,
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(`AlienRise contact upsert failed (${res.status}):`, text);
      return { ok: false, error: `AlienRise ${res.status}: ${text}` };
    }
    return { ok: true };
  } catch (error) {
    console.error("AlienRise contact upsert error:", error);
    return { ok: false, error: String(error) };
  }
}

/**
 * Ask AlienRise to queue a review request for owner approval
 * (POST /api/v1/review-requests with requiresApproval:true). The customer
 * is resolved by AlienRise's own identity rules; consent, cooldown, dedup
 * and workflow state are all owned by AlienRise — a replayed request simply
 * returns the customer's current result rather than duplicating work.
 * Never throws — failures are reported in the result.
 *
 * The caller supplies the Idempotency-Key. TEMPORARY COMPATIBILITY: the
 * current endpoint still requires this header, so callers pass an existing
 * stable local identifier (e.g. the qualifying ClientFormSubmission id).
 * Smooth Skin does not rely on the key for duplicate/workflow protection —
 * remove this once the API accepts keyless requests.
 */
export async function requestReviewFromAlienrise(
  contact: AlienriseContact,
  idempotencyKey: string,
): Promise<AlienriseResult> {
  const cfg = config();
  if (!cfg) return { ok: false, error: "ALIENRISE_API is not configured" };

  const body = toAlienriseContact(contact);
  if (!body) return { ok: false, error: "Contact has no email or phone" };

  try {
    const res = await fetch(`${cfg.baseUrl}/review-requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cfg.apiKey}`,
        "Idempotency-Key": idempotencyKey,
      },
      body: JSON.stringify({ contact: body, requiresApproval: true }),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { ok: false, error: `AlienRise ${res.status}: ${text}` };
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error: String(error) };
  }
}

/**
 * Submit the explicit requiresApproval review request for a customer whose
 * first qualifying client-form submission just arrived. Called ONLY from
 * that intake event (or its admin retry) — never from contact sync,
 * imports, edits, or any generic persistence path.
 *
 * AlienRise is the authority on whether the customer already has a review
 * process and whether another request is allowed; this function does not
 * decide that locally. Only the SUBMISSION outcome is recorded on the
 * contact (submitted/failed + last error) purely for admin visibility and
 * safe retry — it never implies approval, queueing, or workflow state.
 * Never throws — this must not break form submission.
 */
export async function submitAlienriseReviewApproval(
  contact: Contact,
  clientFormSubmissionId: string,
): Promise<void> {
  try {
    const result = await requestReviewFromAlienrise(
      contact,
      // Temporary compatibility key — see requestReviewFromAlienrise.
      `ssn-client-form-${clientFormSubmissionId}`,
    );
    await prisma.contact.update({
      where: { id: contact.id },
      data: result.ok
        ? {
            alienriseReviewRequestStatus: "submitted",
            alienriseReviewSubmittedAt: new Date(),
            alienriseReviewRequestError: null,
          }
        : {
            alienriseReviewRequestStatus: "failed",
            alienriseReviewRequestError: result.error,
          },
    });
  } catch (error) {
    console.error("AlienRise review-request error:", error);
  }
}
