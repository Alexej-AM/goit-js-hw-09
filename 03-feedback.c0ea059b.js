var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function g(e,t,n){var r,i,o,a,u,f,c=0,l=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function T(e){return c=e,u=setTimeout(S,t),l?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||g&&e-c>=o}function S(){var e=d();if(j(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-f);return g?m(n,o-(e-c)):n}(e))}function h(e){return u=void 0,y&&r?b(e):(r=i=void 0,a)}function w(){var e=d(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return T(f);if(g)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=p(t)||0,v(n)&&(l=!!n.leading,o=(g="maxWait"in n)?s(p(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=i=u=void 0},w.flush=function(){return void 0===u?a:h(d())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=i.test(e);return u||o.test(e)?a(e.slice(2),u?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),b=document.querySelector("input"),T=document.querySelector("textarea");!function(e){const t=localStorage.getItem("feedback-form-state"),n=JSON.parse(t);t&&(b.value=n.email,T.value=n.message)}(),y.addEventListener("input",(function(e){const t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.message.value,r={email:t,message:n};localStorage.setItem("feedback-form-state",JSON.stringify(r))})),y.addEventListener("submit",t((function(e){e.preventDefault();const t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.message.value,r={email:t,message:n};console.log(r),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}),500));
//# sourceMappingURL=03-feedback.c0ea059b.js.map