"use client";
import PricingCards from "@/components/PricingCards";
import { useLanguage } from "@/lib/i18n/context";

export default function PricingSection() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <section id="pricing" className="relative bg-[#0a0a0a] py-16 sm:py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB] text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse" />
            {p.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {p.heading1} <span className="text-[#2563EB]">{p.heading2}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">{p.subtitle}</p>
        </div>

        <PricingCards />

        <p className="text-center text-gray-600 text-xs sm:text-sm mt-10 sm:mt-14 max-w-xl mx-auto leading-relaxed">
          {p.note}
        </p>
      </div>
    </section>
  );
}
