"use client";

import * as ButtonModule from "@/components/design-system/core/Button";
import React from "react";

const Button: any = (ButtonModule as any).Button;

const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-brand-primary)"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-brand-primary)"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 10h18" />
  </svg>
);

const PersonIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-brand-primary)"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-brand-primary)"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-brand-primary)"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.7 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.7 7.7l1.1 1.1L12 21l7.7-7.7 1.1-1.1a5.5 5.5 0 0 0 0-7.7z" />
  </svg>
);

export function CtaSection() {
  return (
    <section
      style={{
        position: "relative",
        padding: "90px 53px",
        background: "var(--olive-50)",
        overflow: "hidden",
      }}
    >
      {/* Right decorative circle */}
      <div
        style={{
          position: "absolute",
          right: -60,
          top: -60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.35)",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            transform: "rotate(-12deg)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "cursive, Georgia, serif",
              fontSize: 18,
              lineHeight: 1.3,
              color: "var(--olive-700)",
              fontStyle: "italic",
            }}
          >
            Smoother
            <br />
            Skin
            <br />
            Brighter
            <br />
            Days
          </div>
          <div style={{ marginTop: 8 }}>
            <HeartIcon />
          </div>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 22,
          }}
        >
          <span
            style={{
              width: 48,
              height: 1,
              background: "var(--color-border-strong)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-brand-primary)",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            Ready to Take the Next Step?
          </span>
          <span
            style={{
              width: 48,
              height: 1,
              background: "var(--color-border-strong)",
            }}
          />
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 52,
            fontWeight: 400,
            lineHeight: 1.08,
            color: "var(--color-text-primary)",
            margin: "0 auto 18px",
            maxWidth: 760,
          }}
        >
          Let&apos;s Create Your
          <br />
          Personalized Treatment Plan
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--color-text-secondary)",
            margin: "0 auto 28px",
            maxWidth: 620,
          }}
        >
          Book a free consultation and we&apos;ll take the time to understand
          your goals, assess your skin and recommend the most suitable treatment
          plan for you.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            marginBottom: 60,
          }}
        >
          <Button
            variant="primary"
            icon={<span>&rarr;</span>}
            style={{
              width: 360,
              height: 64,
              fontSize: 17,
              justifyContent: "space-between",
              padding: "0 28px",
            }}
          >
            Book a Free Consultation
          </Button>

          <a
            href="tel:+19059207229"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              width: 320,
              height: 60,
              borderRadius: 14,
              border: "1px solid var(--color-border)",
              background: "var(--white)",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 24,
              }}
            >
              <PhoneIcon />
            </span>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  marginBottom: 1,
                }}
              >
                (905) 920-7229
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--color-text-secondary)",
                }}
              >
                Call or Text
              </div>
            </div>
          </a>
        </div>

        {/* Bottom benefits row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: 1100,
            margin: "0 auto",
            gap: 0,
          }}
        >
          {[
            {
              icon: <CalendarIcon />,
              title: "Free Consultation",
              text: "No pressure, just expert advice",
            },
            {
              icon: <PersonIcon />,
              title: "Personalized Plan",
              text: "Tailored to your skin, goals and lifestyle",
            },
            {
              icon: <ShieldIcon />,
              title: "Trusted & Professional",
              text: "You're in safe, experienced hands",
            },
          ].map((item, i) => (
            <React.Fragment key={i}>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  padding: "0 24px",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "var(--olive-100)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ transform: "scale(1.2)" }}>{item.icon}</div>
                </div>
                <div style={{ textAlign: "left" }}>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 18,
                      fontWeight: 400,
                      color: "var(--color-text-primary)",
                      margin: "0 0 4px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: "var(--color-text-secondary)",
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
              {i < 2 && (
                <div
                  style={{
                    width: 1,
                    height: 64,
                    background: "var(--color-border)",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
