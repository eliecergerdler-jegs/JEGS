import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/useLanguage";
import { getHomeCopy } from "../data/homeCopy";
import { homeQuoteMessage } from "../hooks/useHomeQuote";
import type { HomeQuote } from "../hooks/useHomeQuote";
import { trackConversion } from "../lib/analytics";
import { ScrollToTop } from "./ScrollToTop";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { HomeText } from "./HomeText";
import "../home.css";

export function HomeLayout() {
  const { language, setLanguage } = useLanguage();
  const { pathname } = useLocation();
  const c = getHomeCopy(language);
  const [open, setOpen] = useState(false);
  const [quote, setQuote] = useState<HomeQuote>({ service: "shopify", phase: 0, brief: "" });
  const message = homeQuoteMessage(language, pathname === "/events" ? { ...quote, service: "events" } : quote);
  const whatsapp = `https://wa.me/584125738257?text=${encodeURIComponent(message)}`;
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return <div className="jegs-home">
    <header><div className="wrap nav">
      <Link className="brand" to="/" aria-label="JEGS Digital" onClick={() => setOpen(false)}><img src="/images/home/logo.webp" alt={c.logoalt} width={52} height={64} /><small><HomeText text={c.studio} /></small></Link>
      <nav id="home-navigation" className={`navlinks${open ? " open" : ""}`} aria-label={language === "es" ? "Navegación principal" : "Main navigation"}>
        {[["services", c.navservices], ["work", c.navwork], ["about", c.navabout]].map(([id, label]) => <Link key={id} to={`/#${id}`} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <div className="languages" aria-label={language === "es" ? "Idioma" : "Language"}>
        <button type="button" aria-pressed={language === "es"} onClick={() => setLanguage("es")}>ES</button><span>/</span><button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
      </div>
      <Link className="btn small" to="/#contact">{c.navcontact} <span aria-hidden="true">↗</span></Link>
      <button className="menu" type="button" aria-label={open ? (language === "es" ? "Cerrar navegación" : "Close navigation") : c.menu} aria-expanded={open} aria-controls="home-navigation" onClick={() => setOpen(value => !value)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
    </div></header>
    <main><Suspense fallback={<div className="wrap section">{language === "es" ? "Cargando…" : "Loading…"}</div>}><Outlet context={{ quote, setQuote }} /></Suspense></main>
    <footer><div className="wrap"><div className="footer-main">
      <Link to="/" aria-label="JEGS Digital"><img src="/images/home/logo.webp" alt="JEGS Digital" width={58} height={72} loading="lazy" /></Link>
      <p><HomeText text={c.footerp} /></p>
      <div className="footer-links"><a href="https://www.instagram.com/jegs.digital/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="mailto:ejgerdler@gmail.com">{c.emaillabel} ↗</a><a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion("whatsapp_click", { cta_location: "footer" })}>WhatsApp ↗</a></div>
    </div><div className="footer-bottom"><span>{c.rights.replace("2026", String(new Date().getFullYear()))}</span><span>JEGS Digital · Eliecer Gerdler</span></div></div></footer>
    <a className="whatsapp-floating" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label={c.floatingwhatsapp} onClick={() => trackConversion("whatsapp_click", { service: pathname === "/events" ? "events" : quote.service, cta_location: "floating" })}><WhatsAppIcon className="whatsapp-icon" /><span>{c.floatingwhatsapp}</span></a>
    <ScrollToTop />
  </div>;
}
