import{S as d,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(n){const o=new URLSearchParams({key:"48300565-6dad9db0463f535246b89c980",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function f(n){const{largeImageURL:o,webformatURL:r,tags:s,likes:e,views:t,comments:a,downloads:u}=n;return`<a href="${o}" class="gallery-item">
    <div class="photo-card">
      <img src="${r}" alt="${s}" loading="lazy" width="360" />
      <div class="photo-info">
        <p class="photo-info-item">Likes<span>${e}</span></p>
        <p class="photo-info-item">Views<span>${t}</span></p>
        <p class="photo-info-item">Comments<span>${a}</span></p>
        <p class="photo-info-item">Downloads<span>${u}</span></p>
      </div>
    </div>
  </a>`}const l=document.querySelector(".form"),y=document.querySelector(".but-style"),p=document.querySelector(".gallery"),i=document.querySelector(".loader-container"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250,captions:!0});i.style.display="none";y.addEventListener("click",n=>{p.innerHTML="",i.style.display="flex",n.preventDefault();const o=l.elements.search.value.trim();if(o===""){i.style.display="none",c.warning({title:"Warning",message:"Enter correct data."});return}l.reset(),m(o).then(r=>{if(r.total===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=r.hits.map(e=>f(e));p.innerHTML=s.join(""),h.refresh()}).catch(r=>{console.log(r.message)}).finally(()=>{i.style.display="none"})});
//# sourceMappingURL=index.js.map
