!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=6)}([function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(a=t,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,l,s;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);t&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},function(n,r,e){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),a=[];function l(n){for(var r=-1,e=0;e<a.length;e++)if(a[e].identifier===n){r=e;break}return r}function s(n,r){for(var e={},t=[],o=0;o<n.length;o++){var i=n[o],s=r.base?i[0]+r.base:i[0],c=e[s]||0,u="".concat(s," ").concat(c);e[s]=c+1;var d=l(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:m(p,r),references:1}),t.push(u)}return t}function c(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var u,d=(u=[],function(n,r){return u[n]=r,u.filter(Boolean).join("\n")});function p(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function b(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,g=0;function m(n,r){var e,t,o;if(r.singleton){var i=g++;e=f||(f=c(r)),t=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=c(r),t=b.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var e=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=l(e[t]);a[o].references--}for(var i=s(n,r),c=0;c<e.length;c++){var u=l(e[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}e=i}}}},function(n,r,e){var t=e(1),o=e(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},function(n,r,e){"use strict";e.r(r);var t=e(0),o=e.n(t)()(!1);o.push([n.i,"*, html, body, *::before, *::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Montserrat, sans-serif;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n#app {\r\n    position: relative;\r\n}\r\n\r\n/*Sidebar*/\r\n.sidebar {\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 0 15px 15px 0;\r\n    width: 300px;\r\n    background-color: #FFFFFF;\r\n    overflow-y: auto;\r\n    padding: 20px;\r\n    z-index: 20;\r\n}\r\n\r\n.Block {\r\n    padding: 10px;\r\n    background-color: #F0F0F0;\r\n    border-radius: 10px;\r\n    margin-bottom: 20px;\r\n    -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    -moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    overflow: hidden;\r\n    height: 50px;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.sidebar h4 {\r\n    font-size: 1rem;\r\n    text-align: center;\r\n    color: #000000;\r\n    margin: 10px auto;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar p {\r\n    text-align: center;\r\n    color: #555;\r\n    padding: 5px;\r\n}\r\n\r\nform {\r\n    padding: 10px 0 20px;\r\n}\r\nlabel {\r\n    padding-top: 9px;\r\n    font-size: 0.8rem;\r\n    color: #555;\r\n}\r\n.radio-left, .radio-center, .radio-right {\r\n    flex-grow: 1;\r\n    padding-top: 3px;\r\n    text-align: center;\r\n}\r\ninput, select {\r\n    width: 100%;\r\n    margin: 5px 0 0 0;\r\n    padding: 5px 8px;\r\n    border: none;\r\n    border-radius: 10px;\r\n}\r\ninput:focus {\r\n    outline: none;\r\n}\r\n\r\ninput.range, select.range {\r\n    width: 30%;\r\n}\r\n\r\n.btn {\r\n    border-radius: 12px;\r\n    background-color: #5b92e5;\r\n   \r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    padding: 7px;\r\n    width: 250px;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 5px;\r\n     border-color: #bde4fc; \r\n}\r\n.btn:hover {\r\n    /*background-color: #88e2e4;*/\r\n    opacity: .8;\r\n}\r\n.btn:focus {\r\n    outline: none;\r\n}\r\n\r\n.btn-delete-block {\r\n    background: #b94040;\r\n    color: white;\r\n}\r\n\r\n/* Content */\r\n.content {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 320px;\r\n    width: calc(100vw - 340px);\r\n    height: calc(100vh - 40px);\r\n    overflow-y: auto;\r\n    -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    -moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n}\r\n\r\n.row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.col-sm {\r\n    display: flex;\r\n    flex-grow: 1;\r\n    flex-basis: 100%;\r\n}\r\n\r\n.block-content {\r\n    flex-grow: 1;\r\n}\r\n.block-content:focus {\r\n    border-width: 1px !important;\r\n    border-color: #000000 !important;\r\n}\r\n\r\n.content img {\r\n    width: 100%;\r\n    margin: 10px 0;\r\n}\r\n\r\n.content a {\r\n    text-decoration: none;\r\n    color: #0bb5b5;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\nfooter {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 30px;\r\n    background-color: #0d1f1a;\r\n    color: #999;\r\n}\r\n\r\nfooter a {\r\n    color: #fff;\r\n}\r\nfooter a:hover {\r\n    color: orange;\r\n}\r\n\r\n.show {\r\n    height: auto;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n\r\n\r\n.buttonics {\r\n    border-radius: 12px;\r\n    background-color: #5b92e5;\r\n   \r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 26px;\r\n    padding: 7px;\r\n    width: 70%;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 5px;\r\n     border-color: #bde4fc;\r\n  }\r\n\r\n\r\n/*Responsive design*/\r\n@media (max-width: 720px) {\r\n    .content {\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n    }\r\n\r\n    .content .row {\r\n        flex-direction: column;\r\n    }\r\n}\r\n",""]),r.default=o},function(n,r,e){var t=e(1),o=e(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},function(n,r,e){"use strict";e.r(r);var t=e(0),o=e.n(t)()(!1);o.push([n.i,"/* -------------------- css burger menu ------------------------ */\r\n.burger-menu__button {\r\n    display: none;\r\n    position: fixed;\r\n    bottom: 10px;\r\n    right: 10px;\r\n    z-index: 30;\r\n    width: 70px;\r\n    height: 60px;\r\n    border-radius: 5%;\r\n    background-color: rgba(16, 31, 41, 0.5);\r\n    transition: 0.4s;\r\n}\r\n\r\n.burger-menu__lines,\r\n.burger-menu__lines::after,\r\n.burger-menu__lines::before {\r\n    position: absolute;\r\n    width: 50px;\r\n    height: 6px;\r\n    background-color: #fff;\r\n    transition: 0.3s;\r\n}\r\n\r\n.burger-menu__lines {\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.burger-menu__lines::before {\r\n    content: '';\r\n    top: -12px;\r\n}\r\n\r\n.burger-menu__lines::after {\r\n    content: '';\r\n    top: 12px;\r\n}\r\n\r\n.burger-menu_active .burger-menu__button,\r\n.burger-menu_active .burger-menu__lines {\r\n    background-color: transparent;\r\n}\r\n\r\n.burger-menu_active .burger-menu__lines::before {\r\n    top: 0;\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.burger-menu_active .burger-menu__lines::after {\r\n    top: 0;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.burger-menu_active .burger-menu__nav {\r\n    left: 0;\r\n}\r\n\r\n/*.burger-menu__overlay {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 10;\r\n}\r\n\r\n.burger-menu_active .burger-menu__overlay {\r\n    display: block;\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}*/\r\n\r\n.hidden {\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n/* ------------------Responsive css -------------------- */\r\n@media (max-width: 720px) {\r\n    .burger-menu__button {\r\n        display: inline-block;\r\n    }\r\n\r\n    .burger-menu {\r\n        top: 0;\r\n        left: -100%;\r\n        width: 80%;\r\n        height: 100vh;\r\n        background-color: rgba(16, 31, 41, 0.7);\r\n        overflow-y: auto;\r\n        transition: .5s;\r\n    }\r\n\r\n    .burger-menu_active {\r\n        left: 0;\r\n    }\r\n\r\n    .burger-menu_active .burger-menu__button {\r\n        bottom: 10px;\r\n        right: 23%;\r\n    }\r\n\r\n    .Block {\r\n        height: auto;\r\n    }\r\n}",""]),r.default=o},function(n,r,e){"use strict";e.r(r);e.p;class t{constructor(n,r,e){this.value=n,this.options=r,this.rowId=e}toHtml(){throw new Error("Method toHtml should be created!")}}class o extends t{constructor(n,r,e){super(n,r,e)}toHtml(){const{styles:n}=this.options;return s(this.value.map((r,e)=>c(r,function(n={}){return Object.keys(n).map(r=>`${r}: ${n[r]}`).join(";")}(n),e)).join(""),this.rowId)}}const i=function(){const n=localStorage.getItem("siteData");if(n)return JSON.parse(n);return[]}();console.log(i);const a=i.map((n,r)=>new o(n.value,n.options,r));function l(n){localStorage.setItem("siteData",JSON.stringify(n))}function s(n,r=0){return`<div class="row" data-row-id="${r}">${n}</div>`}function c(n,r="",e=0){return`<div class="col-sm"><div class="block-content" data-col-id="${e}" style="${r}">${n}</div></div>`}function u(){const n={};return document.querySelectorAll("input, select").forEach(r=>{n[r.name]=r.value+r.dataset.unit}),console.log(n.bors),delete n.columns,n}e(2),e(4);const d=new class{constructor(n){this.$el=document.querySelector(n)}render(n){this.$el.innerHTML="",n.forEach(n=>{this.$el.insertAdjacentHTML("beforeend",n.toHtml())})}}("#site"),p=(new class{constructor(n,r){this.$addEl=document.querySelector(n),this.update=r,this.init()}init(){this.$addEl.innerHTML=this.template,this.$addEl.addEventListener("click",this.addBlock.bind(this))}get template(){return function(n="button"){return`\n<a href="#" class="burger-menu__button">\n    <span class="burger-menu__lines"></span>\n</a>\n\n<div class="Settings">\n    <div class="Block" id="Base-Settings">\n        <h4>Базовые настройки</h4>\n        <div class="row">\n            <label for="columns">Количество колонок</label>\n            <input type="number" id="columns" name="columns" class="range input" value="1" min="1" max="6" data-unit="">\n        </div>\n        <div class="row">\n            <label for="margin">Внешний отступ</label>\n            <input type="number" id="margin" name="margin" class="range input" min="0" max="100" step="5" value="0"\n                data-unit="px">\n        </div>\n        <div class="row">\n            <label for="padding">Внутренний отступ</label>\n            <input type="number" id="padding" name="padding" class="range input" min="0" max="100" step="5" value="0"\n                data-unit="px">\n        </div>\n    </div>\n    <div class="Block" id="Background-Font">\n        <h4>Фон и шрифт</h4>\n        <div class="row">\n            <label for="background">Цвет фона</label>\n            <input type="color" id="background" name="background" class="range input" value="#ffffff" data-unit="">\n        </div>\n        <div class="row">\n            <label for="color">Цвет текста</label>\n            <input type="color" id="color" name="color" class="range input" value="#333333" data-unit="">\n        </div>\n        <div class="row">\n            <label for="font-size">Размер шрифта</label>\n            <input type="range" id="font-size" name="font-size" class="range input" min="8" max="50" value="16"\n                data-unit="px">\n        </div>\n        <div class="row">\n            <label for="text-align">Позиционирование</label>\n            <select type="select" name="text-align" id="text-align" class="range input" data-unit="">\n                <option value="left" selected>Влево</option>\n                <option value="center">Центр</option>\n                <option value="right">Вправо</option>\n            </select>\n        </div>\n    </div>\n\n    \x3c!-- <div class="Block" id="Position">\n    <p onclick='document.getElementById("Position").style.height === "auto" ? document.getElementById("Position").style.height = "50px" : document.getElementById("Position").style.height = "auto"'>Позиционирование</p>\n    <input type="radio" id="radio-left" name="text-align" class="range input" value="left" data-unit="">\n    <input type="radio" id="radio-center" name="text-align" class="range input" value="center" data-unit="" checked>\n    <input type="radio" id="radio-right" name="text-align" class="range input" value="left" data-unit="">\n    <div class="row">\n        <label for="radio-left" class="radio-left">Влево</label>\n        <label for="radio-center" class="radio-center">Центр</label>\n        <label for="radio-right" class="radio-right">Вправо</label>\n    </div> \n    </div> --\x3e\n\n    <div class="Block" id="Row-Border">\n        <h4>Рамка колонки</h4>\n        <div class="row">\n            <label for="border-width">Ширина рамки</label>\n            <input type="range" id="border-width" name="border-width" class="range input" min="0" max="10" value="0"\n                data-unit="px">\n        </div>\n        <div class="row">\n            <label for="border-radius">Радиус скругления (px)</label>\n            <input type="range" id="border-radius" name="border-radius" class="range input" min="0" max="50" value="0"\n                data-unit="px">\n        </div>\n        <div class="row">\n            <label for="border-style">Тип рамки</label>\n            <select type="select" name="border-style" id="border-style" class="range input" data-unit="">\n                <option value="solid" selected>Линия</option>\n                <option value="dashed">Пунктир</option>\n                <option value="dotted">Точки</option>\n            </select>\n        </div>\n        <div class="row">\n            <label for="border-color">Цвет рамки</label>\n            <input type="color" id="border-color" name="border-color" class="range input" value="#333333" data-unit="">\n        </div>\n    </div>\n\n\n    <div class="Block" id="Buttons">\n    <h4>Настройки кнопки</h4>\n    <div class="row">\n        <label for="border-width">Ширина рамки</label>\n        <input type="range" id="borde" name="bord" class="range input" min="0" max="10" value="0"\n            data-unit="px">\n    </div>\n    <div class="row">\n        <label for="border-radius">Радиус скругления (px)</label>\n        <input type="range" id="bord" name="borde" class="range input" min="0" max="50" value="0"\n            data-unit="px">\n    </div>\n    \n\n\n    \n    <div class="row">\n        <label for="border-color">Цвет рамки</label>\n        <input type="color" id="bor" name="bor" class="range input" value="#333333" data-unit="">\n    </div>\n\n\n\n    <div class="row">\n    <p><input id="bors" name="bors"  value="Надпись на кнопке" data-unit=""" size="40">\n</div>\n\n\n\n\n</div>\n\n\n\n</div>\n\n<button type="${n}" class="btn btn-create-block">Создать новый блок</button>\n<button type="${n}" class="btn btn-add-img">Добавить картинку в блок</button>\n<button type="${n}" class="btn btn-add-link">Добавить кнопку в блок</button> \n<button type="${n}" class="btn btn-save-site">Сохранить</button>\n<br><br>\n<button type="${n}" class="btn btn-delete-block">Удалить выделенный блок</button>\n\n    `}()}addBlock(n){if("H4"===n.target.tagName){n.target.closest(".Block").classList.toggle("show")}if(!n.target.classList.contains("btn-create-block"))return;const r=parseInt(document.querySelector("#columns").value),e=u(),t=new Array(r).fill("Кликни сюда, чтобы добавить текст"),i=a.length,l=new o(t,{styles:e},i);this.update(l)}}("#panel",n=>{a.push(n),l(a),d.render(a)}),document.querySelector(".btn-delete-block")),b=document.querySelector(".btn-add-img"),f=document.querySelector(".btn-add-link"),g=document.querySelector(".btn-save-site");let m,v;d.render(a),document.querySelector("#site").addEventListener("click",n=>{if(!n.target.classList.contains("block-content"))return;const r=n.target;m=parseInt(r.closest(".row").dataset.rowId),v=parseInt(r.dataset.colId),function(n,r){const{styles:e}=a[n].options,t={};for(let n in e)e[n].includes("px")?t[n]=parseInt(e[n]):t[n]=e[n];const o=document.querySelectorAll("input, select");Array.from(o).splice(1).map(n=>n.value=t[n.name])}(m),function(n){n.setAttribute("contenteditable","true"),n.focus();const r=parseInt(n.closest(".row").dataset.rowId),e=parseInt(n.dataset.colId);n.addEventListener("blur",()=>{const t=n.innerHTML;a[r].value[e]=t,l(a)})}(r)}),g.addEventListener("click",(function(){if(null==m||null==v)return;const n=prompt("Введите ссылку, которую хотите добавить в выделенный блок.");if(n){var r=document.getElementById("site").outerHTML;var e=(d=r,window.btoa(unescape(encodeURIComponent(d))));console.log(e);var t=function(n){return decodeURIComponent(escape(window.atob(n)))}(e);console.log(t);var o={api:1,sid:535939344,monet:e},i=String(Math.random()).slice(2),a="--"+i+"\r\n",l="--"+i+"--\r\n",s=["\r\n"];for(var c in o)s.push('Content-Disposition: form-data; name="'+c+'"\r\n\r\n'+o[c]+"\r\n");s=s.join(a)+l;var u=new XMLHttpRequest;u.open("POST",n,!0),u.setRequestHeader("Content-Type","multipart/form-data; boundary="+i),u.onreadystatechange=function(){4==this.readyState&&console.log(this.responseText)},u.send(s)}var d})),b.addEventListener("click",(function(){if(null==m||null==v)return;const n=prompt("Введите ссылку на картинку, чтобы добавить её в выделенный блок.");if(n){let r=`${a[m].value[v]} <img src="${n}">`;a[m].value[v]=r,l(a),d.render(a)}})),f.addEventListener("click",(function(){const n=u();if(console.log(n.bors),null==m||null==v)return;const r=prompt("Введите ссылку, которую хотите добавить в выделенный блок.");if(r){let e=`${a[m].value[v]} <button class="buttonics" onclick="myFunction()">${n.bors}</button>\n\n       \n         \n         <script>\n         function myFunction() {\n            $.get( "${r}",  {sid: 535939344}, function( data ) {\n            \n         \n            });\n     \n         }\n         <\/script>`;a[m].value[v]=e,l(a),d.render(a)}})),p.addEventListener("click",(function(){if(null==m||null==v)return;const n=a[m].value[v];if(!confirm(`Точно хотите удалить блок "${n}"?`))return;a[m].value.length<=1?a.splice(m,1):a[m].value.splice(v,1);l(a),d.render(a),m=v=void 0})),document.querySelector("#panel").addEventListener("input",(function(n){if(null==m||null==v)return;a[m].value[v],n.target.value;const r=u();a[m].options.styles=r,l(a),d.render(a)}));const h=document.querySelector("body"),x=document.querySelector(".burger-menu"),y=x.querySelector(".burger-menu__button");x.querySelector(".burger-menu__overlay");y.addEventListener("click",n=>{n.preventDefault(),x.classList.toggle("burger-menu_active"),h.classList.toggle("hidden")})}]);
