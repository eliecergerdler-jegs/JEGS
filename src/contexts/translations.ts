import { es } from "../i18n/es";
import { en } from "../i18n/en";

export interface TranslationSchema {
  common: {
    whatsappBtn: string;
    whatsappFloat: string;
    whatsappFloatLabel: string;
    whatsappHeader: string;
    viewProject: string;
  };
  header: {
    nav: {
      home: string;
      services: string;
      about: string;
      contact: string;
    };
  };
  home: {
    hero: {
      eyebrow: string;
      titleFirst: string;
      titleHighlight: string;
      subtitle: string;
      ctaWhatsApp: string;
      ctaServices: string;
    };
    problem: {
      eyebrow: string;
      title: string;
      subtitle: string;
      cards: string[];
    };
    selector: {
      eyebrow: string;
      title: string;
      subtitle: string;
      options: {
        web: { title: string; desc: string; message: string };
        artes: { title: string; desc: string; message: string };
        videos: { title: string; desc: string; message: string };
        completa: { title: string; desc: string; message: string };
      };
      dynamicLabel: string;
      whatsappCta: string;
    };
    solution: {
      eyebrow: string;
      title: string;
      subtitle: string;
      cards: {
        web: { title: string; text: string; cta: string };
        artes: { title: string; text: string; cta: string };
        video: { title: string; text: string; cta: string };
      };
    };
    method: {
      eyebrow: string;
      title: string;
      subtitle: string;
      steps: {
        num: string;
        title: string;
        text: string;
      }[];
    };
    benefits: {
      eyebrow: string;
      title: string;
      list: string[];
    };
    faq: {
      eyebrow: string;
      title: string;
      items: { q: string; a: string }[];
    };
    manifesto: {
      eyebrow: string;
      titleFirst: string;
      titleHighlight: string;
      text: string;
    };
    finalCta: {
      eyebrow: string;
      title: string;
      subtitle: string;
      btn: string;
      message: string;
    };
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: {
      clarity: { title: string; text: string };
      speed: { title: string; text: string };
      aesthetic: { title: string; text: string };
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: {
      whatsapp: { title: string; text: string; cta: string };
      email: { title: string; text: string; cta: string };
      instagram: { title: string; text: string; cta: string };
    };
  };
  detail: {
    whoIsItFor: string;
    whoIsItForDesc: string;
    quoteCta: string;
    whatItIncludes: string;
    benefitsTitle: string;
    web: {
      eyebrow: string;
      title: string;
      subtitle: string;
      message: string;
      includes: string[];
      benefits: string[];
    };
    social: {
      eyebrow: string;
      title: string;
      subtitle: string;
      message: string;
      includes: string[];
      benefits: string[];
    };
    video: {
      eyebrow: string;
      title: string;
      subtitle: string;
      message: string;
      includes: string[];
      benefits: string[];
    };
  };
  footer: {
    logoDesc: string;
    contactTitle: string;
    rights: string;
  };
}

export const translations: Record<'es' | 'en', TranslationSchema> = {
  es,
  en,
};
