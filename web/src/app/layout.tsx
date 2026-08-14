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
      <body className="min-h-screen bg-olive-50 text-ink-900 font-body">
        {children}
      </body>
    </html>
  );
}
