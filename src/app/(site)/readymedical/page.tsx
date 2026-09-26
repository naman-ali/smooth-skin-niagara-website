import type { Metadata } from "next";
import ReadyMedicalPage from "@/components/ReadyMedicalPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "ReadyMedical Healing Solutions Niagara Falls | Smooth Skin Niagara",
  description:
    "Discover ReadyMedical at Smooth Skin Niagara. Ready-to-mix sterile healing solutions designed to support and enhance microneedling, laser, RF and aesthetic treatments in Niagara Falls.",
  path: "/readymedical",
  keywords: [
    "ReadyMedical Niagara Falls",
    "sterile healing solutions",
    "microneedling aftercare",
    "laser treatment healing",
    "hyaluronic acid skin healing",
    "growth factors skin",
  ],
});

export default function ReadyMedical() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "ReadyMedical", path: "/readymedical" },
        ])}
      />
      <ReadyMedicalPage />
    </>
  );
}
