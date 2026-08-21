"use client";

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

export function PhoneInput({ ...props }: PhoneInputProps) {
  return (
    <BasePhoneInput
      inputComponent={Input}
      defaultCountry="US"
      international
      {...props}
    />
  );
}
