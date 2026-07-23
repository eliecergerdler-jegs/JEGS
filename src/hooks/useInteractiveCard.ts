import type { PointerEvent } from "react";
import { useCallback, useState } from "react";

export function useInteractiveCard() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const tiltX = (0.5 - y) * 2.4;
    const tiltY = (x - 0.5) * 2.4;

    event.currentTarget.style.setProperty("--spotlight-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--spotlight-y", `${y * 100}%`);
    event.currentTarget.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
  }, []);

  const handlePointerLeave = useCallback((event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
    setIsPressed(false);
  }, []);

  return {
    interactiveCardClassName: `jegs-interactive-card${isPressed ? " is-pressed" : ""}`,
    interactiveMediaClassName: "jegs-interactive-media",
    interactiveTitleClassName: "jegs-interactive-title",
    interactiveAccentClassName: "jegs-interactive-accent",
    interactiveCardProps: {
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave,
      onPointerDown: () => setIsPressed(true),
      onPointerUp: () => setIsPressed(false),
      onPointerCancel: () => setIsPressed(false),
    },
  };
}
