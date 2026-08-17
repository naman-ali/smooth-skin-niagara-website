import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smooth Skin Niagara",
  description:
    "Premium laser hair removal and advanced skincare in Niagara Falls.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-olive-700 text-ink-900 font-body">
        <div className="mx-auto w-full min-h-screen max-w-[1480px] bg-olive-50 shadow-lg">
          {children}
        </div>
      </body>
    </html>
  );
}
