import type { Metadata } from "next";
import FaqPage from "@/components/FaqPage";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common Apollo Group TV questions — activation, supported devices, playlists, and how to get help from our team.",
  keywords: ["Apollo Group TV FAQ", "Apollo Group TV guide", "Apollo Group TV setup"],
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Apollo Group TV",
    description:
      "Answers to common Apollo Group TV questions — activation, supported devices, playlists, and how to get help from our team.",
    url: "/faq",
  },
};

export default function Page() {
  return <FaqPage />;
}
