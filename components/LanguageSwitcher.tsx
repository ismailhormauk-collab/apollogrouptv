"use client";

import { useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { Language } from "@/lib/i18n/translations";

const LANG_CODES: Language[] = ["en", "fr", "de", "es"];

const FLAG_LABELS: Record<Language, string> = {
  en: "EN",
  fr: "FR",
  de: "DE",
  es: "ES",
};

export default function LanguageSwitcher() {
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">

      {/* Language panel — slides up above the button */}
      <div
        className={`
          bg-[#0f0f0f]/95 backdrop-blur-xl border border-white/[0.12]
          rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.6)]
          overflow-hidden
          transition-all duration-300 ease-out origin-bottom-left
          ${open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-2 pointer-events-none"
          }
        `}
        aria-hidden={!open}
      >
        {/* Top accent */}
        <div className="h-[2px] bg-gradient-to-r from-[#2563EB]/80 via-[#2563EB]/40 to-transparent" />

        <div className="py-2">
          {LANG_CODES.map((code) => {
            const active = code === language;
            return (
              <button
                key={code}
                onClick={() => handleSelect(code)}
                className={`
                  w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium
                  transition-all duration-150
                  ${active
                    ? "text-white bg-[#2563EB]/15"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.06]"
                  }
                `}
              >
                {/* Language code badge */}
                <span
                  className={`
                    w-7 h-5 rounded text-[10px] font-black flex items-center justify-center flex-shrink-0
                    ${active ? "bg-[#2563EB] text-white" : "bg-white/[0.08] text-gray-500"}
                  `}
                >
                  {FLAG_LABELS[code]}
                </span>
                {t.langNames[code]}
                {active && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Trigger button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Select language"
        aria-expanded={open}
        className={`
          w-14 h-14 rounded-full flex items-center justify-center gap-1 flex-col
          shadow-lg border transition-all duration-200
          ${open
            ? "bg-[#1a1a1a] border-white/20 scale-95"
            : "bg-[#141414] border-white/[0.1] hover:bg-[#1e1e1e] hover:border-white/20 hover:scale-105 active:scale-95"
          }
        `}
      >
        <Globe
          size={18}
          className={`transition-colors duration-200 ${open ? "text-[#2563EB]" : "text-gray-400"}`}
        />
        <span
          className={`text-[9px] font-black tracking-wider leading-none transition-colors duration-200 ${
            open ? "text-[#2563EB]" : "text-gray-500"
          }`}
        >
          {FLAG_LABELS[language]}
        </span>
      </button>
    </div>
  );
}
