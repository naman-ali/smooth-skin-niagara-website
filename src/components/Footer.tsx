export default function Footer() {
  const linkStyle = {
    color: "var(--color-text-secondary)",
    textDecoration: "none",
    fontSize: 15,
    lineHeight: 1.8,
    fontFamily: "var(--font-body)",
  };

  const headingStyle = {
    fontFamily: "var(--font-display)",
    fontSize: 18,
    fontWeight: 500,
    color: "var(--color-text-primary)",
    margin: "0 0 20px",
    letterSpacing: "0.02em",
  };

  return (
    <footer
      style={{
        background: "var(--olive-100)",
        borderTop: "2px solid var(--color-border)",
        padding: "64px 53px 32px",
        color: "var(--color-text-primary)",
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
        }}
      >
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <img
              src="/assets/logo.png"
              alt="Smooth Skin Niagara"
              style={{ height: 52, marginBottom: 18 }}
            />
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
                margin: "0 0 22px",
              }}
            >
              Niagara Falls&apos; trusted destination for premium laser hair
              removal and advanced skincare. Serving Ontario with over 10 years
              of experience.
            </p>
            <div style={{ display: "flex", gap: 18 }}>
              <a
                href="https://www.facebook.com/eyelashextensionsniagarafalls/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/customlashloung/?hl=en"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 style={headingStyle}>Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Laser Hair Removal",
                "PCA Skin Peels",
                "Microneedling CIT",
                "ReadyMedical",
                "Exosome Therapy",
                "Celluma LED Light Therapy",
                "OXYgeneo 3-1 Super Facial",
                "Eyelash Extensions",
              ].map((item) => (
                <li key={item} style={{ marginBottom: 8 }}>
                  <a href="#" style={linkStyle}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={headingStyle}>Company</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "About Us",
                "Testimonials",
                "Contact",
                "Privacy",
                "Terms of Service",
              ].map((item) => (
                <li key={item} style={{ marginBottom: 8 }}>
                  <a href="#" style={linkStyle}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={headingStyle}>Contact</h4>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
                margin: "0 0 18px",
              }}
            >
              5985 Ernest Crescent
              <br />
              Niagara Falls, ON L2H 0H8
            </p>
            <p style={{ margin: "0 0 8px" }}>
              <a
                href="tel:19059207229"
                style={{
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                (905) 920-7229
              </a>
            </p>
            <p style={{ margin: 0 }}>
              <a
                href="mailto:ashley@smoothskinniagara.com"
                style={{
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  fontSize: 15,
                }}
              >
                Ashley@smoothskinniagara.com
              </a>
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            marginTop: 48,
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
            fontSize: 13,
            color: "var(--color-text-secondary)",
          }}
        >
          <span>
            &copy; {new Date().getFullYear()} Smooth Skin Niagara. All rights
            reserved.
          </span>
          <span>Designed with love.</span>
        </div>
      </div>
    </footer>
  );
}
