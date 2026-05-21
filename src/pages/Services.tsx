import { MonitorSmartphone, Images, Video } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { FinalCta, ServiceCard } from "./Home";
import { useLanguage } from "../contexts/LanguageContext";

export function Services() {
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

  return (
    <>
      <PageHero
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        subtitle={t.services.subtitle}
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Section>
      <FinalCta />
    </>
  );
}

