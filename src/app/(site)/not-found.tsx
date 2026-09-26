import type { Metadata } from "next";
import { NotFoundPage } from "@/components/NotFoundPage";

export const metadata: Metadata = {
  title: "Page Not Found | Smooth Skin Niagara",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundPage />;
}
