"use client";
import {
  Mail, Phone, Clock, Headphones, ShieldCheck, ArrowUpRight,
} from "lucide-react";
import PosterBackground from "@/components/PosterBackground";
import { useLanguage } from "@/lib/i18n/context";
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const EMAIL = "contact@apollogroutv.com";

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;
  const d = c.direct;

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <PosterBackground />

      {/* ── Hero ── */}
      <section className="relative z-10 pt-24 sm:pt-36 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5 sm:gap-6">
          <div
            className="pointer-events-none absolute left-1/2 top-28 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)" }}
            aria-hidden
          />
          <div className="inline-flex items-center gap-2 border border-[#2563EB]/60 text-[#2563EB] text-[11px] font-bold px-4 py-1.5 rounded-full tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            {c.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
            {c.heading1}
            <br />
            <span className="text-[#2563EB]">{c.heading2}</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl">{c.subtitle}</p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="relative z-10 pb-16 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 xl:gap-16 items-start">

            {/* ── Left: contact info ── */}
            <aside className="lg:col-span-2 flex flex-col gap-5 lg:sticky lg:top-28">
              <div className="flex flex-col gap-3">
                <div className="inline-flex w-fit items-center gap-2 border border-[#2563EB]/60 text-[#2563EB] text-[11px] font-bold px-3.5 py-1.5 rounded tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                  {c.alwaysOnline}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                  {c.sideHeading1}
                  <br />
                  <span className="text-[#2563EB]">{c.sideHeading2}</span>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">{c.sideBody}</p>
              </div>

              {/* Email card */}
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-start gap-4 bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/[0.08] hover:border-[#2563EB]/30 rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(37,99,235,0.08)]"
              >
                <div className="w-10 h-10 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB]/20 transition-colors duration-300">
                  <Mail size={16} className="text-[#2563EB]" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">{c.emailLabel}</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#2563EB] transition-colors duration-200 break-all">
                    {EMAIL}
                  </p>
                </div>
              </a>

              {/* WhatsApp card */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/[0.08] hover:border-[#2563EB]/30 rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(37,99,235,0.08)]"
              >
                <div className="w-10 h-10 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB]/20 transition-colors duration-300 text-[#2563EB]">
                  {WA_ICON}
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">{c.whatsappLabel}</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#2563EB] transition-colors duration-200">
                    {WHATSAPP_DISPLAY}
                  </p>
                  <p className="text-gray-600 text-xs mt-0.5">{c.tapToOpenWA}</p>
                </div>
              </a>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 mt-1">
                {[
                  { icon: Clock,       ...c.trust[0] },
                  { icon: Headphones,  ...c.trust[1] },
                  { icon: ShieldCheck, ...c.trust[2] },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="bg-[#0f0f0f]/60 border border-white/[0.06] rounded-xl p-3 flex flex-col items-center gap-1 text-center">
                    <Icon size={15} className="text-[#2563EB]" />
                    <span className="text-white text-xs font-bold">{label}</span>
                    <span className="text-gray-600 text-[10px]">{sub}</span>
                  </div>
                ))}
              </div>

              {/* Phone card */}
              <div className="flex items-start gap-4 bg-[#0f0f0f]/60 border border-white/[0.06] rounded-2xl p-5">
                <div className="w-10 h-10 bg-white/[0.04] border border-white/[0.07] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={15} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">{c.phoneLabel}</p>
                  <p className="text-white text-sm font-medium">{WHATSAPP_DISPLAY}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{c.available247}</p>
                </div>
              </div>
            </aside>

            {/* ── Right: direct contact ── */}
            <div className="lg:col-span-3">
              <div className="bg-[#0f0f0f]/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.7)] overflow-hidden">
                <div className="h-[3px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{d.title}</h3>
                    <p className="text-gray-500 text-sm">{d.subtitle}</p>
                  </div>

                  <div className="flex flex-col gap-4 sm:gap-5">
                    {/* WhatsApp */}
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center gap-4 sm:gap-5 bg-white/[0.03] border border-white/[0.08] hover:border-[#2563EB]/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-[#2563EB]/[0.05] hover:shadow-[0_4px_32px_rgba(37,99,235,0.15)] hover:-translate-y-0.5"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2563EB]/10 border border-[#2563EB]/25 rounded-xl flex items-center justify-center flex-shrink-0 text-[#2563EB] group-hover:bg-[#2563EB]/20 transition-colors duration-300 [&>svg]:w-6 [&>svg]:h-6">
                        {WA_ICON}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{c.whatsappLabel}</p>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-full px-2 py-0.5">
                            {d.fastest}
                          </span>
                        </div>
                        <p className="text-white text-lg sm:text-2xl font-bold tracking-tight group-hover:text-[#2563EB] transition-colors duration-200">
                          {WHATSAPP_DISPLAY}
                        </p>
                        <p className="text-gray-600 text-xs mt-1">{c.tapToOpenWA}</p>
                      </div>
                      <ArrowUpRight size={20} className="hidden sm:block text-gray-600 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${EMAIL}`}
                      className="group relative flex items-center gap-4 sm:gap-5 bg-white/[0.03] border border-white/[0.08] hover:border-[#2563EB]/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:bg-[#2563EB]/[0.05] hover:shadow-[0_4px_32px_rgba(37,99,235,0.15)] hover:-translate-y-0.5"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2563EB]/10 border border-[#2563EB]/25 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB]/20 transition-colors duration-300">
                        <Mail size={22} className="text-[#2563EB]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">{c.emailLabel}</p>
                        <p className="text-white text-base sm:text-xl font-bold tracking-tight group-hover:text-[#2563EB] transition-colors duration-200 break-all">
                          {EMAIL}
                        </p>
                        <p className="text-gray-600 text-xs mt-1">{d.tapToEmail}</p>
                      </div>
                      <ArrowUpRight size={20} className="hidden sm:block text-gray-600 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
                    </a>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
