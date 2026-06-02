import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import type { PortfolioProject } from "../data/portfolio";
import { portfolioProjects } from "../data/portfolio";

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <div className="group flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue/30 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-brand-blue/10">
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-bg2">
        <div className="absolute inset-0 bg-brand-bg/10 backdrop-blur-sm transition-all duration-300 group-hover:backdrop-blur-none z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-green">
          {isEs ? project.category.es : project.category.en}
        </p>
        
        <h3 className="mt-3 text-2xl font-black text-brand-white">
          {project.title}
        </h3>
        
        <p className="mt-3 flex-1 text-sm sm:text-base leading-relaxed text-brand-muted/95">
          {isEs ? project.description.es : project.description.en}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {(isEs ? project.tags.es : project.tags.en).map((tag) => (
            <span
              key={tag}
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider text-brand-white/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <Link
            to={project.link}
            className="inline-flex items-center gap-2 text-sm font-black text-brand-white transition-colors hover:text-brand-green"
          >
            {isEs ? "Ver Detalles" : "View Details"} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PortfolioGrid({ projects = portfolioProjects }: { projects?: PortfolioProject[] }) {
  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <PortfolioCard key={project.id} project={project} />
      ))}
    </div>
  );
}
