"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { PRIVACY_POLICY_HTML } from "@/lib/privacy-policy";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-olive-50">
        <section className="px-3 py-[80px] md:px-10">
          <div className="mx-auto max-w-[780px]">
            <div className="mb-[40px] flex items-center gap-[12px]">
              <span className="h-[1px] w-[40px] bg-[var(--color-border-strong)]" />
              <span className="font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary)]">
                Legal
              </span>
            </div>

            <h1 className="mb-[48px] font-[var(--font-display)] text-[44px] font-normal leading-[1.1] text-[var(--color-text-primary)] md:text-[56px]">
              Privacy Policy
            </h1>

            <article
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: PRIVACY_POLICY_HTML }}
            />

            <div className="mt-[48px] flex flex-wrap gap-[24px]">
              <Link
                href="/"
                className="font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-brand-primary)] no-underline transition-colors duration-300 hover:text-[var(--olive-700)]"
              >
                &larr; Back to Home
              </Link>
              <Link
                href="/contact"
                className="font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-brand-primary)] no-underline transition-colors duration-300 hover:text-[var(--olive-700)]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
