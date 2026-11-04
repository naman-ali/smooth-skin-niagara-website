"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import { useSyncExternalStore } from "react";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-CYRTXSGQYN";

const CONSENT_KEY = "ssn-analytics-consent";

type ConsentState = "granted" | "denied" | "undecided";

function readConsent(): ConsentState {
  const stored = window.localStorage.getItem(CONSENT_KEY);
  return stored === "granted" || stored === "denied" ? stored : "undecided";
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

export function AnalyticsConsent() {
  const consent = useSyncExternalStore(
    subscribe,
    readConsent,
    () => null,
  );

  const update = (value: Exclude<ConsentState, "undecided">) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      {consent === "granted" && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      {consent === "undecided" && (
        <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center p-[12px] sm:p-[20px]">
          <div
            role="dialog"
            aria-label="Cookie consent"
            className="flex w-full max-w-[560px] flex-col gap-[14px] rounded-[16px] border border-[var(--color-border)] bg-white p-[18px] shadow-[0_16px_48px_rgba(0,0,0,0.18)] sm:p-[22px]"
          >
            <p className="m-0 font-[var(--font-body)] text-[13px] leading-[1.6] text-[var(--color-text-secondary)]">
              We use cookies for Google Analytics to understand how visitors use
              our site and improve your experience. You can accept or decline
              analytics cookies. See our{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-[var(--color-brand-primary)] underline underline-offset-2 hover:no-underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex flex-col gap-[10px] sm:flex-row">
              <button
                type="button"
                onClick={() => update("granted")}
                className="flex h-[48px] w-full cursor-pointer items-center justify-center rounded-[12px] bg-[var(--cta-primary-bg)] px-4 font-[var(--font-body)] text-[14px] font-semibold text-[var(--cta-primary-text)] transition-all duration-300 hover:bg-[var(--cta-primary-hover)] sm:flex-1"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => update("denied")}
                className="flex h-[48px] w-full cursor-pointer items-center justify-center rounded-[12px] border border-[var(--color-border-strong)] bg-[var(--olive-100)] px-4 font-[var(--font-body)] text-[14px] font-semibold text-[var(--color-text-primary)] transition-colors duration-300 hover:bg-[var(--olive-200)] sm:flex-1"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
