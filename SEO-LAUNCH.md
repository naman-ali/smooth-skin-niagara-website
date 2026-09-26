# Smooth Skin Niagara — SEO launch checklist

Canonical production domain: `https://smoothskinniagara.com` (apex; `www` 308-redirects to apex in `src/proxy.ts`).

## Implemented (Sept 2026)

- `metadataBase` + absolute self-canonicals on every public route, unique titles/descriptions, Open Graph/Twitter metadata (`src/lib/seo.ts`, per-page `metadata`/`layout.tsx`).
- `src/app/sitemap.ts` — indexable public routes only. `src/app/robots.ts` — allows all, disallows `/admin`, `/api`, `/post-login`, references canonical sitemap.
- Host-aware indexing in `src/proxy.ts`: any host that is not `smoothskinniagara.com` (e.g. `*.vercel.app` previews) gets `X-Robots-Tag: noindex, nofollow`. `www` redirects to apex.
- `noindex,follow` on `/client-form`, auth pages and `/admin` (kept out of sitemap but still reachable).
- `BeautySalon` JSON-LD sitewide (`src/app/(site)/layout.tsx`), plus `Service` + `BreadcrumbList` on treatment pages. No `aggregateRating`, no `openingHours` (unverified).
- Legacy WordPress redirects in `next.config.ts` (`/edermastamp`, laser variants, blog paths, thank-you, products, old article URLs).
- `/contact` and `/testimonials` pages created; linked in header/footer.
- `<main>` landmarks on all pages; each hero uses a small eyebrow `<h1>` naming the service + Niagara Falls (e.g. "Laser Hair Removal · Niagara Falls") with the original large marketing headline kept as styled `<p>` text — one H1 per page, unchanged visual design. FAQ answers and after-care panels rendered in HTML (hidden, not click-injected); `<a><button>` nesting removed (`Button` supports `href`).
- Image filenames with spaces renamed (`oxygeneo-step-*.jpg`); Xwrap image in `EyelashFaq` moved off the old WordPress URL to `public/assets/xwrap.jpg`.
- Branded 404 (`src/app/not-found.tsx` + `(site)/not-found.tsx`): header/footer, "Back to Home" + "Contact Us" links — important for old-URL visitors and crawl hygiene (status stays 404).
- Restored all 5 old blog articles at `/blog/<slug>` (`src/lib/blog-posts.ts`, `/blog` index): original copy pulled from the live WordPress site, all 11 images self-hosted in `public/assets/blog/`, `BlogPosting` + `BreadcrumbList` JSON-LD, per-post metadata/OG image, consultation CTA per article. Old dated URLs (`/YYYY/MM/slug`) 301 to the new paths.
- PCA peels page temporarily unpublished (owner request): route moved to `src/app/(site)/_disabled/cosmetic-grade-pca-skin-peels/` — `_`-prefix opts it out of routing while keeping the code. Component stays at `src/components/PcaPeelsPage.tsx`, FAQ data at `src/lib/pca-peels-faq.tsx`. All links removed (header nav, footer, contact page, home treatment card, sitemap). URL now returns the branded 404. To re-enable: move the folder back to `src/app/(site)/` and re-add the links.

## Before domain cutover — owner approvals needed

- [ ] Confirm GBP name/categories/hours/address match footer + schema NAP (`5985 Ernest Crescent, Niagara Falls, ON L2H 0H8`, `(905) 920-7229`). Add `openingHours` to schema only once hours are confirmed (old Contact page had conflicting hours — none were copied).
- [ ] Verify live "5.0 / 61+ reviews" figures on Google before keeping them hard-coded (`src/lib/reviews.ts`, `GoogleReviews` props).
- [ ] Have Ashley review medical/clinical claims (ReadyMedical wound-healing/sterility, exosome efficacy, "pain-free"/"safe for all" phrasing on laser, after-care guidance, consent-form legal entity names still saying "Custom Lash Lounge Inc."; the ported Privacy Policy also references "Custom Lash Lounge inc." / "Custom Lash & Laser" verbatim — approve a find-replace to "Smooth Skin Niagara" or update the legal entity).
- [ ] Unused asset: `public/assets/ChatGPT Image Sep 5, 2026, 10_42_47 PM.jpg` — delete or use.

## At cutover

- [ ] Point `smoothskinniagara.com` (and `www`) at this deployment; verify HTTPS, `http→https`, trailing-slash normalization, and every legacy redirect lands on a 200 page (no chains beyond slash-normalization hop).
- [ ] Keep `.vercel.app` noindex or redirect it to canonical paths once the domain is live.
- [ ] Verify GBP website URL, hours, services and booking link point to the live site.
- [ ] Blog articles restored verbatim from the old site — have Ashley re-read them once for accuracy (they're her own 2023–2026 copy; e.g. "becoming a lash tech" is personal narrative).

## After launch

- [ ] Search Console: verify property, submit `https://smoothskinniagara.com/sitemap.xml`, inspect `/`, `/laser-hair-removal`, `/contact`, monitor Coverage + redirect handling.
- [ ] Rich Results Test / URL Inspection on rendered DOM for the `BeautySalon`/`Service`/`BreadcrumbList` markup.
- [ ] Mobile QA at 375/390px + Lighthouse/PSI (LCP/INP/CLS) on `/`, `/laser-hair-removal`, `/edermastamp-microneedling`, `/eyelash-extensions`, `/client-form`. Image `srcset`/`next/image` optimization is deferred pending measured LCP data (largest sources: `hero-treatment-olive.png` ~1.6MB, `hero-treatment.png` ~1.6MB, `ashley-1.png` ~1.2MB).
- [ ] Track booking/call/form conversions; compare branded vs service vs local queries over the first weeks.
