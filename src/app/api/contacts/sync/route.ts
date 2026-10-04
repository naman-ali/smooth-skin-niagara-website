import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { syncContactToAlienrise } from "@/lib/alienrise";

async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) return null;
  const profile = await prisma.profile.findUnique({ where: { userId } });
  return profile?.role === "admin" ? userId : null;
}

export const maxDuration = 60;

const MAX_BATCH = 50;
// Stop processing well before maxDuration so the function can still
// return what it finished (plus the leftover ids) instead of being killed.
const TIME_BUDGET_MS = 45_000;

/**
 * Admin bulk action: sync the selected contacts to AlienRise through
 * POST /api/v1/contacts/upsert. Facts-only — this endpoint never creates
 * review intent, never calls /review-requests, and never queues customers
 * for approval. One failed contact does not break the batch; per-contact
 * results are returned for partial-success reporting.
 *
 * Contacts are synced by a small worker pool with a short delay between
 * requests: the AlienRise API is rate-limited to 120 req/min (~2 req/s),
 * so 4 workers keeps throughput near ~1.5 req/s while absorbing the
 * upstream's ~2.5s per-request latency. 429s/5xx are retried inside
 * syncContactToAlienrise.
 */
export async function POST(request: NextRequest) {
  const adminId = await requireAdmin();
  if (!adminId) {
    return new NextResponse("Forbidden", { status: 403 });
  }
  const body = await request.json();
  const ids: unknown = body?.ids;
  if (!Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json(
      { error: "No contact ids provided" },
      { status: 400 },
    );
  }
  if (ids.length > MAX_BATCH) {
    return NextResponse.json(
      { error: `Sync in batches of ${MAX_BATCH} contacts or fewer` },
      { status: 400 },
    );
  }
  const contacts = await prisma.contact.findMany({
    where: {
      id: { in: ids.filter((id): id is string => typeof id === "string") },
    },
  });
  const results: { contactId: string; ok: boolean; error?: string }[] = [];
  const deadline = Date.now() + TIME_BUDGET_MS;
  let cursor = 0;
  await Promise.all(
    Array.from({ length: 4 }, async () => {
      while (cursor < contacts.length && Date.now() < deadline) {
        const contact = contacts[cursor++];
        results.push({
          contactId: contact.id,
          ...(await syncContactToAlienrise(contact)),
        });
        await new Promise((r) => setTimeout(r, 200));
      }
    }),
  );
  const done = new Set(results.map((r) => r.contactId));
  return NextResponse.json({
    results,
    remaining: contacts.filter((c) => !done.has(c.id)).map((c) => c.id),
  });
}
