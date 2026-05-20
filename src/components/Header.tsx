import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { useLanguage } from "../contexts/LanguageContext";
import logoSvg from "../assets/Imagenes/jegs-bull-light.webp";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { path: "/", label: t.header.nav.home },
    { path: "/servicios", label: t.header.nav.services },
    { path: "/sobre-jegs", label: t.header.nav.about },
    { path: "/contacto", label: t.header.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex items-center justify-center">
            <img 
              src={logoSvg} 
              alt="JEGS Digital" 
              width="34" 
              height="40" 
              decoding="async" 
              className="h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(30,123,255,.4)]" 
            />
          </div>
          <div className="text-left leading-tight">
            <p className="text-base font-black tracking-wider text-brand-white">JEGS</p>
            <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-brand-muted">Digital</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((p) => {
            const isActive = location.pathname === p.path;
            return (
              <Link
                key={p.path}
                to={p.path}
                className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
                  isActive 
                    ? "bg-brand-blue/15 text-brand-white" 
                    : "text-brand-muted hover:bg-white/5 hover:text-brand-white"
                }`}
              >
                {p.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {/* Custom Premium Language Switcher */}
          <div className="flex items-center gap-1 rounded-xl bg-white/5 p-1 border border-white/10">
            <button
              onClick={() => setLanguage("es")}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all duration-300 ${
                language === "es"
                  ? "bg-brand-blue/20 text-brand-white shadow-[0_0_12px_rgba(30,123,255,0.3)] border border-brand-blue/30"
                  : "text-brand-muted hover:text-brand-white border border-transparent"
              }`}
              aria-label="Cambiar a Español"
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all duration-300 ${
                language === "en"
                  ? "bg-brand-blue/20 text-brand-white shadow-[0_0_12px_rgba(30,123,255,0.3)] border border-brand-blue/30"
                  : "text-brand-muted hover:text-brand-white border border-transparent"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
          <WhatsAppButton>{t.common.whatsappHeader}</WhatsAppButton>
        </div>

        <button 
          className="rounded-xl border border-white/10 p-2 text-brand-white lg:hidden" 
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-brand-bg px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((p) => (
              <Link 
                key={p.path} 
                to={p.path}
                onClick={() => setOpen(false)} 
                className="rounded-xl bg-white/5 px-4 py-3 text-left text-sm font-semibold text-brand-white"
              >
                {p.label}
              </Link>
            ))}

            {/* Premium Mobile Language Toggler */}
            <div className="mt-2 flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 border border-white/10">
              <span className="text-sm font-semibold text-brand-muted">
                {language === "es" ? "Idioma" : "Language"}
              </span>
              <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
                <button
                  onClick={() => setLanguage("es")}
                  className={`rounded-md px-3 py-1 text-xs font-bold transition-all duration-300 ${
                    language === "es"
                      ? "bg-brand-blue/20 text-brand-white border border-brand-blue/30 shadow-[0_0_10px_rgba(30,123,255,0.2)]"
                      : "text-brand-muted border border-transparent"
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`rounded-md px-3 py-1 text-xs font-bold transition-all duration-300 ${
                    language === "en"
                      ? "bg-brand-blue/20 text-brand-white border border-brand-blue/30 shadow-[0_0_10px_rgba(30,123,255,0.2)]"
                      : "text-brand-muted border border-transparent"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <WhatsAppButton className="mt-2 w-full">{t.common.whatsappFloat}</WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}

