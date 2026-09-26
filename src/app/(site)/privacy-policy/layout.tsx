import { ReactNode } from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Smooth Skin Niagara",
  description:
    "How Smooth Skin Niagara in Niagara Falls collects, uses and protects your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
