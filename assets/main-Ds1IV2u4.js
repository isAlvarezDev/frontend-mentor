(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p=[{imgSrc:"./designs/qr-code-component/desktop-design.jpg",title:"Qr code component",languages:["HTML","CSS"],difficulty:["1","NEWBIE"],description:"A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",url:"src/learning-paths/qr-code-component/index.html",alt:"qr code project"}],u=(s,r,a)=>{const n=document.createElement("div"),e=document.createElement("a"),t=document.createElement("img");return n.className="main__grid-img-container",e.href=s,e.target="_blank",t.alt=a,t.dataset.src=r,e.appendChild(t),n.appendChild(e),new IntersectionObserver((d,l)=>{d.forEach(m=>{m.isIntersecting&&(t.src=t.dataset.src,l.unobserve(t))})}).observe(t),n},f=(s,r,a)=>{const n=document.createElement("div"),e=document.createElement("h2"),t=document.createElement("p");return n.className="main__grid-description",e.className="main__grid-title",e.textContent=s,t.textContent=r,n.appendChild(e),n.appendChild(a),n.appendChild(t),n},h=(s,r)=>{const a=document.createElement("div"),n=document.createElement("div"),e=document.createElement("div");return s.forEach(t=>{const i=document.createElement("span");i.textContent=t,i.className="main__span",t==="HTML"?i.classList.add("main__span--html"):t==="CSS"&&i.classList.add("main__span--css"),n.appendChild(i)}),a.appendChild(n),r.forEach(t=>{const i=document.createElement("span");i.className="main__span",i.textContent=t,i.classList.add("main__span--padding"),t.includes("1")?(i.classList.add("main__span--lightblue"),e.style.borderColor="#6ABECD"):t.includes("2")&&(i.classList.add("main__span--lime"),e.style.borderColor="#AAD742"),e.appendChild(i)}),a.appendChild(e),a.className="main__grid-subtitle",e.className="main__grid-difficulty",a},g=()=>{const s=document.createElement("section"),r=document.createDocumentFragment();return s.className="main__grid",p.forEach(a=>{const n=document.createElement("div");n.className="main__grid-item";const e=u(a.url,a.imgSrc,a.alt),t=h(a.languages,a.difficulty),i=f(a.title,a.description,t);n.appendChild(e),n.appendChild(i),r.appendChild(n)}),s.appendChild(r),s},C=document.getElementById("app"),c=document.createElement("main"),o=document.createElement("h1"),_=g();o.textContent="Learning Path Projects";c.appendChild(o);c.appendChild(_);C.appendChild(c);
