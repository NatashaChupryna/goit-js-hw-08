!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,y=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var i,r,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=i,o=r;return i=r=void 0,l=t,f=e.apply(o,n)}function S(e){return l=e,a=setTimeout(h,t),d?b(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=p();if(O(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-c);return s?g(n,u-(e-l)):n}(e))}function w(e){return a=void 0,v&&i?b(e):(i=r=void 0,f)}function T(){var e=p(),n=O(e);if(i=arguments,r=this,c=e,n){if(void 0===a)return S(c);if(s)return a=setTimeout(h,t),b(c)}return void 0===a&&(a=setTimeout(h,t)),f}return t=j(t)||0,m(n)&&(d=!!n.leading,u=(s="maxWait"in n)?y(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},T.flush=function(){return void 0===a?f:w(p())},T}function m(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(m(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=m(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=f.test(t);return o||a.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return m(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};var S=document.querySelector("input"),O=document.querySelector("textarea"),h=document.querySelector("button"),w={};S.addEventListener("input",e(t)((function(e){localStorage.setItem("feedback-form-state",JSON.stringify(w)),w.email=e.target.value,console.log(w)}),500)),O.addEventListener("input",e(t)((function(e){localStorage.setItem("feedback-form-state",JSON.stringify(w)),w.message=e.target.value,console.log(w)}),500)),h.addEventListener("click",(function(e){localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.8792e149.js.map
