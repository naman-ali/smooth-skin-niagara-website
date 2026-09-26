import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import "../styles/design-system/styles.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Laser & Skin Treatments in Niagara Falls`,
  description:
    "Discover laser hair removal, microneedling, facials, chemical peels, LED therapy and lashes at Smooth Skin Niagara in Niagara Falls. Book a consultation.",
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_CA",
    type: "website",
    images: [`${SITE_URL}${OG_IMAGE_PATH}`],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn("antialiased", "font-sans", inter.variable)}>
      <body className="min-h-screen bg-olive-700 text-ink-900 font-body">
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
