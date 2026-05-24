import{a as d,S as f,i as p}from"./assets/vendor-CuY1bPUi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function g(a){return d.get("https://pixabay.com/api/",{params:{key:"55993457-c2c59480978811e479ce5b7cc",q:`${a}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>{})}let y=new f(".gallery-item a",{captionsData:"alt",captionDelay:250});const h=document.querySelector("main");h.innerHTML=`<span class="loader isHiden"></span>
<ul class="gallery"></ul>`;const c=document.querySelector(".gallery");function L(a){const s=a.map(r=>{const{tags:i,comments:e,downloads:t,views:o,likes:l,webformatURL:u,largeImageURL:m}=r;return`<li class="gallery-item">
	<a class="gallery-link" href="${m}">
		<img 
		  class="gallery-image" 
		  src="${u}"
		  alt="${i}" 
		/>
         <ul class="img-data">
    <li class="img-data-item">
    <span class="accent">Likes</span>${l}
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
`}).join("");c.innerHTML=s,y.refresh()}function S(){c.innerHTML=""}function w(){document.querySelector(".loader").classList.remove("isHiden")}function n(){document.querySelector(".loader").classList.add("isHiden")}const b=document.querySelector(".form"),q=document.querySelector('[name="search-text"]');b.addEventListener("submit",$);function $(a){a.preventDefault(),S(),w();const s=q.value.trim();if(s===""){n();return}else g(s).then(r=>{if(r.length===0)throw new Error;L(r),n()}).catch(r=>{n(),p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})});a.target.reset()}
//# sourceMappingURL=index.js.map
