type AlienriseContact = {
  id?: string;
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
};

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

/**
 * Upsert a customer in AlienRise through the Developer API
 * (POST /api/v1/contacts/upsert). The API dedupes on email/phone, so
 * repeated calls are safe. Never throws — a failed sync must not break
 * contact creation — and is skipped when ALIENRISE_API is not configured.
 */
export async function syncContactToAlienrise(contact: AlienriseContact) {
  const cfg = config();
  if (!cfg) return;

  const body = toAlienriseContact(contact);
  if (!body) return;

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
      console.error(
        `AlienRise contact upsert failed (${res.status}):`,
        await res.text().catch(() => ""),
      );
    }
  } catch (error) {
    console.error("AlienRise contact upsert error:", error);
  }
}

export type AlienriseReviewRequestResult =
  | { ok: true }
  | { ok: false; error: string };

/**
 * Ask AlienRise to send a review request to a contact
 * (POST /api/v1/review-requests). The customer is found or created
 * through the unified identity rule; consent, cooldown and dedup rules
 * are applied by the AlienRise workflow engine. requiresApproval queues
 * each request for owner approval via assisted check-in before any
 * message is sent. Never throws — failures are reported in the result
 * so bulk pushes can continue.
 */
export async function requestReviewFromAlienrise(
  contact: AlienriseContact,
): Promise<AlienriseReviewRequestResult> {
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
        "Idempotency-Key": `ssn-review-${contact.id ?? "unknown"}-${crypto.randomUUID()}`,
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
