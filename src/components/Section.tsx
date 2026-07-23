import { ScrollReveal } from "./ScrollReveal";

interface SectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ eyebrow, title, subtitle, children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl min-w-0 px-5 py-16 md:py-24 2xl:max-w-[88rem] ${className}`}>
      <ScrollReveal direction="up" className="h-full w-full min-w-0">
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-10 max-w-3xl min-w-0 text-center">
            {eyebrow && <p className="mb-3 text-xs font-black uppercase tracking-[.32em] text-brand-green">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-black tracking-tight text-brand-white md:text-[2.75rem]">{title}</h2>}
            {subtitle && <p className="mt-5 text-base leading-8 text-brand-muted md:text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </ScrollReveal>
    </section>
  );
}
