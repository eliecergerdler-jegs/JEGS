import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import logoSvg from "../assets/Imagenes/jegs-bull-light.svg";

const pages = [
  { path: "/", label: "Inicio" },
  { path: "/servicios", label: "Servicios" },
  { path: "/sobre-jegs", label: "Sobre JEGS" },
  { path: "/contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex items-center justify-center">
            <img src={logoSvg} alt="JEGS Digital" width="32" height="40" decoding="async" className="h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(30,123,255,.4)]" />
          </div>
          <div className="text-left leading-tight">
            <p className="text-base font-black tracking-wider text-brand-white">JEGS</p>
            <p className="text-[11px] font-semibold uppercase tracking-[.22em] text-brand-muted">Digital</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {pages.map((p) => {
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

        <div className="hidden lg:block">
          <WhatsAppButton>WhatsApp</WhatsAppButton>
        </div>

        <button 
          className="rounded-xl border border-white/10 p-2 text-brand-white lg:hidden" 
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-brand-bg px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {pages.map((p) => (
              <Link 
                key={p.path} 
                to={p.path}
                onClick={() => setOpen(false)} 
                className="rounded-xl bg-white/5 px-4 py-3 text-left text-sm font-semibold text-brand-white"
              >
                {p.label}
              </Link>
            ))}
            <WhatsAppButton className="mt-2 w-full">Hablar por WhatsApp</WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
