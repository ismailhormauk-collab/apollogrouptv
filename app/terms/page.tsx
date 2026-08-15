import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing your use of Apollo Group TV.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | Apollo Group TV",
    description: "The terms and conditions governing your use of Apollo Group TV.",
    url: "/terms",
  },
};

export default function Page() {
  return <PolicyPage pageKey="terms" />;
}
