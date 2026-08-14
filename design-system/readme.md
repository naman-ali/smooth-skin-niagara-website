# Smooth Skin Niagara — Design System

## Company

Smooth Skin Niagara is a premium laser hair removal and advanced skincare studio in Niagara Falls, Ontario. Primary service: laser hair removal. Additional services: microneedling, chemical peels, OxyGeneo facials, RF skin tightening, LED therapy, lash services.

Brand feel: confident, expert, comfortable, personalized, results-driven. Visual direction: editorial luxury × modern wellness. Gender-neutral — no pink/blue/purple/gold as primary colors. Premium because of typography, spacing and restraint, not decoration.

**Sources provided:** brand brief (pasted), `smooth-skin-niagara-logo-1.png`, `hero-background.png` (treatment photography), `hero-section-design.png` (a full reference mockup of the homepage header + hero — used as ground truth for the homepage UI kit). No codebase or Figma file was attached; components below are an original set sized to the brief.

## Index

- `styles.css` — root stylesheet, imports all tokens
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` — design tokens
- `assets/` — logo, treatment photography, reference mockup
- `components/core/` — Button, Badge, Card, Input, Select, IconCircle
- `components/navigation/` — NavDropdown, PhoneCallout
- `components/trust/` — GoogleReviews, TrustStrip, StatItem, TestimonialQuote
- `ui_kits/website/` — homepage recreation (header, hero, trust strip) as React DC components
- `tailwind/` — plain-Tailwind version of the same tokens + a Tailwind-only hero build, for pages built outside the React component system
- `guidelines/` — foundation specimen cards
- `SKILL.md` — Claude Code–compatible skill packaging

## Content Fundamentals

- **Voice:** confident, warm, editorial. Speaks directly to the client with "you/your," never clinical jargon. Short declarative sentences for headlines; softer, reassuring sentences for support copy.
- **Casing:** headlines are sentence case ("Confident Skin. Every Day."), never all-caps except tiny eyebrow labels (e.g. "LASER HAIR REMOVAL"), which use wide letter-spacing.
- **Eyebrows:** always a short 2–3 word category label above a headline, uppercase, wide-tracked, olive or charcoal.
- **Headlines:** large serif (Cormorant Garamond), 2 short lines max, often ending in a period for editorial weight ("Confident Skin. Every Day.").
- **Body copy:** 1–2 sentences, plain and specific — states the mechanism ("advanced laser technology") plus the outcome ("long-lasting results"). No superlative stacking ("best," "amazing," "incredible").
- **CTAs:** verb-first and specific — "Book Your Free Consultation," "View Results" — never generic ("Learn More," "Click Here").
- **Trust proof:** real numbers only (Google rating, review count, "Proudly serving Niagara Falls"). No emoji anywhere.
- **Feature labels:** 2–4 word title + one supporting line, e.g. "Safe & Effective — Advanced technology for all skin types."

## Visual Foundations

- **Color:** warm neutral base (Linen `#F5F2EB`, Warm White `#FBFAF7`, Soft Stone `#D9D5C8`) carries ~90% of every screen. Olive (`#667052` primary, `#4F5B3A` deep) is the only accent — reserved for CTAs, links, icon strokes, and small emphasis marks. No gradients, no secondary hue.
- **Type:** Cormorant Garamond for all display/headline moments (large, often 56–80px, tight leading ~1.05). Manrope for everything functional — nav, body, buttons, labels — set comfortably at 15–18px with normal leading (1.5–1.7). The pairing itself (thin editorial serif + clean grotesque sans) is the core brand signature.
- **Backgrounds:** flat warm-neutral fields, not textures or patterns. Full-bleed photography is used only in heroes, with soft botanical leaf-shadows overlaid to blend the photo edge into the linen page (no hard rectangular image boundary).
- **Imagery:** real photography only — smooth skin, laser handpieces, treatment moments, natural warm lighting. Subject positioned right, gazing left toward the copy. Never illustrated, never AI clinic interiors.
- **Animation:** subtle only — 150–220ms ease-standard (`cubic-bezier(0.4,0,0.2,1)`) fades/opacity and small translateY on entrance. No bounce, no spring, no scale pop.
- **Hover states:** primary button darkens toward deep olive; secondary (outlined) button fills with a faint olive tint background; links underline or shift to deep olive. No lightening on hover.
- **Press/active states:** slight opacity dip (~0.9), no shrink/scale.
- **Borders:** hairline (1px), `--olive-300` on light surfaces — used generously in place of shadow to separate cards, dropdowns, and inputs.
- **Shadows:** extremely subtle only (`--shadow-sm`/`--shadow-md`, 4–8% black) — never used to fake depth or "float" a card; borders do most of the separation work.
- **Radii:** 8–16px throughout (buttons 12–14px, cards 12–16px, small tags/badges are the only pill shapes). Never fully square, never bubble-rounded.
- **Cards/surfaces:** warm-white or linen fill, 1px `--olive-300` border, `--radius-md`/`--radius-lg` corners, `--shadow-sm` at most. No glassmorphism, no colored left-border accent strips.
- **Layout:** desktop content max-width ~1480px; generous but purposeful whitespace; open editorial sections rather than boxed panels; occasional asymmetry (e.g. text-left/image-right hero).
- **Transparency/blur:** none as a default treatment — reserved only for glasses/goggles in photography, not UI chrome.
- **Motif:** the logo's organic brushstroke circle recurs subtly as circular icon containers (thin olive stroke, not filled) and rounded corners — never repeated as decorative brushstrokes elsewhere.

## Iconography

No icon codebase or icon font was provided. The reference hero mockup shows simple thin-line outline icons (pin, shield-check, leaf, person, sparkle) in olive/charcoal, plus the real Google "G" logomark and filled yellow star ratings. We use **Lucide** (CDN, `stroke-width:1.5`, 1.5–1.75px equivalent) as the closest open equivalent to that thin-line style — flagged here as a substitution since no source icon set exists. Do not use emoji. Unicode glyphs are never used as icons. The Google "G" mark and star glyphs in the trust component should stay literal (real colors), never re-colored to brand olive.

## Fonts

Cormorant Garamond and Manrope are loaded live from Google Fonts (`tokens/typography.css`) — both are the exact brief-specified families, no substitution needed.
