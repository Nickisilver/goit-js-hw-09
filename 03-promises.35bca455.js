!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var u=i("6JpON"),r=document.querySelector("button"),a=document.querySelector("form"),l=document.querySelector('[ name="delay"]'),c=document.querySelector('[ name="step"]'),d=document.querySelector('[name="amount"]');function s(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}a.addEventListener("input",(function(){delay=+l.value,console.log(delay),step=+c.value,console.log(step),amount=+d.value,console.log(amount)})),a.addEventListener("submit",(function(n){n.preventDefault(),function(){for(var n=1;n<=amount;n+=1)s(n,delay).then((function(n){var o=n.position,t=n.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(u).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),delay+=step;setTimeout((function(){r.disabled=!1}),delay),r.disabled=!0}()}))}();
//# sourceMappingURL=03-promises.35bca455.js.map
