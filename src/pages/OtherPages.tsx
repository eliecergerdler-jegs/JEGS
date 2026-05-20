import { ShieldCheck, Rocket, Sparkles, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { FinalCta, PortfolioPreview } from "./Home";

export function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portafolio"
        title="Proyectos visuales para marcas que quieren destacar."
        subtitle="Una muestra de websites, artes para redes, videos y piezas digitales creadas para comunicar con más claridad y presencia."
      />
      <PortfolioPreview />
      <FinalCta />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre JEGS"
        title="Diseño digital con estrategia, estética y enfoque comercial."
        subtitle="JEGS Digital ayuda a emprendedores, negocios, marcas personales y empresas a construir una presencia digital más seria, moderna y efectiva."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {([
            [ShieldCheck, "Claridad", "Diseño y mensajes fáciles de entender para que el cliente sepa qué haces y cómo contactarte."],
            [Rocket, "Velocidad", "Procesos prácticos para avanzar sin vueltas eternas ni complicaciones técnicas innecesarias."],
            [Sparkles, "Estética potente", "Una línea visual moderna, tecnológica y diferenciada sin sacrificar legibilidad ni conversión."],
          ] as const).map(([Icon, title, text]) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[.035] p-7">
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
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cuéntanos qué necesitas y te orientamos por WhatsApp."
        subtitle="Puedes escribir para cotizar una web, artes para redes, edición de videos o una solución completa para mejorar tu presencia digital."
      />
      <Section>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <ContactCard icon={MessageCircle} title="WhatsApp" text="+58 412 573 8257" cta="Hablar ahora" href="https://wa.me/584125738257?text=Hola%20JEGS%2C%20quiero%20informaci%C3%B3n%20sobre%20tus%20servicios%20digitales." />
          <ContactCard icon={Mail} title="Email" text="ejgerdler@gmail.com" cta="Enviar correo" href="mailto:ejgerdler@gmail.com" />
          <ContactCard icon={InstagramIcon} title="Instagram" text="@jegs.digital" cta="Ver perfil" href="https://www.instagram.com/jegs.digital/" />
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
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group rounded-[2rem] border border-white/10 bg-white/[.035] p-7 text-center transition hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-blue/20 hover:border-brand-blue/50 hover:bg-white/[.055]">
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
