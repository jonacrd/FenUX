export const fire = (name, params={}) => window.gtag?.('event', name, params);
export const fireLeadSubmit = () => fire('generate_lead',{send_to: window.ADS_ID || undefined});
export function bindWhatsApp(selector='[data-whatsapp]'){ document.querySelectorAll(selector).forEach(el=>el.addEventListener('click',()=>fire('lead_whatsapp_click'))); }
export function bindCalendly(selector='[data-calendly]'){ document.querySelectorAll(selector).forEach(el=>el.addEventListener('click',()=>fire('lead_calendly_click'))); }
