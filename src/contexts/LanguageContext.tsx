import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";
import type { TranslationSchema } from "./translations";


export type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  // 1. Check local storage preference
  const saved = localStorage.getItem("jegs-lang");
  if (saved === "es" || saved === "en") return saved;

  // 2. Check browser navigator language (supports detecting US/EN clients automatically)
  const browserLang = navigator.language || (navigator as any).userLanguage;
  if (browserLang && browserLang.startsWith("en")) {
    return "en";
  }

  // 3. Fallback default
  return "es";
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("jegs-lang", lang);
    
    // Smoothly update the html lang attribute for correct standard SEO and metadata alignment
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    // Initial standard alignment of document.documentElement.lang
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
