import { ArrowRight, Code2, LayoutTemplate, Smartphone, Sparkles, Store } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm";
import { PortfolioGrid, WebDesignHeroGallery } from "../components/Portfolio";
import { Section } from "../components/Section";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { portfolioProjects } from "../data/portfolio";
import { usePageMeta } from "../hooks/usePageMeta";
import { trackConversion } from "../lib/analytics";
import { useLanguage } from "../contexts/useLanguage";

const services: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: LayoutTemplate, title: "Business Websites", text: "Clear, professional sites built around your services and contact flow." },
  { icon: Code2, title: "Landing Pages", text: "Focused pages for a campaign, offer or next step." },
  { icon: Store, title: "E-commerce", text: "Product-led website experiences for online catalogs and stores." },
  { icon: Smartphone, title: "Mobile Optimization", text: "Responsive interfaces designed to work smoothly on smaller screens." },
];

export function WebDesignPage() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const content = isEs ? {
    metaTitle: "Diseño y Desarrollo Web", metaDescription: "Diseño y desarrollo web moderno, rápido y enfocado en conversión para negocios que quieren crecer.",
    eyebrow: "Diseño / Desarrollo Web", title: "Sitios web diseñados para convertir visitantes en clientes.", subtitle: "Sitios modernos, rápidos y enfocados en conversión para negocios que quieren crecer.", quote: "Solicitar cotización", work: "Ver nuestro trabajo",
    trust: "Diseñados para claridad, confianza y acción.", points: ["Comunicación clara", "Diseño responsive", "Contacto listo para convertir"],
    moreEyebrow: "Un sitio web debe hacer más", moreTitle: "Más que una página bonita.", moreSubtitle: "Tu sitio debe comunicar con claridad, cargar eficientemente, funcionar en móvil y facilitar el contacto.",
    serviceTitles: ["Sitios para negocios", "Landing pages", "E-commerce", "Optimización móvil"], serviceTexts: ["Sitios profesionales creados alrededor de tus servicios y flujo de contacto.", "Páginas enfocadas para una campaña, oferta o siguiente paso.", "Experiencias orientadas a productos, catálogos y tiendas online.", "Interfaces responsive diseñadas para funcionar correctamente en pantallas pequeñas."],
    portfolioEyebrow: "Proyectos web seleccionados", portfolioTitle: "Proyectos relevantes para negocios diferentes.", portfolioSubtitle: "Una selección breve del portafolio web.", fullPortfolio: "Ver portafolio completo", processEyebrow: "Nuestro proceso", processTitle: "Un camino enfocado desde la primera conversación hasta el lanzamiento.", steps: ["Descubrimiento", "Estrategia y diseño", "Desarrollo", "Revisión", "Lanzamiento"], quoteEyebrow: "Inicia tu proyecto", quoteTitle: "Cuéntanos qué necesita tu sitio web.", finalTitle: "¿Listo para hablar sobre tu sitio web?", whatsapp: "Hablar por WhatsApp",
  } : {
    metaTitle: "Web Design & Development", metaDescription: "Modern, fast and conversion-focused website design and development for businesses that want to grow.",
    eyebrow: "Web Design / Development", title: "Websites built to turn visitors into customers.", subtitle: "Modern, fast and conversion-focused websites for businesses that want to grow.", quote: "Request a Quote", work: "View Our Work",
    trust: "Designed for clarity, trust and action.", points: ["Clear communication", "Responsive layouts", "Contact-ready journeys"],
    moreEyebrow: "A website should do more", moreTitle: "More than a good-looking page.", moreSubtitle: "Your website should communicate clearly, load efficiently, work on mobile and make it easy for a potential customer to contact you.",
    serviceTitles: ["Business Websites", "Landing Pages", "E-commerce", "Mobile Optimization"], serviceTexts: ["Clear, professional sites built around your services and contact flow.", "Focused pages for a campaign, offer or next step.", "Product-led website experiences for online catalogs and stores.", "Responsive interfaces designed to work smoothly on smaller screens."],
    portfolioEyebrow: "Selected web work", portfolioTitle: "Relevant projects, built for different businesses.", portfolioSubtitle: "A small selection from the web portfolio.", fullPortfolio: "View Full Portfolio", processEyebrow: "Our process", processTitle: "A focused path from first conversation to launch.", steps: ["Discovery", "Strategy and Design", "Development", "Review", "Launch"], quoteEyebrow: "Start your project", quoteTitle: "Tell us what your website needs.", finalTitle: "Ready to talk about your website?", whatsapp: "Chat on WhatsApp",
  };
  const localizedServices = services.map((service, index) => ({ ...service, title: content.serviceTitles[index], text: content.serviceTexts[index] }));
  usePageMeta(content.metaTitle, content.metaDescription);
  return <>
    <section className="relative overflow-hidden px-5 py-16 md:py-24"><div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.92fr_.08fr_1fr]"><div className="min-w-0 lg:col-span-2"><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-muted"><Sparkles size={14} className="text-brand-green" aria-hidden="true" />{content.eyebrow}</div><h1 className="max-w-full overflow-wrap-anywhere text-[2.05rem] font-black leading-[1.04] tracking-tight text-brand-white sm:max-w-4xl sm:text-5xl md:text-6xl">{content.title}</h1><p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted/95 md:text-xl">{content.subtitle}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#quote" onClick={() => trackConversion("quote_cta_click", { service: "web", cta_location: "hero" })} className="inline-flex w-full justify-center rounded-2xl bg-brand-green px-5 py-3 text-sm font-black text-brand-bg sm:w-auto">{content.quote}</a><Link to="/portfolio" onClick={() => trackConversion("portfolio_click", { destination: "portfolio", cta_location: "web_hero" })} className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-brand-white backdrop-blur-md transition hover:border-brand-blue/60 hover:bg-brand-blue/10 sm:w-auto">{content.work} <ArrowRight size={18} aria-hidden="true" /></Link></div><p className="mt-6 text-sm font-bold text-brand-green">{content.trust}</p></div><WebDesignHeroGallery projects={portfolioProjects.slice(0, 4)} /></div></section>
    <Section eyebrow={content.moreEyebrow} title={content.moreTitle} subtitle={content.moreSubtitle}><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{localizedServices.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6"><Icon className="text-brand-green"/><h2 className="mt-5 text-xl font-black text-brand-white">{title}</h2><p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p></article>)}</div></Section>
    <Section eyebrow={content.portfolioEyebrow} title={content.portfolioTitle} subtitle={content.portfolioSubtitle}><PortfolioGrid projects={portfolioProjects.slice(4, 7)} /><div className="mt-9 text-center"><Link to="/portfolio" className="text-sm font-black text-brand-green">{content.fullPortfolio} <ArrowRight className="inline" size={16}/></Link></div></Section>
    <Section eyebrow={content.processEyebrow} title={content.processTitle}><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{content.steps.map((step, index) => <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5"><span className="text-xs font-black text-brand-green">0{index + 1}</span><h2 className="mt-3 font-black text-brand-white">{step}</h2></div>)}</div></Section>
    <Section id="quote" eyebrow={content.quoteEyebrow} title={content.quoteTitle}><div className="mx-auto max-w-3xl"><ContactForm service="web" /></div></Section>
    <section className="px-5 pb-16"><div className="mx-auto max-w-7xl rounded-[2rem] border border-brand-blue/25 bg-brand-bg2 p-8 text-center"><h2 className="text-3xl font-black text-brand-white">{content.finalTitle}</h2><div className="mt-6"><WhatsAppButton message={isEs ? "Hola JEGS, quiero solicitar una cotización para diseño web." : "Hello JEGS, I would like to request a quote for web design."} ctaLocation="web_final_cta">{content.whatsapp}</WhatsAppButton></div></div></section>
  </>;
}
