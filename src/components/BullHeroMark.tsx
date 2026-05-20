import { motion } from "framer-motion";
import bullLight from "../assets/Imagenes/jegs-bull-light.svg";
import { Shield, Layout, Film, Cpu } from "lucide-react";

export function BullHeroMark() {
  return (
    <div className="relative flex w-full items-center justify-center p-4 overflow-hidden">
      {/* Background Glowing Orb (Breathing Effect) */}
      <motion.div
        className="absolute h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Background Green Glow (Pulsing) */}
      <motion.div
        className="absolute h-60 w-60 rounded-full bg-brand-green/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Main Glassmorphic Display Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[540px] flex-col items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 bg-brand-bg2/40 px-6 py-8 shadow-2xl backdrop-blur-md"
      >
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
        <motion.div
          className="absolute top-6 left-4 z-20 flex items-center gap-1.5 rounded-xl border border-white/5 bg-brand-bg2/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-white backdrop-blur-sm shadow-md"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shield size={10} className="text-brand-blue" />
          <span>Strategy</span>
        </motion.div>

        {/* Badge 2: Web (Top Right) */}
        <motion.div
          className="absolute top-12 right-4 z-20 flex items-center gap-1.5 rounded-xl border border-brand-green/20 bg-brand-bg2/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-green backdrop-blur-sm shadow-lg"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Layout size={10} />
          <span>Web</span>
        </motion.div>

        {/* Badge 3: Content (Bottom Left) */}
        <motion.div
          className="absolute bottom-16 left-4 z-20 flex items-center gap-1.5 rounded-xl border border-white/5 bg-brand-bg2/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-muted backdrop-blur-sm shadow-md"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Cpu size={10} className="text-brand-white" />
          <span>Content</span>
        </motion.div>

        {/* Badge 4: Video (Bottom Right) */}
        <motion.div
          className="absolute bottom-8 right-4 z-20 flex items-center gap-1.5 rounded-xl border border-white/5 bg-brand-bg2/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-white backdrop-blur-sm shadow-md"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <Film size={10} className="text-brand-blue" />
          <span>Video</span>
        </motion.div>

        {/* Decorative subtle radar line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-green/10 to-transparent animate-pulse" />

        {/* Main Logo SVG Display */}
        <motion.div
          className="relative z-10 flex h-36 sm:h-44 md:h-52 lg:h-72 xl:h-80 w-36 sm:w-44 md:w-52 lg:w-72 xl:w-80 items-center justify-center p-4"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Subtle Outer Cyber-Rings (Halos) */}
          
          {/* Halo 1 (Green gradient, subtle green border) */}
          <motion.div
            className="absolute inset-0 rounded-full border border-brand-green/20 bg-[radial-gradient(circle,rgba(184,241,43,0.10),transparent_60%)] pointer-events-none blur-0"
            animate={{
              scale: [0.98, 1.04, 0.98],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Halo 2 (Blue outer border, slightly larger) */}
          <motion.div
            className="absolute inset-[-20px] rounded-full border border-brand-blue/10 pointer-events-none"
            animate={{
              scale: [1.02, 0.97, 1.02],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          
          {/* Subtle Radar Ring */}
          <div className="absolute inset-0 rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(30,123,255,0.03)_0%,transparent_70%)] pointer-events-none" />
          
          <img
            src={bullLight}
            alt="JEGS Digital"
            className="h-full w-full object-contain drop-shadow-[0_0_24px_rgba(184,241,43,0.25)] transition-all hover:drop-shadow-[0_0_32px_rgba(30,123,255,0.45)]"
          />
        </motion.div>

        {/* Technical Data Label */}
        <div className="absolute bottom-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em] text-brand-muted">
          <span className="h-1 w-1 rounded-full bg-brand-green animate-ping" />
          <span>JEGS Signature</span>
        </div>
      </motion.div>
    </div>
  );
}
