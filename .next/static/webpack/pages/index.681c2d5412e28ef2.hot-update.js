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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Home_main__nLjiQ {\\n    position: absolute;\\n    bottom: 30px;\\n    right: 30px;\\n    height: 450px;\\n    width: 360px;\\n    display: grid;\\n    grid-template-rows: 1fr auto;\\n    margin: 0.5rem;\\n    font-size: 0.9rem;\\n    border-radius: 30px;\\n    background-color: white;\\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);\\n    justify-items: end;\\n}\\n\\n.Home_cloudform__W4PLJ {\\n    background: linear-gradient(268.91deg, #581b98 -2.14%, #9c1de7 99.69%);\\n    padding: 10px;\\n    display: flex;\\n    width: 100%;\\n    height: 100px;\\n    border-radius: 0 0 20px 20px;\\n}\\n\\n.Home_textarea__lSHf7 {\\n    /* position: relative; */\\n    resize: none;\\n    padding: 0.7rem;\\n    width: 100%;\\n    height: 60%;\\n    border-radius: 1.5rem;\\n    border: 1px solid #d9d9e3;\\n    background: #ffffff;\\n    color: #000;\\n    outline: none;\\n}\\n\\n.Home_textarea__lSHf7:disabled {\\n    opacity: 0.5;\\n}\\n\\n.Home_textarea__lSHf7:focus {\\n    outline: auto;\\n    /* border-color: #6b7280; */\\n    /* box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.5); */\\n}\\n\\n/* .textarea::placeholder {\\n  color: #6b7280;\\n} */\\n\\n.Home_generatebutton__omKYX {\\n    /* position: absolute;\\n    top: 0.87rem;\\n    right: 1rem; */\\n    color: rgb(0, 0, 0);\\n    background: none;\\n    padding: 0.3rem;\\n    border: none;\\n}\\n\\n.Home_loadingwheel__IWJnE {\\n    position: absolute;\\n    top: 0.2rem;\\n    right: 0.25rem;\\n}\\n\\n/* .svgicon {\\n  transform: rotate(90deg);\\n  width: 1.2em;\\n  height: 1.2em;\\n  fill: currentColor;\\n} */\\n\\n.Home_generatebutton__omKYX:hover {\\n    background: #e4575726;\\n    border-radius: 0.2rem;\\n}\\n\\n.Home_generatebutton__omKYX:disabled {\\n    opacity: 0.9;\\n    cursor: not-allowed;\\n    background: none;\\n}\\n\\n.Home_messagelist__YHr8p {\\n    display: inline-flex;\\n    flex-direction: column;\\n    justify-content: flex-end;\\n    border-radius: 0.5rem;\\n    background-color: rgb(255, 255, 255);\\n    padding: 0 10px;\\n    height: 100%;\\n}\\n\\n/* .messagelistloading {\\n \\n} */\\n\\n.Home_usermessage__tWHWR {\\n    align-self: flex-end;\\n    background-color: #581b98;\\n    color: white;\\n    padding: 0.8rem;\\n    padding-top: 0.75rem;\\n    padding-bottom: 0.75rem;\\n    padding-right: 0.75rem;\\n    border-radius: 10px 10px 0px 10px;\\n    margin-bottom: 0.75rem;\\n}\\n\\n.Home_apimessage__VhfTn {\\n    align-self: flex-start;\\n    background-color: #581b98;\\n    color: white;\\n    padding: 0.8rem;\\n    padding-top: 0.75rem;\\n    padding-bottom: 0.75rem;\\n    border-radius: 10px 10px 10px 0;\\n    margin-bottom: 0.75rem;\\n    transition: opacity 0.4s ease-in 0.2s;\\n}\\n\\n/* .apimessage{\\n  margin-right: 2rem;\\n  clear: both;\\n  float: left;\\n  box-sizing: inherit;\\n} */\\n\\n@keyframes Home_typing__Dg2bD {\\n    from {\\n        width: 0;\\n    }\\n    to {\\n        width: 100%;\\n    }\\n}\\n\\n@keyframes Home_pulse__aUK96 {\\n    0% {\\n        opacity: 0.3;\\n    }\\n}\\n\\n.Home_animate-pulse__Ul_UW {\\n    animation: Home_pulse__aUK96 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\\n}\\n\\n.Home_apimessage__VhfTn,\\n.Home_usermessage__tWHWR {\\n}\\n\\n/* .markdownanswer {\\n  line-height: 1.75;\\n}\\n\\n.markdownanswer a:hover {\\n  opacity: 0.8;\\n}\\n\\n.markdownanswer a {\\n  color: #b13a3a;\\n  font-weight: 500;\\n}\\n\\n.markdownanswer code {\\n  color: #15cb19;\\n  font-weight: 500;\\n  white-space: pre-wrap !important;\\n}\\n\\n.markdownanswer ol,\\n.markdownanswer ul {\\n  margin: 1rem;\\n}\\n\\n.boticon,\\n.usericon {\\n  margin-right: 0.5rem;\\n  border-radius: 0.1rem;\\n}\\n\\n.markdownanswer h1,\\n.markdownanswer h2,\\n.markdownanswer h3 {\\n  font-size: inherit;\\n} */\\n\\n.Home_center__4BFgC {\\n    /* position: relative; */\\n    width: 100%;\\n}\\n\\n.Home_cloud__S7par {\\n    background: #ffffff;\\n    height: 100%;\\n    width: 100%;\\n    /* border: 1px solid #d9d9e3; */\\n    display: flex;\\n    flex-direction: column-reverse;\\n    overflow-y: auto;\\n}\\n\\n/* .pointsnormal {\\n  width: 90%;\\n  height: 90%;\\n}\\n\\n.pointsdim {\\n  width: 90%;\\n  height: 90%;\\n  opacity: 0.25;\\n} */\\n\\n/* .footer {\\n  color: #5f6368;\\n  font-size: 0.8rem;\\n  margin: 1.5rem;\\n} */\\n\\n/* .footer a {\\n  font-weight: 500;\\n  color: #7a7d81;\\n}\\n\\n.footer a:hover {\\n  opacity: 0.8;\\n} */\\n\\n/* Mobile optimization */\\n\\n/* .textarea {\\n  \\n  } */\\n/* .topnav {\\n    border: 1px solid black;\\n    align-items: center;\\n    padding: 0.85rem 0.75rem 0.85rem 0.75rem;\\n  } */\\n\\n/* .navlogo {\\n    font-size: 1.25rem;\\n    width: 20rem;\\n  } */\\n/* \\n  .markdownanswer code {\\n    white-space: pre-wrap !important;\\n  } */\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Home.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,YAAY;IACZ,aAAa;IACb,4BAA4B;IAC5B,cAAc;IACd,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,2CAA2C;IAC3C,kBAAkB;AACtB;;AAEA;IACI,sEAAsE;IACtE,aAAa;IACb,aAAa;IACb,WAAW;IACX,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,WAAW;IACX,WAAW;IACX,qBAAqB;IACrB,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,oDAAoD;AACxD;;AAEA;;GAEG;;AAEH;IACI;;kBAEc;IACd,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,cAAc;AAClB;;AAEA;;;;;GAKG;;AAEH;IACI,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,yBAAyB;IACzB,qBAAqB;IACrB,oCAAoC;IACpC,eAAe;IACf,YAAY;AAChB;;AAEA;;GAEG;;AAEH;IACI,oBAAoB;IACpB,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,uBAAuB;IACvB,sBAAsB;IACtB,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,uBAAuB;IACvB,+BAA+B;IAC/B,sBAAsB;IACtB,qCAAqC;AACzC;;AAEA;;;;;GAKG;;AAEH;IACI;QACI,QAAQ;IACZ;IACA;QACI,WAAW;IACf;AACJ;;AAEA;IACI;QACI,YAAY;IAChB;AACJ;;AAEA;IACI,qEAAyD;AAC7D;;AAEA;;AAEA;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAkCG;;AAEH;IACI,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,+BAA+B;IAC/B,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;;;;;;;;;GASG;;AAEH;;;;GAIG;;AAEH;;;;;;;GAOG;;AAEH,wBAAwB;;AAExB;;KAEK;AACL;;;;KAIK;;AAEL;;;KAGK;AACL;;;KAGK\",\"sourcesContent\":[\".main {\\n    position: absolute;\\n    bottom: 30px;\\n    right: 30px;\\n    height: 450px;\\n    width: 360px;\\n    display: grid;\\n    grid-template-rows: 1fr auto;\\n    margin: 0.5rem;\\n    font-size: 0.9rem;\\n    border-radius: 30px;\\n    background-color: white;\\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);\\n    justify-items: end;\\n}\\n\\n.cloudform {\\n    background: linear-gradient(268.91deg, #581b98 -2.14%, #9c1de7 99.69%);\\n    padding: 10px;\\n    display: flex;\\n    width: 100%;\\n    height: 100px;\\n    border-radius: 0 0 20px 20px;\\n}\\n\\n.textarea {\\n    /* position: relative; */\\n    resize: none;\\n    padding: 0.7rem;\\n    width: 100%;\\n    height: 60%;\\n    border-radius: 1.5rem;\\n    border: 1px solid #d9d9e3;\\n    background: #ffffff;\\n    color: #000;\\n    outline: none;\\n}\\n\\n.textarea:disabled {\\n    opacity: 0.5;\\n}\\n\\n.textarea:focus {\\n    outline: auto;\\n    /* border-color: #6b7280; */\\n    /* box-shadow: 0 0 0 3px rgba(156, 163, 175, 0.5); */\\n}\\n\\n/* .textarea::placeholder {\\n  color: #6b7280;\\n} */\\n\\n.generatebutton {\\n    /* position: absolute;\\n    top: 0.87rem;\\n    right: 1rem; */\\n    color: rgb(0, 0, 0);\\n    background: none;\\n    padding: 0.3rem;\\n    border: none;\\n}\\n\\n.loadingwheel {\\n    position: absolute;\\n    top: 0.2rem;\\n    right: 0.25rem;\\n}\\n\\n/* .svgicon {\\n  transform: rotate(90deg);\\n  width: 1.2em;\\n  height: 1.2em;\\n  fill: currentColor;\\n} */\\n\\n.generatebutton:hover {\\n    background: #e4575726;\\n    border-radius: 0.2rem;\\n}\\n\\n.generatebutton:disabled {\\n    opacity: 0.9;\\n    cursor: not-allowed;\\n    background: none;\\n}\\n\\n.messagelist {\\n    display: inline-flex;\\n    flex-direction: column;\\n    justify-content: flex-end;\\n    border-radius: 0.5rem;\\n    background-color: rgb(255, 255, 255);\\n    padding: 0 10px;\\n    height: 100%;\\n}\\n\\n/* .messagelistloading {\\n \\n} */\\n\\n.usermessage {\\n    align-self: flex-end;\\n    background-color: #581b98;\\n    color: white;\\n    padding: 0.8rem;\\n    padding-top: 0.75rem;\\n    padding-bottom: 0.75rem;\\n    padding-right: 0.75rem;\\n    border-radius: 10px 10px 0px 10px;\\n    margin-bottom: 0.75rem;\\n}\\n\\n.apimessage {\\n    align-self: flex-start;\\n    background-color: #581b98;\\n    color: white;\\n    padding: 0.8rem;\\n    padding-top: 0.75rem;\\n    padding-bottom: 0.75rem;\\n    border-radius: 10px 10px 10px 0;\\n    margin-bottom: 0.75rem;\\n    transition: opacity 0.4s ease-in 0.2s;\\n}\\n\\n/* .apimessage{\\n  margin-right: 2rem;\\n  clear: both;\\n  float: left;\\n  box-sizing: inherit;\\n} */\\n\\n@keyframes typing {\\n    from {\\n        width: 0;\\n    }\\n    to {\\n        width: 100%;\\n    }\\n}\\n\\n@keyframes pulse {\\n    0% {\\n        opacity: 0.3;\\n    }\\n}\\n\\n.animate-pulse {\\n    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\\n}\\n\\n.apimessage,\\n.usermessage {\\n}\\n\\n/* .markdownanswer {\\n  line-height: 1.75;\\n}\\n\\n.markdownanswer a:hover {\\n  opacity: 0.8;\\n}\\n\\n.markdownanswer a {\\n  color: #b13a3a;\\n  font-weight: 500;\\n}\\n\\n.markdownanswer code {\\n  color: #15cb19;\\n  font-weight: 500;\\n  white-space: pre-wrap !important;\\n}\\n\\n.markdownanswer ol,\\n.markdownanswer ul {\\n  margin: 1rem;\\n}\\n\\n.boticon,\\n.usericon {\\n  margin-right: 0.5rem;\\n  border-radius: 0.1rem;\\n}\\n\\n.markdownanswer h1,\\n.markdownanswer h2,\\n.markdownanswer h3 {\\n  font-size: inherit;\\n} */\\n\\n.center {\\n    /* position: relative; */\\n    width: 100%;\\n}\\n\\n.cloud {\\n    background: #ffffff;\\n    height: 100%;\\n    width: 100%;\\n    /* border: 1px solid #d9d9e3; */\\n    display: flex;\\n    flex-direction: column-reverse;\\n    overflow-y: auto;\\n}\\n\\n/* .pointsnormal {\\n  width: 90%;\\n  height: 90%;\\n}\\n\\n.pointsdim {\\n  width: 90%;\\n  height: 90%;\\n  opacity: 0.25;\\n} */\\n\\n/* .footer {\\n  color: #5f6368;\\n  font-size: 0.8rem;\\n  margin: 1.5rem;\\n} */\\n\\n/* .footer a {\\n  font-weight: 500;\\n  color: #7a7d81;\\n}\\n\\n.footer a:hover {\\n  opacity: 0.8;\\n} */\\n\\n/* Mobile optimization */\\n\\n/* .textarea {\\n  \\n  } */\\n/* .topnav {\\n    border: 1px solid black;\\n    align-items: center;\\n    padding: 0.85rem 0.75rem 0.85rem 0.75rem;\\n  } */\\n\\n/* .navlogo {\\n    font-size: 1.25rem;\\n    width: 20rem;\\n  } */\\n/* \\n  .markdownanswer code {\\n    white-space: pre-wrap !important;\\n  } */\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"cloudform\": \"Home_cloudform__W4PLJ\",\n\t\"textarea\": \"Home_textarea__lSHf7\",\n\t\"generatebutton\": \"Home_generatebutton__omKYX\",\n\t\"loadingwheel\": \"Home_loadingwheel__IWJnE\",\n\t\"messagelist\": \"Home_messagelist__YHr8p\",\n\t\"usermessage\": \"Home_usermessage__tWHWR\",\n\t\"apimessage\": \"Home_apimessage__VhfTn\",\n\t\"animate-pulse\": \"Home_animate-pulse__Ul_UW\",\n\t\"pulse\": \"Home_pulse__aUK96\",\n\t\"center\": \"Home_center__4BFgC\",\n\t\"cloud\": \"Home_cloud__S7par\",\n\t\"typing\": \"Home_typing__Dg2bD\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0EsNkRBQTZELHlCQUF5QixtQkFBbUIsa0JBQWtCLG9CQUFvQixtQkFBbUIsb0JBQW9CLG1DQUFtQyxxQkFBcUIsd0JBQXdCLDBCQUEwQiw4QkFBOEIsa0RBQWtELHlCQUF5QixHQUFHLDRCQUE0Qiw2RUFBNkUsb0JBQW9CLG9CQUFvQixrQkFBa0Isb0JBQW9CLG1DQUFtQyxHQUFHLDJCQUEyQiw2QkFBNkIscUJBQXFCLHNCQUFzQixrQkFBa0Isa0JBQWtCLDRCQUE0QixnQ0FBZ0MsMEJBQTBCLGtCQUFrQixvQkFBb0IsR0FBRyxvQ0FBb0MsbUJBQW1CLEdBQUcsaUNBQWlDLG9CQUFvQixnQ0FBZ0MsMkRBQTJELEtBQUssK0JBQStCLG1CQUFtQixJQUFJLG1DQUFtQyw0QkFBNEIsbUJBQW1CLG1CQUFtQiw0QkFBNEIsdUJBQXVCLHNCQUFzQixtQkFBbUIsR0FBRywrQkFBK0IseUJBQXlCLGtCQUFrQixxQkFBcUIsR0FBRyxpQkFBaUIsNkJBQTZCLGlCQUFpQixrQkFBa0IsdUJBQXVCLElBQUkseUNBQXlDLDRCQUE0Qiw0QkFBNEIsR0FBRywwQ0FBMEMsbUJBQW1CLDBCQUEwQix1QkFBdUIsR0FBRyw4QkFBOEIsMkJBQTJCLDZCQUE2QixnQ0FBZ0MsNEJBQTRCLDJDQUEyQyxzQkFBc0IsbUJBQW1CLEdBQUcsNEJB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QWtCLElBQUksa0JBQWtCLG1CQUFtQixzQkFBc0IsbUJBQW1CLElBQUksb0JBQW9CLHFCQUFxQixtQkFBbUIsR0FBRyxxQkFBcUIsaUJBQWlCLElBQUksaURBQWlELFVBQVUsZ0JBQWdCLDhCQUE4QiwwQkFBMEIsK0NBQStDLE1BQU0sbUJBQW1CLHlCQUF5QixtQkFBbUIsTUFBTSxpQ0FBaUMsdUNBQXVDLE1BQU0sdUJBQXVCO0FBQ2xsVTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/Mzc3NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkhvbWVfbWFpbl9fbkxqaVEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMzBweDtcXG4gICAgcmlnaHQ6IDMwcHg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcbn1cXG5cXG4uSG9tZV9jbG91ZGZvcm1fX1c0UExKIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2OC45MWRlZywgIzU4MWI5OCAtMi4xNCUsICM5YzFkZTcgOTkuNjklKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxufVxcblxcbi5Ib21lX3RleHRhcmVhX19sU0hmNyB7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjdyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWUzO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLkhvbWVfdGV4dGFyZWFfX2xTSGY3OmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uSG9tZV90ZXh0YXJlYV9fbFNIZjc6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBhdXRvO1xcbiAgICAvKiBib3JkZXItY29sb3I6ICM2YjcyODA7ICovXFxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDE1NiwgMTYzLCAxNzUsIDAuNSk7ICovXFxufVxcblxcbi8qIC50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM2YjcyODA7XFxufSAqL1xcblxcbi5Ib21lX2dlbmVyYXRlYnV0dG9uX19vbUtZWCB7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwLjg3cmVtO1xcbiAgICByaWdodDogMXJlbTsgKi9cXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5Ib21lX2xvYWRpbmd3aGVlbF9fSVdKbkUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMC4ycmVtO1xcbiAgICByaWdodDogMC4yNXJlbTtcXG59XFxuXFxuLyogLnN2Z2ljb24ge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgd2lkdGg6IDEuMmVtO1xcbiAgaGVpZ2h0OiAxLjJlbTtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59ICovXFxuXFxuLkhvbWVfZ2VuZXJhdGVidXR0b25fX29tS1lYOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2U0NTc1NzI2O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbi5Ib21lX2dlbmVyYXRlYnV0dG9uX19vbUtZWDpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLkhvbWVfbWVzc2FnZWxpc3RfX1lIcjhwIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogLm1lc3NhZ2VsaXN0bG9hZGluZyB7XFxuIFxcbn0gKi9cXG5cXG4uSG9tZV91c2VybWVzc2FnZV9fdFdIV1Ige1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4MWI5ODtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG5cXG4uSG9tZV9hcGltZXNzYWdlX19WaGZUbiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODFiOTg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC44cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluIDAuMnM7XFxufVxcblxcbi8qIC5hcGltZXNzYWdle1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBmbG9hdDogbGVmdDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufSAqL1xcblxcbkBrZXlmcmFtZXMgSG9tZV90eXBpbmdfX0RnMmJEIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIEhvbWVfcHVsc2VfX2FVSzk2IHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMC4zO1xcbiAgICB9XFxufVxcblxcbi5Ib21lX2FuaW1hdGUtcHVsc2VfX1VsX1VXIHtcXG4gICAgYW5pbWF0aW9uOiBIb21lX3B1bHNlX19hVUs5NiAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpIGluZmluaXRlO1xcbn1cXG5cXG4uSG9tZV9hcGltZXNzYWdlX19WaGZUbixcXG4uSG9tZV91c2VybWVzc2FnZV9fdFdIV1Ige1xcbn1cXG5cXG4vKiAubWFya2Rvd25hbnN3ZXIge1xcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XFxufVxcblxcbi5tYXJrZG93bmFuc3dlciBhOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLm1hcmtkb3duYW5zd2VyIGEge1xcbiAgY29sb3I6ICNiMTNhM2E7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubWFya2Rvd25hbnN3ZXIgY29kZSB7XFxuICBjb2xvcjogIzE1Y2IxOTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duYW5zd2VyIG9sLFxcbi5tYXJrZG93bmFuc3dlciB1bCB7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5ib3RpY29uLFxcbi51c2VyaWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcXG59XFxuXFxuLm1hcmtkb3duYW5zd2VyIGgxLFxcbi5tYXJrZG93bmFuc3dlciBoMixcXG4ubWFya2Rvd25hbnN3ZXIgaDMge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn0gKi9cXG5cXG4uSG9tZV9jZW50ZXJfXzRCRmdDIHtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLkhvbWVfY2xvdWRfX1M3cGFyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2Q5ZDllMzsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4vKiAucG9pbnRzbm9ybWFsIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG59XFxuXFxuLnBvaW50c2RpbSB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBvcGFjaXR5OiAwLjI1O1xcbn0gKi9cXG5cXG4vKiAuZm9vdGVyIHtcXG4gIGNvbG9yOiAjNWY2MzY4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW46IDEuNXJlbTtcXG59ICovXFxuXFxuLyogLmZvb3RlciBhIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzdhN2Q4MTtcXG59XFxuXFxuLmZvb3RlciBhOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59ICovXFxuXFxuLyogTW9iaWxlIG9wdGltaXphdGlvbiAqL1xcblxcbi8qIC50ZXh0YXJlYSB7XFxuICBcXG4gIH0gKi9cXG4vKiAudG9wbmF2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuODVyZW0gMC43NXJlbSAwLjg1cmVtIDAuNzVyZW07XFxuICB9ICovXFxuXFxuLyogLm5hdmxvZ28ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gIH0gKi9cXG4vKiBcXG4gIC5tYXJrZG93bmFuc3dlciBjb2RlIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XFxuICB9ICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDJDQUEyQztJQUMzQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzRUFBc0U7SUFDdEUsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixvREFBb0Q7QUFDeEQ7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSTs7a0JBRWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBOzs7OztHQUtHOztBQUVIO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixxQ0FBcUM7QUFDekM7O0FBRUE7Ozs7O0dBS0c7O0FBRUg7SUFDSTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLHFFQUF5RDtBQUM3RDs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDRzs7QUFFSDtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7Ozs7Ozs7OztHQVNHOztBQUVIOzs7O0dBSUc7O0FBRUg7Ozs7Ozs7R0FPRzs7QUFFSCx3QkFBd0I7O0FBRXhCOztLQUVLO0FBQ0w7Ozs7S0FJSzs7QUFFTDs7O0tBR0s7QUFDTDs7O0tBR0tcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMzBweDtcXG4gICAgcmlnaHQ6IDMwcHg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcbn1cXG5cXG4uY2xvdWRmb3JtIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2OC45MWRlZywgIzU4MWI5OCAtMi4xNCUsICM5YzFkZTcgOTkuNjklKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxufVxcblxcbi50ZXh0YXJlYSB7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjdyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWUzO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRleHRhcmVhOmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGV4dGFyZWE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBhdXRvO1xcbiAgICAvKiBib3JkZXItY29sb3I6ICM2YjcyODA7ICovXFxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDE1NiwgMTYzLCAxNzUsIDAuNSk7ICovXFxufVxcblxcbi8qIC50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICM2YjcyODA7XFxufSAqL1xcblxcbi5nZW5lcmF0ZWJ1dHRvbiB7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwLjg3cmVtO1xcbiAgICByaWdodDogMXJlbTsgKi9cXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5sb2FkaW5nd2hlZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMC4ycmVtO1xcbiAgICByaWdodDogMC4yNXJlbTtcXG59XFxuXFxuLyogLnN2Z2ljb24ge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgd2lkdGg6IDEuMmVtO1xcbiAgaGVpZ2h0OiAxLjJlbTtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59ICovXFxuXFxuLmdlbmVyYXRlYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2U0NTc1NzI2O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbi5nZW5lcmF0ZWJ1dHRvbjpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLm1lc3NhZ2VsaXN0IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogLm1lc3NhZ2VsaXN0bG9hZGluZyB7XFxuIFxcbn0gKi9cXG5cXG4udXNlcm1lc3NhZ2Uge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4MWI5ODtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjhyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG5cXG4uYXBpbWVzc2FnZSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODFiOTg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMC44cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluIDAuMnM7XFxufVxcblxcbi8qIC5hcGltZXNzYWdle1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgY2xlYXI6IGJvdGg7XFxuICBmbG9hdDogbGVmdDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufSAqL1xcblxcbkBrZXlmcmFtZXMgdHlwaW5nIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMC4zO1xcbiAgICB9XFxufVxcblxcbi5hbmltYXRlLXB1bHNlIHtcXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpIGluZmluaXRlO1xcbn1cXG5cXG4uYXBpbWVzc2FnZSxcXG4udXNlcm1lc3NhZ2Uge1xcbn1cXG5cXG4vKiAubWFya2Rvd25hbnN3ZXIge1xcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XFxufVxcblxcbi5tYXJrZG93bmFuc3dlciBhOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLm1hcmtkb3duYW5zd2VyIGEge1xcbiAgY29sb3I6ICNiMTNhM2E7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubWFya2Rvd25hbnN3ZXIgY29kZSB7XFxuICBjb2xvcjogIzE1Y2IxOTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcXG59XFxuXFxuLm1hcmtkb3duYW5zd2VyIG9sLFxcbi5tYXJrZG93bmFuc3dlciB1bCB7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5ib3RpY29uLFxcbi51c2VyaWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMXJlbTtcXG59XFxuXFxuLm1hcmtkb3duYW5zd2VyIGgxLFxcbi5tYXJrZG93bmFuc3dlciBoMixcXG4ubWFya2Rvd25hbnN3ZXIgaDMge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn0gKi9cXG5cXG4uY2VudGVyIHtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNsb3VkIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2Q5ZDllMzsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4vKiAucG9pbnRzbm9ybWFsIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG59XFxuXFxuLnBvaW50c2RpbSB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBvcGFjaXR5OiAwLjI1O1xcbn0gKi9cXG5cXG4vKiAuZm9vdGVyIHtcXG4gIGNvbG9yOiAjNWY2MzY4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtYXJnaW46IDEuNXJlbTtcXG59ICovXFxuXFxuLyogLmZvb3RlciBhIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzdhN2Q4MTtcXG59XFxuXFxuLmZvb3RlciBhOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59ICovXFxuXFxuLyogTW9iaWxlIG9wdGltaXphdGlvbiAqL1xcblxcbi8qIC50ZXh0YXJlYSB7XFxuICBcXG4gIH0gKi9cXG4vKiAudG9wbmF2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuODVyZW0gMC43NXJlbSAwLjg1cmVtIDAuNzVyZW07XFxuICB9ICovXFxuXFxuLyogLm5hdmxvZ28ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gIH0gKi9cXG4vKiBcXG4gIC5tYXJrZG93bmFuc3dlciBjb2RlIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XFxuICB9ICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJjbG91ZGZvcm1cIjogXCJIb21lX2Nsb3VkZm9ybV9fVzRQTEpcIixcblx0XCJ0ZXh0YXJlYVwiOiBcIkhvbWVfdGV4dGFyZWFfX2xTSGY3XCIsXG5cdFwiZ2VuZXJhdGVidXR0b25cIjogXCJIb21lX2dlbmVyYXRlYnV0dG9uX19vbUtZWFwiLFxuXHRcImxvYWRpbmd3aGVlbFwiOiBcIkhvbWVfbG9hZGluZ3doZWVsX19JV0puRVwiLFxuXHRcIm1lc3NhZ2VsaXN0XCI6IFwiSG9tZV9tZXNzYWdlbGlzdF9fWUhyOHBcIixcblx0XCJ1c2VybWVzc2FnZVwiOiBcIkhvbWVfdXNlcm1lc3NhZ2VfX3RXSFdSXCIsXG5cdFwiYXBpbWVzc2FnZVwiOiBcIkhvbWVfYXBpbWVzc2FnZV9fVmhmVG5cIixcblx0XCJhbmltYXRlLXB1bHNlXCI6IFwiSG9tZV9hbmltYXRlLXB1bHNlX19VbF9VV1wiLFxuXHRcInB1bHNlXCI6IFwiSG9tZV9wdWxzZV9fYVVLOTZcIixcblx0XCJjZW50ZXJcIjogXCJIb21lX2NlbnRlcl9fNEJGZ0NcIixcblx0XCJjbG91ZFwiOiBcIkhvbWVfY2xvdWRfX1M3cGFyXCIsXG5cdFwidHlwaW5nXCI6IFwiSG9tZV90eXBpbmdfX0RnMmJEXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/Home.module.css\n"));

/***/ })

});