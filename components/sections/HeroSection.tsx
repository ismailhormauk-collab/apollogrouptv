"use client";
import { Tag, MessageCircle } from "lucide-react";
import { POSTER_GRADIENTS } from "@/lib/poster-gradients";
import { useLanguage } from "@/lib/i18n/context";

export default function HeroSection() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="grid grid-cols-6 md:grid-cols-9 gap-0.5 h-full opacity-25 blur-[2px] scale-110">
          {[...Array(54)].map((_, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${POSTER_GRADIENTS[i % POSTER_GRADIENTS.length]}`}
              style={{ aspectRatio: "2/3" }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/85 via-[#0a0a0a]/70 to-[#0a0a0a]/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB] text-sm font-medium px-4 py-1.5 rounded-full mb-6 sm:mb-8">
              <span className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse" />
              {h.badge}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5 sm:mb-6">
              {h.heading1}
              <br />
              <span className="text-[#2563EB]">{h.heading2.split(" ")[0]}</span>{" "}
              {h.heading2.split(" ").slice(1).join(" ")}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              {h.body}
            </p>
          </div>

          {/* Right: floating glass card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
            <div className="inline-flex items-center gap-1.5 bg-[#2563EB] text-white text-xs font-black px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              {h.cardBadge}
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
              {h.cardHeading}
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {h.cardBody}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/pricing"
                className="flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
              >
                <Tag size={18} />
                {h.btn1}
              </a>
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
              >
                <MessageCircle size={18} />
                {h.btn2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
