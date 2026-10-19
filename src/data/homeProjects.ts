import { getHomeCopy } from "./homeCopy";
import { videoPortfolioProjects } from "./videoPortfolio";
import type { HomeProjectData } from "../components/HomeProject";

export function getHomeProjects(language: "es" | "en") {
  const c = getHomeCopy(language);
  const web: HomeProjectData[] = [
    { id: "asisa", title: "ASISA Móstoles", image: "/images/home/asisa.webp", category: c.catAsisa, description: c.asisa, path: "/portfolio/asisa-mostoles" },
    { id: "delsim", title: "DELSIM Construction", image: "/images/home/delsim.webp", category: c.catDelsim, description: c.delsim, path: "/portfolio/delsim-construction" },
    { id: "diesel", title: "D&D Diesel", image: "/images/home/diesel.webp", category: c.catDiesel, description: c.diesel, path: "/portfolio/dd-diesel" },
  ];
  const video: HomeProjectData[] = [
    { id: "realtor", title: "South of Fifth", image: "/images/home/video-0.jpg", category: c.catRealtor, description: c.realtor, vimeo: "1211643015" },
    { id: "miami", title: "Miami Beach", image: "/images/home/video-4.jpg", category: c.catMiami, description: c.miami, vimeo: "1211643013" },
    { id: "coffee", title: language === "es" ? "Café Tierra Viva" : "Tierra Viva Coffee", image: "/images/home/video-1.jpg", category: c.catCoffee, description: c.coffee, vimeo: "1211643014" },
  ];
  const events: HomeProjectData[] = videoPortfolioProjects.filter(project => project.id.includes("birthday-invitation")).map(project => ({
    id: project.id, title: project.compactTitle?.[language] ?? project.title[language], image: project.id === "stitch-birthday-invitation" ? "/images/home/video-2.jpg" : project.thumbnailUrl, category: c.eventmodal, description: project.description[language], vimeo: project.vimeoId,
  }));
  return { web, video, events };
}
