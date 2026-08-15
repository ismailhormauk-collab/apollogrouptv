"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export default function FaqSection() {
  const { t } = useLanguage();
  const f = t.faqSection;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 items-start">
          {/* Left card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm lg:sticky lg:top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{f.heading}</h3>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm">{f.body}</p>
              <a
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 min-h-[44px] rounded-xl transition-colors duration-200"
              >
                <MessageCircle size={18} />
                {f.btn}
              </a>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {f.faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:border-[#2563EB]/20 transition-colors duration-200"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4 text-sm md:text-base">{q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#2563EB] flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open === i ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-gray-500 leading-relaxed text-sm">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
