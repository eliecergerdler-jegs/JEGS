import { MessageCircle } from "lucide-react";
import { trackConversion } from "../lib/analytics";

interface WhatsAppButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  message?: string;
  ctaLocation?: string;
}

export function WhatsAppButton({ 
  children = "Cotizar por WhatsApp", 
  variant = "primary",
  className = "",
  message = "Hola JEGS, quiero información sobre tus servicios digitales.",
  ctaLocation = "whatsapp_button",
}: WhatsAppButtonProps) {
  const phone = "584125738257";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition-all duration-300";
  const styles = variant === "primary"
    ? "bg-brand-green text-brand-bg shadow-[0_0_26px_rgba(184,241,43,.28)] hover:scale-[1.02]"
    : "border border-white/15 bg-white/5 text-brand-white hover:border-brand-blue/60 hover:bg-brand-blue/10";
    
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion("whatsapp_click", { cta_location: ctaLocation })} className={`${base} ${styles} ${className}`}>
      <MessageCircle size={18} />
      {children}
    </a>
  );
}
