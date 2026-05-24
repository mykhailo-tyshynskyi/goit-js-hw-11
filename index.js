import{a as m,S as d,i as f}from"./assets/vendor-CuY1bPUi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(a){return m.get("https://pixabay.com/api/",{params:{key:"55993457-c2c59480978811e479ce5b7cc",q:`${a}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw r})}let g=new d(".gallery-item a",{captionsData:"alt",captionDelay:250});const n=document.querySelector(".gallery");function y(a){const s=a.map(r=>{const{tags:i,comments:e,downloads:t,views:o,likes:c,webformatURL:l,largeImageURL:u}=r;return`<li class="gallery-item">
	<a class="gallery-link" href="${u}">
		<img 
		  class="gallery-image" 
		  src="${l}"
		  alt="${i}" 
		/>
         <ul class="img-data">
    <li class="img-data-item">
    <span class="accent">Likes</span>${c}
    </li>
      <li class="img-data-item">
    <span class="accent">Views</span>${o}
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
`}).join("");n.innerHTML=s,g.refresh()}function h(){n.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("isHiden")}function w(){document.querySelector(".loader").classList.add("isHiden")}const S=document.querySelector(".form"),b=document.querySelector('[name="search-text"]');S.addEventListener("submit",q);function q(a){a.preventDefault();const s=b.value.trim();s!==""&&(h(),L(),p(s).then(r=>{if(r.total===0)throw new Error;y(r.hits),a.target.reset()}).catch(r=>{f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}).finally(()=>{w()}))}
//# sourceMappingURL=index.js.map
