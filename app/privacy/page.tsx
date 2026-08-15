import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Apollo Group TV collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Apollo Group TV",
    description: "How Apollo Group TV collects, uses, and protects your personal information.",
    url: "/privacy",
  },
};

export default function Page() {
  return <PolicyPage pageKey="privacy" />;
}
