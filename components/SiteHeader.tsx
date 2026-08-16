"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { LOGO_SRC, LOGO_ALT } from "@/lib/branding";

export default function SiteHeader() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  const NAV_LINKS = [
    { label: t.nav.home,    href: "/"        },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.faq,     href: "/faq"     },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkCls = (href: string, mobile = false) => {
    const active = isActive(href);
    return mobile
      ? `flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 min-h-[44px] ${
          active
            ? "bg-[#2563EB] text-white"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`
      : `px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
          active
            ? "bg-[#2563EB] text-white"
            : "text-gray-400 hover:text-white"
        }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0a0a0a]/90 backdrop-blur-md border-b ${
        scrolled || menuOpen
          ? "border-white/10 shadow-xl"
          : "border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo */}
          <Link href="/" className="relative flex items-center h-[60px] w-64 lg:h-[76px] lg:w-80 flex-shrink-0">
            <Image
              src={LOGO_SRC}
              alt={LOGO_ALT}
              fill
              sizes="(min-width: 1024px) 320px, 256px"
              priority
              className="object-contain object-left"
            />
          </Link>

          {/* Nav links — desktop */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} className={linkCls(href)}>
                {label}
              </Link>
            ))}
          </nav>

          {/* Hamburger — mobile */}
          <button
            className="lg:hidden text-white p-2 -mr-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav
          className="bg-[#0a0a0a]/98 backdrop-blur-md border-t border-gray-800 px-4 py-4 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={href} href={href} className={linkCls(href, true)}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
