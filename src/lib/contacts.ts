import { prisma } from "@/lib/prisma";
import { normalizePhone } from "@/lib/phone";

/**
 * Canonical email for storage and dedupe: trimmed and lowercased.
 * Emails are case-insensitive per RFC, and MongoDB equality is
 * case-sensitive — normalizing at write time keeps dup checks simple.
 */
export function normalizeEmail(raw: string | null | undefined): string {
  return (raw ?? "").trim().toLowerCase();
}

/**
 * First existing contact sharing the normalized email OR phone — the
 * same identity rule AlienRise applies on upsert. Returns null when the
 * email/phone pair is unique (or absent). Pass excludeId when editing so
 * a contact never matches itself.
 */
export async function findDuplicateContact({
  email,
  phone,
  excludeId,
}: {
  email: string | null | undefined;
  phone: string | null | undefined;
  excludeId?: string;
}) {
  const or = [];
  const normalizedEmail = normalizeEmail(email);
  const normalizedPhone = normalizePhone(phone);
  if (normalizedEmail) or.push({ email: normalizedEmail });
  if (normalizedPhone) or.push({ phone: normalizedPhone });
  if (or.length === 0) return null;
  return prisma.contact.findFirst({
    where: {
      ...(excludeId ? { id: { not: excludeId } } : {}),
      OR: or,
    },
    select: { id: true, name: true, email: true, phone: true },
  });
}
