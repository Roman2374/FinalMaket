!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10);if(window.innerWidth<768)new Swiper(".mySwiper",{slidesPerView:"auto",spaceBetween:16,loop:!1,pagination:{el:".swiper-pagination",clickable:!0}});var r=document.querySelector(".readMore"),o=document.querySelector(".readMore__text"),l=document.querySelector(".readMore__icon"),s=document.querySelector(".listBrendsOn768px"),a=document.querySelector(".readMoreType"),c=document.querySelector(".listBrendsType"),i=document.querySelector(".readMoreType__icon"),d=document.querySelector(".readMoreType__text"),u=document.querySelector(".site"),y=document.querySelector(".linkMain__chat"),f=document.querySelector(".asideFeedback"),m=document.querySelector(".feedbackClose"),p=document.querySelector(".aside-drop-menu"),x=document.querySelector(".header-drop-menu__close"),v=document.querySelector(".blur"),S=document.querySelector(".header-container__burger"),h=document.querySelector(".linkMain__call"),_=document.querySelector(".asideCall"),b=document.querySelector(".callClose");r.addEventListener("click",(function(){r.classList.contains("hidden")?(o.textContent="Показать все",r.classList.remove("hidden"),l.style.transform="rotate(0deg)",s.style.maxHeight="175px"):(o.textContent="Скрыть",r.classList.add("hidden"),l.style.transform="rotate(-180deg)",s.style.maxHeight="".concat(s.scrollHeight,"px"))})),a.addEventListener("click",(function(){a.classList.contains("hidden")?(a.classList.remove("hidden"),d.textContent="Показать все",i.style.transform="rotate(0deg)",c.style.maxHeight="160px"):(d.textContent="Скрыть",a.classList.add("hidden"),i.style.transform="rotate(-180deg)",c.style.maxHeight="".concat(c.scrollHeight,"px"))})),S.addEventListener("click",(function(){p.style.transform="translateX(0)",v.style.zIndex="2",v.style.display="block",u.style.overflow="hidden"})),x.addEventListener("click",(function(){p.style.transform="translateX(-100%)",v.style.zIndex="-1",v.style.display="none",u.style.overflow="scroll",f.style.transform="translateX(100%)"})),v.addEventListener("click",(function(){m.style.transform="translateX(200%)",b.style.transform="translateX(200%)",v.style.zIndex="-1",v.style.display="none",f.style.transform="translateX(100%)",_.style.transform="translateX(100%)",p.style.transform="translateX(-100%)",u.style.overflow="scroll"})),y.addEventListener("click",(function(){f.style.transform="translateX(0)",v.style.zIndex="4",v.style.display="block",m.style.transform="translateX(0)"})),h.addEventListener("click",(function(){_.style.transform="translateX(0)",v.style.zIndex="4",v.style.display="block",b.style.transform="translateX(0)"})),m.addEventListener("click",(function(){window.innerWidth>=1440?(v.style.zIndex="-1",v.style.display="none",m.style.transform="translateX(200%)",u.style.overflow="hidden"):(v.style.zIndex="2",u.style.overflow="hidden"),f.style.transform="translateX(100%)"})),b.addEventListener("click",(function(){window.innerWidth>=1440?(v.style.zIndex="-1",v.style.display="none",b.style.transform="translateX(200%)",u.style.overflow="hidden"):(v.style.zIndex="2",u.style.overflow="hidden"),_.style.transform="translateX(100%)"}))},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map