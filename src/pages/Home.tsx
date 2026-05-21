import { ArrowRight, CheckCircle2, MonitorSmartphone, Images, Video, Sparkles, Shield, Compass, Activity, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Section } from "../components/Section";
import { BullHeroMark } from "../components/BullHeroMark";
import { ServiceIntentSelector } from "../components/ServiceIntentSelector";
import { useLanguage } from "../contexts/LanguageContext";

export function Home() {
  const { t } = useLanguage();

  const servicesData = [
    {
      icon: MonitorSmartphone,
      title: t.home.solution.cards.web.title,
      text: t.home.solution.cards.web.text,
      cta: t.home.solution.cards.web.cta,
      page: "/web",
      message: t.detail.web.message,
    },
    {
      icon: Images,
      title: t.home.solution.cards.artes.title,
      text: t.home.solution.cards.artes.text,
      cta: t.home.solution.cards.artes.cta,
      page: "/redes",
      message: t.detail.social.message,
    },
    {
      icon: Video,
      title: t.home.solution.cards.video.title,
      text: t.home.solution.cards.video.text,
      cta: t.home.solution.cards.video.cta,
      page: "/video",
      message: t.detail.video.message,
    },
  ];

  const stepsIcons = [Compass, Shield, Activity, Check];

  return (
    <>
      <Hero />

      <Section
        eyebrow={t.home.problem.eyebrow}
        title={t.home.problem.title}
        subtitle={t.home.problem.subtitle}
        className="py-12 md:py-16"
      >
        <div className="grid gap-4 md:grid-cols-5">
          {t.home.problem.cards.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-center font-bold text-brand-white text-sm sm:text-base">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <ServiceIntentSelector />

      <Section
        eyebrow={t.home.solution.eyebrow}
        title={t.home.solution.title}
        subtitle={t.home.solution.subtitle}
        className="py-12 md:py-16"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow={t.home.method.eyebrow}
        title={t.home.method.title}
        subtitle={t.home.method.subtitle}
        className="py-12 md:py-16"
      >
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.method.steps.map((step, idx) => {
            const Icon = stepsIcons[idx];
            return (
              <div 
                key={step.title} 
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-bg2/40 p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-brand-green/30 hover:bg-brand-bg2/60 group flex flex-col justify-between"
              >
                {/* Visual tech line inspired by horns/direction */}
                <div className="absolute top-0 left-0 h-1 w-12 bg-gradient-to-r from-brand-green to-transparent transition-all duration-300 group-hover:w-full" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue/10 text-brand-green">
                      {Icon && <Icon size={18} />}
                    </div>
                    <span className="text-4xl font-black text-brand-white/10 group-hover:text-brand-green/20 transition-colors select-none">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-black text-brand-white group-hover:text-brand-green transition-colors">{step.title}</h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-brand-muted/95">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section 
        eyebrow={t.home.benefits.eyebrow} 
        title={t.home.benefits.title}
        className="py-12 md:py-16"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.home.benefits.list.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-brand-white">
              <CheckCircle2 className="shrink-0 text-brand-green" size={22} />
              <span className="text-sm sm:text-base font-bold text-brand-white/90">{benefit}</span>
            </div>
          ))}
        </div>
      </Section>

      <Faq />

      {/* Manifesto Section */}
      <section className="relative px-5 py-16 md:py-24 overflow-hidden border-t border-b border-white/5 bg-[radial-gradient(circle_at_center,rgba(30,123,255,0.02)_0%,transparent_60%)]">
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-brand-green">
            {t.home.manifesto.eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-black leading-tight tracking-tight text-brand-white sm:text-3xl md:text-4xl">
            {t.home.manifesto.titleFirst}<br />
            <span className="text-brand-green">{t.home.manifesto.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-brand-muted/95">
            {t.home.manifesto.text}
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

function Hero() {
  const { language, t } = useLanguage();

  const badges = language === "es"
    ? ["Responsive", "WhatsApp", "SEO básico", "Diseño premium"]
    : ["Responsive", "WhatsApp", "Core SEO", "Premium Design"];

  return (
    <div className="relative overflow-hidden px-5 py-16 md:py-24 lg:py-28">
      {/* Background Particles for Parallax Effect */}
      <div className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-brand-green/40 blur-[1px] animate-jegs-particle-1" />
      <div className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-brand-blue/60 blur-[1px] animate-jegs-particle-2" />
      <div className="absolute bottom-1/4 left-1/3 h-4 w-4 rounded-full bg-brand-green/20 blur-[2px] animate-jegs-particle-3" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-muted">
            <Sparkles size={14} className="text-brand-green" />
            {t.home.hero.eyebrow}
          </div>
          <h1 className="max-w-4xl text-[1.85rem] min-[360px]:text-[2.15rem] min-[400px]:text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.5rem] font-black leading-[1.03] tracking-tight text-brand-white">
            {t.home.hero.titleFirst}<span className="text-brand-green">{t.home.hero.titleHighlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-brand-muted/95 md:text-xl">
            {t.home.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton>{t.home.hero.ctaWhatsApp}</WhatsAppButton>
            <Link
              to="/servicios"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-brand-white transition hover:border-brand-blue/60 hover:bg-brand-blue/10 backdrop-blur-md"
            >
              {t.home.hero.ctaServices} <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
            {badges.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-2.5 text-xs min-[390px]:text-sm min-[390px]:px-4 min-[390px]:py-3 font-semibold text-brand-white backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-brand-blue/30 hover:bg-white/10">
                {item}
              </div>
            ))}
          </div>
        </div>

        <BullHeroMark />
      </div>
    </div>
  );
}

interface ServiceType {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  text: string;
  cta: string;
  page: string;
  message: string;
}

export function ServiceCard({ service }: { service: ServiceType }) {
  const Icon = service.icon;
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] text-brand-white shadow-none transition hover:border-brand-blue/40 hover:bg-white/[0.055] p-6 md:p-8">
      <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-brand-blue/15 text-brand-green shadow-[0_0_24px_rgba(30,123,255,.16)] transition group-hover:scale-110">
        {Icon && <Icon size={26} />}
      </div>
      <h3 className="text-xl font-black">{service.title}</h3>
      <p className="mt-3 min-h-[90px] text-sm sm:text-base leading-relaxed text-brand-muted/95">{service.text}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
        <WhatsAppButton message={service.message}>{service.cta}</WhatsAppButton>
        <Link
          to={service.page}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-brand-white transition hover:border-brand-blue/50 hover:bg-brand-blue/10"
        >
          {useLanguage().language === "es" ? "Ver más" : "Learn more"} <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export function PortfolioPreview() {
  const { language } = useLanguage();
  const portfolio = language === "es"

    ? [
        { tag: "Website", title: "Landing para negocio local", desc: "Estructura clara, CTA a WhatsApp y diseño responsive." },
        { tag: "Social Media", title: "Campaña visual para Instagram", desc: "Posts, historias y carrusel con línea gráfica consistente." },
        { tag: "Video", title: "Reel promocional dinámico", desc: "Edición vertical con subtítulos, ritmo y textos animados." },
      ]
    : [
        { tag: "Website", title: "Local Business Landing Page", desc: "Clear structure, WhatsApp CTA, and fully responsive layout." },
        { tag: "Social Media", title: "Instagram Visual Campaign", desc: "Cohesive visual feed, story pack, and promo carousels." },
        { tag: "Video", title: "High-Energy Promo Reel", desc: "Vertical short-form video editing with captions, music, and animated text hooks." },
      ];

  return (
    <Section 
      eyebrow={language === "es" ? "Portafolio" : "Portfolio"} 
      title={language === "es" ? "Mira cómo puede verse tu marca en digital." : "See how your brand can look online."} 
      subtitle={language === "es" ? "Pocos proyectos, bien presentados. Esa es la jugada correcta al inicio: calidad visual antes que cantidad." : "Few projects, perfectly delivered. Quality over quantity, always."}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {portfolio.map((item) => (
          <div 
            key={item.title} 
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-blue/20"
          >
            <div className="h-48 relative overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(184,241,43,.22),transparent_30%),radial-gradient(circle_at_75%_70%,rgba(30,123,255,.32),transparent_38%),#081225]">
               <div className="absolute inset-0 bg-brand-bg/10 backdrop-blur-sm transition-all group-hover:backdrop-blur-none" />
            </div>
            <div className="relative p-6 bg-brand-bg2/50 backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-green">{item.tag}</p>
              <h3 className="mt-3 text-xl font-black text-brand-white">{item.title}</h3>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-brand-muted/95">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Faq() {
  const { t } = useLanguage();
  return (
    <Section eyebrow={t.home.faq.eyebrow} title={t.home.faq.title} className="py-12 md:py-16">
      <div className="mx-auto grid max-w-4xl gap-6 md:gap-7">
        {t.home.faq.items.map((item) => (
          <div key={item.q} className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 md:p-8">
            <h3 className="text-lg md:text-xl font-black text-brand-white">{item.q}</h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-brand-muted/95">{item.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function FinalCta() {
  const { t } = useLanguage();
  return (
    <section className="px-5 py-12 md:py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-brand-blue/25 bg-brand-bg2 p-8 text-center md:p-14">
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-blue/20 blur-[100px]" />
          <div className="absolute right-[-100px] top-80 h-80 w-80 rounded-full bg-brand-green/10 blur-[110px]" />
        </div>
        <div className="relative mx-auto max-w-3xl z-10">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.32em] text-brand-green">{t.home.finalCta.eyebrow}</p>
          <h2 className="text-3xl font-black tracking-tight text-brand-white md:text-5xl">{t.home.finalCta.title}</h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-brand-muted max-w-2xl mx-auto">
            {t.home.finalCta.subtitle}
          </p>
          <div className="mt-8">
            <WhatsAppButton message={t.home.finalCta.message}>{t.home.finalCta.btn}</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}

