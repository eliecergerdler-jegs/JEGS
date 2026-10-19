const cardSelector = ".service, .project, .jegs-interactive-card, [data-scroll-card]";
const activeClass = "is-scroll-active";

/** Give touch screens one visual card highlight, without changing focus or clicks. */
export function observeScrollCardHighlight(root: HTMLElement) {
  const touch = window.matchMedia("(hover: none) and (pointer: coarse)");
  let stop = () => {};

  const syncDevice = () => {
    stop();
    if (!touch.matches) return;

    let active: HTMLElement | null = null;
    let frame = 0;
    let disposed = false;
    let refreshNeeded = true;
    const targets = new Set<HTMLElement>();
    const visible = new Set<HTMLElement>();

    const update = () => {
      frame = 0;
      if (refreshNeeded) {
        refreshNeeded = false;
        const cards = new Set(root.querySelectorAll<HTMLElement>(cardSelector));
        for (const card of targets) {
          if (!cards.has(card)) {
            observer.unobserve(card);
            targets.delete(card);
            visible.delete(card);
          }
        }
        for (const card of cards) {
          if (!targets.has(card)) {
            targets.add(card);
            observer.observe(card);
          }
        }
      }

      const center = window.innerHeight / 2;
      let next: HTMLElement | null = null;
      let nearest = Infinity;
      for (const card of visible) {
        if (!card.isConnected) continue;
        const rect = card.getBoundingClientRect();
        if (rect.height <= 0 || rect.bottom <= center / 2 || rect.top >= center * 1.5) continue;
        const distance = Math.abs(rect.top + rect.height / 2 - center);
        if (distance < nearest) {
          nearest = distance;
          next = card;
        }
      }
      if (active !== next) active?.classList.remove(activeClass);
      next?.classList.add(activeClass);
      active = next;
    };

    const schedule = () => {
      if (!disposed && !frame) frame = window.requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const card = entry.target as HTMLElement;
        if (entry.isIntersecting) visible.add(card);
        else visible.delete(card);
      }
      schedule();
    });
    // Lazy routes, portfolio filters and language changes can replace cards.
    const mutations = new MutationObserver(() => {
      refreshNeeded = true;
      schedule();
    });
    mutations.observe(root, { childList: true, subtree: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();

    stop = () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
      mutations.disconnect();
      active?.classList.remove(activeClass);
    };
  };

  syncDevice();
  touch.addEventListener("change", syncDevice);
  return () => {
    touch.removeEventListener("change", syncDevice);
    stop();
  };
}
