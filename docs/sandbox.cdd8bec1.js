parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"a4wX":[function(require,module,exports) {
"use strict";var e=require("lynx");document.body.onload=function(){var t=window.location.pathname.split("/"),i=t[1]||"demo",o=t[2]||"references",r=t[3]||"simple-get";console.log(a,o,r,t),(0,e.loadFiles)(i,o,r).then(n);var m=document.getElementById("groups");Object.entries(a).forEach(function(t){var a=t[0],o=t[1],r=document.createElement("div"),c=document.createElement("div");r.appendChild(c),c.className="groupTitle",c.innerText=a,m.appendChild(r),o.forEach(function(t){var o=t.name,m=document.createElement("a");m.href="/demo/"+a+"/"+o,m.className="link",m.innerText=o,r.appendChild(m),m.addEventListener("click",function(){(0,e.loadFiles)(i,a,o).then(n)})})})};var n=function(n){var t=n.map(function(e){return e.text}).join("\n"),a=document.getElementById("lynxText");a.value=t;var i=document.getElementById("entryPoint"),o=i.value;(0,e.initRuntime)(n,o);var r=function(){var t=i.value;a.value;(0,e.initRuntime)(n,t)};a.addEventListener("change",r),i.addEventListener("change",r)},t="\\app.graphicalRepresentation.jsRep",a={jsCompiler:[{name:"addition",entryPoint:t},{name:"distance",entryPoint:t},{name:"store-values",entryPoint:t}],state:[{name:"checkbox",entryPoint:t},{name:"textbox",entryPoint:t},{name:"input",entryPoint:t}],integration:[{name:"accordian-representation",entryPoint:t},{name:"parse",entryPoint:t},{name:"textbox",entryPoint:t},{name:"mouseover",entryPoint:t},{name:"quadtree",entryPoint:t}],types:[{name:"coordinate-equality",entryPoint:t},{name:"array-length",entryPoint:t}]};
},{}]},{},["a4wX"], null)
//# sourceMappingURL=/sandbox.cdd8bec1.js.map