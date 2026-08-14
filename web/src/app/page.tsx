"use client";

import * as ButtonModule from "@/components/design-system/core/Button";
import * as NavDropdownModule from "@/components/design-system/navigation/NavDropdown";
import * as PhoneCalloutModule from "@/components/design-system/navigation/PhoneCallout";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";
import * as TrustStripModule from "@/components/design-system/trust/TrustStrip";
import * as TestimonialQuoteModule from "@/components/design-system/trust/TestimonialQuote";

const Button: any = (ButtonModule as any).Button;
const NavDropdown: any = (NavDropdownModule as any).NavDropdown;
const PhoneCallout: any = (PhoneCalloutModule as any).PhoneCallout;
const GoogleReviews: any = (GoogleReviewsModule as any).GoogleReviews;
const TrustStrip: any = (TrustStripModule as any).TrustStrip;
const TestimonialQuote: any = (TestimonialQuoteModule as any).TestimonialQuote;

const Arrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const Pin = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
const Shield = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6l-9-4Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const Leaf = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 21s-8-4.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.5-8 11-8 11Z" />
  </svg>
);
const Person = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);

function Header() {
  return (
    <header
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "20px 28px",
        background: "var(--olive-100)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <img
        src="/assets/logo.png"
        alt="Smooth Skin Niagara"
        style={{ height: 46, flexShrink: 0 }}
      />
      <nav
        className="ssn-header-nav"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 14,
          minWidth: 0,
        }}
      >
        <NavDropdown
          label="Services"
          items={[
            "Laser Hair Removal",
            "Microneedling",
            "Chemical Peels",
            "OxyGeneo Facials",
            "RF Skin Tightening",
            "LED Therapy",
            "Lash Services",
          ]}
        />
        <a
          href="#"
          style={{
            color: "var(--color-text-primary)",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 500,
            fontFamily: "var(--font-body)",
            whiteSpace: "nowrap",
          }}
        >
          About
        </a>
        <a
          href="#"
          style={{
            color: "var(--color-text-primary)",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 500,
            fontFamily: "var(--font-body)",
            whiteSpace: "nowrap",
          }}
        >
          Results
        </a>
        <a
          href="#"
          style={{
            color: "var(--color-text-primary)",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 500,
            fontFamily: "var(--font-body)",
            whiteSpace: "nowrap",
          }}
        >
          Pricing
        </a>
        <NavDropdown label="More" items={["FAQ", "Careers", "Contact"]} />
      </nav>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          flexShrink: 0,
        }}
      >
        <PhoneCallout />
        <span
          style={{ width: 1, height: 32, background: "var(--color-border)" }}
        />
        <Button variant="primary" size="sm">
          Book a Free Consultation
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        padding: "80px 53px 70px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/assets/hero-treatment.png)",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, var(--olive-50) 0%, var(--olive-50) 44%, transparent 66%)",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: "42%", minWidth: 320 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 13,
              marginBottom: 31,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-brand-primary)",
                fontWeight: 700,
              }}
            >
              Niagara{" "}
              <span style={{ color: "var(--color-brand-deep)" }}>
                Laser Hair Removal
              </span>
            </span>
            <span
              style={{
                width: 48,
                height: 1,
                background: "var(--color-border-strong)",
              }}
            />
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: 80,
              lineHeight: 1.05,
              color: "var(--color-text-primary)",
              margin: "0 0 31px",
            }}
          >
            Confident Skin.
            <br />
            Every Day.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 20,
              lineHeight: 1.6,
              color: "var(--color-text-secondary)",
              margin: "0 0 40px",
            }}
          >
            Advanced laser technology meets personalized care for long-lasting
            results and beautifully smooth skin.
          </p>
          <div style={{ display: "flex", gap: 16, marginBottom: 31 }}>
            <Button variant="primary" icon={<Arrow />}>
              Book Your Free Consultation
            </Button>
            <Button variant="secondary">View Results</Button>
          </div>
          <GoogleReviews />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "62px auto 0",
        }}
      >
        <TrustStrip
          items={[
            {
              icon: <Pin />,
              title: "Proudly Serving",
              desc: "Niagara Falls and surrounding communities",
            },
            {
              icon: <Shield />,
              title: "Safe & Effective",
              desc: "Advanced technology for all skin types",
            },
            {
              icon: <Leaf />,
              title: "Long-Lasting Results",
              desc: "Noticeable reduction in fewer sessions",
            },
            {
              icon: <Person />,
              title: "Personalized Care",
              desc: "Customized treatments for your unique skin",
            },
          ]}
        />
      </div>
    </section>
  );
}

function AshleySection() {
  const rightTestimonials = [
    {
      quote: (
        <>
          Ashley is <strong>extremely kind, knowledgeable</strong>, and truly
          amazing at what she does. She makes you feel{" "}
          <strong>comfortable instantly</strong>.
        </>
      ),
      author: "Bri McKinnon",
    },
    {
      quote: (
        <>
          Ashley made me <strong>feel at ease right away</strong>, talking me
          through appointments and the entire process.
        </>
      ),
      author: "Stephanie D",
    },
  ];
  return (
    <section
      style={{
        position: "relative",
        padding: "90px 53px",
        overflow: "hidden",
        backgroundImage: "url(/assets/ashley-section-bg.png)",
        backgroundSize: "auto 118%",
        backgroundPosition: "center 8%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 32,
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "1 1 320px", minWidth: 280, maxWidth: 380 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 13,
              marginBottom: 22,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-brand-primary)",
                fontWeight: 700,
              }}
            >
              Meet Ashley
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
              fontWeight: 500,
              fontSize: 48,
              lineHeight: 1.1,
              color: "var(--color-text-primary)",
              margin: "0 0 8px",
              textShadow:
                "0 1px 12px var(--olive-50), 0 1px 3px var(--olive-50)",
            }}
          >
            Ashley Romano
          </h2>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: 22,
              lineHeight: 1.3,
              color: "var(--color-brand-deep)",
              margin: "0 0 22px",
              textShadow:
                "0 1px 12px var(--olive-50), 0 1px 3px var(--olive-50)",
            }}
          >
            The expert behind Smooth Skin Niagara
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--color-text-primary)",
              margin: "0 0 26px",
              textShadow:
                "0 1px 14px var(--olive-50), 0 1px 4px var(--olive-50), 0 1px 4px var(--olive-50)",
            }}
          >
            Ashley is the founder of Smooth Skin Niagara and personally performs
            every treatment. With more than 10 years of experience, she is known
            for her thoughtful, professional approach and her ability to make
            every client feel comfortable and confident right away.
          </p>
          <TestimonialQuote
            quote={
              <>
                Ashley was <strong>clear, professional</strong>, and I truly
                appreciated her <strong>patience and guidance</strong>. What a
                wonderful human being.
              </>
            }
            author="Anderson Lopez Pena"
            rating={5}
          />
        </div>
        <div style={{ flex: "0 1 32%", minWidth: 0 }} />
        <div
          style={{
            flex: "1 1 260px",
            minWidth: 260,
            maxWidth: 340,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {rightTestimonials.map((t, i) => (
            <TestimonialQuote
              key={i}
              quote={t.quote}
              author={t.author}
              rating={5}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AshleySection />
    </>
  );
}
