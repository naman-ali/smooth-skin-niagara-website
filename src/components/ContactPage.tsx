"use client";

import Header from "@/components/Header";
import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import { useConsultation } from "@/components/ConsultationModal";
import { BUSINESS } from "@/lib/seo";

const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;

const services = [
  { label: "Laser Hair Removal", href: "/laser-hair-removal" },
  { label: "PCA Skin Peels", href: "/cosmetic-grade-pca-skin-peels" },
  { label: "Microneedling CIT", href: "/edermastamp-microneedling" },
  { label: "Celluma LED Light Therapy", href: "/celluma-led-light-therapy" },
  { label: "OXYgeneo 3-1 Super Facial", href: "/oxygeneo-3-1-super-facial" },
  { label: "Eyelash Extensions", href: "/eyelash-extensions" },
];

export function ContactPage() {
  const { open: openConsultation } = useConsultation();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-olive-50">
        <section className="px-3 py-[64px] md:px-10 lg:py-[90px]">
          <div className="mx-auto max-w-[var(--container-max)]">
            <div className="mb-[30px] flex items-center gap-[12px]">
              <span className="h-[1px] w-[40px] bg-[var(--color-border-strong)]" />
              <span className="font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary)]">
                Get In Touch
              </span>
            </div>

            <h1 className="mb-[14px] font-[var(--font-display)] text-[40px] font-normal leading-[1.1] text-[var(--color-text-primary)] md:text-[56px]">
              Contact Smooth Skin Niagara in Niagara Falls
            </h1>
            <p className="mb-[48px] max-w-[640px] font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
              Questions about a treatment, or ready to book? Call, text or
              email anytime and Ashley will help you find the right treatment
              and an appointment that works for you.
            </p>

            <div className="grid grid-cols-1 gap-[28px] lg:grid-cols-2">
              {/* Contact details */}
              <div className="flex flex-col gap-[20px]">
                <div
                  className="rounded-[20px] bg-[#fff] p-[28px]"
                  style={{ border: "1px solid var(--color-border)" }}
                >
                  <h2 className="mb-[20px] font-[var(--font-display)] text-[26px] font-normal text-[var(--color-text-primary)]">
                    Visit the Studio
                  </h2>
                  <address className="not-italic font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
                    <p className="m-0 mb-[16px]">
                      {BUSINESS.address.street}
                      <br />
                      {BUSINESS.address.locality}, {BUSINESS.address.region}{" "}
                      {BUSINESS.address.postalCode}
                    </p>
                    <p className="m-0 mb-[10px]">
                      <a
                        href={`tel:${BUSINESS.telephone}`}
                        className="font-semibold text-[var(--color-text-primary)] no-underline"
                      >
                        {BUSINESS.telephoneDisplay}
                      </a>
                      <span className="block text-[13px] text-[var(--color-text-secondary)]">
                        Call or text
                      </span>
                    </p>
                    <p className="m-0">
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="break-all text-[var(--color-brand-primary)] no-underline"
                      >
                        {BUSINESS.email}
                      </a>
                    </p>
                  </address>
                  <a
                    href={BUSINESS.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-[18px] inline-block font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-brand-primary)] no-underline"
                  >
                    Get directions →
                  </a>
                </div>

                <div
                  className="rounded-[20px] bg-[#fff] p-[28px]"
                  style={{ border: "1px solid var(--color-border)" }}
                >
                  <h2 className="mb-[10px] font-[var(--font-display)] text-[26px] font-normal text-[var(--color-text-primary)]">
                    Book a Free Consultation
                  </h2>
                  <p className="mb-[20px] font-[var(--font-body)] text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
                    Not sure which treatment is right for you? Book a
                    complimentary consultation and we will talk through your
                    skin, your goals and your options — no pressure to commit.
                  </p>
                  <Button
                    variant="primary"
                    onClick={openConsultation}
                    style={{ whiteSpace: "normal" }}
                  >
                    I want a Free Consultation
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div
                className="relative min-h-[320px] overflow-hidden rounded-[20px] bg-[#fff]"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <iframe
                  className="absolute inset-0 h-full w-full border-0"
                  src={BUSINESS.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Smooth Skin Niagara location in Niagara Falls"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Treatments quick links */}
            <div
              className="mt-[40px] rounded-[20px] bg-[#fff] p-[28px]"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <h2 className="mb-[16px] font-[var(--font-display)] text-[24px] font-normal text-[var(--color-text-primary)]">
                Explore Treatments
              </h2>
              <ul className="m-0 grid list-none grid-cols-1 gap-[8px] p-0 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      className="font-[var(--font-body)] text-[15px] font-medium text-[var(--color-brand-primary)] no-underline"
                    >
                      {s.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
