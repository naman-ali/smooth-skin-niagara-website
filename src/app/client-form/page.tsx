import type { Metadata } from "next";
import { ClientFormShell } from "@/components/client-form/ClientFormShell";

export const metadata: Metadata = {
  title: "Client Intake Form | Smooth Skin Niagara",
  description:
    "Complete your client intake and consent form before your visit.",
};

export default function ClientFormPage() {
  return (
    <main className="client-form-theme min-h-screen bg-background">
      <ClientFormShell />
    </main>
  );
}
