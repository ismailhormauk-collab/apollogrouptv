"use client";
import { useState } from "react";
import { Check, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const POPULAR_INDEX = 3; // 12 Months

/**
 * Shared pricing grid — rendered on both the dedicated /pricing page and the
 * homepage pricing section, driven by the single t.pricing data source so
 * both stay in sync automatically. A device-count tab selector switches
 * between the four pricing tiers (1–4 devices); each tier shows the same
 * four duration cards (1/3/6/12 months).
 */
export default function PricingCards() {
  const { t } = useLanguage();
  const p = t.pricing;
  const [tierIndex, setTierIndex] = useState(0);
  const tier = p.deviceTiers[tierIndex];

  return (
    <div>
      {/* Device count selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 sm:mb-12">
        {p.deviceTiers.map((t2, i) => {
          const active = i === tierIndex;
          const isSavings = t2.id !== "1";
          return (
            <button
              key={t2.id}
              type="button"
              onClick={() => setTierIndex(i)}
              aria-pressed={active}
              className={`rounded-xl border px-3 py-3 sm:py-4 text-center transition-all duration-200 ${
                active
                  ? "bg-[#2563EB] border-[#2563EB] shadow-[0_4px_24px_rgba(37,99,235,0.35)]"
                  : "bg-[#0f0f0f]/80 border-white/[0.08] hover:border-white/25"
              }`}
            >
              <span className={`block font-bold text-sm sm:text-base ${active ? "text-white" : "text-gray-200"}`}>
                {t2.label}
              </span>
              <span
                className={`block text-[11px] sm:text-xs font-semibold uppercase tracking-wide mt-1 ${
                  active ? "text-blue-100" : isSavings ? "text-emerald-400" : "text-gray-500"
                }`}
              >
                {t2.descriptor}
              </span>
            </button>
          );
        })}
      </div>

      {/* Duration cards for the selected device tier */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-start">
        {tier.plans.map((plan, i) => {
          const popular = i === POPULAR_INDEX;
          return (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 ${
                popular
                  ? "bg-[#0f172a] border-2 border-[#2563EB] shadow-[0_8px_48px_rgba(37,99,235,0.25)] lg:-translate-y-3"
                  : "bg-[#0f0f0f]/80 border border-white/[0.08] hover:border-white/20"
              }`}
            >
              {popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-[#2563EB] text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full whitespace-nowrap">
                  <Star size={11} className="fill-white" />
                  {p.popularLabel}
                </span>
              )}

              <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.15em] mb-4">
                {plan.name}
              </p>

              <div className="flex items-end gap-1.5 mb-1">
                <span className="text-4xl sm:text-5xl font-black text-white leading-none">{plan.price}</span>
              </div>
              <p className="text-gray-500 text-sm mb-1">{plan.period}</p>
              <p className="text-gray-600 text-xs mb-6">{plan.perMonth}</p>

              <div className="h-px bg-white/[0.06] mb-6" />

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {p.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-gray-300 text-sm">
                    <Check size={16} className="text-[#2563EB] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold uppercase tracking-[0.1em] transition-all duration-200 ${
                  popular
                    ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-[0_4px_24px_rgba(37,99,235,0.35)]"
                    : "border border-white/15 hover:border-[#2563EB]/60 hover:bg-[#2563EB]/10 text-white"
                }`}
              >
                {p.ctaBtn}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
