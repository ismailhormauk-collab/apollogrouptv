import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import FloatingButtons from "@/components/FloatingButtons";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { LanguageProvider } from "@/lib/i18n/context";

const SITE_URL = "https://apollogrouptv.com";
const SITE_NAME = "Apollo Group TV";
const DESCRIPTION =
  "Apollo Group TV is a smart streaming media player. Enjoy seamless 4K playback on Android TV, Fire Stick, Samsung, LG, and more.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Apollo Group TV — Smart Streaming Media Player",
    template: "%s | Apollo Group TV",
  },
  description: DESCRIPTION,
  keywords: [
    "Apollo Group TV",
    "Apollo Group TV Player",
    "Apollo Group TV App",
    "Apollo Group TV installation",
    "Apollo Group TV setup",
    "Apollo Group TV guide",
    "Apollo Group TV features",
    "Apollo Group TV pricing",
    "IPTV player",
    "smart TV streaming app",
  ],
  authors: [{ name: "Apollo Group TV" }],
  creator: "Apollo Group TV",
  publisher: "Apollo Group TV",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Apollo Group TV — Smart Streaming Media Player",
    description: DESCRIPTION,
    locale: "en_US",
    alternateLocale: ["fr_FR", "de_DE", "es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apollo Group TV — Smart Streaming Media Player",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Apollo Group TV",
      url: SITE_URL,
      logo: `${SITE_URL}/icon`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "contact@apollogroutv.com",
        availableLanguage: ["English", "French", "German", "Spanish"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Apollo Group TV",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: ["en", "fr", "de", "es"],
    },
    {
      "@type": "SoftwareApplication",
      name: "Apollo Group TV Player",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Android, Amazon Fire OS, Tizen, Windows",
      description: DESCRIPTION,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "0",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <SiteHeader />
          {children}
          <FloatingButtons />
          <LanguageSwitcher />
        </LanguageProvider>
      </body>
    </html>
  );
}
