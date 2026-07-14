import { createContext } from "react";
import type { TranslationSchema } from "./translations";

export type Language = "es" | "en";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
