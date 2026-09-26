import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Smooth Skin Niagara | Laser & Skin Treatments in Niagara Falls",
  description:
    "Discover laser hair removal, microneedling, facials, chemical peels, LED therapy and lashes at Smooth Skin Niagara in Niagara Falls. Book a consultation.",
  path: "/",
});

export default function Home() {
  return <HomePage />;
}
