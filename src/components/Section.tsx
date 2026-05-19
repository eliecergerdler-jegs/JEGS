import { ScrollReveal } from "./ScrollReveal";

export function Section({ eyebrow, title, subtitle, children, className = "" }: any) {
  return (
    <section className={`relative mx-auto max-w-7xl px-5 py-16 md:py-24 ${className}`}>
      <ScrollReveal direction="up" className="w-full h-full">
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-10 max-w-3xl text-center">
            {eyebrow && <p className="mb-3 text-xs font-black uppercase tracking-[.32em] text-brand-green">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-black tracking-tight text-brand-white md:text-5xl">{title}</h2>}
            {subtitle && <p className="mt-5 text-base leading-8 text-brand-muted md:text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </ScrollReveal>
    </section>
  );
}
