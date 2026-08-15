import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Support",
  description:
    "Get in touch with the Apollo Group TV support team via WhatsApp or email. Fast, 24/7 help with activation, playlists, and setup.",
  keywords: ["Apollo Group TV contact", "Apollo Group TV support", "Apollo Group TV help"],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Support | Apollo Group TV",
    description:
      "Get in touch with the Apollo Group TV support team via WhatsApp or email. Fast, 24/7 help with activation, playlists, and setup.",
    url: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
