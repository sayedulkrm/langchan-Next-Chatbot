/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/Home.module.css":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/Home.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Home_main__nLjiQ {\\n    position: absolute;\\n    bottom: 30px;\\n    right: 30px;\\n    height: 530px;\\n    width: 360px;\\n    display: grid;\\n    grid-template-rows: 1fr auto;\\n    margin: 0.5rem;\\n    font-size: 0.9rem;\\n    justify-items: end;\\n}\\n\\n.Home_cloudform__W4PLJ {\\n    background: linear-gradient(268.91deg, #581b98 -2.14%, #9c1de7 99.69%);\\n    padding: 10px;\\n    display: flex;\\n    width: 100%;\\n    height: 100px;\\n    border-radius: 0 0 20px 20px;\\n}\\n\\n.Home_textarea__lSHf7 {\\n    /* position: relative; */\\n    resize: none;\\n    padding: 0.7rem;\\n    width: 100%;\\n    height: 60%;\\n    border-radius: 1.5rem;\\n    border: 1px solid #d9d9e3;\\n    background: #ffffff;\\n    color: #000;\\n    outline: none;\\n}\\n\\n.Home_textarea__lSHf7:disabled {\\n    opacity: 0.5;\\n}\\n\\n.Home_textarea__lSHf7:focus {\\n    outline: auto;\\n    /* border-color: #6b7280; */\\n    /* box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.5); */\\n}\\n\\n/* .textarea::placeholder {\\n  color: #6b7280;\\n} */\\n\\n.Home_generatebutton__omKYX {\\n    /* position: absolute;\\n    top: 0.87rem;\\n    right: 1rem; */\\n    color: rgb(0, 0, 0);\\n    background: none;\\n    padding: 0.3rem;\\n    border: none;\\n}\\n\\n.Home_loadingwheel__IWJnE {\\n    position: absolute;\\n    top: 0.2rem;\\n    right: 0.25rem;\\n}\\n\\n/* .svgicon {\\n  transform: rotate(90deg);\\n  width: 1.2em;\\n  height: 1.2em;\\n  fill: currentColor;\\n} */\\n\\n.Home_generatebutton__omKYX:hover {\\n    background: #e4575726;\\n    border-radius: 0.2rem;\\n}\\n\\n.Home_generatebutton__omKYX:disabled {\\n    opacity: 0.9;\\n    cursor: not-allowed;\\n    background: none;\\n}\\n\\n.Home_messagelist__YHr8p {\\n    display: inline-flex;\\n    flex-direction: column;\\n    justify-content: flex-end;\\n    border-radius: 0.5rem;\\n    background-color: rgb(255, 255, 255);\\n    padding: 0 10px;\\n    height: 100%;\\n}\\n\\n/* .messagelistloading {\\n \\n} */\\n\\n.Home_usermessage__tWHWR {\\n    align-self: flex-end;\\n    background-color: #581b98;\\n    color: white;\\n    padding: 0.8rem;\\n    padding-top: 0.75rem;\\n    padding-bottom: 0.75rem;\\n    padding-right: 0.75rem;\\n    border-radius: 10px 10px 0px 10px;\\n    margin-bottom: 0.75rem;\\n}\\n\\n.Home_apimessage__VhfTn {\\n    align-self: flex-start;\\n    background-color: #581b98;\\n    color: white;\\n    padding: 0.8rem;\\n    padding-top: 0.75rem;\\n    padding-bottom: 0.75rem;\\n    border-radius: 10px 10px 10px 0;\\n    margin-bottom: 0.75rem;\\n    transition: opacity 0.4s ease-in 0.2s;\\n}\\n\\n/* .apimessage{\\n  margin-right: 2rem;\\n  clear: both;\\n  float: left;\\n  box-sizing: inherit;\\n} */\\n\\n@keyframes Home_typing__Dg2bD {\\n    from {\\n        width: 0;\\n    }\\n    to {\\n        width: 100%;\\n    }\\n}\\n\\n@keyframes Home_pulse__aUK96 {\\n    0% {\\n        opacity: 0.3;\\n    }\\n}\\n\\n.Home_animate-pulse__Ul_UW {\\n    animation: Home_pulse__aUK96 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\\n}\\n\\n.Home_apimessage__VhfTn,\\n.Home_usermessage__tWHWR {\\n}\\n\\n/* .markdownanswer {\\n  line-height: 1.75;\\n}\\n\\n.markdownanswer a:hover {\\n  opacity: 0.8;\\n}\\n\\n.markdownanswer a {\\n  color: #b13a3a;\\n  font-weight: 500;\\n}\\n\\n.markdownanswer code {\\n  color: #15cb19;\\n  font-weight: 500;\\n  white-space: pre-wrap !important;\\n}\\n\\n.markdownanswer ol,\\n.markdownanswer ul {\\n  margin: 1rem;\\n}\\n\\n.boticon,\\n.usericon {\\n  margin-right: 0.5rem;\\n  border-radius: 0.1rem;\\n}\\n\\n.markdownanswer h1,\\n.markdownanswer h2,\\n.markdownanswer h3 {\\n  font-size: inherit;\\n} */\\n\\n.Home_center__4BFgC {\\n    /* position: relative; */\\n    width: 100%;\\n}\\n\\n.Home_cloud__S7par {\\n    background: #ffffff;\\n    height: 250px;\\n    width: 100%;\\n    /* border: 1px solid #d9d9e3; */\\n    display: flex;\\n    flex-direction: column-reverse;\\n    overflow-y: auto;\\n}\\n\\n/* .pointsnormal {\\n  width: 90%;\\n  height: 90%;\\n}\\n\\n.pointsdim {\\n  width: 90%;\\n  height: 90%;\\n  opacity: 0.25;\\n} */\\n\\n/* .footer {\\n  color: #5f6368;\\n  font-size: 0.8rem;\\n  margin: 1.5rem;\\n} */\\n\\n/* .footer a {\\n  font-weight: 500;\\n  color: #7a7d81;\\n}\\n\\n.footer a:hover {\\n  opacity: 0.8;\\n} */\\n\\n/* Mobile optimization */\\n\\n/* .textarea {\\n  \\n  } */\\n/* .topnav {\\n    border: 1px solid black;\\n    align-items: center;\\n    padding: 0.85rem 0.75rem 0.85rem 0.75rem;\\n  } */\\n\\n/* .navlogo {\\n    font-size: 1.25rem;\\n    width: 20rem;\\n  } */\\n/* \\n  .markdownanswer code {\\n    white-space: pre-wrap !important;\\n  } */\\n\\n/* ========================= */\\n\\n.Home_sidebar___cAMT {\\n    animation: Home_slide-top__guXUc 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\\n}\\n\\n@keyframes Home_slide-top__guXUc {\\n    0% {\\n        transform: translateY(30px);\\n    }\\n    100% {\\n        transform: translateY(0);\\n    }\\n}\\n\\n/* For mobile */\\n\\n@media screen and (max-width: 600px) {\\n    .Home_main__nLjiQ {\\n        bottom: 20px;\\n        right: 20px;\\n        height: 450px;\\n        width: 290px;\\n        margin: 0.3rem;\\n        font-size: 0.8rem;\\n    }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Home.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,YAAY;IACZ,aAAa;IACb,4BAA4B;IAC5B,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,sEAAsE;IACtE,aAAa;IACb,aAAa;IACb,WAAW;IACX,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,WAAW;IACX,WAAW;IACX,qBAAqB;IACrB,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,oDAAoD;AACxD;;AAEA;;GAEG;;AAEH;IACI;;kBAEc;IACd,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,cAAc;AAClB;;AAEA;;;;;GAKG;;AAEH;IACI,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,yBAAyB;IACzB,qBAAqB;IACrB,oCAAoC;IACpC,eAAe;IACf,YAAY;AAChB;;AAEA;;GAEG;;AAEH;IACI,oBAAoB;IACpB,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,uBAAuB;IACvB,sBAAsB;IACtB,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,uBAAuB;IACvB,+BAA+B;IAC/B,sBAAsB;IACtB,qCAAqC;AACzC;;AAEA;;;;;GAKG;;AAEH;IACI;QACI,QAAQ;IACZ;IACA;QACI,WAAW;IACf;AACJ;;AAEA;IACI;QACI,YAAY;IAChB;AACJ;;AAEA;IACI,qEAAyD;AAC7D;;AAEA;;AAEA;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAkCG;;AAEH;IACI,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,WAAW;IACX,+BAA+B;IAC/B,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;;;;;;;;;GASG;;AAEH;;;;GAIG;;AAEH;;;;;;;GAOG;;AAEH,wBAAwB;;AAExB;;KAEK;AACL;;;;KAIK;;AAEL;;;KAGK;AACL;;;KAGK;;AAEL,8BAA8B;;AAE9B;IAEI,+EAAmE;AACvE;;AAaA;IACI;QAEI,2BAA2B;IAC/B;IACA;QAEI,wBAAwB;IAC5B;AACJ;;AAEA,eAAe;;AAEf;IACI;QACI,YAAY;QACZ,WAAW;QACX,aAAa;QACb,YAAY;QACZ,cAAc;QACd,iBAAiB;IACrB;AACJ\",\"sourcesContent\":[\".main {\\n    position: absolute;\\n    bottom: 30px;\\n    right: 30px;\\n    height: 530px;\\n    width: 360px;\\n    display: grid;\\n    grid-template-rows: 1fr auto;\\n    margin: 0.5rem;\\n    font-size: 0.9rem;\\n    justify-items: end;\\n}\\n\\n.cloudform {\\n    background: linear-gradient(268.91deg, #581b98 -2.14%, #9c1de7 99.69%);\\n    padding: 10px;\\n    display: flex;\\n    width: 100%;\\n    height: 100px;\\n    border-radius: 0 0 20px 20px;\\n}\\n\\n.textarea {\\n    /* position: relative; */\\n    resize: none;\\n    padding: 0.7rem;\\n    width: 100%;\\n    height: 60%;\\n    border-radius: 1.5rem;\\n    border: 1px solid #d9d9e3;\\n    background: #ffffff;\\n    color: #000;\\n    outline: none;\\n}\\n\\n.textarea:disabled {\\n    opacity: 0.5;\\n}\\n\\n.textarea:focus {\\n    outline: auto;\\n    /* border-color: #6b7280; */\\n    /* box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.5); */\\n}\\n\\n/* .textarea::placeholder {\\n  color: #6b7280;\\n} */\\n\\n.generatebutton {\\n    /* position: absolute;\\n    top: 0.87rem;\\n    right: 1rem; */\\n    color: rgb(0, 0, 0);\\n    background: none;\\n    padding: 0.3rem;\\n    border: none;\\n}\\n\\n.loadingwheel {\\n    position: absolute;\\n    top: 0.2rem;\\n    right: 0.25rem;\\n}\\n\\n/* .svgicon {\\n  transform: rotate(90deg);\\n  width: 1.2em;\\n  height: 1.2em;\\n  fill: currentColor;\\n} */\\n\\n.generatebutton:hover {\\n    background: #e4575726;\\n    border-radius: 0.2rem;\\n}\\n\\n.generatebutton:disabled {\\n    opacity: 0.9;\\n    cursor: not-allowed;\\n    background: none;\\n}\\n\\n.messagelist {\\n    display: inline-flex;\\n    flex-direction: column;\\n    justify-content: flex-end;\\n    border-radius: 0.5rem;\\n    background-color: rgb(255, 255, 255);\\n    padding: 0 10px;\\n    height: 100%;\\n}\\n\\n/* .messagelistloading {\\n \\n} */\\n\\n.usermessage {\\n    align-self: flex-end;\\n    background-color: #581b98;\\n    color: white;\\n    padding: 0.8rem;\\n    padding-top: 0.75rem;\\n    padding-bottom: 0.75rem;\\n    padding-right: 0.75rem;\\n    border-radius: 10px 10px 0px 10px;\\n    margin-bottom: 0.75rem;\\n}\\n\\n.apimessage {\\n    align-self: flex-start;\\n    background-color: #581b98;\\n    color: white;\\n    padding: 0.8rem;\\n    padding-top: 0.75rem;\\n    padding-bottom: 0.75rem;\\n    border-radius: 10px 10px 10px 0;\\n    margin-bottom: 0.75rem;\\n    transition: opacity 0.4s ease-in 0.2s;\\n}\\n\\n/* .apimessage{\\n  margin-right: 2rem;\\n  clear: both;\\n  float: left;\\n  box-sizing: inherit;\\n} */\\n\\n@keyframes typing {\\n    from {\\n        width: 0;\\n    }\\n    to {\\n        width: 100%;\\n    }\\n}\\n\\n@keyframes pulse {\\n    0% {\\n        opacity: 0.3;\\n    }\\n}\\n\\n.animate-pulse {\\n    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\\n}\\n\\n.apimessage,\\n.usermessage {\\n}\\n\\n/* .markdownanswer {\\n  line-height: 1.75;\\n}\\n\\n.markdownanswer a:hover {\\n  opacity: 0.8;\\n}\\n\\n.markdownanswer a {\\n  color: #b13a3a;\\n  font-weight: 500;\\n}\\n\\n.markdownanswer code {\\n  color: #15cb19;\\n  font-weight: 500;\\n  white-space: pre-wrap !important;\\n}\\n\\n.markdownanswer ol,\\n.markdownanswer ul {\\n  margin: 1rem;\\n}\\n\\n.boticon,\\n.usericon {\\n  margin-right: 0.5rem;\\n  border-radius: 0.1rem;\\n}\\n\\n.markdownanswer h1,\\n.markdownanswer h2,\\n.markdownanswer h3 {\\n  font-size: inherit;\\n} */\\n\\n.center {\\n    /* position: relative; */\\n    width: 100%;\\n}\\n\\n.cloud {\\n    background: #ffffff;\\n    height: 250px;\\n    width: 100%;\\n    /* border: 1px solid #d9d9e3; */\\n    display: flex;\\n    flex-direction: column-reverse;\\n    overflow-y: auto;\\n}\\n\\n/* .pointsnormal {\\n  width: 90%;\\n  height: 90%;\\n}\\n\\n.pointsdim {\\n  width: 90%;\\n  height: 90%;\\n  opacity: 0.25;\\n} */\\n\\n/* .footer {\\n  color: #5f6368;\\n  font-size: 0.8rem;\\n  margin: 1.5rem;\\n} */\\n\\n/* .footer a {\\n  font-weight: 500;\\n  color: #7a7d81;\\n}\\n\\n.footer a:hover {\\n  opacity: 0.8;\\n} */\\n\\n/* Mobile optimization */\\n\\n/* .textarea {\\n  \\n  } */\\n/* .topnav {\\n    border: 1px solid black;\\n    align-items: center;\\n    padding: 0.85rem 0.75rem 0.85rem 0.75rem;\\n  } */\\n\\n/* .navlogo {\\n    font-size: 1.25rem;\\n    width: 20rem;\\n  } */\\n/* \\n  .markdownanswer code {\\n    white-space: pre-wrap !important;\\n  } */\\n\\n/* ========================= */\\n\\n.sidebar {\\n    -webkit-animation: slide-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\\n    animation: slide-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\\n}\\n\\n@-webkit-keyframes slide-top {\\n    0% {\\n        -webkit-transform: translateY(30px);\\n        transform: translateY(30px);\\n    }\\n    100% {\\n        -webkit-transform: translateY(0);\\n        transform: translateY(0);\\n    }\\n}\\n\\n@keyframes slide-top {\\n    0% {\\n        -webkit-transform: translateY(30px);\\n        transform: translateY(30px);\\n    }\\n    100% {\\n        -webkit-transform: translateY(0);\\n        transform: translateY(0);\\n    }\\n}\\n\\n/* For mobile */\\n\\n@media screen and (max-width: 600px) {\\n    .main {\\n        bottom: 20px;\\n        right: 20px;\\n        height: 450px;\\n        width: 290px;\\n        margin: 0.3rem;\\n        font-size: 0.8rem;\\n    }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"cloudform\": \"Home_cloudform__W4PLJ\",\n\t\"textarea\": \"Home_textarea__lSHf7\",\n\t\"generatebutton\": \"Home_generatebutton__omKYX\",\n\t\"loadingwheel\": \"Home_loadingwheel__IWJnE\",\n\t\"messagelist\": \"Home_messagelist__YHr8p\",\n\t\"usermessage\": \"Home_usermessage__tWHWR\",\n\t\"apimessage\": \"Home_apimessage__VhfTn\",\n\t\"animate-pulse\": \"Home_animate-pulse__Ul_UW\",\n\t\"pulse\": \"Home_pulse__aUK96\",\n\t\"center\": \"Home_center__4BFgC\",\n\t\"cloud\": \"Home_cloud__S7par\",\n\t\"sidebar\": \"Home_sidebar___cAMT\",\n\t\"slide-top\": \"Home_slide-top__guXUc\",\n\t\"typing\": \"Home_typing__Dg2bD\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0EsNkRBQTZELHlCQUF5QixtQkFBbUIsa0JBQWtCLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1DQUFtQyxxQkFBcUIsd0JBQXdCLHlCQUF5QixHQUFHLDRCQUE0Qiw2RUFBNkUsb0JBQW9CLG9CQUFvQixrQkFBa0Isb0JBQW9CLG1DQUFtQyxHQUFHLDJCQUEyQiw2QkFBNkIscUJBQXFCLHNCQUFzQixrQkFBa0Isa0JBQWtCLDRCQUE0QixnQ0FBZ0MsMEJBQTBCLGtCQUFrQixvQkFBb0IsR0FBRyxvQ0FBb0MsbUJBQW1CLEdBQUcsaUNBQWlDLG9CQUFvQixnQ0FBZ0MsMkRBQTJELEtBQUssK0JBQStCLG1CQUFtQixJQUFJLG1DQUFtQyw0QkFBNEIsbUJBQW1CLG1CQUFtQiw0QkFBNEIsdUJBQXVCLHNCQUFzQixtQkFBbUIsR0FBRywrQkFBK0IseUJBQXlCLGtCQUFrQixxQkFBcUIsR0FBRyxpQkFBaUIsNkJBQTZCLGlCQUFpQixrQkFBa0IsdUJBQXVCLElBQUkseUNBQXlDLDRCQUE0Qiw0QkFBNEIsR0FBRywwQ0FBMEMsbUJBQW1CLDBCQUEwQix1QkFBdUIsR0FBRyw4QkFBOEIsMkJBQTJCLDZCQUE2QixnQ0FBZ0MsNEJBQTRCLDJDQUEyQyxzQkFBc0IsbUJBQW1CLEdBQUcsNEJBQTRCLE9BQU8sZ0NBQWdDLDJCQUEy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NkMsaUJBQWlCLEdBQUcsMEJBQTBCLHlCQUF5QiwwQkFBMEIsR0FBRyxrRUFBa0UsdUJBQXVCLElBQUksZUFBZSw2QkFBNkIsb0JBQW9CLEdBQUcsWUFBWSwwQkFBMEIsb0JBQW9CLGtCQUFrQixvQ0FBb0Msc0JBQXNCLHFDQUFxQyx1QkFBdUIsR0FBRyxzQkFBc0IsZUFBZSxnQkFBZ0IsR0FBRyxnQkFBZ0IsZUFBZSxnQkFBZ0Isa0JBQWtCLElBQUksa0JBQWtCLG1CQUFtQixzQkFBc0IsbUJBQW1CLElBQUksb0JBQW9CLHFCQUFxQixtQkFBbUIsR0FBRyxxQkFBcUIsaUJBQWlCLElBQUksaURBQWlELFVBQVUsZ0JBQWdCLDhCQUE4QiwwQkFBMEIsK0NBQStDLE1BQU0sbUJBQW1CLHlCQUF5QixtQkFBbUIsTUFBTSxpQ0FBaUMsdUNBQXVDLE1BQU0sbURBQW1ELGtGQUFrRiwwRUFBMEUsR0FBRyxrQ0FBa0MsVUFBVSw4Q0FBOEMsc0NBQXNDLE9BQU8sWUFBWSwyQ0FBMkMsbUNBQW1DLE9BQU8sR0FBRywwQkFBMEIsVUFBVSw4Q0FBOEMsc0NBQXNDLE9BQU8sWUFBWSwyQ0FBMkMsbUNBQW1DLE9BQU8sR0FBRyw4REFBOEQsYUFBYSx1QkFBdUIsc0JBQXNCLHdCQUF3Qix1QkFBdUIseUJBQXlCLDRCQUE0QixPQUFPLEdBQUcscUJBQXFCO0FBQ3o3VztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzM3NzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Ib21lX21haW5fX25MamlRIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDMwcHg7XFxuICAgIHJpZ2h0OiAzMHB4O1xcbiAgICBoZWlnaHQ6IDUzMHB4O1xcbiAgICB3aWR0aDogMzYwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcbn1cXG5cXG4uSG9tZV9jbG91ZGZvcm1fX1c0UExKIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2OC45MWRlZywgIzU4MWI5OCAtMi4xNCUsICM5YzFkZTcgOTkuNjklKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxufVxcblxcbi5Ib21lX3RleHRhcmVhX19sU0hmNyB7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjdyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWUzO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLkhvbWVfdGV4dGFyZWFfX2xTSGY3OmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uSG9tZV90ZXh0YXJlYV9fbFNIZjc6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBhdXRvO1xcbiAgICAvKiBib3JkZXItY29sb3I6ICM2YjcyODA7ICovXFxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDE1NiwgMTYzLCAxNzUsIDAuNSk7ICovXFxufVxcblxcbi8qIC50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM2YjcyODA7XFxufSAqL1xcblxcbi5Ib21lX2dlbmVyYXRlYnV0dG9uX19vbUtZWCB7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwLjg3cmVtO1xcbiAgICByaWdodDogMXJlbTsgKi9cXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5Ib21lX2xvYWRpbmd3aGVlbF9fSVdKbkUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMC4ycmVtO1xcbiAgICByaWdodDogMC4yNXJlbTtcXG59XFxuXFxuLyogLnN2Z2ljb24ge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgd2lkdGg6IDEuMmVtO1xcbiAgaGVpZ2h0OiAxLjJlbTtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59ICovXFxuXFxuLkhvbWVfZ2VuZXJhdGVidXR0b25fX29tS1lYOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2U0NTc1NzI2O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbi5Ib21lX2dlbmVyYXRlYnV0dG9uX19vbUtZWDpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLkhvbWVfbWVzc2FnZWxpc3RfX1lIcjhwIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogLm1lc3NhZ2VsaXN0bG9hZGluZyB7XFxuIFxcbn0gKi9cXG5cXG4uSG9tZV91c2VybWVzc2FnZV9fdFdIV1Ige1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4MWI5ODtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG5cXG4uSG9tZV9hcGltZXNzYWdlX19WaGZUbiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODFiOTg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC44cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluIDAuMnM7XFxufVxcblxcbi8qIC5hcGltZXNzYWdle1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBmbG9hdDogbGVmdDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufSAqL1xcblxcbkBrZXlmcmFtZXMgSG9tZV90eXBpbmdfX0RnMmJEIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIEhvbWVfcHVsc2VfX2FVSzk2IHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMC4zO1xcbiAgICB9XFxufVxcblxcbi5Ib21lX2FuaW1hdGUtcHVsc2VfX1VsX1VXIHtcXG4gICAgYW5pbWF0aW9uOiBIb21lX3B1bHNlX19hVUs5NiAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpIGluZmluaXRlO1xcbn1cXG5cXG4uSG9tZV9hcGltZXNzYWdlX19WaGZUbixcXG4uSG9tZV91c2VybWVzc2FnZV9fdFdIV1Ige1xcbn1cXG5cXG4vKiAubWFya2Rvd25hbnN3ZXIge1xcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XFxufVxcblxcbi5tYXJrZG93bmFuc3dlciBhOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLm1hcmtkb3duYW5zd2VyIGEge1xcbiAgY29sb3I6ICNiMTNhM2E7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubWFya2Rvd25hbnN3ZXIgY29kZSB7XFxuICBjb2xvcjogIzE1Y2IxOTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duYW5zd2VyIG9sLFxcbi5tYXJrZG93bmFuc3dlciB1bCB7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5ib3RpY29uLFxcbi51c2VyaWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcXG59XFxuXFxuLm1hcmtkb3duYW5zd2VyIGgxLFxcbi5tYXJrZG93bmFuc3dlciBoMixcXG4ubWFya2Rvd25hbnN3ZXIgaDMge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn0gKi9cXG5cXG4uSG9tZV9jZW50ZXJfXzRCRmdDIHtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLkhvbWVfY2xvdWRfX1M3cGFyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZTM7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLyogLnBvaW50c25vcm1hbCB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbi5wb2ludHNkaW0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgb3BhY2l0eTogMC4yNTtcXG59ICovXFxuXFxuLyogLmZvb3RlciB7XFxuICBjb2xvcjogIzVmNjM2ODtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWFyZ2luOiAxLjVyZW07XFxufSAqL1xcblxcbi8qIC5mb290ZXIgYSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICM3YTdkODE7XFxufVxcblxcbi5mb290ZXIgYTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxufSAqL1xcblxcbi8qIE1vYmlsZSBvcHRpbWl6YXRpb24gKi9cXG5cXG4vKiAudGV4dGFyZWEge1xcbiAgXFxuICB9ICovXFxuLyogLnRvcG5hdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjg1cmVtIDAuNzVyZW0gMC44NXJlbSAwLjc1cmVtO1xcbiAgfSAqL1xcblxcbi8qIC5uYXZsb2dvIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB3aWR0aDogMjByZW07XFxuICB9ICovXFxuLyogXFxuICAubWFya2Rvd25hbnN3ZXIgY29kZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xcbiAgfSAqL1xcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4uSG9tZV9zaWRlYmFyX19fY0FNVCB7XFxuICAgIGFuaW1hdGlvbjogSG9tZV9zbGlkZS10b3BfX2d1WFVjIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XFxufVxcblxcbkBrZXlmcmFtZXMgSG9tZV9zbGlkZS10b3BfX2d1WFVjIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxufVxcblxcbi8qIEZvciBtb2JpbGUgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuSG9tZV9tYWluX19uTGppUSB7XFxuICAgICAgICBib3R0b206IDIwcHg7XFxuICAgICAgICByaWdodDogMjBweDtcXG4gICAgICAgIGhlaWdodDogNDUwcHg7XFxuICAgICAgICB3aWR0aDogMjkwcHg7XFxuICAgICAgICBtYXJnaW46IDAuM3JlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0VBQXNFO0lBQ3RFLGFBQWE7SUFDYixhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isb0RBQW9EO0FBQ3hEOztBQUVBOztHQUVHOztBQUVIO0lBQ0k7O2tCQUVjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTs7Ozs7R0FLRzs7QUFFSDtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIscUNBQXFDO0FBQ3pDOztBQUVBOzs7OztHQUtHOztBQUVIO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxxRUFBeUQ7QUFDN0Q7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ0c7O0FBRUg7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7Ozs7Ozs7R0FTRzs7QUFFSDs7OztHQUlHOztBQUVIOzs7Ozs7O0dBT0c7O0FBRUgsd0JBQXdCOztBQUV4Qjs7S0FFSztBQUNMOzs7O0tBSUs7O0FBRUw7OztLQUdLO0FBQ0w7OztLQUdLOztBQUVMLDhCQUE4Qjs7QUFFOUI7SUFFSSwrRUFBbUU7QUFDdkU7O0FBYUE7SUFDSTtRQUVJLDJCQUEyQjtJQUMvQjtJQUNBO1FBRUksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUEsZUFBZTs7QUFFZjtJQUNJO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICByaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiA1MzBweDtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG59XFxuXFxuLmNsb3VkZm9ybSB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNjguOTFkZWcsICM1ODFiOTggLTIuMTQlLCAjOWMxZGU3IDk5LjY5JSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcbn1cXG5cXG4udGV4dGFyZWEge1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgcGFkZGluZzogMC43cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDllMztcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50ZXh0YXJlYTpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogYXV0bztcXG4gICAgLyogYm9yZGVyLWNvbG9yOiAjNmI3MjgwOyAqL1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxNTYsIDE2MywgMTc1LCAwLjUpOyAqL1xcbn1cXG5cXG4vKiAudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjNmI3MjgwO1xcbn0gKi9cXG5cXG4uZ2VuZXJhdGVidXR0b24ge1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMC44N3JlbTtcXG4gICAgcmlnaHQ6IDFyZW07ICovXFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubG9hZGluZ3doZWVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDAuMnJlbTtcXG4gICAgcmlnaHQ6IDAuMjVyZW07XFxufVxcblxcbi8qIC5zdmdpY29uIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHdpZHRoOiAxLjJlbTtcXG4gIGhlaWdodDogMS4yZW07XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufSAqL1xcblxcbi5nZW5lcmF0ZWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNlNDU3NTcyNjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4uZ2VuZXJhdGVidXR0b246ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5tZXNzYWdlbGlzdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIC5tZXNzYWdlbGlzdGxvYWRpbmcge1xcbiBcXG59ICovXFxuXFxuLnVzZXJtZXNzYWdlIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODFiOTg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC44cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuXFxuLmFwaW1lc3NhZ2Uge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTgxYjk4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbiAwLjJzO1xcbn1cXG5cXG4vKiAuYXBpbWVzc2FnZXtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIGNsZWFyOiBib3RoO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn0gKi9cXG5cXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuMztcXG4gICAgfVxcbn1cXG5cXG4uYW5pbWF0ZS1wdWxzZSB7XFxuICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG59XFxuXFxuLmFwaW1lc3NhZ2UsXFxuLnVzZXJtZXNzYWdlIHtcXG59XFxuXFxuLyogLm1hcmtkb3duYW5zd2VyIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xcbn1cXG5cXG4ubWFya2Rvd25hbnN3ZXIgYTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5tYXJrZG93bmFuc3dlciBhIHtcXG4gIGNvbG9yOiAjYjEzYTNhO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm1hcmtkb3duYW5zd2VyIGNvZGUge1xcbiAgY29sb3I6ICMxNWNiMTk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bmFuc3dlciBvbCxcXG4ubWFya2Rvd25hbnN3ZXIgdWwge1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uYm90aWNvbixcXG4udXNlcmljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XFxufVxcblxcbi5tYXJrZG93bmFuc3dlciBoMSxcXG4ubWFya2Rvd25hbnN3ZXIgaDIsXFxuLm1hcmtkb3duYW5zd2VyIGgzIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59ICovXFxuXFxuLmNlbnRlciB7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jbG91ZCB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWUzOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi8qIC5wb2ludHNub3JtYWwge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG5cXG4ucG9pbnRzZGltIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG9wYWNpdHk6IDAuMjU7XFxufSAqL1xcblxcbi8qIC5mb290ZXIge1xcbiAgY29sb3I6ICM1ZjYzNjg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbjogMS41cmVtO1xcbn0gKi9cXG5cXG4vKiAuZm9vdGVyIGEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjN2E3ZDgxO1xcbn1cXG5cXG4uZm9vdGVyIGE6aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn0gKi9cXG5cXG4vKiBNb2JpbGUgb3B0aW1pemF0aW9uICovXFxuXFxuLyogLnRleHRhcmVhIHtcXG4gIFxcbiAgfSAqL1xcbi8qIC50b3BuYXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC44NXJlbSAwLjc1cmVtIDAuODVyZW0gMC43NXJlbTtcXG4gIH0gKi9cXG5cXG4vKiAubmF2bG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgfSAqL1xcbi8qIFxcbiAgLm1hcmtkb3duYW5zd2VyIGNvZGUge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcXG4gIH0gKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLnNpZGViYXIge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS10b3Age1xcbiAgICAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcXG4gICAgMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcbn1cXG5cXG4vKiBGb3IgbW9iaWxlICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLm1haW4ge1xcbiAgICAgICAgYm90dG9tOiAyMHB4O1xcbiAgICAgICAgcmlnaHQ6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xcbiAgICAgICAgd2lkdGg6IDI5MHB4O1xcbiAgICAgICAgbWFyZ2luOiAwLjNyZW07XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImNsb3VkZm9ybVwiOiBcIkhvbWVfY2xvdWRmb3JtX19XNFBMSlwiLFxuXHRcInRleHRhcmVhXCI6IFwiSG9tZV90ZXh0YXJlYV9fbFNIZjdcIixcblx0XCJnZW5lcmF0ZWJ1dHRvblwiOiBcIkhvbWVfZ2VuZXJhdGVidXR0b25fX29tS1lYXCIsXG5cdFwibG9hZGluZ3doZWVsXCI6IFwiSG9tZV9sb2FkaW5nd2hlZWxfX0lXSm5FXCIsXG5cdFwibWVzc2FnZWxpc3RcIjogXCJIb21lX21lc3NhZ2VsaXN0X19ZSHI4cFwiLFxuXHRcInVzZXJtZXNzYWdlXCI6IFwiSG9tZV91c2VybWVzc2FnZV9fdFdIV1JcIixcblx0XCJhcGltZXNzYWdlXCI6IFwiSG9tZV9hcGltZXNzYWdlX19WaGZUblwiLFxuXHRcImFuaW1hdGUtcHVsc2VcIjogXCJIb21lX2FuaW1hdGUtcHVsc2VfX1VsX1VXXCIsXG5cdFwicHVsc2VcIjogXCJIb21lX3B1bHNlX19hVUs5NlwiLFxuXHRcImNlbnRlclwiOiBcIkhvbWVfY2VudGVyX180QkZnQ1wiLFxuXHRcImNsb3VkXCI6IFwiSG9tZV9jbG91ZF9fUzdwYXJcIixcblx0XCJzaWRlYmFyXCI6IFwiSG9tZV9zaWRlYmFyX19fY0FNVFwiLFxuXHRcInNsaWRlLXRvcFwiOiBcIkhvbWVfc2xpZGUtdG9wX19ndVhVY1wiLFxuXHRcInR5cGluZ1wiOiBcIkhvbWVfdHlwaW5nX19EZzJiRFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/Home.module.css\n"));

/***/ })

});