"use client";

import { parsePhoneNumberFromString } from "libphonenumber-js";
import BasePhoneInput from "react-phone-number-input/input";
import { Input } from "@/components/ui/input";

interface PhoneInputProps {
  value?: string;
  onChange?: (value?: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  required?: boolean;
}

/**
 * BasePhoneInput expects a strict E.164 `value` ("+19059207229") and
 * warns on anything else. Stored numbers can be national-format
 * ("9053286930") or international with spaces ("+1 905 920 7229"), so
 * parse them against the default country and emit E.164. Unlike the
 * storage normalizer this doesn't require isValid() — even an invalid
 * number is reshaped ("+1 999" -> "+1999") so the user can see and
 * correct it. Truly unparseable values pass through untouched.
 */
function toE164(value?: string): string | undefined {
  if (!value) return value;
  const parsed = parsePhoneNumberFromString(value, "CA");
  return parsed ? parsed.number : value;
}

export function PhoneInput({ value, ...props }: PhoneInputProps) {
  return (
    <BasePhoneInput
      inputComponent={Input}
      country="CA"
      international
      value={toE164(value)}
      {...props}
    />
  );
}
