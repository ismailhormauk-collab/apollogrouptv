"use client";
import { Tv, Clapperboard, Users, RefreshCw, Settings, LogOut } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

const TILES = [
  { label: "Live TV", Icon: Tv, primary: true },
  { label: "Movies", Icon: Clapperboard, primary: false },
  { label: "Series", Icon: Clapperboard, primary: false },
  { label: "Account", Icon: Users, primary: false },
  { label: "Change Server", Icon: RefreshCw, primary: false },
];

export default function AppPreviewSection() {
  const { t } = useLanguage();
  const a = t.appPreview;

  return (
    <section id="preview" className="bg-white py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 xl:gap-16 items-center">

          {/* LEFT — Product showcase */}
          <div className="flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-[680px] xl:max-w-[760px]">
              <div
                aria-hidden
                className="absolute inset-0 scale-[1.15] rounded-[40%_60%_55%_45%/40%_45%_55%_60%]
                  bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.22)_0%,rgba(37,99,235,0.08)_55%,transparent_80%)]
                  blur-2xl pointer-events-none"
              />
              <div
                aria-hidden
                className="absolute inset-0 scale-[1.35]
                  bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.10)_0%,transparent_70%)]
                  blur-3xl pointer-events-none"
              />
              <div className="animate-float relative">
                {/* TV frame */}
                <div
                  role="img"
                  aria-label="Apollo Group TV — Live TV home screen on smart TV"
                  className="relative w-full rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#12141c] to-[#1a1206]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.20)_0%,transparent_60%)] pointer-events-none" />
                  <div className="relative aspect-video flex flex-col p-4 sm:p-6 md:p-8">
                    {/* Top bar */}
                    <div className="flex items-center justify-between mb-4 sm:mb-8">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-[#2563EB] flex items-center justify-center text-white font-black text-[10px] sm:text-xs flex-shrink-0">
                          A
                        </div>
                        <span className="text-white font-bold text-xs sm:text-base leading-none">
                          <span className="text-[#2563EB]">Apollo</span> Group TV
                        </span>
                      </div>
                      <span className="text-gray-500 text-[9px] sm:text-[11px] uppercase tracking-widest hidden sm:inline">Live · 4K</span>
                    </div>

                    {/* Tiles */}
                    <div className="grid grid-cols-4 grid-rows-2 gap-1.5 sm:gap-3 flex-1 min-h-0">
                      {TILES.map(({ label, Icon, primary }, i) => (
                        <div
                          key={label}
                          className={`
                            ${i === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
                            rounded-lg sm:rounded-xl flex flex-col items-center justify-center gap-1 sm:gap-2 text-center px-1
                            ${primary
                              ? "bg-[#2563EB]/90 ring-1 sm:ring-2 ring-white/60 text-white"
                              : "bg-white/[0.06] border border-white/10 text-gray-300"}
                          `}
                        >
                          <Icon size={i === 0 ? 22 : 14} className="sm:scale-125" />
                          <span className="text-[8px] sm:text-[11px] font-medium leading-none">{label}</span>
                        </div>
                      ))}
                      <div className="col-span-1 row-span-1 rounded-lg sm:rounded-xl flex flex-col items-center justify-center gap-1 sm:gap-2 text-center px-1 bg-white/[0.06] border border-white/10 text-gray-300">
                        <Settings size={14} className="sm:scale-125" />
                        <span className="text-[8px] sm:text-[11px] font-medium leading-none">Settings</span>
                      </div>
                      <div className="col-span-1 row-span-1 rounded-lg sm:rounded-xl flex flex-col items-center justify-center gap-1 sm:gap-2 text-center px-1 bg-white/[0.06] border border-white/10 text-gray-400">
                        <LogOut size={14} className="sm:scale-125" />
                        <span className="text-[8px] sm:text-[11px] font-medium leading-none">Exit</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden className="absolute -bottom-3 left-[8%] right-[8%] h-5 bg-black/30 blur-md rounded-full pointer-events-none" />
                <div aria-hidden className="absolute -bottom-6 left-[14%] right-[14%] h-6 bg-black/[0.18] blur-xl rounded-full pointer-events-none" />
                <div aria-hidden className="absolute -bottom-10 left-[22%] right-[22%] h-8 bg-black/10 blur-2xl rounded-full pointer-events-none" />
              </div>
            </div>
          </div>

          {/* RIGHT — Copy */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="inline-flex w-fit items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/25 text-[#2563EB] text-sm font-semibold px-4 py-1.5 rounded-full">
              {a.badge}
            </div>

            <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
              {a.heading1}
              <br />
              {a.heading2}
            </h2>

            <div className="flex flex-col gap-3 text-gray-600 leading-relaxed">
              <p>{a.body1}</p>
              <p>{a.body2}</p>
            </div>

            <div className="w-10 h-0.5 bg-[#2563EB]/40 rounded-full" />

            <div className="flex flex-wrap gap-2">
              {a.features.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5
                    bg-gray-50 border border-gray-200 text-gray-700
                    text-sm font-medium px-4 py-2 rounded-full
                    hover:bg-[#2563EB]/5 hover:border-[#2563EB]/30 hover:text-[#2563EB]
                    transition-all duration-200 cursor-default select-none"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/60 flex-shrink-0" />
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
