"use client";

import Link from "next/link";
import Header from "@/components/Header";

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

            <h1 className="mb-[12px] font-[var(--font-display)] text-[44px] font-normal leading-[1.1] text-[var(--color-text-primary)] md:text-[56px]">
              Privacy Policy
            </h1>

            <p className="mb-[48px] font-[var(--font-body)] text-[15px] text-[var(--color-text-secondary)]">
              Last updated: September 2026
            </p>

            <article className="space-y-[32px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-primary)]">
              <section>
                <h2 className="mb-[12px] font-[var(--font-display)] text-[26px] font-normal leading-[1.2] text-[var(--color-text-primary)]">
                  Introduction
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  Smooth Skin Niagara (“we,” “us,” or “our”) is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="mb-[12px] font-[var(--font-display)] text-[26px] font-normal leading-[1.2] text-[var(--color-text-primary)]">
                  Information We Collect
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  We may collect personal information that you voluntarily
                  provide to us, including your name, email address, phone
                  number, appointment details, treatment history, and payment
                  information. We also collect non-personal information such as
                  browser type, device information, and browsing behavior
                  through cookies and analytics tools.
                </p>
              </section>

              <section>
                <h2 className="mb-[12px] font-[var(--font-display)] text-[26px] font-normal leading-[1.2] text-[var(--color-text-primary)]">
                  How We Use Your Information
                </h2>
                <ul className="list-disc space-y-[8px] pl-[20px] text-[var(--color-text-secondary)]">
                  <li>To schedule, confirm, and manage appointments.</li>
                  <li>To provide personalized treatment recommendations.</li>
                  <li>
                    To communicate with you about services, promotions, and
                    updates.
                  </li>
                  <li>To process payments and maintain records.</li>
                  <li>To improve our website and customer experience.</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-[12px] font-[var(--font-display)] text-[26px] font-normal leading-[1.2] text-[var(--color-text-primary)]">
                  Sharing of Information
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  We do not sell your personal information. We may share
                  information with trusted third-party service providers who
                  assist us with payment processing, appointment scheduling,
                  email delivery, and website analytics, provided they agree to
                  keep your information confidential.
                </p>
              </section>

              <section>
                <h2 className="mb-[12px] font-[var(--font-display)] text-[26px] font-normal leading-[1.2] text-[var(--color-text-primary)]">
                  Data Security
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  We take reasonable measures to protect your personal
                  information from unauthorized access, disclosure, alteration,
                  or destruction. However, no method of transmission over the
                  internet is completely secure, and we cannot guarantee
                  absolute security.
                </p>
              </section>

              <section>
                <h2 className="mb-[12px] font-[var(--font-display)] text-[26px] font-normal leading-[1.2] text-[var(--color-text-primary)]">
                  Cookies
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  Our website may use cookies and similar tracking technologies
                  to enhance your browsing experience. You can adjust your
                  browser settings to refuse cookies, but some features of the
                  site may not function properly.
                </p>
              </section>

              <section>
                <h2 className="mb-[12px] font-[var(--font-display)] text-[26px] font-normal leading-[1.2] text-[var(--color-text-primary)]">
                  Your Rights
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  You have the right to access, update, or request deletion of
                  your personal information. To make a request, please contact
                  us using the information below.
                </p>
              </section>

              <section>
                <h2 className="mb-[12px] font-[var(--font-display)] text-[26px] font-normal leading-[1.2] text-[var(--color-text-primary)]">
                  Contact Us
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  If you have any questions about this Privacy Policy, please
                  contact us:
                </p>
                <address className="not-italic">
                  <p className="mt-[8px] text-[var(--color-text-secondary)]">
                    Smooth Skin Niagara
                    <br />
                    Niagara Falls, Ontario, Canada
                    <br />
                    Phone:{" "}
                    <a
                      href="tel:+19059207229"
                      className="text-[var(--color-brand-primary)] no-underline"
                    >
                      (905) 920-7229
                    </a>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:info@smoothskinniagara.com"
                      className="text-[var(--color-brand-primary)] no-underline"
                    >
                      info@smoothskinniagara.com
                    </a>
                  </p>
                </address>
              </section>
            </article>

            <div className="mt-[48px]">
              <Link
                href="/"
                className="font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-brand-primary)] no-underline transition-colors duration-300 hover:text-[var(--olive-700)]"
              >
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
