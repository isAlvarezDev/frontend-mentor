(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=[{imgSrc:"./designs/qr-code-component/desktop-design.jpg",title:"Qr code component",languages:["HTML","CSS"],difficulty:["1","NEWBIE"],description:"A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",url:"src/learning-paths/qr-code-component/",alt:"qr code project"},{imgSrc:"./designs/blog-card/desktop-design.jpg",title:"Blog preview card",languages:["HTML","CSS"],difficulty:["1","NEWBIE"],description:"This HTML & CSS-only challenge is a perfect project for beginners getting up to speed with HTML and CSS fundamentals, like HTML structure and the box model.",url:"src/learning-paths/blog-card/",alt:"blog preview card project"},{imgSrc:"./designs/social-links-profile/desktop-design.jpg",title:"Social links profile",languages:["HTML","CSS"],difficulty:["1","NEWBIE"],description:"In this small project, you'll build out your social link-sharing profile. You can even personalize it and use it to share all your social profiles!",url:"src/learning-paths/social-links-profile/",alt:"social links profile project"},{imgSrc:"./designs/recipe-page/desktop-project-design.jpg",title:"Recipe page",languages:["HTML","CSS"],difficulty:["1","NEWBIE"],description:"This challenge will help you focus on writing semantic HTML. Ensure you think through what HTML elements are most appropriate for each piece of content.",url:"src/learning-paths/recipe-page/",alt:"recipe page project"},{imgSrc:"./designs/product-preview-card-component/desktop-design.jpg",title:"Product preview card",languages:["HTML","CSS"],difficulty:["1","NEWBIE"],description:"This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.",url:"src/learning-paths/product-preview-card-component/",alt:"product preview card component project"},{imgSrc:"./designs/four-card-section/desktop-design.jpg",title:"Four card section",languages:["HTML","CSS"],difficulty:["1","NEWBIE"],description:"A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.",url:"src/learning-paths/four-card-section/",alt:"four card section feature project"},{imgSrc:"./designs/testimonials-grid-section/desktop-design.jpg",title:"Testimonials grid section",languages:["HTML","CSS"],difficulty:["2","JUNIOR"],description:"This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",url:"src/learning-paths/testimonials-grid-section/",alt:"testimonials grid section project"}],u=(a,s,r)=>{const i=document.createElement("div"),e=document.createElement("a"),t=document.createElement("img");return i.className="main__grid-img-container",e.href=a,e.target="_blank",t.alt=r,t.dataset.src=s,e.appendChild(t),i.appendChild(e),new IntersectionObserver((l,d)=>{l.forEach(p=>{p.isIntersecting&&(t.src=t.dataset.src,d.unobserve(t))})}).observe(t),i},g=(a,s,r)=>{const i=document.createElement("div"),e=document.createElement("h2"),t=document.createElement("p");return i.className="main__grid-description",e.className="main__grid-title",e.textContent=a,t.textContent=s,i.appendChild(e),i.appendChild(r),i.appendChild(t),i},f=(a,s)=>{const r=document.createElement("div"),i=document.createElement("div"),e=document.createElement("div");return a.forEach(t=>{const n=document.createElement("span");n.textContent=t,n.className="main__span",t==="HTML"?n.classList.add("main__span--html"):t==="CSS"&&n.classList.add("main__span--css"),i.appendChild(n)}),r.appendChild(i),s.forEach(t=>{const n=document.createElement("span");n.className="main__span",n.textContent=t,n.classList.add("main__span--padding"),t.includes("1")?(n.classList.add("main__span--lightblue"),e.style.borderColor="#6ABECD"):t.includes("2")&&(n.classList.add("main__span--lime"),e.style.borderColor="#AAD742"),e.appendChild(n)}),r.appendChild(e),r.className="main__grid-subtitle",e.className="main__grid-difficulty",r},h=()=>{const a=document.createElement("section"),s=document.createDocumentFragment();return a.className="main__grid",m.forEach(r=>{const i=document.createElement("div");i.className="main__grid-item";const e=u(r.url,r.imgSrc,r.alt),t=f(r.languages,r.difficulty),n=g(r.title,r.description,t);i.appendChild(e),i.appendChild(n),s.appendChild(i)}),a.appendChild(s),a},S=document.getElementById("app"),o=document.createElement("main"),c=document.createElement("h1"),C=h();c.textContent="Learning Path Projects";o.appendChild(c);o.appendChild(C);S.appendChild(o);
