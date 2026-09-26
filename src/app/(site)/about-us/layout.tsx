import { ReactNode } from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Meet Ashley | Smooth Skin Niagara in Niagara Falls",
  description:
    "Meet Ashley, founder of Smooth Skin Niagara in Niagara Falls — 10+ years of experience and certified training in laser hair removal, lashes, microneedling and skincare.",
  path: "/about-us",
});

export default function AboutUsLayout({ children }: { children: ReactNode }) {
  return children;
}
