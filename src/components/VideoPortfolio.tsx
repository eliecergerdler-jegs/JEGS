import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, Film, Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/useLanguage";
import type { VideoPortfolioProject } from "../data/videoPortfolio";
import { featuredVideoProject, secondaryVideoProjects, verticalVideoProjects } from "../data/videoPortfolio";
import { useInteractiveCard } from "../hooks/useInteractiveCard";
import { trackConversion } from "../lib/analytics";

type VideoGalleryVariant = "hero" | "home";

export function HomeVideoPortfolioSection() {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<VideoPortfolioProject | null>(null);

  return (
    <>
      <section id="video-editing-portfolio" className="relative mx-auto max-w-7xl min-w-0 px-5 py-12 md:py-16 2xl:max-w-[88rem]">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:gap-14">
          <div className="min-w-0 text-center lg:text-left">
            <p className="mb-3 text-xs font-black uppercase tracking-[.32em] text-brand-green">{t.home.videoPortfolio.eyebrow}</p>
            <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight tracking-tight text-brand-white md:text-[2.75rem] lg:mx-0 lg:text-5xl">
              {t.home.videoPortfolio.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-muted md:text-lg lg:mx-0">
              {t.home.videoPortfolio.subtitle}
            </p>
            <div className="mt-8">
              <Link
                to="/video-editing"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold text-brand-white transition hover:border-brand-blue/50 hover:bg-brand-blue/10"
              >
                {t.home.videoPortfolio.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <VideoCompactGallery variant="home" onPlay={setActiveVideo} />
        </div>
      </section>
      <VimeoVideoModal project={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
}

export function VideoHeroVisual() {
  const [activeVideo, setActiveVideo] = useState<VideoPortfolioProject | null>(null);

  return (
    <>
      <VideoCompactGallery variant="hero" onPlay={setActiveVideo} />
      <VimeoVideoModal project={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
}

export function VideoPortfolioShowcase() {
  const [activeVideo, setActiveVideo] = useState<VideoPortfolioProject | null>(null);

  return (
    <>
      <div className="space-y-10">
        <FeaturedPortfolioProject project={featuredVideoProject} onPlay={setActiveVideo} />
        <div className="mx-auto grid max-w-[1040px] justify-center gap-6 md:grid-cols-[repeat(2,minmax(0,280px))] lg:grid-cols-[repeat(3,minmax(0,280px))] lg:gap-7">
          {verticalVideoProjects.map((project) => (
            <VerticalPortfolioProject key={project.id} project={project} onPlay={setActiveVideo} />
          ))}
        </div>
      </div>
      <VimeoVideoModal project={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
}

function VideoCompactGallery({ variant, onPlay }: { variant: VideoGalleryVariant; onPlay: (project: VideoPortfolioProject) => void }) {
  const { language, t } = useLanguage();
  const interaction = useInteractiveCard();
  const isEs = language === "es";
  const featuredTitle = isEs ? featuredVideoProject.title.es : featuredVideoProject.title.en;
  const featuredCategory = isEs ? featuredVideoProject.category.es : featuredVideoProject.category.en;
  const featuredDescription = isEs ? featuredVideoProject.description.es : featuredVideoProject.description.en;
  const isHero = variant === "hero";

  return (
    <div className="relative mx-auto grid w-full max-w-xl min-w-0 gap-4 rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
      <article
        data-video-id={featuredVideoProject.vimeoId}
        {...interaction.interactiveCardProps}
        role="button"
        tabIndex={0}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("button")) return;
          event.currentTarget.focus();
          onPlay(featuredVideoProject);
        }}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onPlay(featuredVideoProject);
          }
        }}
        className={`${interaction.interactiveCardClassName} relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black`}
        aria-label={t.videoPortfolio.playLabel.replace("{title}", featuredTitle)}
      >
        <div data-video-media="featured" className={`${interaction.interactiveMediaClassName} relative aspect-video overflow-hidden`}>
          <img
            src={featuredVideoProject.thumbnailUrl}
            alt={isEs ? featuredVideoProject.thumbnailAlt.es : featuredVideoProject.thumbnailAlt.en}
            width={featuredVideoProject.thumbnailWidth}
            height={featuredVideoProject.thumbnailHeight}
            loading={isHero ? "eager" : "lazy"}
            decoding={isHero ? undefined : "async"}
            fetchPriority={isHero ? "high" : "low"}
            className="h-full w-full object-contain object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-bg/70 to-transparent" />
          <button
            type="button"
            onClick={() => onPlay(featuredVideoProject)}
            className="absolute right-4 bottom-4 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-green text-brand-bg shadow-[0_0_18px_rgba(184,241,43,.24)] transition focus-visible:outline-brand-green"
            aria-label={t.videoPortfolio.playLabel.replace("{title}", featuredTitle)}
          >
            <Play size={18} fill="currentColor" aria-hidden="true" />
          </button>
          <div className="absolute bottom-4 left-4 right-20">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-brand-green">
              {isHero ? "Vimeo" : featuredCategory}
            </p>
            <h3 className={`${interaction.interactiveTitleClassName} mt-1 text-sm font-black text-brand-white md:text-lg`}>{featuredTitle}</h3>
            {variant === "home" && (
              <p className="mt-2 hidden max-w-md text-sm leading-6 text-brand-muted/95 md:block">{featuredDescription}</p>
            )}
          </div>
        </div>
      </article>

      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {secondaryVideoProjects.map((project) => (
          <CompactVideoTile key={project.id} project={project} onPlay={onPlay} />
        ))}
      </div>
    </div>
  );
}

function CompactVideoTile({ project, onPlay }: { project: VideoPortfolioProject; onPlay: (project: VideoPortfolioProject) => void }) {
  const { language, t } = useLanguage();
  const interaction = useInteractiveCard();
  const isEs = language === "es";
  const title = isEs ? project.title.es : project.title.en;
  const compactTitle = project.compactTitle ? (isEs ? project.compactTitle.es : project.compactTitle.en) : title;
  const category = isEs ? project.category.es : project.category.en;
  const compactCategory = project.compactCategory ? (isEs ? project.compactCategory.es : project.compactCategory.en) : category;

  return (
    <article
      data-video-id={project.vimeoId}
      {...interaction.interactiveCardProps}
      role="button"
      tabIndex={0}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("button")) return;
        event.currentTarget.focus();
        onPlay(project);
      }}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onPlay(project);
        }
      }}
      className={`${interaction.interactiveCardClassName} relative overflow-hidden rounded-2xl border border-white/10 bg-brand-bg2`}
      aria-label={t.videoPortfolio.playLabel.replace("{title}", title)}
    >
      <div data-video-media="compact-secondary" className={`${interaction.interactiveMediaClassName} relative aspect-[4/5] overflow-hidden bg-black`}>
        <img
          src={project.thumbnailUrl}
          alt={isEs ? project.thumbnailAlt.es : project.thumbnailAlt.en}
          width={project.thumbnailWidth}
          height={project.thumbnailHeight}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-bg/75 to-transparent" />
        <button
          type="button"
          onClick={() => onPlay(project)}
          className={`${interaction.interactiveAccentClassName} absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-brand-bg/75 text-brand-green backdrop-blur-md transition hover:border-brand-green/60 hover:bg-brand-green hover:text-brand-bg`}
          aria-label={t.videoPortfolio.playLabel.replace("{title}", title)}
        >
          <Play size={16} fill="currentColor" aria-hidden="true" />
        </button>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="line-clamp-1 text-[0.56rem] font-black uppercase tracking-[0.2em] text-brand-green md:text-[0.62rem]">
            {compactCategory}
          </p>
          <h3 className={`${interaction.interactiveTitleClassName} mt-1 line-clamp-2 text-[0.72rem] font-black leading-tight text-brand-white md:text-sm`}>{compactTitle}</h3>
        </div>
      </div>
    </article>
  );
}

