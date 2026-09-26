import type { NextConfig } from "next";

/**
 * Legacy WordPress URL map for the domain switch from the old
 * smoothskinniagara.com site. Old trailing-slash paths normalize to the
 * slashless source first, then hit these permanent redirects.
 */
const LEGACY_REDIRECTS = [
  // Consolidated laser landing pages
  { source: "/laser-hair-removal-niagara", destination: "/laser-hair-removal" },
  { source: "/niagara-laser-hair-removal", destination: "/laser-hair-removal" },
  { source: "/soprano-ice-platinum-promo", destination: "/laser-hair-removal" },
  // Renamed treatment pages
  { source: "/edermastamp", destination: "/edermastamp-microneedling" },
  // Old utility routes without a dedicated equivalent
  { source: "/new-home-page", destination: "/" },
  { source: "/products", destination: "/" },
  { source: "/thank-you", destination: "/" },
  { source: "/thank-you-promo-240", destination: "/" },
  // Old dated WordPress blog URLs -> restored articles on the new /blog
  {
    source: "/2023/02/becoming-a-lash-tech",
    destination: "/blog/becoming-a-lash-tech",
  },
  {
    source: "/2023/03/how-long-do-lash-extensions-last",
    destination: "/blog/how-long-do-lash-extensions-last",
  },
  {
    source: "/2023/02/is-laser-hair-removal-worth-it",
    destination: "/blog/is-laser-hair-removal-worth-it",
  },
  {
    source: "/2023/03/does-laser-hair-removal-hurt",
    destination: "/blog/does-laser-hair-removal-hurt",
  },
  {
    source: "/2026/01/laser-hair-removal-in-niagara-falls",
    destination: "/blog/laser-hair-removal-in-niagara-falls",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return LEGACY_REDIRECTS.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
