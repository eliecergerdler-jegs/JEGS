import { useCallback, useState } from "react";

export function useInteractiveCard() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePointerLeave = useCallback(() => {
    setIsPressed(false);
  }, []);

  return {
    interactiveCardClassName: `jegs-interactive-card${isPressed ? " is-pressed" : ""}`,
    interactiveMediaClassName: "jegs-interactive-media",
    interactiveTitleClassName: "jegs-interactive-title",
    interactiveAccentClassName: "jegs-interactive-accent",
    interactiveIconClassName: "jegs-interactive-icon",
    interactiveCardProps: {
      onPointerLeave: handlePointerLeave,
      onPointerDown: () => setIsPressed(true),
      onPointerUp: () => setIsPressed(false),
      onPointerCancel: () => setIsPressed(false),
    },
  };
}
