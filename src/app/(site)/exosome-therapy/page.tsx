import type { Metadata } from "next";
import ExosomeTherapyPage from "@/components/ExosomeTherapyPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Exosome Therapy Niagara Falls | My Skin Chemistry | Smooth Skin Niagara",
  description:
    "Discover exosome therapy at Smooth Skin Niagara. Advanced topical exosome serums that support skin renewal, hydration and radiance after microneedling, laser and other aesthetic treatments.",
  path: "/exosome-therapy",
  keywords: [
    "exosome therapy Niagara Falls",
    "exosome facial",
    "exosome serum",
    "exosome aftercare",
    "microneedling exosomes",
    "laser exosome treatment",
    "My Skin Chemistry exosomes",
  ],
});

export default function ExosomeTherapy() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Exosome Therapy",
          path: "/exosome-therapy",
          description:
            "Topical exosome therapy at Smooth Skin Niagara in Niagara Falls, Ontario.",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Exosome Therapy", path: "/exosome-therapy" },
        ])}
      />
      <ExosomeTherapyPage />
    </>
  );
}
