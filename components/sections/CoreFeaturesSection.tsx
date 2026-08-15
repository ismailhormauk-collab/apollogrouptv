"use client";
import { LayoutGrid, Tv, Zap, MonitorPlay } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

const ICONS = [LayoutGrid, Tv, Zap, MonitorPlay];

export default function CoreFeaturesSection() {
  const { t } = useLanguage();
  const c = t.coreFeatures;

  return (
    <section id="features" className="bg-gray-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{c.heading}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{c.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {c.features.map(({ title, desc }, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-default border border-transparent hover:border-[#2563EB]/20"
              >
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2563EB]/20 transition-colors duration-300">
                  <Icon className="text-[#2563EB]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
