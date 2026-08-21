import type { Metadata } from "next";
import { ClientForm } from "@/components/client-form/ClientForm";

export const metadata: Metadata = {
  title: "Client Intake Form | Smooth Skin Niagara",
  description: "Complete your client intake and consent form before your visit.",
};

export default function ClientFormPage() {
  return (
    <main className="min-h-screen bg-background">
      <ClientForm />
    </main>
  );
}
