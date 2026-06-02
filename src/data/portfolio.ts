export interface PortfolioProject {
  id: string;
  title: string;
  category: {
    en: string;
    es: string;
  };
  tags: {
    en: string[];
    es: string[];
  };
  description: {
    en: string;
    es: string;
  };
  image: string;
  link: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "sapori-di-racchetta",
    title: "Sapori Di Racchetta",
    category: {
      en: "Sports Club / Apparel / Events",
      es: "Club Deportivo / Ropa / Eventos"
    },
    tags: {
      en: ["Web Design", "E-commerce", "Hospitality"],
      es: ["Diseño Web", "E-commerce", "Hospitalidad"]
    },
    description: {
      en: "A premium sports-lifestyle website experience combining club identity, apparel and services.",
      es: "Una experiencia web premium de estilo de vida deportivo que combina la identidad del club, ropa y servicios."
    },
    image: "/Imagenes/Portfolio/Sapori_DiRacchetta_Portfolio.png",
    link: "/portafolio"
  },
  {
    id: "glv-events",
    title: "GLV Events",
    category: {
      en: "Event Production & Catering",
      es: "Producción de Eventos y Catering"
    },
    tags: {
      en: ["Web Design", "Events", "Lead Capture"],
      es: ["Diseño Web", "Eventos", "Captación de Leads"]
    },
    description: {
      en: "A visual website for catering, event production and 360 photo booth services.",
      es: "Un sitio web visual diseñado para servicios de catering, producción de eventos y cabinas fotográficas 360."
    },
    image: "/Imagenes/Portfolio/GLV_Eventos_Portfolio.png",
    link: "/portafolio"
  },
  {
    id: "posada-isla-piscina",
    title: "Posada Isla Piscina",
    category: {
      en: "Hospitality / Restaurant / Tourism",
      es: "Hospitalidad / Restaurante / Turismo"
    },
    tags: {
      en: ["Web Design", "Booking", "Hospitality"],
      es: ["Diseño Web", "Reservas", "Hospitalidad"]
    },
    description: {
      en: "A warm and inviting tourism website focused on rooms, restaurant, services and contact conversion.",
      es: "Un sitio web turístico cálido y acogedor, enfocado en las habitaciones, restaurante, servicios y conversión."
    },
    image: "/Imagenes/Portfolio/PosadaIslaPiscina_Portfolio.png",
    link: "/portafolio"
  },
  {
    id: "dd-diesel",
    title: "D&D Diesel",
    category: {
      en: "Diesel Engines & Parts",
      es: "Motores Diésel y Repuestos"
    },
    tags: {
      en: ["E-commerce", "Product Catalog", "Industrial"],
      es: ["E-commerce", "Catálogo de Productos", "Industrial"]
    },
    description: {
      en: "A product-driven website designed for diesel engines and parts with clear catalog navigation.",
      es: "Un sitio web orientado al producto, diseñado para motores diésel y repuestos con una navegación clara."
    },
    image: "/Imagenes/Portfolio/D&D DIESEL_Portfolio.png",
    link: "/portafolio"
  },
  {
    id: "crossfit-taino",
    title: "CrossFit Taíno",
    category: {
      en: "Fitness / Gym / Training",
      es: "Fitness / Gimnasio / Entrenamiento"
    },
    tags: {
      en: ["Web Design", "Fitness", "Membership"],
      es: ["Diseño Web", "Fitness", "Membresías"]
    },
    description: {
      en: "A bold fitness website designed to showcase programs, schedule, coaches and memberships.",
      es: "Un sitio web de fitness audaz diseñado para mostrar los programas, horarios, entrenadores y membresías."
    },
    image: "/Imagenes/Portfolio/CrossfitTaino_Portfolio.png",
    link: "/portafolio"
  }
];
