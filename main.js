(()=>{var e={961:()=>{const e=document.getElementsByClassName("button-toggle__form")[0];e&&e.addEventListener("submit",(e=>{if(e.preventDefault(),document.getElementsByClassName("button__popover")[0])document.getElementsByClassName("button__popover")[0].classList.toggle("button__popover_disabled");else{const e=document.createElement("div");e.className="button__popover";const t=document.createElement("div");t.textContent="Popover!",t.style.backgroundColor="rgb(230, 230, 230)",t.style.borderRadius="5px 5px 0 0",t.style.borderBottom="1px solid rgb(80, 80, 80)";const o=document.createElement("div");o.textContent="Нажми ещё раз и я исчезну!",e.appendChild(t),e.appendChild(o);const n=document.getElementsByClassName("button-toggle__button")[0];n.offsetParent.appendChild(e),e.style.top=n.offsetTop-e.offsetHeight-10+"px",e.style.left=n.offsetLeft+n.offsetWidth/2-e.offsetWidth/2+"px"}}))}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(961)})()})();