import type { Metadata } from "next";
import { TestimonialsPage } from "@/components/TestimonialsPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Client Reviews | Smooth Skin Niagara in Niagara Falls",
  description:
    "Read real client reviews for laser hair removal, lashes, microneedling, facials and skin treatments at Smooth Skin Niagara in Niagara Falls.",
  path: "/testimonials",
});

export default function Testimonials() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/testimonials" },
        ])}
      />
      <TestimonialsPage />
    </>
  );
}
