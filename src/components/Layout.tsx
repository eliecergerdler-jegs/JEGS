import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Glow } from "./Glow";
import { CustomCursor } from "./CustomCursor";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./PageTransition";
import { ScrollToTop } from "./ScrollToTop";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Layout() {
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
      
      <footer className="border-t border-white/5 bg-brand-bg2/40 px-5 py-12 text-sm text-brand-muted relative z-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left max-w-md">
            <p className="text-lg font-black tracking-tight text-brand-white">JEGS Digital</p>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted/90">
              Websites, contenido visual y videos para marcas que quieren verse más profesionales y captar clientes.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-white/40">Contacto y Redes</p>
            <div className="flex flex-col sm:flex-row md:flex-col items-center md:items-end gap-5 sm:gap-6 md:gap-3 text-[0.95rem] md:text-sm font-bold md:font-medium">
              <a 
                href="https://www.instagram.com/jegs.digital/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-green hover:text-brand-green/80 transition-colors"
              >
                Instagram
              </a>
              <span className="hidden sm:inline md:hidden text-white/10">|</span>
              <a 
                href="https://wa.me/584125738257" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-green hover:text-brand-green/80 transition-colors"
              >
                WhatsApp
              </a>
              <span className="hidden sm:inline md:hidden text-white/10">|</span>
              <a 
                href="mailto:ejgerdler@gmail.com" 
                className="text-brand-green hover:text-brand-green/80 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-8 pt-8 border-t border-white/5 text-center text-xs text-brand-muted/50">
          © {new Date().getFullYear()} JEGS Digital. Todos los derechos reservados.
        </div>
      </footer>

      <a
        href="https://wa.me/584125738257?text=Hola%20JEGS%2C%20quiero%20informaci%C3%B3n%20sobre%20tus%20servicios%20digitales."
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
        className="fixed bottom-5 right-4 z-50 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-brand-green px-4 text-sm font-black text-brand-bg shadow-[0_0_28px_rgba(184,241,43,.35)] transition active:scale-95 hover:scale-[1.02] md:hidden"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span>WhatsApp</span>
      </a>

      <ScrollToTop />
    </div>
  );
}


