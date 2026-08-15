"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Language, Translation, translations } from "./translations";

const STORAGE_KEY = "apollo_group_tv_lang";
const SUPPORTED: Language[] = ["en", "fr", "de", "es"];

function detectBrowserLanguage(): Language {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language?.slice(0, 2).toLowerCase() as Language;
  return SUPPORTED.includes(lang) ? lang : "en";
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && SUPPORTED.includes(stored)) {
      setLanguageState(stored);
    } else {
      setLanguageState(detectBrowserLanguage());
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
