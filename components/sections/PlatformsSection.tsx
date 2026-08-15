"use client";
import { Download, ExternalLink, Store } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

const PLATFORM_CONFIG = [
  { action: { type: "primary", icon: Download, key: "downloadApk" as const }, noteKey: "downloaderCode" as const },
  { action: { type: "secondary", icon: ExternalLink, key: "openSamsungStore" as const }, noteKey: null },
  { action: { type: "primary", icon: Download, key: "downloadExe" as const }, noteKey: null },
  { action: null, noteKey: "availableInStore" as const, noteIcon: Store },
];

const EMOJIS = ["📱", "📺", "💻", "🐋"];

export default function PlatformsSection() {
  const { t } = useLanguage();
  const p = t.platforms;

  return (
    <section id="platforms" className="bg-white py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{p.heading}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{p.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {p.items.map(({ title, description }, i) => {
            const cfg = PLATFORM_CONFIG[i];
            return (
              <div
                key={title}
                className="border border-gray-200 rounded-2xl p-6 hover:border-[#2563EB]/50 hover:shadow-lg transition-all duration-300 flex flex-col group cursor-default"
              >
                <div className="text-4xl mb-4">{EMOJIS[i]}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{description}</p>

                {cfg.action && (
                  <button
                    className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      cfg.action.type === "primary"
                        ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
                        : "border border-gray-200 hover:border-[#2563EB]/50 text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    <cfg.action.icon size={15} />
                    {p[cfg.action.key]}
                  </button>
                )}

                {cfg.noteKey && (
                  <div
                    className={`flex items-center justify-center gap-1.5 text-sm font-medium ${
                      cfg.action ? "mt-2 text-gray-400" : "text-[#2563EB]"
                    }`}
                  >
                    {!cfg.action && cfg.noteIcon && <cfg.noteIcon size={14} />}
                    {p[cfg.noteKey]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
