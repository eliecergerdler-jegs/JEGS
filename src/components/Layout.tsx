import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Glow } from "./Glow";
import { Smartphone } from "lucide-react";
import { CustomCursor } from "./CustomCursor";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./PageTransition";

export function Layout() {
  const whatsappUrl = "https://wa.me/message/VDG6H2LM6E5QD1";
  const location = useLocation();
  
  return (
    <div className="relative min-h-screen selection:bg-brand-green/30 selection:text-brand-bg">
      <CustomCursor />
      <Glow />
      <Header />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      
      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-brand-muted relative z-10">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-4">
          <div>
            <p className="font-bold text-brand-white">JEGS Digital</p>
            <p className="mt-2">Websites, contenido visual y videos para marcas que quieren verse más profesionales y captar clientes.</p>
          </div>
          <a href="https://www.instagram.com/jegs.digital/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-brand-green hover:underline">
            Síguenos en Instagram
          </a>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-2xl bg-brand-green text-brand-bg shadow-[0_0_34px_rgba(184,241,43,.38)] transition hover:scale-105 md:hidden"
      >
        <Smartphone size={24} />
      </a>
    </div>
  );
}

