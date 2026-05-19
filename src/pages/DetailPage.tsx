import { useMemo } from "react";
import { CheckCircle2, Globe2, Images, PlayCircle } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { FinalCta } from "./Home";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { motion } from "framer-motion";

export function DetailPage({ type }: { type: 'web' | 'social' | 'video' }) {
  const content = useMemo(() => {
    const map = {
      web: {
        eyebrow: "Diseño Web",
        title: "Tu web profesional, rápida y lista para captar clientes.",
        subtitle: "Diseñamos sitios web modernos y responsive para que tu negocio tenga una presencia digital seria, clara y fácil de contactar.",
        icon: Globe2,
        message: "Hola JEGS, quiero cotizar una página web para mi negocio.",
        includes: ["Landing page", "Sitio corporativo", "Páginas internas", "Sección de servicios", "Portafolio", "Botones a WhatsApp", "Formulario opcional", "SEO básico"],
        benefits: ["Tu negocio se ve más serio", "Tienes un canal propio", "Tus clientes encuentran información clara", "Puedes compartir tu web por WhatsApp o Instagram", "Mejoras la confianza antes de vender"],
      },
      social: {
        eyebrow: "Redes Sociales",
        title: "Artes para redes que hacen que tu marca se vea más profesional y constante.",
        subtitle: "Diseñamos posts, historias, carruseles y promociones alineadas a tu identidad visual para que tu negocio comunique mejor.",
        icon: Images,
        message: "Hola JEGS, quiero cotizar artes para redes sociales.",
        includes: ["Posts estáticos", "Historias", "Carruseles", "Promociones", "Anuncios", "Plantillas visuales", "Adaptaciones de marca", "Piezas para campañas"],
        benefits: ["Más coherencia visual", "Mejor presentación de ofertas", "Mayor percepción profesional", "Comunicación más clara", "Más facilidad para mantener presencia activa"],
      },
      video: {
        eyebrow: "Video para Redes",
        title: "Videos cortos, dinámicos y listos para captar atención en redes.",
        subtitle: "Editamos reels, shorts y videos promocionales con ritmo, subtítulos y estilo visual para que tu contenido se vea más profesional.",
        icon: PlayCircle,
        message: "Hola JEGS, quiero cotizar edición de videos para redes.",
        includes: ["Reels", "TikToks", "YouTube Shorts", "Videos promocionales", "Subtítulos", "Cortes dinámicos", "Textos animados", "Adaptación por formato"],
        benefits: ["Mejor retención de atención", "Contenido más profesional", "Mayor claridad del mensaje", "Más facilidad para publicar", "Adaptación a formatos actuales"],
      },
    };
    return map[type];
  }, [type]);

  const Icon = content.icon;

  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-brand-bg2/80 p-8">
            <div className="mb-6 grid h-16 w-16 place-items-center rounded-3xl bg-brand-blue/15 text-brand-green">
              <Icon size={30} />
            </div>
            <h2 className="text-3xl font-black text-brand-white">Para quién es</h2>
            <p className="mt-4 leading-8 text-brand-muted">
              Emprendedores, negocios locales, marcas personales, tiendas, profesionales independientes y empresas que quieren verse más serios, modernos y confiables en digital.
            </p>
            <motion.div 
              className="mt-7 inline-block rounded-2xl shadow-[0_0_20px_rgba(184,241,43,0.4)]"
              animate={{ boxShadow: ['0 0 20px rgba(184,241,43,0.4)', '0 0 40px rgba(184,241,43,0.8)', '0 0 20px rgba(184,241,43,0.4)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <WhatsAppButton>Cotizar este servicio</WhatsAppButton>
            </motion.div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <ListBlock title="Qué puede incluir" items={content.includes} />
            <ListBlock title="Beneficios" items={content.benefits} />
          </div>
        </div>
      </Section>
      <FinalCta />
    </>
  );
}

function ListBlock({ title, items }: any) {
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
