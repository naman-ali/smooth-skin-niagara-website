"use client";

import Header from "@/components/Header";
import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";

const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;

export function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] bg-olive-50 px-3 py-[90px] md:px-10 lg:py-[130px]">
        <div className="mx-auto max-w-[var(--container-max)] text-center">
          <p className="mb-[18px] font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary)]">
            404 — Page Not Found
          </p>
          <h1 className="mx-auto mb-[20px] max-w-[620px] font-[var(--font-display)] text-[40px] font-normal leading-[1.08] text-[var(--color-text-primary)] md:text-[56px]">
            This page has moved or no longer exists.
          </h1>
          <p className="mx-auto mb-[40px] max-w-[560px] font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
            If you followed a link from our old website, the treatment you are
            looking for is still here — explore our services or get in touch
            and we will point you in the right direction.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-[16px]">
            <Button variant="primary" href="/">
              Back to Home
            </Button>
            <Button variant="secondary" href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
