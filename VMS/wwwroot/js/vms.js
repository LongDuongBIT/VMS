var vms;(()=>{"use strict";var e,t,o,r,n={},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return n[e].call(o.exports,o,o.exports,a),o.exports}a.m=n,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var n=Object.create(null);a.r(n);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,a.d(n,i),n},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,o)=>(a.f[o](e,t),t)),[])),a.u=e=>e+".vms.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},r="vms:",a.l=(e,t,n,i)=>{if(o[e])o[e].push(t);else{var s,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+n){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+n),s.src=e),o[e]=[t];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(g);var n=o[e];if(delete o[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={179:0};a.f.j=(t,o)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(((o,n)=>r=e[t]=[o,n]));o.push(r[2]=n);var i=a.p+a.u(t),s=new Error;a.l(i,(o=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,r[1](s)}}),"chunk-"+t,t)}};var t=(t,o)=>{var r,n,[i,s,l]=o,c=0;for(r in s)a.o(s,r)&&(a.m[r]=s[r]);for(l&&l(a),t&&t(o);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[i[c]]=0},o=self.webpackChunkvms=self.webpackChunkvms||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var s={};a.r(s),a.d(s,{AddOutsideClickMenuHandler:()=>E,EditProfileCarousel:()=>U,FilterCarousel:()=>h,GetUserLocation:()=>w,HookFileUploadEvent:()=>f,IncreaseNumber:()=>T,InformationCarousel:()=>O,LogoBanerCarousel:()=>b,OrganizeCarousel:()=>S,OtherAct:()=>_,PlayVideo:()=>y,RankCarousel:()=>k,SetUserLocation:()=>L,ShowResult:()=>C,SmoothScrollTo:()=>v});const l=e=>t=>{e.src=URL.createObjectURL(t.target.files[0]),e.onload=()=>{URL.revokeObjectURL(e.src)}},c=(e,t)=>()=>{e.src=t},u=(e,t={})=>{const{action:o="start",duration:r=1e3,delay:n=16}=t;if("stop"===o)return void d(e);if(d(e),!/[0-9]/.test(e.innerHTML))return;const i=p(e.innerHTML,{duration:r||e.getAttribute("data-duration"),delay:n||e.getAttribute("data-delay")});e._countUpOrigInnerHTML=e.innerHTML,e.innerHTML=i[0]||"&nbsp;",e.style.visibility="visible";const a=function(){e.innerHTML=i.shift()||"&nbsp;",i.length?(clearTimeout(e.countUpTimeout),e.countUpTimeout=setTimeout(a,n)):e._countUpOrigInnerHTML=void 0};e.countUpTimeout=setTimeout(a,n)},d=e=>{clearTimeout(e.countUpTimeout),e._countUpOrigInnerHTML&&(e.innerHTML=e._countUpOrigInnerHTML,e._countUpOrigInnerHTML=void 0),e.style.visibility=""},p=(e,t={})=>{const{duration:o=1e3,delay:r=16}=t,n=o/r,i=e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),a=[];for(let e=0;e<n;e++)a.push("");for(let e=0;e<i.length;e++)if(/([0-9.][,.0-9]*[0-9]*)/.test(i[e])&&!/<[^>]+>/.test(i[e])){let t=i[e];const o=[...t.matchAll(/[.,]/g)].map((e=>({char:e[0],i:t.length-e.index-1}))).sort(((e,t)=>e.i-t.i));t=t.replace(/[.,]/g,"");let r=a.length-1;for(let e=n;e>=1;e--){let i=parseInt(t/n*e,10);i=o.reduce(((e,{char:t,i:o})=>e.length<=o?e:e.slice(0,-o)+t+e.slice(-o)),i.toString()),a[r--]+=i}}else for(let t=0;t<n;t++)a[t]+=i[e];return a[a.length]=e.toString(),a},g=e=>{var t={Latitude:e.coords.latitude,Longitude:e.coords.longitude};localStorage.setItem("UserLocation",JSON.stringify(t))},m={playVideo:e=>{const t=document.querySelector(".video-header__source");t.src=e,t.play()},filterCarousel:()=>{$(".filter__carousel").owlCarousel({loop:!0,margin:0,nav:!0,responsive:{0:{items:4,slideBy:4},1200:{items:6,slideBy:6}}})},logoBanerCarousel:()=>{$(".logoBaner__carousel").owlCarousel({loop:!0,margin:0,nav:!0,responsive:{0:{items:1}}})},getUserLocation:()=>{const e=localStorage.getItem("UserLocation");return e?JSON.parse(e):null},setUserLocation:()=>{if(!navigator.geolocation)return null;navigator.geolocation.getCurrentPosition(g)},increaseNumber:()=>{$(document).ready((()=>{const e=document.querySelectorAll(".counter"),t=[];for(let o=0;o<e.length;o++)t.push(e[o].innerHTML),e[o].innerHTML=0;new IntersectionObserver((o=>{if(!0===o[0].isIntersecting){for(let o=0;o<e.length;o++)e[o].innerHTML=t[o];[].forEach.call(e,u)}}),{threshold:[1]}).observe(document.querySelector(".my-quoteBaner"))}))},rankCarousel:()=>{const e=$(".rank__owlcrousel");e.owlCarousel("destroy"),e.owlCarousel({loop:!0,margin:0,nav:!0,autoplay:!0,autoplayTimeout:5e3,autoplaySpeed:2e3,autoplayHoverPause:!0,navSpeed:2e3,dotsSpeed:2e3,responsiveClass:!0,responsive:{0:{items:1,stagePadding:50},1200:{items:1,stagePadding:135},1400:{items:1,stagePadding:160}}})}},v=e=>(e=>{$("html, body").stop().animate({scrollTop:$(e).offset().top},500,"swing")})(e),f=(e,t,o,r,n)=>(async(e,t,o,r,n)=>{document.getElementById(r)&&o&&e&&(o.removeEventListener("click",c(e,n)),o.addEventListener("click",c(e,n)));const i=document.getElementById(t);i&&e&&(i.removeEventListener("change",l(e)),i.addEventListener("change",l(e))),(await a.e(216).then(a.t.bind(a,216,23))).init()})(e,t,o,r,n),y=e=>m.playVideo(e),h=()=>m.filterCarousel(),b=()=>m.logoBanerCarousel(),L=()=>m.setUserLocation(),w=()=>m.getUserLocation(),T=()=>m.increaseNumber(),_=()=>{$(".owl-carousel").owlCarousel({loop:!0,margin:10,nav:!0,navText:['<span class="material-icons">navigate_before</span>','<span class="material-icons">navigate_next</span>'],dots:!1,responsive:{0:{items:3,slideBy:3},1200:{items:4,slideBy:3}}})},C=()=>m.showResult(),O=()=>{$(".information__carousel").owlCarousel({loop:!0,margin:0,nav:!0,responsive:{0:{items:3,slideBy:1}}})},S=()=>($(".organize__carousel"),void $(".organize__carousel").owlCarousel({loop:!0,margin:0,nav:!0,responsive:{0:{items:4,slideBy:4,mouseDrag:!1}}})),k=()=>m.rankCarousel(),U=e=>(e=>{let t=e;e>4&&(t=4);const o=$(".editProfile__carousel");o.owlCarousel("destroy"),o.owlCarousel({loop:!1,margin:0,mouseDrag:e>4,nav:!0,responsive:{0:{items:t,slideBy:1}}})})(e),E=(e,t)=>((e,t)=>{window.addEventListener("click",(o=>{if(!$(o.target).hasClass("d-block")){const o=document.querySelector("ul[class*='d-block']");o&&(o.classList.remove("d-block"),e.invokeMethodAsync(t))}}))})(e,t);vms=s})();