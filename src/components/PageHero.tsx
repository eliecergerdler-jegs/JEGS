interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:py-28">
      <div className="absolute inset-0 z-0">
         <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-blue/20 blur-[100px]" />
         </div>
      </div>
      <div className="relative mx-auto max-w-5xl text-center z-10">
        <p className="mb-4 text-xs font-black uppercase tracking-[.32em] text-brand-green">{eyebrow}</p>
        <h1 className="text-4xl font-black leading-tight tracking-tight text-brand-white md:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-brand-muted">{subtitle}</p>
      </div>
    </section>
  );
}
