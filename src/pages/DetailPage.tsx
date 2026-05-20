import { useMemo } from "react";
import { CheckCircle2, Globe2, Images, PlayCircle } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { FinalCta } from "./Home";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export function DetailPage({ type }: { type: 'web' | 'social' | 'video' }) {
  const { t } = useLanguage();

  const content = useMemo(() => {
    const map = {
      web: {
        eyebrow: t.detail.web.eyebrow,
        title: t.detail.web.title,
        subtitle: t.detail.web.subtitle,
        icon: Globe2,
        message: t.detail.web.message,
        includes: t.detail.web.includes,
        benefits: t.detail.web.benefits,
      },
      social: {
        eyebrow: t.detail.social.eyebrow,
        title: t.detail.social.title,
        subtitle: t.detail.social.subtitle,
        icon: Images,
        message: t.detail.social.message,
        includes: t.detail.social.includes,
        benefits: t.detail.social.benefits,
      },
      video: {
        eyebrow: t.detail.video.eyebrow,
        title: t.detail.video.title,
        subtitle: t.detail.video.subtitle,
        icon: PlayCircle,
        message: t.detail.video.message,
        includes: t.detail.video.includes,
        benefits: t.detail.video.benefits,
      },
    };
    return map[type];
  }, [type, t]);

  const Icon = content.icon;

  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-brand-bg2/80 p-8">
            <div className="mb-6 grid h-16 w-16 place-items-center rounded-3xl bg-brand-blue/15 text-brand-green">
              {Icon && <Icon size={30} />}
            </div>
            <h2 className="text-3xl font-black text-brand-white">{t.detail.whoIsItFor}</h2>
            <p className="mt-4 leading-8 text-brand-muted">
              {t.detail.whoIsItForDesc}
            </p>
            <motion.div 
              className="mt-7 inline-block rounded-2xl shadow-[0_0_20px_rgba(184,241,43,0.4)]"
              animate={{ boxShadow: ['0 0 20px rgba(184,241,43,0.4)', '0 0 40px rgba(184,241,43,0.8)', '0 0 20px rgba(184,241,43,0.4)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <WhatsAppButton message={content.message}>{t.detail.quoteCta}</WhatsAppButton>
            </motion.div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <ListBlock title={t.detail.whatItIncludes} items={content.includes} />
            <ListBlock title={t.detail.benefitsTitle} items={content.benefits} />
          </div>
        </div>
      </Section>
      <FinalCta />
    </>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariant = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[.035] p-7">
      <h3 className="mb-5 text-xl font-black text-brand-white">{title}</h3>
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-3">
        {items.map((item: string) => (
          <motion.div variants={itemVariant} key={item} className="flex gap-3 text-brand-muted">
            <CheckCircle2 className="mt-1 shrink-0 text-brand-green" size={18} />
            <span>{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

