import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Code2,
  Clapperboard,
  Copy,
  Globe2,
  Layers,
  Mail,
  Palette,
  QrCode,
  Share2,
  X,
} from "lucide-react";
import { useLanguage } from "../contexts/useLanguage";
import type { Language } from "../contexts/language";
import { usePageMeta } from "../hooks/usePageMeta";
import { trackConversion } from "../lib/analytics";
import logo from "../assets/Imagenes/jegs-bull-logo.webp";
import portrait from "../assets/Imagenes/eliecer-gerdler.webp";
import footerAurora from "../assets/Imagenes/card-footer-aurora.webp";
import "./DigitalCardPage.css";

const copy = {
  es: {
    title: "Eliecer Gerdler — Soluciones digitales",
    description: "Desarrollo web y soluciones digitales para marcas y negocios.",
    role: "Desarrollador web | Soluciones digitales",
    intro: "Creo experiencias digitales claras, rápidas y diseñadas para ayudar a los negocios a crecer.",
    portraitAlt: "Retrato de Eliecer Gerdler con suéter azul",
    services: "Lo que hago",
    serviceNames: ["Desarrollo web", "Shopify", "Diseño digital", "Video y contenido"],
    nav: "Explora JEGS",
    links: ["Mi portafolio", "Servicios", "Contacto"],
    linkNotes: ["Proyectos y casos reales", "Cómo puedo ayudarte", "Correo y más opciones"],
    connect: "Conecta conmigo",
    whatsapp: "Hablemos por WhatsApp",
    email: "Enviar correo",
    vcf: "Guardar contacto",
    share: "Compartir tarjeta",
    qr: "Mostrar código QR",
    qrTitle: "Escanea para guardar la tarjeta",
    qrClose: "Cerrar código QR",
    shareCopied: "Enlace copiado al portapapeles",
    shareError: "No se pudo compartir el enlace. Copia la dirección desde el navegador.",
    footer: "Ideas para la web. Resultados para tu negocio.",
    backHome: "JEGS Digital",
    servicesLink: "Ver servicios",
    contactLink: "Hablemos",
    portfolioLink: "Ver proyectos",
    available: "Soluciones web y contenido digital",
    opensNewTab: "abre en una pestaña nueva",
    socialUrlPending: "URL de perfil pendiente de confirmar",
  },
  en: {
    title: "Eliecer Gerdler — Digital Solutions",
    description: "Web development and digital solutions for brands and businesses.",
    role: "Web Developer | Digital Solutions",
    intro: "I build clear, fast digital experiences that help businesses grow.",
    portraitAlt: "Portrait of Eliecer Gerdler wearing a blue sweater",
    services: "What I do",
    serviceNames: ["Web Development", "Shopify", "Digital Design", "Video & Content"],
    nav: "Explore JEGS",
    links: ["My portfolio", "Services", "Contact"],
    linkNotes: ["Projects and case studies", "How I can help", "Email and more"],
    connect: "Connect with me",
    whatsapp: "Let's talk on WhatsApp",
    email: "Send an email",
    vcf: "Save contact",
    share: "Share card",
    qr: "Show QR code",
    qrTitle: "Scan to save this card",
    qrClose: "Close QR code",
    shareCopied: "Link copied to clipboard",
    shareError: "Could not share the link. Copy the address from your browser.",
    footer: "Web ideas. Real results for your business.",
    backHome: "JEGS Digital",
    servicesLink: "Explore services",
    contactLink: "Let's talk",
    portfolioLink: "View projects",
    available: "Web and digital content solutions",
    opensNewTab: "opens in a new tab",
    socialUrlPending: "profile URL to be confirmed",
  },
} satisfies Record<Language, Record<string, string | string[]>>;

const linkedinUrl = "https://www.linkedin.com/in/eliecer-gerdler";
const instagramUrl = "https://www.instagram.com/jegs.digital?psln=MTRjMTZiejhlYzZ4NA==";

const socialLinks = [
  { label: "LinkedIn", href: linkedinUrl, mark: "linkedin" },
  { label: "GitHub", href: "https://github.com/eliecergerdler", mark: "github" },
  { label: "Instagram", href: instagramUrl, mark: "ig" },
  { label: "JEGS Digital", href: "https://jegs.digital", mark: "web" },
];

const waNumber = "584125738257";
const email = "ejgerdler@gmail.com";
const siteUrl = "https://jegs.digital/card";
const ogImage = "https://jegs.digital/Imagenes/card-og.png";

function updateMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

function BrandMark() {
  return <img className="card-brand-mark" src={logo} alt="" width="42" height="42" />;
}

function BrandSocialMark({ mark }: { mark: string }) {
  if (mark === "linkedin") return <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.2H4.98V9.1h2.95v9.1ZM6.45 7.86a1.71 1.71 0 1 1 .02-3.42 1.71 1.71 0 0 1-.02 3.42Zm12.5 10.34H16v-4.43c0-1.06-.02-2.42-1.48-2.42-1.48 0-1.71 1.15-1.71 2.34v4.51H9.86V9.1h2.83v1.24h.04c.4-.72 1.36-1.48 2.8-1.48 2.99 0 3.54 1.97 3.54 4.53v4.81Z" /></svg>;
  if (mark === "github") return <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.31-3.76-1.31-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.58 1.2 3.21.92.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.58 10.58 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.29-2.62 5.23-5.11 5.51.4.34.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" /></svg>;
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.7" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>;
}

export function DigitalCardPage() {
  const { language, setLanguage } = useLanguage();
  const t = copy[language];
  const [qrOpen, setQrOpen] = useState(false);
  const [qrImage, setQrImage] = useState("");
  const [feedback, setFeedback] = useState("");
  const qrTriggerRef = useRef<HTMLButtonElement>(null);
  const qrCloseRef = useRef<HTMLButtonElement>(null);

  usePageMeta(t.title, t.description);

  useEffect(() => {
    const oldImages = {
      og: document.querySelector('meta[property="og:image"]')?.getAttribute("content") ?? "https://jegs.digital/Imagenes/og-image-v1.png",
      twitter: document.querySelector('meta[name="twitter:image"]')?.getAttribute("content") ?? "https://jegs.digital/Imagenes/og-image-v1.png",
      alt: document.querySelector('meta[property="og:image:alt"]')?.getAttribute("content") ?? "JEGS Digital",
    };
    updateMeta('meta[property="og:image"]', ogImage);
    updateMeta('meta[property="og:image:secure_url"]', ogImage);
    updateMeta('meta[property="og:image:alt"]', "JEGS Digital — Eliecer Gerdler");
    updateMeta('meta[name="twitter:image"]', ogImage);
    updateMeta('meta[property="og:title"]', `${t.title} | JEGS Digital`);
    updateMeta('meta[name="twitter:title"]', `${t.title} | JEGS Digital`);
    return () => {
      updateMeta('meta[property="og:image"]', oldImages.og);
      updateMeta('meta[property="og:image:secure_url"]', oldImages.og);
      updateMeta('meta[property="og:image:alt"]', oldImages.alt);
      updateMeta('meta[name="twitter:image"]', oldImages.twitter);
    };
  }, [t.title]);

  useEffect(() => {
    if (!qrOpen) return;
    let cancelled = false;
    void import("qrcode").then(({ default: QRCode }) => QRCode.toDataURL(siteUrl, {
      errorCorrectionLevel: "M",
      margin: 2,
      width: 280,
      color: { dark: "#07101c", light: "#f5f8fb" },
    })).then((data) => {
      if (!cancelled) setQrImage(data);
    }).catch(() => {
      if (!cancelled) setFeedback(language === "es" ? "No se pudo generar el código QR." : "Could not generate the QR code.");
    });
    return () => { cancelled = true; };
  }, [qrOpen, language]);

  useEffect(() => {
    if (!qrOpen) return;
    const trigger = qrTriggerRef.current;
    qrCloseRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setQrOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const dialog = document.querySelector<HTMLElement>(".card-qr-dialog");
      const focusable = dialog?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;
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
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [qrOpen]);

  const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(language === "es" ? "Hola Eliecer, vi tu tarjeta digital." : "Hi Eliecer, I saw your digital card.")}`;

  const downloadContact = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Gerdler;Eliecer;;;",
      "FN:Eliecer Gerdler",
      "ORG:JEGS Digital",
      `TITLE:${language === "es" ? "Desarrollador web | Soluciones digitales" : "Web Developer | Digital Solutions"}`,
      `TEL;TYPE=CELL,VOICE;VALUE=uri:tel:+${waNumber}`,
      `EMAIL;TYPE=WORK,INTERNET:${email}`,
      `URL:${siteUrl}`,
      `X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/jegs.digital/`,
      `X-SOCIALPROFILE;TYPE=linkedin:${linkedinUrl}`,
      "NOTE:Instagram @jegs.digital; LinkedIn @jegsdigitalVen; X @jegsdigitalVen",
      "END:VCARD",
    ].join("\r\n");
    const file = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const href = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = href;
    link.download = "eliecer-gerdler.vcf";
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(href), 1000);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
    } catch {
      const field = document.createElement("textarea");
      field.value = siteUrl;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.append(field);
      field.select();
      const copied = document.execCommand("copy");
      field.remove();
      if (!copied) throw new Error("Clipboard unavailable");
    }
    setFeedback(t.shareCopied);
    window.setTimeout(() => setFeedback(""), 3200);
  };

  const shareCard = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: t.title, text: t.description, url: siteUrl });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    try {
      await copyLink();
    } catch {
      setFeedback(t.shareError);
    }
  };

  const services = [
    { Icon: Code2, title: t.serviceNames[0], kind: "web" },
    { Icon: null, title: t.serviceNames[1], kind: "shopify" },
    { Icon: Palette, title: t.serviceNames[2], kind: "design" },
    { Icon: Clapperboard, title: t.serviceNames[3], kind: "video" },
  ];

  const navLinks = ["/portfolio", "/web-design", "/contact"];

  return (
    <main className="digital-card" lang={language}>
      <div className="card-shell">
        <section className="card-hero" aria-labelledby="card-name">
          <div className="card-portrait-wrap">
            <img className="card-portrait-image" src={portrait} width="1100" height="1100" alt={t.portraitAlt} fetchPriority="high" />
            <div className="card-image-shade" aria-hidden="true" />
            <header className="card-header">
              <Link to="/" className="card-brand" aria-label={t.backHome}>
                <BrandMark />
                <span><strong>JEGS</strong><small>Digital</small></span>
              </Link>
              <div className="card-language" role="group" aria-label={language === "es" ? "Idioma" : "Language"}>
                {(["es", "en"] as const).map((option) => (
                  <button key={option} type="button" lang={option} aria-pressed={language === option} onClick={() => setLanguage(option)}>
                    {option.toUpperCase()}
                  </button>
                ))}
              </div>
            </header>
            <p className="card-decorative" aria-label="Web Ideas Results"><span>Web</span><i>Ideas</i><span>Results.</span><b /></p>
            <div className="card-hero-copy">
              <h1 id="card-name">Eliecer Gerdler</h1>
              <p className="card-role">{t.role}</p>
              <p className="card-intro">{t.intro}</p>
            </div>
          </div>
        </section>

        <section className="card-services" aria-labelledby="card-services-title">
          <h2 id="card-services-title" className="sr-only">{t.services}</h2>
          <div className="card-service-grid">
            {services.map(({ Icon, title, kind }) => (
              <Link className={`card-service card-service-${kind}`} to={kind === "video" ? "/video-editing" : "/web-design"} key={kind}>
                <span className="card-service-icon">
                  {kind === "shopify" ? (
                    <svg className="card-shopify-icon" viewBox="0 0 24 24" width="23" height="23" aria-hidden="true">
                      <path fill="currentColor" d="M5.2 7.4h13.6l1.25 13.2H3.95L5.2 7.4Z" />
                      <path d="M8.1 8V6.15a3.9 3.9 0 0 1 7.8 0V8" fill="none" stroke="currentColor" strokeWidth="1.65" />
                      <path fill="#fff" d="M14.75 10.2c-.53-.42-1.16-.63-1.93-.63-1.23 0-2.07.65-2.07 1.53 0 .72.52 1.1 1.45 1.45l.72.27c.6.23.86.4.86.74 0 .42-.41.68-1.08.68-.68 0-1.35-.24-1.94-.72l-.61 1.13c.67.57 1.55.87 2.56.87 1.72 0 2.79-.83 2.79-2.13 0-.91-.54-1.43-1.73-1.87l-.75-.27c-.4-.15-.56-.3-.56-.56 0-.34.36-.56.92-.56.57 0 1.1.17 1.59.5l-.22-1.43Z" />
                    </svg>
                  ) : Icon ? <Icon size={23} strokeWidth={1.8} aria-hidden="true" /> : null}
                </span>
                <span className="card-service-title">{title}</span>
              </Link>
            ))}
          </div>
        </section>

        <div className="card-contact-actions">
          <a className="card-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion("whatsapp_click", { cta_location: "digital_card_hero" })}>
            <span className="card-whatsapp-icon" aria-hidden="true"><svg viewBox="0 0 32 32" width="23" height="23" fill="currentColor"><path d="M16.01 3.2a12.73 12.73 0 0 0-10.9 19.32L3.4 28.8l6.45-1.69A12.73 12.73 0 1 0 16 3.2Zm0 23.15c-2 0-3.96-.54-5.67-1.57l-.4-.24-3.83 1 1.02-3.73-.26-.41a10.08 10.08 0 1 1 9.14 4.95Zm5.54-7.55c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.07-.8.38-.28.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.24 5.13 4.54.72.31 1.28.49 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35Z"/></svg></span>
            <span className="card-whatsapp-label">{t.whatsapp}</span><ArrowRight className="card-whatsapp-arrow" size={19} aria-hidden="true" />
          </a>
          <div className="card-contact-tools">
            <button className="card-icon-action" type="button" onClick={shareCard} aria-label={t.share} title={t.share}><Share2 size={17} aria-hidden="true" /></button>
            <button ref={qrTriggerRef} className="card-icon-action" type="button" onClick={() => setQrOpen(true)} aria-label={t.qr} title={t.qr}><QrCode size={17} aria-hidden="true" /></button>
            <button type="button" className="card-vcf" onClick={downloadContact}><span className="card-vcf-icon"><Check size={14} aria-hidden="true" /></span>{t.vcf}</button>
          </div>
        </div>

        <section className="card-connection" aria-label={t.connect}>
          <div className="card-nav-grid">
            {navLinks.map((href, index) => {
              const Icon = [Globe2, Layers, Mail][index];
              return <Link className="card-nav-tile" to={href} key={href}><Icon size={19} strokeWidth={1.7} aria-hidden="true" /><span>{t.links[index]}</span><small>{t.linkNotes[index]}</small></Link>;
            })}
          </div>
          <nav className="card-social-links" aria-label={t.connect}>
            {socialLinks.map(({ label, href, mark }) => (
              href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" key={label} aria-label={`${label} (${t.opensNewTab})`} title={label}>
                  <span className={`card-social-mark card-social-${mark}`} aria-hidden="true">{mark === "web" ? <Globe2 size={18} /> : <BrandSocialMark mark={mark} />}</span>
                </a>
              ) : (
                <span className="card-social-unavailable" key={label} title={`${label}: ${t.socialUrlPending}`} aria-label={`${label}: ${t.socialUrlPending}`} role="img">
                  <span className={`card-social-mark card-social-${mark}`} aria-hidden="true"><BrandSocialMark mark={mark} /></span>
                </span>
              )
            ))}
          </nav>
          <a className="card-email-link" href={`mailto:${email}`}><Mail size={15} aria-hidden="true" />{email}</a>
        </section>

        <footer className="card-footer">
          <img className="card-landscape-image" src={footerAurora} width="1440" height="480" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <div className="card-footer-content"><p>{language === "es" ? <>IDEAS DIGITALES<br />PARA UN MUNDO REAL</> : <>DIGITAL IDEAS<br />FOR A REAL WORLD</>}</p><small>© {new Date().getFullYear()} JEGS Digital</small><span className="card-footer-accent" /></div>
        </footer>
      </div>

      {feedback && <p className="card-feedback" role="status"><Check size={16} aria-hidden="true" />{feedback}{feedback === t.shareCopied && <button type="button" aria-label={t.share} onClick={copyLink}><Copy size={15} /></button>}</p>}

      {qrOpen && <div className="card-dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setQrOpen(false); }}>
        <section className="card-qr-dialog" role="dialog" aria-modal="true" aria-labelledby="card-qr-title">
          <button ref={qrCloseRef} type="button" className="card-qr-close" onClick={() => setQrOpen(false)} aria-label={t.qrClose}><X size={20} /></button>
          <span className="card-qr-icon"><QrCode size={21} aria-hidden="true" /></span>
          <h2 id="card-qr-title">{t.qrTitle}</h2>
          {qrImage ? <img src={qrImage} width="280" height="280" alt={t.qrTitle} /> : <div className="card-qr-loading" role="status">JEGS</div>}
          <p>jegs.digital/card</p>
        </section>
      </div>}
    </main>
  );
}
