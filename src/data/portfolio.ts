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
  fullImage?: string;
  link: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "sapori-di-racchetta",
    title: "Sapori Di Racchetta",
    category: { en: "Sports Club / Apparel / Events", es: "Club Deportivo / Ropa / Eventos" },
    tags: { en: ["Web Design", "E-commerce", "Hospitality"], es: ["Diseño Web", "E-commerce", "Hospitalidad"] },
    description: { en: "A premium sports-lifestyle website experience combining club identity, apparel and services.", es: "Una experiencia web premium de estilo de vida deportivo que combina la identidad del club, ropa y servicios." },
    image: "/Imagenes/Portfolio/Cards_Home/Sapori_Di_Rachetta1.png",
    fullImage: "/Imagenes/Portfolio/FullPages/Sapori_Di_Rachetta2.png",
    link: "/portafolio/sapori-di-racchetta"
  },
  {
    id: "glv-events",
    title: "GLV Events",
    category: { en: "Event Production & Catering", es: "Producción de Eventos y Catering" },
    tags: { en: ["Web Design", "Events", "Lead Capture"], es: ["Diseño Web", "Eventos", "Captación de Leads"] },
    description: { en: "A visual website for catering, event production and 360 photo booth services.", es: "Un sitio web visual para servicios de catering, producción de eventos y cabinas fotográficas 360." },
    image: "/Imagenes/Portfolio/Cards_Home/GLV_Eventos_Portfolio1.png",
    fullImage: "/Imagenes/Portfolio/FullPages/GLV_Eventos_Portfolio2.png",
    link: "/portafolio/glv-events"
  },
  {
    id: "posada-isla-piscina",
    title: "Posada Isla Piscina",
    category: { en: "Hospitality / Restaurant / Tourism", es: "Hospitalidad / Restaurante / Turismo" },
    tags: { en: ["Web Design", "Booking", "Hospitality"], es: ["Diseño Web", "Reservas", "Hospitalidad"] },
    description: { en: "A warm and inviting tourism website focused on rooms, restaurant, services and contact conversion.", es: "Un sitio web turístico cálido y acogedor enfocado en habitaciones, restaurante, servicios y conversión." },
    image: "/Imagenes/Portfolio/Cards_Home/PosadaIslaPiscina1.png",
    fullImage: "/Imagenes/Portfolio/FullPages/PosadaIslaPiscina2.png",
    link: "/portafolio/posada-isla-piscina"
  },
  {
    id: "dd-diesel",
    title: "D&D Diesel",
    category: { en: "Diesel Engines & Parts", es: "Motores Diésel y Repuestos" },
    tags: { en: ["E-commerce", "Product Catalog", "Industrial"], es: ["E-commerce", "Catálogo de Productos", "Industrial"] },
    description: { en: "A product-driven website designed for diesel engines and parts with clear catalog navigation.", es: "Un sitio web orientado al producto diseñado para motores diésel y repuestos con una navegación clara de catálogo." },
    image: "/Imagenes/Portfolio/Cards_Home/D&DDIESEL1.png",
    fullImage: "/Imagenes/Portfolio/FullPages/D&DDIESEL2.png",
    link: "/portafolio/dd-diesel"
  },
  {
    id: "crossfit-taino",
    title: "CrossFit Taíno",
    category: { en: "Fitness / Gym / Training", es: "Fitness / Gimnasio / Entrenamiento" },
    tags: { en: ["Web Design", "Fitness", "Membership"], es: ["Diseño Web", "Fitness", "Membresías"] },
    description: { en: "A bold fitness website designed to showcase programs, schedule, coaches and memberships.", es: "Un sitio web de fitness audaz diseñado para mostrar programas, horarios, entrenadores y membresías." },
    image: "/Imagenes/Portfolio/Cards_Home/CrossFitTaino1.png",
    fullImage: "/Imagenes/Portfolio/FullPages/CrossFitTaino2.png",
    link: "/portafolio/crossfit-taino"
  },
  {
    id: "biolab-supplies",
    title: "Biolab Supplies Corp.",
    category: { en: "Laboratory / Medical Supplies", es: "Laboratorio / Insumos Médicos" },
    tags: { en: ["Web Design", "Corporate", "Catalog"], es: ["Diseño Web", "Corporativo", "Catálogo"] },
    description: { en: "A corporate website for laboratory and medical supply solutions with clear sector-based navigation.", es: "Un sitio web corporativo para soluciones de laboratorio e insumos médicos con navegación clara por sector." },
    image: "/Imagenes/Portfolio/Cards_Home/Biolab1.png",
    fullImage: "/Imagenes/Portfolio/FullPages/Biolab2.png",
    link: "/portafolio/biolab-supplies"
  },
  {
    id: "dra-jenny-simancas",
    title: "Dra. Jenny Simancas",
    category: { en: "Aesthetic Medicine / Health", es: "Medicina Estética / Salud" },
    tags: { en: ["Web Design", "Medical", "Lead Capture"], es: ["Diseño Web", "Médico", "Captación de Leads"] },
    description: { en: "A clean medical aesthetics website designed to present treatments, credibility, facilities and contact flow.", es: "Un sitio web limpio de medicina estética diseñado para presentar tratamientos, credibilidad, instalaciones y flujo de contacto." },
    image: "/Imagenes/Portfolio/Cards_Home/JS1.png",
    fullImage: "/Imagenes/Portfolio/FullPages/JS2.png",
    link: "/portafolio/dra-jenny-simancas"
  },
  {
    id: "moto-carrizal",
    title: "Moto Carrizal J.J.",
    category: { en: "Motorcycle Parts / E-commerce", es: "Repuestos de Motos / E-commerce" },
    tags: { en: ["E-commerce", "Product Catalog", "Retail"], es: ["E-commerce", "Catálogo de Productos", "Retail"] },
    description: { en: "An e-commerce website for motorcycle tires, batteries and lubricants with product categories and cart flow.", es: "Un sitio web e-commerce para cauchos, baterías y lubricantes de motos con categorías de productos y flujo de carrito." },
    image: "/Imagenes/Portfolio/Cards_Home/MCJJ1.png",
    fullImage: "/Imagenes/Portfolio/FullPages/MCJJ2.png",
    link: "/portafolio/moto-carrizal"
  },
  {
    id: "recetas-cultura-cocina",
    title: "Recetas Cultura y Cocina",
    category: { en: "Food Magazine / Editorial", es: "Revista Gastronómica / Editorial" },
    tags: { en: ["Web Design", "Editorial", "Food"], es: ["Diseño Web", "Editorial", "Comida"] },
    description: { en: "An editorial-style food website with recipes, chef features, cultural content and visual storytelling.", es: "Un sitio web gastronómico de estilo editorial con recetas, artículos de chefs, contenido cultural y storytelling visual." },
    image: "/Imagenes/Portfolio/Cards_Home/Recetas1.png",
    fullImage: "/Imagenes/Portfolio/FullPages/recetas_portfolio_fullpage_exact.png",
    link: "/portafolio/recetas-cultura-cocina"
  },
  {
    id: "dd-diesel-parts",
    title: "D&D Diesel Parts",
    category: { en: "Diesel Parts / E-commerce", es: "Repuestos Diésel / E-commerce" },
    tags: { en: ["E-commerce", "Industrial", "Parts Catalog"], es: ["E-commerce", "Industrial", "Catálogo de Repuestos"] },
    description: { en: "A diesel parts storefront concept focused on product discovery, categories, search and conversion.", es: "Un concepto de tienda de repuestos diésel enfocado en descubrimiento de productos, categorías, búsqueda y conversión." },
    image: "/Imagenes/Portfolio/Cards_Home/D&DDIESEL_PARTS1.png",
    fullImage: "/Imagenes/Portfolio/FullPages/D&DDIESEL_PARTS2.png",
    link: "/portafolio/dd-diesel-parts"
  }
];
