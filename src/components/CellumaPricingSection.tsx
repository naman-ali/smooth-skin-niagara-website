"use client";

import { Clock, Leaf } from "lucide-react";
import * as React from "react";

const options = [
  {
    duration: "15 Minutes",
    price: "$30",
    description:
      "A quick targeted LED session for smaller treatment areas or a simple add-on.",
    note: "Great for short, focused treatment time.",
    popular: false,
  },
  {
    duration: "20 Minutes",
    price: "$40",
    description:
      "A balanced standalone session for facial LED treatments and overall skin support.",
    note: "A great option for regular Celluma sessions.",
    popular: true,
  },
  {
    duration: "30 Minutes",
    price: "$60",
    description:
      "Our most complete Celluma session for a more comprehensive treatment or larger area.",
    note: "Ideal when more treatment time is recommended.",
    popular: false,
  },
];

export function CellumaPricingSection() {
  return (
    <section
      className="px-7 lg:px-[53px]"
      style={{
        paddingTop: 80,
        paddingBottom: 80,
        background: "var(--olive-100)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
        }}
      >
        <header style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 40,
                height: 1,
                background: "var(--color-border-strong)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-brand-primary)",
              }}
            >
              Celluma Treatment Options
            </span>
            <span
              style={{
                width: 40,
                height: 1,
                background: "var(--color-border-strong)",
              }}
            />
          </div>

          <h2
            className="text-center text-[36px] leading-[1.1] lg:text-[44px]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "var(--color-text-primary)",
              margin: "0 0 16px",
            }}
          >
            Choose the Session That Fits Your Goals
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--color-text-secondary)",
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            Simple, non-invasive LED light therapy sessions designed around your
            skin concerns, treatment area and goals. Ashley can help recommend
            the most suitable session length for you.
          </p>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: 24,
            marginBottom: 40,
          }}
        >
          {options.map((option) => (
            <div
              key={option.duration}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 36,
                background: "#fffdf9",
                border: option.popular
                  ? "1px solid var(--olive-600)"
                  : "1px solid var(--color-border)",
                borderRadius: 22,
                boxShadow: option.popular
                  ? "0 8px 24px rgba(37,38,36,0.08)"
                  : "0 4px 20px rgba(37,38,36,0.03)",
              }}
            >
              {option.popular && (
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-body)",
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#fff",
                    background: "var(--olive-700)",
                    padding: "5px 12px",
                    borderRadius: 999,
                    marginBottom: 18,
                  }}
                >
                  Most Popular
                </span>
              )}

              <Clock
                size={22}
                strokeWidth={1.5}
                style={{
                  color: "var(--color-brand-primary)",
                  marginBottom: 18,
                  opacity: 0.9,
                }}
              />

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontWeight: 500,
                  color: "var(--color-text-primary)",
                  margin: "0 0 8px",
                }}
              >
                {option.duration}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 46,
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: option.popular
                    ? "var(--olive-700)"
                    : "var(--color-text-primary)",
                  margin: "0 0 16px",
                }}
              >
                {option.price}
              </p>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "var(--color-text-secondary)",
                  margin: "0 0 12px",
                  maxWidth: 280,
                }}
              >
                {option.description}
              </p>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  color: "var(--olive-500)",
                  margin: "auto 0 0",
                }}
              >
                {option.note}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 18,
            padding: "22px 28px",
            background: "#fffdf9",
            border: "1px solid var(--color-border)",
            borderRadius: 16,
            marginBottom: 48,
          }}
        >
          <Leaf
            size={20}
            strokeWidth={1.5}
            style={{
              color: "var(--color-brand-primary)",
              flexShrink: 0,
              opacity: 0.85,
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--color-text-secondary)",
              margin: 0,
              flex: "1 1 0",
              minWidth: 240,
            }}
          >
            Celluma sessions may also be added to selected treatments when
            appropriate. There is no downtime, and treatment is designed to be
            relaxing and non-invasive.
          </p>
        </div>

        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textAlign: "center",
            color: "var(--olive-500)",
            opacity: 0.8,
            margin: 0,
          }}
        >
          <span
            style={{
              width: 40,
              height: 1,
              background: "var(--color-border-strong)",
            }}
          />
          Science + Skin + Wellness
          <span
            style={{
              width: 40,
              height: 1,
              background: "var(--color-border-strong)",
            }}
          />
        </p>
      </div>
    </section>
  );
}
