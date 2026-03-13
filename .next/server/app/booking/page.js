(()=>{var e={};e.id=355,e.ids=[355],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},83122:e=>{"use strict";e.exports=require("undici")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},88463:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c}),t(96029),t(42476),t(35866);var a=t(23191),n=t(88716),i=t(37922),o=t.n(i),s=t(95231),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);t.d(r,l);let c=["",{children:["booking",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,96029)),"/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/booking/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,42476)),"/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/booking/page.tsx"],u="/booking/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/booking/page",pathname:"/booking",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},85611:(e,r,t)=>{Promise.resolve().then(t.bind(t,48933))},48933:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>ae});var a=t(10326),n=t(17577),i=t(57457);let o=function(){for(var e,r,t=0,a="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,a,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var i=r.length;for(t=0;t<i;t++)r[t]&&(a=e(r[t]))&&(n&&(n+=" "),n+=a)}else for(a in r)r[a]&&(n&&(n+=" "),n+=a)}return n}(e))&&(a&&(a+=" "),a+=r);return a},s=(e,r,t,a)=>{if("length"===t||"prototype"===t||"arguments"===t||"caller"===t)return;let n=Object.getOwnPropertyDescriptor(e,t),i=Object.getOwnPropertyDescriptor(r,t);(l(n,i)||!a)&&Object.defineProperty(e,t,i)},l=function(e,r){return void 0===e||e.configurable||e.writable===r.writable&&e.enumerable===r.enumerable&&e.configurable===r.configurable&&(e.writable||e.value===r.value)},c=(e,r)=>{let t=Object.getPrototypeOf(r);t!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,t)},d=(e,r)=>`/* Wrapped ${e}*/
${r}`,u=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),p=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),m=(e,r,t)=>{let a=""===t?"":`with ${t.trim()}() `,n=d.bind(null,a,r.toString());Object.defineProperty(n,"name",p);let{writable:i,enumerable:o,configurable:s}=u;Object.defineProperty(e,"toString",{value:n,writable:i,enumerable:o,configurable:s})},f=new WeakMap,g=new WeakMap,v=new WeakMap;function b(e,{cacheKey:r,cache:t=new Map,maxAge:a}={}){if(0===a)return e;if("number"==typeof a&&Number.isFinite(a)){if(a>2147483647)throw TypeError("The `maxAge` option cannot exceed 2147483647.");if(a<0)throw TypeError("The `maxAge` option should not be a negative number.")}let n=function(...i){let o=r?r(i):i[0],s=function(e,r){let t=e.get(r);if(t){if(t.maxAge<=Date.now()){e.delete(r);return}return t}}(t,o);if(s)return s.data;let l=e.apply(this,i),c="function"==typeof a?a(...i):a;if(void 0!==c&&c!==Number.POSITIVE_INFINITY){if(!Number.isFinite(c))throw TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");if(c<=0)return l;if(c>2147483647)throw TypeError("The `maxAge` function result cannot exceed 2147483647.")}if(t.set(o,{data:l,maxAge:void 0===c||c===Number.POSITIVE_INFINITY?Number.POSITIVE_INFINITY:Date.now()+c}),void 0!==c&&c!==Number.POSITIVE_INFINITY){let e=setTimeout(()=>{t.delete(o),g.get(n)?.delete(e)},c);e.unref?.();let r=g.get(n)??new Set;r.add(e),g.set(n,r)}return l};return function(e,r,{ignoreNonConfigurable:t=!1}={}){let{name:a}=e;for(let a of Reflect.ownKeys(r))s(e,r,a,t);c(e,r),m(e,r,a)}(n,e,{ignoreNonConfigurable:!0}),f.set(n,t),v.set(n,r??(e=>e[0])),n}function h(e){return"string"==typeof e}function y(e,r,t){return t.indexOf(e)===r}function x(e){return -1===e.indexOf(",")?e:e.split(",")}var w=b(function(e){var r=void 0===e?{}:e,t=r.useFallbackLocale,a=r.fallbackLocale,n=[];if("undefined"!=typeof navigator){for(var i=navigator.languages||[],o=[],s=0;s<i.length;s++){var l=i[s];o=o.concat(x(l))}var c=navigator.language,d=c?x(c):c;n=n.concat(o,d)}return(void 0===t||t)&&n.push(void 0===a?"en-US":a),n.filter(h).map(function e(r){if(!r)return r;if("C"===r||"posix"===r||"POSIX"===r)return"en-US";if(-1!==r.indexOf(".")){var t=r.split(".")[0],a=void 0===t?"":t;return e(a)}if(-1!==r.indexOf("@")){var n=r.split("@")[0],a=void 0===n?"":n;return e(a)}if(-1===r.indexOf("-")||r.toLowerCase()!==r)return r;var i=r.split("-"),o=i[0],s=i[1];return"".concat(o,"-").concat((void 0===s?"":s).toUpperCase())}).filter(y)},{cacheKey:JSON.stringify}),j=b(function(e){return w(e)[0]||null},{cacheKey:JSON.stringify});function S(e,r,t){return function(a,n=t){return r(e(a)+n)}}function D(e){return function(r){return new Date(e(r).getTime()-1)}}function k(e,r){return function(t){return[e(t),r(t)]}}function T(e){if(e instanceof Date)return e.getFullYear();if("number"==typeof e)return e;let r=Number.parseInt(e,10);if("string"==typeof e&&!Number.isNaN(r))return r;throw Error(`Failed to get year from date: ${e}.`)}function P(e){if(e instanceof Date)return e.getMonth();throw Error(`Failed to get month from date: ${e}.`)}function O(e){if(e instanceof Date)return e.getDate();throw Error(`Failed to get year from date: ${e}.`)}function C(e){let r=T(e),t=new Date;return t.setFullYear(r+(-r+1)%100,0,1),t.setHours(0,0,0,0),t}let I=S(T,C,-100),$=S(T,C,100),_=D($),N=S(T,_,-100);S(T,_,100);let L=k(C,_);function M(e){let r=T(e),t=new Date;return t.setFullYear(r+(-r+1)%10,0,1),t.setHours(0,0,0,0),t}let E=S(T,M,-10),A=S(T,M,10),B=D(A),Z=S(T,B,-10);S(T,B,10);let z=k(M,B);function q(e){let r=T(e),t=new Date;return t.setFullYear(r,0,1),t.setHours(0,0,0,0),t}let F=S(T,q,-1),W=S(T,q,1),R=D(W),Y=S(T,R,-1);S(T,R,1);let V=k(q,R);function G(e,r){return function(t,a=r){let n=T(t),i=P(t)+a,o=new Date;return o.setFullYear(n,i,1),o.setHours(0,0,0,0),e(o)}}function H(e){let r=T(e),t=P(e),a=new Date;return a.setFullYear(r,t,1),a.setHours(0,0,0,0),a}let U=G(H,-1),Q=G(H,1),J=D(Q),K=G(J,-1);G(J,1);let X=k(H,J);function ee(e,r){return function(t,a=r){let n=T(t),i=P(t),o=O(t)+a,s=new Date;return s.setFullYear(n,i,o),s.setHours(0,0,0,0),e(s)}}function er(e){let r=T(e),t=P(e),a=O(e),n=new Date;return n.setFullYear(r,t,a),n.setHours(0,0,0,0),n}ee(er,-1);let et=D(ee(er,1));ee(et,-1),ee(et,1);let ea=k(er,et);var en={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},ei={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},eo=new Map;function es(e){return function(r,t){var a,n,i;return a=new Date(new Date(t).setHours(12)),n=r||j(),eo.has(n)||eo.set(n,new Map),(i=eo.get(n)).has(e)||i.set(e,new Intl.DateTimeFormat(n||void 0,e).format),i.get(e)(a)}}es({day:"numeric",month:"numeric",year:"numeric"});var el=es({day:"numeric"}),ec=es({day:"numeric",month:"long",year:"numeric"}),ed=es({month:"long"}),eu=es({month:"long",year:"numeric"}),ep=es({weekday:"short"}),em=es({weekday:"long"}),ef=es({year:"numeric"});function eg(e,r){void 0===r&&(r=en.ISO_8601);var t=e.getDay();switch(r){case en.ISO_8601:return(t+6)%7;case en.ISLAMIC:return(t+1)%7;case en.HEBREW:case en.GREGORY:return t;default:throw Error("Unsupported calendar type.")}}function ev(e,r){return void 0===r&&(r=en.ISO_8601),new Date(T(e),P(e),e.getDate()-eg(e,r))}function eb(e,r){switch(e){case"century":return C(r);case"decade":return M(r);case"year":return q(r);case"month":return H(r);case"day":return er(r);default:throw Error("Invalid rangeType: ".concat(e))}}function eh(e,r){switch(e){case"century":return $(r);case"decade":return A(r);case"year":return W(r);case"month":return Q(r);default:throw Error("Invalid rangeType: ".concat(e))}}function ey(e,r){switch(e){case"century":return _(r);case"decade":return B(r);case"year":return R(r);case"month":return J(r);case"day":return et(r);default:throw Error("Invalid rangeType: ".concat(e))}}function ex(e,r){switch(e){case"century":return L(r);case"decade":return z(r);case"year":return V(r);case"month":return X(r);case"day":return ea(r);default:throw Error("Invalid rangeType: ".concat(e))}}function ew(e,r,t){return t.map(function(t){return(r||ef)(e,t)}).join(" – ")}function ej(e,r){void 0===r&&(r=en.ISO_8601);var t=e.getDay();switch(r){case en.ISLAMIC:case en.HEBREW:return 5===t||6===t;case en.ISO_8601:case en.GREGORY:return 6===t||0===t;default:throw Error("Unsupported calendar type.")}}var eS="react-calendar__navigation";function eD(e){var r,t=e.activeStartDate,n=e.drillUp,i=e.formatMonthYear,o=void 0===i?eu:i,s=e.formatYear,l=void 0===s?ef:s,c=e.locale,d=e.maxDate,u=e.minDate,p=e.navigationAriaLabel,m=e.navigationAriaLive,f=e.navigationLabel,g=e.next2AriaLabel,v=e.next2Label,b=void 0===v?"\xbb":v,h=e.nextAriaLabel,y=e.nextLabel,x=void 0===y?"›":y,w=e.prev2AriaLabel,S=e.prev2Label,D=void 0===S?"\xab":S,k=e.prevAriaLabel,T=e.prevLabel,P=void 0===T?"‹":T,O=e.setActiveStartDate,C=e.showDoubleView,$=e.view,_=e.views.indexOf($)>0,M="century"!==$,B=function(e,r){switch(e){case"century":return I(r);case"decade":return E(r);case"year":return F(r);case"month":return U(r);default:throw Error("Invalid rangeType: ".concat(e))}}($,t),q=M?function(e,r){switch(e){case"decade":return E(r,-100);case"year":return F(r,-10);case"month":return U(r,-12);default:throw Error("Invalid rangeType: ".concat(e))}}($,t):void 0,R=eh($,t),V=M?function(e,r){switch(e){case"decade":return A(r,100);case"year":return W(r,10);case"month":return Q(r,12);default:throw Error("Invalid rangeType: ".concat(e))}}($,t):void 0,G=function(){if(0>B.getFullYear())return!0;var e=function(e,r){switch(e){case"century":return N(r);case"decade":return Z(r);case"year":return Y(r);case"month":return K(r);default:throw Error("Invalid rangeType: ".concat(e))}}($,t);return u&&u>=e}(),H=M&&function(){if(0>q.getFullYear())return!0;var e=function(e,r){switch(e){case"decade":return Z(r,-100);case"year":return Y(r,-10);case"month":return K(r,-12);default:throw Error("Invalid rangeType: ".concat(e))}}($,t);return u&&u>=e}(),J=d&&d<R,X=M&&d&&d<V;function ee(e){var r=function(){switch($){case"century":return ew(c,l,L(e));case"decade":return ew(c,l,z(e));case"year":return l(c,e);case"month":return o(c,e);default:throw Error("Invalid view: ".concat($,"."))}}();return f?f({date:e,label:r,locale:c||j()||void 0,view:$}):r}return(0,a.jsxs)("div",{className:eS,children:[null!==D&&M?(0,a.jsx)("button",{"aria-label":void 0===w?"":w,className:"".concat(eS,"__arrow ").concat(eS,"__prev2-button"),disabled:H,onClick:function(){O(q,"prev2")},type:"button",children:D}):null,null!==P&&(0,a.jsx)("button",{"aria-label":void 0===k?"":k,className:"".concat(eS,"__arrow ").concat(eS,"__prev-button"),disabled:G,onClick:function(){O(B,"prev")},type:"button",children:P}),(r="".concat(eS,"__label"),(0,a.jsxs)("button",{"aria-label":void 0===p?"":p,"aria-live":m,className:r,disabled:!_,onClick:n,style:{flexGrow:1},type:"button",children:[(0,a.jsx)("span",{className:"".concat(r,"__labelText ").concat(r,"__labelText--from"),children:ee(t)}),C?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"".concat(r,"__divider"),children:" – "}),(0,a.jsx)("span",{className:"".concat(r,"__labelText ").concat(r,"__labelText--to"),children:ee(R)})]}):null]})),null!==x&&(0,a.jsx)("button",{"aria-label":void 0===h?"":h,className:"".concat(eS,"__arrow ").concat(eS,"__next-button"),disabled:J,onClick:function(){O(R,"next")},type:"button",children:x}),null!==b&&M?(0,a.jsx)("button",{"aria-label":void 0===g?"":g,className:"".concat(eS,"__arrow ").concat(eS,"__next2-button"),disabled:X,onClick:function(){O(V,"next2")},type:"button",children:b}):null]})}var ek=function(){return(ek=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},eT=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>r.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>r.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};function eP(e){return"".concat(e,"%")}function eO(e){var r=e.children,t=e.className,i=e.count,o=e.direction,s=e.offset,l=e.style,c=e.wrap,d=eT(e,["children","className","count","direction","offset","style","wrap"]);return(0,a.jsx)("div",ek({className:t,style:ek({display:"flex",flexDirection:o,flexWrap:c?"wrap":"nowrap"},l)},d,{children:n.Children.map(r,function(e,r){var t=s&&0===r?eP(100*s/i):null;return(0,n.cloneElement)(e,ek(ek({},e.props),{style:{flexBasis:eP(100/i),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:t,marginInlineStart:t,marginInlineEnd:0}}))})}))}function eC(e,r){return r[0]<=e&&r[1]>=e}function eI(e,r){return eC(e[0],r)||eC(e[1],r)}function e$(e,r,t){var a=eI(r,e),n=[];if(a){n.push(t);var i=eC(e[0],r),o=eC(e[1],r);i&&n.push("".concat(t,"Start")),o&&n.push("".concat(t,"End")),i&&o&&n.push("".concat(t,"BothEnds"))}return n}function e_(e){for(var r=e.className,t=e.count,n=e.dateTransform,i=e.dateType,o=e.end,s=e.hover,l=e.offset,c=e.renderTile,d=e.start,u=e.step,p=void 0===u?1:u,m=e.value,f=e.valueType,g=[],v=d;v<=o;v+=p){var b=n(v);g.push(c({classes:function(e){if(!e)throw Error("args is required");var r=e.value,t=e.date,a=e.hover,n="react-calendar__tile",i=[n];if(!t)return i;var o=new Date,s=function(){if(Array.isArray(t))return t;var r=e.dateType;if(!r)throw Error("dateType is required when date is not an array of two dates");return ex(r,t)}();if(eC(o,s)&&i.push("".concat(n,"--now")),!r||!(Array.isArray(r)?null!==r[0]&&null!==r[1]:null!==r))return i;var l=function(){if(Array.isArray(r))return r;var t=e.valueType;if(!t)throw Error("valueType is required when value is not an array of two dates");return ex(t,r)}();l[0]<=s[0]&&l[1]>=s[1]?i.push("".concat(n,"--active")):eI(l,s)&&i.push("".concat(n,"--hasActive"));var c=e$(l,s,"".concat(n,"--range"));i.push.apply(i,c);var d=Array.isArray(r)?r:[r];if(a&&1===d.length){var u=e$(a>l[0]?[l[0],a]:[a,l[0]],s,"".concat(n,"--hover"));i.push.apply(i,u)}return i}({date:b,dateType:i,hover:s,value:m,valueType:f}),date:b}))}return(0,a.jsx)(eO,{className:r,count:void 0===t?3:t,offset:l,wrap:!0,children:g})}function eN(e){var r=e.activeStartDate,t=e.children,i=e.classes,s=e.date,l=e.formatAbbr,c=e.locale,d=e.maxDate,u=e.maxDateTransform,p=e.minDate,m=e.minDateTransform,f=e.onClick,g=e.onMouseOver,v=e.style,b=e.tileClassName,h=e.tileContent,y=e.tileDisabled,x=e.view,w=(0,n.useMemo)(function(){return"function"==typeof b?b({activeStartDate:r,date:s,view:x}):b},[r,s,b,x]),j=(0,n.useMemo)(function(){return"function"==typeof h?h({activeStartDate:r,date:s,view:x}):h},[r,s,h,x]);return(0,a.jsxs)("button",{className:o(i,w),disabled:p&&m(p)>s||d&&u(d)<s||(null==y?void 0:y({activeStartDate:r,date:s,view:x})),onClick:f?function(e){return f(s,e)}:void 0,onFocus:g?function(){return g(s)}:void 0,onMouseOver:g?function(){return g(s)}:void 0,style:v,type:"button",children:[l?(0,a.jsx)("abbr",{"aria-label":l(c,s),children:t}):t,j]})}var eL=function(){return(eL=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},eM=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>r.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>r.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t},eE="react-calendar__century-view__decades__decade";function eA(e){var r=e.classes,t=void 0===r?[]:r,n=e.currentCentury,i=e.formatYear,o=eM(e,["classes","currentCentury","formatYear"]),s=o.date,l=o.locale,c=[];return t&&c.push.apply(c,t),eE&&c.push(eE),C(s).getFullYear()!==n&&c.push("".concat(eE,"--neighboringCentury")),(0,a.jsx)(eN,eL({},o,{classes:c,maxDateTransform:B,minDateTransform:M,view:"century",children:ew(l,void 0===i?ef:i,z(s))}))}var eB=function(){return(eB=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},eZ=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>r.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>r.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};function ez(e){var r=e.activeStartDate,t=e.hover,n=e.showNeighboringCentury,i=e.value,o=e.valueType,s=eZ(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),l=T(C(r)),c=l+(n?119:99);return(0,a.jsx)(e_,{className:"react-calendar__century-view__decades",dateTransform:M,dateType:"decade",end:c,hover:t,renderTile:function(e){var t=e.date,n=eZ(e,["date"]);return(0,a.jsx)(eA,eB({},s,n,{activeStartDate:r,currentCentury:l,date:t}),t.getTime())},start:l,step:10,value:i,valueType:o})}var eq=function(){return(eq=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)};function eF(e){return(0,a.jsx)("div",{className:"react-calendar__century-view",children:(0,a.jsx)(ez,eq({},e))})}var eW=function(){return(eW=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},eR=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>r.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>r.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t},eY="react-calendar__decade-view__years__year";function eV(e){var r=e.classes,t=void 0===r?[]:r,n=e.currentDecade,i=e.formatYear,o=void 0===i?ef:i,s=eR(e,["classes","currentDecade","formatYear"]),l=s.date,c=s.locale,d=[];return t&&d.push.apply(d,t),eY&&d.push(eY),M(l).getFullYear()!==n&&d.push("".concat(eY,"--neighboringDecade")),(0,a.jsx)(eN,eW({},s,{classes:d,maxDateTransform:R,minDateTransform:q,view:"decade",children:o(c,l)}))}var eG=function(){return(eG=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},eH=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>r.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>r.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};function eU(e){var r=e.activeStartDate,t=e.hover,n=e.showNeighboringDecade,i=e.value,o=e.valueType,s=eH(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),l=T(M(r)),c=l+(n?11:9);return(0,a.jsx)(e_,{className:"react-calendar__decade-view__years",dateTransform:q,dateType:"year",end:c,hover:t,renderTile:function(e){var t=e.date,n=eH(e,["date"]);return(0,a.jsx)(eV,eG({},s,n,{activeStartDate:r,currentDecade:l,date:t}),t.getTime())},start:l,value:i,valueType:o})}var eQ=function(){return(eQ=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)};function eJ(e){return(0,a.jsx)("div",{className:"react-calendar__decade-view",children:(0,a.jsx)(eU,eQ({},e))})}var eK=function(){return(eK=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},eX=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>r.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>r.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t},e0=function(e,r,t){if(t||2==arguments.length)for(var a,n=0,i=r.length;n<i;n++)!a&&n in r||(a||(a=Array.prototype.slice.call(r,0,n)),a[n]=r[n]);return e.concat(a||Array.prototype.slice.call(r))};function e1(e){var r=e.classes,t=e.formatMonth,n=e.formatMonthYear,i=eX(e,["classes","formatMonth","formatMonthYear"]),o=i.date,s=i.locale;return(0,a.jsx)(eN,eK({},i,{classes:e0(e0([],void 0===r?[]:r,!0),["react-calendar__year-view__months__month"],!1),formatAbbr:void 0===n?eu:n,maxDateTransform:J,minDateTransform:H,view:"year",children:(void 0===t?ed:t)(s,o)}))}var e2=function(){return(e2=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},e3=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>r.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>r.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};function e5(e){var r=e.activeStartDate,t=e.hover,n=e.value,i=e.valueType,o=e3(e,["activeStartDate","hover","value","valueType"]),s=T(r);return(0,a.jsx)(e_,{className:"react-calendar__year-view__months",dateTransform:function(e){var r=new Date;return r.setFullYear(s,e,1),H(r)},dateType:"month",end:11,hover:t,renderTile:function(e){var t=e.date,n=e3(e,["date"]);return(0,a.jsx)(e1,e2({},o,n,{activeStartDate:r,date:t}),t.getTime())},start:0,value:n,valueType:i})}var e8=function(){return(e8=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)};function e6(e){return(0,a.jsx)("div",{className:"react-calendar__year-view",children:(0,a.jsx)(e5,e8({},e))})}var e4=function(){return(e4=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},e7=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>r.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>r.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t},e9="react-calendar__month-view__days__day";function re(e){var r=e.calendarType,t=e.classes,n=void 0===t?[]:t,i=e.currentMonthIndex,o=e.formatDay,s=e.formatLongDate,l=e7(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),c=l.date,d=l.locale,u=[];return n&&u.push.apply(u,n),e9&&u.push(e9),ej(c,r)&&u.push("".concat(e9,"--weekend")),c.getMonth()!==i&&u.push("".concat(e9,"--neighboringMonth")),(0,a.jsx)(eN,e4({},l,{classes:u,formatAbbr:void 0===s?ec:s,maxDateTransform:et,minDateTransform:er,view:"month",children:(void 0===o?el:o)(d,c)}))}var rr=function(){return(rr=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},rt=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>r.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>r.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};function ra(e){var r=e.activeStartDate,t=e.calendarType,n=e.hover,i=e.showFixedNumberOfWeeks,o=e.showNeighboringMonth,s=e.value,l=e.valueType,c=rt(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),d=T(r),u=P(r),p=i||o,m=eg(r,t),f=(p?-m:0)+1,g=function(){if(i)return f+42-1;var e=O(J(r));if(o){var a=new Date;return a.setFullYear(d,u,e),a.setHours(0,0,0,0),e+(7-eg(a,t)-1)}return e}();return(0,a.jsx)(e_,{className:"react-calendar__month-view__days",count:7,dateTransform:function(e){var r=new Date;return r.setFullYear(d,u,e),er(r)},dateType:"day",hover:n,end:g,renderTile:function(e){var n=e.date,i=rt(e,["date"]);return(0,a.jsx)(re,rr({},c,i,{activeStartDate:r,calendarType:t,currentMonthIndex:u,date:n}),n.getTime())},offset:p?0:m,start:f,value:s,valueType:l})}var rn="react-calendar__month-view__weekdays",ri="".concat(rn,"__weekday");function ro(e){for(var r=e.calendarType,t=e.formatShortWeekday,n=void 0===t?ep:t,i=e.formatWeekday,s=void 0===i?em:i,l=e.locale,c=e.onMouseLeave,d=H(new Date),u=T(d),p=P(d),m=[],f=1;f<=7;f+=1){var g=new Date(u,p,f-eg(d,r)),v=s(l,g);m.push((0,a.jsx)("div",{className:o(ri,g.getDay()===new Date().getDay()&&"".concat(ri,"--current"),ej(g,r)&&"".concat(ri,"--weekend")),children:(0,a.jsx)("abbr",{"aria-label":v,title:v,children:n(l,g).replace(".","")})},f))}return(0,a.jsx)(eO,{className:rn,count:7,onFocus:c,onMouseOver:c,children:m})}var rs=function(){return(rs=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},rl=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>r.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>r.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t},rc="react-calendar__tile";function rd(e){var r=e.onClickWeekNumber,t=e.weekNumber,n=(0,a.jsx)("span",{children:t});if(r){var i=e.date,o=e.onClickWeekNumber,s=e.weekNumber,l=rl(e,["date","onClickWeekNumber","weekNumber"]);return(0,a.jsx)("button",rs({},l,{className:rc,onClick:function(e){return o(s,i,e)},type:"button",children:n}))}e.date,e.onClickWeekNumber,e.weekNumber;var l=rl(e,["date","onClickWeekNumber","weekNumber"]);return(0,a.jsx)("div",rs({},l,{className:rc,children:n}))}function ru(e){var r=e.activeStartDate,t=e.calendarType,n=e.onClickWeekNumber,i=e.onMouseLeave,o=e.showFixedNumberOfWeeks?6:1+Math.ceil((O(J(r))-(7-eg(r,t)))/7),s=function(){for(var e=T(r),a=P(r),n=O(r),i=[],s=0;s<o;s+=1)i.push(ev(new Date(e,a,n+7*s),t));return i}(),l=s.map(function(e){return function(e,r){void 0===r&&(r=en.ISO_8601);var t,a=r===en.GREGORY?en.GREGORY:en.ISO_8601,n=ev(e,r),i=T(e)+1;do t=ev(new Date(i,0,a===en.ISO_8601?4:1),r),i-=1;while(e<t);return Math.round((n.getTime()-t.getTime())/(864e5*7))+1}(e,t)});return(0,a.jsx)(eO,{className:"react-calendar__month-view__weekNumbers",count:o,direction:"column",onFocus:i,onMouseOver:i,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:l.map(function(e,r){var t=s[r];if(!t)throw Error("date is not defined");return(0,a.jsx)(rd,{date:t,onClickWeekNumber:n,weekNumber:e},e)})})}var rp=function(){return(rp=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},rm=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>r.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)0>r.indexOf(a[n])&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};function rf(e){var r=e.activeStartDate,t=e.locale,n=e.onMouseLeave,i=e.showFixedNumberOfWeeks,s=e.calendarType,l=void 0===s?function(e){if(e)for(var r=0,t=Object.entries(ei);r<t.length;r++){var a=t[r],n=a[0];if(a[1].includes(e))return n}return en.ISO_8601}(t):s,c=e.formatShortWeekday,d=e.formatWeekday,u=e.onClickWeekNumber,p=e.showWeekNumbers,m=rm(e,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]),f="react-calendar__month-view";return(0,a.jsx)("div",{className:o(f,p?"".concat(f,"--weekNumbers"):""),children:(0,a.jsxs)("div",{style:{display:"flex",alignItems:"flex-end"},children:[p?(0,a.jsx)(ru,{activeStartDate:r,calendarType:l,onClickWeekNumber:u,onMouseLeave:n,showFixedNumberOfWeeks:i}):null,(0,a.jsxs)("div",{style:{flexGrow:1,width:"100%"},children:[(0,a.jsx)(ro,{calendarType:l,formatShortWeekday:c,formatWeekday:d,locale:t,onMouseLeave:n}),(0,a.jsx)(ra,rp({calendarType:l},m))]})]})})}var rg=function(){return(rg=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e}).apply(this,arguments)},rv="react-calendar",rb=["century","decade","year","month"],rh=["decade","year","month","day"],ry=new Date;ry.setFullYear(1,0,1),ry.setHours(0,0,0,0);var rx=new Date(864e13);function rw(e){return e instanceof Date?e:new Date(e)}function rj(e,r){return rb.slice(rb.indexOf(e),rb.indexOf(r)+1)}function rS(e,r,t){return e&&-1!==rj(r,t).indexOf(e)?e:t}function rD(e){return rh[rb.indexOf(e)]}function rk(e,r){var t,a=e.value,n=e.minDate,i=e.maxDate,o=e.maxDetail,s=function(e,r){var t=Array.isArray(e)?e[r]:e;if(!t)return null;var a=rw(t);if(Number.isNaN(a.getTime()))throw Error("Invalid date: ".concat(e));return a}(a,r);if(!s)return null;var l=rD(o);return t=function(){switch(r){case 0:return eb(l,s);case 1:return ey(l,s);default:throw Error("Invalid index value: ".concat(r))}}(),n&&n>t?n:i&&i<t?i:t}var rT=function(e){return rk(e,0)},rP=function(e){return rk(e,1)},rO=function(e){return[rT,rP].map(function(r){return r(e)})};function rC(e){var r=e.maxDate,t=e.maxDetail,a=e.minDate,n=e.minDetail,i=e.value;return eb(rS(e.view,n,t),rT({value:i,minDate:a,maxDate:r,maxDetail:t})||new Date)}function rI(e){return e&&(!Array.isArray(e)||1===e.length)}function r$(e,r){return e instanceof Date&&r instanceof Date&&e.getTime()===r.getTime()}var r_=(0,n.forwardRef)(function(e,r){var t,i,s,l,c,d,u,p,m,f,g,v,b,h,y=e.activeStartDate,x=e.allowPartialRange,w=e.calendarType,j=e.className,S=e.defaultActiveStartDate,D=e.defaultValue,k=e.defaultView,T=e.formatDay,P=e.formatLongDate,O=e.formatMonth,C=e.formatMonthYear,I=e.formatShortWeekday,$=e.formatWeekday,_=e.formatYear,N=e.goToRangeStartOnSelect,L=void 0===N||N,M=e.inputRef,E=e.locale,A=e.maxDate,B=void 0===A?rx:A,Z=e.maxDetail,z=void 0===Z?"month":Z,q=e.minDate,F=void 0===q?ry:q,W=e.minDetail,R=void 0===W?"century":W,Y=e.navigationAriaLabel,V=e.navigationAriaLive,G=e.navigationLabel,H=e.next2AriaLabel,U=e.next2Label,Q=e.nextAriaLabel,J=e.nextLabel,K=e.onActiveStartDateChange,X=e.onChange,ee=e.onClickDay,er=e.onClickDecade,et=e.onClickMonth,ea=e.onClickWeekNumber,en=e.onClickYear,ei=e.onDrillDown,eo=e.onDrillUp,es=e.onViewChange,el=e.prev2AriaLabel,ec=e.prev2Label,ed=e.prevAriaLabel,eu=e.prevLabel,ep=e.returnValue,em=void 0===ep?"start":ep,ef=e.selectRange,eg=e.showDoubleView,ev=e.showFixedNumberOfWeeks,ex=e.showNavigation,ew=e.showNeighboringCentury,ej=e.showNeighboringDecade,eS=e.showNeighboringMonth,ek=void 0===eS||eS,eT=e.showWeekNumbers,eP=e.tileClassName,eO=e.tileContent,eC=e.tileDisabled,eI=e.value,e$=e.view,e_=(0,n.useState)(S),eN=e_[0],eL=e_[1],eM=(0,n.useState)(null),eE=eM[0],eA=eM[1],eB=(0,n.useState)(Array.isArray(D)?D.map(function(e){return null!==e?rw(e):null}):null!=D?rw(D):null),eZ=eB[0],ez=eB[1],eq=(0,n.useState)(k),eW=eq[0],eR=eq[1],eY=y||eN||(i=(t={activeStartDate:y,defaultActiveStartDate:S,defaultValue:D,defaultView:k,maxDate:B,maxDetail:z,minDate:F,minDetail:R,value:eI,view:e$}).activeStartDate,s=t.defaultActiveStartDate,l=t.defaultValue,c=t.defaultView,d=t.maxDate,u=t.maxDetail,p=t.minDate,m=t.minDetail,f=t.value,v=rS(g=t.view,m,u),(b=i||s)?eb(v,b):rC({maxDate:d,maxDetail:u,minDate:p,minDetail:m,value:f||l,view:g||c})),eV=(h=ef&&rI(eZ)?eZ:void 0!==eI?eI:eZ)?Array.isArray(h)?h.map(function(e){return null!==e?rw(e):null}):null!==h?rw(h):null:null,eG=rD(z),eH=rS(e$||eW,R,z),eU=rj(R,z),eQ=ef?eE:null,eK=eU.indexOf(eH)<eU.length-1,eX=eU.indexOf(eH)>0,e0=(0,n.useCallback)(function(e){return(function(){switch(em){case"start":return rT;case"end":return rP;case"range":return rO;default:throw Error("Invalid returnValue.")}})()({maxDate:B,maxDetail:z,minDate:F,value:e})},[B,z,F,em]),e1=(0,n.useCallback)(function(e,r){eL(e),K&&!r$(eY,e)&&K({action:r,activeStartDate:e,value:eV,view:eH})},[eY,K,eV,eH]),e2=(0,n.useCallback)(function(e,r){var t=function(){switch(eH){case"century":return er;case"decade":return en;case"year":return et;case"month":return ee;default:throw Error("Invalid view: ".concat(eH,"."))}}();t&&t(e,r)},[ee,er,et,en,eH]),e3=(0,n.useCallback)(function(e,r){if(eK){e2(e,r);var t=eU[eU.indexOf(eH)+1];if(!t)throw Error("Attempted to drill down from the lowest view.");eL(e),eR(t);var a={action:"drillDown",activeStartDate:e,value:eV,view:t};K&&!r$(eY,e)&&K(a),es&&eH!==t&&es(a),ei&&ei(a)}},[eY,eK,K,e2,ei,es,eV,eH,eU]),e5=(0,n.useCallback)(function(){if(eX){var e=eU[eU.indexOf(eH)-1];if(!e)throw Error("Attempted to drill up from the highest view.");var r=eb(e,eY);eL(r),eR(e);var t={action:"drillUp",activeStartDate:r,value:eV,view:e};K&&!r$(eY,r)&&K(t),es&&eH!==e&&es(t),eo&&eo(t)}},[eY,eX,K,eo,es,eV,eH,eU]),e8=(0,n.useCallback)(function(e,r){e2(e,r);var t,a,n=ef&&!rI(eV);if(ef){if(n)t=eb(eG,e);else{if(!eV)throw Error("previousValue is required");if(Array.isArray(eV))throw Error("previousValue must not be an array");t=[eb(eG,(a=[eV,e].sort(function(e,r){return e.getTime()-r.getTime()}))[0]),ey(eG,a[1])]}}else t=e0(e);var i=!ef||n||L?rC({maxDate:B,maxDetail:z,minDate:F,minDetail:R,value:t,view:eH}):null;r.persist(),eL(i),ez(t);var o={action:"onChange",activeStartDate:i,value:t,view:eH};if(K&&!r$(eY,i)&&K(o),X){if(ef){if(rI(t)){if(x){if(Array.isArray(t))throw Error("value must not be an array");X([t||null,null],r)}}else X(t||null,r)}else X(t||null,r)}},[eY,x,e0,L,B,z,F,R,K,X,e2,ef,eV,eG,eH]);function e4(e){eA(e)}function e7(){eA(null)}function e9(e){var r={activeStartDate:e?eh(eH,eY):eb(eH,eY),hover:eQ,locale:E,maxDate:B,minDate:F,onClick:eK?e3:e8,onMouseOver:ef?e4:void 0,tileClassName:eP,tileContent:eO,tileDisabled:eC,value:eV,valueType:eG};switch(eH){case"century":return(0,a.jsx)(eF,rg({formatYear:_,showNeighboringCentury:ew},r));case"decade":return(0,a.jsx)(eJ,rg({formatYear:_,showNeighboringDecade:ej},r));case"year":return(0,a.jsx)(e6,rg({formatMonth:O,formatMonthYear:C},r));case"month":return(0,a.jsx)(rf,rg({calendarType:w,formatDay:T,formatLongDate:P,formatShortWeekday:I,formatWeekday:$,onClickWeekNumber:ea,onMouseLeave:ef?e7:void 0,showFixedNumberOfWeeks:void 0!==ev?ev:eg,showNeighboringMonth:ek,showWeekNumbers:eT},r));default:throw Error("Invalid view: ".concat(eH,"."))}}(0,n.useImperativeHandle)(r,function(){return{activeStartDate:eY,drillDown:e3,drillUp:e5,onChange:e8,setActiveStartDate:e1,value:eV,view:eH}},[eY,e3,e5,e8,e1,eV,eH]);var re=Array.isArray(eV)?eV:[eV];return(0,a.jsxs)("div",{className:o(rv,ef&&1===re.length&&"".concat(rv,"--selectRange"),eg&&"".concat(rv,"--doubleView"),j),ref:M,children:[void 0===ex||ex?(0,a.jsx)(eD,{activeStartDate:eY,drillUp:e5,formatMonthYear:C,formatYear:_,locale:E,maxDate:B,minDate:F,navigationAriaLabel:Y,navigationAriaLive:V,navigationLabel:G,next2AriaLabel:H,next2Label:U,nextAriaLabel:Q,nextLabel:J,prev2AriaLabel:el,prev2Label:ec,prevAriaLabel:ed,prevLabel:eu,setActiveStartDate:e1,showDoubleView:eg,view:eH,views:eU}):null,(0,a.jsxs)("div",{className:"".concat(rv,"__viewContainer"),onBlur:ef?e7:void 0,onMouseLeave:ef?e7:void 0,children:[e9(),eg?e9(!0):null]})]})});t(86648);let rN={loadingMessage:"Cargando informaci\xf3n del usuario...",authErrorMessage:"Debes iniciar sesi\xf3n para hacer una reserva.",pageTitle:"Reserva de Servicios",pageSubtitle:"Selecciona las opciones para tu reserva",userInfo:"Usuario",step1:"1",step2:"2",step3:"3",step4:"4",step5:"\uD83D\uDCB3",step1Title:"Paso 1: Tipo de Reserva",workTypeTitle:"Instalaci\xf3n",workTypeDescription:"Quiero el trabajo de instalaci\xf3n directamente sin necesidad de medici\xf3n previa",measurementTvTypeTitle:"Tomar Medidas - TV",measurementTvTypeDescription:"Necesito medici\xf3n espec\xedfica para muebles de televisi\xf3n",quotationTypeTitle:"Mirar Trabajo para Cotizaci\xf3n",quotationTypeDescription:"Evaluaci\xf3n previa para cotizaci\xf3n de servicios",step2Title:"Paso 2: Selecciona un Servicio",step3Title:"Paso 3: Opciones del Servicio",optionsTitle:"Selecciona las opciones que necesitas:",materialGalleryTitle:"Selecciona Material (REQUERIDO)",materialRequiredWarning:"⚠️ Debes seleccionar una imagen de cada material para continuar",step4Title:"Paso 4: Fecha y Hora",selectDateTitle:"Selecciona una fecha",availableTimesTitle:"Hora disponible",selectedDateLabel:"Fecha seleccionada",closedDayMessage:"No atendemos los domingos. Por favor selecciona un d\xeda de lunes a s\xe1bado.",step5Title:"Paso 5: Confirmaci\xf3n y Pago",checkoutSummaryTitle:"\uD83D\uDCCB Resumen de tu reserva",checkoutTypeLabel:"Tipo:",checkoutServiceLabel:"Servicio:",checkoutOptionsLabel:"Opciones:",checkoutMaterialLabel:"Material:",checkoutDateLabel:"Fecha:",checkoutTimeLabel:"Hora:",checkoutClientLabel:"Cliente:",checkoutContactLabel:"Contacto:",depositTitle:"Dep\xf3sito para separar la fecha",depositNote:"Este monto se descuenta del total del servicio el d\xeda del trabajo",verifyingPayment:"Verificando sistema de pago...",stripeActiveLabel:"\uD83D\uDFE2 Pagos en l\xednea activos",stripeInactiveLabel:"\uD83D\uDFE1 Pagos en l\xednea pr\xf3ximamente",payButtonStripe:e=>`💳 Pagar ${e} y confirmar reserva`,payButtonPending:"\uD83D\uDCCB Confirmar y guardar reserva",savingBooking:"Guardando reserva...",redirectingPayment:"Redirigiendo a pago seguro...",stripeSecureNote:"Pago seguro procesado por Stripe. Tu informaci\xf3n de tarjeta nunca es almacenada en nuestros servidores. El dep\xf3sito se descuenta del total del servicio.",pendingPaymentNote:e=>`Los pagos en l\xednea estar\xe1n disponibles pronto. Tu reserva quedar\xe1 guardada y te contactaremos para coordinar el pago del dep\xf3sito de separaci\xf3n ${e} por otro medio.`,bookingIdLabel:"ID de reserva:",checkoutToNextStep:"Continuar al checkout →",backButton:"Anterior",continueButton:"Continuar →",processingButton:"Procesando...",confirmButton:"Confirmar Reserva",successTitle:"\xa1Reserva Confirmada!",successMessage:e=>`Gracias ${e}, tu reserva ha sido creada exitosamente.`,summaryTitle:"Resumen de tu Reserva",typeLabel:"Tipo:",workType:"Instalaci\xf3n",measurementTvType:"Medici\xf3n TV",quotationType:"Cotizaci\xf3n",serviceLabel:"Servicio:",optionsLabel:"Opciones Seleccionadas:",materialLabel:"Material:",imagesSelectedLabel:"Im\xe1genes Seleccionadas:",dateLabel:"Fecha:",timeLabel:"Hora:",paymentStatusLabel:"Estado:",paymentStatusPending:"\uD83D\uDCCB Reserva guardada — Pago pendiente",paymentStatusConfirmed:"✅ Reserva confirmada",emailSentMessage:e=>`Se ha enviado un correo de confirmaci\xf3n a ${e}`,googleCalendarButton:"\uD83D\uDCC5 Agregar a Google Calendar",anotherBookingButton:"Crear Nueva Reserva",emailServiceType:"Tipo de servicio:",emailService:"Servicio:",emailOptions:"Opciones:",emailMaterial:"Material:",emailImages:"Im\xe1genes Seleccionadas:",emailClient:"Cliente:",emailEmail:"Email:",emailPhone:"Tel\xe9fono:",emailNotAvailable:"No disponible",phoneNotAvailable:"No disponible",services:{"furniture-tv":{name:"Muebles para Televisi\xf3n",description:"Instalaci\xf3n y montaje de muebles para TV - Servicio m\xe1s demandado"},painting:{name:"Pintura",description:"Servicios profesionales de pintura interior y exterior"},flooring:{name:"Instalaci\xf3n de Pisos Laminados",description:"Instalaci\xf3n profesional de pisos laminados y cer\xe1micos"},cleaning:{name:"Limpieza Profesional",description:"Servicios de limpieza post-construcci\xf3n y mantenimiento"},"general-work":{name:"Trabajos Generales",description:"Reparaciones y mantenimiento general del hogar"},"furniture-tv-measure":{name:"Muebles para Televisi\xf3n - Medici\xf3n",description:"Toma de medidas para instalaci\xf3n de muebles TV"},"painting-quote":{name:"Pintura - Cotizaci\xf3n",description:"Evaluaci\xf3n para servicios de pintura"},"flooring-quote":{name:"Pisos - Cotizaci\xf3n",description:"Evaluaci\xf3n para instalaci\xf3n de pisos"},"cleaning-quote":{name:"Limpieza - Cotizaci\xf3n",description:"Evaluaci\xf3n para servicios de limpieza"},"general-work-quote":{name:"Trabajos Generales - Cotizaci\xf3n",description:"Evaluaci\xf3n para trabajos generales"}},subServices:{"tv-mount":"Montura para TV","marble-panel":"Instalaci\xf3n panel tipo m\xe1rmol","wood-panel":"Instalaci\xf3n panel tipo madera","elevated-furniture":"Instalaci\xf3n mueble elevado","led-lights":"Instalaci\xf3n luces LED","all-services":"Todas las anteriores","interior-basic":"Pintura interior - B\xe1sica","interior-premium":"Pintura interior - Premium","exterior-basic":"Pintura exterior - B\xe1sica","exterior-weatherproof":"Pintura exterior - Anticlim\xe1tica",ceiling:"Pintura de cielo raso",trim:"Pintura de z\xf3calos y molduras","laminate-install":"Instalaci\xf3n de laminado","subfloor-prep":"Preparaci\xf3n de subpiso",baseboards:"Instalaci\xf3n de z\xf3calos","post-construction":"Limpieza post-construcci\xf3n","deep-clean":"Limpieza profunda",maintenance:"Limpieza de mantenimiento",repairs:"Reparaciones varias",assembly:"Ensamblaje de muebles",installation:"Instalaciones varias","measure-tv":"Medici\xf3n para montura TV","measure-wall":"Medici\xf3n de pared","measure-space":"Medici\xf3n de espacio","assess-area":"Evaluaci\xf3n del \xe1rea","material-estimate":"Estimado de materiales","floor-measure":"Medici\xf3n de \xe1rea","subfloor-check":"Evaluaci\xf3n de subpiso","space-assessment":"Evaluaci\xf3n del espacio","cleaning-type":"Tipo de limpieza","work-assessment":"Evaluaci\xf3n de trabajos","material-list":"Lista de materiales"},subServiceDescriptions:{"tv-mount":"Fijaci\xf3n segura de montura","marble-panel":"Panel decorativo tipo m\xe1rmol","wood-panel":"Panel decorativo tipo madera","elevated-furniture":"Mueble elevado para TV","led-lights":"Iluminaci\xf3n LED ambiental","all-services":"Incluye todos los servicios de TV","interior-basic":"2 manos de pintura en paredes interiores","interior-premium":"Capa base + acabado premium interior","exterior-basic":"Pintura de fachada est\xe1ndar","exterior-weatherproof":"Protecci\xf3n clim\xe1tica avanzada",ceiling:"Techos y cielos rasos",trim:"Acabado en detalles y molduras","laminate-install":"Pisos laminados flotantes","subfloor-prep":"Nivelaci\xf3n y preparaci\xf3n",baseboards:"Z\xf3calos y terminaciones","post-construction":"Limpieza profunda despu\xe9s de obras","deep-clean":"Limpieza integral del hogar",maintenance:"Limpieza regular y mantenimiento",repairs:"Peque\xf1as reparaciones del hogar",assembly:"Montaje de muebles y equipos",installation:"Instalaci\xf3n de accesorios y equipos","measure-tv":"Medir espacio y soporte para TV","measure-wall":"Verificar tipo de pared y resistencia","measure-space":"Medir dimensiones del \xe1rea","assess-area":"Medir superficie y estado de paredes","material-estimate":"Calcular tipo y cantidad de pintura","floor-measure":"Calcular metros cuadrados","subfloor-check":"Revisar estado del subpiso","space-assessment":"Tama\xf1o y estado del \xe1rea","cleaning-type":"Determinar nivel de limpieza","work-assessment":"Identificar trabajos a realizar","material-list":"Materiales necesarios"},materials:{"marble-panels":"Panel Tipo M\xe1rmol","wood-panels":"Panel Tipo Madera","led-lights":"Luces LED"},timeSlots:{"08:00":"08:00","09:00":"09:00","10:00":"10:00","11:00":"11:00","12:00":"12:00","13:00":"13:00","14:00":"14:00","15:00":"15:00","16:00":"16:00","17:00":"17:00","18:00":"18:00"}},rL={loadingMessage:"Loading user information...",authErrorMessage:"You must be logged in to make a booking.",pageTitle:"Book Your Appointment",pageSubtitle:"Select the options for your booking",userInfo:"User",step1:"1",step2:"2",step3:"3",step4:"4",step5:"\uD83D\uDCB3",step1Title:"Step 1: Booking Type",workTypeTitle:"Installation",workTypeDescription:"I want the installation work directly without prior measurement",measurementTvTypeTitle:"Take Measurements - TV",measurementTvTypeDescription:"I need specific measurements for TV furniture",quotationTypeTitle:"View Work for Quotation",quotationTypeDescription:"Prior evaluation for service quotation",step2Title:"Step 2: Select a Service",step3Title:"Step 3: Service Options",optionsTitle:"Select the options you need:",materialGalleryTitle:"Select Material (REQUIRED)",materialRequiredWarning:"⚠️ You must select an image for each material to continue",step4Title:"Step 4: Date and Time",selectDateTitle:"Select a date",availableTimesTitle:"Available time",selectedDateLabel:"Selected date",closedDayMessage:"We are closed on Sundays. Please select a day from Monday to Saturday.",step5Title:"Step 5: Confirmation & Payment",checkoutSummaryTitle:"\uD83D\uDCCB Booking Summary",checkoutTypeLabel:"Type:",checkoutServiceLabel:"Service:",checkoutOptionsLabel:"Options:",checkoutMaterialLabel:"Material:",checkoutDateLabel:"Date:",checkoutTimeLabel:"Time:",checkoutClientLabel:"Client:",checkoutContactLabel:"Contact:",depositTitle:"Deposit to hold your date",depositNote:"This amount is deducted from the total service cost on the day of work",verifyingPayment:"Verifying payment system...",stripeActiveLabel:"\uD83D\uDFE2 Online payments active",stripeInactiveLabel:"\uD83D\uDFE1 Online payments coming soon",payButtonStripe:e=>`💳 Pay ${e} and confirm booking`,payButtonPending:"\uD83D\uDCCB Confirm and save booking",savingBooking:"Saving booking...",redirectingPayment:"Redirecting to secure payment...",stripeSecureNote:"Secure payment processed by Stripe. Your card information is never stored on our servers. The deposit is deducted from the total service cost.",pendingPaymentNote:e=>`Online payments will be available soon. Your booking will be saved and we will contact you to coordinate the ${e} deposit payment through another method.`,bookingIdLabel:"Booking ID:",checkoutToNextStep:"Continue to checkout →",backButton:"Back",continueButton:"Continue →",processingButton:"Processing...",confirmButton:"Confirm Booking",successTitle:"Booking Confirmed!",successMessage:e=>`Thank you ${e}, your booking has been created successfully.`,summaryTitle:"Booking Summary",typeLabel:"Type:",workType:"Installation",measurementTvType:"TV Measurement",quotationType:"Quotation",serviceLabel:"Service:",optionsLabel:"Selected Options:",materialLabel:"Material:",imagesSelectedLabel:"Images Selected:",dateLabel:"Date:",timeLabel:"Time:",paymentStatusLabel:"Status:",paymentStatusPending:"\uD83D\uDCCB Booking saved — Payment pending",paymentStatusConfirmed:"✅ Booking confirmed",emailSentMessage:e=>`A confirmation email has been sent to ${e}`,googleCalendarButton:"\uD83D\uDCC5 Add to Google Calendar",anotherBookingButton:"Create New Booking",emailServiceType:"Service type:",emailService:"Service:",emailOptions:"Options:",emailMaterial:"Material:",emailImages:"Images Selected:",emailClient:"Client:",emailEmail:"Email:",emailPhone:"Phone:",emailNotAvailable:"Not available",phoneNotAvailable:"Not available",services:{"furniture-tv":{name:"TV Furniture",description:"Installation and assembly of TV furniture - Most requested service"},painting:{name:"Painting",description:"Professional interior and exterior painting services"},flooring:{name:"Laminate Flooring Installation",description:"Professional installation of laminate and ceramic floors"},cleaning:{name:"Professional Cleaning",description:"Post-construction cleaning and maintenance services"},"general-work":{name:"General Work",description:"Home repairs and general maintenance"},"furniture-tv-measure":{name:"TV Furniture - Measurement",description:"Taking measurements for TV furniture installation"},"painting-quote":{name:"Painting - Quotation",description:"Evaluation for painting services"},"flooring-quote":{name:"Flooring - Quotation",description:"Evaluation for flooring installation"},"cleaning-quote":{name:"Cleaning - Quotation",description:"Evaluation for cleaning services"},"general-work-quote":{name:"General Work - Quotation",description:"Evaluation for general work"}},subServices:{"tv-mount":"TV Mount","marble-panel":"Marble Panel Installation","wood-panel":"Wood Panel Installation","elevated-furniture":"Elevated Furniture Installation","led-lights":"LED Lights Installation","all-services":"All of the above","interior-basic":"Interior Painting - Basic","interior-premium":"Interior Painting - Premium","exterior-basic":"Exterior Painting - Basic","exterior-weatherproof":"Exterior Painting - Weatherproof",ceiling:"Ceiling Painting",trim:"Baseboards and Trim Painting","laminate-install":"Laminate Installation","subfloor-prep":"Subfloor Preparation",baseboards:"Baseboards Installation","post-construction":"Post-Construction Cleaning","deep-clean":"Deep Cleaning",maintenance:"Maintenance Cleaning",repairs:"Various Repairs",assembly:"Furniture Assembly",installation:"Various Installations","measure-tv":"TV Mount Measurement","measure-wall":"Wall Measurement","measure-space":"Space Measurement","assess-area":"Area Assessment","material-estimate":"Material Estimate","floor-measure":"Floor Measurement","subfloor-check":"Subfloor Check","space-assessment":"Space Assessment","cleaning-type":"Cleaning Type","work-assessment":"Work Assessment","material-list":"Material List"},subServiceDescriptions:{"tv-mount":"Secure TV mount installation","marble-panel":"Decorative marble-style panel","wood-panel":"Decorative wood-style panel","elevated-furniture":"Elevated TV furniture installation","led-lights":"Ambient LED lighting","all-services":"Includes all TV services","interior-basic":"2 coats of paint on interior walls","interior-premium":"Base coat + premium interior finish","exterior-basic":"Standard facade painting","exterior-weatherproof":"Advanced weather protection",ceiling:"Ceilings and false ceilings",trim:"Finish on details and moldings","laminate-install":"Floating laminate floors","subfloor-prep":"Leveling and preparation",baseboards:"Baseboards and finishings","post-construction":"Deep cleaning after construction work","deep-clean":"Comprehensive home cleaning",maintenance:"Regular cleaning and maintenance",repairs:"Small home repairs",assembly:"Furniture and equipment assembly",installation:"Accessories and equipment installation","measure-tv":"Measure space and TV support","measure-wall":"Check wall type and resistance","measure-space":"Measure area dimensions","assess-area":"Measure surface and wall condition","material-estimate":"Calculate paint type and quantity","floor-measure":"Calculate square meters","subfloor-check":"Check subfloor condition","space-assessment":"Size and condition of the area","cleaning-type":"Determine cleaning level","work-assessment":"Identify work to be done","material-list":"Required materials"},materials:{"marble-panels":"Marble Panel","wood-panels":"Wood Panel","led-lights":"LED Lights"},timeSlots:{"08:00":"08:00","09:00":"09:00","10:00":"10:00","11:00":"11:00","12:00":"12:00","13:00":"13:00","14:00":"14:00","15:00":"15:00","16:00":"16:00","17:00":"17:00","18:00":"18:00"}};var rM=t(55971);let rE=()=>{let{language:e,setLanguage:r}=(0,rM.Z)();return{language:e,t:"es"===e?rN:rL,toggleLanguage:()=>{r("es"===e?"en":"es")}}};var rA=t(2522),rB=t(20902),rZ=t(76);let rz="$30.00",rq=e=>e.toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),rF=(e,r,t,a)=>{let n=t.toISOString().replace(/-|:/g,"").split(".")[0]+"Z",i=a.toISOString().replace(/-|:/g,"").split(".")[0]+"Z";return`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(e)}&details=${encodeURIComponent(r)}&dates=${n}/${i}`},rW=(0,i.vJ)`
  *, *::before, *::after {
    box-sizing: border-box;
  }
`,rR=i.ZP.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background: ${({theme:e,lowStock:r})=>r?e.colors.palette.coralRed:e.colors.success};
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`,rY=i.ZP.div`
  background: ${({theme:e})=>e.colors.bg};
  border: 2px solid ${({theme:e})=>e.colors.borders.primary};
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
`,rV=i.ZP.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,rG=i.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.6rem 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.borders.secondary};
  
  &:last-child {
    border-bottom: none;
  }
`,rH=i.ZP.span`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.9rem;
  font-weight: 500;
  flex-shrink: 0;
  margin-right: 1rem;
`,rU=i.ZP.span`
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 0.9rem;
  text-align: right;
  font-weight: 600;
`,rQ=i.ZP.div`
  background: linear-gradient(135deg, 
    ${({theme:e})=>e.colors.palette.skyBlue}15, 
    ${({theme:e})=>e.colors.palette.emeraldGreen}15
  );
  border: 2px solid ${({theme:e})=>e.colors.palette.skyBlue}40;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,rJ=i.ZP.div`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.palette.skyBlue}, ${({theme:e})=>e.colors.palette.emeraldGreen});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.25rem;
`,rK=i.ZP.div`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`,rX=i.ZP.div`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.8rem;
  font-style: italic;
`,r0=i.ZP.div.withConfig({shouldForwardProp:e=>"enabled"!==e})`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: ${({enabled:e,theme:r})=>e?r.colors.success+"20":r.colors.palette.coralRed+"15"};
  color: ${({enabled:e,theme:r})=>e?r.colors.success:r.colors.palette.coralRed};
  border: 1px solid ${({enabled:e,theme:r})=>e?r.colors.success+"40":r.colors.palette.coralRed+"30"};
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
`,r1=i.ZP.button.withConfig({shouldForwardProp:e=>"stripeEnabled"!==e})`
  width: 100%;
  background: ${({stripeEnabled:e,theme:r})=>e?"linear-gradient(135deg, #635bff, #0073e6)":`linear-gradient(135deg, ${r.colors.palette.skyBlue}, ${r.colors.palette.emeraldGreen})`};
  color: white;
  border: none;
  padding: 1.1rem 2rem;
  border-radius: 10px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  letter-spacing: 0.3px;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${({stripeEnabled:e})=>e?"0 8px 25px rgba(99, 91, 255, 0.4)":"0 8px 25px rgba(66, 153, 225, 0.4)"};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,r2=i.ZP.div`
  background: ${({theme:e})=>e.colors.secondaryBg};
  border: 1px dashed ${({theme:e})=>e.colors.borders.secondary};
  border-radius: 10px;
  padding: 1.25rem;
  margin-top: 1rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`,r3=i.ZP.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
`,r5=i.ZP.div`
  background: ${({theme:e,selected:r})=>r?e.colors.primary:e.colors.bg};
  border: 2px solid ${({theme:e,selected:r})=>r?e.colors.primary:e.colors.borders.secondary};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 160px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    transform: translateY(-3px);
    border-color: ${({theme:e})=>e.colors.secondary};
    box-shadow: ${({theme:e})=>e.colors.glowShadows.blue};
  }
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 140px;
    justify-content: center;
    & > span:first-child { font-size: 2.5rem !important; margin-bottom: 0.75rem !important; }
    & > div { width: 100% !important; font-size: 0.85rem !important; }
  }
  & > span:first-child { font-size: 3rem; margin-bottom: 1rem; line-height: 1; display: block; }
  & > div:nth-of-type(1) { font-weight: 600; margin-bottom: 0.75rem; font-size: 1.2rem; line-height: 1.3; width: 100%; color: ${({theme:e,selected:r})=>r?e.colors.textPrimary:"inherit"}; }
  & > div:nth-of-type(2) { font-size: 0.9rem; color: ${({theme:e,selected:r})=>r?e.colors.textPrimary:e.colors.textSecondary}; line-height: 1.4; margin: 0; width: 100%; }
`,r8=i.ZP.div`
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.bg};
  padding: 2rem;
  color: ${({theme:e})=>e.colors.textPrimary};
`,r6=i.ZP.header`
  text-align: center;
  margin-bottom: 3rem;
`,r4=i.ZP.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.palette.skyBlue}, ${({theme:e})=>e.colors.palette.emeraldGreen});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`,r7=i.ZP.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 1.1rem;
  margin-bottom: 1rem;
`,r9=i.ZP.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({theme:e})=>e.colors.secondaryBg};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.colors.borders.secondary};
`,te=i.ZP.span`font-size: 1.2rem;`,tr=i.ZP.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`,tt=i.ZP.div.withConfig({shouldForwardProp:e=>"active"!==e})`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({active:e,theme:r})=>e?`linear-gradient(135deg, ${r.colors.palette.skyBlue}, ${r.colors.palette.emeraldGreen})`:r.colors.secondaryBg};
  color: ${({theme:e})=>e.colors.textPrimary};
  font-weight: 600;
  border: 2px solid ${({active:e,theme:r})=>e?r.colors.primary:r.colors.borders.secondary};
  transition: all 0.3s ease;
`,ta=i.ZP.div`max-width: 1200px; margin: 0 auto;`,tn=i.ZP.section`
  background: ${({theme:e})=>e.colors.secondaryBg};
  border-radius: 16px;
  padding: 2.5rem;
  border: 1px solid ${({theme:e})=>e.colors.borders.secondary};
  box-shadow: ${({theme:e})=>e.colors.glowShadows.blue};
`,ti=i.ZP.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${({theme:e})=>e.colors.textPrimary};
`,to=i.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 1.5rem; }
`,ts=i.ZP.div`
  background: ${({theme:e})=>e.colors.bg};
  border: 2px solid ${({selected:e,theme:r})=>e?r.colors.primary:r.colors.borders.secondary};
  border-radius: 12px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({selected:e,theme:r})=>e?r.colors.glowShadows.blue:"none"};
  &:hover { transform: translateY(-5px); border-color: ${({theme:e})=>e.colors.primary}; box-shadow: ${({theme:e})=>e.colors.glowShadows.blue}; }
`,tl=i.ZP.div`font-size: 3rem; margin-bottom: 1rem;`,tc=i.ZP.h3`font-size: 1.5rem; margin-bottom: 0.5rem; color: ${({theme:e})=>e.colors.textPrimary};`,td=i.ZP.p`color: ${({theme:e})=>e.colors.textSecondary}; line-height: 1.6;`,tu=i.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  @media (max-width: 768px) { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`,tp=i.ZP.div`
  background: ${({theme:e})=>e.colors.bg};
  border: 2px solid ${({theme:e})=>e.colors.borders.primary};
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
`,tm=i.ZP.div`display: flex; flex-direction: column; gap: 0.75rem;`,tf=i.ZP.label`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s;
  background: ${({theme:e})=>e.colors.secondaryBg};
  &:hover { background: ${({theme:e})=>e.colors.bg}; }
`,tg=i.ZP.input`width: 20px; height: 20px; cursor: pointer; margin-top: 0.1rem; flex-shrink: 0;`,tv=i.ZP.span`color: ${({theme:e})=>e.colors.textPrimary}; font-size: 0.95rem; font-weight: 500;`,tb=i.ZP.span`color: ${({theme:e})=>e.colors.textSecondary}; font-size: 0.8rem; display: block; margin-top: 0.25rem;`,th=i.ZP.div`margin-top: 2rem;`,ty=i.ZP.div`display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; width: 100%;`,tx=i.ZP.div`
  background: ${({theme:e})=>e.colors.bg};
  border: 2px solid ${({theme:e,selected:r})=>r?e.colors.primary:e.colors.borders.secondary};
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  &:hover { transform: translateY(-3px); border-color: ${({theme:e})=>e.colors.secondary}; box-shadow: ${({theme:e})=>e.colors.glowShadows.blue}; }
`,tw=i.ZP.h3`font-size: 1.1rem; margin-bottom: 1rem; color: ${({theme:e})=>e.colors.textPrimary}; text-align: center; margin-top: 1.5rem;`,tj=i.ZP.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`,tS=i.ZP.div`
  display: flex;
  gap: 0.5rem;
  overflow: hidden;
  border-radius: 10px;
`,tD=i.ZP.div`
  flex: 0 0 calc(50% - 0.25rem);
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  flex-shrink: 0;
`,tk=i.ZP.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 3px solid ${({theme:e,selected:r})=>r?e.colors.primary:e.colors.borders.secondary};
  transition: all 0.3s ease;
  display: block;
  &:hover { transform: scale(1.03); border-color: ${({theme:e})=>e.colors.primary}; }
`,tT=i.ZP.div`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  background: ${({theme:e,selected:r})=>r?e.colors.primary:"transparent"};
  border: 2px solid ${({theme:e})=>e.colors.bg};
  border-radius: 50%;
  display: ${({selected:e})=>e?"flex":"none"};
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 3;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  pointer-events: none;
`,tP=i.ZP.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  background: ${({theme:e,selected:r})=>r?e.colors.primary:"rgba(0,0,0,0.6)"};
  border: 2px solid ${({theme:e})=>e.colors.bg};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.7rem;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 2;
  padding: 0;
  line-height: 1;
  &:hover { transform: scale(1.1); background: ${({theme:e})=>e.colors.secondary}; }
`,tO=i.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.6rem;
  padding: 0 0.25rem;
`,tC=i.ZP.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.5px solid ${({theme:e})=>e.colors.borders.secondary};
  background: ${({theme:e})=>e.colors.secondaryBg};
  color: ${({theme:e})=>e.colors.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
  flex-shrink: 0;
  &:hover:not(:disabled) {
    border-color: ${({theme:e})=>e.colors.primary};
    background: ${({theme:e})=>e.colors.primary};
    color: white;
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,tI=i.ZP.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
  padding: 0 0.5rem;
`,t$=i.ZP.button`
  width: ${({active:e})=>e?"18px":"7px"};
  height: 7px;
  border-radius: 4px;
  border: none;
  background: ${({theme:e,active:r})=>r?e.colors.primary:e.colors.borders.secondary};
  cursor: pointer;
  transition: all 0.25s ease;
  padding: 0;
  &:hover { background: ${({theme:e})=>e.colors.primary}; opacity: 0.7; }
`;i.ZP.div`margin-bottom: 2rem;`;let t_=i.ZP.h3`font-size: 1.3rem; margin-bottom: 1rem; color: ${({theme:e})=>e.colors.textPrimary};`;i.ZP.div`
  background: ${({theme:e})=>e.colors.bg};
  border-radius: 8px; padding: 2rem;
  display: flex; align-items: center; gap: 1rem;
`;let tN=i.ZP.span`font-size: 2rem;`,tL=i.ZP.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`,tM=i.ZP.div`display: flex; flex-direction: column;`,tE=i.ZP.div`display: flex; flex-direction: column;`,tA=i.ZP.div`
  .react-calendar { background: ${({theme:e})=>e.colors.bg}; border: 1px solid ${({theme:e})=>e.colors.borders.secondary}; border-radius: 12px; padding: 1rem; width: 100%; color: ${({theme:e})=>e.colors.textPrimary}; }
  .react-calendar__tile--active { background: ${({theme:e})=>e.colors.primary} !important; }
  .react-calendar__tile:hover { background: ${({theme:e})=>e.colors.secondaryBg}; }
  .react-calendar__navigation button { color: ${({theme:e})=>e.colors.textPrimary}; }
  .react-calendar__month-view__days__day { color: ${({theme:e})=>e.colors.textPrimary}; }
  .react-calendar__month-view__days__day--weekend { color: ${({theme:e})=>e.colors.palette.coralRed}; }
  .react-calendar__tile--now { background: ${({theme:e})=>e.colors.secondaryBg}; }
`,tB=i.ZP.div`color: ${({theme:e})=>e.colors.textSecondary}; margin-bottom: 1rem; text-transform: capitalize; font-size: 0.95rem;`,tZ=i.ZP.div`display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem;`,tz=i.ZP.button`
  background: ${({selected:e,theme:r})=>e?r.colors.primary:r.colors.bg};
  border: 2px solid ${({selected:e,theme:r})=>e?r.colors.primary:r.colors.borders.secondary};
  color: ${({theme:e})=>e.colors.textPrimary};
  padding: 0.75rem; border-radius: 8px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.5:1};
  transition: all 0.3s ease; font-size: 0.9rem;
  &:hover:not(:disabled) { background: ${({theme:e})=>e.colors.primary}; transform: translateY(-2px); }
