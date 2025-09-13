// src/lib/analytics.ts - Utilidades para tracking de Meta Pixel

export function trackPageView() {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track','PageView');
  }
}

export function trackCTA(place: 'hero' | 'pricing' | 'footer' | 'zoom' | 'whatsapp' | 'qr') {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom','CTA_Click', { place });
  }
}

export function trackLead(payload: { plan?: 'estandar' | 'agil' | 'standard' | 'flash'; source?: string }) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track','Lead', payload || {});
  }
}

export function trackPlanSelect(plan: string) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom','Plan_Select', { plan });
  }
}

export function trackDemoRequest(plan: string, source: string) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom','Demo_Request', { plan, source });
  }
}
