import { ReactNode } from "react";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  pageMetadata,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Celluma LED Light Therapy in Niagara Falls | Smooth Skin Niagara",
  description:
    "Explore Celluma LED light therapy in Niagara Falls for skin-focused sessions. View 15, 20 and 30 minute options and book a consultation.",
  path: "/celluma-led-light-therapy",
});

export default function CellumaLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Celluma LED Light Therapy",
          path: "/celluma-led-light-therapy",
          description:
            "Celluma LED light therapy sessions at Smooth Skin Niagara in Niagara Falls, Ontario.",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          {
            name: "Celluma LED Light Therapy",
            path: "/celluma-led-light-therapy",
          },
        ])}
      />
      {children}
    </>
  );
}
