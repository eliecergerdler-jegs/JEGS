export interface TranslationSchema {
  common: {
    whatsappBtn: string;
    whatsappFloat: string;
    whatsappFloatLabel: string;
    whatsappHeader: string;
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
  es: {
    common: {
      whatsappBtn: "Cotizar por WhatsApp",
      whatsappFloat: "Hablar por WhatsApp",
      whatsappFloatLabel: "Hablar por WhatsApp",
      whatsappHeader: "WhatsApp",
    },
    header: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        about: "Sobre JEGS",
        contact: "Contacto",
      },
    },
    home: {
      hero: {
        eyebrow: "Web · Redes · Video",
        titleFirst: "Fuerza digital para negocios que quieren ",
        titleHighlight: "verse profesionales y conseguir clientes.",
        subtitle: "Creamos websites, artes para redes y videos cortos para que tu marca se vea más confiable, comunique mejor y lleve al cliente directo al contacto.",
        ctaWhatsApp: "Cotizar por WhatsApp",
        ctaServices: "Ver servicios",
      },
      problem: {
        eyebrow: "Problema",
        title: "Tu negocio puede estar perdiendo clientes por no verse profesional en digital.",
        subtitle: "Si tus redes no tienen una línea visual clara, no tienes una web donde presentar tus servicios o tus videos no captan atención, el cliente puede irse con otra marca que le genere más confianza.",
        cards: [
          "No tienes una web clara",
          "Tus redes se ven improvisadas",
          "Tus videos no retienen",
          "Tus clientes no encuentran info",
          "Dependes solo de Instagram",
        ],
      },
      selector: {
        eyebrow: "Elige tu impulso digital",
        title: "¿Qué necesita tu negocio ahora?",
        subtitle: "Selecciona la prioridad actual de tu marca. Te preparamos el mensaje de WhatsApp para iniciar la conversación directo al grano.",
        options: {
          web: {
            title: "Web profesional",
            desc: "Diseño moderno y listo para captar clientes.",
            message: "Hola JEGS, quiero cotizar una web profesional para mi negocio.",
          },
          artes: {
            title: "Artes para redes",
            desc: "Contenido visual alineado a tu marca.",
            message: "Hola JEGS, quiero cotizar artes para redes sociales.",
          },
          videos: {
            title: "Videos para redes",
            desc: "Edición dinámica, reels y shorts con gancho.",
            message: "Hola JEGS, quiero cotizar edición de videos para redes.",
          },
          completa: {
            title: "Presencia completa",
            desc: "Web, piezas visuales y video estratégico.",
            message: "Hola JEGS, quiero mejorar la presencia digital de mi negocio. Me interesa una solución completa.",
          },
        },
        dynamicLabel: "Mensaje listo para enviar:",
        whatsappCta: "Continuar por WhatsApp",
      },
      solution: {
        eyebrow: "Solución",
        title: "JEGS convierte tu presencia digital en una experiencia clara, moderna y lista para vender.",
        subtitle: "No se trata de hacer algo bonito por hacerlo. La idea es que tu negocio se vea serio, explique mejor lo que ofrece y lleve al cliente al contacto.",
        cards: {
          web: {
            title: "Diseño Web Profesional",
            text: "Landing pages, webs corporativas y sitios responsive para presentar tu negocio y captar clientes.",
            cta: "Cotizar web",
          },
          artes: {
            title: "Artes para Redes Sociales",
            text: "Posts, historias, carruseles y promociones para que tu marca mantenga una imagen constante y profesional.",
            cta: "Cotizar artes",
          },
          video: {
            title: "Edición de Videos para Redes",
            text: "Reels, shorts, subtítulos y videos dinámicos para comunicar mejor y captar atención.",
            cta: "Cotizar video",
          },
        },
      },
      method: {
        eyebrow: "JEGS Bull Method",
        title: "Fuerza visual, dirección clara y acción comercial.",
        subtitle: "Nuestro proceso combina estrategia, diseño y contenido para que tu marca no solo se vea mejor, sino que comunique con más intención.",
        steps: [
          {
            num: "01",
            title: "Dirección",
            text: "Entendemos qué vende tu negocio, a quién le habla y qué debe comunicar para generar confianza.",
          },
          {
            num: "02",
            title: "Presencia",
            text: "Diseñamos una imagen digital clara, moderna y consistente en web, redes o video.",
          },
          {
            num: "03",
            title: "Movimiento",
            text: "Creamos piezas visuales y contenido que captan atención sin perder claridad.",
          },
          {
            num: "04",
            title: "Conversión",
            text: "Guiamos al cliente hacia la acción: WhatsApp, contacto, reserva o cotización.",
          },
        ],
      },
      benefits: {
        eyebrow: "Beneficios",
        title: "Más que diseño: presencia digital que trabaja por tu negocio.",
        list: [
          "Imagen más profesional",
          "Comunicación más clara",
          "Diseño adaptable a móvil",
          "Contacto directo por WhatsApp",
          "Presencia digital más seria",
          "Contenido visual alineado a tu marca",
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Preguntas que ayudan a cerrar más rápido.",
        items: [
          {
            q: "¿Cuánto tarda una página web?",
            a: "Depende del alcance, pero una landing clara puede planificarse para entrega rápida si el cliente entrega contenido y referencias a tiempo.",
          },
          {
            q: "¿Puedo pedir solo artes para redes?",
            a: "Sí. Puedes cotizar piezas sueltas o paquetes para mantener presencia visual constante.",
          },
          {
            q: "¿Editan videos grabados por mí?",
            a: "Sí. El cliente puede enviar material grabado y JEGS lo transforma en reels, shorts o piezas promocionales.",
          },
          {
            q: "¿Necesito dominio comprado?",
            a: "No necesariamente para empezar. Se puede orientar al cliente y luego conectar el dominio cuando esté listo.",
          },
        ],
      },
      manifesto: {
        eyebrow: "Manifiesto JEGS",
        titleFirst: "No diseñamos para decorar. Diseñamos para que tu negocio se vea ",
        titleHighlight: "claro, confiable y listo para vender.",
        text: "Una marca improvisada pierde clientes. En JEGS le damos estructura, presencia y dirección a tu negocio para que sea tomado en serio.",
      },
      finalCta: {
        eyebrow: "Siguiente paso",
        title: "Dale fuerza digital a tu marca.",
        subtitle: "Cuéntanos qué necesitas y te ayudamos a convertir tu presencia digital en una herramienta real para captar clientes.",
        btn: "Cotizar por WhatsApp",
        message: "Hola JEGS, quiero darle más fuerza digital a mi marca.",
      },
    },
    services: {
      eyebrow: "Servicios",
      title: "Servicios digitales para que tu negocio se vea, conecte y venda mejor.",
      subtitle: "Websites, piezas para redes y videos cortos con estética moderna, clara y orientada a captar clientes.",
    },
    about: {
      eyebrow: "Sobre JEGS",
      title: "Diseño digital con estrategia, estética y enfoque comercial.",
      subtitle: "JEGS Digital ayuda a emprendedores, negocios, marcas personales y empresas a construir una presencia digital más seria, moderna y efectiva.",
      cards: {
        clarity: {
          title: "Claridad",
          text: "Diseño y mensajes fáciles de entender para que el cliente sepa qué haces y cómo contactarte.",
        },
        speed: {
          title: "Velocidad",
          text: "Procesos prácticos para avanzar sin vueltas eternas ni complicaciones técnicas innecesarias.",
        },
        aesthetic: {
          title: "Estética potente",
          text: "Una línea visual moderna, tecnológica y diferenciada sin sacrificar legibilidad ni conversión.",
        },
      },
    },
    contact: {
      eyebrow: "Contacto",
      title: "Cuéntanos qué necesitas y te orientamos por WhatsApp.",
      subtitle: "Puedes escribir para cotizar una web, artes para redes, edición de videos o una solución completa para mejorar tu presencia digital.",
      cards: {
        whatsapp: {
          title: "WhatsApp",
          text: "+58 412 573 8257",
          cta: "Hablar ahora",
        },
        email: {
          title: "Email",
          text: "ejgerdler@gmail.com",
          cta: "Enviar correo",
        },
        instagram: {
          title: "Instagram",
          text: "@jegs.digital",
          cta: "Ver perfil",
        },
      },
    },
    detail: {
      whoIsItFor: "Para quién es",
      whoIsItForDesc: "Emprendedores, negocios locales, marcas personales, tiendas, profesionales independientes y empresas que quieren verse más serios, modernos y confiables en digital.",
      quoteCta: "Cotizar este servicio",
      whatItIncludes: "Qué puede incluir",
      benefitsTitle: "Beneficios",
      web: {
        eyebrow: "Diseño Web",
        title: "Tu web profesional, rápida y lista para captar clientes.",
        subtitle: "Diseñamos sitios web modernos y responsive para que tu negocio tenga una presencia digital seria, clara y fácil de contactar.",
        message: "Hola JEGS, quiero cotizar una página web para mi negocio.",
        includes: ["Landing page", "Sitio corporativo", "Páginas internas", "Sección de servicios", "Portafolio", "Botones a WhatsApp", "Formulario opcional", "SEO básico"],
        benefits: ["Tu negocio se ve más serio", "Tienes un canal propio", "Tus clientes encuentran información clara", "Puedes compartir tu web por WhatsApp o Instagram", "Mejoras la confianza antes de vender"],
      },
      social: {
        eyebrow: "Redes Sociales",
        title: "Artes para redes que hacen que tu marca se vea más profesional y constante.",
        subtitle: "Diseñamos posts, historias, carruseles y promociones alineadas a tu identidad visual para que tu negocio comunique mejor.",
        message: "Hola JEGS, quiero cotizar artes para redes sociales.",
        includes: ["Posts estáticos", "Historias", "Carruseles", "Promociones", "Anuncios", "Plantillas visuales", "Adaptaciones de marca", "Piezas para campañas"],
        benefits: ["Más coherencia visual", "Mejor presentación de ofertas", "Mayor percepción profesional", "Comunicación más clara", "Más facilidad para mantener presencia activa"],
      },
      video: {
        eyebrow: "Video para Redes",
        title: "Videos cortos, dinámicos y listos para captar atención en redes.",
        subtitle: "Editamos reels, shorts y videos promocionales con ritmo, subtítulos y estilo visual para que tu contenido se vea más profesional.",
        message: "Hola JEGS, quiero cotizar edición de videos para redes.",
        includes: ["Reels", "TikToks", "YouTube Shorts", "Videos promocionales", "Subtítulos", "Cortes dinámicos", "Textos animados", "Adaptación por formato"],
        benefits: ["Mejor retención de atención", "Contenido más profesional", "Mayor claridad del mensaje", "Más facilidad para publicar", "Adaptación a formatos actuales"],
      },
    },
    footer: {
      logoDesc: "Websites, contenido visual y videos para marcas que quieren verse más profesionales y captar clientes.",
      contactTitle: "Contacto y Redes",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    common: {
      whatsappBtn: "Get quote on WhatsApp",
      whatsappFloat: "Chat on WhatsApp",
      whatsappFloatLabel: "Chat on WhatsApp",
      whatsappHeader: "WhatsApp",
    },
    header: {
      nav: {
        home: "Home",
        services: "Services",
        about: "About JEGS",
        contact: "Contact",
      },
    },
    home: {
      hero: {
        eyebrow: "Web · Socials · Video",
        titleFirst: "Digital strength for businesses that want to ",
        titleHighlight: "look professional and win customers.",
        subtitle: "We build websites, design social media posts, and edit short videos to make your brand look more credible, communicate clearer, and guide clients straight to contact.",
        ctaWhatsApp: "Get quote on WhatsApp",
        ctaServices: "View services",
      },
      problem: {
        eyebrow: "The Problem",
        title: "Your business might be losing clients by not looking professional online.",
        subtitle: "If your social media feeds lack a consistent visual identity, you don't have a structured website to show your services, or your videos fail to capture attention, customers might choose a competitor that looks more professional.",
        cards: [
          "No clear website",
          "Your social feeds look rushed",
          "Your videos don't hook",
          "Clients can't find clear info",
          "Relying only on Instagram",
        ],
      },
      selector: {
        eyebrow: "Choose your digital boost",
        title: "What does your business need right now?",
        subtitle: "Select your brand's current priority. We will draft a customized WhatsApp message so we can start the conversation straight to the point.",
        options: {
          web: {
            title: "Professional Web",
            desc: "Modern design built to capture leads and clients.",
            message: "Hello JEGS, I would like to get a quote for a professional website for my business.",
          },
          artes: {
            title: "Social Media Graphics",
            desc: "Visual content tailored to your brand identity.",
            message: "Hello JEGS, I would like to get a quote for social media graphics.",
          },
          videos: {
            title: "Social Media Videos",
            desc: "Dynamic editing, engaging reels, and high-impact shorts.",
            message: "Hello JEGS, I would like to get a quote for social media video editing.",
          },
          completa: {
            title: "Complete Presence",
            desc: "Web, custom graphics, and strategic short videos.",
            message: "Hello JEGS, I want to elevate my brand's online presence. I am interested in a complete digital solution.",
          },
        },
        dynamicLabel: "Message ready to send:",
        whatsappCta: "Continue on WhatsApp",
      },
      solution: {
        eyebrow: "The Solution",
        title: "JEGS turns your digital presence into a clear, modern, and high-converting experience.",
        subtitle: "We don't just design to make things look pretty. Our goal is to make your business look trustworthy, explain your value clearly, and drive action.",
        cards: {
          web: {
            title: "Professional Web Design",
            text: "Landing pages, corporate websites, and responsive layouts designed to present your business and win clients.",
            cta: "Quote web",
          },
          artes: {
            title: "Social Media Design",
            text: "Custom posts, stories, carousels, and promos designed to keep your brand looking professional and consistent.",
            cta: "Quote socials",
          },
          video: {
            title: "Short Video Editing",
            text: "High-energy reels, shorts, captions, and dynamic videos designed to tell your story and capture attention.",
            cta: "Quote video",
          },
        },
      },
      method: {
        eyebrow: "JEGS Bull Method",
        title: "Visual power, clear direction, and commercial impact.",
        subtitle: "Our process merges visual strategy, aesthetic design, and intentional content so your brand doesn't just look better, it communicates better.",
        steps: [
          {
            num: "01",
            title: "Direction",
            text: "We understand your business model, define your audience, and structure key trust-building messages.",
          },
          {
            num: "02",
            title: "Presence",
            text: "We design a clean, modern, and visually consistent ecosystem for your website, social graphics, or videos.",
          },
          {
            num: "03",
            title: "Motion",
            text: "We produce engaging visuals and content that capture visitor attention instantly without sacrificing clarity.",
          },
          {
            num: "04",
            title: "Conversion",
            text: "We guide the visitor toward commercial actions: WhatsApp chat, forms, bookings, or inquiries.",
          },
        ],
      },
      benefits: {
        eyebrow: "Benefits",
        title: "Beyond aesthetics: a digital presence that works for your business.",
        list: [
          "More professional image",
          "Clearer value communication",
          "Mobile-responsive designs",
          "Direct WhatsApp conversion channel",
          "Established digital credibility",
          "Visual content aligned to your brand",
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Answering key questions to get started faster.",
        items: [
          {
            q: "How long does a website take?",
            a: "It depends on scope, but a clean landing page can be planned for fast delivery if the client provides content and references promptly.",
          },
          {
            q: "Can I order only social media graphics?",
            a: "Yes. You can quote individual pieces or visual content packages to maintain a highly consistent social media presence.",
          },
          {
            q: "Do you edit videos recorded by me?",
            a: "Yes. The client sends their raw video materials and JEGS transforms them into high-converting reels, shorts, or promotional edits.",
          },
          {
            q: "Do I need to buy a domain beforehand?",
            a: "Not necessarily. We guide you through the initial steps and can connect your custom domain once your website is ready.",
          },
        ],
      },
      manifesto: {
        eyebrow: "JEGS Manifesto",
        titleFirst: "We don't design just to decorate. We design to make your business look ",
        titleHighlight: "clear, trustworthy, and ready to sell.",
        text: "An improvised brand loses clients. At JEGS, we give your business structure, presence, and direction so you get taken seriously.",
      },
      finalCta: {
        eyebrow: "Next step",
        title: "Empower your brand digitally.",
        subtitle: "Tell us what you need and we will help you convert your digital footprint into a real business tool to capture clients.",
        btn: "Get quote on WhatsApp",
        message: "Hello JEGS, I want to empower my brand digitally.",
      },
    },
    services: {
      eyebrow: "Services",
      title: "Digital services to make your business look, connect, and sell better.",
      subtitle: "Websites, social graphics, and short video editing with a modern, clear, and conversion-focused aesthetic.",
    },
    about: {
      eyebrow: "About JEGS",
      title: "Digital design driven by strategy, aesthetics, and commercial results.",
      subtitle: "JEGS Digital helps entrepreneurs, local businesses, personal brands, and companies build a highly professional, modern, and effective online presence.",
      cards: {
        clarity: {
          title: "Clarity",
          text: "Straightforward design and messaging so your clients know exactly what you do and how to reach you.",
        },
        speed: {
          title: "Speed",
          text: "Practical development workflows to launch and scale without endless delays or technical headaches.",
        },
        aesthetic: {
          title: "Powerful Aesthetics",
          text: "A modern, high-tech, and distinct visual identity that boosts brand equity while maintaining usability and conversion.",
        },
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us what you need and we'll guide you directly on WhatsApp.",
      subtitle: "Get in touch to quote a custom website, social media graphics, short video editing, or a complete digital package.",
      cards: {
        whatsapp: {
          title: "WhatsApp",
          text: "+58 412 573 8257",
          cta: "Chat now",
        },
        email: {
          title: "Email",
          text: "ejgerdler@gmail.com",
          cta: "Send email",
        },
        instagram: {
          title: "Instagram",
          text: "@jegs.digital",
          cta: "View profile",
        },
      },
    },
    detail: {
      whoIsItFor: "Who is it for",
      whoIsItForDesc: "Entrepreneurs, local businesses, personal brands, e-commerce shops, freelancers, and corporations looking to establish a modern, serious, and highly credible digital footprint.",
      quoteCta: "Quote this service",
      whatItIncludes: "What's included",
      benefitsTitle: "Benefits",
      web: {
        eyebrow: "Web Design",
        title: "Your professional, fast, and conversion-ready website.",
        subtitle: "We design modern and fully responsive websites so your business establishes a highly credible, clear, and accessible online hub.",
        message: "Hello JEGS, I would like to get a quote for a professional website for my business.",
        includes: ["Landing page", "Corporate website", "Internal subpages", "Service grids", "Visual portfolio", "WhatsApp integrations", "Custom contact form", "Core SEO setup"],
        benefits: ["Established digital credibility", "Dedicated business channel", "Clear information display for clients", "Easy sharing on WhatsApp/Instagram", "Boosted trust before the sale"],
      },
      social: {
        eyebrow: "Social Graphics",
        title: "Branded social media designs that keep your brand looking professional and consistent.",
        subtitle: "We design visual posts, stories, carousels, and promotional graphics tailored to your brand identity so you communicate effectively.",
        message: "Hello JEGS, I would like to get a quote for social media graphics.",
        includes: ["Static posts", "Stories", "Visual carousels", "Promo graphics", "Social ads", "Custom design templates", "Brand assets", "Campaign designs"],
        benefits: ["Enhanced visual cohesion", "Professional offer presentation", "Stronger brand perception", "Clearer messaging", "Streamlined content creation and active presence"],
      },
      video: {
        eyebrow: "Social Video",
        title: "Short, engaging, and dynamic videos ready to hook your audience.",
        subtitle: "We edit professional reels, TikToks, and shorts with dynamic pacing, motion titles, and synced captions to elevate your content value.",
        message: "Hello JEGS, I would like to get a quote for social media video editing.",
        includes: ["Instagram Reels", "TikTok edits", "YouTube Shorts", "Promo video clips", "Engaging captions", "Dynamic cuts", "Animated title effects", "Multi-format resizing"],
        benefits: ["Higher viewer retention", "Professional content production value", "Clearer key message delivery", "Consistency in video scheduling", "Adaptation to modern content trends"],
      },
    },
    footer: {
      logoDesc: "Websites, custom graphics, and strategic short videos for brands that want to look professional and win clients.",
      contactTitle: "Contact & Socials",
      rights: "All rights reserved.",
    },
  },
};
