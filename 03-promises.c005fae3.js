!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),l=document.querySelector("form"),u=document.querySelector('[ name="delay"]'),c=document.querySelector('[ name="step"]'),a=document.querySelector('[name="amount"]'),d=document.querySelector("button"),f=null,s=null,p=null;function m(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}l.addEventListener("input",(function(){f=+u.value,console.log(f),s=+c.value,console.log(s),p=+a.value,console.log(p)})),l.addEventListener("submit",(function(e){e.preventDefault()})),d.addEventListener("click",(function(){for(var n=1;n<=p;n+=1)m(n,f).then((function(n){var o=n.position,t=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),f+=s}))}();
//# sourceMappingURL=03-promises.c005fae3.js.map
