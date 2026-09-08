import { ReactNode } from "react";
import Footer from "@/components/Footer";
import { ConsultationProvider } from "@/components/ConsultationModal";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <ConsultationProvider>
      <div className="mx-auto w-full min-h-screen max-w-[1480px] bg-olive-50 shadow-lg">
        {children}
        <Footer />
      </div>
    </ConsultationProvider>
  );
}
