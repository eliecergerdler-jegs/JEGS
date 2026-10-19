import { MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/useLanguage";
import { trackConversion } from "../lib/analytics";

interface WhatsAppButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  message?: string;
  ctaLocation?: string;
}

export function WhatsAppButton({ 
  children,
  variant = "primary",
  className = "",
  message,
  ctaLocation = "whatsapp_button",
}: WhatsAppButtonProps) {
  const { language } = useLanguage();
  const localizedMessage = message ?? (language === "es" ? "Hola Eliecer, quiero información sobre tus servicios digitales." : "Hi Eliecer, I’d like information about your digital services.");
  const phone = "584125738257";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(localizedMessage)}`;
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition-all duration-300";
  const styles = variant === "primary"
    ? "bg-brand-green text-brand-bg shadow-[0_0_26px_rgba(184,241,43,.28)] hover:scale-[1.02]"
    : "border border-white/15 bg-white/5 text-brand-white hover:border-brand-blue/60 hover:bg-brand-blue/10";
    
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion("whatsapp_click", { cta_location: ctaLocation })} className={`${base} ${styles} ${className}`}>
      <MessageCircle size={18} />
      {children ?? (language === "es" ? "Cotizar por WhatsApp" : "Get a quote on WhatsApp")}
    </a>
  );
}
