import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import type { PortfolioProject } from "../data/portfolio";
import { portfolioProjects } from "../data/portfolio";
import { useRef, useEffect, useState } from "react";

export function PortfolioCard({ 
  project, 
  className = "", 
  index, 
  isCarousel = false 
}: { 
  project: PortfolioProject; 
  className?: string; 
  index?: number; 
  isCarousel?: boolean; 
}) {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  // Determine loading priority based on position in carousel/grid
  const isLcp = isCarousel && index === 0;
  const loading = isLcp ? "eager" : "lazy";
  const fetchPriority = isLcp ? "high" : (isCarousel ? "low" : undefined);
  const decoding = isLcp ? undefined : "async";

  return (
    <div className={`group flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-[12px] shadow-lg transition-all duration-300 hover:-translate-y-[6px] hover:border-brand-green/35 hover:bg-white/[0.05] hover:shadow-[0_0_24px_rgba(27,228,61,0.15)] ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-bg2">
        <div className="absolute inset-0 bg-brand-bg/10 backdrop-blur-none md:backdrop-blur-[2px] transition-all duration-300 group-hover:backdrop-blur-none z-10" />
        <img
          src={project.image}
          alt={isEs ? `Sitio web de ${project.title}, ${project.category.es}` : `Website for ${project.title}, ${project.category.en}`}
          width={800}
          height={500}
          loading={loading}
          decoding={decoding}
          {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
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
            {t.common.viewProject} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PortfolioGrid({ projects = portfolioProjects }: { projects?: PortfolioProject[] }) {
  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <PortfolioCard key={project.id} project={project} isCarousel={false} />
      ))}
    </div>
  );
}

export function PortfolioCarousel({ projects = portfolioProjects }: { projects?: PortfolioProject[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth, scrollLeft, scrollWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      
      if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 10) {
        // Go back to the beginning when reaching the end
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isPaused || prefersReducedMotion) return;
    
    const interval = setInterval(() => {
      scroll("right");
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="relative group/carousel mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Navigation Buttons (Desktop/Tablet) */}
      <div className="absolute inset-y-0 -left-4 md:-left-6 z-20 hidden sm:flex items-center pointer-events-none">
        <button 
          onClick={() => scroll("left")}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-brand-bg2/90 backdrop-blur-md text-brand-white transition hover:border-brand-green/80 hover:text-brand-green shadow-xl opacity-0 group-hover/carousel:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0 duration-300 pointer-events-auto"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute inset-y-0 -right-4 md:-right-6 z-20 hidden sm:flex items-center pointer-events-none">
        <button 
          onClick={() => scroll("right")}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-brand-bg2/90 backdrop-blur-md text-brand-white transition hover:border-brand-green/80 hover:text-brand-green shadow-xl opacity-0 group-hover/carousel:opacity-100 translate-x-4 group-hover/carousel:translate-x-0 duration-300 pointer-events-auto"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 -mx-5 px-5 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, idx) => (
          <PortfolioCard 
            key={project.id} 
            project={project} 
            index={idx}
            isCarousel={true}
            className="w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
          />
        ))}
      </div>
    </div>
  );
}