function FeaturedPortfolioProject({ project, onPlay }: { project: VideoPortfolioProject; onPlay: (project: VideoPortfolioProject) => void }) {
  const { language, t } = useLanguage();
  const interaction = useInteractiveCard();
  const [imageFailed, setImageFailed] = useState(false);
  const isEs = language === "es";
  const title = isEs ? project.title.es : project.title.en;
  const category = isEs ? project.category.es : project.category.en;
  const description = isEs ? project.description.es : project.description.en;

  return (
    <article
      data-video-id={project.vimeoId}
      data-portfolio-project
      {...interaction.interactiveCardProps}
      role="button"
      tabIndex={0}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("button")) return;
        event.currentTarget.focus();
        onPlay(project);
      }}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onPlay(project);
        }
      }}
      className={`${interaction.interactiveCardClassName} mx-auto max-w-[760px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] text-brand-white backdrop-blur-[12px]`}
      aria-label={t.videoPortfolio.playLabel.replace("{title}", title)}
    >
      <div data-video-media="portfolio-featured" className={`${interaction.interactiveMediaClassName} relative aspect-video overflow-hidden bg-black`}>
        {project.thumbnailUrl && !imageFailed ? (
          <img
            src={project.thumbnailUrl}
            alt={isEs ? project.thumbnailAlt.es : project.thumbnailAlt.en}
            width={project.thumbnailWidth}
            height={project.thumbnailHeight}
            loading="eager"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-contain object-center"
          />
        ) : (
          <VideoThumbnailFallback title={title} />
        )}
        <button
          type="button"
          onClick={() => onPlay(project)}
          className="absolute right-4 bottom-4 grid h-12 w-12 place-items-center rounded-2xl bg-brand-green text-brand-bg shadow-[0_0_18px_rgba(184,241,43,.24)] transition focus-visible:outline-brand-green"
          aria-label={t.videoPortfolio.playLabel.replace("{title}", title)}
        >
          <Play size={19} fill="currentColor" aria-hidden="true" />
        </button>
      </div>
      <div className="p-5 md:p-6">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-green">{category}</p>
        <h3 className={`${interaction.interactiveTitleClassName} mt-2 text-xl font-black leading-tight text-brand-white md:text-2xl`}>{title}</h3>
        <p className="mt-3 text-sm leading-6 text-brand-muted/95 md:text-base">{description}</p>
      </div>
    </article>
  );
}

