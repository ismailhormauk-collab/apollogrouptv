"use client";
import Link from "next/link";
import PosterBackground from "@/components/PosterBackground";
import { useLanguage } from "@/lib/i18n/context";

interface Props {
  pageKey: "privacy" | "terms";
}

export default function PolicyPage({ pageKey }: Props) {
  const { t } = useLanguage();
  const p = t[pageKey];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PosterBackground count={80} opacity="opacity-[0.18]" cols="grid-cols-6 sm:grid-cols-8 md:grid-cols-10" />

      {/* Hero */}
      <section className="relative z-10 pt-24 sm:pt-36 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5">
          <div className="inline-flex items-center gap-2 border border-[#2563EB]/60 text-[#2563EB] text-[11px] font-bold px-4 py-1.5 rounded-full tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            {p.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            {p.title}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">{p.subtitle}</p>
          <p className="text-gray-600 text-xs">Last updated: {p.updated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 pb-16 sm:pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
            <div className="h-[3px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />
            <div className="p-6 sm:p-8 md:p-12 flex flex-col gap-8 sm:gap-10">
              {p.sections.map(({ heading, body }) => (
                <div key={heading}>
                  <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-[#2563EB] rounded-full flex-shrink-0" />
                    {heading}
                  </h2>
                  <div className="flex flex-col gap-3 pl-3">
                    {body.map((para, i) => (
                      <p key={i} className="text-gray-400 text-sm leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Footer note */}
              <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-gray-600 text-xs">
                  {p.contactNote}{" "}
                  <a
                    href="mailto:contact@apollogroutv.com"
                    className="text-[#2563EB]/70 hover:text-[#2563EB] underline underline-offset-2 transition-colors"
                  >
                    contact@apollogroutv.com
                  </a>
                </p>
                <Link
                  href="/contact"
                  className="text-xs text-[#2563EB]/70 hover:text-[#2563EB] underline underline-offset-2 transition-colors whitespace-nowrap"
                >
                  {p.contactLink}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
