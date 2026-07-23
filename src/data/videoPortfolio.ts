export type VideoAspect = "landscape" | "portrait" | "vertical-soft";

export interface VideoPortfolioProject {
  id: string;
  vimeoId: string;
  vimeoUrl: string;
  title: {
    en: string;
    es: string;
  };
  compactTitle?: {
    en: string;
    es: string;
  };
  category: {
    en: string;
    es: string;
  };
  compactCategory?: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  thumbnailUrl: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  thumbnailAlt: {
    en: string;
    es: string;
  };
  width: number;
  height: number;
  aspect: VideoAspect;
  isFeatured?: boolean;
  showInHighlight?: boolean;
}

export const videoPortfolioProjects: VideoPortfolioProject[] = [
  {
    id: "south-of-fifth-realtor",
    vimeoId: "1211643015",
    vimeoUrl: "https://vimeo.com/1211643015",
    title: {
      en: "Realtor Promotional Video - South of Fifth",
      es: "Video Promocional Realtor - South of Fifth",
    },
    category: {
      en: "Real Estate / Video Marketing",
      es: "Real Estate / Video Marketing",
    },
    description: {
      en: "Promotional real estate video edited for a South of Fifth property presentation.",
      es: "Video inmobiliario promocional editado para presentar una propiedad en South of Fifth.",
    },
    thumbnailUrl:
      "https://i.vimeocdn.com/video/2181866118-336a2083341c4f64ef8b775734a1a6541ba6ccc8c9d54e5bf419616c56ee6293-d_960?region=us",
    thumbnailWidth: 960,
    thumbnailHeight: 489,
    thumbnailAlt: {
      en: "South of Fifth realtor promotional video thumbnail.",
      es: "Miniatura del video promocional realtor South of Fifth.",
    },
    width: 426,
    height: 218,
    aspect: "landscape",
    isFeatured: true,
    showInHighlight: true,
  },
  {
    id: "agropecuaria-tierra-viva-coffee",
    vimeoId: "1211643014",
    vimeoUrl: "https://vimeo.com/1211643014",
    title: {
      en: "Coffee Promotional Video - Agropecuaria Tierra Viva",
      es: "Video Promocional Café - Agropecuaria Tierra Viva",
    },
    compactTitle: {
      en: "Tierra Viva Coffee",
      es: "Café Tierra Viva",
    },
    category: {
      en: "Brand Storytelling",
      es: "Storytelling de marca",
    },
    compactCategory: {
      en: "Brand",
      es: "Marca",
    },
    description: {
      en: "Visual storytelling for a coffee brand, following the product from cultivation to the cup.",
      es: "Storytelling visual para una marca de café, desde el cultivo hasta la taza.",
    },
    thumbnailUrl:
      "https://i.vimeocdn.com/video/2181866117-3ca925ef32dc06cec3d8bc3a08dba7eb8b19cbf824ed614d5e71be02c8fefc6f-d_640?region=us",
    thumbnailWidth: 640,
    thumbnailHeight: 796,
    thumbnailAlt: {
      en: "Agropecuaria Tierra Viva coffee promotional video thumbnail.",
      es: "Miniatura del video promocional de café Agropecuaria Tierra Viva.",
    },
    width: 240,
    height: 298,
    aspect: "vertical-soft",
    showInHighlight: true,
  },
  {
    id: "stitch-birthday-invitation",
    vimeoId: "1211643018",
    vimeoUrl: "https://vimeo.com/1211643018",
    title: {
      en: "Birthday Invitation - Stitch",
      es: "Invitación de Cumpleaños - Stitch",
    },
    compactTitle: {
      en: "Stitch Invitation",
      es: "Invitación Stitch",
    },
    category: {
      en: "Motion Design",
      es: "Motion design",
    },
    compactCategory: {
      en: "Motion",
      es: "Motion",
    },
    description: {
      en: "Personalized animated invitation designed for a birthday celebration.",
      es: "Invitación animada personalizada para una celebración de cumpleaños.",
    },
    thumbnailUrl:
      "https://i.vimeocdn.com/video/2181866089-dabaa73efa74a5815a267f319620a5350fc9edceb2b4b5d8be3c811acbf06ec0-d_640?region=us",
    thumbnailWidth: 640,
    thumbnailHeight: 1138,
    thumbnailAlt: {
      en: "Stitch birthday invitation thumbnail.",
      es: "Miniatura de invitación de cumpleaños Stitch.",
    },
    width: 240,
    height: 426,
    aspect: "portrait",
    showInHighlight: true,
  },
  {
    id: "hifu-12d-ana-maria-quijano",
    vimeoId: "1212167648",
    vimeoUrl: "https://vimeo.com/1212167648",
    title: {
      en: "HIFU 12D - Dr. Ana María Quijano",
      es: "Hifu 12D - Dra. Ana María Quijano",
    },
    compactTitle: {
      en: "HIFU 12D",
      es: "Hifu 12D",
    },
    category: {
      en: "Healthcare / Social Media",
      es: "Salud / Social media",
    },
    compactCategory: {
      en: "Healthcare",
      es: "Salud",
    },
    description: {
      en: "Educational social content edited to communicate a professional aesthetic treatment.",
      es: "Contenido educativo para redes editado para comunicar un tratamiento estético profesional.",
    },
    thumbnailUrl:
      "https://i.vimeocdn.com/video/2182521330-1f77964ebeeea6a63130649b243524f916fc0e6f88396dca6bf8e6e35b7addae-d_640?region=us",
    thumbnailWidth: 640,
    thumbnailHeight: 800,
    thumbnailAlt: {
      en: "HIFU 12D video thumbnail for Dr. Ana María Quijano.",
      es: "Miniatura del video Hifu 12D de la Dra. Ana María Quijano.",
    },
    width: 240,
    height: 300,
    aspect: "vertical-soft",
    showInHighlight: true,
  },
  {
    id: "miami-beach-realtor",
    vimeoId: "1211643013",
    vimeoUrl: "https://vimeo.com/1211643013",
    title: {
      en: "Realtor Promotional Video - Miami Beach",
      es: "Video Promocional Realtor - Miami Beach",
    },
    category: {
      en: "Real Estate / Social Media",
      es: "Real Estate / Social media",
    },
    description: {
      en: "Vertical realtor promotional video edited for a Miami Beach property presentation.",
      es: "Video realtor vertical editado para presentar una propiedad en Miami Beach.",
    },
    thumbnailUrl:
      "https://i.vimeocdn.com/video/2181866259-504714f46aee4e9572d422efa918fcaf3e59846a2dc8027667d2cc92f36cb51f-d_640?region=us",
    thumbnailWidth: 640,
    thumbnailHeight: 1138,
    thumbnailAlt: {
      en: "Miami Beach realtor promotional video thumbnail.",
      es: "Miniatura del video promocional realtor Miami Beach.",
    },
    width: 240,
    height: 426,
    aspect: "portrait",
  },
  {
    id: "fifteen-birthday-invitation",
    vimeoId: "1211643019",
    vimeoUrl: "https://vimeo.com/1211643019",
    title: {
      en: "Birthday Invitation - 15th Birthday",
      es: "Invitación de Cumpleaños - 15 Años",
    },
    category: {
      en: "Motion Design",
      es: "Motion design",
    },
    description: {
      en: "Animated invitation created for a 15th birthday celebration.",
      es: "Invitación animada creada para una celebración de 15 años.",
    },
    thumbnailUrl:
      "https://i.vimeocdn.com/video/2181865959-ceb49246b57fcf904aa209998ebde0fa994478c7b7863eb1bd8fbb19b2ab1a1d-d_640?region=us",
    thumbnailWidth: 640,
    thumbnailHeight: 1138,
    thumbnailAlt: {
      en: "15th birthday invitation video thumbnail.",
      es: "Miniatura de invitación de cumpleaños de 15 años.",
    },
    width: 240,
    height: 426,
    aspect: "portrait",
  },
  {
    id: "hot-wheels-birthday-invitation",
    vimeoId: "1211643017",
    vimeoUrl: "https://vimeo.com/1211643017",
    title: {
      en: "Birthday Invitation - Hot Wheels",
      es: "Invitación de Cumpleaños - Hot Wheels",
    },
    category: {
      en: "Motion Design",
      es: "Motion design",
    },
    description: {
      en: "Animated invitation designed for a Hot Wheels themed birthday celebration.",
      es: "Invitación animada diseñada para una celebración de cumpleaños con tema Hot Wheels.",
    },
    thumbnailUrl:
      "https://i.vimeocdn.com/video/2181865924-5b05501b9eddded69f539a42e33591f473e7428ccb1eb82c286719f3e132a07e-d_640?region=us",
    thumbnailWidth: 640,
    thumbnailHeight: 1138,
    thumbnailAlt: {
      en: "Hot Wheels birthday invitation video thumbnail.",
      es: "Miniatura de invitación de cumpleaños Hot Wheels.",
    },
    width: 240,
    height: 426,
    aspect: "portrait",
  },
  {
    id: "facial-harmonization-ana-maria-quijano",
    vimeoId: "1211643016",
    vimeoUrl: "https://vimeo.com/1211643016",
    title: {
      en: "Facial Harmonization - Dr. Ana María Quijano",
      es: "Armonización Facial - Dra. Ana María Quijano",
    },
    category: {
      en: "Healthcare / Social Media",
      es: "Salud / Social media",
    },
    description: {
      en: "Social content edited to communicate a professional facial harmonization service.",
      es: "Contenido para redes editado para comunicar un servicio profesional de armonización facial.",
    },
    thumbnailUrl:
      "https://i.vimeocdn.com/video/2181866217-0082a8daee7195eb4c77353fe47e26442be5aaf81d5a900b9d920367d0898456-d_640?region=us",
    thumbnailWidth: 640,
    thumbnailHeight: 800,
    thumbnailAlt: {
      en: "Facial harmonization video thumbnail for Dr. Ana María Quijano.",
      es: "Miniatura del video de armonización facial de la Dra. Ana María Quijano.",
    },
    width: 240,
    height: 300,
    aspect: "vertical-soft",
  },
];

export const featuredVideoProject = videoPortfolioProjects.find((project) => project.isFeatured) ?? videoPortfolioProjects[0];
export const highlightVideoProjects = videoPortfolioProjects.filter((project) => project.showInHighlight);
export const secondaryVideoProjects = highlightVideoProjects.filter((project) => project.id !== featuredVideoProject.id);
export const verticalVideoProjects = videoPortfolioProjects.filter((project) => project.id !== featuredVideoProject.id);
