"use client";
import { Check, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const POPULAR_INDEX = 3; // 12 Months

/**
 * Shared pricing grid — rendered on both the dedicated /pricing page and the
 * homepage pricing section, driven by the single t.pricing data source so
 * both stay in sync automatically.
 */
export default function PricingCards() {
  const { t } = useLanguage();
  const p = t.pricing;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-start">
      {p.plans.map((plan, i) => {
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
  );
}
