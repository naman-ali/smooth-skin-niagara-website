import type { Metadata } from "next";
import TreatmentsPage from "@/components/TreatmentsPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Treatments & Services Menu | Smooth Skin Niagara, Niagara Falls",
  description:
    "Browse the full menu of treatments at Smooth Skin Niagara in Niagara Falls: laser hair removal, microneedling, LED light therapy, OxyGeneo facials, eyelash extensions, exosome therapy and more.",
  path: "/treatments",
  keywords: [
    "treatments Niagara Falls",
    "services menu Smooth Skin Niagara",
    "laser hair removal Niagara Falls",
    "microneedling Niagara Falls",
    "facials Niagara Falls",
    "eyelash extensions Niagara Falls",
    "LED light therapy Niagara Falls",
    "exosome therapy Niagara Falls",
  ],
});

const services = [
  { name: "Laser Hair Removal", path: "/laser-hair-removal" },
  { name: "Microneedling CIT", path: "/edermastamp-microneedling" },
  { name: "Celluma LED Light Therapy", path: "/celluma-led-light-therapy" },
  { name: "Exosome Therapy", path: "/exosome-therapy" },
  { name: "ReadyMedical Healing Solutions", path: "/readymedical" },
  { name: "OxyGeneo 3-in-1 Super Facial", path: "/oxygeneo-3-1-super-facial" },
  { name: "Eyelash Extensions", path: "/eyelash-extensions" },
];

const servicesMenuJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Treatments & Services at Smooth Skin Niagara",
  url: `${SITE_URL}/treatments`,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.name,
      url: `${SITE_URL}${service.path}`,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: {
        "@type": "City",
        name: "Niagara Falls",
      },
    },
  })),
};

export default function Treatments() {
  return (
    <>
      <JsonLd data={servicesMenuJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Treatments", path: "/treatments" },
        ])}
      />
      <TreatmentsPage />
    </>
  );
}
