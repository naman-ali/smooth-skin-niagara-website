# Smooth Skin Niagara — local SEO audit and Devin implementation prompts

Audit date: September 25, 2026 (America/Toronto). Expanded after review of the user-supplied Claude SEO audit checklist. Preview audited: https://smooth-skin-niagara-website.vercel.app/. Intended public domain after launch: https://smoothskinniagara.com/.

## Scope and priority scale

I fetched the server-rendered HTML **and checked the JavaScript-rendered DOM** of the homepage, 11 linked public pages, and `/client-form`. I checked `/robots.txt`, `/sitemap.xml`, response headers, selected old/missing URLs, internal paths, image URLs, and the old site's sitemap and content archive. The rendered-DOM pass matters: schema injected by JavaScript would be missed by a static HTML-only audit. This is still **a public-site and migration audit**, not an authenticated Google Business Profile (GBP), Search Console, analytics, source-code, Lighthouse, field Core Web Vitals, competitor, or backlink audit. The evidence ledger below says which checks passed, failed, or remain unmeasured. There is no defensible single “SEO score” from these checks.

- **P1 — launch blocker or material search/booking risk:** fix before domain switch or immediately with launch.
- **P2 — meaningful relevance and conversion improvement:** implement in the next content pass.
- **P3 — useful refinement:** after P1/P2, subject to evidence and time.

