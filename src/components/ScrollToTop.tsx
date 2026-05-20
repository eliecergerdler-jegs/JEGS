import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if page is scrolled down more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 left-4 md:left-auto md:right-5 md:bottom-5 z-40 flex h-10 w-10 md:h-12 md:w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-brand-bg2/80 text-brand-white backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-brand-green hover:text-brand-green hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(184,241,43,0.25)] ${
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto scale-100" : "opacity-0 translate-y-5 pointer-events-none scale-50"
      }`}
      aria-label="Volver arriba"
    >
      <ArrowUp size={20} />
    </button>
  );
}
