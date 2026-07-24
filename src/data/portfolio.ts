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
    image: "/Imagenes/Portfolio/Cards_Home/sapori-di-racchetta-1.webp",
    fullImage: "/Imagenes/Portfolio/FullPages/sapori-di-racchetta-2.webp",
    link: "/portfolio/sapori-di-racchetta"
  },
  {
    id: "glv-events",
    title: "GLV Events",
    category: { en: "Event Production & Catering", es: "Producción de Eventos y Catering" },
    tags: { en: ["Web Design", "Events", "Lead Capture"], es: ["Diseño Web", "Eventos", "Captación de Leads"] },
    description: { en: "A visual website for catering, event production and 360 photo booth services.", es: "Un sitio web visual para servicios de catering, producción de eventos y cabinas fotográficas 360." },
    image: "/Imagenes/Portfolio/Cards_Home/glv-eventos-portfolio-1.webp",
    fullImage: "/Imagenes/Portfolio/FullPages/glv-eventos-portfolio-2.webp",
    link: "/portfolio/glv-events"
  },
  {
    id: "posada-isla-piscina",
    title: "Posada Isla Piscina",
    category: { en: "Hospitality / Restaurant / Tourism", es: "Hospitalidad / Restaurante / Turismo" },
    tags: { en: ["Web Design", "Booking", "Hospitality"], es: ["Diseño Web", "Reservas", "Hospitalidad"] },
    description: { en: "A warm and inviting tourism website focused on rooms, restaurant, services and contact conversion.", es: "Un sitio web turístico cálido y acogedor enfocado en habitaciones, restaurante, servicios y conversión." },
    image: "/Imagenes/Portfolio/Cards_Home/posada-isla-piscina-1.webp",
    fullImage: "/Imagenes/Portfolio/FullPages/posada-isla-piscina-2.webp",
    link: "/portfolio/posada-isla-piscina"
  },
  {
    id: "dd-diesel",
    title: "D&D Diesel",
    category: { en: "Diesel Engines & Parts", es: "Motores Diésel y Repuestos" },
    tags: { en: ["E-commerce", "Product Catalog", "Industrial"], es: ["E-commerce", "Catálogo de Productos", "Industrial"] },
    description: { en: "A product-driven website designed for diesel engines and parts with clear catalog navigation.", es: "Un sitio web orientado al producto diseñado para motores diésel y repuestos con una navegación clara de catálogo." },
    image: "/Imagenes/Portfolio/Cards_Home/dd-diesel-1.webp",
    fullImage: "/Imagenes/Portfolio/FullPages/dd-diesel-2.webp",
    link: "/portfolio/dd-diesel"
  },
  {
    id: "crossfit-taino",
    title: "CrossFit Taíno",
    category: { en: "Fitness / Gym / Training", es: "Fitness / Gimnasio / Entrenamiento" },
    tags: { en: ["Web Design", "Fitness", "Membership"], es: ["Diseño Web", "Fitness", "Membresías"] },
    description: { en: "A bold fitness website designed to showcase programs, schedule, coaches and memberships.", es: "Un sitio web de fitness audaz diseñado para mostrar programas, horarios, entrenadores y membresías." },
    image: "/Imagenes/Portfolio/Cards_Home/crossfit-taino-1.webp",
    fullImage: "/Imagenes/Portfolio/FullPages/crossfit-taino-2.webp",
    link: "/portfolio/crossfit-taino"
  },
  {
    id: "biolab-supplies",
    title: "Biolab Supplies Corp.",
    category: { en: "Laboratory / Medical Supplies", es: "Laboratorio / Insumos Médicos" },
    tags: { en: ["Web Design", "Corporate", "Catalog"], es: ["Diseño Web", "Corporativo", "Catálogo"] },
    description: { en: "A corporate website for laboratory and medical supply solutions with clear sector-based navigation.", es: "Un sitio web corporativo para soluciones de laboratorio e insumos médicos con navegación clara por sector." },
    image: "/Imagenes/Portfolio/Cards_Home/biolab-1.webp",
    fullImage: "/Imagenes/Portfolio/FullPages/biolab-2.webp",
    link: "/portfolio/biolab-supplies"
  },
  {
    id: "dra-jenny-simancas",
    title: "Dra. Jenny Simancas",
    category: { en: "Aesthetic Medicine / Health", es: "Medicina Estética / Salud" },
    tags: { en: ["Web Design", "Medical", "Lead Capture"], es: ["Diseño Web", "Médico", "Captación de Leads"] },
    description: { en: "A clean medical aesthetics website designed to present treatments, credibility, facilities and contact flow.", es: "Un sitio web limpio de medicina estética diseñado para presentar tratamientos, credibilidad, instalaciones y flujo de contacto." },
    image: "/Imagenes/Portfolio/Cards_Home/js-1.webp",
    fullImage: "/Imagenes/Portfolio/FullPages/js-2.webp",
    link: "/portfolio/dra-jenny-simancas"
  },
  {
    id: "moto-carrizal",
    title: "Moto Carrizal J.J.",
    category: { en: "Motorcycle Parts / E-commerce", es: "Repuestos de Motos / E-commerce" },
    tags: { en: ["E-commerce", "Product Catalog", "Retail"], es: ["E-commerce", "Catálogo de Productos", "Retail"] },
    description: { en: "An e-commerce website for motorcycle tires, batteries and lubricants with product categories and cart flow.", es: "Un sitio web e-commerce para cauchos, baterías y lubricantes de motos con categorías de productos y flujo de carrito." },
    image: "/Imagenes/Portfolio/Cards_Home/mcjj-1.webp",
    fullImage: "/Imagenes/Portfolio/FullPages/mcjj-2.webp",
    link: "/portfolio/moto-carrizal"
  },
  {
    id: "recetas-cultura-cocina",
    title: "Recetas Cultura y Cocina",
    category: { en: "Food Magazine / Editorial", es: "Revista Gastronómica / Editorial" },
    tags: { en: ["Web Design", "Editorial", "Food"], es: ["Diseño Web", "Editorial", "Comida"] },
    description: { en: "An editorial-style food website with recipes, chef features, cultural content and visual storytelling.", es: "Un sitio web gastronómico de estilo editorial con recetas, artículos de chefs, contenido cultural y storytelling visual." },
    image: "/Imagenes/Portfolio/Cards_Home/recetas-1.webp",
    fullImage: "/Imagenes/Portfolio/FullPages/recetas-portfolio-fullpage-exact.webp",
    link: "/portfolio/recetas-cultura-cocina"
  },
  {
    id: "dd-diesel-parts",
    title: "D&D Diesel Parts",
    category: { en: "Diesel Parts / E-commerce", es: "Repuestos Diésel / E-commerce" },
    tags: { en: ["E-commerce", "Industrial", "Parts Catalog"], es: ["E-commerce", "Industrial", "Catálogo de Repuestos"] },
    description: { en: "A diesel parts storefront concept focused on product discovery, categories, search and conversion.", es: "Un concepto de tienda de repuestos diésel enfocado en descubrimiento de productos, categorías, búsqueda y conversión." },
    image: "/Imagenes/Portfolio/Cards_Home/dd-diesel-parts-1.webp",
    fullImage: "/Imagenes/Portfolio/FullPages/dd-diesel-parts-2.webp",
    link: "/portfolio/dd-diesel-parts"
  }
];
