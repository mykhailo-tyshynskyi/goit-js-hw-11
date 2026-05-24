import{a as m,S as d,i as f}from"./assets/vendor-CuY1bPUi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function p(r){return m.get("https://pixabay.com/api/",{params:{key:"55993457-c2c59480978811e479ce5b7cc",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data.hits).catch(()=>{})}let g=new d(".gallery-item a",{captionsData:"alt",captionDelay:250});function y(r){return r.map(a=>{const{tags:o,comments:e,downloads:t,views:n,likes:c,webformatURL:l,largeImageURL:u}=a;return`<li class="gallery-item">
	<a class="gallery-link" href="${u}">
		<img 
		  class="gallery-image" 
		  src="${l}"
		  alt="${o}" 
		/>
         <ul class="img-data">
    <li class="img-data-item">
    <span class="accent">Likes</span>${c}
    </li>
      <li class="img-data-item">
    <span class="accent">Views</span>${n}
    </li>
      <li class="img-data-item">
    <span class="accent">Comments</span>${e}
    </li>
      <li class="img-data-item">
    <span class="accent">Downloads</span>${t}
    </li>
    </ul>
	</a>
   
</li>
`}).join("")}function h(){const r=document.querySelector(".gallery");r.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("isHiden")}function i(){document.querySelector(".loader").classList.add("isHiden")}const S=document.querySelector(".form"),w=document.querySelector('[name="search-text"]'),b=document.querySelector(".gallery");S.addEventListener("submit",q);function q(r){r.preventDefault(),h(),L();const s=w.value.trim();s!==""&&(p(s).then(a=>{if(a.length===0)throw new Error;const o=y(a);i(),b.innerHTML=o,g.refresh()}).catch(a=>{i(),f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}),r.target.reset())}
//# sourceMappingURL=index.js.map
