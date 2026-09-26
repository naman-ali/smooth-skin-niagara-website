import { ReactNode } from "react";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  pageMetadata,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Eyelash Extensions & Lash Lift in Niagara Falls | Smooth Skin Niagara",
  description:
    "Classic, Hybrid and Volume eyelash extensions plus Lash Lift & Tint at Smooth Skin Niagara in Niagara Falls. See options, pricing and book a consultation.",
  path: "/eyelash-extensions",
});

export default function EyelashLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Eyelash Extensions & Lash Lift",
          path: "/eyelash-extensions",
          description:
            "Eyelash extensions and lash lift & tint services at Smooth Skin Niagara in Niagara Falls, Ontario.",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Eyelash Extensions", path: "/eyelash-extensions" },
        ])}
      />
      {children}
    </>
  );
}
