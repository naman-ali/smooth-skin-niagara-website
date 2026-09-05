"use client";

import * as React from "react";

const wavelengths = [
  {
    label: "BLUE LIGHT",
    nm: "465 nm",
    color: "#3B82F6",
    benefit: "Targets acne-associated bacteria",
    copy: "Used for acne-focused treatments and clearer-looking skin.",
  },
  {
    label: "RED LIGHT",
    nm: "640 nm",
    color: "#EF4444",
    benefit: "Supports skin rejuvenation",
    copy: "Used to support the appearance of fine lines and overall skin quality.",
  },
  {
    label: "NEAR-INFRARED LIGHT",
    nm: "880 nm",
    color: "#B76E79",
    benefit: "Reaches deeper tissue",
    copy: "Used to support circulation and temporary relief of muscle and joint discomfort.",
  },
];

export function CellumaScienceSection() {
  return (
    <section
      className="px-7 lg:px-[53px]"
      style={{
        paddingTop: 80,
        paddingBottom: 80,
        background: "#fdfaf3",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
        }}
      >
        <header style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-brand-primary)",
              marginBottom: 14,
            }}
          >
            THE SCIENCE OF LIGHT
          </span>

          <h2
            className="text-center text-[40px] leading-[1.1] lg:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "var(--color-text-primary)",
              margin: "0 0 12px",
            }}
          >
            <span style={{ display: "block" }}>Three Wavelengths.</span>
            <span
              style={{
                display: "block",
                fontStyle: "italic",
                color: "var(--olive-600)",
              }}
            >
              Different Depths. One Treatment.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--color-text-primary)",
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            Celluma combines blue, red and near-infrared LED light. Each
            wavelength is absorbed differently by the skin and tissue, allowing
            treatment to be tailored to concerns such as acne, visible signs of
            aging and discomfort.
          </p>
        </header>

        <img
          src="/assets/celluma-3-lights.jpg"
          alt="Celluma LED wavelengths penetrating skin at different depths"
          style={{
            display: "block",
            width: "100%",
            maxWidth: 900,
            height: "auto",
            margin: "0 auto 48px",
          }}
        />

        <div
          className="flex flex-col lg:flex-row"
          style={{
            justifyContent: "center",
            marginBottom: 64,
          }}
        >
          {wavelengths.map((item, index) => (
            <React.Fragment key={item.label}>
              <div
                className="box-border w-full px-6 py-8 text-center lg:flex-1 lg:w-auto"
                style={{ minWidth: 0 }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: item.color,
                    marginBottom: 16,
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--color-text-primary)",
                    margin: "0 0 8px",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 36,
                    fontWeight: 400,
                    lineHeight: 1.1,
                    color: item.color,
                    margin: "0 0 16px",
                  }}
                >
                  {item.nm}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: "var(--color-text-primary)",
                    margin: "0 0 8px",
                  }}
                >
                  {item.benefit}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: "var(--color-text-secondary)",
                    margin: 0,
                  }}
                >
                  {item.copy}
                </p>
              </div>

              {index < wavelengths.length - 1 && (
                <>
                  <div
                    className="hidden lg:block"
                    style={{
                      width: 1,
                      background: "var(--color-border)",
                      alignSelf: "stretch",
                    }}
                  />
                  <div
                    className="block lg:hidden"
                    style={{
                      height: 1,
                      background: "var(--color-border)",
                    }}
                  />
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        <p
          style={{
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
          &mdash;&mdash;&mdash;&mdash; NATURAL LIGHT. REAL RESULTS.
          &mdash;&mdash;&mdash;&mdash;
        </p>
      </div>
    </section>
  );
}
