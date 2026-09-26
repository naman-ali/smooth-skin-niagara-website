import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/BlogIndexPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog | Smooth Skin Niagara — Niagara Falls",
  description:
    "Treatment tips and honest answers about laser hair removal, eyelash extensions and skin treatments from Smooth Skin Niagara in Niagara Falls.",
  path: "/blog",
});

export default function Blog() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <BlogIndexPage />
    </>
  );
}
