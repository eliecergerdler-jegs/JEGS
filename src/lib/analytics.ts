/**
 * Sends named conversion events to GTM/dataLayer when it is configured.
 * Configure GA4/Meta tags inside GTM-5QS5HC2X; no vendor IDs are hard-coded here.
 */
export type ConversionEvent = "whatsapp_click" | "lead_form_submit" | "quote_cta_click" | "portfolio_click" | "video_play";

export function trackConversion(event: ConversionEvent, details: Record<string, string> = {}) {
  const dataLayer = (window as Window & { dataLayer?: Array<Record<string, unknown>> }).dataLayer;
  dataLayer?.push({ event, page_path: window.location.pathname, ...details });
}
