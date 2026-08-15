"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import { LOGO_SRC, LOGO_ALT } from "@/lib/branding";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer id="contact" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div>
            <div className="relative flex items-center h-9 w-32 lg:h-14 lg:w-56 mb-4">
              <Image
                src={LOGO_SRC}
                alt={LOGO_ALT}
                fill
                sizes="(min-width: 1024px) 224px, 128px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {f.tagline}
            </p>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-white font-semibold tracking-widest uppercase text-xs mb-5">
              {f.companyHeading}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                  {f.privacyPolicy}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                  {f.termsOfService}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 className="text-white font-semibold tracking-widest uppercase text-xs mb-5">
              {f.supportHeading}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/faq" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                  {f.faq}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                  {f.contactUs}
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@apollogroutv.com"
                  className="text-gray-500 hover:text-white text-sm transition-colors duration-200 break-all"
                >
                  contact@apollogroutv.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-gray-600 text-sm">{f.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
