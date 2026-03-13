(()=>{var e={};e.id=462,e.ids=[462],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},83122:e=>{"use strict";e.exports=require("undici")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},36123:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c}),s(34578),s(42476),s(35866);var t=s(23191),i=s(88716),n=s(37922),o=s.n(n),a=s(95231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);s.d(r,l);let c=["",{children:["booking",{children:["success",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,34578)),"/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/booking/success/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,42476)),"/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/booking/success/page.tsx"],u="/booking/success/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new t.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/booking/success/page",pathname:"/booking/success",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},88428:(e,r,s)=>{Promise.resolve().then(s.bind(s,63283))},63283:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>q});var t=s(10326),i=s(17577),n=s(35047),o=s(57457);s(20902),s(76);let a=(0,o.F4)`from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); }`,l=(0,o.F4)`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`,c=o.ZP.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #0d1b2a 50%, #0a0a0a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`,d=o.ZP.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  max-width: 520px;
  width: 100%;
  text-align: center;
  animation: ${a} 0.6s ease forwards;
  backdrop-filter: blur(12px);
`,u=o.ZP.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  animation: ${l} 2s ease infinite;
  background: ${({status:e})=>"success"===e?"rgba(16, 185, 129, 0.15)":"error"===e?"rgba(239, 68, 68, 0.15)":"rgba(99, 102, 241, 0.15)"};
  border: 2px solid ${({status:e})=>"success"===e?"rgba(16, 185, 129, 0.4)":"error"===e?"rgba(239, 68, 68, 0.4)":"rgba(99, 102, 241, 0.4)"};
`,p=o.ZP.h1`
  color: #ffffff;
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  letter-spacing: -0.5px;
`,x=o.ZP.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 2rem;
`,g=o.ZP.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 2rem;
  text-align: left;
`,m=o.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  &:last-child { border-bottom: none; }
`,b=o.ZP.span`
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.85rem;
`,h=o.ZP.span`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 500;
`,f=o.ZP.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.15));
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  margin-bottom: 2rem;
  color: #10b981;
  font-size: 1.5rem;
  font-weight: 700;
`,j=o.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,v=o.ZP.button`
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.9; }
`,k=o.ZP.button`
  width: 100%;
  padding: 0.875rem;
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
  }
`,P=o.ZP.p`
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.75rem;
  margin-top: 1.5rem;
  font-family: monospace;
`;function y(){var e,r;let s=(0,n.useSearchParams)(),o=(0,n.useRouter)(),a=s.get("booking_id");s.get("cancelled");let[l,c]=(0,i.useState)("loading"),[y,q]=(0,i.useState)(null),[w,_]=(0,i.useState)("");return"loading"===l?(0,t.jsxs)(d,{children:[t.jsx(u,{status:"loading",children:"⏳"}),t.jsx(p,{children:"Verificando pago..."}),t.jsx(x,{children:"Estamos confirmando tu pago con Stripe. Esto tomar\xe1 solo unos segundos."})]}):"error"===l?(0,t.jsxs)(d,{children:[t.jsx(u,{status:"error",children:"⚠️"}),t.jsx(p,{children:"Problema con el pago"}),t.jsx(x,{children:w||"Ocurri\xf3 un problema al procesar tu pago."}),(0,t.jsxs)(j,{children:[t.jsx(v,{onClick:()=>o.push("/booking"),children:"Intentar nuevamente"}),t.jsx(k,{onClick:()=>o.push("/"),children:"Volver al inicio"})]}),a&&(0,t.jsxs)(P,{children:["Booking ID: ",a]})]}):(0,t.jsxs)(d,{children:[t.jsx(u,{status:"success",children:"✅"}),t.jsx(p,{children:"\xa1Reserva confirmada!"}),t.jsx(x,{children:"Tu dep\xf3sito fue recibido y tu cita est\xe1 reservada. Te enviaremos un correo con los detalles."}),(0,t.jsxs)(f,{children:["\uD83D\uDCB3 ",(e=y?.depositAmount,r=y?.depositCurrency,e?new Intl.NumberFormat("en-US",{style:"currency",currency:r?.toUpperCase()||"USD"}).format(e/100):"$50.00")," pagado"]}),y&&(0,t.jsxs)(g,{children:[y.serviceName&&(0,t.jsxs)(m,{children:[t.jsx(b,{children:"Servicio"}),t.jsx(h,{children:y.serviceName})]}),(y.formattedDate||y.bookingDate)&&(0,t.jsxs)(m,{children:[t.jsx(b,{children:"Fecha"}),t.jsx(h,{children:y.formattedDate||y.bookingDate})]}),y.bookingTime&&(0,t.jsxs)(m,{children:[t.jsx(b,{children:"Hora"}),t.jsx(h,{children:y.bookingTime})]}),y.clientName&&(0,t.jsxs)(m,{children:[t.jsx(b,{children:"Cliente"}),t.jsx(h,{children:y.clientName})]}),y.clientEmail&&(0,t.jsxs)(m,{children:[t.jsx(b,{children:"Confirmaci\xf3n enviada a"}),t.jsx(h,{children:y.clientEmail})]})]}),(0,t.jsxs)(j,{children:[t.jsx(v,{onClick:()=>o.push("/"),children:"Volver al inicio"}),t.jsx(k,{onClick:()=>o.push("/booking"),children:"Hacer otra reserva"})]}),a&&(0,t.jsxs)(P,{children:["Booking #",a.slice(-8).toUpperCase()]})]})}function q(){return t.jsx(c,{children:t.jsx(i.Suspense,{fallback:(0,t.jsxs)(d,{children:[t.jsx(u,{status:"loading",children:"⏳"}),t.jsx(p,{children:"Cargando..."})]}),children:t.jsx(y,{})})})}},34578:(e,r,s)=>{"use strict";s.r(r),s.d(r,{$$typeof:()=>o,__esModule:()=>n,default:()=>a});var t=s(68570);let i=(0,t.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/booking/success/page.tsx`),{__esModule:n,$$typeof:o}=i;i.default;let a=(0,t.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/booking/success/page.tsx#default`)}};var r=require("../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[948,788,736],()=>s(36123));module.exports=t})();