`,tq=i.ZP.div`
  display: flex; justify-content: space-between; max-width: 1200px;
  margin: 2rem auto 0; gap: 1rem;
`,tF=i.ZP.button`
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.palette.skyBlue}, ${({theme:e})=>e.colors.palette.emeraldGreen});
  color: white; border: none; padding: 1rem 2rem; border-radius: 8px; font-size: 1rem;
  font-weight: 600; cursor: pointer; transition: all 0.3s ease; flex: 1;
  &:hover:not(:disabled) { transform: translateY(-2px); box-shadow: ${({theme:e})=>e.colors.glowShadows.blue}; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,tW=i.ZP.button`
  background: transparent; color: ${({theme:e})=>e.colors.textPrimary};
  border: 2px solid ${({theme:e})=>e.colors.borders.secondary};
  padding: 1rem 2rem; border-radius: 8px; font-size: 1rem; font-weight: 600;
  cursor: pointer; transition: all 0.3s ease; flex: 1;
  &:hover { border-color: ${({theme:e})=>e.colors.primary}; transform: translateY(-2px); }
`,tR=i.ZP.div`
  max-width: 600px; margin: 4rem auto;
  background: ${({theme:e})=>e.colors.secondaryBg};
  border-radius: 16px; padding: 3rem;
  border: 1px solid ${({theme:e})=>e.colors.borders.secondary};
  box-shadow: ${({theme:e})=>e.colors.glowShadows.green};
  text-align: center;
`,tY=i.ZP.div`font-size: 4rem; margin-bottom: 1rem;`,tV=i.ZP.h2`font-size: 2rem; color: ${({theme:e})=>e.colors.secondary}; margin-bottom: 1rem;`,tG=i.ZP.p`color: ${({theme:e})=>e.colors.textSecondary}; font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.6;`,tH=i.ZP.div`
  background: ${({theme:e})=>e.colors.bg};
  border: 2px solid ${({theme:e})=>e.colors.borders.primary};
  border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; text-align: left;
`,tU=i.ZP.h3`font-size: 1.3rem; margin-bottom: 1rem; color: ${({theme:e})=>e.colors.primary};`,tQ=i.ZP.div`display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0; color: ${({theme:e})=>e.colors.textSecondary};`,tJ=i.ZP.div`
  background: ${({theme:e})=>e.colors.bg};
  border-radius: 8px; padding: 1rem;
  display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2rem;
  p { margin: 0; color: ${({theme:e})=>e.colors.textSecondary}; font-size: 0.95rem; }
`,tK=i.ZP.div`display: flex; flex-direction: column; gap: 1rem;`,tX=i.ZP.a`
  background: linear-gradient(135deg, #4285f4, #34a853); color: white; border: none;
  padding: 1rem 2rem; border-radius: 8px; font-size: 1rem; font-weight: 600;
  cursor: pointer; text-decoration: none; transition: all 0.3s ease; text-align: center;
  &:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(66, 133, 244, 0.3); }
`,t0=i.ZP.div`
  display: flex; justify-content: center; align-items: center;
  min-height: 60vh; font-size: 1.2rem; color: ${({theme:e})=>e.colors.textSecondary}; gap: 1rem;
`,t1=i.ZP.div`
  width: 24px; height: 24px;
  border: 3px solid ${({theme:e})=>e.colors.borders.secondary};
  border-top: 3px solid ${({theme:e})=>e.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
`,t2=i.ZP.div`
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  min-height: 60vh; gap: 1rem;
  background: ${({theme:e})=>e.colors.secondaryBg};
  border-radius: 16px; padding: 3rem; max-width: 500px; margin: 0 auto;
  border: 1px solid ${({theme:e})=>e.colors.borders.secondary};
`,t3=i.ZP.span`font-size: 3rem;`,t5=i.ZP.div`
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.9); z-index: 9999;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; backdrop-filter: blur(10px);
  animation: fadeIn 0.2s ease-in-out;
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`,t8=i.ZP.div`
  max-width: 90vw; max-height: 90vh; position: relative;
  border-radius: 12px; overflow: hidden; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  transform: scale(0.95); animation: scaleIn 0.2s ease-out forwards;
  @keyframes scaleIn { to { transform: scale(1); } }
`,t6=i.ZP.img`width: 100%; height: 100%; object-fit: contain; display: block; pointer-events: none; border-radius: 8px;`,t4=i.ZP.button`
  position: absolute; top: 20px; right: 20px; width: 40px; height: 40px;
  background: rgba(0, 0, 0, 0.6); border: 2px solid white; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: white; font-size: 1.5rem; cursor: pointer; transition: all 0.2s;
  z-index: 10; padding: 0; line-height: 1;
  &:hover { background: rgba(0, 0, 0, 0.9); transform: scale(1.1); }
`,t7=({material:e,selected:r,onSelect:t,selectedImage:i,onSelectImage:o})=>{let[s,l]=(0,n.useState)(null),[c,d]=(0,n.useState)(0),u=e.aforo<=5,p=e.images.length,m=Math.floor(c/2),f=c>0,g=c+2<p,v=e.images.slice(c,c+2),b=(e,r)=>{e.stopPropagation(),d(2*r)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(tx,{selected:r,onClick:()=>t(e.id),children:[(0,a.jsxs)(rR,{lowStock:u,children:[e.aforo," unid."]}),a.jsx(tw,{children:e.name}),(0,a.jsxs)(tj,{children:[a.jsx(tS,{children:v.map((r,t)=>{let n=c+t,s=i===r;return(0,a.jsxs)(tD,{children:[a.jsx(tk,{src:r,alt:`${e.name} ${n+1}`,selected:s,onClick:e=>{e.stopPropagation(),l(r)}}),a.jsx(tT,{selected:s,children:"✓"}),a.jsx(tP,{selected:s,onClick:t=>{t.stopPropagation(),o(e.id,r)},children:s?"✓":"○"})]},n)})}),(0,a.jsxs)(tO,{onClick:e=>e.stopPropagation(),children:[a.jsx(tC,{onClick:e=>{e.stopPropagation(),d(e=>Math.max(0,e-2))},disabled:!f,title:"Anterior",children:"‹"}),a.jsx(tI,{children:Array.from({length:Math.ceil(p/2)}).map((e,r)=>a.jsx(t$,{active:r===m,onClick:e=>b(e,r),title:`P\xe1gina ${r+1}`},r))}),a.jsx(tC,{onClick:e=>{e.stopPropagation(),d(e=>Math.min(p-2,e+2))},disabled:!g,title:"Siguiente",children:"›"})]})]})]}),s&&a.jsx(t5,{onClick:()=>l(null),children:(0,a.jsxs)(t8,{onClick:e=>e.stopPropagation(),children:[a.jsx(t4,{onClick:e=>{e.stopPropagation(),l(null)},children:"✕"}),a.jsx(t6,{src:s,alt:"Ampliada"})]})})]})},t9=(e,r,t)=>r&&0!==e.getDay()?["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"].map(e=>({time:t.timeSlots[e],available:Math.random()>.3})):[],ae=()=>{let{user:e,loading:r}=(0,rA.a)(),{t}=rE(),[i,o]=(0,n.useState)(null),[s,l]=(0,n.useState)(()=>{let e=new Date;return e.setDate(e.getDate()+2),e}),[c,d]=(0,n.useState)(""),[u,p]=(0,n.useState)(""),[m,f]=(0,n.useState)(""),[g,v]=(0,n.useState)(1),[b,h]=(0,n.useState)(!1),[y,x]=(0,n.useState)(!1),[w,j]=(0,n.useState)(""),[S,D]=(0,n.useState)({}),[k,T]=(0,n.useState)({}),[P,O]=(0,n.useState)(!1),[C,I]=(0,n.useState)(!0),[$,_]=(0,n.useState)(null),[N,L]=(0,n.useState)("idle");(0,n.useEffect)(()=>{5===g&&(async()=>{I(!0);try{let e=await fetch("/api/payment-config");if(!e.ok)throw Error("API response: "+e.status);let r=await e.json();O(!0===r.enableFinancing)}catch(e){try{let e=(0,rZ.JU)(rB.db,"Config","app_settings"),r=await (0,rZ.QT)(e);if(r.exists()){let e=r.data();O(!0===e.enableFinancing)}}catch(e){O(!1)}}finally{I(!1)}})()},[g]);let M=(0,n.useMemo)(()=>{let e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate()+2)},[]),E=(0,n.useMemo)(()=>t9(s,i,t),[s,i,t]),A=(0,n.useMemo)(()=>[{id:"furniture-tv",name:t.services["furniture-tv"].name,description:t.services["furniture-tv"].description,icon:a.jsx("span",{children:"\uD83D\uDCFA"}),subServices:[{id:"tv-mount",name:t.subServices["tv-mount"],description:t.subServiceDescriptions["tv-mount"]},{id:"marble-panel",name:t.subServices["marble-panel"],description:t.subServiceDescriptions["marble-panel"]},{id:"wood-panel",name:t.subServices["wood-panel"],description:t.subServiceDescriptions["wood-panel"]},{id:"elevated-furniture",name:t.subServices["elevated-furniture"],description:t.subServiceDescriptions["elevated-furniture"]},{id:"led-lights",name:t.subServices["led-lights"],description:t.subServiceDescriptions["led-lights"]},{id:"all-services",name:t.subServices["all-services"],description:t.subServiceDescriptions["all-services"]}]},{id:"painting",name:t.services.painting.name,description:t.services.painting.description,icon:a.jsx("span",{children:"\uD83C\uDFA8"}),subServices:[{id:"interior-basic",name:t.subServices["interior-basic"],description:t.subServiceDescriptions["interior-basic"]},{id:"interior-premium",name:t.subServices["interior-premium"],description:t.subServiceDescriptions["interior-premium"]},{id:"exterior-basic",name:t.subServices["exterior-basic"],description:t.subServiceDescriptions["exterior-basic"]},{id:"exterior-weatherproof",name:t.subServices["exterior-weatherproof"],description:t.subServiceDescriptions["exterior-weatherproof"]},{id:"ceiling",name:t.subServices.ceiling,description:t.subServiceDescriptions.ceiling},{id:"trim",name:t.subServices.trim,description:t.subServiceDescriptions.trim}]},{id:"flooring",name:t.services.flooring.name,description:t.services.flooring.description,icon:a.jsx("span",{children:"\uD83D\uDD32"}),subServices:[{id:"laminate-install",name:t.subServices["laminate-install"],description:t.subServiceDescriptions["laminate-install"]},{id:"subfloor-prep",name:t.subServices["subfloor-prep"],description:t.subServiceDescriptions["subfloor-prep"]},{id:"baseboards",name:t.subServices.baseboards,description:t.subServiceDescriptions.baseboards}]},{id:"cleaning",name:t.services.cleaning.name,description:t.services.cleaning.description,icon:a.jsx("span",{children:"\uD83E\uDDF9"}),subServices:[{id:"post-construction",name:t.subServices["post-construction"],description:t.subServiceDescriptions["post-construction"]},{id:"deep-clean",name:t.subServices["deep-clean"],description:t.subServiceDescriptions["deep-clean"]},{id:"maintenance",name:t.subServices.maintenance,description:t.subServiceDescriptions.maintenance}]},{id:"general-work",name:t.services["general-work"].name,description:t.services["general-work"].description,icon:a.jsx("span",{children:"\uD83D\uDD27"}),subServices:[{id:"repairs",name:t.subServices.repairs,description:t.subServiceDescriptions.repairs},{id:"assembly",name:t.subServices.assembly,description:t.subServiceDescriptions.assembly},{id:"installation",name:t.subServices.installation,description:t.subServiceDescriptions.installation}]}],[t]),B=(0,n.useMemo)(()=>[{id:"furniture-tv-measure",name:t.services["furniture-tv-measure"].name,description:t.services["furniture-tv-measure"].description,icon:a.jsx("span",{children:"\uD83D\uDCFA"}),subServices:[{id:"measure-tv",name:t.subServices["measure-tv"],description:t.subServiceDescriptions["measure-tv"]},{id:"measure-wall",name:t.subServices["measure-wall"],description:t.subServiceDescriptions["measure-wall"]},{id:"measure-space",name:t.subServices["measure-space"],description:t.subServiceDescriptions["measure-space"]}]}],[t]),Z=(0,n.useMemo)(()=>[{id:"painting-quote",name:t.services["painting-quote"].name,description:t.services["painting-quote"].description,icon:a.jsx("span",{children:"\uD83C\uDFA8"}),subServices:[{id:"assess-area",name:t.subServices["assess-area"],description:t.subServiceDescriptions["assess-area"]},{id:"material-estimate",name:t.subServices["material-estimate"],description:t.subServiceDescriptions["material-estimate"]}]},{id:"flooring-quote",name:t.services["flooring-quote"].name,description:t.services["flooring-quote"].description,icon:a.jsx("span",{children:"\uD83D\uDD32"}),subServices:[{id:"floor-measure",name:t.subServices["floor-measure"],description:t.subServiceDescriptions["floor-measure"]},{id:"subfloor-check",name:t.subServices["subfloor-check"],description:t.subServiceDescriptions["subfloor-check"]}]},{id:"cleaning-quote",name:t.services["cleaning-quote"].name,description:t.services["cleaning-quote"].description,icon:a.jsx("span",{children:"\uD83E\uDDF9"}),subServices:[{id:"space-assessment",name:t.subServices["space-assessment"],description:t.subServiceDescriptions["space-assessment"]},{id:"cleaning-type",name:t.subServices["cleaning-type"],description:t.subServiceDescriptions["cleaning-type"]}]},{id:"general-work-quote",name:t.services["general-work-quote"].name,description:t.services["general-work-quote"].description,icon:a.jsx("span",{children:"\uD83D\uDD27"}),subServices:[{id:"work-assessment",name:t.subServices["work-assessment"],description:t.subServiceDescriptions["work-assessment"]},{id:"material-list",name:t.subServices["material-list"],description:t.subServiceDescriptions["material-list"]}]}],[t]),z=(0,n.useMemo)(()=>[{id:"marble-panels",name:t.materials["marble-panels"],images:["assets/materials/panel-Marmol/marmol-Gold.jpeg","assets/materials/panel-Marmol/m-BlackLines.jpeg","assets/materials/panel-Marmol/m-GranitoHard.jpeg","assets/materials/panel-Marmol/m-linesDark.jpeg","assets/materials/panel-Marmol/m-GranitoSimple.jpeg","assets/materials/panel-Marmol/m-GrayTexture.jpeg","assets/materials/panel-Marmol/m-LinesGold.jpeg","assets/materials/panel-Marmol/m-WhiteSafe.jpeg"],aforo:100},{id:"wood-panels",name:t.materials["wood-panels"],images:["assets/materials/panel-Wood/p-032.jpeg","assets/materials/panel-Wood/p-168.jpeg","assets/materials/panel-Wood/p-069.jpeg","assets/materials/panel-Wood/p-067.jpeg","assets/materials/panel-Wood/p-065.jpeg","assets/materials/panel-Wood/p-070.jpeg","assets/materials/panel-Wood/p-097.jpeg","assets/materials/panel-Wood/p-104.jpeg","assets/materials/panel-Wood/p-120.jpeg","assets/materials/panel-Wood/p-131.jpeg","assets/materials/panel-Wood/p-154.jpeg","assets/materials/panel-Wood/p-157.jpeg","assets/materials/panel-Wood/p-158.jpeg","assets/materials/panel-Wood/p-175.jpeg"],aforo:100},{id:"led-lights",name:t.materials["led-lights"],images:["assets/materials/lights/led-10ft.jpeg","assets/materials/lights/ledTV-cam.jpeg","assets/materials/lights/ledTV.jpeg","assets/materials/lights/light-6Pack.jpeg"],aforo:25}],[t]),q=()=>"work"===i?A:"measurement-tv"===i?B:"quotation"===i?Z:[];if(r)return a.jsx(r8,{children:(0,a.jsxs)(t0,{children:[a.jsx(t1,{}),t.loadingMessage]})});if(!e)return a.jsx(r8,{children:(0,a.jsxs)(t2,{children:[a.jsx(t3,{children:"⚠️"}),a.jsx("p",{children:t.authErrorMessage})]})});let F={name:e.displayName?e.displayName:e.email?e.email.split("@")[0]:"Usuario",email:e.email||t.emailNotAvailable||"No disponible",phone:e.phoneNumber||t.phoneNotAvailable||"No disponible",uid:e.uid},W=(e,r)=>{D(t=>{let a=t[e]||[],n=a.includes(r);if("all-services"===r){let r=A.find(r=>r.id===e);if(!r)return t;if(n)return{...t,[e]:[]};let a=r.subServices?.map(e=>e.id)||[];return{...t,[e]:a}}let i=n?a.filter(e=>e!==r):[...a,r],o=A.find(r=>r.id===e);if(o&&o.subServices){let r=o.subServices.map(e=>e.id);if(i.filter(e=>"all-services"!==e).length===r.filter(e=>"all-services"!==e).length&&r.includes("all-services"))return{...t,[e]:r}}return{...t,[e]:i}})},R=(e,r)=>{T(t=>({...t,[e]:r})),f(e)},Y=async()=>{L("saving");let e=q().find(e=>e.id===u),r=S[u]||[],a=e?.subServices?.filter(e=>r.includes(e.id))||[],[n,o]=c.split(":"),l=new Date(s);l.setHours(parseInt(n),parseInt(o),0);let d=new Date(l);d.setHours(l.getHours()+2);let p={userId:F.uid,clientName:F.name,clientEmail:F.email,clientPhone:F.phone,bookingType:i,serviceId:u,serviceName:e?.name||"",selectedOptions:a.map(e=>({id:e.id,name:e.name})),materialId:m||null,materialName:m&&z.find(e=>e.id===m)?.name||null,materialImages:k,bookingDate:s.toISOString(),bookingTime:c,bookingStartDateTime:l.toISOString(),bookingEndDateTime:d.toISOString(),formattedDate:rq(s),paymentStatus:P?"initiated":"pending",depositAmount:3e3,depositCurrency:"usd",stripeSessionId:null,stripePaymentIntentId:null,createdAt:(0,rZ.Bt)(),updatedAt:(0,rZ.Bt)(),status:"pending_confirmation"};try{let r=await fetch("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({bookingData:p,amount:3e3,currency:"usd",customerEmail:F.email,customerName:F.name,serviceName:e?.name,bookingDate:rq(s),bookingTime:c,stripeEnabled:P,successUrl:`${window.location.origin}/booking/success?booking_id=BOOKING_ID&session_id={CHECKOUT_SESSION_ID}`,cancelUrl:`${window.location.origin}/booking?cancelled=true`})}),n=await r.json();if(n.error)throw Error(n.error);let o=n.bookingId;if(_(o),P)L("redirecting"),window.location.href=n.url;else{L("pending"),await fetch("/api/send-booking-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...p,bookingId:o,type:"work"===i?t.workType:"measurement-tv"===i?t.measurementTvType:t.quotationType,service:e?.name,options:a.map(e=>e.name).join(", "),material:m?z.find(e=>e.id===m)?.name:"",date:rq(s),time:c})}).catch(e=>{console.warn("Email no enviado:",e)});let r=`${"work"===i?t.workType:"measurement-tv"===i?t.measurementTvType:t.quotationType} - ${e?.name}`,n=`Servicio: ${e?.name}
Fecha: ${rq(s)}
Hora: ${c}
Cliente: ${F.name}`,u=rF(r,n,l,d);j(u),x(!0)}}catch(e){console.error("Error en checkout:",e),L("idle"),alert(`Error al procesar la reserva: ${e instanceof Error?e.message:"Error desconocido"}. Por favor intenta nuevamente.`)}},V=()=>{if(1===g)return null!==i;if(2===g)return""!==u;if(3===g){let e=S[u]||[];if(0===e.length)return!1;if("work"===i&&"furniture-tv"===u){if(!e.some(e=>"marble-panel"===e||"wood-panel"===e||"led-lights"===e))return!0;let r=[];return e.includes("marble-panel")&&r.push("marble-panels"),e.includes("wood-panel")&&r.push("wood-panels"),e.includes("led-lights")&&r.push("led-lights"),r.every(e=>void 0!==k[e])}return!0}return 4!==g||""!==c},G=q().find(e=>e.id===u),H=S[u]||[],U=G?.subServices?.filter(e=>H.includes(e.id))||[];if(y)return(0,a.jsxs)(r8,{children:[a.jsx(rW,{}),(0,a.jsxs)(tR,{children:[a.jsx(tY,{children:P?"✅":"\uD83D\uDCCB"}),a.jsx(tV,{children:t.successTitle}),a.jsx(tG,{children:t.successMessage(F.name)}),$&&(0,a.jsxs)("div",{style:{marginBottom:"1rem",fontSize:"0.8rem",color:"gray",opacity:.7},children:[t.bookingIdLabel," ",$]}),(0,a.jsxs)(tH,{children:[a.jsx(tU,{children:t.summaryTitle}),(0,a.jsxs)(tQ,{children:[a.jsx("strong",{children:t.typeLabel})," ","work"===i?t.workType:"measurement-tv"===i?t.measurementTvType:t.quotationType]}),(0,a.jsxs)(tQ,{children:[a.jsx("strong",{children:t.serviceLabel})," ",G?.name]}),(0,a.jsxs)(tQ,{children:[a.jsx("strong",{children:t.optionsLabel})," ",U.length>0?U.map(e=>e.name).join(", "):"Ninguna"]}),m&&(0,a.jsxs)(tQ,{children:[a.jsx("strong",{children:t.materialLabel})," ",z.find(e=>e.id===m)?.name]}),(0,a.jsxs)(tQ,{children:[a.jsx("strong",{children:t.dateLabel})," ",rq(s)]}),(0,a.jsxs)(tQ,{children:[a.jsx("strong",{children:t.timeLabel})," ",c]}),(0,a.jsxs)(tQ,{children:[a.jsx("strong",{children:t.paymentStatusLabel})," ","pending"===N?t.paymentStatusPending:t.paymentStatusConfirmed]})]}),(0,a.jsxs)(tJ,{children:[a.jsx(tN,{children:"\uD83D\uDCE7"}),a.jsx("p",{children:t.emailSentMessage(F.email)})]}),(0,a.jsxs)(tK,{children:[a.jsx(tX,{href:w,target:"_blank",rel:"noopener noreferrer",children:t.googleCalendarButton}),a.jsx(tF,{onClick:()=>{o(null),l(M),d(""),p(""),f(""),v(1),x(!1),j(""),D({}),T({}),_(null),L("idle")},children:t.anotherBookingButton})]})]})]});let Q=[];if("work"===i&&"furniture-tv"===u){let e=S[u]||[];e.includes("marble-panel")&&Q.push("marble-panels"),e.includes("wood-panel")&&Q.push("wood-panels"),e.includes("led-lights")&&Q.push("led-lights")}return(0,a.jsxs)(r8,{children:[a.jsx(rW,{}),(0,a.jsxs)(r6,{children:[a.jsx(r4,{children:t.pageTitle}),a.jsx(r7,{children:t.pageSubtitle}),(0,a.jsxs)(r9,{children:[a.jsx(te,{children:"\uD83D\uDC64"}),a.jsx("span",{children:F.name})]})]}),a.jsx(tr,{children:[1,2,3,4,5].map(e=>a.jsx(tt,{active:g>=e,children:5===e?"\uD83D\uDCB3":e},e))}),(0,a.jsxs)(ta,{children:[1===g&&(0,a.jsxs)(tn,{children:[a.jsx(ti,{children:t.step1Title}),(0,a.jsxs)(to,{children:[(0,a.jsxs)(ts,{selected:"work"===i,onClick:()=>{o("work"),p(""),D({}),f(""),T({}),d("")},children:[a.jsx(tl,{children:"\uD83D\uDD28"}),a.jsx(tc,{children:t.workTypeTitle}),a.jsx(td,{children:t.workTypeDescription})]}),(0,a.jsxs)(ts,{selected:"measurement-tv"===i,onClick:()=>{o("measurement-tv"),p(""),D({}),f(""),T({}),d("")},children:[a.jsx(tl,{children:"\uD83D\uDCCF"}),a.jsx(tc,{children:t.measurementTvTypeTitle}),a.jsx(td,{children:t.measurementTvTypeDescription})]}),(0,a.jsxs)(ts,{selected:"quotation"===i,onClick:()=>{o("quotation"),p(""),D({}),f(""),T({}),d("")},children:[a.jsx(tl,{children:"\uD83D\uDCCB"}),a.jsx(tc,{children:t.quotationTypeTitle}),a.jsx(td,{children:t.quotationTypeDescription})]})]})]}),2===g&&(0,a.jsxs)(tn,{children:[a.jsx(ti,{children:t.step2Title}),a.jsx(tu,{children:q().map(e=>(0,a.jsxs)(r5,{selected:u===e.id,onClick:()=>p(e.id),children:[e.icon,a.jsx("div",{style:{fontWeight:"600",marginBottom:"0.5rem"},children:e.name}),a.jsx("div",{style:{fontSize:"0.9rem",color:"inherit"},children:e.description})]},e.id))})]}),3===g&&(0,a.jsxs)(tn,{children:[a.jsx(ti,{children:t.step3Title}),(0,a.jsxs)(tp,{children:[a.jsx(t_,{children:t.optionsTitle}),a.jsx(tm,{children:q().find(e=>e.id===u)?.subServices?.map(e=>{let r=(S[u]||[]).includes(e.id);return a.jsxs(tf,{children:[a.jsx(tg,{type:"checkbox",checked:r,onChange:()=>W(u,e.id)}),a.jsxs("div",{children:[a.jsx(tv,{children:e.name}),a.jsx(tb,{children:e.description})]})]},e.id)})})]}),"work"===i&&"furniture-tv"===u&&Q.length>0&&(0,a.jsxs)(th,{children:[a.jsx(t_,{children:t.materialGalleryTitle}),a.jsx(ty,{children:z.filter(e=>Q.includes(e.id)).map(e=>a.jsx(t7,{material:e,selected:m===e.id,onSelect:f,selectedImage:k[e.id]||null,onSelectImage:R},e.id))}),!V()&&Q.length>0&&a.jsx("p",{style:{color:"#e74c3c",marginTop:"1rem",fontSize:"0.95rem",textAlign:"center",fontWeight:"bold",padding:"10px",background:"rgba(231, 76, 60, 0.1)",borderRadius:"8px"},children:t.materialRequiredWarning||"⚠️ Por favor, selecciona una imagen para cada material elegido."})]})]}),4===g&&(0,a.jsxs)(tn,{children:[a.jsx(ti,{children:t.step4Title}),(0,a.jsxs)(tL,{children:[(0,a.jsxs)(tM,{children:[a.jsx(t_,{children:t.selectDateTitle}),a.jsx(tA,{children:a.jsx(r_,{onChange:e=>{l(e),d("")},value:s,minDate:M,locale:"es-ES"})})]}),(0,a.jsxs)(tE,{children:[a.jsx(t_,{children:t.availableTimesTitle}),a.jsx(tB,{children:rq(s)}),0===E.length?(0,a.jsxs)(tJ,{children:[a.jsx(tN,{children:"ℹ️"}),a.jsx("p",{children:t.closedDayMessage})]}):a.jsx(tZ,{children:E.map(e=>a.jsx(tz,{selected:c===e.time,disabled:!e.available,onClick:()=>e.available&&d(e.time),children:e.time},e.time))})]})]})]}),5===g&&(0,a.jsxs)(tn,{children:[a.jsx(ti,{children:t.step5Title}),(0,a.jsxs)(rY,{children:[a.jsx(rV,{children:t.checkoutSummaryTitle}),(0,a.jsxs)(rG,{children:[a.jsx(rH,{children:t.checkoutTypeLabel}),a.jsx(rU,{children:"work"===i?t.workType:"measurement-tv"===i?t.measurementTvType:t.quotationType})]}),(0,a.jsxs)(rG,{children:[a.jsx(rH,{children:t.checkoutServiceLabel}),a.jsx(rU,{children:G?.name})]}),U.length>0&&(0,a.jsxs)(rG,{children:[a.jsx(rH,{children:t.checkoutOptionsLabel}),a.jsx(rU,{children:U.map(e=>e.name).join(", ")})]}),m&&(0,a.jsxs)(rG,{children:[a.jsx(rH,{children:t.checkoutMaterialLabel}),(0,a.jsxs)(rU,{children:[z.find(e=>e.id===m)?.name,k[m]&&" ✓"]})]}),(0,a.jsxs)(rG,{children:[a.jsx(rH,{children:t.checkoutDateLabel}),a.jsx(rU,{style:{textTransform:"capitalize"},children:rq(s)})]}),(0,a.jsxs)(rG,{children:[a.jsx(rH,{children:t.checkoutTimeLabel}),a.jsx(rU,{children:c})]}),(0,a.jsxs)(rG,{children:[a.jsx(rH,{children:t.checkoutClientLabel}),a.jsx(rU,{children:F.name})]}),(0,a.jsxs)(rG,{children:[a.jsx(rH,{children:t.checkoutContactLabel}),a.jsx(rU,{children:F.email})]})]}),(0,a.jsxs)(rQ,{children:[a.jsx(rJ,{children:rz}),a.jsx(rK,{children:t.depositTitle}),a.jsx(rX,{children:t.depositNote})]}),C?(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"center",padding:"1rem",gap:"0.5rem",alignItems:"center"},children:[a.jsx(t1,{}),a.jsx("span",{style:{color:"gray",fontSize:"0.9rem"},children:t.verifyingPayment})]}):(0,a.jsxs)(a.Fragment,{children:[a.jsx(r0,{enabled:P,children:P?t.stripeActiveLabel:t.stripeInactiveLabel}),(0,a.jsxs)(r1,{stripeEnabled:P,onClick:Y,disabled:"saving"===N||"redirecting"===N,children:["saving"===N&&(0,a.jsxs)(a.Fragment,{children:[a.jsx(t1,{})," ",t.savingBooking]}),"redirecting"===N&&(0,a.jsxs)(a.Fragment,{children:[a.jsx(t1,{})," ",t.redirectingPayment]}),("idle"===N||"pending"===N)&&(P?a.jsx(a.Fragment,{children:t.payButtonStripe(rz)}):a.jsx(a.Fragment,{children:t.payButtonPending}))]}),!P&&(0,a.jsxs)(r2,{children:[a.jsx("span",{style:{fontSize:"1.5rem",flexShrink:0},children:"ℹ️"}),a.jsx(r3,{children:t.pendingPaymentNote(rz)})]}),P&&(0,a.jsxs)(r2,{children:[a.jsx("span",{style:{fontSize:"1.5rem",flexShrink:0},children:"\uD83D\uDD12"}),a.jsx(r3,{children:t.stripeSecureNote})]})]})]})]}),(0,a.jsxs)(tq,{children:[g>1&&a.jsx(tW,{onClick:()=>v(g-1),children:t.backButton}),g<4&&a.jsx(tF,{onClick:()=>v(g+1),disabled:!V(),children:t.continueButton}),4===g&&a.jsx(tF,{onClick:()=>v(5),disabled:!V(),children:t.checkoutToNextStep})]})]})}},96029:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>o,__esModule:()=>i,default:()=>s});var a=t(68570);let n=(0,a.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/booking/page.tsx`),{__esModule:i,$$typeof:o}=n;n.default;let s=(0,a.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/booking/page.tsx#default`)},86648:()=>{}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[948,788,736],()=>t(88463));module.exports=a})();