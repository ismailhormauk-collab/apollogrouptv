"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import PosterBackground from "@/components/PosterBackground";
import { useLanguage } from "@/lib/i18n/context";

export default function FaqPage() {
  const { t } = useLanguage();
  const f = t.faqPage;
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PosterBackground />

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
            {f.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
            {f.heading1}
            <br />
            <span className="text-[#2563EB]">{f.heading2}</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl">{f.subtitle}</p>
        </div>
      </section>

      {/* ── FAQ Accordion + Sidebar ── */}
      <section className="relative z-10 pb-16 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 xl:gap-16 items-start">

            {/* ── Sidebar ── */}
            <aside className="lg:col-span-2 flex flex-col gap-5 lg:sticky lg:top-28">

              {/* CTA card */}
              <div className="bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden">
                <div className="h-[3px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />
                <div className="p-7">
                  <div className="w-11 h-11 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-xl flex items-center justify-center mb-5">
                    <MessageCircle size={20} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{f.sidebar.heading}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{f.sidebar.body}</p>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-5 py-3 rounded-xl text-sm uppercase tracking-[0.12em] transition-all duration-200 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_32px_rgba(37,99,235,0.4)]"
                  >
                    {f.sidebar.btn}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Email card */}
              <div className="bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={15} className="text-[#2563EB]" />
                  </div>
                  <span className="text-gray-400 text-xs uppercase tracking-widest font-bold">{f.sidebar.emailLabel}</span>
                </div>
                <a
                  href="mailto:contact@apollogroutv.com"
                  className="text-white text-sm font-medium hover:text-[#2563EB] transition-colors duration-200 break-all"
                >
                  contact@apollogroutv.com
                </a>
              </div>
            </aside>

            {/* ── Accordion ── */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              {f.faqs.map(({ q, a }, i) => (
                <div
                  key={i}
                  className={`group bg-[#0f0f0f]/70 backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-300 ${
                    open === i
                      ? "border-[#2563EB]/30 shadow-[0_4px_32px_rgba(37,99,235,0.08)]"
                      : "border-white/[0.07] hover:border-white/[0.14]"
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                    aria-expanded={open === i}
                  >
                    <span className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${
                      open === i ? "text-white" : "text-gray-300 group-hover:text-white"
                    }`}>
                      {q}
                    </span>
                    <span className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                      open === i
                        ? "bg-[#2563EB] rotate-180"
                        : "bg-white/[0.05] group-hover:bg-white/[0.09]"
                    }`}>
                      <ChevronDown size={14} className={open === i ? "text-white" : "text-gray-400"} />
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      open === i ? "max-h-64" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-white/[0.05] mb-4" />
                      <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
