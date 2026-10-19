import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/useLanguage";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { hash, pathname } = useLocation();
  const { language } = useLanguage();
  const isHomeLayout = pathname === "/" || pathname === "/events";

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [hash, pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if page is scrolled down more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    const frame = requestAnimationFrame(toggleVisibility);
    return () => { window.removeEventListener("scroll", toggleVisibility); cancelAnimationFrame(frame); };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  if (!isVisible) return null;
  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={isHomeLayout ? "back-to-top" : "fixed bottom-20 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-brand-green/50 bg-brand-bg2 text-brand-green shadow-lg hover:border-brand-green"}
      aria-label={language === "es" ? "Volver arriba" : "Back to top"}
      title={language === "es" ? "Volver arriba" : "Back to top"}
    >
      <ArrowUp size={20} />
    </button>
  );
}
