import { ReactNode } from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Treatment After-Care Instructions | Smooth Skin Niagara",
  description:
    "After-care instructions for laser hair removal, lash extensions, lash lift, PCA peels, microneedling, Celluma and OxyGeneo treatments at Smooth Skin Niagara in Niagara Falls.",
  path: "/after-cares",
});

export default function AfterCaresLayout({ children }: { children: ReactNode }) {
  return children;
}
