var vms;(()=>{"use strict";var e,t,o,r,n={},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return n[e].call(o.exports,o,o.exports,s),o.exports}s.m=n,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var n=Object.create(null);s.r(n);var i={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,s.d(n,i),n},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,o)=>(s.f[o](e,t),t)),[])),s.u=e=>e+".vms.js",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},r="vms:",s.l=(e,t,n,i)=>{if(o[e])o[e].push(t);else{var a,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+n){a=d;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",r+n),a.src=e),o[e]=[t];var p=(t,r)=>{a.onerror=a.onload=null,clearTimeout(m);var n=o[e];if(delete o[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),l&&document.head.appendChild(a)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={179:0};s.f.j=(t,o)=>{var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(((o,n)=>r=e[t]=[o,n]));o.push(r[2]=n);var i=s.p+s.u(t),a=new Error;s.l(i,(o=>{if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,r[1](a)}}),"chunk-"+t,t)}};var t=(t,o)=>{var r,n,[i,a,l]=o,u=0;for(r in a)s.o(a,r)&&(s.m[r]=a[r]);for(l&&l(s),t&&t(o);u<i.length;u++)n=i[u],s.o(e,n)&&e[n]&&e[n][0](),e[i[u]]=0},o=self.webpackChunkvms=self.webpackChunkvms||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var a={};s.r(a),s.d(a,{ActCarousel:()=>O,AddOutsideClickMenuHandler:()=>E,EditProfileCarousel:()=>P,FilterCarousel:()=>h,GetUserLocation:()=>L,HookFileUploadEvent:()=>f,IncreaseNumber:()=>C,InformationCarousel:()=>k,LogoBanerCarousel:()=>b,OrganizeCarousel:()=>U,OtherAct:()=>T,PlayVideo:()=>y,ProfileCarousel:()=>_,RankCarousel:()=>B,SetUserLocation:()=>w,ShowResult:()=>S,SmoothScrollTo:()=>v});const l=e=>t=>{e.src=URL.createObjectURL(t.target.files[0]),e.onload=()=>{URL.revokeObjectURL(e.src)}},u=(e,t)=>()=>{e.src=t},c=(e,t={})=>{const{action:o="start",duration:r=1e3,delay:n=16}=t;if("stop"===o)return void d(e);if(d(e),!/[0-9]/.test(e.innerHTML))return;const i=p(e.innerHTML,{duration:r||e.getAttribute("data-duration"),delay:n||e.getAttribute("data-delay")});e._countUpOrigInnerHTML=e.innerHTML,e.innerHTML=i[0]||"&nbsp;",e.style.visibility="visible";const s=function(){e.innerHTML=i.shift()||"&nbsp;",i.length?(clearTimeout(e.countUpTimeout),e.countUpTimeout=setTimeout(s,n)):e._countUpOrigInnerHTML=void 0};e.countUpTimeout=setTimeout(s,n)},d=e=>{clearTimeout(e.countUpTimeout),e._countUpOrigInnerHTML&&(e.innerHTML=e._countUpOrigInnerHTML,e._countUpOrigInnerHTML=void 0),e.style.visibility=""},p=(e,t={})=>{const{duration:o=1e3,delay:r=16}=t,n=o/r,i=e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),s=[];for(let e=0;e<n;e++)s.push("");for(let e=0;e<i.length;e++)if(/([0-9.][,.0-9]*[0-9]*)/.test(i[e])&&!/<[^>]+>/.test(i[e])){let t=i[e];const o=[...t.matchAll(/[.,]/g)].map((e=>({char:e[0],i:t.length-e.index-1}))).sort(((e,t)=>e.i-t.i));t=t.replace(/[.,]/g,"");let r=s.length-1;for(let e=n;e>=1;e--){let i=parseInt(t/n*e,10);i=o.reduce(((e,{char:t,i:o})=>e.length<=o?e:e.slice(0,-o)+t+e.slice(-o)),i.toString()),s[r--]+=i}}else for(let t=0;t<n;t++)s[t]+=i[e];return s[s.length]=e.toString(),s},m=e=>{var t={Latitude:e.coords.latitude,Longitude:e.coords.longitude};localStorage.setItem("UserLocation",JSON.stringify(t))},g={playVideo:e=>{const t=document.querySelector(".video-header__source");t.src=e,t.play()},filterCarousel:()=>{$(".filter__carousel").owlCarousel({loop:!0,margin:0,nav:!0,responsive:{0:{items:4,slideBy:4},1200:{items:6,slideBy:6}}})},logoBanerCarousel:()=>{$(".logoBaner__carousel").owlCarousel({loop:!0,margin:0,nav:!0,responsive:{0:{items:1,nav:!1},992:{items:1,nav:!0}}})},getUserLocation:()=>{const e=localStorage.getItem("UserLocation");return e?JSON.parse(e):null},setUserLocation:()=>{if(!navigator.geolocation)return null;navigator.geolocation.getCurrentPosition(m)},increaseNumber:()=>{$(document).ready((()=>{const e=document.querySelectorAll(".counter"),t=[];for(let o=0;o<e.length;o++)t.push(e[o].innerHTML),e[o].innerHTML=0;new IntersectionObserver((o=>{if(!0===o[0].isIntersecting){for(let o=0;o<e.length;o++)e[o].innerHTML=t[o];[].forEach.call(e,c)}}),{threshold:[1]}).observe(document.querySelector(".my-quoteBaner"))}))},rankCarousel:()=>{const e=$(".rank__owlcrousel");e.owlCarousel("destroy"),e.owlCarousel({loop:!0,margin:0,nav:!0,autoplay:!0,autoplayTimeout:5e3,autoplaySpeed:2e3,autoplayHoverPause:!0,navSpeed:2e3,dotsSpeed:2e3,responsiveClass:!0,responsive:{0:{items:1,stagePadding:0},992:{items:1,stagePadding:100},1200:{items:1,stagePadding:135},1400:{items:1,stagePadding:160}}})}},v=e=>(e=>{$("html, body").stop().animate({scrollTop:$(e).offset().top},500,"swing")})(e),f=(e,t,o,r,n)=>(async(e,t,o,r,n)=>{document.getElementById(r)&&o&&e&&(o.removeEventListener("click",u(e,n)),o.addEventListener("click",u(e,n)));const i=document.getElementById(t);i&&e&&(i.removeEventListener("change",l(e)),i.addEventListener("change",l(e))),(await s.e(216).then(s.t.bind(s,216,23))).init()})(e,t,o,r,n),y=e=>g.playVideo(e),h=()=>g.filterCarousel(),b=()=>g.logoBanerCarousel(),w=()=>g.setUserLocation(),L=()=>g.getUserLocation(),C=()=>g.increaseNumber(),T=e=>(e=>{const t=e>=3;$(".owl-carousel").owlCarousel({loop:t,margin:10,nav:!0,dots:!1,responsive:{0:{items:3,slideBy:3,nav:!1},992:{items:4,slideBy:4,mouseDrag:!1}}})})(e),_=()=>{$(".profile__carousel").owlCarousel({loop:!0,margin:0,nav:!0,responsive:{0:{items:3,slideBy:1}}})},O=()=>{$(".act__carousel").owlCarousel({loop:!0,margin:0,nav:!0,responsive:{0:{items:4,slideBy:4}}})},S=()=>g.showResult(),k=()=>{$(".information__carousel").owlCarousel({loop:!0,margin:0,nav:!0,responsive:{0:{items:3,slideBy:1}}})},U=()=>($(".owl-carousel"),void $(".owl-carousel").owlCarousel({loop:!1,margin:0,nav:!0,responsive:{0:{items:2,slideBy:2,nav:!1},576:{items:3,slideBy:1,nav:!1},768:{items:4,slideBy:4,nav:!1},992:{items:4,slideBy:4,mouseDrag:!1}}})),B=()=>g.rankCarousel(),P=e=>(e=>{let t=e;e>4&&(t=4);const o=$(".editProfile__carousel");o.owlCarousel("destroy"),o.owlCarousel({loop:!1,margin:0,mouseDrag:e>4,nav:!0,responsive:{0:{items:t,slideBy:1}}})})(e),E=(e,t)=>((e,t)=>{window.addEventListener("click",(o=>{if(!$(o.target).hasClass("d-block")){const o=document.querySelector("ul[class*='d-block']");o&&(o.classList.remove("d-block"),e.invokeMethodAsync(t))}}))})(e,t);vms=a})();