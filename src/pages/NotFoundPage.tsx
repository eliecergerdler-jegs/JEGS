import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/useLanguage";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFoundPage() {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  usePageMeta(
    isEs ? "Página no encontrada" : "Page Not Found",
    isEs ? "La página que buscas no existe." : "The page you are looking for does not exist."
  );

  const whatsappMessage = encodeURIComponent(t.home.finalCta.message);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 py-20 text-center relative overflow-hidden">
      {/* Background Glowing Orb */}
      <div className="absolute h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" />
      
      <div className="relative z-10 max-w-lg">
        <span className="text-8xl font-black text-brand-green/20 select-none block mb-4">404</span>
        <h1 className="text-3xl md:text-5xl font-black text-brand-white tracking-tight mb-4">
          {isEs ? "¡Ups! Página no encontrada" : "Oops! Page Not Found"}
        </h1>
        <p className="text-base md:text-lg text-brand-muted mb-8 leading-relaxed">
          {isEs 
            ? "Parece que la página que buscas no existe o ha sido movida." 
            : "It seems the page you are looking for does not exist or has been moved."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold text-brand-white transition hover:border-brand-blue/50 hover:bg-brand-blue/10"
          >
            <ArrowLeft size={16} />
            {isEs ? "Volver al Inicio" : "Back to Home"}
          </Link>
          <a
            href={`https://wa.me/584125738257?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-green px-6 py-3.5 text-sm font-black text-brand-bg transition hover:scale-[1.02] shadow-[0_0_20px_rgba(184,241,43,0.3)]"
          >
            <MessageCircle size={16} />
            {isEs ? "Escríbenos" : "Contact Us"}
          </a>
        </div>
      </div>
    </div>
  );
}
