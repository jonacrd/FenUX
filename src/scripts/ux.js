export function ripple(root=document){ root.querySelectorAll('.btn').forEach(b=>{
  b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect(); b.style.setProperty('--rx',`${e.clientX-r.left}px`); b.style.setProperty('--ry',`${e.clientY-r.top}px`)});
  b.addEventListener('pointerdown',()=>{b.classList.add('is-rp'); setTimeout(()=>b.classList.remove('is-rp'),180);});
});}
export function revealOnScroll(root=document){
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in'); io.unobserve(e.target);}})},{threshold:.12});
  root.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}
export function tilt(selector='[data-tilt]'){
  document.querySelectorAll(selector).forEach(el=>{
    const max=8; el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5; el.style.transform=`rotateX(${y*-max}deg) rotateY(${x*max}deg)`});
    el.addEventListener('pointerleave',()=>el.style.transform='');
  });
}
export function lightbox(root=document){
  const shots=[...root.querySelectorAll('.shot')], lb=document.getElementById('lightbox'), big=lb?.querySelector('#big');
  if(!shots.length||!lb) return;
  let i=0; const open=idx=>{i=idx; big.src=shots[i].dataset.full||shots[i].src; lb.removeAttribute('hidden')};
  const close=()=>lb.setAttribute('hidden','');
  shots.forEach((img,idx)=>img.addEventListener('click',()=>open(idx)));
  lb.querySelector('[data-close]').addEventListener('click',close);
  window.addEventListener('keydown',e=>{ if(lb.hasAttribute('hidden')) return; if(e.key==='Escape') close(); if(e.key==='ArrowRight') open((i+1)%shots.length); if(e.key==='ArrowLeft') open((i-1+shots.length)%shots.length);});
}
