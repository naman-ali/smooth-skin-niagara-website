import type { Metadata } from "next";
import OxyGeneoPage from "@/components/OxyGeneoPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "OxyGeneo Facial Niagara Falls | 3-in-1 Super Facial | Smooth Skin Niagara",
  description:
    "Experience the OxyGeneo 3-in-1 Super Facial in Niagara Falls. Exfoliate, oxygenate and infuse your skin with personalized treatment options for smoother, hydrated and radiant-looking skin.",
  path: "/oxygeneo-3-1-super-facial",
});

export default function OxygeneoSuperFacialPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "OxyGeneo 3-in-1 Super Facial",
          path: "/oxygeneo-3-1-super-facial",
          description:
            "OxyGeneo 3-in-1 Super Facial treatments at Smooth Skin Niagara in Niagara Falls, Ontario.",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          {
            name: "OxyGeneo 3-in-1 Super Facial",
            path: "/oxygeneo-3-1-super-facial",
          },
        ])}
      />
      <OxyGeneoPage />
    </>
  );
}
