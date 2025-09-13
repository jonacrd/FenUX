// src/lib/analytics.ts - Utilidades para tracking de Meta Pixel

export function trackPageView() {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track','PageView');
  }
}

export function trackCTA(place: 'hero' | 'pricing' | 'footer') {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom','CTA_Click', { place });
  }
}

export function trackLead(payload: { plan?: 'standard' | 'flash'; source?: string }) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track','Lead', payload || {});
  }
}
