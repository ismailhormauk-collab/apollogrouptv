"use client";

import { useEffect, useRef, useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const WA_URL = getWhatsAppUrl();
const TG_URL = "https://t.me/pulseiptv4k";

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="26" height="26" aria-hidden="true">
      <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      width="22"
      height="22"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="28" height="28" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="26" height="26" aria-hidden="true">
      <path d="M22.2 5.3l-3 14.1c-.2 1-.9 1.3-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.3-4.8 8.7-7.8c.4-.3 0-.5-.5-.2L5.9 13.1 1 11.6c-1-.3-1-.9.2-1.4L20.5 4c.9-.3 1.7.2 1.7 1.3z" />
    </svg>
  );
}

function ContactButton({
  href,
  label,
  bg,
  glow,
  icon,
  visible,
  delay,
}: {
  href: string;
  label: string;
  bg: string;
  glow: string;
  icon: React.ReactNode;
  visible: boolean;
  delay: number;
}) {
  const activeDelay = visible ? delay : 0;

  return (
    <div
      className="group relative flex items-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.55)",
        transition: `opacity 0.28s ease ${activeDelay}ms, transform 0.28s cubic-bezier(0.34,1.56,0.64,1) ${activeDelay}ms`,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Tooltip — appears to the left on hover */}
      <span
        className="
          absolute right-[calc(100%+12px)]
          bg-white text-gray-900 text-[13px] font-medium
          px-3.5 py-[7px] rounded-full
          shadow-[0_2px_12px_rgba(0,0,0,0.14)]
          whitespace-nowrap select-none pointer-events-none
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200
        "
      >
        {label}
      </span>

      {/* Circle contact button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="
          w-16 h-16 rounded-full
          flex items-center justify-center
          hover:scale-[1.08] active:scale-95
          transition-transform duration-200
        "
        style={{ backgroundColor: bg, boxShadow: glow }}
      >
        {icon}
      </a>
    </div>
  );
}

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* ESC key closes the menu */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* Click outside closes the menu */
  useEffect(() => {
    if (!isOpen) return;
    function onOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-4 md:right-6 z-[9999]"
    >
      <div className="flex flex-col items-end">

        {/* Expandable stack — grows upward from the toggle */}
        <div
          style={{
            maxHeight: isOpen ? 200 : 0,
            overflow: "hidden",
            transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div className="flex flex-col items-end gap-4 pb-4">
            {/* Telegram (topmost) */}
            <ContactButton
              href={TG_URL}
              label="Telegram"
              bg="#229ED9"
              glow="0 6px 24px rgba(34,158,217,0.45)"
              icon={<TelegramIcon />}
              visible={isOpen}
              delay={80}
            />
            {/* WhatsApp */}
            <ContactButton
              href={WA_URL}
              label="WhatsApp"
              bg="#25D366"
              glow="0 6px 24px rgba(37,211,102,0.45)"
              icon={<WhatsAppIcon />}
              visible={isOpen}
              delay={40}
            />
          </div>
        </div>

        {/* Main toggle — blue Chat / X button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
          aria-expanded={isOpen}
          className="
            w-16 h-16 rounded-full
            flex items-center justify-center
            hover:scale-[1.08] active:scale-95
            transition-transform duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2
          "
          style={{
            backgroundColor: "#2563EB",
            boxShadow: "0 8px 32px rgba(37,99,235,0.45)",
          }}
        >
          <div
            style={{
              transition: "transform 0.3s ease, opacity 0.2s ease",
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            {isOpen ? <XIcon /> : <ChatIcon />}
          </div>
        </button>

      </div>
    </div>
  );
}
