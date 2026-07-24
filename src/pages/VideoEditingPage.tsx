import { ArrowRight, Clapperboard, Film, Scissors, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "../components/Section";
import { VideoHeroVisual, VideoPortfolioShowcase } from "../components/VideoPortfolio";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { useLanguage } from "../contexts/useLanguage";
import { usePageMeta } from "../hooks/usePageMeta";
import { ContactForm } from "../components/ContactForm";
import { trackConversion } from "../lib/analytics";

export function VideoEditingPage() {
  const { t } = useLanguage();

  usePageMeta(t.videoEditing.metaTitle, t.videoEditing.metaDescription);

  return (
    <>
      <section className="relative overflow-hidden px-5 py-16 md:py-24">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.92fr_.08fr_1fr]">
          <div className="min-w-0 lg:col-span-2">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-muted">
              <Sparkles size={14} className="text-brand-green" aria-hidden="true" />
              {t.videoEditing.hero.eyebrow}
            </div>
            <h1 className="max-w-full overflow-wrap-anywhere text-[2.05rem] font-black leading-[1.04] tracking-tight text-brand-white sm:max-w-4xl sm:text-5xl md:text-6xl">
              {t.videoEditing.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted/95 md:text-xl">
              {t.videoEditing.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message={t.videoEditing.hero.message} ctaLocation="video_hero" className="w-full sm:w-auto">{t.videoEditing.hero.cta}</WhatsAppButton>
              <Link
                to="/portfolio"
                onClick={() => trackConversion("portfolio_click", { destination: "portfolio", cta_location: "video_hero" })}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-brand-white backdrop-blur-md transition hover:border-brand-blue/60 hover:bg-brand-blue/10 sm:w-auto"
              >
                {t.videoEditing.hero.secondaryCta}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <VideoHeroVisual />
        </div>
      </section>

      <Section
        eyebrow={t.videoEditing.process.eyebrow}
        title={t.videoEditing.process.title}
        subtitle={t.videoEditing.process.subtitle}
        className="py-12 md:py-16"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Clapperboard, title: t.videoEditing.process.cards.idea.title, text: t.videoEditing.process.cards.idea.text },
            { icon: Scissors, title: t.videoEditing.process.cards.edit.title, text: t.videoEditing.process.cards.edit.text },
            { icon: Film, title: t.videoEditing.process.cards.delivery.title, text: t.videoEditing.process.cards.delivery.text },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition hover:border-brand-green/25 hover:bg-white/[0.05]">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand-blue/15 text-brand-green">
                <Icon size={23} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-brand-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-muted/95 sm:text-base">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="video-editing-portfolio-showcase"
        eyebrow={t.videoEditing.portfolio.eyebrow}
        title={t.videoEditing.portfolio.title}
        subtitle={t.videoEditing.portfolio.subtitle}
        className="py-12 md:py-16 bg-[radial-gradient(circle_at_center,rgba(30,123,255,0.025)_0%,transparent_62%)]"
      >
        <VideoPortfolioShowcase />
        <div className="mt-9 text-center"><Link to="/portfolio" className="text-sm font-black text-brand-green">View Full Portfolio <ArrowRight className="inline" size={16} /></Link></div>
      </Section>

      <Section eyebrow="Video editing" title="What the work can include." subtitle="Each project starts from the footage and objective available, then is shaped for its intended format.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Social Media Videos", "Real Estate Videos", "Promotional Videos", "Motion Design", "Brand Storytelling", "Vertical and horizontal formats"].map((item) => <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-sm font-bold text-brand-white">{item}</div>)}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="A few useful details before we start.">
        <div className="mx-auto grid max-w-4xl gap-4">
          {[
            ["What footage can I send?", "Share the footage you have along with the message and publishing channel you need."],
            ["Can a video be vertical or horizontal?", "Yes. The portfolio includes both formats and each project can be prepared for its intended placement."],
            ["How are revisions handled?", "Review needs are defined together with the scope before production begins."],
            ["Can you add subtitles or music?", "Tell us what your project needs so it can be considered in the proposed scope."],
          ].map(([question, answer]) => <article key={question} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"><h3 className="font-black text-brand-white">{question}</h3><p className="mt-3 text-sm leading-6 text-brand-muted">{answer}</p></article>)}
        </div>
      </Section>

      <Section id="video-quote" eyebrow="Start a video project" title="Tell us what you need to communicate.">
        <div className="mx-auto max-w-3xl"><ContactForm service="video" videoFields /></div>
      </Section>

      <section className="px-5 py-12 md:py-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-brand-blue/25 bg-brand-bg2 p-8 text-center md:p-14">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-blue/20 blur-[100px]" />
            <div className="absolute right-[-100px] top-80 h-80 w-80 rounded-full bg-brand-green/10 blur-[110px]" />
          </div>
          <div className="relative mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.32em] text-brand-green">{t.videoEditing.finalCta.eyebrow}</p>
            <h2 className="text-3xl font-black tracking-tight text-brand-white md:text-5xl">{t.videoEditing.finalCta.title}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-brand-muted sm:text-base">
              {t.videoEditing.finalCta.subtitle}
            </p>
            <div className="mt-8">
              <WhatsAppButton message={t.videoEditing.finalCta.message} ctaLocation="video_final_cta">{t.videoEditing.finalCta.btn}</WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
