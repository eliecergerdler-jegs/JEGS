import { useEffect } from "react";

/**
 * Custom hook to dynamically update document title and meta description.
 * Appends " | JEGS Digital" to the title.
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const url = `https://jegs.digital${window.location.pathname}`;
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
    const update = (selector: string, attribute: string, value: string) => {
      const element = document.querySelector(selector);
      element?.setAttribute(attribute, value);
    };
    update('link[rel="canonical"]', 'href', url);
    update('meta[property="og:url"]', 'content', url);
    update('meta[property="og:title"]', 'content', `${title} | JEGS Digital`);
    update('meta[property="og:description"]', 'content', description);
    update('meta[name="twitter:url"]', 'content', url);
    update('meta[name="twitter:title"]', 'content', `${title} | JEGS Digital`);
    update('meta[name="twitter:description"]', 'content', description);
  }, [title, description]);
}
