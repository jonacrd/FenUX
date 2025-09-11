export async function setupCurrency(baseUSDPrices, selector='.price-box'){
  const fmt = (v, c) => new Intl.NumberFormat(undefined,{style:'currency', currency:c||'USD'}).format(v);
  let rates=null, cur='USD';
  try{
    const res=await fetch('https://api.exchangerate.host/latest?base=USD');
    if(res.ok){ const j=await res.json(); rates=j.rates; }
  }catch(e){}
  if(rates){
    // estimar divisa por locale (simplificado)
    const locales = navigator.languages || [navigator.language];
    const map = {'es-CL':'CLP','es-ES':'EUR','es-MX':'MXN','en-US':'USD','en-GB':'GBP','en-CA':'CAD','en-AU':'AUD','de-DE':'EUR','nl-NL':'EUR'};
    for(const L of locales){ const k=L.slice(0,5); const k2=L.slice(0,2); if(map[k]){cur=map[k]; break;} if(map[`${k2}-${k2.toUpperCase()}`]){cur=map[`${k2}-${k2.toUpperCase()}`]; break;} }
  }
  document.querySelectorAll(selector).forEach(box=>{
    const usd = Number(box.dataset.usd || 0);
    const currency = box.dataset.currency || cur;
    const rate = rates?.[currency] || 1;
    const value = usd * rate;
    box.querySelector('.price').textContent = fmt(value, currency);
    box.querySelector('.currency').textContent = currency;
  });
}
