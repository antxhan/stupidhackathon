(()=>{"use strict";var n={12:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"/* Container for the video and photo elements */\n#container {\n  display: flex;\n  flex-direction: column; /* Stack video and photo vertically */\n  align-items: center; /* Center items horizontally */\n  width: min(500px, 100%);\n}\n\n/* Style for video element */\n#video {\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 100%;\n  height: auto; /* Maintain aspect ratio */\n}\n\n/* Style for canvas element */\n#canvas {\n  display: none; /* Hide canvas; only needed for capturing */\n}\n\n/* Style for the captured photo */\n#photo {\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 100%;\n  object-fit: cover; /* Scale the photo to fit the container */\n}\n\n.flash-description {\n  max-width: min(500px, 100%);\n}\n",""]);const s=a},422:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,":root {\n  --clr-neutral-500: rgb(93, 93, 93);\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #002fa7;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  margin: 0;\n}\n\nbutton {\n  background-color: white; \n  font-family: Georgia, 'Times New Roman', Times, serif;\n  color: black; \n  border: 2px solid #4CAF50;\n  padding: 8px 20px; \n  text-align: center; \n  text-decoration: none; \n  display: inline-block;\n  font-size: 16px; \n  margin: 4px 2px; \n  cursor: pointer; \n  border-radius: 8px; \n  transition: background-color 0.3s ease, color 0.3s ease; \n}\n\nh1 {\n  font-size: 40px;\n  /* text-align: center; */\n  /* width: max-content; */\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  color: whitesmoke;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  ul {\n    padding: 0;\n    list-style: none;\n    display: flex;\n    gap: 0.5rem;\n  }\n}\n\nheader {\n  padding-inline: 2rem;\n}\n\nmain {\n  display: flex;\n  padding-inline: 2rem;\n  /* border: 1px solid black; */\n  flex-direction: column;\n  width: 100%;\n  flex-grow: 1;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo {\n  &:hover {\n    cursor: pointer;\n  }\n  h1 {\n    line-height: 1;\n  }\n  img {\n    /* max-width: min(5rem, 100%); */\n    /* max-width: 100%; */\n    /* min-width: 2rem; */\n    width: 5rem;\n    aspect-ratio: 1;\n    margin-bottom: 1rem;\n  }\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\nfooter {\n  img {\n    width: 1.5rem;\n    aspect-ratio: 1;\n  }\n  p {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n    font-weight: bold;\n    transition: all 100ms ease-in-out;\n    &:hover {\n      transform: scale(1.05);\n    }\n  }\n}\n\n@media (max-width: 600px) {\n  body {\n    /* background-color: rgb(240, 240, 240); */\n  }\n  header {\n    img {\n      aspect-ratio: 1;\n      max-width: 3rem;\n      /* height: 2rem; */\n    }\n    h1 {\n      font-size: 2rem;\n    }\n  }\n}\n",""]);const s=a},790:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"main:has(.terms) {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n}\n\n.terms {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: min(500px, 100%);\n}\n\n.terms-window {\n  *,\n  * * {\n    margin: 0;\n    padding: 0;\n  }\n  h3 {\n    text-align: center;\n  }\n  background-color: white;\n  color: black;\n  position: relative;\n  width: min(500px, 100%);\n  padding: 1rem;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  justify-content: center;\n  align-self: center;\n  h2 {\n    text-align: center;\n  }\n  textarea {\n    margin: 0;\n    font-family: inherit;\n    resize: none;\n    border-radius: 0.5rem;\n    padding: 0.5rem;\n    font-size: 1rem;\n  }\n  p {\n    text-align: center;\n  }\n  border: 1px solid black;\n  .terms-content {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    min-height: 10rem;\n    position: relative;\n    textarea {\n      top: 0;\n      left: 50%;\n      display: block;\n      width: 100%;\n      height: 100%;\n      transform: translateX(-50%);\n      position: absolute;\n    }\n    .terms-content-typing {\n      z-index: 2;\n      background: transparent;\n    }\n    .terms-content-message {\n      color: var(--clr-neutral-500);\n    }\n  }\n  button {\n    height: 2rem;\n  }\n  .oops {\n    background-color: rgba(255, 92, 92, 0.9);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    height: 100%;\n    z-index: 3;\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    position: absolute;\n    width: 100%;\n  }\n}\n",""]);const s=a},570:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"body:has(#unsubscribe) {\n    overflow: hidden;\n}\n\nmain:has(#unsubscribe) {\n  width: min(500px, 100%);\n\n  h2 {\n    text-align: center;\n  }\n}\n\n#unsubscribe-form {\n  border: 1px solid black;\n  background-color: white;\n  color: black;\n  width: min(500px, 100%);\n  padding: 1rem;\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  justify-content: center;\n  align-self: center;\n\n  p {\n    margin: 0;\n  }\n\n  input {\n    border-radius: 0.25rem;\n  }\n}\n\n.character-btn {\n  position: absolute;\n  top: 0;\n  animation-name: buttonDrop;\n  animation-timing-function: linear;\n}\n\n#confetti {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  overflow: hidden;\n  z-index: 9999;\n}\n\n.confetti-piece {\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  opacity: 0;\n  transform: translateY(-100%);\n  animation: confettiDrop linear forwards;\n}\n\n.input-error {\n  background-color: red;\n}\n\n@keyframes buttonDrop {\n  to {\n    transform: translateY(100vh);\n  }\n}\n\n@keyframes confettiDrop {\n  to {\n    opacity: 1;\n    transform: translateY(100vh) rotate(720deg);\n  }\n}\n",""]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var m=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var h=r(p,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),s=t(659),c=t.n(s),l=t(56),d=t.n(l),u=t(540),m=t.n(u),p=t(113),h=t.n(p),f=t(422),y={};y.styleTagTransform=h(),y.setAttributes=d(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=m(),r()(f.A,y),f.A&&f.A.locals&&f.A.locals;var g=t(790),b={};b.styleTagTransform=h(),b.setAttributes=d(),b.insert=c().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=m(),r()(g.A,b),g.A&&g.A.locals&&g.A.locals;let v=0;const x="Welcome to Stupid Components, where our components are as absurd as they are functional. By using our site, you agree to use our stupid components responsibly—and, ideally, in stupid ways. We’re not responsible if your website becomes too stupid or causes minor chaos. No guarantees of usability, stability, or general common sense are provided (obviously). You may not use our components for illegal, harmful, or excessively intelligent purposes. Stupid Components reserves the right to remain unapologetically stupid at all times. By continuing, you accept these terms with a sense of humor and a dash of irony. Enjoy the stupidity!";function w(){}function T(n){document.querySelector(".terms-window button").disabled=!0,v=0,n.target.value="",function(){const n=document.querySelector(".oops");n&&n.remove();const e=document.querySelector(".terms-content"),t=document.createElement("span");t.innerText="Oops!",t.classList.add("oops"),e.appendChild(t),setTimeout((()=>{t.remove()}),1e3)}()}function E(n){n.preventDefault(),T(n)}function C(n){const e=document.querySelector(".terms-window button"),t=n.target.value.charAt(v),o=x.charAt(v);""!==n.target.value?n.target.value.length-1<v?T(n):t===o?(v++,634===v&&(e.disabled=!1)):T(n):T(n)}var S=t(570),k={};k.styleTagTransform=h(),k.setAttributes=d(),k.insert=c().bind(null,"head"),k.domAPI=a(),k.insertStyleElement=m(),r()(S.A,k),S.A&&S.A.locals&&S.A.locals;var A=t(12),M={};function L(){!function(){const n=document.querySelector("main"),e=document.createElement("h2");e.innerText="Flashies",document.querySelector("main").appendChild(e);const t=document.createElement("p");t.innerText="The photo version of cookies, but brighter. - Most websites track you with cookies. This one? It tracks you with photos! Each flash captures a moment of you while browsing, creating a unique visual 'footprint.' Don’t worry—it’s for research... we promise!",t.classList.add("flash-description"),document.querySelector("main").appendChild(t);const o=document.createElement("div"),r=document.createElement("video");r.id="video",r.autoplay=!0,o.appendChild(r);const i=document.createElement("canvas");i.id="canvas",o.appendChild(i);const a=document.createElement("img");a.id="photo",a.alt="The screen capture will appear in this box.",o.appendChild(a),n.appendChild(o)}(),async function(){const n=document.getElementById("video"),e=document.getElementById("canvas"),t=document.getElementById("photo");try{const e=await navigator.mediaDevices.getUserMedia({video:!0});n.srcObject=e,n.play()}catch(n){console.error(`An error occurred: ${n}`)}!function(n,e,t){!function o(){const r=Math.floor(7001*Math.random())+3e3;setTimeout((()=>{!function(n,e,t){n.getContext("2d").drawImage(e,0,0,n.width,n.height);const o=n.toDataURL("image/png");t.setAttribute("src",o),console.log("Photo taken"),function(){const n=document.createElement("div");n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.width="100vw",n.style.height="100vh",n.style.backgroundColor="white",n.style.zIndex="1000",n.style.opacity="0",n.style.transition="opacity 0.3s ease-in-out",document.body.appendChild(n),setTimeout((()=>{n.style.opacity="1"}),10),setTimeout((()=>{n.style.opacity="0",setTimeout((()=>{n.remove()}),300)}),300)}()}(n,e,t),o()}),r)}()}(e,n,t)}()}M.styleTagTransform=h(),M.setAttributes=d(),M.insert=c().bind(null,"head"),M.domAPI=a(),M.insertStyleElement=m(),r()(A.A,M),A.A&&A.A.locals&&A.A.locals;const I="\n  <p>\n    Stupid Components is a collection of stupid components that you can use\n    to build your own stupid websites.\n  </p>",j=document.querySelector("main");document.querySelector("header .logo").addEventListener("click",(()=>{j.innerHTML=I}));const q=document.createElement("image");document.body.appendChild(q),document.querySelectorAll("nav ul li button").forEach((n=>{n.addEventListener("click",(()=>{document.querySelectorAll(".navlink").forEach((n=>{n.classList.remove("active")})),n.classList.contains("active")||(n.parentNode.classList.add("active"),"terms"===n.value&&(j.innerHTML="",function(){const n=document.querySelector("main"),e=document.createElement("div");e.classList.add("terms");const t=document.createElement("h2");t.innerText="TOS Typer",e.appendChild(t);const o=document.createElement("p");o.className="terms-description",o.innerText="The TOS Typer component ensures your users not only read but truly internalize your Terms of Service. This high-engagement, no-shortcuts-required feature makes users re-type your entire TOS, word for word, letter by letter.",e.appendChild(o);const r=document.createElement("div");r.classList.add("terms-window");const i=document.createElement("h3");i.innerText="Terms of Service",r.appendChild(i);const a=document.createElement("p");a.innerText="Please re-type the message below. If you make a typo, it will be reset.",r.appendChild(a);const s=document.createElement("div");s.classList.add("terms-content");const c=document.createElement("textarea");c.classList.add("terms-content-typing"),c.addEventListener("input",C),c.addEventListener("paste",E),c.autofocus=!0,c.maxLength=634;const l=document.createElement("textarea");l.classList.add("terms-content-message"),l.innerText=x;const d=document.createElement("button");d.innerText="Agree & Continue",d.disabled=!0,d.addEventListener("click",w),s.appendChild(c),s.appendChild(l),r.appendChild(s),r.appendChild(d),e.appendChild(r),n.appendChild(e)}()),"unsubscribe"===n.value&&(j.innerHTML="",function(){const n=document.querySelector("main"),e=document.createElement("div"),t=document.createElement("div");e.id="unsubscribe",t.id="button-container";const o=function(){const n=["Cool","Fast","Smart","Strong","Funny","Brave"],e=["Lion","Tiger","Bear","Eagle","Shark","Wolf"];return`${n[Math.floor(Math.random()*n.length)]}${e[Math.floor(Math.random()*e.length)]}${Math.floor(1e3*Math.random())}`}();e.innerHTML=`\n    <h2>Unsubscription form</h2>\n    <p>Unsubscribing might feel tedious, but it offers a rare moment to pause and reflect on your choices. This slow, deliberate process allows you to reconsider your subscriptions, reaffirm your priorities, and take control of your digital space. As you input each character, think of it as a step towards a more intentional life. Embrace this mindful moment, and enjoy the small celebration of confetti with each correct entry. Sometimes, a little slowness is just what we need to find balance.</p>\n    <form id="unsubscribe-form" onSubmit="return false;">\n      <p id="match">Enter: ${o}</p>\n      <input type="text" id="unsubscribeInput" readonly>\n    </form>\n    <div id="confetti"></div>\n  `,n.appendChild(e),n.appendChild(t),function(){const n=document.querySelector("#button-container");function e(){const t=[..."abcdefghijklmnopqrstuvwxyz",..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",..."0123456789"],o=t[Math.floor(Math.random()*t.length)],r=document.createElement("button");r.classList.add("character-btn"),r.textContent=o,r.onclick=()=>{!function(n){const e=document.getElementById("unsubscribeInput"),t=document.getElementById("match").textContent;e.value+=n,0!==t.indexOf(e.value)?(e.value="",e.classList.add("input-error"),setTimeout((()=>{e.classList.remove("input-error")}),1e3)):e.value===t&&(document.querySelector("#button-container").innerHTML="",function(){const n=document.getElementById("confetti"),e=document.getElementById("unsubscribeInput");if(n){n.innerHTML="";for(let e=0;e<100;e++){const e=document.createElement("div");e.classList.add("confetti-piece"),e.style.left=100*Math.random()+"%",e.style.transform=`rotateY(${360*Math.random()*100}deg)`,e.style.animationDuration=3*Math.random()+2+"s",e.style.backgroundColor=`hsl(${360*Math.random()}, 100%, 50%)`,n.appendChild(e)}e.style.backgroundColor="green"}else console.error("Confetti container not found!")}())}(o),r.remove(),e()},r.style.left=90*Math.random()+"%",r.style.fontSize=1.5*Math.random()+.5+"rem",r.style.animationDuration=4*Math.random()+10+"s",r.tabIndex=-1,r.onanimationend=()=>{r.remove(),e()},n.appendChild(r)}console.log(n);for(let n=0;n<50;n++)e()}()}()),"flash"===n.value&&(j.innerHTML="",L()))}))})),j.innerHTML=I})();