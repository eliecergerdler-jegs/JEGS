import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getHomeCopy } from "../data/homeCopy";
import { getHomeProjects } from "../data/homeProjects";
import { HomeText } from "../components/HomeText";
import { HomeProjectCard, HomeProjectPreview } from "../components/HomeProject";
import { useLanguage } from "../contexts/useLanguage";
import { usePageMeta } from "../hooks/usePageMeta";
import { homeQuoteMessage, useHomeQuote } from "../hooks/useHomeQuote";
import type { HomeService } from "../hooks/useHomeQuote";
import { trackConversion } from "../lib/analytics";

const services: HomeService[] = ["shopify", "wordpress", "react", "video", "design", "events"];
const categories = ["web", "video", "events"] as const;

interface ServiceCard {
  id: HomeService;
  number: string;
  icon: string;
  title: string;
  text: string;
  tags: string[];
  list: string[];
  cta: string;
  portfolio?: { path: string; label: string };
}

export function Home() {
  const { language } = useLanguage();
  const c = getHomeCopy(language);
  const { quote, setQuote } = useHomeQuote();
  const [category, setCategory] = useState<(typeof categories)[number]>("web");
  const [projectId, setProjectId] = useState<string | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const projects = getHomeProjects(language);
  const selected = Object.values(projects).flat().find(project => project.id === projectId);
  const whatsapp = `https://wa.me/584125738257?text=${encodeURIComponent(homeQuoteMessage(language, quote))}`;
  const workDestination = category === "web" ? "/portfolio?type=web" : category === "video" ? "/video-editing" : "/events";
  const cards: ServiceCard[] = [
    { id: "shopify", number: "01 / SHOPIFY", icon: "↗", title: c.shopifytitle, text: c.shopifyp, tags: ["Shopify", "Liquid"], list: [c.shopify1, c.shopify2, c.shopify3], cta: c.shopifycta },
    { id: "wordpress", number: "02 / WORDPRESS", icon: "W", title: c.wordpresstitle, text: c.wordpressp, tags: ["WordPress"], list: [c.wordpress1, c.wordpress2, c.wordpress3], cta: c.wordpresscta },
    { id: "react", number: "03 / REACT", icon: "</>", title: c.webtitle, text: c.webp, tags: ["React", "TypeScript"], list: [c.web1, c.web2, c.web3], cta: c.webcta },
  ];
  const complementaryCards: ServiceCard[] = [
    { id: "video", number: "01 / VIDEO", icon: "▷", title: c.videotitle, text: c.videop, tags: ["Reels", c.estatetag], list: [c.video1, c.video2, c.video3], cta: c.videocta, portfolio: { path: "/video-editing", label: c.allvideo } },
    { id: "design", number: c.designlabel, icon: "✳", title: c.designtitle, text: c.designp, tags: [c.socialtag, c.brandtag], list: [c.design1, c.design2, c.design3], cta: c.designcta },
  ];
  const renderCard = (card: ServiceCard) => {
    const portfolio = card.portfolio;
    return <article className="service" key={card.id}><div className="service-main"><span className="number">{card.number}</span><div className="service-icon" aria-hidden="true">{card.icon}</div><h3><HomeText text={card.title} /></h3><p>{card.text}</p><div className="tags">{card.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div><div className="service-details"><ul>{card.list.map(item => <li key={item}>{item}</li>)}</ul></div><div className="service-links"><Link className="text-link" to="/#contact" onClick={() => { setQuote(value => ({ ...value, service: card.id })); trackConversion("quote_cta_click", { service: card.id, cta_location: "home_service" }); }}>{card.cta} <span aria-hidden="true">↗</span></Link>{portfolio && <Link className="text-link" to={portfolio.path} onClick={() => trackConversion("portfolio_click", { destination: portfolio.path, cta_location: "home_complementary_service" })}>{portfolio.label} <span aria-hidden="true">↗</span></Link>}</div></article>;
  };
  usePageMeta(c.title.replace(" | JEGS Digital", ""), c.description);
  return <>
    <section className="wrap hero"><div><div className="eyebrow"><span className="dot" aria-hidden="true" />{c.eyebrow}</div><h1><HomeText text={c.h1} /></h1><p className="intro"><HomeText text={c.intro} /></p>
      <div className="actions"><Link className="btn" to="/#contact" onClick={() => trackConversion("quote_cta_click", { service: quote.service, cta_location: "home_hero" })}>{c.herocta} <span className="arrow" aria-hidden="true">↗</span></Link><Link className="btn secondary" to="/#work">{c.herosecond} <span aria-hidden="true">↓</span></Link></div><div className="micro"><span className="dot" aria-hidden="true" />{c.location}</div>
    </div><div className="portrait-stage"><img className="portrait" src="/images/home/eliecer-retrato.webp" alt={c.heroalt} width={1100} height={1100} fetchPriority="high" /><div className="caption"><strong>Eliecer Gerdler.</strong><span>{c.role}</span></div></div></section>
    <div className="wrap tools"><span className="label"><HomeText text={c.tools} /></span><strong>Shopify</strong><strong>WordPress</strong><strong>React</strong><strong>TypeScript</strong></div>
    <section className="wrap section" id="services"><div className="section-head"><div><div className="kicker">{c.servicesk}</div><h2><HomeText text={c.servicesh} /></h2></div><p>{c.servicesp}</p></div><div className="services">
      {cards.map(renderCard)}
    </div></section>
    <section className="wrap section work-section" id="work"><div className="section-head"><div><div className="kicker">{c.workk}</div><h2><HomeText text={c.workh} /></h2></div><p>{c.workp}</p></div>
      <div className="work-tabs" role="tablist" aria-label={c.navwork}>{categories.map((item, index) => <button type="button" key={item} ref={node => { tabRefs.current[index] = node; }} className="work-tab" role="tab" aria-selected={category === item} tabIndex={category === item ? 0 : -1} aria-controls="work-panel" id={`tab-${item}`} onClick={() => setCategory(item)} onKeyDown={event => {
        let next: number;
        if (event.key === "ArrowRight") next = (index + 1) % categories.length;
        else if (event.key === "ArrowLeft") next = (index + categories.length - 1) % categories.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = categories.length - 1;
        else return;
        event.preventDefault(); setCategory(categories[next]); tabRefs.current[next]?.focus();
      }}>{item === "web" ? c.tabweb : item === "video" ? c.tabvideo : c.tabevents}</button>)}</div>
      <div className="work-grid" id="work-panel" role="tabpanel" aria-labelledby={`tab-${category}`}>{(category === "events" ? projects.events.slice(0, 1) : projects[category]).map(project => <HomeProjectCard key={project.id} project={project} onOpen={setProjectId} />)}</div>
      <div className="work-more"><Link className="btn secondary" to={workDestination} onClick={() => trackConversion("portfolio_click", { destination: workDestination, cta_location: "home_portfolio" })}>{category === "web" ? c.allweb : category === "video" ? c.allvideo : c.allevents} <span aria-hidden="true">↗</span></Link></div>
    </section>
    <section className="wrap section complementary-section" id="creative"><div className="section-head"><div><div className="kicker">{c.creativek}</div><h2><HomeText text={c.creativeh} /></h2></div><p>{c.creativep}</p></div><div className="services complementary-services">{complementaryCards.map(renderCard)}</div><div className="event-hint"><span aria-hidden="true">✳</span><span>{c.eventhint}</span><Link to="/events">{c.eventbutton}</Link></div></section>
    <section className="about-band" id="about"><div className="wrap about-grid"><div className="work-photo"><img src="/images/home/eliecer-macbook.webp" alt={c.aboutphotoalt} width={800} height={1000} loading="lazy" /><div className="photo-note">{c.aboutnote}</div></div><div><div className="kicker">{c.aboutk}</div><h2><HomeText text={c.abouth} /></h2><p>{c.aboutp1}</p><p>{c.aboutp2}</p><div className="signature">Eliecer Gerdler<small>{c.founder}</small></div><div className="about-points"><span>{c.point1}</span><span>{c.point2}</span><span>{c.point3}</span></div></div></div></section>
    <section className="wrap section"><div className="section-head"><div><div className="kicker">{c.processk}</div><h2><HomeText text={c.processh} /></h2></div></div><div className="process">{[[c.step1, c.step1p], [c.step2, c.step2p], [c.step3, c.step3p]].map(([title, text], index) => <article className="step" key={title}><span className="n">0{index + 1}.</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="wrap" id="contact"><div className="contact-panel"><div className="contact-copy"><div className="kicker">{c.contactk}</div><h2><HomeText text={c.contacth} /></h2><p>{c.contactp}</p><a className="email-link" href="mailto:ejgerdler@gmail.com">ejgerdler@gmail.com ↗</a></div><div className="contact-form">
      <p className="field-label" id="home-service-label">{c.need}</p><div className="service-options" role="group" aria-labelledby="home-service-label">{services.map(service => <button type="button" className="option" key={service} aria-pressed={quote.service === service} onClick={() => setQuote(value => ({ ...value, service }))}>{c[service]}</button>)}</div>
      <label htmlFor="home-phase">{c.phase}</label><select id="home-phase" value={quote.phase} onChange={event => setQuote(value => ({ ...value, phase: Number(event.target.value) }))}>{[c.phase1, c.phase2, c.phase3].map((phase, index) => <option key={phase} value={index}>{phase}</option>)}</select>
      <label htmlFor="home-brief">{c.projectlabel}</label><input id="home-brief" value={quote.brief} maxLength={500} placeholder={c.placeholder} onChange={event => setQuote(value => ({ ...value, brief: event.target.value }))} />
      <a className="btn" href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => { trackConversion("whatsapp_click", { service: quote.service, cta_location: "home_quote" }); trackConversion("generate_lead", { service: quote.service, form_name: "home_quote", lead_source: "whatsapp" }); }}>{c.whatsapp} <span className="arrow" aria-hidden="true">↗</span></a><p className="fine">{c.contactfine}</p>
    </div></div></section>
    <section className="wrap section faq"><div><div className="kicker">{c.faqk}</div><h2><HomeText text={c.faqh} /></h2></div><div className="faq-list">{[[c.q1, c.a1], [c.q2, c.a2], [c.q3, c.a3], [c.q4, c.a4]].map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
    <HomeProjectPreview project={selected} onClose={() => setProjectId(null)} />
  </>;
}