function VerticalPortfolioProject({ project, onPlay }: { project: VideoPortfolioProject; onPlay: (project: VideoPortfolioProject) => void }) {
  const { language, t } = useLanguage();
  const interaction = useInteractiveCard();
  const [imageFailed, setImageFailed] = useState(false);
  const isEs = language === "es";
  const title = isEs ? project.title.es : project.title.en;
  const category = isEs ? project.category.es : project.category.en;
  const description = isEs ? project.description.es : project.description.en;

  return (
    <article
      data-video-id={project.vimeoId}
      data-portfolio-project
      {...interaction.interactiveCardProps}
      role="button"
      tabIndex={0}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("button")) return;
        event.currentTarget.focus();
        onPlay(project);
      }}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onPlay(project);
        }
      }}
      className={`${interaction.interactiveCardClassName} mx-auto w-full max-w-[290px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] text-brand-white backdrop-blur-[12px] md:max-w-[280px] md:last:col-span-2 md:last:justify-self-center lg:last:col-span-1 lg:last:col-start-2`}
      aria-label={t.videoPortfolio.playLabel.replace("{title}", title)}
    >
      <div data-video-media="portfolio-vertical" className={`${interaction.interactiveMediaClassName} relative aspect-[9/16] overflow-hidden bg-black`}>
        {project.thumbnailUrl && !imageFailed ? (
          <img
            src={project.thumbnailUrl}
            alt={isEs ? project.thumbnailAlt.es : project.thumbnailAlt.en}
            width={project.thumbnailWidth}
            height={project.thumbnailHeight}
            loading="eager"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-contain object-center"
          />
        ) : (
          <VideoThumbnailFallback title={title} />
        )}
        <button
          type="button"
          onClick={() => onPlay(project)}
          className={`${interaction.interactiveAccentClassName} absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-brand-bg/75 text-brand-green backdrop-blur-md transition hover:border-brand-green/60 hover:bg-brand-green hover:text-brand-bg focus-visible:outline-brand-green`}
          aria-label={t.videoPortfolio.playLabel.replace("{title}", title)}
        >
          <Play size={18} fill="currentColor" aria-hidden="true" />
        </button>
      </div>
      <div className="flex min-h-[210px] flex-col p-5">
        <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-brand-green">{category}</p>
        <h3 className={`${interaction.interactiveTitleClassName} mt-2 text-lg font-black leading-tight text-brand-white`}>{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-brand-muted/95">{description}</p>
        <button
          type="button"
          onClick={() => onPlay(project)}
          className={`${interaction.interactiveAccentClassName} mt-5 inline-flex w-fit items-center gap-2 text-sm font-black text-brand-white transition-colors hover:text-brand-green`}
          aria-label={t.videoPortfolio.playLabel.replace("{title}", title)}
        >
          {t.videoPortfolio.watchCta}
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

function VimeoVideoModal({ project, onClose }: { project: VideoPortfolioProject | null; onClose: () => void }) {
  const { language, t } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const isEs = language === "es";

  useEffect(() => {
    if (!project) return;
    trackConversion("video_play", { video_title: project.title.en });
    const previousActiveElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;
    dialog?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key !== "Tab" || !dialog) return;
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'button, iframe, a[href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [onClose, project]);

  if (!project) return null;

  const title = isEs ? project.title.es : project.title.en;
  const iframeSrc = `https://player.vimeo.com/video/${project.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`;
  const modalWidthClass = project.aspect === "landscape" ? "max-w-5xl" : "max-w-md";

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-bg/85 px-4 py-6 backdrop-blur-xl"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`relative w-full ${modalWidthClass} overflow-hidden rounded-[2rem] border border-white/10 bg-brand-bg2 shadow-2xl`}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-green">{isEs ? project.category.es : project.category.en}</p>
            <h2 id={titleId} className="mt-1 text-lg font-black text-brand-white md:text-xl">{title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-brand-white transition hover:border-brand-green/60 hover:text-brand-green"
            aria-label={t.videoPortfolio.closeLabel}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <div className="w-full max-h-[78vh] bg-black" style={{ aspectRatio: `${project.width} / ${project.height}` }}>
          <iframe
            src={iframeSrc}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

function VideoThumbnailFallback({ title }: { title: string }) {
  return (
    <div className="grid h-full w-full place-items-center bg-[linear-gradient(135deg,rgba(8,18,37,1),rgba(30,123,255,.16))] p-8 text-center">
      <div>
        <Film className="mx-auto text-brand-green" size={38} aria-hidden="true" />
        <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-brand-white">{title}</p>
      </div>
    </div>
  );
}
