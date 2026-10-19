import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeText } from "../components/HomeText";
import { HomeProjectCard, HomeProjectPreview } from "../components/HomeProject";
import { getHomeCopy } from "../data/homeCopy";
import { getHomeProjects } from "../data/homeProjects";
import { useLanguage } from "../contexts/useLanguage";
import { usePageMeta } from "../hooks/usePageMeta";
import { useHomeQuote } from "../hooks/useHomeQuote";

export function EventsPage() {
  const { language } = useLanguage();
  const c = getHomeCopy(language);
  const { setQuote } = useHomeQuote();
  const [projectId, setProjectId] = useState<string | null>(null);
  const projects = getHomeProjects(language).events;
  usePageMeta(c.eventtitle.replace(" | JEGS Digital", ""), c.eventintro);
  return <section className="wrap section events-intro">
    <Link className="text-link" to="/#work">← {c.backhome}</Link><div className="kicker">JEGS / {c.events}</div><h1><HomeText text={c.eventheading} /></h1><p className="events-description">{c.eventintro}</p>
    <Link className="btn" to="/#contact" onClick={() => setQuote(value => ({ ...value, service: "events" }))}>{c.eventbrief} <span aria-hidden="true">↗</span></Link>
    <div className="work-grid events-projects">{projects.map(project => <HomeProjectCard project={project} key={project.id} onOpen={setProjectId} />)}</div>
    <div className="events-details"><h2>{c.eventprepare}</h2><p>{c.eventpreparetext}</p></div>
    <HomeProjectPreview project={projects.find(project => project.id === projectId)} onClose={() => setProjectId(null)} />
  </section>;
}
