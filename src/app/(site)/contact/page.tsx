import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Smooth Skin Niagara | Niagara Falls",
  description:
    "Contact Smooth Skin Niagara in Niagara Falls — call, text or email to book laser hair removal, facials, lashes and skin treatments at 5985 Ernest Crescent.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactPage />
    </>
  );
}
