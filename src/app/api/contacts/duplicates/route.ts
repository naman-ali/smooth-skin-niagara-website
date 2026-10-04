import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) return null;
  const profile = await prisma.profile.findUnique({ where: { userId } });
  return profile?.role === "admin" ? userId : null;
}

/**
 * Identity keys matching AlienRise's dedupe semantics: normalized email
 * (lowercase, +tag stripped) and normalized phone (digits only, NANP
 * country code stripped). Two contacts sharing ANY key merge into one
 * AlienRise contact on sync — transitively, so a chain of overlaps
 * collapses into a single identity.
 */
function identityKeys(contact: { email: string | null; phone: string | null }) {
  const keys: { type: "email" | "phone"; value: string }[] = [];
  const email = contact.email?.trim().toLowerCase();
  if (email) {
    const [local, domain] = email.split("@");
    const value = domain ? `${local.split("+")[0]}@${domain}` : email;
    keys.push({ type: "email", value });
  }
  let digits = contact.phone?.replace(/\D/g, "") ?? "";
  if (digits.length === 11 && digits.startsWith("1")) digits = digits.slice(1);
  if (digits.length >= 7) keys.push({ type: "phone", value: digits });
  return keys;
}

/**
 * Admin action: group contacts that would merge into the same AlienRise
 * contact. Returns only groups with more than one member plus the totals,
 * so the dashboard can explain "X synced → Y contacts in AlienRise".
 */
export async function GET() {
  const adminId = await requireAdmin();
  if (!adminId) {
    return new NextResponse("Forbidden", { status: 403 });
  }
  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: "asc" },
  });

  // Union-find over identity keys.
  const parent = new Map(contacts.map((c) => [c.id, c.id]));
  const find = (id: string): string => {
    let root = id;
    while (parent.get(root) !== root) root = parent.get(root)!;
    while (parent.get(id) !== id) {
      const next = parent.get(id)!;
      parent.set(id, root);
      id = next;
    }
    return root;
  };
  const firstSeen = new Map<string, string>();
  for (const contact of contacts) {
    for (const key of identityKeys(contact)) {
      const id = `${key.type}:${key.value}`;
      const existing = firstSeen.get(id);
      if (existing) parent.set(find(existing), find(contact.id));
      else firstSeen.set(id, contact.id);
    }
  }

  const groups = new Map<string, typeof contacts>();
  for (const contact of contacts) {
    const root = find(contact.id);
    const members = groups.get(root) ?? [];
    members.push(contact);
    groups.set(root, members);
  }

  const duplicates = [...groups.values()]
    .filter((members) => members.length > 1)
    .map((members) => {
      // Identity keys shared by at least two members of the group.
      const counts = new Map<string, { type: string; value: string; n: number }>();
      for (const member of members) {
        for (const key of new Set(identityKeys(member).map((k) => k))) {
          const id = `${key.type}:${key.value}`;
          const entry = counts.get(id) ?? { ...key, n: 0 };
          entry.n++;
          counts.set(id, entry);
        }
      }
      return {
        shared: [...counts.values()]
          .filter((k) => k.n > 1)
          .map(({ type, value }) => ({ type, value })),
        members: members.map((m) => ({
          id: m.id,
          name: m.name,
          email: m.email,
          phone: m.phone,
          source: m.source,
          createdAt: m.createdAt,
        })),
      };
    });

  return NextResponse.json({
    total: contacts.length,
    distinct: groups.size,
    groups: duplicates,
  });
}
