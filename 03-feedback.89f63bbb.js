function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function g(t,e,n){var i,o,r,u,f,a,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=i,r=o;return i=o=void 0,c=e,u=t.apply(r,n)}function j(t){return c=t,f=setTimeout(h,e),l?b(t):u}function S(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=r}function h(){var t=v();if(S(t))return w(t);f=setTimeout(h,function(t){var n=e-(t-a);return s?p(n,r-(t-c)):n}(t))}function w(t){return f=void 0,g&&i?b(t):(i=o=void 0,u)}function O(){var t=v(),n=S(t);if(i=arguments,o=this,a=t,n){if(void 0===f)return j(a);if(s)return f=setTimeout(h,e),b(a)}return void 0===f&&(f=setTimeout(h,e)),u}return e=m(e)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(m(n.maxWait)||0,e):r,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=o=f=void 0},O.flush=function(){return void 0===f?u:w(v())},O}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=r.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(t,e,{leading:i,maxWait:e,trailing:o})};const b=document.querySelector("input"),j=document.querySelector("textarea"),S=document.querySelector("button");let h={};b.addEventListener("input",t(e)((function(t){localStorage.setItem("feedback-form-state",JSON.stringify(h)),h.email=t.target.value,console.log(h)}),500)),j.addEventListener("input",t(e)((function(t){localStorage.setItem("feedback-form-state",JSON.stringify(h)),h.message=t.target.value,console.log(h)}),500)),S.addEventListener("click",(function(t){localStorage.clear()}));
//# sourceMappingURL=03-feedback.89f63bbb.js.map
