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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Home_main__nLjiQ {\\n    position: absolute;\\n    bottom: 30px;\\n    right: 30px;\\n    height: 460px;\\n    width: 360px;\\n    display: grid;\\n    grid-template-rows: 1fr auto;\\n    margin: 0.5rem;\\n    font-size: 0.9rem;\\n    justify-items: end;\\n}\\n\\n.Home_cloudform__W4PLJ {\\n    background: linear-gradient(268.91deg, #581b98 -2.14%, #9c1de7 99.69%);\\n    padding: 10px;\\n    display: flex;\\n    width: 100%;\\n    height: 100px;\\n    border-radius: 0 0 20px 20px;\\n}\\n\\n.Home_textarea__lSHf7 {\\n    /* position: relative; */\\n    resize: none;\\n    padding: 0.7rem;\\n    width: 100%;\\n    height: 60%;\\n    border-radius: 1.5rem;\\n    border: 1px solid #d9d9e3;\\n    background: #ffffff;\\n    color: #000;\\n    outline: none;\\n}\\n\\n.Home_textarea__lSHf7:disabled {\\n    opacity: 0.5;\\n}\\n\\n.Home_textarea__lSHf7:focus {\\n    outline: auto;\\n    /* border-color: #6b7280; */\\n    /* box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.5); */\\n}\\n\\n/* .textarea::placeholder {\\n  color: #6b7280;\\n} */\\n\\n.Home_generatebutton__omKYX {\\n    /* position: absolute;\\n    top: 0.87rem;\\n    right: 1rem; */\\n    color: rgb(0, 0, 0);\\n    background: none;\\n    padding: 0.3rem;\\n    border: none;\\n}\\n\\n.Home_loadingwheel__IWJnE {\\n    position: absolute;\\n    top: 0.2rem;\\n    right: 0.25rem;\\n}\\n\\n/* .svgicon {\\n  transform: rotate(90deg);\\n  width: 1.2em;\\n  height: 1.2em;\\n  fill: currentColor;\\n} */\\n\\n.Home_generatebutton__omKYX:hover {\\n    background: #e4575726;\\n    border-radius: 0.2rem;\\n}\\n\\n.Home_generatebutton__omKYX:disabled {\\n    opacity: 0.9;\\n    cursor: not-allowed;\\n    background: none;\\n}\\n\\n.Home_messagelist__YHr8p {\\n    display: inline-flex;\\n    flex-direction: column;\\n    justify-content: flex-end;\\n    border-radius: 0.5rem;\\n    background-color: rgb(255, 255, 255);\\n    padding: 0 10px;\\n    height: 100%;\\n}\\n\\n/* .messagelistloading {\\n \\n} */\\n\\n.Home_usermessage__tWHWR {\\n    align-self: flex-end;\\n    background-color: #581b98;\\n    color: white;\\n    padding: 0.8rem;\\n    padding-top: 0.75rem;\\n    padding-bottom: 0.75rem;\\n    padding-right: 0.75rem;\\n    border-radius: 10px 10px 0px 10px;\\n    margin-bottom: 0.75rem;\\n}\\n\\n.Home_apimessage__VhfTn {\\n    align-self: flex-start;\\n    background-color: #581b98;\\n    color: white;\\n    padding: 0.8rem;\\n    padding-top: 0.75rem;\\n    padding-bottom: 0.75rem;\\n    border-radius: 10px 10px 10px 0;\\n    margin-bottom: 0.75rem;\\n    transition: opacity 0.4s ease-in 0.2s;\\n}\\n\\n/* .apimessage{\\n  margin-right: 2rem;\\n  clear: both;\\n  float: left;\\n  box-sizing: inherit;\\n} */\\n\\n@keyframes Home_typing__Dg2bD {\\n    from {\\n        width: 0;\\n    }\\n    to {\\n        width: 100%;\\n    }\\n}\\n\\n@keyframes Home_pulse__aUK96 {\\n    0% {\\n        opacity: 0.3;\\n    }\\n}\\n\\n.Home_animate-pulse__Ul_UW {\\n    animation: Home_pulse__aUK96 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\\n}\\n\\n.Home_apimessage__VhfTn,\\n.Home_usermessage__tWHWR {\\n}\\n\\n/* .markdownanswer {\\n  line-height: 1.75;\\n}\\n\\n.markdownanswer a:hover {\\n  opacity: 0.8;\\n}\\n\\n.markdownanswer a {\\n  color: #b13a3a;\\n  font-weight: 500;\\n}\\n\\n.markdownanswer code {\\n  color: #15cb19;\\n  font-weight: 500;\\n  white-space: pre-wrap !important;\\n}\\n\\n.markdownanswer ol,\\n.markdownanswer ul {\\n  margin: 1rem;\\n}\\n\\n.boticon,\\n.usericon {\\n  margin-right: 0.5rem;\\n  border-radius: 0.1rem;\\n}\\n\\n.markdownanswer h1,\\n.markdownanswer h2,\\n.markdownanswer h3 {\\n  font-size: inherit;\\n} */\\n\\n.Home_center__4BFgC {\\n    /* position: relative; */\\n    width: 100%;\\n}\\n\\n.Home_cloud__S7par {\\n    background: #ffffff;\\n    height: 190px;\\n    width: 100%;\\n    /* border: 1px solid #d9d9e3; */\\n    display: flex;\\n    flex-direction: column-reverse;\\n    overflow-y: auto;\\n}\\n\\n/* .pointsnormal {\\n  width: 90%;\\n  height: 90%;\\n}\\n\\n.pointsdim {\\n  width: 90%;\\n  height: 90%;\\n  opacity: 0.25;\\n} */\\n\\n/* .footer {\\n  color: #5f6368;\\n  font-size: 0.8rem;\\n  margin: 1.5rem;\\n} */\\n\\n/* .footer a {\\n  font-weight: 500;\\n  color: #7a7d81;\\n}\\n\\n.footer a:hover {\\n  opacity: 0.8;\\n} */\\n\\n/* Mobile optimization */\\n\\n/* .textarea {\\n  \\n  } */\\n/* .topnav {\\n    border: 1px solid black;\\n    align-items: center;\\n    padding: 0.85rem 0.75rem 0.85rem 0.75rem;\\n  } */\\n\\n/* .navlogo {\\n    font-size: 1.25rem;\\n    width: 20rem;\\n  } */\\n/* \\n  .markdownanswer code {\\n    white-space: pre-wrap !important;\\n  } */\\n\\n/* ========================= */\\n\\n.Home_sidebar___cAMT {\\n    animation: Home_slide-top__guXUc 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\\n}\\n\\n@keyframes Home_slide-top__guXUc {\\n    0% {\\n        transform: translateY(400px);\\n    }\\n    100% {\\n        transform: translateY(0);\\n    }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Home.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,YAAY;IACZ,aAAa;IACb,4BAA4B;IAC5B,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,sEAAsE;IACtE,aAAa;IACb,aAAa;IACb,WAAW;IACX,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,WAAW;IACX,WAAW;IACX,qBAAqB;IACrB,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,oDAAoD;AACxD;;AAEA;;GAEG;;AAEH;IACI;;kBAEc;IACd,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,cAAc;AAClB;;AAEA;;;;;GAKG;;AAEH;IACI,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,yBAAyB;IACzB,qBAAqB;IACrB,oCAAoC;IACpC,eAAe;IACf,YAAY;AAChB;;AAEA;;GAEG;;AAEH;IACI,oBAAoB;IACpB,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,uBAAuB;IACvB,sBAAsB;IACtB,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,uBAAuB;IACvB,+BAA+B;IAC/B,sBAAsB;IACtB,qCAAqC;AACzC;;AAEA;;;;;GAKG;;AAEH;IACI;QACI,QAAQ;IACZ;IACA;QACI,WAAW;IACf;AACJ;;AAEA;IACI;QACI,YAAY;IAChB;AACJ;;AAEA;IACI,qEAAyD;AAC7D;;AAEA;;AAEA;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAkCG;;AAEH;IACI,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,WAAW;IACX,+BAA+B;IAC/B,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;;;;;;;;;GASG;;AAEH;;;;GAIG;;AAEH;;;;;;;GAOG;;AAEH,wBAAwB;;AAExB;;KAEK;AACL;;;;KAIK;;AAEL;;;KAGK;AACL;;;KAGK;;AAEL,8BAA8B;;AAE9B;IAEI,+EAAmE;AACvE;;AAaA;IACI;QAEI,4BAA4B;IAChC;IACA;QAEI,wBAAwB;IAC5B;AACJ\",\"sourcesContent\":[\".main {\\n    position: absolute;\\n    bottom: 30px;\\n    right: 30px;\\n    height: 460px;\\n    width: 360px;\\n    display: grid;\\n    grid-template-rows: 1fr auto;\\n    margin: 0.5rem;\\n    font-size: 0.9rem;\\n    justify-items: end;\\n}\\n\\n.cloudform {\\n    background: linear-gradient(268.91deg, #581b98 -2.14%, #9c1de7 99.69%);\\n    padding: 10px;\\n    display: flex;\\n    width: 100%;\\n    height: 100px;\\n    border-radius: 0 0 20px 20px;\\n}\\n\\n.textarea {\\n    /* position: relative; */\\n    resize: none;\\n    padding: 0.7rem;\\n    width: 100%;\\n    height: 60%;\\n    border-radius: 1.5rem;\\n    border: 1px solid #d9d9e3;\\n    background: #ffffff;\\n    color: #000;\\n    outline: none;\\n}\\n\\n.textarea:disabled {\\n    opacity: 0.5;\\n}\\n\\n.textarea:focus {\\n    outline: auto;\\n    /* border-color: #6b7280; */\\n    /* box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.5); */\\n}\\n\\n/* .textarea::placeholder {\\n  color: #6b7280;\\n} */\\n\\n.generatebutton {\\n    /* position: absolute;\\n    top: 0.87rem;\\n    right: 1rem; */\\n    color: rgb(0, 0, 0);\\n    background: none;\\n    padding: 0.3rem;\\n    border: none;\\n}\\n\\n.loadingwheel {\\n    position: absolute;\\n    top: 0.2rem;\\n    right: 0.25rem;\\n}\\n\\n/* .svgicon {\\n  transform: rotate(90deg);\\n  width: 1.2em;\\n  height: 1.2em;\\n  fill: currentColor;\\n} */\\n\\n.generatebutton:hover {\\n    background: #e4575726;\\n    border-radius: 0.2rem;\\n}\\n\\n.generatebutton:disabled {\\n    opacity: 0.9;\\n    cursor: not-allowed;\\n    background: none;\\n}\\n\\n.messagelist {\\n    display: inline-flex;\\n    flex-direction: column;\\n    justify-content: flex-end;\\n    border-radius: 0.5rem;\\n    background-color: rgb(255, 255, 255);\\n    padding: 0 10px;\\n    height: 100%;\\n}\\n\\n/* .messagelistloading {\\n \\n} */\\n\\n.usermessage {\\n    align-self: flex-end;\\n    background-color: #581b98;\\n    color: white;\\n    padding: 0.8rem;\\n    padding-top: 0.75rem;\\n    padding-bottom: 0.75rem;\\n    padding-right: 0.75rem;\\n    border-radius: 10px 10px 0px 10px;\\n    margin-bottom: 0.75rem;\\n}\\n\\n.apimessage {\\n    align-self: flex-start;\\n    background-color: #581b98;\\n    color: white;\\n    padding: 0.8rem;\\n    padding-top: 0.75rem;\\n    padding-bottom: 0.75rem;\\n    border-radius: 10px 10px 10px 0;\\n    margin-bottom: 0.75rem;\\n    transition: opacity 0.4s ease-in 0.2s;\\n}\\n\\n/* .apimessage{\\n  margin-right: 2rem;\\n  clear: both;\\n  float: left;\\n  box-sizing: inherit;\\n} */\\n\\n@keyframes typing {\\n    from {\\n        width: 0;\\n    }\\n    to {\\n        width: 100%;\\n    }\\n}\\n\\n@keyframes pulse {\\n    0% {\\n        opacity: 0.3;\\n    }\\n}\\n\\n.animate-pulse {\\n    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\\n}\\n\\n.apimessage,\\n.usermessage {\\n}\\n\\n/* .markdownanswer {\\n  line-height: 1.75;\\n}\\n\\n.markdownanswer a:hover {\\n  opacity: 0.8;\\n}\\n\\n.markdownanswer a {\\n  color: #b13a3a;\\n  font-weight: 500;\\n}\\n\\n.markdownanswer code {\\n  color: #15cb19;\\n  font-weight: 500;\\n  white-space: pre-wrap !important;\\n}\\n\\n.markdownanswer ol,\\n.markdownanswer ul {\\n  margin: 1rem;\\n}\\n\\n.boticon,\\n.usericon {\\n  margin-right: 0.5rem;\\n  border-radius: 0.1rem;\\n}\\n\\n.markdownanswer h1,\\n.markdownanswer h2,\\n.markdownanswer h3 {\\n  font-size: inherit;\\n} */\\n\\n.center {\\n    /* position: relative; */\\n    width: 100%;\\n}\\n\\n.cloud {\\n    background: #ffffff;\\n    height: 190px;\\n    width: 100%;\\n    /* border: 1px solid #d9d9e3; */\\n    display: flex;\\n    flex-direction: column-reverse;\\n    overflow-y: auto;\\n}\\n\\n/* .pointsnormal {\\n  width: 90%;\\n  height: 90%;\\n}\\n\\n.pointsdim {\\n  width: 90%;\\n  height: 90%;\\n  opacity: 0.25;\\n} */\\n\\n/* .footer {\\n  color: #5f6368;\\n  font-size: 0.8rem;\\n  margin: 1.5rem;\\n} */\\n\\n/* .footer a {\\n  font-weight: 500;\\n  color: #7a7d81;\\n}\\n\\n.footer a:hover {\\n  opacity: 0.8;\\n} */\\n\\n/* Mobile optimization */\\n\\n/* .textarea {\\n  \\n  } */\\n/* .topnav {\\n    border: 1px solid black;\\n    align-items: center;\\n    padding: 0.85rem 0.75rem 0.85rem 0.75rem;\\n  } */\\n\\n/* .navlogo {\\n    font-size: 1.25rem;\\n    width: 20rem;\\n  } */\\n/* \\n  .markdownanswer code {\\n    white-space: pre-wrap !important;\\n  } */\\n\\n/* ========================= */\\n\\n.sidebar {\\n    -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\\n    animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\\n}\\n\\n@-webkit-keyframes slide-top {\\n    0% {\\n        -webkit-transform: translateY(100px);\\n        transform: translateY(100px);\\n    }\\n    100% {\\n        -webkit-transform: translateY(0);\\n        transform: translateY(0);\\n    }\\n}\\n\\n@keyframes slide-top {\\n    0% {\\n        -webkit-transform: translateY(400px);\\n        transform: translateY(400px);\\n    }\\n    100% {\\n        -webkit-transform: translateY(0);\\n        transform: translateY(0);\\n    }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"cloudform\": \"Home_cloudform__W4PLJ\",\n\t\"textarea\": \"Home_textarea__lSHf7\",\n\t\"generatebutton\": \"Home_generatebutton__omKYX\",\n\t\"loadingwheel\": \"Home_loadingwheel__IWJnE\",\n\t\"messagelist\": \"Home_messagelist__YHr8p\",\n\t\"usermessage\": \"Home_usermessage__tWHWR\",\n\t\"apimessage\": \"Home_apimessage__VhfTn\",\n\t\"animate-pulse\": \"Home_animate-pulse__Ul_UW\",\n\t\"pulse\": \"Home_pulse__aUK96\",\n\t\"center\": \"Home_center__4BFgC\",\n\t\"cloud\": \"Home_cloud__S7par\",\n\t\"sidebar\": \"Home_sidebar___cAMT\",\n\t\"slide-top\": \"Home_slide-top__guXUc\",\n\t\"typing\": \"Home_typing__Dg2bD\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0EsNkRBQTZELHlCQUF5QixtQkFBbUIsa0JBQWtCLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1DQUFtQyxxQkFBcUIsd0JBQXdCLHlCQUF5QixHQUFHLDRCQUE0Qiw2RUFBNkUsb0JBQW9CLG9CQUFvQixrQkFBa0Isb0JBQW9CLG1DQUFtQyxHQUFHLDJCQUEyQiw2QkFBNkIscUJBQXFCLHNCQUFzQixrQkFBa0Isa0JBQWtCLDRCQUE0QixnQ0FBZ0MsMEJBQTBCLGtCQUFrQixvQkFBb0IsR0FBRyxvQ0FBb0MsbUJBQW1CLEdBQUcsaUNBQWlDLG9CQUFvQixnQ0FBZ0MsMkRBQTJELEtBQUssK0JBQStCLG1CQUFtQixJQUFJLG1DQUFtQyw0QkFBNEIsbUJBQW1CLG1CQUFtQiw0QkFBNEIsdUJBQXVCLHNCQUFzQixtQkFBbUIsR0FBRywrQkFBK0IseUJBQXlCLGtCQUFrQixxQkFBcUIsR0FBRyxpQkFBaUIsNkJBQTZCLGlCQUFpQixrQkFBa0IsdUJBQXVCLElBQUkseUNBQXlDLDRCQUE0Qiw0QkFBNEIsR0FBRywwQ0FBMEMsbUJBQW1CLDBCQUEwQix1QkFBdUIsR0FBRyw4QkFBOEIsMkJBQTJCLDZCQUE2QixnQ0FBZ0MsNEJBQTRCLDJDQUEyQyxzQkFBc0IsbUJBQW1CLEdBQUcsNEJBQTRCLE9BQU8sZ0NBQWdDLDJCQUEyQixnQ0FBZ0MsbUJBQW1CLHNCQUFzQiwyQkFBMkIsOEJBQThCLDZCQUE2Qix3Q0FBd0MsNkJBQTZCLEdBQUcsNkJBQTZCLDZCQUE2QixnQ0FBZ0MsbUJBQW1CLHNCQUFzQiwyQkFBMkIsOEJBQThCLHNDQUFzQyw2QkFBNkIsNENBQTRDLEdBQUcsbUJBQW1CLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLHdCQUF3QixJQUFJLHFDQUFxQyxZQUFZLG1CQUFtQixPQUFPLFVBQVUsc0JBQXNCLE9BQU8sR0FBRyxrQ0FBa0MsVUFBVSx1QkFBdUIsT0FBTyxHQUFHLGdDQUFnQyw0RUFBNEUsR0FBRyx3REFBd0QsR0FBRyx3QkFBd0Isc0JBQXNCLEdBQUcsNkJBQTZCLGlCQUFpQixHQUFHLHVCQUF1QixtQkFBbUIscUJBQXFCLEdBQUcsMEJBQTBCLG1CQUFtQixxQkFBcUIscUNBQXFDLEdBQUcsNkNBQTZDLGlCQUFpQixHQUFHLDBCQUEwQix5QkFBeUIsMEJBQTBCLEdBQUcsa0VBQWtFLHVCQUF1QixJQUFJLDJCQUEyQiw2QkFBNkIsb0JBQW9CLEdBQUcsd0JBQXdCLDBCQUEwQixvQkFBb0Isa0JBQWtCLG9DQUFvQyxzQkFBc0IscUNBQXFDLHVCQUF1QixHQUFHLHNCQUFzQixlQUFlLGdCQUFnQixHQUFHLGdCQUFnQixlQUFlLGdCQUFnQixrQkFBa0IsSUFBSSxrQkFBa0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsSUFBSSxvQkFBb0IscUJBQXFCLG1CQUFtQixHQUFHLHFCQUFxQixpQkFBaUIsSUFBSSxpREFBaUQsVUFBVSxnQkFBZ0IsOEJBQThCLDBCQUEwQiwrQ0FBK0MsTUFBTSxtQkFBbUIseUJBQXlCLG1CQUFtQixNQUFNLGlDQUFpQyx1Q0FBdUMsTUFBTSwrREFBK0Qsc0ZBQXNGLEdBQUcsc0NBQXNDLFVBQVUsdUNBQXVDLE9BQU8sWUFBWSxtQ0FBbUMsT0FBTyxHQUFHLFNBQVMsdUZBQXVGLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLFNBQVMsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxTQUFTLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sc0NBQXNDLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sUUFBUSxNQUFNLFdBQVcsTUFBTSxhQUFhLE9BQU8sS0FBSyxRQUFRLE1BQU0sT0FBTyxLQUFLLE9BQU8sTUFBTSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sZ0NBQWdDLHlCQUF5QixtQkFBbUIsa0JBQWtCLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1DQUFtQyxxQkFBcUIsd0JBQXdCLHlCQUF5QixHQUFHLGdCQUFnQiw2RUFBNkUsb0JBQW9CLG9CQUFvQixrQkFBa0Isb0JBQW9CLG1DQUFtQyxHQUFHLGVBQWUsNkJBQTZCLHFCQUFxQixzQkFBc0Isa0JBQWtCLGtCQUFrQiw0QkFBNEIsZ0NBQWdDLDBCQUEwQixrQkFBa0Isb0JBQW9CLEdBQUcsd0JBQXdCLG1CQUFtQixHQUFHLHFCQUFxQixvQkFBb0IsZ0NBQWdDLDJEQUEyRCxLQUFLLCtCQUErQixtQkFBbUIsSUFBSSx1QkFBdUIsNEJBQTRCLG1CQUFtQixtQkFBbUIsNEJBQTRCLHVCQUF1QixzQkFBc0IsbUJBQW1CLEdBQUcsbUJBQW1CLHlCQUF5QixrQkFBa0IscUJBQXFCLEdBQUcsaUJBQWlCLDZCQUE2QixpQkFBaUIsa0JBQWtCLHVCQUF1QixJQUFJLDZCQUE2Qiw0QkFBNEIsNEJBQTRCLEdBQUcsOEJBQThCLG1CQUFtQiwwQkFBMEIsdUJBQXVCLEdBQUcsa0JBQWtCLDJCQUEyQiw2QkFBNkIsZ0NBQWdDLDRCQUE0QiwyQ0FBMkMsc0JBQXNCLG1CQUFtQixHQUFHLDRCQUE0QixPQUFPLG9CQUFvQiwyQkFBMkIsZ0NBQWdDLG1CQUFtQixzQkFBc0IsMkJBQTJCLDhCQUE4Qiw2QkFBNkIsd0NBQXdDLDZCQUE2QixHQUFHLGlCQUFpQiw2QkFBNkIsZ0NBQWdDLG1CQUFtQixzQkFBc0IsMkJBQTJCLDhCQUE4QixzQ0FBc0MsNkJBQTZCLDRDQUE0QyxHQUFHLG1CQUFtQix1QkFBdUIsZ0JBQWdCLGdCQUFnQix3QkFBd0IsSUFBSSx5QkFBeUIsWUFBWSxtQkFBbUIsT0FBTyxVQUFVLHNCQUFzQixPQUFPLEdBQUcsc0JBQXNCLFVBQVUsdUJBQXVCLE9BQU8sR0FBRyxvQkFBb0IsZ0VBQWdFLEdBQUcsZ0NBQWdDLEdBQUcsd0JBQXdCLHNCQUFzQixHQUFHLDZCQUE2QixpQkFBaUIsR0FBRyx1QkFBdUIsbUJBQW1CLHFCQUFxQixHQUFHLDBCQUEwQixtQkFBbUIscUJBQXFCLHFDQUFxQyxHQUFHLDZDQUE2QyxpQkFBaUIsR0FBRywwQkFBMEIseUJBQXlCLDBCQUEwQixHQUFHLGtFQUFrRSx1QkFBdUIsSUFBSSxlQUFlLDZCQUE2QixvQkFBb0IsR0FBRyxZQUFZLDBCQUEwQixvQkFBb0Isa0JBQWtCLG9DQUFvQyxzQkFBc0IscUNBQXFDLHVCQUF1QixHQUFHLHNCQUFzQixlQUFlLGdCQUFnQixHQUFHLGdCQUFnQixlQUFlLGdCQUFnQixrQkFBa0IsSUFBSSxrQkFBa0IsbUJBQW1CLHNCQUFzQixtQkFBbUIsSUFBSSxvQkFBb0IscUJBQXFCLG1CQUFtQixHQUFHLHFCQUFxQixpQkFBaUIsSUFBSSxpREFBaUQsVUFBVSxnQkFBZ0IsOEJBQThCLDBCQUEwQiwrQ0FBK0MsTUFBTSxtQkFBbUIseUJBQXlCLG1CQUFtQixNQUFNLGlDQUFpQyx1Q0FBdUMsTUFBTSxtREFBbUQsa0ZBQWtGLDBFQUEwRSxHQUFHLGtDQUFrQyxVQUFVLCtDQUErQyx1Q0FBdUMsT0FBTyxZQUFZLDJDQUEyQyxtQ0FBbUMsT0FBTyxHQUFHLDBCQUEwQixVQUFVLCtDQUErQyx1Q0FBdUMsT0FBTyxZQUFZLDJDQUEyQyxtQ0FBbUMsT0FBTyxHQUFHLHFCQUFxQjtBQUN2NFY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz8zNzc1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuSG9tZV9tYWluX19uTGppUSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICByaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiA0NjBweDtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG59XFxuXFxuLkhvbWVfY2xvdWRmb3JtX19XNFBMSiB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNjguOTFkZWcsICM1ODFiOTggLTIuMTQlLCAjOWMxZGU3IDk5LjY5JSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcbn1cXG5cXG4uSG9tZV90ZXh0YXJlYV9fbFNIZjcge1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgcGFkZGluZzogMC43cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDllMztcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5Ib21lX3RleHRhcmVhX19sU0hmNzpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLkhvbWVfdGV4dGFyZWFfX2xTSGY3OmZvY3VzIHtcXG4gICAgb3V0bGluZTogYXV0bztcXG4gICAgLyogYm9yZGVyLWNvbG9yOiAjNmI3MjgwOyAqL1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxNTYsIDE2MywgMTc1LCAwLjUpOyAqL1xcbn1cXG5cXG4vKiAudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjNmI3MjgwO1xcbn0gKi9cXG5cXG4uSG9tZV9nZW5lcmF0ZWJ1dHRvbl9fb21LWVgge1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMC44N3JlbTtcXG4gICAgcmlnaHQ6IDFyZW07ICovXFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uSG9tZV9sb2FkaW5nd2hlZWxfX0lXSm5FIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDAuMnJlbTtcXG4gICAgcmlnaHQ6IDAuMjVyZW07XFxufVxcblxcbi8qIC5zdmdpY29uIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHdpZHRoOiAxLjJlbTtcXG4gIGhlaWdodDogMS4yZW07XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufSAqL1xcblxcbi5Ib21lX2dlbmVyYXRlYnV0dG9uX19vbUtZWDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNlNDU3NTcyNjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4uSG9tZV9nZW5lcmF0ZWJ1dHRvbl9fb21LWVg6ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5Ib21lX21lc3NhZ2VsaXN0X19ZSHI4cCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIC5tZXNzYWdlbGlzdGxvYWRpbmcge1xcbiBcXG59ICovXFxuXFxuLkhvbWVfdXNlcm1lc3NhZ2VfX3RXSFdSIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODFiOTg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC44cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuXFxuLkhvbWVfYXBpbWVzc2FnZV9fVmhmVG4ge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTgxYjk4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbiAwLjJzO1xcbn1cXG5cXG4vKiAuYXBpbWVzc2FnZXtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIGNsZWFyOiBib3RoO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn0gKi9cXG5cXG5Aa2V5ZnJhbWVzIEhvbWVfdHlwaW5nX19EZzJiRCB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBIb21lX3B1bHNlX19hVUs5NiB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuMztcXG4gICAgfVxcbn1cXG5cXG4uSG9tZV9hbmltYXRlLXB1bHNlX19VbF9VVyB7XFxuICAgIGFuaW1hdGlvbjogSG9tZV9wdWxzZV9fYVVLOTYgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG59XFxuXFxuLkhvbWVfYXBpbWVzc2FnZV9fVmhmVG4sXFxuLkhvbWVfdXNlcm1lc3NhZ2VfX3RXSFdSIHtcXG59XFxuXFxuLyogLm1hcmtkb3duYW5zd2VyIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xcbn1cXG5cXG4ubWFya2Rvd25hbnN3ZXIgYTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5tYXJrZG93bmFuc3dlciBhIHtcXG4gIGNvbG9yOiAjYjEzYTNhO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm1hcmtkb3duYW5zd2VyIGNvZGUge1xcbiAgY29sb3I6ICMxNWNiMTk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bmFuc3dlciBvbCxcXG4ubWFya2Rvd25hbnN3ZXIgdWwge1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uYm90aWNvbixcXG4udXNlcmljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XFxufVxcblxcbi5tYXJrZG93bmFuc3dlciBoMSxcXG4ubWFya2Rvd25hbnN3ZXIgaDIsXFxuLm1hcmtkb3duYW5zd2VyIGgzIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59ICovXFxuXFxuLkhvbWVfY2VudGVyX180QkZnQyB7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5Ib21lX2Nsb3VkX19TN3BhciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGhlaWdodDogMTkwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWUzOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi8qIC5wb2ludHNub3JtYWwge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG5cXG4ucG9pbnRzZGltIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG9wYWNpdHk6IDAuMjU7XFxufSAqL1xcblxcbi8qIC5mb290ZXIge1xcbiAgY29sb3I6ICM1ZjYzNjg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbjogMS41cmVtO1xcbn0gKi9cXG5cXG4vKiAuZm9vdGVyIGEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjN2E3ZDgxO1xcbn1cXG5cXG4uZm9vdGVyIGE6aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn0gKi9cXG5cXG4vKiBNb2JpbGUgb3B0aW1pemF0aW9uICovXFxuXFxuLyogLnRleHRhcmVhIHtcXG4gIFxcbiAgfSAqL1xcbi8qIC50b3BuYXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC44NXJlbSAwLjc1cmVtIDAuODVyZW0gMC43NXJlbTtcXG4gIH0gKi9cXG5cXG4vKiAubmF2bG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgfSAqL1xcbi8qIFxcbiAgLm1hcmtkb3duYW5zd2VyIGNvZGUge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcXG4gIH0gKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLkhvbWVfc2lkZWJhcl9fX2NBTVQge1xcbiAgICBhbmltYXRpb246IEhvbWVfc2xpZGUtdG9wX19ndVhVYyAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIEhvbWVfc2xpZGUtdG9wX19ndVhVYyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MDBweCk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzRUFBc0U7SUFDdEUsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixvREFBb0Q7QUFDeEQ7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSTs7a0JBRWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBOzs7OztHQUtHOztBQUVIO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixxQ0FBcUM7QUFDekM7O0FBRUE7Ozs7O0dBS0c7O0FBRUg7SUFDSTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLHFFQUF5RDtBQUM3RDs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDRzs7QUFFSDtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7Ozs7Ozs7OztHQVNHOztBQUVIOzs7O0dBSUc7O0FBRUg7Ozs7Ozs7R0FPRzs7QUFFSCx3QkFBd0I7O0FBRXhCOztLQUVLO0FBQ0w7Ozs7S0FJSzs7QUFFTDs7O0tBR0s7QUFDTDs7O0tBR0s7O0FBRUwsOEJBQThCOztBQUU5QjtJQUVJLCtFQUFtRTtBQUN2RTs7QUFhQTtJQUNJO1FBRUksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFFSSx3QkFBd0I7SUFDNUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICByaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiA0NjBweDtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG59XFxuXFxuLmNsb3VkZm9ybSB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNjguOTFkZWcsICM1ODFiOTggLTIuMTQlLCAjOWMxZGU3IDk5LjY5JSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcbn1cXG5cXG4udGV4dGFyZWEge1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgcGFkZGluZzogMC43cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDllMztcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50ZXh0YXJlYTpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogYXV0bztcXG4gICAgLyogYm9yZGVyLWNvbG9yOiAjNmI3MjgwOyAqL1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxNTYsIDE2MywgMTc1LCAwLjUpOyAqL1xcbn1cXG5cXG4vKiAudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjNmI3MjgwO1xcbn0gKi9cXG5cXG4uZ2VuZXJhdGVidXR0b24ge1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMC44N3JlbTtcXG4gICAgcmlnaHQ6IDFyZW07ICovXFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubG9hZGluZ3doZWVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDAuMnJlbTtcXG4gICAgcmlnaHQ6IDAuMjVyZW07XFxufVxcblxcbi8qIC5zdmdpY29uIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHdpZHRoOiAxLjJlbTtcXG4gIGhlaWdodDogMS4yZW07XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufSAqL1xcblxcbi5nZW5lcmF0ZWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNlNDU3NTcyNjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4uZ2VuZXJhdGVidXR0b246ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5tZXNzYWdlbGlzdCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIC5tZXNzYWdlbGlzdGxvYWRpbmcge1xcbiBcXG59ICovXFxuXFxuLnVzZXJtZXNzYWdlIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODFiOTg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC44cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuXFxuLmFwaW1lc3NhZ2Uge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTgxYjk4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbiAwLjJzO1xcbn1cXG5cXG4vKiAuYXBpbWVzc2FnZXtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIGNsZWFyOiBib3RoO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn0gKi9cXG5cXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuMztcXG4gICAgfVxcbn1cXG5cXG4uYW5pbWF0ZS1wdWxzZSB7XFxuICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG59XFxuXFxuLmFwaW1lc3NhZ2UsXFxuLnVzZXJtZXNzYWdlIHtcXG59XFxuXFxuLyogLm1hcmtkb3duYW5zd2VyIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xcbn1cXG5cXG4ubWFya2Rvd25hbnN3ZXIgYTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5tYXJrZG93bmFuc3dlciBhIHtcXG4gIGNvbG9yOiAjYjEzYTNhO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm1hcmtkb3duYW5zd2VyIGNvZGUge1xcbiAgY29sb3I6ICMxNWNiMTk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tYXJrZG93bmFuc3dlciBvbCxcXG4ubWFya2Rvd25hbnN3ZXIgdWwge1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uYm90aWNvbixcXG4udXNlcmljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjFyZW07XFxufVxcblxcbi5tYXJrZG93bmFuc3dlciBoMSxcXG4ubWFya2Rvd25hbnN3ZXIgaDIsXFxuLm1hcmtkb3duYW5zd2VyIGgzIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59ICovXFxuXFxuLmNlbnRlciB7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jbG91ZCB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGhlaWdodDogMTkwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWUzOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi8qIC5wb2ludHNub3JtYWwge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbn1cXG5cXG4ucG9pbnRzZGltIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG9wYWNpdHk6IDAuMjU7XFxufSAqL1xcblxcbi8qIC5mb290ZXIge1xcbiAgY29sb3I6ICM1ZjYzNjg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1hcmdpbjogMS41cmVtO1xcbn0gKi9cXG5cXG4vKiAuZm9vdGVyIGEge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjN2E3ZDgxO1xcbn1cXG5cXG4uZm9vdGVyIGE6aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn0gKi9cXG5cXG4vKiBNb2JpbGUgb3B0aW1pemF0aW9uICovXFxuXFxuLyogLnRleHRhcmVhIHtcXG4gIFxcbiAgfSAqL1xcbi8qIC50b3BuYXYge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC44NXJlbSAwLjc1cmVtIDAuODVyZW0gMC43NXJlbTtcXG4gIH0gKi9cXG5cXG4vKiAubmF2bG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgfSAqL1xcbi8qIFxcbiAgLm1hcmtkb3duYW5zd2VyIGNvZGUge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcXG4gIH0gKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLnNpZGViYXIge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XFxuICAgIGFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS10b3Age1xcbiAgICAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS10b3Age1xcbiAgICAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MDBweCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDAwcHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJjbG91ZGZvcm1cIjogXCJIb21lX2Nsb3VkZm9ybV9fVzRQTEpcIixcblx0XCJ0ZXh0YXJlYVwiOiBcIkhvbWVfdGV4dGFyZWFfX2xTSGY3XCIsXG5cdFwiZ2VuZXJhdGVidXR0b25cIjogXCJIb21lX2dlbmVyYXRlYnV0dG9uX19vbUtZWFwiLFxuXHRcImxvYWRpbmd3aGVlbFwiOiBcIkhvbWVfbG9hZGluZ3doZWVsX19JV0puRVwiLFxuXHRcIm1lc3NhZ2VsaXN0XCI6IFwiSG9tZV9tZXNzYWdlbGlzdF9fWUhyOHBcIixcblx0XCJ1c2VybWVzc2FnZVwiOiBcIkhvbWVfdXNlcm1lc3NhZ2VfX3RXSFdSXCIsXG5cdFwiYXBpbWVzc2FnZVwiOiBcIkhvbWVfYXBpbWVzc2FnZV9fVmhmVG5cIixcblx0XCJhbmltYXRlLXB1bHNlXCI6IFwiSG9tZV9hbmltYXRlLXB1bHNlX19VbF9VV1wiLFxuXHRcInB1bHNlXCI6IFwiSG9tZV9wdWxzZV9fYVVLOTZcIixcblx0XCJjZW50ZXJcIjogXCJIb21lX2NlbnRlcl9fNEJGZ0NcIixcblx0XCJjbG91ZFwiOiBcIkhvbWVfY2xvdWRfX1M3cGFyXCIsXG5cdFwic2lkZWJhclwiOiBcIkhvbWVfc2lkZWJhcl9fX2NBTVRcIixcblx0XCJzbGlkZS10b3BcIjogXCJIb21lX3NsaWRlLXRvcF9fZ3VYVWNcIixcblx0XCJ0eXBpbmdcIjogXCJIb21lX3R5cGluZ19fRGcyYkRcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/Home.module.css\n"));

/***/ })

});