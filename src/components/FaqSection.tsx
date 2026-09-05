"use client";

import * as ButtonModule from "@/components/design-system/core/Button";
import React, { useEffect, useState } from "react";

const Button: any = (ButtonModule as any).Button;

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia(query);
    const update = () => setMatches(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, [query]);
  return matches;
}

const BarChartIcon = ({ color = "currentColor" }: { color?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 20V10" />
    <path d="M12 20V4" />
    <path d="M6 20v-6" />
  </svg>
);

const HeartIcon = ({ color = "currentColor" }: { color?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.7 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.7 7.7l1.1 1.1L12 21l7.7-7.7 1.1-1.1a5.5 5.5 0 0 0 0-7.7z" />
  </svg>
);

const CalendarIcon = ({ color = "currentColor" }: { color?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
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

const DollarIcon = ({ color = "currentColor" }: { color?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v20" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const categories: {
  id: string;
  label: string;
  heading: string;
  description: string;
  icon: (props: { color?: string }) => React.JSX.Element;
  questions: { q: string; a: React.ReactNode }[];
}[] = [
  {
    id: "results",
    label: "RESULTS & EFFECTIVENESS",
    heading: "Results, Sessions & Long-Term Outcomes",
    description:
      "Understand what kind of results to expect, how your treatment progresses, and why every treatment plan is a little different.",
    icon: BarChartIcon,
    questions: [
      {
        q: "How many laser hair removal sessions will I need?",
        a: (
          <>
            <p>
              Most clients need a series of approximately{" "}
              <strong>6–10 treatments</strong> for their best reduction.
            </p>
            <p>
              Hair grows in different cycles, and laser is most effective during
              the active growth phase, which is why several treatments are
              needed.
            </p>
            <p>
              Your exact treatment plan depends on the area being treated, your
              hair and skin type, and how your body responds.
            </p>
          </>
        ),
      },
      {
        q: "When will I start seeing results?",
        a: (
          <>
            <p>
              Many clients begin noticing{" "}
              <strong>
                slower, finer or patchier regrowth after their first few
                treatments
              </strong>
              .
            </p>
            <p>
              Results continue to improve progressively throughout the treatment
              series as more active hair follicles are treated.
            </p>
          </>
        ),
      },
      {
        q: "Is laser hair removal permanent?",
        a: (
          <>
            <p>
              Laser hair removal is best described as{" "}
              <strong>long-term hair reduction</strong>.
            </p>
            <p>
              After completing a treatment series, many clients experience
              significantly less hair, and any hair that returns is often finer
              and less noticeable.
            </p>
            <p>Occasional maintenance treatments may be needed over time.</p>
          </>
        ),
      },
      {
        q: "Will I need maintenance treatments?",
        a: (
          <>
            <p>Possibly.</p>
            <p>
              Hormonal changes, age, medications and the treatment area can
              influence future hair growth.
            </p>
            <p>
              Some clients choose occasional maintenance sessions once their
              initial treatment series is complete.
            </p>
          </>
        ),
      },
      {
        q: "Can laser hair removal help with ingrown hairs and razor bumps?",
        a: (
          <>
            <p>Yes.</p>
            <p>
              Because laser treatment reduces the amount and thickness of hair
              growing from the follicle, many clients also experience fewer{" "}
              <strong>
                ingrown hairs, razor bumps and irritation caused by shaving or
                waxing
              </strong>
              .
            </p>
          </>
        ),
      },
      {
        q: "Does laser hair removal work for hormonal hair growth or PCOS?",
        a: (
          <>
            <p>
              Laser can significantly reduce hormonally driven hair, but
              hormonal conditions such as PCOS can make regrowth more
              persistent, particularly on areas such as the face and chin.
            </p>
            <p>
              More sessions or periodic maintenance may be required, and we will
              discuss realistic expectations during your consultation.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "comfort",
    label: "COMFORT & SUITABILITY",
    heading: "Is Laser Hair Removal Right for Me?",
    description:
      "Learn how treatment feels and whether laser is suitable for your skin, hair and treatment goals.",
    icon: HeartIcon,
    questions: [
      {
        q: "Does laser hair removal hurt?",
        a: (
          <>
            <p>
              Smooth Skin Niagara uses the <strong>Soprano ICE Platinum</strong>
              , which combines continuous cooling with an In-Motion treatment
              technique designed to keep treatments comfortable.
            </p>
            <p>
              Sensation varies from person to person and by treatment area, but
              many clients describe it as warmth, tingling or brief pinpricks
              rather than the pulling sensation associated with waxing.
            </p>
          </>
        ),
      },
      {
        q: "Is laser hair removal safe for darker skin tones?",
        a: (
          <>
            <p>
              The Soprano ICE Platinum combines three laser wavelengths and
              allows treatments to be customized according to your individual
              skin and hair characteristics.
            </p>
            <p>
              We assess your skin before treatment and select appropriate
              settings for you rather than using the same approach for every
              client.
            </p>
          </>
        ),
      },
      {
        q: "Does laser work on blonde, red, grey or very fine hair?",
        a: (
          <>
            <p>
              Laser works most predictably when the hair contains enough pigment
              for the laser to target.
            </p>
            <p>
              <strong>
                Very light blonde, white, grey and some red hair can be more
                difficult to treat.
              </strong>
            </p>
            <p>
              During your consultation, we can assess your hair and give you
              realistic expectations before you commit to a treatment plan.
            </p>
          </>
        ),
      },
      {
        q: "What areas can be treated?",
        a: (
          <>
            <p>
              Laser hair removal can be used on most areas where unwanted hair
              grows, including:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
              }}
            >
              <li>Face</li>
              <li>Chin</li>
              <li>Upper lip</li>
              <li>Neck</li>
              <li>Underarms</li>
              <li>Arms</li>
              <li>Bikini</li>
              <li>Brazilian</li>
              <li>Legs</li>
              <li>Chest</li>
              <li>Back</li>
            </ul>
          </>
        ),
      },
      {
        q: "Can I have laser hair removal while pregnant?",
        a: (
          <>
            <p>
              Laser hair removal is an elective cosmetic treatment, so treatment
              is generally postponed during pregnancy.
            </p>
            <p>
              If you are pregnant or think you may be pregnant, please let us
              know and we can help you plan your treatments for a later date.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "preparation",
    label: "BEFORE & AFTER TREATMENT",
    heading: "Preparing for Your Appointment",
    description:
      "A few simple steps before and after treatment help keep your skin comfortable and allow us to treat the area effectively.",
    icon: CalendarIcon,
    questions: [
      {
        q: "Do I need to shave before my appointment?",
        a: (
          <>
            <p>Yes.</p>
            <p>
              We recommend{" "}
              <strong>
                shaving the treatment area, ideally the night before your
                appointment
              </strong>
              .
            </p>
            <p>
              This allows the laser to target the hair beneath the skin without
              excess hair sitting above the surface.
            </p>
          </>
        ),
      },
      {
        q: "Can I shave between laser appointments?",
        a: (
          <>
            <p>Yes.</p>
            <p>
              <strong>
                Shaving is the preferred method of hair removal between laser
                sessions
              </strong>{" "}
              and will not interfere with your results.
            </p>
          </>
        ),
      },
      {
        q: "Can I wax, tweeze, thread or sugar between sessions?",
        a: (
          <>
            <p>No.</p>
            <p>
              These methods remove the hair from the follicle, which removes the
              target the laser needs to treat.
            </p>
            <p>
              Avoid waxing, tweezing, threading and sugaring during your
              treatment series.
            </p>
          </>
        ),
      },
      {
        q: "Can I have laser hair removal if I've been tanning?",
        a: (
          <>
            <p>
              Please tell us about any{" "}
              <strong>recent sun exposure, tanning beds or self-tanner</strong>{" "}
              before your appointment.
            </p>
            <p>
              Recent tanning changes the pigment in your skin and may affect how
              your treatment should be performed.
            </p>
            <p>
              Depending on your skin, we may recommend waiting before treatment.
            </p>
          </>
        ),
      },
      {
        q: "Is there any downtime?",
        a: (
          <>
            <p>
              For most clients, there is <strong>little to no downtime</strong>,
              and normal daily activities can usually be resumed right away.
            </p>
            <p>
              Temporary redness, warmth or mild swelling around the follicles
              can occur and generally settles fairly quickly.
            </p>
          </>
        ),
      },
      {
        q: "Are there any side effects?",
        a: (
          <>
            <p>
              Temporary redness, mild swelling and sensitivity are among the
              most common reactions.
            </p>
            <p>
              Less common complications can include blistering, burns or changes
              in pigmentation, which is why appropriate treatment settings,
              preparation and aftercare are important.
            </p>
          </>
        ),
      },
      {
        q: "What should I tell you before treatment?",
        a: (
          <>
            <p>Please let us know about any:</p>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
              }}
            >
              <li>Medications</li>
              <li>Prescription skincare</li>
              <li>Recent tanning</li>
              <li>Skin conditions</li>
              <li>Previous reactions to laser</li>
              <li>Pregnancy</li>
              <li>Abnormal scarring</li>
              <li>Important medical changes</li>
            </ul>
            <p>
              This helps us determine the safest and most appropriate treatment
              approach for you.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "pricing",
    label: "PRICING & APPOINTMENTS",
    heading: "Planning Your Treatment",
    description:
      "Find out what your appointments involve, how pricing works and what to expect during your consultation.",
    icon: DollarIcon,
    questions: [
      {
        q: "How long does a laser hair removal appointment take?",
        a: (
          <>
            <p>It depends on the treatment area.</p>
            <p>
              <strong>Small areas can take only a few minutes</strong>, while
              larger areas such as full legs or the back take longer.
            </p>
            <p>
              Once we know which areas you would like treated, we can give you a
              more accurate appointment time.
            </p>
          </>
        ),
      },
      {
        q: "How much does laser hair removal cost?",
        a: (
          <>
            <p>
              Pricing depends on the{" "}
              <strong>area or combination of areas being treated</strong>.
            </p>
            <p>
              We offer individual treatment areas as well as package options for
              clients treating multiple areas.
            </p>
            <p>
              You can view our pricing online or book a free consultation and we
              will help create the most suitable treatment plan for you.
            </p>
          </>
        ),
      },
      {
        q: "Can I combine several areas into one treatment plan?",
        a: (
          <>
            <p>Yes.</p>
            <p>
              If you would like to treat several areas, we can create a{" "}
              <strong>
                personalized package based on your treatment goals
              </strong>{" "}
              rather than making you plan each area separately.
            </p>
          </>
        ),
      },
      {
        q: "What happens during the free consultation?",
        a: (
          <>
            <p>Your consultation gives us an opportunity to understand your:</p>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
              }}
            >
              <li>Skin</li>
              <li>Hair</li>
              <li>Treatment areas</li>
              <li>Goals</li>
            </ul>
            <p>We will discuss:</p>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
              }}
            >
              <li>Expected results</li>
              <li>How many treatments you may need</li>
              <li>Preparation</li>
              <li>Pricing</li>
              <li>Any questions you have</li>
            </ul>
            <p>
              There is <strong>no pressure to commit to treatment</strong>.
            </p>
          </>
        ),
      },
      {
        q: "What laser does Smooth Skin Niagara use?",
        a: (
          <>
            <p>
              We use the <strong>Soprano ICE Platinum by Alma</strong>, an
              advanced diode laser system combining three wavelengths:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
              }}
            >
              <li>
                <strong>755 nm</strong>
              </li>
              <li>
                <strong>810 nm</strong>
              </li>
              <li>
                <strong>1064 nm</strong>
              </li>
            </ul>
            <p>
              The system also uses integrated cooling technology to help keep
              treatments comfortable while allowing us to customize treatment
              for different skin and hair characteristics.
            </p>
          </>
        ),
      },
    ],
  },
];

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const current = categories[activeCategory];

  useEffect(() => {
    setOpenQuestion(null);
  }, [activeCategory]);

  const toggleQuestion = (index: number) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const CategoryNav = () => (
    <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {categories.map((cat, i) => {
        const isActive = i === activeCategory;
        const Icon = cat.icon;
        return (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(i)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              width: "100%",
              padding: "18px 20px",
              textAlign: "left",
              background: isActive ? "var(--olive-100)" : "transparent",
              border: isActive
                ? "1px solid var(--olive-200)"
                : "1px solid var(--color-border)",
              borderRadius: 14,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            <span
              style={{
                color: isActive
                  ? "var(--color-brand-primary)"
                  : "var(--color-text-secondary)",
              }}
            >
              <Icon
                color={
                  isActive
                    ? "var(--color-brand-primary)"
                    : "var(--color-text-secondary)"
                }
              />
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: isActive
                    ? "var(--color-text-primary)"
                    : "var(--color-text-secondary)",
                }}
              >
                {cat.heading}
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--color-text-secondary)",
                  marginTop: 2,
                }}
              >
                {cat.description}
              </span>
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-text-secondary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        );
      })}
    </nav>
  );

  const ConsultationCard = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      style={{
        marginTop: mobile ? 40 : 0,
        padding: mobile ? "28px 20px" : "28px 24px",
        background: "#fff",
        border: "1px solid var(--color-border)",
        borderRadius: 16,
        boxShadow: "0 2px 14px rgba(0,0,0,0.04)",
        textAlign: mobile ? ("center" as const) : "left",
      }}
    >
      <h4
        style={{
          fontFamily: "var(--font-display)",
          fontSize: mobile ? 22 : 20,
          fontWeight: 500,
          color: "var(--color-text-primary)",
          margin: "0 0 10px",
        }}
      >
        Still have a question?
      </h4>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          lineHeight: 1.6,
          color: "var(--color-text-secondary)",
          margin: "0 0 20px",
        }}
      >
        We are happy to help. Call, text, or book a free consultation and we
        will answer anything you are unsure about.
      </p>
      <Button variant="primary" style={mobile ? { width: "100%" } : undefined}>
        Book a Free Consultation →
      </Button>
      <a
        href="tel:+19059207229"
        style={{
          display: "block",
          marginTop: 16,
          fontFamily: "var(--font-body)",
          fontSize: 16,
          fontWeight: 600,
          color: "var(--color-brand-primary)",
          textDecoration: "none",
        }}
      >
        (905) 920-7229
      </a>
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-body)",
          fontSize: 13,
          color: "var(--color-text-secondary)",
        }}
      >
        Call or Text
      </span>
    </div>
  );

  const MobileTabs = () => (
    <div
      style={{
        display: "flex",
        gap: 10,
        overflowX: "auto",
        paddingBottom: 8,
        marginBottom: 24,
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {categories.map((cat, i) => {
        const isActive = i === activeCategory;
        return (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(i)}
            style={{
              flex: "0 0 auto",
              padding: "12px 20px",
              minHeight: 44,
              borderRadius: 999,
              border: isActive
                ? "1px solid var(--cta-primary-bg)"
                : "1px solid var(--color-border)",
              background: isActive ? "var(--cta-primary-bg)" : "#fff",
              color: isActive
                ? "var(--cta-primary-text)"
                : "var(--color-text-primary)",
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 600,
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            {cat.heading}
          </button>
        );
      })}
    </div>
  );

  return (
    <section style={{ padding: "90px 53px", background: "var(--olive-50)" }}>
      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
              FREQUENTLY ASKED QUESTIONS
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
              fontWeight: 400,
              fontSize: 48,
              lineHeight: 1.1,
              color: "var(--color-text-primary)",
              margin: "0 0 16px",
            }}
          >
            Your Questions, Answered
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--color-text-secondary)",
              margin: "0 auto",
              maxWidth: 620,
            }}
          >
            Everything you want to know before starting laser hair removal. Find
            clear answers about results, comfort, preparation, pricing, and what
            to expect from your treatment.
          </p>
        </div>

        {isDesktop ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(280px, 30%) 1fr",
              gap: 56,
              alignItems: "start",
            }}
          >
            <div
              style={{
                position: "sticky" as const,
                top: 40,
                alignSelf: "start",
              }}
            >
              <CategoryNav />
              <div style={{ marginTop: 24 }}>
                <ConsultationCard />
              </div>
            </div>
            <div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {current.questions.map((item, i) => {
                  const isOpen = openQuestion === i;
                  return (
                    <div
                      key={i}
                      onClick={() => toggleQuestion(i)}
                      style={{
                        background: "#fff",
                        border: "1px solid var(--color-border)",
                        borderRadius: 14,
                        padding: "20px 22px",
                        cursor: "pointer",
                        transition: "box-shadow 0.15s ease",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 16,
                        }}
                      >
                        <h4
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "var(--color-text-primary)",
                            margin: 0,
                            lineHeight: 1.4,
                          }}
                        >
                          {item.q}
                        </h4>
                        <span
                          style={{
                            flexShrink: 0,
                            fontFamily: "var(--font-body)",
                            fontSize: 22,
                            color: "var(--color-brand-primary)",
                            lineHeight: 1,
                          }}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                      {isOpen && (
                        <div
                          style={{
                            marginTop: 14,
                            paddingTop: 18,
                            borderTop: "1px solid var(--color-border)",
                            fontFamily: "var(--font-body)",
                            fontSize: 15,
                            lineHeight: 1.65,
                            color: "var(--color-text-secondary)",
                          }}
                        >
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <>
            <MobileTabs />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {current.questions.map((item, i) => {
                const isOpen = openQuestion === i;
                return (
                  <div
                    key={i}
                    onClick={() => toggleQuestion(i)}
                    style={{
                      minHeight: 56,
                      background: "#fff",
                      border: "1px solid var(--color-border)",
                      borderRadius: 12,
                      padding: "18px 16px",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 14,
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 15,
                          fontWeight: 600,
                          color: "var(--color-text-primary)",
                          margin: 0,
                          lineHeight: 1.4,
                        }}
                      >
                        {item.q}
                      </h4>
                      <span
                        style={{
                          flexShrink: 0,
                          fontFamily: "var(--font-body)",
                          fontSize: 20,
                          color: "var(--color-brand-primary)",
                        }}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                    {isOpen && (
                      <div
                        style={{
                          marginTop: 12,
                          paddingTop: 14,
                          borderTop: "1px solid var(--color-border)",
                          fontFamily: "var(--font-body)",
                          fontSize: 16,
                          lineHeight: 1.6,
                          color: "var(--color-text-secondary)",
                        }}
                      >
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <ConsultationCard mobile />
          </>
        )}
      </div>
    </section>
  );
}
