import type { SelectOption } from "./types";

export const REFERRAL_SOURCE_OPTIONS: SelectOption[] = [
  { value: "google", label: "Google" },
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "friend_family", label: "Friend / Family" },
  { value: "existing_client", label: "Existing Client" },
  { value: "website", label: "Website" },
  { value: "walk_in", label: "Walk-in / Saw the location" },
];

export const REFERRAL_OTHER_VALUE = "other";
export const REFERRAL_OTHER_LABEL = "Other";

/** Referral source values for which we ask an optional "who referred you?" follow-up. */
export const REFERRER_NAME_VALUES = ["friend_family", "existing_client"];

export function getReferralSourceLabel(value: string): string {
  if (value === REFERRAL_OTHER_VALUE) return REFERRAL_OTHER_LABEL;
  return REFERRAL_SOURCE_OPTIONS.find((option) => option.value === value)?.label ?? value;
}
