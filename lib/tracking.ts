"use client";

declare global {
  interface Window { dataLayer?: Record<string, unknown>[]; fbq?: (...args: unknown[]) => void; }
}

export type TrackingEvent = "whatsapp_click" | "form_submit" | "tutor_contact" | "veterinarian_contact" | "clinic_contact" | "campaign_page_view" | "phone_click";

export function track(event: TrackingEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const query = new URLSearchParams(window.location.search);
  const campaign = Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].flatMap((key) => {
    const value = query.get(key); return value ? [[key, value]] : [];
  }));
  const payload = { event, page_path: window.location.pathname, page_location: window.location.href, ...campaign, ...params };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  window.dispatchEvent(new CustomEvent("petendoscopia:track", { detail: payload }));
}
