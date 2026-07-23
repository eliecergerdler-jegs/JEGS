import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/useLanguage";
import type { PortfolioProject } from "../data/portfolio";
import { portfolioProjects } from "../data/portfolio";
import { useRef, useEffect, useState } from "react";
import { useInteractiveCard } from "../hooks/useInteractiveCard";
import { WhatsAppButton } from "./WhatsAppButton";

const webHeroProjects = portfolioProjects.slice(0, 4);

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
  const interaction = useInteractiveCard();

  // Determine loading priority based on position in carousel/grid
  const isLcp = isCarousel && index === 0;
  const loading = isLcp ? "eager" : "lazy";
  const fetchPriority = isLcp ? "high" : (isCarousel ? "low" : undefined);
  const decoding = isLcp ? undefined : "async";

  return (
    <Link
      to={project.link}
      {...interaction.interactiveCardProps}
      onKeyDown={(event) => {
        if (event.key === " ") {
          event.preventDefault();
          event.currentTarget.click();
        }
      }}
      className={`${interaction.interactiveCardClassName} group flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] shadow-lg backdrop-blur-[12px] ${className}`}
      aria-label={`${t.common.viewProject}: ${project.title}`}
    >
      {/* Image Container */}
      <div className={`${interaction.interactiveMediaClassName} relative aspect-[16/10] w-full overflow-hidden bg-brand-bg2`}>
        <div className="absolute inset-0 z-10 bg-brand-bg/10 transition-all duration-300" />
        <img
          src={project.image}
          alt={isEs ? `Sitio web de ${project.title}, ${project.category.es}` : `Website for ${project.title}, ${project.category.en}`}
          width={800}
          height={500}
          loading={loading}
          decoding={decoding}
          {...(fetchPriority ? { fetchPriority } : {})}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-green">
          {isEs ? project.category.es : project.category.en}
        </p>
        
        <h3 className={`${interaction.interactiveTitleClassName} mt-3 text-2xl font-black text-brand-white`}>
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
          <span className={`${interaction.interactiveAccentClassName} inline-flex items-center gap-2 text-sm font-black text-brand-white`}>
            {t.common.viewProject} <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
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

export function WebPortfolioHero() {
  const { language, t } = useLanguage();
  const isEs = language === "es";
  const [featuredProject, ...secondaryProjects] = webHeroProjects;

  return (
    <section className="relative overflow-hidden px-5 py-14 md:py-20">
      <div className="relative mx-auto grid max-w-7xl min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] xl:gap-14">
        <div className="min-w-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-muted">
            <span className="h-2 w-2 rounded-full bg-brand-green shadow-[0_0_16px_rgba(184,241,43,.75)]" aria-hidden="true" />
            {t.portfolioPage.hero.eyebrow}
          </div>
          <h1 className="max-w-full overflow-wrap-anywhere text-[2.15rem] font-black leading-[1.05] tracking-tight text-brand-white sm:max-w-4xl sm:text-5xl md:text-6xl">
            {t.portfolioPage.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted/95 md:text-xl">
            {t.portfolioPage.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message={t.portfolioPage.hero.message} className="w-full sm:w-auto">
              {t.portfolioPage.hero.cta}
            </WhatsAppButton>
            <a
              href="#web-portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-brand-white backdrop-blur-md transition hover:border-brand-blue/60 hover:bg-brand-blue/10 sm:w-auto"
            >
              {t.portfolioPage.hero.secondaryCta}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-xl min-w-0 gap-4 rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
          <WebHeroProjectTile project={featuredProject} featured label={t.portfolioPage.hero.featuredLabel} isEs={isEs} />
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {secondaryProjects.map((project) => (
              <WebHeroProjectTile key={project.id} project={project} isEs={isEs} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WebHeroProjectTile({
  project,
  featured = false,
  label,
  isEs,
}: {
  project: PortfolioProject;
  featured?: boolean;
  label?: string;
  isEs: boolean;
}) {
  const interaction = useInteractiveCard();
  const category = isEs ? project.category.es : project.category.en;

  return (
    <Link
      to={project.link}
      {...interaction.interactiveCardProps}
      onKeyDown={(event) => {
        if (event.key === " ") {
          event.preventDefault();
          event.currentTarget.click();
        }
      }}
      className={`${interaction.interactiveCardClassName} group relative overflow-hidden border border-white/10 bg-brand-bg2 ${
        featured ? "rounded-[1.5rem]" : "rounded-2xl"
      }`}
      aria-label={`${project.title} - ${category}`}
    >
      <div className={`${interaction.interactiveMediaClassName} relative ${featured ? "aspect-[16/10]" : "aspect-[4/5]"} overflow-hidden bg-black`}>
        {featured && (
          <div className="absolute inset-x-0 top-0 z-20 flex h-8 items-center gap-2 border-b border-white/10 bg-brand-bg/80 px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-green/80" aria-hidden="true" />
          </div>
        )}
        <img
          src={project.image}
          alt={isEs ? `Vista previa del sitio web ${project.title}` : `Website preview for ${project.title}`}
          width={800}
          height={500}
          loading={featured ? "eager" : "lazy"}
          decoding={featured ? undefined : "async"}
          fetchPriority={featured ? "high" : "low"}
          className={`h-full w-full object-cover object-top ${featured ? "pt-8" : ""}`}
        />
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-brand-bg/88 via-brand-bg/48 to-transparent px-4 pb-4 pt-12">
          {featured && label && (
            <p className="mb-2 text-[0.68rem] font-black uppercase tracking-[0.22em] text-brand-green">{label}</p>
          )}
          <p className="line-clamp-1 text-[0.58rem] font-black uppercase tracking-[0.2em] text-brand-green md:text-[0.64rem]">
            {category}
          </p>
          <h3 className={`${interaction.interactiveTitleClassName} mt-1 line-clamp-2 font-black leading-tight text-brand-white ${featured ? "text-lg md:text-xl" : "text-[0.72rem] md:text-sm"}`}>
            {project.title}
          </h3>
        </div>
      </div>
    </Link>
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
      <div className="absolute inset-y-0 left-2 z-20 hidden sm:flex items-center pointer-events-none">
        <button 
          onClick={() => scroll("left")}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-brand-bg2/90 backdrop-blur-md text-brand-white transition hover:border-brand-green/80 hover:text-brand-green shadow-xl opacity-0 group-hover/carousel:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0 duration-300 pointer-events-auto"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-2 z-20 hidden sm:flex items-center pointer-events-none">
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
