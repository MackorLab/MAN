!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(i=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),a=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([o]).join("\n")}var i,l,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function l(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var a=n[o],s=e.base?a[0]+e.base:a[0],u=t[s]||0,c="".concat(s," ").concat(u);t[s]=u+1;var d=l(c),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:c,updater:g(p,e),references:1}),r.push(c)}return r}function u(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var c,d=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function b(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,m=0;function g(n,e){var t,r,o;if(e.singleton){var a=m++;t=f||(f=u(e)),r=p.bind(null,t,a,!1),o=p.bind(null,t,a,!0)}else t=u(e),r=b.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=l(t[r]);i[o].references--}for(var a=s(n,e),u=0;u<t.length;u++){var c=l(t[u]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}t=a}}}},function(n,e,t){var r=t(1),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);n.exports=o.locals||{}},function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r)()(!1);o.push([n.i,"*, html, body, *::before, *::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Montserrat, sans-serif;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n#app {\r\n    position: relative;\r\n}\r\n\r\n/*Sidebar*/\r\n.sidebar {\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 0 15px 15px 0;\r\n    width: 300px;\r\n    background-color: #FFFFFF;\r\n    overflow-y: auto;\r\n    padding: 20px;\r\n    z-index: 20;\r\n}\r\n\r\n.Block {\r\n    padding: 10px;\r\n    background-color: #F0F0F0;\r\n    border-radius: 10px;\r\n    margin-bottom: 20px;\r\n    -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    -moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    overflow: hidden;\r\n    height: 50px;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.sidebar h4 {\r\n    font-size: 1rem;\r\n    text-align: center;\r\n    color: #000000;\r\n    margin: 10px auto;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar p {\r\n    text-align: center;\r\n    color: rgb(44, 44, 44);\r\n    padding: 5px;\r\n}\r\n\r\nform {\r\n    padding: 10px 0 20px;\r\n}\r\nlabel {\r\n    padding-top: 9px;\r\n    font-size: 0.8rem;\r\n    color: rgb(34, 34, 34);\r\n}\r\n.radio-left, .radio-center, .radio-right {\r\n    flex-grow: 1;\r\n    padding-top: 3px;\r\n    text-align: center;\r\n}\r\ninput, select {\r\n    width: 100%;\r\n    margin: 5px 0 0 0;\r\n    padding: 5px 8px;\r\n    border: none;\r\n    border-radius: 0px;\r\n}\r\ninput:focus {\r\n    outline: none;\r\n}\r\n\r\ninput.range, select.range {\r\n    width: 30%;\r\n}\r\n\r\n\r\ninput.ranges, select.range {\r\n    width: 40%;\r\n}\r\n\r\n\r\n\r\n\r\n.btn {\r\n    border-radius: 12px;\r\n    background-color: #5b92e5;\r\n   \r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    padding: 7px;\r\n    width: 240px;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 5px;\r\n     border-color: #bde4fc;\r\n}\r\n.btn:hover {\r\n    /*background-color: #88e2e4;*/\r\n    opacity: .8;\r\n}\r\n.btn:focus {\r\n    outline: none;\r\n}\r\n\r\n.btn-delete-block {\r\n    background: #b94040;\r\n    color: white;\r\n}\r\n\r\n/* Content */\r\n.content {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 320px;\r\n    width: calc(100vw - 340px);\r\n    height: calc(100vh - 40px);\r\n    overflow-y: auto;\r\n    -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    -moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.05);\r\n}\r\n\r\n.row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.col-sm {\r\n    display: flex;\r\n    flex-grow: 1;\r\n    flex-basis: 100%;\r\n}\r\n\r\n.block-content {\r\n    flex-grow: 1;\r\n}\r\n.block-content:focus {\r\n    border-width: 1px !important;\r\n    border-color: #000000 !important;\r\n}\r\n\r\n.content img {\r\n    width: 100%;\r\n    margin: 10px 0;\r\n}\r\n\r\n.content a {\r\n    text-decoration: none;\r\n    color: #0bb5b5;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\nfooter {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 30px;\r\n    background-color: #0d1f1a;\r\n    color: #999;\r\n}\r\n\r\nfooter a {\r\n    color: #fff;\r\n}\r\nfooter a:hover {\r\n    color: orange;\r\n}\r\n\r\n.show {\r\n    height: auto;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n\r\n/*Responsive design*/\r\n@media (max-width: 720px) {\r\n    .content {\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n    }\r\n\r\n    .content .row {\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n\r\n",""]),e.default=o},function(n,e,t){var r=t(1),o=t(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);n.exports=o.locals||{}},function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r)()(!1);o.push([n.i,"/* -------------------- css burger menu ------------------------ */\r\n.burger-menu__button {\r\n    display: none;\r\n    position: fixed;\r\n    bottom: 10px;\r\n    right: 10px;\r\n    z-index: 30;\r\n    width: 70px;\r\n    height: 60px;\r\n    border-radius: 5%;\r\n    background-color: rgba(16, 31, 41, 0.5);\r\n    transition: 0.4s;\r\n}\r\n\r\n.burger-menu__lines,\r\n.burger-menu__lines::after,\r\n.burger-menu__lines::before {\r\n    position: absolute;\r\n    width: 50px;\r\n    height: 6px;\r\n    background-color: #fff;\r\n    transition: 0.3s;\r\n}\r\n\r\n.burger-menu__lines {\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.burger-menu__lines::before {\r\n    content: '';\r\n    top: -12px;\r\n}\r\n\r\n.burger-menu__lines::after {\r\n    content: '';\r\n    top: 12px;\r\n}\r\n\r\n.burger-menu_active .burger-menu__button,\r\n.burger-menu_active .burger-menu__lines {\r\n    background-color: transparent;\r\n}\r\n\r\n.burger-menu_active .burger-menu__lines::before {\r\n    top: 0;\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.burger-menu_active .burger-menu__lines::after {\r\n    top: 0;\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.burger-menu_active .burger-menu__nav {\r\n    left: 0;\r\n}\r\n\r\n/*.burger-menu__overlay {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 10;\r\n}\r\n.burger-menu_active .burger-menu__overlay {\r\n    display: block;\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}*/\r\n\r\n.hidden {\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n/* ------------------Responsive css -------------------- */\r\n@media (max-width: 720px) {\r\n    .burger-menu__button {\r\n        display: inline-block;\r\n    }\r\n\r\n    .burger-menu {\r\n        top: 0;\r\n        left: -100%;\r\n        width: 80%;\r\n        height: 100vh;\r\n        background-color: rgba(16, 31, 41, 0.7);\r\n        overflow-y: auto;\r\n        transition: .5s;\r\n    }\r\n\r\n    .burger-menu_active {\r\n        left: 0;\r\n    }\r\n\r\n    .burger-menu_active .burger-menu__button {\r\n        bottom: 10px;\r\n        right: 23%;\r\n    }\r\n\r\n    .Block {\r\n        height: auto;\r\n    }\r\n}",""]),e.default=o},function(n,e,t){"use strict";t.r(e);t.p;class r{constructor(n,e,t){this.value=n,this.options=e,this.rowId=t}toHtml(){throw new Error("Method toHtml should be created!")}}class o extends r{constructor(n,e,t){super(n,e,t)}toHtml(){const{styles:n}=this.options;return s(this.value.map((e,t)=>u(e,function(n={}){return Object.keys(n).map(e=>`${e}: ${n[e]}`).join(";")}(n),t)).join(""),this.rowId)}}const a=function(){const n=localStorage.getItem("siteData");if(n)return JSON.parse(n);return[]}();console.log(a);const i=a.map((n,e)=>new o(n.value,n.options,e));function l(n){localStorage.setItem("siteData",JSON.stringify(n))}function s(n,e=0){return`<div class="row" data-row-id="${e}">${n}</div>`}function u(n,e="",t=0){const r=c();return console.log(r),`<style>body {background-color: ${r.bodys};}</style><div class="col-sm"><div class="block-content" data-col-id="${t}" style="${e}; body {background-color: ${r.bodys};}">${n}</div></div>`}function c(){const n={};document.querySelectorAll("input, select").forEach(e=>{n[e.name]=e.value+e.dataset.unit}),delete n.columns;return n}var d;t(2),t(4);const p=new class{constructor(n){this.$el=document.querySelector(n)}render(n){this.$el.innerHTML="",n.forEach(n=>{this.$el.insertAdjacentHTML("beforeend",n.toHtml())})}}("#site"),b=(new class{constructor(n,e){this.$addEl=document.querySelector(n),this.update=e,this.init()}init(){this.$addEl.innerHTML=this.template,this.$addEl.addEventListener("click",this.addBlock.bind(this))}get template(){return function(n="button"){return`\n<a href="#" class="burger-menu__button">\n    <span class="burger-menu__lines"></span>\n</a>\n\n<div class="Settings">\n    <div class="Block" id="Base-Settings">\n        <h4>Базовые настройки</h4>\n        <div class="row">\n            <label for="columns">Количество колонок</label>\n            <input type="number" id="columns" name="columns" class="range input" value="1" min="1" max="6" data-unit="">\n        </div>\n        <div class="row">\n            <label for="margin">Внешний отступ</label>\n            <input type="number" id="margin" name="margin" class="range input" min="0" max="100" step="5" value="0"\n                data-unit="px">\n        </div>\n        <div class="row">\n            <label for="padding">Внутренний отступ</label>\n            <input type="number" id="padding" name="padding" class="range input" min="0" max="100" step="5" value="0"\n                data-unit="px">\n        </div>\n    </div>\n    <div class="Block" id="Background-Font">\n        <h4>Фон и шрифт</h4>\n    \n        <div class="row">\n        <label for="background">Цвет фона страницы</label>\n        <input type="color" id="bodys" name="bodys" class="range input" value="#ffffff" data-unit="">\n        </div>\n        \n        <div class="row">\n            <label for="background">Цвет фона блока</label>\n            <input type="color" id="background" name="background" class="range input" value="#ffffff" data-unit="">\n        </div>\n        <div class="row">\n            <label for="color">Цвет текста</label>\n            <input type="color" id="color" name="color" class="range input" value="#333333" data-unit="">\n        </div>\n        <div class="row">\n            <label for="font-size">Размер шрифта</label>\n            <input type="number" id="font-size" name="font-size" class="range input" min="8" max="50" value="16"\n                data-unit="px">\n        </div>\n        <div class="row">\n            <label for="text-align">Позиционирование</label>\n            <select type="select" name="text-align" id="text-align" class="range input" data-unit="">\n                <option value="left" selected>Влево</option>\n                <option value="center">Центр</option>\n                <option value="right">Вправо</option>\n            </select>\n        </div>\n\n        \n        <p><strong>Шрифт</strong></p>\n        <p><select name="font-family" data-unit="">\n         <option value="Playfair Display">Playfair Display</option>\n         <option value="Roboto Condensed">Roboto Condensed</option>\n         <option value="Lobster">Lobster</option>\n         <option value="Amatic SC">Amatic SC</option>\n         <option value="Kelly Slab">Kelly Slab</option>\n        </select></p>\n\n\n    </div>\n\n    \x3c!-- <div class="Block" id="Position">\n    <p onclick='document.getElementById("Position").style.height === "auto" ? document.getElementById("Position").style.height = "50px" : document.getElementById("Position").style.height = "auto"'>Позиционирование</p>\n    <input type="radio" id="radio-left" name="text-align" class="range input" value="left" data-unit="">\n    <input type="radio" id="radio-center" name="text-align" class="range input" value="center" data-unit="" checked>\n    <input type="radio" id="radio-right" name="text-align" class="range input" value="left" data-unit="">\n    <div class="row">\n        <label for="radio-left" class="radio-left">Влево</label>\n        <label for="radio-center" class="radio-center">Центр</label>\n        <label for="radio-right" class="radio-right">Вправо</label>\n    </div> \n    </div> --\x3e\n\n    <div class="Block" id="Row-Border">\n        <h4>Рамка колонки</h4>\n        <div class="row">\n            <label for="border-width">Ширина рамки</label>\n            <input type="number" id="border-width" name="border-width" class="range input" min="0" max="10" value="0"\n                data-unit="px">\n        </div>\n        <div class="row">\n            <label for="border-radius">Радиус скругления (px)</label>\n            <input type="number" id="border-radius" name="border-radius" class="range input" min="0" max="50" value="0"\n                data-unit="px">\n        </div>\n        <div class="row">\n            <label for="border-style">Тип рамки</label>\n            <select type="select" name="border-style" id="border-style" class="range input" data-unit="">\n                <option value="solid" selected>Линия</option>\n                <option value="dashed">Пунктир</option>\n                <option value="dotted">Точки</option>\n            </select>\n        </div>\n        <div class="row">\n            <label for="border-color">Цвет рамки</label>\n            <input type="color" id="border-color" name="border-color" class="range input" value="#333333" data-unit="">\n        </div>\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <div class="Block" id="Buttons">\n    <h4>Настройки кнопки</h4>\n    <div class="row">\n        <label for="border-width">Ширина кнопки</label>\n        <input type="number" id="bwidth" name="bwidth" class="range input" value="35" min="1" max="250" data-unit="px">\n           \n    </div>\n    \n    <div class="row">\n    <label for="border-width">Высота кнопки</label>\n    <input type="number" id="widths" name="widths" class="range input" min="0" max="50" value="10"\n        data-unit="px">\n</div>\n\n    <div class="row">\n    <label for="border-radius">Радиус скругления (px)</label>\n    <input type="number" id="radiusbut" name="radiusbut" class="range input" min="0" max="50" value="0"\n       data-unit="px">\n</div>\n    \n    <div class="row">\n    <label for="border-width">Размер шрифта</label>\n    <input type="number" id="fontbut" name="fontbut" class="range input" min="5" max="35" value="22"\n        data-unit="px">\n</div>\n\n<div class="row">\n<label for="border-width">Ширина рамки</label>\n<input type="number" id="borders" name="borders" class="range input" min="0" max="35" value="0"\n    data-unit="px">\n</div>\n\n\n\n    \n    <div class="row">\n        <label for="border-color">Цвет кнопки</label>\n        <input type="color" id="colorbut" name="colorbut" class="range input" value="#cfe9fa" data-unit="">\n    </div>\n    <div class="row">\n    <label for="border-color">Цвет текста</label>\n    <input type="color" id="colorbuttx" name="colorbuttx" class="range input" value="#000000" data-unit="">\n    </div>\n    <div class="row">\n    <label for="border-color">Цвет рамки</label>\n    <input type="color" id="colorbutram" name="colorbutram" class="range input" value="#cfe9fa" data-unit="">\n    </div>\n\n\n    <p><strong>Шрифт</strong></p>\n    <p><select name="shrift" data-unit="">\n     <option value="Playfair Display">Playfair Display</option>\n     <option value="Roboto Condensed">Roboto Condensed</option>\n     <option value="Lobster">Lobster</option>\n     <option value="Amatic SC">Amatic SC</option>\n     <option value="Kelly Slab">Kelly Slab</option>\n    </select></p>\n\n    \n\n\n\n    <div class="row">\n    <p><input id="bors" name="nemebut"  value="Надпись на кнопке" data-unit=""" size="40">\n    </div>\n\n\n\n\n\n</div>\n\n\n\n</div>\n\n<button type="${n}" class="btn btn-create-block">Создать новый блок</button>\n\n<button type="${n}" class="btn btn-add-img">Добавить картинку в блок</button>\n<button type="${n}" class="btn btn-add-form">Добавить форму в блок</button> \n<button type="${n}" class="btn btn-add-buton">Добавить кнопку в блок</button> \n<button type="${n}" class="btn btn-add-codeh">Добавить HTML,CSS,JS</button> \n<br>\n<button type="${n}" class="btn btn-delete-block">Удалить выделенный блок</button>\n<br><br>\n<button type="${n}" class="btn btn-input-vk">Подключить ВК</button>\n<button type="${n}" class="btn btn-save-site">Сохранить в АП</button>\n\n\n    `}()}addBlock(n){if("H4"===n.target.tagName){n.target.closest(".Block").classList.toggle("show")}if(!n.target.classList.contains("btn-create-block"))return;const e=parseInt(document.querySelector("#columns").value),t=c(),r=new Array(e).fill("Кликни сюда, чтобы изменить текст"),a=i.length,l=new o(r,{styles:t},a);this.update(l)}}("#panel",n=>{i.push(n),l(i),p.render(i)}),document.querySelector(".btn-delete-block")),f=document.querySelector(".btn-add-img"),m=document.querySelector(".btn-add-buton"),g=document.querySelector(".btn-save-site"),v=document.querySelector(".btn-input-vk"),h=document.querySelector(".btn-add-codeh"),x=document.querySelector(".btn-add-form");let y,w;p.render(i),document.querySelector("#site").addEventListener("click",n=>{if(!n.target.classList.contains("block-content"))return;const e=n.target;y=parseInt(e.closest(".row").dataset.rowId),w=parseInt(e.dataset.colId),function(n,e){const{styles:t}=i[n].options,r={};for(let n in t)t[n].includes("px")?r[n]=parseInt(t[n]):r[n]=t[n];const o=document.querySelectorAll("input, select");Array.from(o).splice(1).map(n=>n.value=r[n.name])}(y),function(n){n.setAttribute("contenteditable","true"),n.focus();const e=parseInt(n.closest(".row").dataset.rowId),t=parseInt(n.dataset.colId);n.addEventListener("blur",()=>{const r=n.innerHTML;i[e].value[t]=r,l(i)})}(e)}),g.addEventListener("click",(function(){if(null==y||null==w)return;const n=prompt("Введите ссылку на команду сожранения в Автопилоте.");if(n){var e=document.getElementById("site").outerHTML;var t=(p=e,window.btoa(unescape(encodeURIComponent(p))));console.log(t);var r=function(n){return decodeURIComponent(escape(window.atob(n)))}(t);console.log(r);var o={api:1,sid:d,monet:t},a=String(Math.random()).slice(2),i="--"+a+"\r\n",l="--"+a+"--\r\n",s=["\r\n"];for(var u in o)s.push('Content-Disposition: form-data; name="'+u+'"\r\n\r\n'+o[u]+"\r\n");s=s.join(i)+l;var c=new XMLHttpRequest;c.open("POST",n,!0),c.setRequestHeader("Content-Type","multipart/form-data; boundary="+a),c.onreadystatechange=function(){4==this.readyState&&console.log(this.responseText)},c.send(s)}var p})),f.addEventListener("click",(function(){if(null==y||null==w)return;const n=prompt("Введите ссылку на картинку, чтобы добавить её в выделенный блок.");if(n){let e=`${i[y].value[w]} <img src="${n}">`;i[y].value[w]=e,l(i),p.render(i)}})),m.addEventListener("click",(function(){const n=c();if(console.log(n.bors),null==y||null==w)return;const e=prompt("Введите ссылку на  входящий запрос в командуе Автопелота. По нажатию отправится запрос к  АП со значением вк-ид в переменной uid.");if(e){let t=`${i[y].value[w]} <button style="cursor: pointer; padding: ${n.widths} ${n.bwidth}; background:${n.colorbut}; font-size:${n.fontbut}; color: ${n.colorbuttx}; border-radius:${n.radiusbut}; border: ${n.borders} solid ${n.colorbutram}; font-family:${n.shrift}, serif" onclick="myFunction()">${n.nemebut}</button>\n\n       \n         \n         <script>\n         function myFunction() {\n            $.get( "${e}?api=1",  {uid:vk_ides}, function( data ) {\n            \n                $( '.maaasgs' ).html( data );\n            });\n     \n         }\n         <\/script>`;i[y].value[w]=t,l(i),p.render(i)}})),h.addEventListener("click",(function(){const n=c();if(console.log(n.bors),null==y||null==w)return;const e=prompt("Введите HTML,CSS,JS код.");if(e){let n=`${i[y].value[w]}${e}`;i[y].value[w]=n,l(i),p.render(i)}})),b.addEventListener("click",(function(){if(null==y||null==w)return;const n=i[y].value[w];if(!confirm(`Точно хотите удалить блок "${n}"?`))return;i[y].value.length<=1?i.splice(y,1):i[y].value.splice(w,1);l(i),p.render(i),y=w=void 0})),document.querySelector("#panel").addEventListener("input",(function(n){if(null==y||null==w)return;i[y].value[w],n.target.value;const e=c();i[y].options.styles=e,l(i),p.render(i)}));const k=document.querySelector("body"),_=document.querySelector(".burger-menu"),S=_.querySelector(".burger-menu__button");_.querySelector(".burger-menu__overlay");S.addEventListener("click",n=>{n.preventDefault(),_.classList.toggle("burger-menu_active"),k.classList.toggle("hidden")}),v.addEventListener("click",(function(){VK.init({apiId:8123910}),VK.Auth.login((function(n){if("connected"===n.status){console.log(n),toastr.info("ВКонтакте подключен","Оповещение "),toastr.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!1,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};var e=n.session.user;d=e.id}else"not_authorized"===n.status?(console.log(n),toastr.error("Нет разрешения на отправку в ВКонтакте!","Оповещение "),toastr.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!1,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"}):"unknown"===n.status&&(console.log(n),toastr.error("ВКонтакте ошибка подключения!","Оповещение "),toastr.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!1,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"})})),console.log("Rabotaet")})),x.addEventListener("click",(function(){const n=c();if(console.log(n.bors),null==y||null==w)return;const e=prompt("Введите ссылку на  входящий запрос в командуе Автопелота. По нажатию отправится запрос к  АП со значениеми формы.");if(e){let t=`${i[y].value[w]} \n          \n          \n          <form method="post" id="ajax_form" action="" >\n          \n          <input class="ranges input" type="text" name="names" placeholder="Имя"/><br>\n          <input class="ranges input" type="text" name="phones" placeholder="Телефон"/><br>\n          <input class="ranges input" type="text" name="emails" placeholder="Е-мамл"/><br><br><br>\n          \n          <button style="cursor: pointer; padding: ${n.widths} ${n.bwidth}; background:${n.colorbut}; font-size:${n.fontbut}; color: ${n.colorbuttx}; border-radius:${n.radiusbut}; border: ${n.borders} solid ${n.colorbutram}; font-family:${n.shrift}, serif" onclick="myFunpost()">${n.nemebut}</button>\n\n          </form>\n          <script>\n      \n          function myFunpost() {\n              var formNm = $("form");\n                  $.ajax({\n                      type: 'POST',\n                      url: '${e}', // Обработчик формы отправки\n                      data: formNm.serialize(),\n                      success: function (data) {\n                          // Вывод текста результата отправки в текущей форме\n                          $('.maaasgs').html(data);\n                       \n                      }\n                  });\n         }\n         \n         \n          <\/script>`;i[y].value[w]=t,l(i),p.render(i)}}))}]);
