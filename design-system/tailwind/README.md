# Tailwind Design System — Smooth Skin Niagara

For building pages with plain Tailwind CSS (outside the React component system in `components/`).

- `tailwind.config.js` — theme tokens (colors, fonts, radii, shadows) mirroring `tokens/*.css`. Load via `<script src="https://cdn.tailwindcss.com"></script>` then `<script src="./tailwind.config.js"></script>` + `<script>tailwind.config = SSN_TAILWIND_CONFIG;</script>`, or drop into a real build's `tailwind.config.js` as `module.exports`.
- `hero.html` — the homepage header + hero + trust strip built entirely in Tailwind utility classes, using this config. Reference for spacing/color/type patterns when building further pages (services, pricing, about, etc.) in Tailwind.

Colors: `bg-linen`, `bg-warm-white`, `bg-stone`, `olive-300/500/600/700`, `ink-900/600`. Fonts: `font-display` (Cormorant Garamond), `font-body` (Manrope). Buttons/cards always get `whitespace-nowrap`/`shrink-0` where in a flex row — labels must never wrap.
