"use client";
import PosterBackground from "@/components/PosterBackground";
import PricingCards from "@/components/PricingCards";
import { useLanguage } from "@/lib/i18n/context";

export default function PricingPage() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PosterBackground opacity="opacity-[0.16]" />

      {/* ── Hero ── */}
      <section className="relative z-10 pt-24 sm:pt-36 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5 sm:gap-6">
          <div
            className="pointer-events-none absolute left-1/2 top-32 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)" }}
            aria-hidden
          />
          <div className="inline-flex items-center gap-2 border border-[#2563EB]/60 text-[#2563EB] text-[11px] font-bold px-4 py-1.5 rounded-full tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            {p.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
            {p.heading1}
            <br />
            <span className="text-[#2563EB]">{p.heading2}</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl">{p.subtitle}</p>
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="relative z-10 pb-10 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCards />

          <p className="text-center text-gray-600 text-xs sm:text-sm mt-10 sm:mt-14 max-w-xl mx-auto leading-relaxed">
            {p.note}
          </p>
        </div>
      </section>
    </div>
  );
}
