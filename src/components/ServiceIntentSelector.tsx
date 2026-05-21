import { useState } from "react";
import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { MonitorSmartphone, Images, Video, Sparkles, Check } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface OptionType {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
  message: string;
}

export function ServiceIntentSelector() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<string>("web");

  const options: OptionType[] = [
    {
      id: "web",
      icon: MonitorSmartphone,
      title: t.home.selector.options.web.title,
      desc: t.home.selector.options.web.desc,
      message: t.home.selector.options.web.message,
    },
    {
      id: "artes",
      icon: Images,
      title: t.home.selector.options.artes.title,
      desc: t.home.selector.options.artes.desc,
      message: t.home.selector.options.artes.message,
    },
    {
      id: "videos",
      icon: Video,
      title: t.home.selector.options.videos.title,
      desc: t.home.selector.options.videos.desc,
      message: t.home.selector.options.videos.message,
    },
    {
      id: "completa",
      icon: Sparkles,
      title: t.home.selector.options.completa.title,
      desc: t.home.selector.options.completa.desc,
      message: t.home.selector.options.completa.message,
    },
  ];

  const activeOption = options.find((opt) => opt.id === selected) || options[0];

  return (
    <section className="relative px-5 py-10 md:py-16 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 h-48 w-48 -translate-y-1/2 rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 h-48 w-48 -translate-y-1/2 rounded-full bg-brand-green/5 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.32em] text-brand-green">
          {t.home.selector.eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-black tracking-tight text-brand-white md:text-[2.5rem] leading-tight">
          {t.home.selector.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-brand-muted">
          {t.home.selector.subtitle}
        </p>

        {/* Grid of Compact Options */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selected === opt.id;

            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                aria-pressed={isSelected}
                aria-label={`Seleccionar servicio: ${opt.title}`}
                className={`group relative flex flex-col justify-between rounded-2xl border p-5 text-left transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-brand-green bg-white/[0.05] shadow-[0_0_24px_rgba(184,241,43,0.1)] scale-[1.01]"
                    : "border-white/10 bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.035]"
                }`}
              >
                <div>
                  {/* Select indicator */}
                  <div
                    className={`absolute top-4 right-4 flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
                      isSelected
                        ? "border-brand-green bg-brand-green text-brand-bg scale-100"
                        : "border-white/20 bg-transparent scale-90 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <Check size={10} strokeWidth={3} />
                  </div>

                  {/* Icon */}
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-xl transition-all duration-300 ${
                      isSelected
                        ? "bg-brand-green text-brand-bg shadow-[0_0_12px_rgba(184,241,43,0.25)]"
                        : "bg-white/5 text-brand-white group-hover:bg-brand-blue/15 group-hover:text-brand-green"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 text-base font-black text-brand-white">
                    {opt.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">
                    {opt.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic CTA Area (Compact) */}
        <motion.div
          key={activeOption.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/5 bg-brand-bg2/40 px-6 py-5 backdrop-blur-md max-w-2xl mx-auto text-left"
        >
          <div className="flex-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">
              {t.home.selector.dynamicLabel}
            </p>
            <p className="mt-1 text-sm font-medium text-brand-green italic">
              "{activeOption.message}"
            </p>
          </div>
          
          <WhatsAppButton
            message={activeOption.message}
            className="w-full sm:w-auto px-6 py-3 text-sm shadow-[0_0_20px_rgba(184,241,43,0.25)] shrink-0"
          >
            {t.home.selector.whatsappCta}
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
}

