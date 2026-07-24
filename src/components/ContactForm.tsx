import { useState } from "react";
import type { FormEvent } from "react";
import { trackConversion } from "../lib/analytics";
import { useLanguage } from "../contexts/useLanguage";

type Service = "web" | "video" | "general";

interface ContactFormProps {
  service?: Service;
  videoFields?: boolean;
}

const labels: Record<Service, string> = { web: "Web Design", video: "Video Editing", general: "General Inquiry" };

export function ContactForm({ service = "general", videoFields = false }: ContactFormProps) {
  const { language } = useLanguage();
  const isEs = language === "es";
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setStatus("error");
      setError(isEs ? "Completa los campos obligatorios y usa un correo válido." : "Please complete the required fields and use a valid email address.");
      form.reportValidity();
      return;
    }
    const values = new FormData(form);
    const message = Array.from(values.entries())
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    const introduction = isEs ? `Hola JEGS, quiero cotizar ${labels[service]}.` : `Hello JEGS, I would like a ${labels[service]} quote.`;
    const url = `https://wa.me/584125738257?text=${encodeURIComponent(`${introduction}\n\n${message}`)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setWhatsappUrl(url);
    trackConversion("lead_form_submit", { service, form_name: `${service}_contact_form` });
    setStatus("success");
    setError("");
  }

  const fieldClass = "mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-brand-white outline-none transition placeholder:text-brand-muted/60 focus:border-brand-green";
  return (
    <form onSubmit={submit} noValidate className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-xl md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={isEs ? "Nombre" : "Name"} name="Name" required className={fieldClass} />
        <Field label="Email" name="Email" type="email" required className={fieldClass} />
        <Field label={isEs ? "WhatsApp o teléfono" : "WhatsApp or Phone"} name="Phone" type="tel" required pattern="[0-9+() .-]{7,}" title={isEs ? "Ingresa al menos 7 caracteres válidos." : "Enter at least 7 valid phone characters."} className={fieldClass} />
        {service === "general" ? <Select label={isEs ? "Servicio" : "Service"} name="Service" className={fieldClass} options={isEs ? ["Diseño Web", "Edición de Video", "Consulta General"] : ["Web Design", "Video Editing", "General Inquiry"]} /> : <Field label={videoFields ? (isEs ? "Negocio o marca" : "Business or Brand") : (isEs ? "Negocio o empresa" : "Business or Company")} name="Business" className={fieldClass} />}
        {videoFields ? <>
          <Select label={isEs ? "Tipo de video" : "Type of Video"} name="Type of Video" className={fieldClass} options={isEs ? ["Video para redes", "Video inmobiliario", "Video promocional", "Motion design", "Otro"] : ["Social media video", "Real estate video", "Promotional video", "Motion design", "Other"]} />
          <Field label={isEs ? "Cantidad aproximada de videos" : "Approximate Number of Videos"} name="Number of Videos" className={fieldClass} />
        </> : service !== "general" && <Select label={isEs ? "Tipo de sitio web" : "Type of Website"} name="Type of Website" className={fieldClass} options={isEs ? ["Sitio empresarial", "Landing page", "E-commerce", "Rediseño web", "Otro"] : ["Business website", "Landing page", "E-commerce", "Website redesign", "Other"]} />}
      </div>
      {videoFields && <Field label={isEs ? "Enlace al material (opcional)" : "Link to Footage (optional)"} name="Footage Link" type="url" className={fieldClass} />}
      <label className="mt-5 block text-sm font-bold text-brand-white">{isEs ? "Detalles del proyecto" : "Project Details"}<textarea name="Project Details" required rows={5} className={fieldClass} placeholder={isEs ? "Cuéntanos sobre tu proyecto" : "Tell us about your project"} /></label>
      {status === "error" && <p role="alert" className="mt-4 text-sm text-red-300">{error}</p>}
      {status === "success" && <p role="status" className="mt-4 text-sm text-brand-green">{isEs ? "Tu mensaje está listo en WhatsApp. Si no se abrió, " : "Your message is ready in WhatsApp. If it did not open, "}<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{isEs ? "abre WhatsApp manualmente" : "open WhatsApp manually"}</a>.</p>}
      <button type="submit" className="mt-6 inline-flex rounded-2xl bg-brand-green px-5 py-3 text-sm font-black text-brand-bg transition hover:scale-[1.02]">{isEs ? "Solicitar cotización" : "Request a Quote"}</button>
    </form>
  );
}

function Field({ label, name, type = "text", required = false, pattern, title, className }: { label: string; name: string; type?: string; required?: boolean; pattern?: string; title?: string; className: string }) {
  return <label className="block text-sm font-bold text-brand-white">{label}{required && <span className="text-brand-green"> *</span>}<input name={name} type={type} required={required} pattern={pattern} title={title} className={className} /></label>;
}

function Select({ label, name, options, className }: { label: string; name: string; options: string[]; className: string }) {
  return <label className="block text-sm font-bold text-brand-white">{label}<select name={name} className={className}>{options.map((option) => <option key={option} value={option} className="bg-brand-bg">{option}</option>)}</select></label>;
}
