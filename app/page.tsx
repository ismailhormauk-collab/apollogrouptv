import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/Footer";

// Above-the-fold sections load immediately.
// Everything below is dynamically imported so Next.js splits them into
// separate chunks — they are fetched only when the browser is ready.
const AppPreviewSection  = dynamic(() => import("@/components/sections/AppPreviewSection"));
const CoreFeaturesSection = dynamic(() => import("@/components/sections/CoreFeaturesSection"));
const HowItWorksSection  = dynamic(() => import("@/components/sections/HowItWorksSection"));
const AboutSection       = dynamic(() => import("@/components/sections/AboutSection"));
const PlatformsSection   = dynamic(() => import("@/components/sections/PlatformsSection"));
const PricingSection     = dynamic(() => import("@/components/sections/PricingSection"));
const FaqSection         = dynamic(() => import("@/components/sections/FaqSection"));

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AppPreviewSection />
      <CoreFeaturesSection />
      <PricingSection />
      <HowItWorksSection />
      <AboutSection />
      <PlatformsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
