import type { Metadata } from "next";
import MicroneedlingPage from "@/components/MicroneedlingPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Microneedling Niagara Falls | eDermaStamp | Smooth Skin Niagara",
  description:
    "Professional eDermaStamp microneedling in Niagara Falls for the appearance of fine lines, acne scars, uneven texture and aging skin. Explore personalized treatment options at Smooth Skin Niagara.",
  path: "/edermastamp-microneedling",
});

export default function EdermastampMicroneedlingPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "eDermaStamp Microneedling",
          path: "/edermastamp-microneedling",
          description:
            "eDermaStamp microneedling treatments at Smooth Skin Niagara in Niagara Falls, Ontario.",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          {
            name: "Microneedling",
            path: "/edermastamp-microneedling",
          },
        ])}
      />
      <MicroneedlingPage />
    </>
  );
}
