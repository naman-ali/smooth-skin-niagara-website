export default function Footer() {
  const linkStyle =
    "text-[var(--color-text-secondary)] no-underline text-[15px] leading-[1.8] font-[var(--font-body)]";

  const headingStyle =
    "font-[var(--font-display)] text-[18px] font-medium text-[var(--color-text-primary)] mt-0 mr-0 mb-3 md:mb-5 ml-0 tracking-[0.02em]";

  return (
    <footer
      className="bg-[var(--olive-100)] pt-12 px-7 pb-6 md:pt-16 md:pb-8 lg:px-[53px] text-[var(--color-text-primary)] font-[var(--font-body)]"
      style={{ borderTop: "2px solid var(--color-border)" }}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="grid grid-cols-2 gap-6 gap-y-8 md:grid-cols-4 md:gap-12">
          <div>
            <img
              src="/assets/logo.png"
              alt="Smooth Skin Niagara"
              className="h-[52px] mb-4"
            />
            <p className="text-[15px] leading-[1.7] text-[var(--color-text-secondary)] mt-0 mr-0 mb-4 md:mb-[22px] ml-0">
              Niagara Falls&apos; trusted destination for premium laser hair
              removal and advanced skincare. Serving Ontario with over 10 years
              of experience.
            </p>
            <div className="flex gap-[18px]">
              <a
                href="https://www.facebook.com/eyelashextensionsniagarafalls/"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-text-primary)] no-underline text-[14px] font-semibold"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/smooth_skin_niagara/"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-text-primary)] no-underline text-[14px] font-semibold"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-[var(--font-display)] text-[18px] font-medium text-[var(--color-text-primary)] mt-0 mr-0 mb-[20px] ml-0 tracking-[0.02em]">
              Services
            </h4>
            <ul className="p-0 m-0" style={{ listStyle: "none" }}>
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
                <li key={item} className="mb-[8px]">
                  <a
                    href="#"
                    className="text-[var(--color-text-secondary)] no-underline text-[15px] leading-[1.8] font-[var(--font-body)]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[var(--font-display)] text-[18px] font-medium text-[var(--color-text-primary)] mt-0 mr-0 mb-[20px] ml-0 tracking-[0.02em]">
              Company
            </h4>
            <ul className="p-0 m-0" style={{ listStyle: "none" }}>
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Testimonials", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Privacy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "#" },
              ].map((item) => (
                <li key={item.label} className="mb-[8px]">
                  <a
                    href={item.href}
                    className="text-[var(--color-text-secondary)] no-underline text-[15px] leading-[1.8] font-[var(--font-body)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[var(--font-display)] text-[18px] font-medium text-[var(--color-text-primary)] mt-0 mr-0 mb-[20px] ml-0 tracking-[0.02em]">
              Contact
            </h4>
            <p className="text-[15px] leading-[1.7] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[18px] ml-0">
              5985 Ernest Crescent
              <br />
              Niagara Falls, ON L2H 0H8
            </p>
            <p className="mt-0 mr-0 mb-[8px] ml-0">
              <a
                href="tel:19059207229"
                className="text-[var(--color-text-primary)] no-underline text-[15px] font-semibold"
              >
                (905) 920-7229
              </a>
            </p>
            <p className="m-0">
              <a
                href="mailto:ashley@smoothskinniagara.com"
                className="text-[var(--color-text-secondary)] no-underline text-[15px]"
              >
                Ashley@smoothskinniagara.com
              </a>
            </p>
          </div>
        </div>

        <div
          className="mt-8 pt-4 md:mt-12 md:pt-6 flex flex-wrap justify-between gap-[12px] text-[13px] text-[var(--color-text-secondary)]"
          style={{ borderTop: "1px solid var(--color-border)" }}
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
