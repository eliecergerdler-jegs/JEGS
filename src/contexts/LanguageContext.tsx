import React, { useState, useEffect } from "react";
import { translations } from "./translations";
import { LanguageContext } from "./language";
import type { Language } from "./language";

const getInitialLanguage = (): Language => {
  // 1. Check local storage preference first (User explicit choice)
  const saved = localStorage.getItem("jegs-lang");
  if (saved === "es" || saved === "en") return saved;

  // 2. Check browser navigator language (OS / Browser settings)
  const browserLang = typeof navigator !== "undefined" ? (navigator.language || (navigator as Navigator & { userLanguage?: string }).userLanguage)?.toLowerCase() : "";
  if (browserLang) {
    if (browserLang.startsWith("es")) return "es";
    if (browserLang.startsWith("en")) return "en";
  }

  // 3. Fallback to TimeZone detection (Region based)
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // Si está en LatAm o España, prefiere español
    if (
      tz.includes("America/Caracas") || 
      tz.includes("America/Bogota") || 
      tz.includes("America/Mexico_City") || 
      tz.includes("America/Buenos_Aires") || 
      tz.includes("America/Santiago") || 
      tz.includes("America/Lima") || 
      tz.includes("Europe/Madrid")
    ) {
      return "es";
    }
    if (tz.includes("America/") && !tz.includes("Caracas") && !tz.includes("Bogota") && !tz.includes("Mexico") && !tz.includes("Buenos_Aires") && !tz.includes("Santiago") && !tz.includes("Lima")) {
      // US and Canada timezones typically
      return "en";
    }
  } catch {
    // Intl API not available; fall through to default
  }

  // 4. Fallback default
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
