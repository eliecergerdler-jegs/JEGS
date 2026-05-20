import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MonitorSmartphone, Images, Video, Sparkles, Target, Layers3, Rocket, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Section } from "../components/Section";
import logoSvg from "../assets/Imagenes/JEGS_Logo_SVG1.svg";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Diseño Web Profesional",
    text: "Landing pages, webs corporativas y sitios responsive para presentar tu negocio y captar clientes.",
    cta: "Cotizar web",
    page: "/web",
    message: "Hola JEGS, quiero cotizar una página web para mi negocio.",
  },
  {
    icon: Images,
    title: "Artes para Redes Sociales",
    text: "Posts, historias, carruseles y promociones para que tu marca mantenga una imagen constante y profesional.",
    cta: "Cotizar artes",
    page: "/redes",
    message: "Hola JEGS, quiero cotizar artes para redes sociales.",
  },
  {
    icon: Video,
    title: "Edición de Videos para Redes",
    text: "Reels, shorts, subtítulos y videos dinámicos para comunicar mejor y captar atención.",
    cta: "Cotizar video",
    page: "/video",
    message: "Hola JEGS, quiero cotizar edición de videos para redes.",
  },
];

const benefits = [
  "Imagen más profesional",
  "Comunicación más clara",
  "Diseño adaptable a móvil",
  "Contacto directo por WhatsApp",
  "Presencia digital más seria",
  "Contenido visual alineado a tu marca",
];

const caminos = [
  {
    title: "Web Profesional",
    text: "Para negocios que necesitan una página clara, moderna y lista para recibir clientes por WhatsApp.",
    bullets: [
      "Landing page o web corporativa",
      "Diseño responsive",
      "CTA directo a WhatsApp",
      "SEO básico"
    ],
    cta: "Cotizar web",
    message: "Hola JEGS, quiero cotizar una web profesional para mi negocio."
  },
  {
    title: "Contenido para Redes",
    text: "Para marcas que necesitan posts, historias y carruseles con una línea visual más profesional.",
    bullets: [
      "Posts para Instagram",
      "Historias y promociones",
      "Carruseles",
      "Adaptación a tu marca"
    ],
    cta: "Cotizar contenido",
    message: "Hola JEGS, quiero cotizar contenido visual para redes sociales."
  },
  {
    title: "Video para Redes",
    text: "Para negocios que quieren captar atención con reels, shorts y videos promocionales.",
    bullets: [
      "Reels y shorts",
      "Subtítulos",
      "Cortes dinámicos",
      "Formato vertical"
    ],
    cta: "Cotizar video",
    message: "Hola JEGS, quiero cotizar edición de videos para redes."
  }
];

const pasosTrabajo = [
  {
    num: "01",
    title: "Diagnóstico rápido",
    text: "Revisamos tu negocio, objetivo, cliente ideal y lo que necesitas comunicar."
  },
  {
    num: "02",
    title: "Propuesta clara",
    text: "Definimos alcance, entregables, estilo visual y prioridad del proyecto."
  },
  {
    num: "03",
    title: "Diseño y desarrollo",
    text: "Creamos la web, piezas o videos con enfoque profesional y comercial."
  },
  {
    num: "04",
    title: "Entrega y ajustes",
    text: "Revisamos detalles, aplicamos ajustes y dejamos todo listo para publicar o compartir."
  }
];

