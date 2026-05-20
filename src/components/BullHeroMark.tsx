import bullLight from "../assets/Imagenes/jegs-bull-light.webp";
import { Shield, Layout, Film, Cpu } from "lucide-react";

export function BullHeroMark() {
  return (
    <div className="relative flex w-full items-center justify-center p-4 overflow-hidden">
      {/* Background Glowing Orb (Breathing Effect) */}
      <div className="absolute h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl animate-jegs-breathe" />
      
      {/* Background Green Glow (Pulsing) */}
      <div className="absolute h-60 w-60 rounded-full bg-brand-green/5 blur-3xl animate-jegs-breathe-slow" />

      {/* Main Glassmorphic Display Panel */}
      <div className="relative flex h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[540px] flex-col items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-brand-bg2/40 px-6 py-8 shadow-2xl backdrop-blur-md">
        {/* Abstract Tech HUD Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-6 left-6 h-3 w-3 border-t border-l border-brand-white" />
          <div className="absolute top-6 right-6 h-3 w-3 border-t border-r border-brand-white" />
          <div className="absolute bottom-6 left-6 h-3 w-3 border-b border-l border-brand-white" />
          <div className="absolute bottom-6 right-6 h-3 w-3 border-b border-r border-brand-white" />
          
          {/* Subtle grid background */}
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>

        {/* Badge 1: Strategy (Top Left) */}
        <div className="absolute top-6 left-4 z-20 flex items-center gap-1.5 rounded-xl border border-white/5 bg-brand-bg2/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-white backdrop-blur-sm shadow-md animate-jegs-float-soft">
          <Shield size={10} className="text-brand-blue" />
          <span>Strategy</span>
        </div>

        {/* Badge 2: Web (Top Right) */}
        <div className="absolute top-12 right-4 z-20 flex items-center gap-1.5 rounded-xl border border-brand-green/20 bg-brand-bg2/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-green backdrop-blur-sm shadow-lg animate-jegs-float-reverse">
          <Layout size={10} />
          <span>Web</span>
        </div>

        {/* Badge 3: Content (Bottom Left) */}
        <div className="absolute bottom-16 left-4 z-20 flex items-center gap-1.5 rounded-xl border border-white/5 bg-brand-bg2/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-muted backdrop-blur-sm shadow-md animate-jegs-float-reverse">
          <Cpu size={10} className="text-brand-white" />
          <span>Content</span>
        </div>

        {/* Badge 4: Video (Bottom Right) */}
        <div className="absolute bottom-8 right-4 z-20 flex items-center gap-1.5 rounded-xl border border-white/5 bg-brand-bg2/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-white backdrop-blur-sm shadow-md animate-jegs-float-soft">
          <Film size={10} className="text-brand-blue" />
          <span>Video</span>
        </div>

        {/* Decorative subtle radar line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-green/10 to-transparent animate-pulse" />

        {/* Main Logo Display */}
        <div className="relative z-10 flex h-36 sm:h-44 md:h-52 lg:h-72 xl:h-80 w-36 sm:w-44 md:w-52 lg:w-72 xl:w-80 items-center justify-center p-4 animate-jegs-float-soft">
          {/* Subtle Outer Cyber-Rings (Halos) */}
          
          {/* Halo 1 (Green gradient, subtle green border) */}
          <div className="absolute inset-0 rounded-full border border-brand-green/20 bg-[radial-gradient(circle,rgba(184,241,43,0.10),transparent_60%)] pointer-events-none blur-0 animate-jegs-breathe" />
          
          {/* Halo 2 (Blue outer border, slightly larger) */}
          <div className="absolute inset-[-20px] rounded-full border border-brand-blue/10 pointer-events-none animate-jegs-breathe-slow" />
          
          {/* Subtle Radar Ring */}
          <div className="absolute inset-0 rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(30,123,255,0.03)_0%,transparent_70%)] pointer-events-none" />
          
          <img
            src={bullLight}
            alt="JEGS Digital"
            width="294"
            height="345"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-contain drop-shadow-[0_0_24px_rgba(184,241,43,0.25)] transition-all hover:drop-shadow-[0_0_32px_rgba(30,123,255,0.45)]"
          />
        </div>

        {/* Technical Data Label */}
        <div className="absolute bottom-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em] text-brand-muted">
          <span className="h-1 w-1 rounded-full bg-brand-green animate-ping" />
          <span>JEGS Signature</span>
        </div>
      </div>
    </div>
  );
}
