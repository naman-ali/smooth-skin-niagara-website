import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/seo";

const PUBLIC_ROUTES = [
  "/",
  "/about-us",
  "/contact",
  "/testimonials",
  "/blog",
  "/treatments",
  "/laser-hair-removal",
  "/edermastamp-microneedling",
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
  return [
    ...PUBLIC_ROUTES.map((path) => ({
      url: `${SITE_URL}${path === "/" ? "/" : path}`,
      lastModified,
      changeFrequency:
        path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path === "/contact" ? 0.7 : 0.8,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