export function Home() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Problema"
        title="Tu negocio puede estar perdiendo clientes por no verse profesional en digital."
        subtitle="Si tus redes no tienen una línea visual clara, no tienes una web donde presentar tus servicios o tus videos no captan atención, el cliente puede irse con otra marca que le genere más confianza."
      >
        <div className="grid gap-4 md:grid-cols-5">
          {["No tienes una web clara", "Tus redes se ven improvisadas", "Tus videos no retienen", "Tus clientes no encuentran info", "Dependes solo de Instagram"].map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/[.035] p-5 text-center font-bold text-brand-white">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Solución"
        title="JEGS convierte tu presencia digital en una experiencia clara, moderna y lista para vender."
        subtitle="No se trata de hacer algo bonito por hacerlo. La idea es que tu negocio se vea serio, explique mejor lo que ofrece y lleve al cliente al contacto."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Caminos"
        title="Elige cómo podemos ayudarte"
        subtitle="Tres caminos simples para mejorar cómo se ve, comunica y vende tu negocio en digital."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {caminos.map((camino) => (
            <div 
              key={camino.title} 
              className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035] p-7 text-brand-white shadow-none transition hover:border-brand-blue/40 hover:bg-white/[.055]"
            >
              <div>
                <h3 className="text-2xl font-black text-brand-white group-hover:text-brand-green transition-colors">{camino.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{camino.text}</p>
                <div className="my-6 border-t border-white/10" />
                <ul className="space-y-3">
                  {camino.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm font-medium text-brand-muted">
                      <CheckCircle2 className="shrink-0 text-brand-green" size={16} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <WhatsAppButton className="w-full" message={camino.message}>
                  {camino.cta}
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Proceso" title="Un proceso simple, claro y sin estrés técnico.">
        <motion.div 
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {([
            [Target, "Consulta y estrategia", "Entendemos tu negocio, cliente ideal, objetivos y lo que necesitas comunicar."],
            [Layers3, "Diseño y desarrollo", "Creamos una propuesta visual moderna, responsive y alineada a tu marca."],
            [Rocket, "Lanzamiento y soporte", "Publicamos, ajustamos y dejamos todo listo para empezar a recibir clientes."],
          ] as const).map(([Icon, title, text], index) => (
            <motion.div 
              key={title} 
              className="rounded-[2rem] border border-white/10 bg-brand-bg2/70 p-7 backdrop-blur-md transition hover:border-brand-blue/30 hover:bg-brand-bg2/90"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-blue/15 text-brand-green">
                  <Icon size={24} />
                </div>
                <span className="text-5xl font-black text-white/5">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-black text-brand-white">{title}</h3>
              <p className="mt-3 leading-7 text-brand-muted">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section eyebrow="Beneficios" title="Más que diseño: presencia digital que trabaja por tu negocio.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[.035] p-5 text-brand-white">
              <CheckCircle2 className="shrink-0 text-brand-green" size={22} />
              <span className="font-bold">{benefit}</span>
            </div>
          ))}
        </div>
      </Section>

      <PortfolioPreview />

      <Section
        eyebrow="Proceso claro"
        title="Así pasamos de idea a proyecto publicado"
        subtitle="Sin vueltas eternas: definimos lo necesario, diseñamos con intención y dejamos todo listo para que puedas usarlo."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pasosTrabajo.map((paso) => (
            <div 
              key={paso.title} 
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-bg2/70 p-7 backdrop-blur-md transition hover:border-brand-blue/30 hover:bg-brand-bg2/90"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-black uppercase tracking-[.25em] text-brand-green">Paso {paso.num}</span>
                <span className="text-4xl font-black text-white/5">{paso.num}</span>
              </div>
              <h3 className="text-lg font-black text-brand-white">{paso.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{paso.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Faq />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden px-5 py-24 md:py-32">
      {/* Background Particles for Parallax Effect */}
      <motion.div 
        className="absolute top-1/4 left-1/4 h-3 w-3 rounded-full bg-brand-green/40 blur-[1px]"
        animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-brand-blue/60 blur-[1px]"
        animate={{ y: [0, 40, 0], x: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/3 h-4 w-4 rounded-full bg-brand-green/20 blur-[2px]"
        animate={{ y: [0, -20, 0], x: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs font-bold uppercase tracking-[.22em] text-brand-muted">
            <Sparkles size={14} className="text-brand-green" />
            Web · Redes · Video
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-tight text-brand-white md:text-7xl lg:text-[5.5rem]">
            Diseño digital para negocios que quieren verse <span className="text-brand-green">más profesionales y conseguir más clientes.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted md:text-xl">
            Creamos websites, artes para redes y videos cortos para que tu marca se vea más confiable, comunique mejor y lleve al cliente directo al contacto.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton>Cotizar por WhatsApp</WhatsAppButton>
            <Link
              to="/servicios"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-brand-white transition hover:border-brand-blue/60 hover:bg-brand-blue/10 backdrop-blur-md"
            >
              Ver servicios <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
            {["Responsive", "WhatsApp", "SEO básico", "Diseño premium"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[.035] px-4 py-3 text-sm font-semibold text-brand-white backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition hover:-translate-y-1 hover:border-brand-blue/30 hover:bg-white/10">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="absolute inset-0 rounded-[2.5rem] bg-brand-blue/20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#081225]/60 p-6 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[2rem] border border-brand-blue/25 bg-brand-bg/80 backdrop-blur-md p-6">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.25em] text-brand-muted">Preview</p>
                  <img src={logoSvg} alt="JEGS Digital" className="mt-2 h-8 w-auto object-contain drop-shadow-[0_0_12px_rgba(30,123,255,.4)]" />
                </div>
                <motion.div 
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-green text-brand-bg shadow-[0_0_15px_rgba(184,241,43,0.5)]"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Zap size={22} />
                </motion.div>
              </div>
              <div className="space-y-4">
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <motion.div 
                      key={service.title} 
                      className="group rounded-3xl border border-white/10 bg-white/[.04] p-4 transition hover:bg-white/[.08] hover:border-brand-blue/40"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-blue/15 text-brand-green transition group-hover:scale-110">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-black text-brand-white">{service.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-brand-muted">{service.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
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
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035] text-brand-white shadow-none transition hover:border-brand-blue/40 hover:bg-white/[.055] p-7">
      <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-brand-blue/15 text-brand-green shadow-[0_0_24px_rgba(30,123,255,.16)] transition group-hover:scale-110">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-black">{service.title}</h3>
      <p className="mt-3 min-h-[90px] leading-7 text-brand-muted">{service.text}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
        <WhatsAppButton message={service.message}>{service.cta}</WhatsAppButton>
        <Link
          to={service.page}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-brand-white transition hover:border-brand-blue/50 hover:bg-brand-blue/10"
        >
          Ver más <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export function PortfolioPreview() {
  const portfolio = [
    { tag: "Website", title: "Landing para negocio local", desc: "Estructura clara, CTA a WhatsApp y diseño responsive." },
    { tag: "Social Media", title: "Campaña visual para Instagram", desc: "Posts, historias y carrusel con línea gráfica consistente." },
    { tag: "Video", title: "Reel promocional dinámico", desc: "Edición vertical con subtítulos, ritmo y textos animados." },
  ];

  return (
    <Section eyebrow="Portafolio" title="Mira cómo puede verse tu marca en digital." subtitle="Pocos proyectos, bien presentados. Esa es la jugada correcta al inicio: calidad visual antes que cantidad.">
      <div className="grid gap-6 md:grid-cols-3">
        {portfolio.map((item) => (
          <motion.div 
            key={item.title} 
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035] transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-48 relative overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(184,241,43,.22),transparent_30%),radial-gradient(circle_at_75%_70%,rgba(30,123,255,.32),transparent_38%),#081225]">
               <div className="absolute inset-0 bg-brand-bg/10 backdrop-blur-sm transition-all group-hover:backdrop-blur-none" />
            </div>
            <div className="relative p-6 bg-brand-bg2/50 backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-[.25em] text-brand-green">{item.tag}</p>
              <h3 className="mt-3 text-xl font-black text-brand-white">{item.title}</h3>
              <p className="mt-2 leading-7 text-brand-muted">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Faq() {
  const faqs = [
    ["¿Cuánto tarda una página web?", "Depende del alcance, pero una landing clara puede planificarse para entrega rápida si el cliente entrega contenido y referencias a tiempo."],
    ["¿Puedo pedir solo artes para redes?", "Sí. Puedes cotizar piezas sueltas o paquetes para mantener presencia visual constante."],
    ["¿Editan videos grabados por mí?", "Sí. El cliente puede enviar material grabado y JEGS lo transforma en reels, shorts o piezas promocionales."],
    ["¿Necesito dominio comprado?", "No necesariamente para empezar. Se puede orientar al cliente y luego conectar el dominio cuando esté listo."],
  ];
  return (
    <Section eyebrow="FAQ" title="Preguntas que ayudan a cerrar más rápido.">
      <div className="mx-auto grid max-w-4xl gap-4">
        {faqs.map(([q, a]) => (
          <div key={q} className="rounded-3xl border border-white/10 bg-white/[.035] p-6">
            <h3 className="font-black text-brand-white">{q}</h3>
            <p className="mt-2 leading-7 text-brand-muted">{a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section className="px-5 py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-brand-blue/25 bg-brand-bg2 p-8 text-center md:p-14">
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-blue/20 blur-[100px]" />
          <div className="absolute right-[-100px] top-80 h-80 w-80 rounded-full bg-brand-green/10 blur-[110px]" />
        </div>
        <div className="relative mx-auto max-w-3xl z-10">
          <p className="mb-3 text-xs font-black uppercase tracking-[.32em] text-brand-green">Siguiente paso</p>
          <h2 className="text-3xl font-black tracking-tight text-brand-white md:text-5xl">¿Listo para que tu negocio se vea más profesional?</h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Escríbenos por WhatsApp y cuéntanos qué necesitas: web, redes, videos o una solución completa para tu presencia digital.
          </p>
          <div className="mt-8">
            <WhatsAppButton message="Hola JEGS, quiero mejorar la presencia digital de mi negocio. Me interesa una solución completa.">Cotizar por WhatsApp</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
