import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { portfolioProjects } from "../data/portfolio";
import { useLanguage } from "../contexts/useLanguage";
import { usePageMeta } from "../hooks/usePageMeta";
import { FinalCta } from "./Home";

export function ProjectDetailPage() {
  const { id } = useParams();
  const { language } = useLanguage();
  const isEs = language === "es";

  const project = portfolioProjects.find((p) => p.id === id);

  usePageMeta(
    project ? project.title : "",
    project ? (isEs ? project.description.es : project.description.en) : ""
  );

  if (!project) {
    return <Navigate to="/portafolio" replace />;
  }

  return (
    <>
      <div className="pt-24 pb-12 md:pt-32 md:pb-16 px-5 max-w-5xl mx-auto">
        <Link 
          to="/portafolio" 
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-muted hover:text-brand-green transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          {isEs ? "Volver al Portafolio" : "Back to Portfolio"}
        </Link>
        
        <div className="mb-10 text-center md:text-left">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-green mb-3">
            {isEs ? project.category.es : project.category.en}
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-brand-white tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-brand-muted/95 max-w-2xl leading-relaxed">
            {isEs ? project.description.es : project.description.en}
          </p>
          
          <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
            {(isEs ? project.tags.es : project.tags.en).map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-brand-bg2/40 shadow-2xl">
          {project.fullImage ? (
            <img 
              src={project.fullImage} 
              alt={isEs ? `Captura de pantalla completa de la página web de ${project.title}` : `Full page design screenshot of the website for ${project.title}`}
              width={1400}
              height={900}
              className="w-full object-top" 
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="aspect-video w-full flex items-center justify-center text-brand-muted p-10 text-center">
              {isEs 
                ? "Imagen completa del proyecto no disponible en este momento." 
                : "Full project image not available at this moment."}
            </div>
          )}
        </div>
      </div>
      
      <FinalCta />
    </>
  );
}
