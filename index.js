import{a as v,S as b,i as p}from"./assets/vendor-Dpd1z_xS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function f(o,t){const s={params:{per_page:15,page:t,key:"48300565-6dad9db0463f535246b89c980",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return v.get("https://pixabay.com/api/",s)}function g(o){const{largeImageURL:t,webformatURL:s,tags:a,likes:e,views:r,comments:l,downloads:L}=o;return`<a href="${t}" class="gallery-item">
    <div class="photo-card">
      <img src="${s}" alt="${a}" loading="lazy" width="360" />
      <div class="photo-info">
        <p class="photo-info-item">Likes<span>${e}</span></p>
        <p class="photo-info-item">Views<span>${r}</span></p>
        <p class="photo-info-item">Comments<span>${l}</span></p>
        <p class="photo-info-item">Downloads<span>${L}</span></p>
      </div>
    </div>
  </a>`}const u=document.querySelector(".form");document.querySelector(".but-style");const m=document.querySelector(".gallery"),n=document.querySelector(".loader-container"),i=document.querySelector(".but-more"),h=new b(".gallery a",{captionsData:"alt",captionDelay:250,captions:!0});n.style.display="none";let c=1,d="";const w=async o=>{try{if(m.innerHTML="",n.style.display="flex",o.preventDefault(),d=u.elements.search.value.trim(),d===""){n.style.display="none",p.warning({title:"Warning",message:"Enter correct data."});return}u.reset(),c=1;const t=await f(d,c);if(t.data.total===0){p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=t.data.hits.map(a=>g(a));m.innerHTML=s.join(""),h.refresh(),t.data.totalHits>15&&(i.classList.remove("is-hidden"),i.removeEventListener("click",y),i.addEventListener("click",y))}catch(t){console.log(t)}finally{n.style.display="none"}};async function y(){try{i.classList.add("is-hidden"),n.style.display="flex",c++;const o=await f(d,c),t=o.data.hits.map(e=>g(e)).join("");m.insertAdjacentHTML("beforeend",t);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),h.refresh();const a=Math.ceil(o.data.totalHits/15);if(c>=a){p.error({title:"Error",message:"We're sorry, but you've reached the end of search results."}),i.classList.add("is-hidden"),i.removeEventListener("click",y);return}i.classList.remove("is-hidden")}catch(o){console.log(o)}finally{n.style.display="none"}}u.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
