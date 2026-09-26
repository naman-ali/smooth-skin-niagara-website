import { ReactNode } from "react";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  pageMetadata,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Laser Hair Removal in Niagara Falls | Smooth Skin Niagara",
  description:
    "Explore Soprano ICE Platinum laser hair removal at Smooth Skin Niagara in Niagara Falls. See treatment areas, what to expect and consultation options.",
  path: "/laser-hair-removal",
});

export default function LaserHairRemovalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Laser Hair Removal",
          path: "/laser-hair-removal",
          description:
            "Soprano ICE Platinum laser hair removal treatments at Smooth Skin Niagara in Niagara Falls, Ontario.",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Laser Hair Removal", path: "/laser-hair-removal" },
        ])}
      />
      {children}
    </>
  );
}
