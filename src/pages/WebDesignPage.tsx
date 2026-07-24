import { ArrowRight, CheckCircle2, Code2, LayoutTemplate, Smartphone, Store } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm";
import { PortfolioGrid } from "../components/Portfolio";
import { Section } from "../components/Section";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { portfolioProjects } from "../data/portfolio";
import { usePageMeta } from "../hooks/usePageMeta";
import { trackConversion } from "../lib/analytics";

const services: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: LayoutTemplate, title: "Business Websites", text: "Clear, professional sites built around your services and contact flow." },
  { icon: Code2, title: "Landing Pages", text: "Focused pages for a campaign, offer or next step." },
  { icon: Store, title: "E-commerce", text: "Product-led website experiences for online catalogs and stores." },
  { icon: Smartphone, title: "Mobile Optimization", text: "Responsive interfaces designed to work smoothly on smaller screens." },
];

export function WebDesignPage() {
  usePageMeta("Web Design & Development", "Modern, fast and conversion-focused website design and development for businesses that want to grow.");
  return <>
    <section className="relative overflow-hidden px-5 py-16 md:py-24"><div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr]"><div><p className="text-xs font-black uppercase tracking-[.28em] text-brand-green">Web Design / Development</p><h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight text-brand-white md:text-6xl">Websites built to turn visitors into customers.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted">Modern, fast and conversion-focused websites for businesses that want to grow.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#quote" onClick={() => trackConversion("quote_cta_click", { service: "web", cta_location: "hero" })} className="inline-flex justify-center rounded-2xl bg-brand-green px-5 py-3 text-sm font-black text-brand-bg">Request a Quote</a><Link to="/portfolio" onClick={() => trackConversion("portfolio_click", { destination: "portfolio", cta_location: "web_hero" })} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-brand-white">View Our Work <ArrowRight size={16}/></Link></div></div><div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7"><p className="text-sm font-bold text-brand-green">Designed for clarity, trust and action.</p><div className="mt-6 grid gap-3">{["Clear communication", "Responsive layouts", "Contact-ready journeys"].map(item => <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-brand-white"><CheckCircle2 className="text-brand-green" size={20}/>{item}</div>)}</div></div></div></section>
    <Section eyebrow="A website should do more" title="More than a good-looking page." subtitle="Your website should communicate clearly, load efficiently, work on mobile and make it easy for a potential customer to contact you."><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6"><Icon className="text-brand-green"/><h2 className="mt-5 text-xl font-black text-brand-white">{title}</h2><p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p></article>)}</div></Section>
    <Section eyebrow="Selected web work" title="Relevant projects, built for different businesses." subtitle="A small selection from the web portfolio."><PortfolioGrid projects={portfolioProjects.slice(0, 3)} /><div className="mt-9 text-center"><Link to="/portfolio" className="text-sm font-black text-brand-green">View Full Portfolio <ArrowRight className="inline" size={16}/></Link></div></Section>
    <Section eyebrow="Our process" title="A focused path from first conversation to launch."><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{["Discovery", "Strategy and Design", "Development", "Review", "Launch"].map((step, index) => <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5"><span className="text-xs font-black text-brand-green">0{index + 1}</span><h2 className="mt-3 font-black text-brand-white">{step}</h2></div>)}</div></Section>
    <Section id="quote" eyebrow="Start your project" title="Tell us what your website needs."><div className="mx-auto max-w-3xl"><ContactForm service="web" /></div></Section>
    <section className="px-5 pb-16"><div className="mx-auto max-w-7xl rounded-[2rem] border border-brand-blue/25 bg-brand-bg2 p-8 text-center"><h2 className="text-3xl font-black text-brand-white">Ready to talk about your website?</h2><div className="mt-6"><WhatsAppButton message="Hello JEGS, I would like to request a quote for web design." ctaLocation="web_final_cta">Chat on WhatsApp</WhatsAppButton></div></div></section>
  </>;
}
