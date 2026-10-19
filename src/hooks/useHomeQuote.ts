import type { Dispatch, SetStateAction } from "react";
import { useOutletContext } from "react-router-dom";
import { getHomeCopy } from "../data/homeCopy";

export type HomeService = "shopify" | "wordpress" | "react" | "video" | "design" | "events";
export interface HomeQuote { service: HomeService; phase: number; brief: string }
export interface HomeQuoteContext { quote: HomeQuote; setQuote: Dispatch<SetStateAction<HomeQuote>> }
export const useHomeQuote = () => useOutletContext<HomeQuoteContext>();

export function homeQuoteMessage(language: "es" | "en", quote: HomeQuote) {
  const c = getHomeCopy(language);
  const service = c[quote.service];
  const phase = [c.phase1, c.phase2, c.phase3][quote.phase];
  const intro = language === "es" ? `Hola Eliecer, quiero información sobre ${service}.` : `Hi Eliecer, I’d like information about ${service}.`;
  return `${intro} ${phase}.${quote.brief.trim() ? ` ${quote.brief.trim()}` : ""}`;
}
