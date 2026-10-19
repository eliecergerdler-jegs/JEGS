import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { getHomeCopy } from "../data/homeCopy";
import { useLanguage } from "../contexts/useLanguage";
import { trackConversion } from "../lib/analytics";

export interface HomeProjectData { id: string; title: string; image: string; category: string; description: string; path?: string; vimeo?: string }

export function HomeProjectCard({ project, onOpen }: { project: HomeProjectData; onOpen: (id: string) => void }) {
  const { language } = useLanguage();
  const c = getHomeCopy(language);
  return <button type="button" className={`project${project.vimeo ? " video" : ""}`} onClick={() => { onOpen(project.id); if (project.vimeo) trackConversion("video_play", { video_title: project.title }); }}>
    <img className="project-image" src={project.image} alt={project.title} width={600} height={400} loading="lazy" />
    <span className="category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p>
    <span className="project-bottom"><span>{project.vimeo ? c.viewvideo : c.viewproject}</span><span className="arrow" aria-hidden="true">{project.vimeo ? "▷" : "↗"}</span></span>
  </button>;
}

export function HomeProjectPreview({ project, onClose }: { project: HomeProjectData | undefined; onClose: () => void }) {
  const { language } = useLanguage();
  const c = getHomeCopy(language);
  const dialog = useRef<HTMLDialogElement>(null);
  const id = project?.id;
  useEffect(() => {
    const element = dialog.current;
    if (id && element && !element.open) element.showModal();
    else if (!id && element?.open) element.close();
  }, [id]);
  return <dialog ref={dialog} className="modal" aria-label={c.projectpreview} onClose={onClose} onClick={event => {
    if (event.target !== event.currentTarget) return;
    const r = event.currentTarget.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) event.currentTarget.close();
  }}>
    <button className="modal-close" type="button" aria-label={c.close} onClick={() => dialog.current?.close()}>×</button>
    {project && <>
      {project.vimeo ? <iframe src={`https://player.vimeo.com/video/${project.vimeo}?autoplay=1&dnt=1`} title={project.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /> : <img src={project.image} alt={project.title} width={820} height={340} />}
      <div className="modal-copy"><div className="kicker">{project.category}</div><h2>{project.title}</h2><p>{project.description}</p>
        {project.vimeo ? <a className="btn secondary" href={`https://vimeo.com/${project.vimeo}`} target="_blank" rel="noopener noreferrer">{c.openvimeo} ↗</a> : <Link className="btn secondary" to={project.path ?? "/portfolio"} onClick={() => trackConversion("portfolio_click", { destination: project.path ?? "/portfolio", cta_location: "home_project" })}>{c.openlive} ↗</Link>}
      </div>
    </>}
  </dialog>;
}
