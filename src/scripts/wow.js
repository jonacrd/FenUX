export function ioReveal(root=document){
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);}
  }),{threshold:.15});
  root.querySelectorAll('.reveal, .split').forEach(el=>io.observe(el));
}
export function splitKinetic(selector='.kinetic'){
  document.querySelectorAll(selector).forEach(el=>{
    const txt=el.textContent.trim(); el.textContent='';
    [...txt].forEach((ch,i)=>{ const s=document.createElement('span'); s.textContent=ch; s.style.setProperty('--i',i); el.appendChild(s);});
  });
}
export function magnetic(selector='.btn.mag'){
  document.querySelectorAll(selector).forEach(b=>{
    const max=12;
    b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect(); const x=((e.clientX-r.left)/r.width-.5)*max; const y=((e.clientY-r.top)/r.height-.5)*max; b.style.transform=`translate(${x}px,${y}px)`; b.style.setProperty('--mx',`${e.clientX-r.left}px`); b.style.setProperty('--my',`${e.clientY-r.top}px`)});
    b.addEventListener('pointerleave',()=>b.style.transform='');
  });
}
export function parallax(container='[data-parallax]'){
  document.querySelectorAll(container).forEach(c=>{
    const layers=[...c.querySelectorAll('[data-d]')];
    c.addEventListener('pointermove',e=>{
      const r=c.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      layers.forEach(el=>{const d=+el.dataset.d||1; el.style.transform=`translate(${x*-16*d}px,${y*-12*d}px)`;});
    });
    c.addEventListener('pointerleave',()=>layers.forEach(el=>el.style.transform=''));
  });
}
export function countUp(selector='[data-count]'){
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return;
    const el=e.target; const to=+el.dataset.count||0; let v=0; const dur=900; const t0=performance.now();
    const step=(t)=>{const p=Math.min(1,(t-t0)/dur); v=Math.floor(to*p); el.textContent=v.toLocaleString(); if(p<1) requestAnimationFrame(step);};
    requestAnimationFrame(step); io.unobserve(el);
  }),{threshold:.6});
  document.querySelectorAll(selector).forEach(el=>io.observe(el));
}
export function attach(){
  splitKinetic(); ioReveal(); magnetic(); parallax(); countUp();
}
