import type { Metadata } from "next";
import PricingPage from "@/components/PricingPage";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent Apollo Group TV pricing. Choose 1, 3, 6, or 12 months — every plan includes full access to live TV, movies, series, and 24/7 support.",
  keywords: ["Apollo Group TV pricing", "Apollo Group TV plans", "Apollo Group TV cost"],
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Apollo Group TV",
    description:
      "Simple, transparent Apollo Group TV pricing. Choose 1, 3, 6, or 12 months — every plan includes full access to live TV, movies, series, and 24/7 support.",
    url: "/pricing",
  },
};

export default function Page() {
  return <PricingPage />;
}
