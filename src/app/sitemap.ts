import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const PUBLIC_ROUTES = [
  "/",
  "/about-us",
  "/contact",
  "/testimonials",
  "/laser-hair-removal",
  "/edermastamp-microneedling",
  "/cosmetic-grade-pca-skin-peels",
  "/celluma-led-light-therapy",
  "/oxygeneo-3-1-super-facial",
  "/eyelash-extensions",
  "/readymedical",
  "/exosome-therapy",
  "/after-cares",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PUBLIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/contact" ? 0.7 : 0.8,
  }));
}
