import { ShieldCheck, Rocket, Sparkles, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { FinalCta } from "./Home";
import { PortfolioGrid, WebPortfolioHero } from "../components/Portfolio";
import { useLanguage } from "../contexts/useLanguage";
import { usePageMeta } from "../hooks/usePageMeta";

export function PortfolioPage() {
  const { t } = useLanguage();

  usePageMeta(t.portfolioPage.metaTitle, t.portfolioPage.metaDescription);

  return (
    <>
      <WebPortfolioHero />
      <Section
        id="web-portfolio"
        eyebrow={t.portfolioPage.portfolio.eyebrow}
        title={t.portfolioPage.portfolio.title}
        subtitle={t.portfolioPage.portfolio.subtitle}
        className="pb-16 pt-10 md:pb-24 md:pt-14"
      >
        <PortfolioGrid />
      </Section>
      <FinalCta />
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
  const { t } = useLanguage();
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
    </>
  );
}

import { motion } from "framer-motion";

interface ContactCardProps {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  text: string;
  cta: string;
  href: string;
}

function ContactCard({ icon: Icon, title, text, cta, href }: ContactCardProps) {
  const isExternal = href.startsWith("http");
  return (
    <a 
      href={href} 
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 text-center transition hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-blue/20 hover:border-brand-blue/50 hover:bg-white/[0.055]"
    >
      <motion.div 
        className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-brand-blue/15 text-brand-green shadow-lg"
        whileHover={{ rotateY: 180, scale: 1.1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <Icon size={24} />
      </motion.div>
      <h3 className="text-xl font-black text-brand-white">{title}</h3>
      <p className="mt-2 text-brand-muted">{text}</p>
      <p className="mt-5 inline-flex items-center gap-2 text-sm font-black text-brand-green transition-transform group-hover:translate-x-1">
        {cta} <ArrowRight size={16} />
      </p>
    </a>
  );
}
