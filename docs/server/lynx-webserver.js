#!/usr/bin/env node
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"J8zB":[function(require,module,exports) {
"use strict";var e=t(require("http")),n=t(require("fs")),o=t(require("path"));function t(e){return e&&e.__esModule?e:{default:e}}var r=process.env.PORT||3e3,l=process.env.NODE_ENV||"development",i=e.default.createServer(function(e,n){"/subscribe"===e.url?a(n):(console.log(e.url),c(e,n))}),a=function(e){e.writeHead(200,{"Content-Type":"text/event-stream","Cache-Control":"no-cache",Connection:"keep-alive"});var n=Date.now(),o="retry: 5000\nid:"+n+"\ndata: "+("Hello World!!! "+n)+"\n\n";e.end(o)},c=function(e,t){var r=e.url,l="/"===r[r.length-1]?r+"index.html":r,i=o.default.join(__dirname,l);console.log(i),n.default.readFile(i,function(e,n){if(e)console.log("Error fetching "+l,e);else{var r=".svg"===o.default.extname(i)?{"Content-Type":"image/svg+xml"}:{"Cache-Control":"no-cache"};t.writeHead(200,r),t.end(n)}})};i.listen(r),i.on("error",function(e){console.log(e),process.exit(1)}),i.on("listening",function(){console.log(l+" server listening on port "+r)});
},{}]},{},["J8zB"], null)
//# sourceMappingURL=/server/lynx-webserver.js.map