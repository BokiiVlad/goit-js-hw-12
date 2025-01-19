import{S as u,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(n){const o=new URLSearchParams({key:"48300565-6dad9db0463f535246b89c980",q:n,image_type:"photo",orientation:"horizontal",orientation:"true"});return fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function m(n){const{largeImageURL:o,webformatURL:r,tags:i,likes:e,views:t,comments:s,downloads:l}=n;return`<a href="${o}" class="gallery-item">
    <div class="photo-card">
      <img src="${r}" alt="${i}" loading="lazy" width="360" />
      <div class="photo-info">
        <p class="photo-info-item">Likes<span>${e}</span></p>
        <p class="photo-info-item">Views<span>${t}</span></p>
        <p class="photo-info-item">Comments<span>${s}</span></p>
        <p class="photo-info-item">Downloads<span>${l}</span></p>
      </div>
    </div>
  </a>`}const c=document.querySelector(".form"),f=document.querySelector(".but-style"),d=document.querySelector(".gallery"),h=new u(".gallery a",{captionsData:"alt",captionDelay:250,captions:!0});f.addEventListener("click",n=>{n.preventDefault();const o=c.elements.search.value.trim();if(o===""){a.warning({title:"Warning",message:"Enter correct data."});return}c.reset(),p(o).then(r=>{if(r.total===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const i=r.hits.map(e=>m(e));d.innerHTML=i.join(""),h.refresh()}).catch(r=>{console.log(r.message)})});
//# sourceMappingURL=index.js.map
