import { MonitorSmartphone, Images, Video } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { FinalCta, ServiceCard } from "./Home";

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

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Servicios digitales para que tu negocio se vea, conecte y venda mejor."
        subtitle="Websites, piezas para redes y videos cortos con estética moderna, clara y orientada a captar clientes."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
