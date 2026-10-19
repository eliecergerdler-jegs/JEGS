import { ShieldCheck, Rocket, Sparkles, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { FinalCta } from "./Home";
import { PortfolioGrid } from "../components/Portfolio";
import { VideoPortfolioShowcase } from "../components/VideoPortfolio";
import { ContactForm } from "../components/ContactForm";
import { trackConversion } from "../lib/analytics";
import { useLanguage } from "../contexts/useLanguage";
import { usePageMeta } from "../hooks/usePageMeta";

export function PortfolioPage() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<"all" | "web" | "video">(() => new URLSearchParams(window.location.search).get("type") === "web" ? "web" : "all");
  const isEs = language === "es";
  usePageMeta(isEs ? "Portafolio" : "Portfolio", isEs ? "Trabajos seleccionados de diseño web y edición de video de JEGS Digital." : "Selected web design and video editing work from JEGS Digital.");

  return (
    <>
      <section className="px-5 py-16 text-center md:py-24">
        <p className="text-xs font-black uppercase tracking-[.3em] text-brand-green">JEGS Digital</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-brand-white md:text-6xl">{isEs ? "Nuestro trabajo" : "Our Work"}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-muted">{isEs ? "Experiencias digitales y contenido audiovisual creados para comunicar con claridad." : "Digital experiences and audiovisual content created to communicate with clarity."}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-2" aria-label={isEs ? "Categorías del portafolio" : "Portfolio categories"}>
          {(["all", "web", "video"] as const).map(item => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={`rounded-xl px-4 py-2 text-sm font-bold transition ${filter === item ? "bg-brand-green text-brand-bg" : "border border-white/10 bg-white/5 text-brand-white"}`}>{item === "all" ? (isEs ? "Todos" : "All") : item === "web" ? (isEs ? "Diseño web" : "Web Design") : (isEs ? "Edición de video" : "Video Editing")}</button>)}
        </div>
      </section>
      {(filter === "all" || filter === "web") && <Section id="web-portfolio" eyebrow={isEs ? "Diseño web" : "Web Design"} title={isEs ? "Proyectos web" : "Web projects"} className="py-12"><PortfolioGrid /></Section>}
      {(filter === "all" || filter === "video") && <Section id="video-portfolio" eyebrow={isEs ? "Edición de video" : "Video Editing"} title={isEs ? "Proyectos de video" : "Video projects"} subtitle={isEs ? "Una selección de piezas en formatos verticales y horizontales." : "A selection of work in vertical and horizontal formats."} className="py-12"><VideoPortfolioShowcase /></Section>}
      <section className="px-5 pb-16"><div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-center sm:flex-row"><Link className="text-sm font-black text-brand-green" to="/web-design" onClick={() => trackConversion("portfolio_click", { destination: "web-design" })}>{isEs ? "Ver servicios de diseño web" : "View Web Design Services"}</Link><Link className="text-sm font-black text-brand-green" to="/video-editing" onClick={() => trackConversion("portfolio_click", { destination: "video-editing" })}>{isEs ? "Ver servicios de edición de video" : "View Video Editing Services"}</Link><Link className="text-sm font-black text-brand-green" to="/contact" onClick={() => trackConversion("portfolio_click", { destination: "contact" })}>{isEs ? "Contactar" : "Contact Us"}</Link></div></section>
    </>
  );
}

export function AboutPage() {
  const { t } = useLanguage();
  usePageMeta(t.about.title, t.about.subtitle);

  const cards = [
    { icon: ShieldCheck, title: t.about.cards.clarity.title, text: t.about.cards.clarity.text },
    { icon: Rocket, title: t.about.cards.speed.title, text: t.about.cards.speed.text },
    { icon: Sparkles, title: t.about.cards.aesthetic.title, text: t.about.cards.aesthetic.text }
  ];

  return (
    <>
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        subtitle={t.about.subtitle}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand-blue/15 text-brand-green">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-black text-brand-white">{title}</h3>
              <p className="mt-3 leading-7 text-brand-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>
      <FinalCta />
    </>
  );
}

function InstagramIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-brand-green">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function ContactPage() {
  const { t, language } = useLanguage();
  usePageMeta(t.contact.title, t.contact.subtitle);
  const whatsappMessage = encodeURIComponent(t.home.finalCta.message);

  return (
    <>
      <PageHero
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />
      <Section>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <ContactCard 
            icon={MessageCircle} 
            title={t.contact.cards.whatsapp.title} 
            text={t.contact.cards.whatsapp.text} 
            cta={t.contact.cards.whatsapp.cta} 
            href={`https://wa.me/584125738257?text=${whatsappMessage}`} 
            onClick={() => trackConversion("whatsapp_click", { cta_location: "contact_card" })}
          />
          <ContactCard 
            icon={Mail} 
            title={t.contact.cards.email.title} 
            text={t.contact.cards.email.text} 
            cta={t.contact.cards.email.cta} 
            href={`mailto:${t.contact.cards.email.text}`} 
          />
          <ContactCard 
            icon={InstagramIcon} 
            title={t.contact.cards.instagram.title} 
            text={t.contact.cards.instagram.text} 
            cta={t.contact.cards.instagram.cta} 
            href="https://www.instagram.com/jegs.digital/" 
          />
        </div>
      </Section>
      <Section id="contact-form" eyebrow="Contact" title={language === "es" ? "Cuéntanos sobre tu proyecto." : "Tell us about your project."}>
        <div className="mx-auto max-w-3xl"><ContactForm /></div>
      </Section>
    </>
  );
}

interface ContactCardProps {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  text: string;
  cta: string;
  href: string;
  onClick?: () => void;
}

function ContactCard({ icon: Icon, title, text, cta, href, onClick }: ContactCardProps) {
  const isExternal = href.startsWith("http");
  return (
    <a 
      href={href}
      onClick={onClick}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 text-center transition-colors hover:border-brand-green focus-visible:border-brand-green"
    >
      <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-brand-blue/15 text-brand-muted transition-colors group-hover:border-brand-green group-hover:text-brand-green group-focus-visible:border-brand-green group-focus-visible:text-brand-green">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-black text-brand-white">{title}</h3>
      <p className="mt-2 text-brand-muted">{text}</p>
      <p className="mt-5 inline-flex items-center gap-2 text-sm font-black text-brand-green">
        {cta} <ArrowRight size={16} />
      </p>
    </a>
  );
}
