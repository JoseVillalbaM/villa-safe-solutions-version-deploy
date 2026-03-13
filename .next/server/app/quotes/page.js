(()=>{var e={};e.id=744,e.ids=[744],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},83122:e=>{"use strict";e.exports=require("undici")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},25852:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>x,tree:()=>d}),t(91899),t(42476),t(35866);var s=t(23191),i=t(88716),o=t(37922),a=t.n(o),l=t(95231),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);t.d(r,n);let d=["",{children:["quotes",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,91899)),"/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/quotes/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,42476)),"/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}],u=["/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/quotes/page.tsx"],c="/quotes/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/quotes/page",pathname:"/quotes",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},50217:(e,r,t)=>{Promise.resolve().then(t.bind(t,11919))},11919:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>x});var s=t(10326),i=t(17577),o=t(57457),a=t(10418),l=t(82711),n=t(73712),d=t(26670);let u=o.ZP.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; // Alinea arriba
  min-height: 80vh;
  padding: 2rem;
  background-color: ${({theme:e})=>e.colors.secondaryBg}; // Un fondo suave
`,c=o.ZP.div`
  display: grid;
  gap: 1rem;
`,p=o.ZP.textarea`
  display: flex;
  width: 100%;
  border: 1px solid ${({theme:e})=>e.colors.borders};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.textPrimary};
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem;
  min-height: 100px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: #2563EB; // blue-600
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }

  &::placeholder {
    color: #9CA3AF; // gray-400
  }
`;function x(){let[e,r]=(0,i.useState)(""),[t,o]=(0,i.useState)(""),[x,m]=(0,i.useState)(""),[h,g]=(0,i.useState)(""),[b,v]=(0,i.useState)(!1);return b?s.jsx(u,{children:(0,s.jsxs)(d.m4,{style:{width:"100%",maxWidth:"500px"},children:[s.jsx(d.uq,{children:s.jsx(d.OY,{children:"\xa1Gracias!"})}),(0,s.jsxs)(d.eZ,{children:[s.jsx("p",{children:"Hemos recibido tu solicitud de cotizaci\xf3n. Te contactaremos pronto."}),s.jsx(a.O,{$primary:!0,style:{marginTop:"1rem"},onClick:()=>v(!1),children:"Solicitar otra cotizaci\xf3n"})]})]})}):s.jsx(u,{children:(0,s.jsxs)(d.m4,{style:{width:"100%",maxWidth:"500px"},children:[s.jsx(d.uq,{children:s.jsx(d.OY,{children:"Solicitar una Cotizaci\xf3n"})}),s.jsx(d.eZ,{children:s.jsx("form",{onSubmit:r=>{r.preventDefault(),console.log({name:e,email:t,service:x,details:h}),v(!0)},children:(0,s.jsxs)(c,{children:[(0,s.jsxs)("div",{children:[s.jsx(n.Z,{htmlFor:"name",children:"Nombre"}),s.jsx(l.Z,{id:"name",type:"text",value:e,onChange:e=>r(e.target.value),placeholder:"Tu nombre",required:!0})]}),(0,s.jsxs)("div",{children:[s.jsx(n.Z,{htmlFor:"email",children:"Email"}),s.jsx(l.Z,{id:"email",type:"email",value:t,onChange:e=>o(e.target.value),placeholder:"tu@email.com",required:!0})]}),(0,s.jsxs)("div",{children:[s.jsx(n.Z,{htmlFor:"service",children:"Servicio de Inter\xe9s"}),s.jsx(l.Z,{id:"service",type:"text",value:x,onChange:e=>m(e.target.value),placeholder:"Ej: Pintura, Limpieza...",required:!0})]}),(0,s.jsxs)("div",{children:[s.jsx(n.Z,{htmlFor:"details",children:"Detalles del Proyecto"}),s.jsx(p,{id:"details",value:h,onChange:e=>g(e.target.value),placeholder:"Describe lo que necesitas...",required:!0})]}),s.jsx(a.O,{type:"submit",$primary:!0,style:{width:"100%",marginTop:"1rem"},children:"Enviar Solicitud"})]})})})]})})}},26670:(e,r,t)=>{"use strict";t.d(r,{H_:()=>d,OY:()=>l,eZ:()=>n,m4:()=>o,uq:()=>a});var s=t(57457);let i={border:"#E5E7EB",bg:"#FFFFFF",text:"#111827"},o=s.ZP.div`
  background-color: ${i.bg};
  color: ${i.text};
  border-radius: 0.75rem; // rounded-lg
  border: 1px solid ${i.border};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  
  /* Aquí puedes añadir estilos para .dark si tu ThemeProvider lo soporta */
  /* .dark & { ... } */
`,a=s.ZP.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${i.border};
`,l=s.ZP.h3`
  font-size: 1.25rem; // text-xl
  font-weight: 600;
  line-height: 1.75rem;
  margin: 0; // Quitar margen por defecto de h3
`,n=s.ZP.div`
  padding: 1.5rem;
`,d=s.ZP.div`
  padding: 1.5rem;
  border-top: 1px solid ${i.border};
  background-color: rgba(249, 250, 251, 0.5); // bg-gray-50/50
`},82711:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var s=t(57457);let i={border:"#D1D5DB",borderFocus:"#2563EB",placeholder:"#9CA3AF",text:"#111827",bg:"transparent",shadowFocus:"rgba(37, 99, 235, 0.2)"},o=s.ZP.input`
  display: flex;
  width: 100%;
  border: 1px solid ${i.border};
  background-color: ${i.bg};
  color: ${i.text};
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem; // rounded-md
  transition: all 0.2s ease-in-out;
  box-sizing: border-box; // Importante para que el padding no afecte el width

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: ${i.borderFocus};
    box-shadow: 0 0 0 3px ${i.shadowFocus};
  }

  &::placeholder {
    color: ${i.placeholder};
  }

  /* Aquí puedes añadir estilos para .dark si tu ThemeProvider lo soporta */
`},73712:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var s=t(57457);let i=s.ZP.label`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: '#111827'; // text-gray-900 (conecta a tu tema)
  margin-bottom: 0.5rem;
  display: block; // Para que el margen funcione
`},91899:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>a,__esModule:()=>o,default:()=>l});var s=t(68570);let i=(0,s.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/quotes/page.tsx`),{__esModule:o,$$typeof:a}=i;i.default;let l=(0,s.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/quotes/page.tsx#default`)}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,788,736],()=>t(25852));module.exports=s})();