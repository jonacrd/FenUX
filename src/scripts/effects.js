export function onReveal(root=document){
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('is-in'); io.unobserve(e.target);}
  }),{threshold:.12});
  root.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}
export function cursorSpotlight(){
  const s=document.querySelector('.spotlight')||document.body.appendChild(Object.assign(document.createElement('div'),{className:'spotlight'}));
  window.addEventListener('pointermove',e=>{
    s.style.setProperty('--mx', e.clientX+'px'); s.style.setProperty('--my', e.clientY+'px');
  });
}
export function magnetic(selector='.btn'){
  document.querySelectorAll(selector).forEach(el=>{
    const max=12;
    el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(); const x=((e.clientX-r.left)/r.width-.5)*max; const y=((e.clientY-r.top)/r.height-.5)*max; el.style.transform=`translate(${x}px,${y}px)`;});
    el.addEventListener('pointerleave',()=>el.style.transform='');
  });
}
export function parallax(selector='[data-parallax]'){
  document.querySelectorAll(selector).forEach(el=>{
    const layers=[...el.querySelectorAll('[data-d]')];
    el.addEventListener('pointermove',e=>{
      const r=el.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
      layers.forEach(n=>{const d=parseFloat(n.dataset.d||'1'); n.style.transform=`translate(${x*-8*d}px,${y*-8*d}px) scale(1.02)`;});
    });
    el.addEventListener('pointerleave',()=>layers.forEach(n=>n.style.transform=''));
  });
}
export function scrollBar(){
  let max=1; const bar=document.getElementById('scrollbar')||document.body.appendChild(Object.assign(document.createElement('div'),{id:'scrollbar'}));
  const tick=()=>{max=document.body.scrollHeight-window.innerHeight; const p=Math.max(0, window.scrollY/max); bar.style.width=(p*100)+'%'; requestAnimationFrame(tick);}; tick();
}
