// Shared helper for the under-18 guardian flow. The Laser Hair Removal
// paperwork includes a "Patient/Guardian signature — Under age 18" line;
// we reuse the client's existing Age answer to decide whether a guardian
// name + acknowledgement must be collected before submission.

export function isMinorAge(age: string | undefined | null): boolean {
  if (!age) return false;
  const parsed = Number(age.trim());
  return Number.isFinite(parsed) && parsed >= 0 && parsed < 18;
}
