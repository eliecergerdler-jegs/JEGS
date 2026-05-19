import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function WhatsAppButton({ 
  children = "Cotizar por WhatsApp", 
  variant = "primary",
  className = ""
}: WhatsAppButtonProps) {
  const url = `https://wa.me/message/VDG6H2LM6E5QD1`;
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition-all duration-300";
  const styles = variant === "primary"
    ? "bg-brand-green text-brand-bg shadow-[0_0_26px_rgba(184,241,43,.28)] hover:scale-[1.02]"
    : "border border-white/15 bg-white/5 text-brand-white hover:border-brand-blue/60 hover:bg-brand-blue/10";
    
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      <MessageCircle size={18} />
      {children}
    </a>
  );
}
