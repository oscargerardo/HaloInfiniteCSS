const s=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}};s();const f=document.querySelector("#bmore"),p=document.querySelector("#bmenu"),g=document.querySelector(".links"),m=document.querySelector(".more .menu");p.addEventListener("click",n=>{n.preventDefault(),g.classList.toggle("show")});f.addEventListener("click",n=>{n.preventDefault(),m.classList.toggle("show")});const r=[{id:"PyMlV5_HRWk"},{id:"XCbMVbeKlCg"},{id:"Fmdb-KmlzD8"},{id:"lOthvD1rMbQ"},{id:"nXDk86lQhto"}];document.querySelector("#slider");const u=document.querySelector("#current"),h=document.querySelector("#videos-container"),b=document.querySelector("#next"),x=document.querySelector("#prev");let e=0;b.addEventListener("click",n=>{let t=e;e=e+1<r.length?e+1:e,e!==t&&l(r[e].id)});x.addEventListener("click",n=>{let t=e;e=e-1>=0?e-1:e,e!==t&&l(r[e].id)});l(r[e].id);v();function l(n){u.innerHTML=`
    <iframe width="100%" height="600px" src="https://www.youtube.com/embed/${n}" title="Halo Infinite | Campaign Launch Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `}function v(){const n=r.map((t,a)=>`<div class="item">
            <a href="#" data-id=${a}>
                <img src="https://i3.ytimg.com/vi/${t.id}/maxresdefault.jpg" width=200px/>
            </a>
        </div>`);h.innerHTML=n.join(""),document.querySelectorAll(".item a").forEach(t=>{t.addEventListener("click",a=>{a.preventDefault(),e=+t.getAttribute("data-id"),l(r[e].id)})})}
