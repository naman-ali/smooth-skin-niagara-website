export default function Footer() {
  const linkStyle =
    "text-[var(--color-text-secondary)] no-underline text-[15px] leading-[1.8] font-[var(--font-body)]";

  const headingStyle =
    "font-[var(--font-display)] text-[18px] font-medium text-[var(--color-text-primary)] mt-0 mr-0 mb-3 md:mb-5 ml-0 tracking-[0.02em]";

  const GOOGLE_MAPS_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.862739530366!2d-79.14738048839105!3d43.08638098878613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d344f9c1b60a79%3A0x415f82f9f0ae72bd!2sSmooth%20Skin%20Niagara!5e0!3m2!1sen!2suk!4v1788992224588!5m2!1sen!2suk";
  const GOOGLE_MAPS_DIRECTIONS_URL =
    "https://www.google.com/maps/dir/?api=1&destination=43.08638098878613,-79.14738048839105";

  return (
    <footer
      className="bg-[var(--olive-100)] pt-12 px-3 pb-6 md:pt-16 md:pb-8 lg:px-[53px] text-[var(--color-text-primary)] font-[var(--font-body)]"
      style={{ borderTop: "2px solid var(--color-border)" }}
    >
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="grid grid-cols-2 gap-6 gap-y-8 md:grid-cols-4 md:gap-12">
          <div className="min-w-0">
            <img
              src="/assets/smooth-skin-niagara-logo.png"
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

          <div className="min-w-0">
            <h4 className="font-[var(--font-display)] text-[18px] font-medium text-[var(--color-text-primary)] mt-0 mr-0 mb-[20px] ml-0 tracking-[0.02em]">
              Services
            </h4>
            <ul className="p-0 m-0" style={{ listStyle: "none" }}>
              {[
                { label: "Laser Hair Removal", href: "/laser-hair-removal" },
                {
                  label: "PCA Skin Peels",
                  href: "/cosmetic-grade-pca-skin-peels",
                },
                {
                  label: "Microneedling CIT",
                  href: "/edermastamp-microneedling",
                },
                { label: "ReadyMedical", href: "/readymedical" },
                { label: "Exosome Therapy", href: "/exosome-therapy" },
                {
                  label: "Celluma LED Light Therapy",
                  href: "/celluma-led-light-therapy",
                },
                {
                  label: "OXYgeneo 3-1 Super Facial",
                  href: "/oxygeneo-3-1-super-facial",
                },
                { label: "Eyelash Extensions", href: "/eyelash-extensions" },
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

          <div className="min-w-0">
            <h4 className="font-[var(--font-display)] text-[18px] font-medium text-[var(--color-text-primary)] mt-0 mr-0 mb-[20px] ml-0 tracking-[0.02em]">
              Company
            </h4>
            <ul className="p-0 m-0" style={{ listStyle: "none" }}>
              {[
                { label: "About Us", href: "/about-us" },
                { label: "After-Care", href: "/after-cares" },
                { label: "Privacy", href: "/privacy-policy" },
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

          <div className="min-w-0">
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
                className="text-[var(--color-text-secondary)] no-underline text-[15px] break-all"
              >
                Ashley@smoothskinniagara.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-12">
          <h4 className={headingStyle}>Find us</h4>
          <div className="relative overflow-hidden rounded-[12px] border border-[var(--color-border)] h-[220px] md:h-[300px]">
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              src={GOOGLE_MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smooth Skin Niagara location"
              allowFullScreen
            />
          </div>
          <a
            href={GOOGLE_MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block font-semibold no-underline text-[15px] text-[var(--color-brand-primary)]"
          >
            Get directions
          </a>
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
