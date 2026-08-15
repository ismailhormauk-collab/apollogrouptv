"use client";
import { UserPlus, ListPlus, KeyRound, PlayCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

const STEP_ICONS = [UserPlus, ListPlus, KeyRound, PlayCircle];
const STEP_NUMS = ["01", "02", "03", "04"];

export default function HowItWorksSection() {
  const { t } = useLanguage();
  const h = t.howItWorks;

  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{h.heading}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{h.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {h.steps.map(({ title, desc }, i) => {
            const Icon = STEP_ICONS[i];
            const num = STEP_NUMS[i];
            return (
              <div
                key={num}
                className="bg-gray-50 rounded-2xl p-6 relative hover:shadow-md transition-all duration-300 group border border-gray-100 hover:border-[#2563EB]/30 cursor-default"
              >
                <span className="absolute top-4 right-4 text-4xl font-black text-gray-100 group-hover:text-[#2563EB]/15 transition-colors duration-300 select-none">
                  {num}
                </span>
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2563EB]/20 transition-colors duration-300">
                  <Icon className="text-[#2563EB]" size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
