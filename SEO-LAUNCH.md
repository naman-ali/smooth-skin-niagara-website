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
- `<main>` landmarks on all pages; descriptive H1s naming service + Niagara Falls; FAQ answers and after-care panels rendered in HTML (hidden, not click-injected); `<a><button>` nesting removed (`Button` supports `href`).
- Image filenames with spaces renamed (`oxygeneo-step-*.jpg`).

## Before domain cutover — owner approvals needed

- [ ] Confirm GBP name/categories/hours/address match footer + schema NAP (`5985 Ernest Crescent, Niagara Falls, ON L2H 0H8`, `(905) 920-7229`). Add `openingHours` to schema only once hours are confirmed (old Contact page had conflicting hours — none were copied).
- [ ] Verify live "5.0 / 61+ reviews" figures on Google before keeping them hard-coded (`src/lib/reviews.ts`, `GoogleReviews` props).
- [ ] Have Ashley review medical/clinical claims (ReadyMedical wound-healing/sterility, exosome efficacy, "pain-free"/"safe for all" phrasing on laser, after-care guidance, consent-form legal entity names still saying "Custom Lash Lounge Inc.").
- [ ] Replace broken image in `EyelashFaq` — it loads `smoothskinniagara.com/wp-content/uploads/.../Xwrap-*.jpg` from the old WordPress site and will 404 after cutover. Move the file into `public/assets`.
- [ ] Unused asset: `public/assets/ChatGPT Image Sep 5, 2026, 10_42_47 PM.jpg` — delete or use.

## At cutover

- [ ] Point `smoothskinniagara.com` (and `www`) at this deployment; verify HTTPS, `http→https`, trailing-slash normalization, and every legacy redirect lands on a 200 page (no chains beyond slash-normalization hop).
- [ ] Keep `.vercel.app` noindex or redirect it to canonical paths once the domain is live.
- [ ] Verify GBP website URL, hours, services and booking link point to the live site.
- [ ] Restore the 5 old blog articles only if their original copy is approved for reuse; currently they 301 to the closest treatment page.

## After launch

- [ ] Search Console: verify property, submit `https://smoothskinniagara.com/sitemap.xml`, inspect `/`, `/laser-hair-removal`, `/contact`, monitor Coverage + redirect handling.
- [ ] Rich Results Test / URL Inspection on rendered DOM for the `BeautySalon`/`Service`/`BreadcrumbList` markup.
- [ ] Mobile QA at 375/390px + Lighthouse/PSI (LCP/INP/CLS) on `/`, `/laser-hair-removal`, `/edermastamp-microneedling`, `/eyelash-extensions`, `/client-form`. Image `srcset`/`next/image` optimization is deferred pending measured LCP data (largest sources: `hero-treatment-olive.png` ~1.6MB, `hero-treatment.png` ~1.6MB, `ashley-1.png` ~1.2MB).
- [ ] Track booking/call/form conversions; compare branded vs service vs local queries over the first weeks.
