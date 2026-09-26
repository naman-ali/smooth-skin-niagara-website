import type { Metadata } from "next";
import PcaPeelsPage from "@/components/PcaPeelsPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "PCA Skin Chemical Peels Niagara Falls | Smooth Skin Niagara",
  description:
    "Professional PCA SKIN chemical peels in Niagara Falls, personalized for concerns such as uneven texture, dullness, breakouts and visible signs of aging. Explore treatment options and pricing.",
  path: "/cosmetic-grade-pca-skin-peels",
});

export default function CosmeticGradePcaSkinPeelsPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "PCA SKIN Chemical Peels",
          path: "/cosmetic-grade-pca-skin-peels",
          description:
            "PCA SKIN chemical peel treatments at Smooth Skin Niagara in Niagara Falls, Ontario.",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          {
            name: "PCA SKIN Peels",
            path: "/cosmetic-grade-pca-skin-peels",
          },
        ])}
      />
      <PcaPeelsPage />
    </>
  );
}
