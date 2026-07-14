import { useEffect } from "react";

/**
 * Custom hook to dynamically update document title and meta description.
 * Appends " | JEGS Digital" to the title.
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | JEGS Digital`;
    }

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
}
