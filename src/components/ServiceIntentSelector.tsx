import { useState } from "react";
import { motion } from "framer-motion";
import { WhatsAppButton } from "./WhatsAppButton";
import { MonitorSmartphone, Images, Video, Sparkles, Check } from "lucide-react";

interface OptionType {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
  message: string;
}

const options: OptionType[] = [
  {
    id: "web",
    icon: MonitorSmartphone,
    title: "Web profesional",
    desc: "Diseño moderno y listo para captar clientes.",
    message: "Hola JEGS, quiero cotizar una web profesional para mi negocio.",
  },
  {
    id: "artes",
    icon: Images,
    title: "Artes para redes",
    desc: "Contenido visual alineado a tu marca.",
    message: "Hola JEGS, quiero cotizar artes para redes sociales.",
  },
  {
    id: "videos",
    icon: Video,
    title: "Videos para redes",
    desc: "Edición dinámica, reels y shorts con gancho.",
    message: "Hola JEGS, quiero cotizar edición de videos para redes.",
  },
  {
    id: "completa",
    icon: Sparkles,
    title: "Presencia completa",
    desc: "Web, piezas visuales y video estratégico.",
    message: "Hola JEGS, quiero mejorar la presencia digital de mi negocio. Me interesa una solución completa.",
  },
];

export function ServiceIntentSelector() {
  const [selected, setSelected] = useState<string>("web");

  const activeOption = options.find((opt) => opt.id === selected) || options[0];

  return (
    <section className="relative px-5 py-10 md:py-16 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 h-48 w-48 -translate-y-1/2 rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 h-48 w-48 -translate-y-1/2 rounded-full bg-brand-green/5 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.32em] text-brand-green">
          Elige tu impulso digital
        </p>
        <h2 className="mt-3 text-2xl font-black tracking-tight text-brand-white md:text-[2.5rem] leading-tight">
          ¿Qué necesita tu negocio ahora?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-brand-muted">
          Selecciona la prioridad actual de tu marca. Te preparamos el mensaje de WhatsApp para iniciar la conversación directo al grano.
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
              Mensaje listo para enviar:
            </p>
            <p className="mt-1 text-sm font-medium text-brand-green italic">
              "{activeOption.message}"
            </p>
          </div>
          
          <WhatsAppButton
            message={activeOption.message}
            className="w-full sm:w-auto px-6 py-3 text-sm shadow-[0_0_20px_rgba(184,241,43,0.25)] shrink-0"
          >
            Continuar por WhatsApp
          </WhatsAppButton>
        </motion.div>
      </div>
    </section>
  );
}
