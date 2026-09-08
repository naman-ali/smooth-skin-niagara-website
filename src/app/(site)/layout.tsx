import { ReactNode } from "react";
import { ConditionalFooter } from "@/components/ConditionalFooter";
import { ConsultationProvider } from "@/components/ConsultationModal";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <ConsultationProvider>
      <div className="mx-auto w-full min-h-screen max-w-[1480px] bg-olive-50 shadow-lg">
        {children}
        <ConditionalFooter />
      </div>
    </ConsultationProvider>
  );
}