Do not promise rankings. GBP visibility depends substantially on relevance, distance, and prominence; this website work mainly helps relevance, organic visibility, and conversion. Whitespark's 2026 report is an expert survey, **not** Google's ranking specification. [Google local ranking guidance](https://support.google.com/business/answer/7091?hl=en) · [Whitespark 2026 study](https://whitespark.ca/local-search-ranking-factors/).

## What the live checks found

| Finding | Evidence on preview | Priority |
| --- | --- | --- |
| Sitemap and robots file absent | Both `/sitemap.xml` and `/robots.txt` returned HTTP 404. A missing robots file is not itself an indexing block; the launch sitemap matters more. | P1 sitemap; P2 robots |
| Canonicals absent | None of the 13 inspected pages emitted `rel="canonical"`. | P1 |
| Preview domain can be indexed | Public pages returned 200 and did not show `noindex` in HTML or an `X-Robots-Tag` on the checked homepage; the main site still serves the old website. | P1 |
| Repeated metadata | `/about-us`, `/laser-hair-removal`, `/celluma-led-light-therapy`, `/eyelash-extensions`, `/after-cares`, and `/privacy-policy` all use the generic title `Smooth Skin Niagara` and generic description. | P1/P2 |
| Migration gap | Old Contact, Testimonials, Blog, five blog posts, and several other URLs have no destination equivalent yet. The preview `/contact`, `/testimonials`, and `/blog` returned 404. | P1 |
| No structured business identity | No JSON-LD found in **either initial HTML or the JavaScript-rendered DOM** on any of the 13 inspected routes. The footer **already displays** `5985 Ernest Crescent, Niagara Falls, ON L2H 0H8`, `(905) 920-7229`, and `Ashley@smoothskinniagara.com`; verify against the current GBP before reuse in schema. | P2 |
| Local context uneven | The homepage and several treatment pages mention Niagara Falls; About, Eyelash Extensions, ReadyMedical, Exosome Therapy, and After-Care do not mention the full city in the extracted main content. Do not repeat the city unnaturally. | P2 |
| Missing semantic landmark on several pages | Rendered HTML for Laser, Celluma, Eyelash, ReadyMedical, and Exosome contained no `<main>` element. | P2 |
| No social preview metadata | None of the 13 inspected pages had Open Graph or Twitter metadata. | P3 |
| Review count/health claims need editorial verification | Several pages say `5.0 Based on 61+ reviews` and some treatment copy makes strong safety/efficacy/healing claims. Verify current rating, exact review count, permissions for photos/testimonials, and clinical wording with Ashley before publishing changes. | P1/P2 |
| Some FAQ answers absent until a click | On `/laser-hair-removal`, the collapsed question was a clickable `<div>` and its answer appeared in the DOM only after clicking. Google does not click accordions to reveal content. Check the same component on all service pages. | P2 |
| Image delivery and semantics | 69 unique same-site image `src` URLs were observed across fetched HTML; 66 returned 200 to a direct HEAD request, and the other three contain unescaped spaces but returned 200 when correctly URL-encoded. The largest observed source PNGs were approximately 1.64 MB, 1.60 MB and 1.23 MB. Many page images have no `srcset`; optimize measured LCP assets. | P2 |
| Nested interactive controls | Six pages contain a `<button>` inside an `<a>` in fetched HTML. This can make keyboard/focus behavior confusing; use one semantic link for navigation. | P2 |

The footer's existing address and contact details are a strength; **do not describe them as missing**. Existing treatment descriptions, FAQs, testimonials, and meaningful image alt text also give Devin a good base to improve rather than replace.

## Technical SEO evidence ledger (following the supplied checklist)

| Category | What was checked and observed | Status / practical next step | Priority |
| --- | --- | --- | --- |
| Crawlability | All 13 discovered public/form routes returned 200 in the fetch; homepage linked to all other discovered routes directly or through shared navigation/footer. Robots file 404. | **Mostly passes:** no sampled public-page crawl block. Add production sitemap and explicit robots sitemap reference; inspect any repository-only routes. | P1/P2 |
| Sitemap | `/sitemap.xml` returned 404. Old WordPress domain still serves its old sitemap before cutover. | **Fail:** generate and submit a production-only XML sitemap with verified canonical 200 pages; don't include the staging hostname or intake/admin routes. | P1 |
| Indexability | Preview pages have no robots `noindex` in initial or rendered HTML; sampled homepage has no `X-Robots-Tag`. `/client-form` is likewise not marked `noindex`. | **Fail for staging/form:** implement hostname-aware rules and inspect Googlebot's actual result in Search Console after launch. Site-query results cannot establish index status. | P1 |
| Canonical and duplicate hosts | No canonical on any of 13 rendered pages. Preview and old production domains coexist. | **Fail:** production self-canonicals, preview `noindex`/redirect, one preferred live host. Canonical is a hint, not a substitute for server redirects. | P1 |
| HTTP/HTTPS, path normalization | `http://` preview redirected to HTTPS; `/laser-hair-removal/` redirected once to slashless 200; an uppercase variant and invented nonexistent page returned genuine 404. Sampled HTTPS homepage sent HSTS. | **Pass on samples:** retain behavior; recheck `www` vs non-`www` and all old paths **after domain cutover**. | P2 validation |
| Internal architecture | 13 distinct internal paths in sampled HTML; all corresponded to the crawled pages. Main services have homepage links; some ancillary pages rely mainly on footer/nav and have little contextual linking. | **Pass for obvious broken links/orphans among discovered routes; improvement for context.** Crawl repository routes and a post-launch XML sitemap to find undiscovered orphan pages. | P2 |
| Soft 404 and redirects | Invented route returned actual 404; new `/contact`, `/blog`, `/testimonials` returned real 404 while old equivalents exist. | **Pass for ordinary 404 behavior; migration gap remains.** Map old URLs one-to-one and inspect for soft 404s in Search Console after launch. | P1 |
| Initial HTML vs rendered DOM | Titles, visible text and one H1 per inspected route were in server HTML. Browser rendering found no JSON-LD on any of 13 routes. Five treatment/product routes had no `<main>` landmark. | **Mixed:** page text is available without JS, but structured identity and landmarks need work. Google Rich Results Test/URL Inspection after deployment still required. | P2 |
| Page titles and snippets | Six pages repeat `Smooth Skin Niagara` title plus generic description. Other key pages have distinct metadata. | **Fail on six pages:** unique intent-aligned metadata. Do not chase a rigid character count; Google may rewrite title/snippet and display length varies. | P1/P2 |
| Headings | Every inspected route had exactly one H1. Several H1s are slogans and many templates jump from H2 to H4 for visual cards/stat labels. | **Mixed:** improve service naming where useful, use headings for hierarchy rather than styling; skip-level issue is primarily semantics/accessibility, not a known direct ranking penalty. | P2/P3 |
| Local NAP and GBP | Full address, phone, email and directions link in shared footer; current GBP name/category/hours/address visibility, citations and reviews were not accessed. | **Website NAP present; external alignment unverified.** Confirm Ashley's current listing and business facts before schema/hours changes. | P1 external/P2 code |
| Schema | Zero JSON-LD scripts in rendered DOM on all 13 routes. | **Verified absent on sampled site:** add accurate LocalBusiness identity, validate markup in Google's Rich Results Test after deployment. Do not promise stars or ranking lift. | P2 |
| Images | Observed images generally have meaningful alt text, and no currently loaded image was broken in the browser pass. Three OxyGeneo paths contain spaces and load when encoded. Some raw images are large, and most routes' `<img>` tags lack responsive `srcset`. | **Mixed:** retain descriptive alt; distinguish decorative images; use responsive sizing/modern delivery for expensive assets, then measure. Rename/encode space-containing paths when safe. | P2/P3 |
| Mobile experience | All 13 pages set a viewport meta tag; no horizontal overflow was observed at a **1363 px desktop viewport**. | **Mobile remains unverified.** Test at 375/390 px, taps, sticky navigation, booking and form flow, parity of content. | P2 measurement |
| Core Web Vitals / speed | No Lighthouse/field dataset was obtained. Google PageSpeed API request was quota-limited (HTTP 429). HTML pages fetched ranged roughly 25–104 KB before shared assets; 15–18 script tags appear per route, which is *not* itself a measured failure. | **Unmeasured:** run mobile PSI/Lighthouse and Search Console CrUX where available, record LCP/INP/CLS and actual LCP element, then prioritize proven bottlenecks. Do not claim a score. | P2 measurement |
| HTTPS/mixed content | HTTPS with HSTS on sampled preview homepage; no `http://` `src`/`href` references in the fetched HTML. | **Pass on sampled markup:** recheck the final domain and actual network requests, especially third-party embeds. | P3 validation |
| Localization / hreflang | Inspected pages are English (`lang="en"`) for one Niagara Falls studio; no alternate language or regional versions were observed. | **Not applicable now:** no hreflang or duplicate city/location doorway pages needed. If genuine translated pages launch later, audit separately. | None |
| Crawl budget, facets, pagination | Small 13-route public preview, no observed faceted navigation or session URL parameters. Old blog pagination is a migration matter. | **Low relevance at this scale:** keep XML sitemap and canonical URL set clean. | P3 |
| Rankings, engagement, backlinks | No Search Console, GBP, GA4, call/booking events, competitor SERPs, citation index, or backlinks were accessible in this audit. | **Unknown:** baseline impressions/clicks/queries and conversion metrics, then compare by landing page and locality after launch. | P2 ongoing |

### Priority interpretation

**Fix first:** production hostname/indexing split, sitemap, old-URL redirects, six generic title/description pairs, and a real Contact destination. **Then:** verified business schema, contextual links, FAQ visibility/keyboard access, page-specific local copy, and measured image/mobile improvements. **Finally:** social previews, breadcrumbs and optional educational content. Missing robots alone, title length, H2→H4 skips, and a perfect Lighthouse score should not displace the launch fixes.

### Keyword and intent map (avoid self-competition)

| Intent | Preferred page | Constraint |
| --- | --- | --- |
| Smooth Skin Niagara / Niagara Falls aesthetic studio | `/` | Cover the business and service range; link clearly to laser. |
| Laser hair removal Niagara Falls, Soprano ICE Platinum | `/laser-hair-removal` | Consolidate old laser and promo URLs here; don't target multiple near-duplicate laser landing pages. |
| Microneedling / eDermaStamp Niagara Falls | `/edermastamp-microneedling` | Existing treatment options stay as approved. |
| PCA chemical peels Niagara Falls | `/cosmetic-grade-pca-skin-peels` | Match the actual peels and approved pricing. |
| Celluma LED therapy Niagara Falls | `/celluma-led-light-therapy` | Distinguish standalone sessions from add-ons. |
| Lash extensions / lash lift Niagara Falls | `/eyelash-extensions` | One useful page is fine; split only if there is distinct approved content and search intent. |
| OxyGeneo facial Niagara Falls | `/oxygeneo-3-1-super-facial` | Name the service in H1, distinguish options/add-ons. |
| ReadyMedical / topical exosomes | `/readymedical`, `/exosome-therapy` | Confirm product-vs-service positioning and claims; no invented procedures. |
| Local contact/directions, owner credentials, aftercare | `/contact`, `/about-us`, `/after-cares` | Support trust and booking; avoid making legal/form pages target service queries. |
| Informational lash/laser questions | Restored original articles, if retained | Ensure the 2026 local laser article is informational and not a second service-page clone. |

Single-studio location pages for nearby towns without distinct real-world value would be doorway-like duplication. The Contact page is the useful location page for this one studio.

### Sitewide launch checklist for Devin

1. **Canonical domain and crawl controls (P1).** While the Vercel preview and old production site coexist, keep the preview out of search with a preview-only `noindex` or access control. At cutover, ensure `https://smoothskinniagara.com` serves indexable 200 pages with absolute self-referencing canonicals, and redirect the preview host to the matching canonical paths (or leave it `noindex` if redirecting is impractical). Never point the *live* sitemap/canonicals at `.vercel.app`. Do not disallow pages in `robots.txt` while relying on their `noindex` tags, since crawlers need to fetch the page to see that instruction. Check Vercel's deployment/hostname configuration before changing global metadata. [Google site-move guide](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) · [Google noindex guide](https://developers.google.com/search/docs/crawling-indexing/block-indexing).
2. **Sitemap and robots (P1).** Generate `/sitemap.xml` on the canonical domain with only canonical, indexable, 200-status public pages. Add a minimal `/robots.txt` pointing to the canonical sitemap. Do not list `/admin`, client submissions, confirmation screens, or blocked/noindex pages. A sitemap helps discovery; it does not guarantee indexing or ranking. [Google sitemap guide](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
3. **Old URL mapping (P1).** Configure server-side 301/308 redirects on `smoothskinniagara.com` for old paths that move. Preserve original paths when suitable; map to the closest equivalent page, not a blanket homepage redirect. Keep URLs already shared by old/new pages resolving correctly. The old site's 20-page Yoast sitemap and 5-post sitemap are in the archive from the prior task. See migration section below. Validate redirect chain, status, and final canonical URL per row. [Google migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).
4. **Metadata (P1/P2).** Give every indexable route a descriptive unique title and description, per-page canonical, and a single clear H1. Metadata suggestions below are drafts; retain approved brand spellings and treatment names. Use Next.js metadata in the correct route/layout rather than injecting duplicates. [Google title guidance](https://developers.google.com/search/docs/appearance/title-link) · [Snippet guidance](https://developers.google.com/search/docs/appearance/snippet).
5. **GBP alignment (P1 outside code).** Check the verified GBP's exact name, primary and additional categories, services, address visibility, hours, phone, booking link, and website URL. The old Contact page showed conflicting hours in different sections, so do not copy old hours into the new site/schema without Ashley's confirmation. Ensure the GBP site points to the live canonical site and the relevant booking path works. Continue genuine review collection and responses. Do not add keywords to the GBP business name unless part of its real-world name. [Google local ranking guidance](https://support.google.com/business/answer/7091?hl=en).
6. **Business schema (P2).** Add one consistent `LocalBusiness`/appropriate `BeautySalon` identity with name, canonical URL, verified address, telephone, logo, and verified `sameAs`; include hours only once confirmed. Link service pages to the business entity where useful and avoid conflicting duplicate nodes. Validate against rendered HTML and the Rich Results Test. Do **not** add self-serving `AggregateRating`/review markup expecting star snippets; Google excludes business-controlled reviews for LocalBusiness/Organization review stars. [Google LocalBusiness documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business) · [Google self-serving reviews rule](https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful).
7. **Editorial QA (P1/P2).** Preserve current approved prices and packages. Flag unverified medical/technical claims, guaranteed results, “pain-free,” “safe for all,” wound-healing claims, and product status/credentials for Ashley's approval. Keep honest limitations and contraindications. Do not generate synthetic testimonials, review numbers, certifications, before/after claims, or new offers. [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
8. **Measure after launch (P2).** Verify ownership of the canonical property in Search Console, submit the sitemap, inspect homepage and major treatment URLs, monitor pages/redirects, set up booking/call/form conversion tracking, and compare branded, service, and local query trends. This audit did not access these accounts. Run mobile Lighthouse/PageSpeed and Core Web Vitals on the live site before claiming performance improvements; this audit did not run a lab benchmark.

## Legacy URL decisions for the domain switch

| Old path | Proposed destination/action | Priority |
| --- | --- | --- |
| `/` | New `/` | P1 |
| `/laser-hair-removal/`, `/laser-hair-removal-niagara/`, `/niagara-laser-hair-removal/`, `/soprano-ice-platinum-promo/` | `/laser-hair-removal`; retain an active promo only if Ashley confirms it. | P1 |
| `/edermastamp/` | `/edermastamp-microneedling` | P1 |
| `/cosmetic-grade-pca-skin-peels/`, `/celluma-led-light-therapy/`, `/eyelash-extensions/`, `/oxygeneo-3-1-super-facial/`, `/readymedical/`, `/exosome-therapy/`, `/about-us/`, `/privacy-policy/` | Corresponding current route without trailing slash, subject to actual routing. | P1 |
| `/contact/` | Create `/contact` with verified address, contact/appointment path, directions, hours if approved, then redirect. | P1 |
| `/testimonials/` | Create `/testimonials` using authorized real reviews, or redirect to a substantial on-site reviews section if intentionally consolidated. | P2 |
| `/blog/`, `/blog/page/2/`, five old articles | Preserve useful articles at the same paths where possible and link to current service pages. Map pagination to a meaningful blog page if appropriate. | P2 |
| `/thank-you/`, `/thank-you-promo-240/` | Keep only if required by active flows and mark `noindex`; otherwise return an appropriate retired status or redirect to a genuinely equivalent confirmation flow. Never expose a fake confirmation. | P2 |
| `/new-home-page/` | If an old draft is indexed or linked, redirect to `/`; otherwise retire. | P2 |
| `/products/` | Public fetch currently redirects to the old homepage, though search results may still show an older product page. Verify whether products remain offered; route to relevant live content only if equivalent. | P2 |

Old article URLs observed: `/2023/02/becoming-a-lash-tech/`, `/2023/03/how-long-do-lash-extensions-last/`, `/2023/02/is-laser-hair-removal-worth-it/`, `/2023/03/does-laser-hair-removal-hurt/`, `/2026/01/laser-hair-removal-in-niagara-falls/`. Review the article copy for accuracy and date-sensitive claims before republishing. Do not redirect all five to the homepage.

---

# Devin prompts — run the sitewide task first, then the page tasks

These are implementation instructions, not final replacement copy. Devin has access to the repository; this audit was performed on the public preview only. Ask Ashley when a fact, medical claim, before/after image, certification, business hour, price, or live promotion needs approval. Maintain the current design and functioning intake/booking flow.

## Prompt 0 — shared SEO foundation and launch migration

> Inspect this Next.js repository and implement a launch-safe SEO foundation for Smooth Skin Niagara. Primary production domain will be `https://smoothskinniagara.com`; `https://smooth-skin-niagara-website.vercel.app` is the preview. **P1:** Implement environment/hostname-aware indexing so preview does not index, while live public pages can; add absolute canonical URLs, unique route metadata as specified in the following page tasks, production-only sitemap and robots file, and server-side mapping of old WordPress URLs in the migration table. Preserve exact old/new URL equivalents and avoid redirecting unrelated routes to the homepage. Ensure indexable HTML returns 200; missing pages return 404; private admin, form submission, and thank-you routes do not enter the sitemap. **P2:** Add one verified LocalBusiness/BeautySalon JSON-LD entity using the footer's address `5985 Ernest Crescent, Niagara Falls, ON L2H 0H8`, phone `(905) 920-7229`, business name, and logo **only after checking current GBP/owner-approved details**; hours are unverified. Use this identity consistently, not a separate invented business per treatment page. Add accessible `<main>` landmarks where missing, ensure important FAQ answers exist in rendered HTML when collapsed, and add a working `/contact` route. **P3:** Add per-page Open Graph previews and optional visible breadcrumbs + BreadcrumbList on service pages. Do not add fake ratings, review schema stars, keyword-stuffed location names, or `FAQPage` markup merely to chase rich results. Verify status, robots directives, canonical, title, description, H1, schema parse, internal links, and redirects with real requests after implementation. Update the repo's existing SEO documentation or add a concise launch checklist with current state, remaining owner approvals, and launch checks. Do not deploy or change DNS as part of this task unless separately authorized.

**Add this technical acceptance block to Prompt 0 when handing it to Devin:**

> Use a shared route registry/metadata helper where it reduces repetition, but verify each URL's final title, description, canonical and robots directives in **server HTML and rendered DOM**. Keep production and preview behavior separately testable; ensure the preview never becomes the canonical URL. Verify `http→https`, preferred `www`/non-`www`, slash normalization and the legacy WordPress redirect map on the final hostname. Return a real 404 for unknown routes and avoid soft 404s. Inspect code for noindex applied globally, `robots.txt` disallow conflicts, parameter URLs, route-only content after hydration, and accidental duplicate metadata from nested Next.js layouts. Validate all current public links and the consultation form, plus keyboard access to interactive accordions and in-page navigation. Replace `<a><button>…</button></a>` with one accessible link (six sampled routes). Ensure FAQ answer text exists in DOM before clicks, with accessible control semantics and keyboard operation. Preserve genuinely decorative images with empty alt, descriptive alt for meaningful images, appropriate image width/height, responsive sources and lazy loading below the fold; don't lazy-load the real LCP hero. Measure mobile (375/390 px) and desktop with Lighthouse/PSI and record LCP/INP/CLS or explain if unavailable. Profile actual LCP elements before changing assets. After changes, provide a route-by-route matrix of observed response code, indexability, canonical, H1, schema, inbound links, and mobile QA; include any remaining Search Console/GBP approvals. Do not install a general SEO plugin or rewrite approved treatment copy automatically.

### Page-specific technical observations to keep beside the prompts

| Route | Rendered evidence | Technical change to add to its prompt |
| --- | --- | --- |
| `/` | Unique title; `<main>` and H1 present; images have useful alt; `ashley-1.png` source about 1.23 MB; nested link/button in “Find Your Treatments.” | Remove nested control; serve correctly sized/modern headshot if it affects measured loading, keeping high-quality original; verify homepage LCP and mobile hero. |
| `/about-us` | Generic metadata; `<main>` present; certificate gallery and image alt present. | Verify genuine image/credential labels; lazy-load below-fold certificates and dimension images; ensure city/Contact links are contextual. |
| `/laser-hair-removal` | Generic metadata; no `<main>`; FAQ answer inserted only on click; `hero-treatment-olive.png` source about 1.64 MB; H1 generic. | Add landmark, meaningful H1 and crawlable accessible FAQs; inspect hero as LCP candidate and optimize responsive delivery if measured. |
| `/edermastamp-microneedling` | Unique metadata; `<main>` present; 58 heading elements include many H2→H4 jumps; nested in-page link/button. | Correct interactive nesting; make FAQ answers accessible and avoid cosmetic headings for price/card labels. |
| `/cosmetic-grade-pca-skin-peels` | Unique metadata; `<main>`; nested link/button; `hero-treatment.png` source about 1.60 MB. | Fix control nesting; verify real hero and responsive sizing; retain approved pricing. |
| `/celluma-led-light-therapy` | Generic metadata; no `<main>`; FAQs and video section. | Add landmark and check that video/FAQ content is indexable without user action, then test the video on mobile. |
| `/eyelash-extensions` | Generic metadata; no `<main>`; image-heavy before/after and product sections; `ashley-1.png` referenced. | Add landmark, check image dimensions/responsive variants, permissioned before/after captions and local context. |
| `/oxygeneo-3-1-super-facial` | Unique metadata; `<main>`; nested in-page link/button; two large hero PNG names referenced; three OxyGeneo image paths contain spaces but load encoded. | Fix nesting, measure whether either PNG is actually in the critical viewport, safely normalize image URLs and keep redirect/references when renaming assets. |
| `/readymedical` | Unique metadata; no `<main>`; nested “View ReadyMedical Solutions” link/button. | Add landmark, fix nested control, confirm product-versus-service indexing intent and accuracy of medical claims. |
| `/exosome-therapy` | Unique metadata; no `<main>`; nested “View Benefits” link/button. | Add landmark and fix control; confirm topical treatment and claim approvals. |
| `/after-cares` | Generic metadata; `<main>`; multiple treatment selectors, only laser guidance visible in initial server text sampled. | Inspect all selector states and ensure each approved treatment's guidance is available to crawlers and keyboard users. |
| `/privacy-policy` | Generic metadata; `<main>`, clear H1 and subsections. | Unique metadata/canonical, accurate legal content; exclude if intentionally noindexed. |
| `/client-form` | Unique metadata, `<main>`, but no robots `noindex` or canonical; zero ordinary internal links in rendered form view. | `noindex,follow`, exclude sitemap, preserve direct and navigation entry points, test form on mobile; never expose submissions. |

The image sizes are **source resource sizes**, not LCP scores or proof those resources all download on initial load. The 69-image URL check is not a substitute for real viewport/performance measurement.

## Prompt 1 — Homepage `/`

**Observed:** Title targets laser and aesthetics, but H1 is generic; body mentions Niagara Falls once. Footer has full contact details and homepage links to the main treatments. No canonical or schema.

> Optimize the homepage for the actual Niagara Falls studio without replacing its visual design. **P1:** Set production title draft `Smooth Skin Niagara | Laser & Skin Treatments in Niagara Falls`; draft description `Discover laser hair removal, microneedling, facials, chemical peels, LED therapy and lashes at Smooth Skin Niagara in Niagara Falls. Book a consultation.` Keep the H1 human-friendly but make “laser hair removal and skin treatments in Niagara Falls” visible and natural near the top, with one clearly labeled contact/consultation path. Add production canonical `/`. **P2:** Keep the existing treatment cards and deep links, make the studio location and Ashley's expertise easy to verify, link to the new Contact route, and (if approved) explain that the business was previously known as Custom Lash & Laser using the exact confirmed former name. Keep the existing footer NAP consistent with GBP. **P3:** Add distinct social sharing title/image, use actual treatment images and descriptive alt text, and improve mobile visual/performance issues only after measurement. Preserve current services, review display, and booking functionality; verify the “5.0 / 61+” figure from its source rather than hard-coding an unverified number.

## Prompt 2 — About `/about-us`

**Observed:** Generic title/description; H1 only `Ashley`; 14 image elements include training/certification images; no `Niagara Falls` in main content. One hero alt uses `Ashley, founder...` while another page's alt says `Ashley Romano`—confirm the name before changing it.

> Improve the About page's local trust signals while preserving Ashley's voice and actual certificates. **P1:** Use unique title draft `Meet Ashley | Smooth Skin Niagara in Niagara Falls` and a specific description about Ashley's experience, services, and studio. Change H1 to `Meet Ashley, Founder of Smooth Skin Niagara` or similar; add a clear, natural first-paragraph mention of Niagara Falls and a link to the Contact page. **P2:** Add concise descriptions of the *verified* certifications and years of experience shown on the page, links from expertise to Laser, Lashes, and Microneedling pages, and a visible consultation CTA. Verify the exact surname and certificate claims with Ashley; don't infer licensure from certificate images. **P3:** Keep descriptive image alt text, link to verified professional/social profiles, and add About-specific social metadata. Ensure any `Person` schema describes only verified public facts and references the single business entity.

## Prompt 3 — Laser Hair Removal `/laser-hair-removal`

**Observed:** Important page has generic title/description; H1 `Confident Skin. Every Day.`; intro does say Niagara and uses Soprano ICE Platinum; no published price in fetched content; no `<main>` in server HTML; before/after and FAQs present.

> Make the laser page the primary landing page for `laser hair removal Niagara Falls`. **P1:** Set title draft `Laser Hair Removal in Niagara Falls | Smooth Skin Niagara`; description draft `Explore Soprano ICE Platinum laser hair removal at Smooth Skin Niagara in Niagara Falls. See treatment areas, what to expect and consultation options.` Use one H1 that names Laser Hair Removal in Niagara Falls while preserving the current emotional headline as supporting copy. Add canonical and `<main>` and ensure all old laser/promo paths in the migration table lead here. **P2:** Add clear treatment-area anchors (face, underarms, bikini/Brazilian, legs, back/chest) and approved pricing/starting price **only if Ashley confirms it**; otherwise explain that a personalized quote is provided during consultation. Keep practical eligibility, preparation, timing, limitations, aftercare, and authentic local results. Link to `/after-cares` and Contact. Edit absolute phrases such as `pain-free`, `safe for all`, and implied guaranteed clearance only after owner review. Ensure accordion FAQ answers are present in accessible rendered DOM, not only injected after a click. **P3:** Add service-focused social preview, descriptive image context, and breadcrumb. Check image dimensions/mobile LCP after measuring; do not claim a Core Web Vitals fix without a test.

## Prompt 4 — Microneedling `/edermastamp-microneedling`

**Observed:** Unique title/description, detailed treatment choices, visible prices, FAQ and H1; old path is `/edermastamp/`. Main content references Niagara Falls only once.

> Keep the current detailed eDermaStamp page and its approved treatment/pricing structure. **P1:** Ensure `/edermastamp/` permanently redirects here after launch; set canonical to the production route; check that title, H1 and first paragraph agree on `microneedling in Niagara Falls`. Do not change any current prices or packages based on this audit. **P2:** Add a short studio-specific paragraph about Ashley's actual training and how consultations choose among existing options; link to `/after-cares`, ReadyMedical, Exosome where genuinely relevant, and Contact. Clarify any distinction between a standalone microneedling treatment and optional enhancement without promising outcomes. Verify medical/clinical claims, indications, downtime, pigment/acne descriptions, and contraindications with Ashley. Keep FAQ answers available in rendered HTML. **P3:** Add an appropriate share image and breadcrumb; improve photo alt/context where it identifies a real treatment rather than stuffing place names into every image.

## Prompt 5 — PCA Peels `/cosmetic-grade-pca-skin-peels`

**Observed:** Unique metadata; four peel options with prices; H1 is a slogan, although the intro identifies PCA SKIN and Niagara Falls.

> Improve search clarity for PCA SKIN chemical peels in Niagara Falls without altering the approved menu. **P1:** Keep the unique title and description, ensure production canonical and old same-path continuity, and use a clear H1 such as `PCA SKIN Chemical Peels in Niagara Falls` while retaining `Reveal Brighter, Smoother-Looking Skin` as supporting text. **P2:** Keep Sensi, Ultra, OXY, and Retinol option names/prices as currently approved; add practical distinctions, suitability decided at consultation, what to expect, and approved aftercare link. Check claims about acne, pigmentation, and recovery with Ashley. Link to other relevant facials and Contact only where useful. **P3:** Add an actual treatment image if Ashley supplies one with rights/consent, a distinct OG image, and breadcrumb. Do not invent before/after photos or location-specific testimonials.

## Prompt 6 — Celluma LED `/celluma-led-light-therapy`

**Observed:** Generic title/description; page identifies Celluma and Niagara Falls near top; 15/20/30 minute prices shown; no `<main>` in server HTML; FAQ present.

> Give the Celluma page its own search identity. **P1:** Set title draft `Celluma LED Light Therapy in Niagara Falls | Smooth Skin Niagara`; description draft `Explore Celluma LED light therapy in Niagara Falls for skin-focused sessions. View 15, 20 and 30 minute options and book a consultation.` Change H1 to include `Celluma LED Light Therapy`, keep production canonical, and add `<main>`. **P2:** Retain approved $30/$40/$60 choices, clarify which concerns and add-ons Ashley actually offers, link to relevant Microneedling and facial pages, and expose preparation/contraindication FAQs as accessible server-rendered content. Have Ashley verify wavelength, therapeutic and safety claims before revising them. **P3:** Add OG image, breadcrumb, and descriptive context around the existing demo video. Avoid duplicating another service page's boilerplate.

## Prompt 7 — Eyelash Extensions `/eyelash-extensions`

**Observed:** Generic title/description; H1 `Wake Up With Lashes You Love.`; Classic, Hybrid, Volume, and Lash Lift & Tint are together; multiple approved prices; the main text lacks `Niagara Falls`; no `<main>`.

> Optimize one page for its actual lash services and local clients. **P1:** Set title draft `Eyelash Extensions & Lash Lift in Niagara Falls | Smooth Skin Niagara` and specific description mentioning Classic, Hybrid, Volume, Lash Lift & Tint; use H1 naming eyelash extensions in Niagara Falls, preserve the existing tagline below it, add production canonical and `<main>`. **P2:** Add a short local introduction with Ashley's verified lash experience; preserve all displayed prices and fill/removal details; create jump links for Extensions versus Lift & Tint; link to lash aftercare and Contact. Explain maintenance and the distinction between services using approved copy. **P3:** Distinct social preview, naturally descriptive alt text for authentic lash photos, and breadcrumb. Do not create an extra Lift page unless there is enough unique content and a clear reason to split search intent.

## Prompt 8 — OxyGeneo `/oxygeneo-3-1-super-facial`

**Observed:** Unique metadata and substantial information on Express, Deluxe, Signature, customization, add-ons, FAQ and prices. H1 is generic; body mentions Niagara Falls at top.

> Keep the substantive OxyGeneo content but make the service name prominent. **P1:** Keep a unique title and production canonical; H1 draft `OxyGeneo 3-in-1 Facial in Niagara Falls` and retain the current `Your Best Skin...` phrase as a visual subheading. Maintain old same-path continuity. **P2:** Preserve currently displayed Express/Deluxe/Signature and add-on prices; explain when each option is useful, consultation choice, realistic downtime, and any combined TriPollar RF/ultrasound offering only if Ashley confirms it. Link to PCA Peels/Celluma where relevant and to Contact. Ensure treatment claims, FAQs and product terminology are verified. **P3:** Add OG image, breadcrumb, video context/transcript if available, and meaningful image text around real photos.

## Prompt 9 — ReadyMedical `/readymedical`

**Observed:** Unique title/description, but page presents product formulations as treatment content and makes strong medical claims including wound healing, immune response and application to bleeding skin; no full city mention in main text; no `<main>`.

> Clarify the role of ReadyMedical in Ashley's actual service menu. **P1:** Maintain the old `/readymedical/` path via redirect and canonical; add `<main>`. Flag the existing medical/sterility/bleeding-skin/healing statements for direct Ashley/product-label approval **before** rewriting or adding further claims. Do not state she performs procedures solely because the product page lists them. **P2:** If these are add-ons or professional solutions rather than bookable standalone treatments, say so clearly near the top; explain which *actually offered* services can include them, link to Microneedling and approved consultation/contact paths, and mention Niagara Falls naturally. Adjust title/description to `ReadyMedical Add-Ons in Niagara Falls` only if the classification is confirmed. **P3:** Add distinct social preview and breadcrumb if kept as an indexable service/product page; consider noindex only if it offers no unique customer value after owner review.

## Prompt 10 — Exosome Therapy `/exosome-therapy`

**Observed:** Unique title/description and product explanation; no full city mention in main text; no `<main>`; claims about renewal and pairing with many procedures.

> Check that this page accurately describes Ashley's **topical** exosome offering. **P1:** Keep production canonical, redirect old same-path trailing-slash URL if needed, add `<main>`, and ask Ashley to approve claims about efficacy, sterility, safety and procedures actually performed. Avoid suggesting injections if the offered product is topical. **P2:** Make the page explicit about whether exosomes are a standalone service, an add-on, or a consultation-only option. Name Niagara Falls once in real context, link to the relevant Microneedling/other actually available treatments, and provide realistic expectations and approved FAQ. Do not invent prices. **P3:** Improve social preview, breadcrumb, and comparison clarity if Ashley supplies sufficient accurate information.

## Prompt 11 — After-Care `/after-cares`

**Observed:** Generic title/description; one H1; server HTML includes laser guidance; the page has treatment selectors. Detailed guidance includes timing, contraindication-related references, and some absolute biological claims.

> Make After-Care a trustworthy support page. **P1:** Set title draft `Treatment After-Care Instructions | Smooth Skin Niagara` and a specific description; add production canonical. Have Ashley clinically review all detailed after-care wording, especially statements about shaving intervals, pregnancy, blood supply, expected clearance, and medication/condition guidance. Preserve existing instructions until approved changes are supplied. **P2:** Ensure each treatment selector exposes its complete guidance in accessible, crawlable rendered HTML, with clear section headings/anchors for Laser, Lashes, Lift & Tint, PCA, Microneedling, Celluma, and OxyGeneo. Link each section to its service page and provide a contact route for personal instructions. Decide whether this is one support page or a set of separate pages based on actual user needs; do not clone near-identical pages just for keywords. **P3:** Add visible last-reviewed date only when a real review occurs; use concise social metadata. It need not be a primary ranking target.

## Prompt 12 — Privacy Policy `/privacy-policy`

**Observed:** Generic title/description; body has headings and a September 2026 update. It is a trust/legal page, not a treatment landing page.

> Keep the privacy page accessible and accurate. **P1:** Set unique title `Privacy Policy | Smooth Skin Niagara`, appropriate short description, and canonical; keep it out of treatment keyword targeting. **P2:** Have the owner review whether the policy actually reflects intake forms, photos, analytics, review requests, data processors and retention/contact methods used by this site; do not invent legal promises. Link to Contact. **P3:** Keep a real last-updated date and readable heading structure. Index/noindex can follow the site's legal-page convention; do not place a noindex page in the sitemap.

## Prompt 13 — Client Intake `/client-form`

**Observed:** 200 page with unique `Client Intake Form | Smooth Skin Niagara` title, no canonical/noindex, treatment choices in server HTML. This is an operational form, not a search landing page.

> Preserve the entire intake and consent workflow. **P1:** Mark `/client-form` `noindex,follow` (or equivalent) and exclude it from the sitemap while keeping it reachable from the website, QR codes and direct links; ensure submitted answers, client details, and result pages never become public crawlable URLs. Test the existing treatment selection and form flow, not just the initial HTML. **P2:** Add a plain explanation of what a visitor needs before opening the form and a link back to treatments/Contact. **P3:** Keep title/description clear for sharing in SMS/email; no local-keyword expansion is needed.

## Prompt 14 — New Contact `/contact` (missing)

**Observed:** Old `/contact/` existed; preview `/contact` returns 404. Contact information is currently present in the new site's footer and homepage.

> Create a useful, indexable Contact page and map the old `/contact/` to it at launch. **P1:** H1 `Contact Smooth Skin Niagara in Niagara Falls`; title draft `Contact Smooth Skin Niagara | Niagara Falls`; include approved studio address, tap-to-call/text `+1 905-920-7229`, email, directions, real consultation/booking CTA, and a self-canonical. Verify the address and whether the studio is appointment-only against Ashley's current GBP. **P2:** Show only current owner-approved hours, parking/access details and service area; link to relevant treatments. The old Contact page conflicts about Monday/opening hours, so do not copy its schedules. If a map embed is used, keep a text address and direct map link too. **P3:** Add business identity/social preview. Test contact links on mobile and confirm no duplicate booking form submissions.

## Prompt 15 — Reviews `/testimonials` (old page missing)

**Observed:** Old `/testimonials/` existed; preview `/testimonials` is 404. New treatment/home pages already display a review carousel.

> Decide whether to restore a standalone Reviews page or use a genuinely substantial, directly addressable reviews section on the new site. **P1:** Provide a relevant destination for old `/testimonials/` so legacy links do not break; keep the existing real review carousel. **P2:** If building `/testimonials`, use permissioned, accurately attributed quotes with treatment context and a link to the live GBP listing; vary the content beyond copies of the shared carousel. Make title/H1 clearly about client reviews in Niagara Falls and link to booking and treatment pages. Confirm `5.0` and `61+` against the actual source. **P3:** Add unique social metadata. Do not implement self-serving LocalBusiness aggregate-rating markup expecting star rich results.

## Prompt 16 — Blog index and five old articles (missing)

**Observed:** Preview `/blog` returns 404; old site exposes `/blog/`, a second listing page, and five article URLs. The old pages are in the archived ZIP.

> Restore useful original educational content without copying stale claims. **P1:** Inventory the five old article URLs listed in the migration table, decide which deserve preservation, and implement exact routes or one-to-one server redirects to truly relevant replacements. No blanket homepage redirect. **P2:** Build `/blog` with a unique title/H1, publication/update dates that reflect actual work, links from laser/lash articles to the corresponding service pages, and a clear local context only where relevant. For each old article: `becoming-a-lash-tech` → verify whether it serves prospective clients and retain if useful; `how-long-do-lash-extensions-last` → lash maintenance and authentic advice; `is-laser-hair-removal-worth-it` → balanced comparison and real cost/time context; `does-laser-hair-removal-hurt` → honest comfort variability and technology; `laser-hair-removal-in-niagara-falls` → original local information and potential overlap with service page. Consolidate if substantially duplicative, using a specific redirect. Review technical/medical claims with Ashley; avoid generic AI filler. **P3:** Add relevant Article markup only for genuine articles with accurate author/date and image; improve local internal links and images. Ensure the sitemap includes only the final indexable articles.

## Acceptance checks to run after Devin edits

- On the canonical production hostname: request `/robots.txt`, `/sitemap.xml`, every indexable route, old redirect, and a nonexistent route. Check status, final URL, canonical, page-specific title/description, one H1, robots rules and no redirect loops.
- On the preview hostname: verify `noindex` or exact-path redirect to production. Do not accidentally mark production `noindex`.
- Inspect **both server-rendered HTML and JavaScript-rendered DOM** for treatment text, FAQ answers (where applicable), NAP and valid business JSON-LD. Validate structured data with Google's Rich Results Test; eligibility is not a promise of appearance.
- Check `/client-form` and all private/confirmation paths are omitted from sitemap and not publicly indexed. Test booking, call, email and form flows on mobile.
- Crawl the production sitemap and linked pages for broken internal URLs, 404 images, orphan canonical pages, query duplicates and unexpected meta robots. Verify image `srcset`/sizes/alt choices and that LCP images are not lazy-loaded; inspect the six nested link/button controls and the accordions with a keyboard.
- Run Lighthouse/PageSpeed on mobile and desktop for homepage plus at least Laser, Microneedling, Eyelash and the form. Record the date, tested URL, LCP, CLS, INP where field data exists, and the actual element/bottleneck. This audit's PSI API request returned HTTP 429; no score was measured here. Google's good user-experience thresholds are LCP ≤2.5 s, INP ≤200 ms and CLS ≤0.1 at the 75th percentile, but meeting them does not guarantee rankings.
- Submit the production sitemap in Search Console after the domain move; inspect indexation and old/new redirect coverage during the first weeks. Cross-check GBP website, hours, address, services and conversion links with Ashley.

## Sources used for the recommendation framework

- [Google Business Profile: local ranking and complete information](https://support.google.com/business/answer/7091?hl=en)
- [Whitespark: 2026 Local Search Ranking Factors expert survey](https://whitespark.ca/local-search-ranking-factors/)
- [Google Search Central: move a site with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [Google Search Central: build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google Search Central: canonicalization](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google Search Central: local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google Search Central: titles, snippets and people-first content](https://developers.google.com/search/docs/appearance/title-link)
- [Google Search Central: self-serving review markup](https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful)
- [Google Search Central: JavaScript SEO and lazy-loaded content](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google Search Central: image SEO and responsive image markup](https://developers.google.com/search/docs/appearance/google-images)
- [Google Search Central: Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Google Search Central: lazy-loading content should not require user interaction](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading)

Audit limitations: External search results were used to understand the old site's public URLs, but the page findings above were checked against fetched preview HTML and, for schema/canonicals/headings/loaded images, a real browser's rendered DOM. No access was provided to the new site's repository, GBP, Search Console, analytics, actual owner-verified hours, conversion data or backlink index. A 1363 px browser view is not mobile QA. The performance service returned a quota error, so no Lighthouse, field Web Vitals or speed score is reported. Site ranking cannot be inferred from markup alone.
