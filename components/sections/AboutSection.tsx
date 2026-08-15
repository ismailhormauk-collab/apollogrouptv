"use client";
import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export default function AboutSection() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="bg-[#0a0a0a] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 hover:border-white/20 transition-colors duration-300">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 sm:mb-6">{a.heading}</h2>
            <p className="text-gray-400 leading-relaxed mb-5">{a.body1}</p>
            <p className="text-gray-400 leading-relaxed">{a.body2}</p>
          </div>

          {/* Right card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 hover:border-[#2563EB]/20 transition-colors duration-300">
            <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="text-[#2563EB]" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{a.disclaimerHeading}</h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">{a.disclaimerP1}</p>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">{a.disclaimerP2}</p>
            <p className="text-gray-400 leading-relaxed text-sm">{a.disclaimerP3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
