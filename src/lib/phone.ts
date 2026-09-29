import { parsePhoneNumberFromString } from "libphonenumber-js";

/** Default country for numbers entered without a "+" prefix. */
const DEFAULT_COUNTRY = "CA" as const;

/**
 * Canonical storage format for every phone number written to the DB:
 * E.164 ("+19059207229"). Unparseable input is returned trimmed rather
 * than dropped so no submitted data is silently lost.
 */
export function normalizePhone(raw: string | null | undefined): string {
  const trimmed = (raw ?? "").trim();
  if (!trimmed) return "";
  const parsed = parsePhoneNumberFromString(trimmed, DEFAULT_COUNTRY);
  return parsed?.isValid() ? parsed.number : trimmed;
}

/**
 * Human-readable display format ("+1 905 920 7229"). Accepts any stored
 * variant — E.164, international with spaces, or legacy raw strings.
 */
export function formatPhoneDisplay(raw: string | null | undefined): string {
  const trimmed = (raw ?? "").trim();
  if (!trimmed) return "";
  const parsed = parsePhoneNumberFromString(trimmed, DEFAULT_COUNTRY);
  return parsed?.isValid() ? parsed.formatInternational() : trimmed;
}
