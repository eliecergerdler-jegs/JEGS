import { useEffect } from "react";
import { observeScrollCardHighlight } from "../lib/scrollCardHighlight";

export function useScrollCardHighlight(pathname: string) {
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) return observeScrollCardHighlight(root);
  }, [pathname]);
}
