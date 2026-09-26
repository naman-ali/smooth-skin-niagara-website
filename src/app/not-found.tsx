import type { Metadata } from "next";
import { ConditionalFooter } from "@/components/ConditionalFooter";
import { ConsultationProvider } from "@/components/ConsultationModal";
import { NotFoundPage } from "@/components/NotFoundPage";

export const metadata: Metadata = {
  title: "Page Not Found | Smooth Skin Niagara",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <ConsultationProvider>
      <div className="mx-auto w-full min-h-screen max-w-[1480px] bg-olive-50 shadow-lg">
        <NotFoundPage />
        <ConditionalFooter />
      </div>
    </ConsultationProvider>
  );
}
