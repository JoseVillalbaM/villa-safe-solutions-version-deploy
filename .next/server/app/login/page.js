(()=>{var e={};e.id=626,e.ids=[626],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},83122:e=>{"use strict";e.exports=require("undici")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},96245:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d}),t(94687),t(42476),t(35866);var o=t(23191),s=t(88716),a=t(37922),i=t.n(a),l=t(95231),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);t.d(r,n);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,94687)),"/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/login/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,42476)),"/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/login/page.tsx"],u="/login/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new o.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},72449:(e,r,t)=>{Promise.resolve().then(t.bind(t,1442))},1442:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>$});var o=t(10326),s=t(17577),a=t(35047),i=t(57457),l=t(90434),n=t(20902),d=t(10418),c=t(82711),u=t(73712),p=t(26670),x=t(46791),g=t(55971);let h=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 2rem;
  background: ${({theme:e})=>e.colors.bg};
`,m=i.ZP.div`
  display: grid;
  gap: 1rem;
`,b=i.ZP.p`
  color: ${({theme:e})=>e.colors.palette.coralRed};
  font-size: 0.875rem;
  margin-top: 1rem;
  text-align: center;
`,f=i.ZP.p`
  font-size: 0.875rem;
  text-align: center;
  color: ${({theme:e})=>e.colors.textSecondary};
`,v=(0,i.ZP)(l.default)`
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: underline;

  &:hover {
    color: ${({theme:e})=>e.colors.palette.skyBlue};
  }
`,y=(0,i.ZP)(p.m4)`
  box-shadow: 
    0 0 20px ${({theme:e})=>e.colors.palette.skyBlue}40,
    0 0 40px ${({theme:e})=>e.colors.primary}30,
    0 0 60px ${({theme:e})=>e.colors.palette.coralRed}20;
  border: 1px solid ${({theme:e})=>e.colors.palette.skyBlue}30;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 
      0 0 25px ${({theme:e})=>e.colors.palette.skyBlue}50,
      0 0 50px ${({theme:e})=>e.colors.primary}40,
      0 0 75px ${({theme:e})=>e.colors.palette.coralRed}30;
  }
`,P=(0,i.ZP)(d.O)`
  box-shadow: 
    0 0 15px ${({theme:e})=>e.colors.palette.skyBlue}50,
    0 0 25px ${({theme:e})=>e.colors.primary}30;
  border: 1px solid ${({theme:e})=>e.colors.palette.skyBlue}40;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 
      0 0 20px ${({theme:e})=>e.colors.palette.skyBlue}60,
      0 0 35px ${({theme:e})=>e.colors.primary}40;
    transform: translateY(-2px);
  }
`,q=(0,i.ZP)(p.OY)`
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.palette.skyBlue} 0%,
    ${({theme:e})=>e.colors.palette.coralRed} 50%,
    ${({theme:e})=>e.colors.primary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;function $(){let[e,r]=(0,s.useState)(""),[t,i]=(0,s.useState)(""),[l,d]=(0,s.useState)(null),$=(0,a.useRouter)(),{t:w}=(0,g.Z)(),j=async r=>{r.preventDefault(),d(null);try{console.log("Intentando iniciar sesi\xf3n con:",e),await (0,x.e5)(n.I,e,t),console.log("Inicio de sesi\xf3n exitoso"),$.push("/")}catch(e){switch(console.error("Error completo:",e),console.error("C\xf3digo de error:",e.code),e.code){case"auth/user-not-found":d(w("auth.error.userNotFound"));break;case"auth/wrong-password":case"auth/invalid-credential":d(w("auth.error.wrongPassword"));break;case"auth/invalid-email":d(w("auth.error.invalidEmail"));break;default:d(`${w("auth.error.generic")}: ${e.message}`)}}};return o.jsx(h,{children:(0,o.jsxs)(y,{style:{width:"100%",maxWidth:"400px"},children:[o.jsx(p.uq,{children:o.jsx(q,{children:w("auth.login")})}),(0,o.jsxs)(p.eZ,{children:[o.jsx("form",{onSubmit:j,children:(0,o.jsxs)(m,{children:[(0,o.jsxs)("div",{children:[o.jsx(u.Z,{htmlFor:"email",children:w("auth.email")}),o.jsx(c.Z,{id:"email",type:"email",value:e,onChange:e=>r(e.target.value),placeholder:w("auth.emailPlaceholder"),required:!0})]}),(0,o.jsxs)("div",{children:[o.jsx(u.Z,{htmlFor:"password",children:w("auth.password")}),o.jsx(c.Z,{id:"password",type:"password",value:t,onChange:e=>i(e.target.value),placeholder:w("auth.passwordPlaceholder"),required:!0})]}),o.jsx(P,{type:"submit",style:{width:"100%",marginTop:"1rem"},children:w("auth.loginButton")})]})}),l&&o.jsx(b,{children:l})]}),o.jsx(p.H_,{children:(0,o.jsxs)(f,{children:[w("auth.noAccount")," ",o.jsx(v,{href:"/register",children:w("auth.register")})]})})]})})}},26670:(e,r,t)=>{"use strict";t.d(r,{H_:()=>d,OY:()=>l,eZ:()=>n,m4:()=>a,uq:()=>i});var o=t(57457);let s={border:"#E5E7EB",bg:"#FFFFFF",text:"#111827"},a=o.ZP.div`
  background-color: ${s.bg};
  color: ${s.text};
  border-radius: 0.75rem; // rounded-lg
  border: 1px solid ${s.border};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  
  /* Aquí puedes añadir estilos para .dark si tu ThemeProvider lo soporta */
  /* .dark & { ... } */
`,i=o.ZP.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${s.border};
`,l=o.ZP.h3`
  font-size: 1.25rem; // text-xl
  font-weight: 600;
  line-height: 1.75rem;
  margin: 0; // Quitar margen por defecto de h3
`,n=o.ZP.div`
  padding: 1.5rem;
`,d=o.ZP.div`
  padding: 1.5rem;
  border-top: 1px solid ${s.border};
  background-color: rgba(249, 250, 251, 0.5); // bg-gray-50/50
`},82711:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var o=t(57457);let s={border:"#D1D5DB",borderFocus:"#2563EB",placeholder:"#9CA3AF",text:"#111827",bg:"transparent",shadowFocus:"rgba(37, 99, 235, 0.2)"},a=o.ZP.input`
  display: flex;
  width: 100%;
  border: 1px solid ${s.border};
  background-color: ${s.bg};
  color: ${s.text};
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem; // rounded-md
  transition: all 0.2s ease-in-out;
  box-sizing: border-box; // Importante para que el padding no afecte el width

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: ${s.borderFocus};
    box-shadow: 0 0 0 3px ${s.shadowFocus};
  }

  &::placeholder {
    color: ${s.placeholder};
  }

  /* Aquí puedes añadir estilos para .dark si tu ThemeProvider lo soporta */
`},73712:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var o=t(57457);let s=o.ZP.label`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: '#111827'; // text-gray-900 (conecta a tu tema)
  margin-bottom: 0.5rem;
  display: block; // Para que el margen funcione
`},94687:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>a,default:()=>l});var o=t(68570);let s=(0,o.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/login/page.tsx`),{__esModule:a,$$typeof:i}=s;s.default;let l=(0,o.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/login/page.tsx#default`)}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[948,788,736],()=>t(96245));module.exports=o})();