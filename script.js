function mostrar(){document.querySelector('.hero').style.display='none';
document.getElementById('contenido').style.display='block';
const t='Claudia, gracias por estos 7 meses. Volvería a elegirte una y mil veces. Te amo ❤️';
let i=0;const e=document.getElementById('texto');
const it=setInterval(()=>{e.textContent+=t[i++]||'';if(i>t.length)clearInterval(it)},40)}