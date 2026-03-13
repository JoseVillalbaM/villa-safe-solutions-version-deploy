(()=>{var e={};e.id=327,e.ids=[327],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},83122:e=>{"use strict";e.exports=require("undici")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},35197:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>c}),t(33871),t(42476),t(35866);var o=t(23191),s=t(88716),a=t(37922),i=t.n(a),n=t(95231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(r,l);let c=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,33871)),"/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/contact/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,42476)),"/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/contact/page.tsx"],p="/contact/page",m={require:t,loadChunk:()=>Promise.resolve()},u=new o.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},46234:(e,r,t)=>{Promise.resolve().then(t.bind(t,4062))},4062:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>_});var o=t(10326),s=t(17577),a=t(90434),i=t(57457);t(46791),t(20902);var n=t(10418),l=t(55971);let c=i.ZP.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.bg};
`,d=i.ZP.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`,p=i.ZP.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin-bottom: 1rem;
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.palette.skyBlue},
    ${({theme:e})=>e.colors.palette.emeraldGreen}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,m=i.ZP.p`
  font-size: 1.125rem;
  text-align: center;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,u=i.ZP.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`,x=i.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`,g=i.ZP.div`
  border-radius: 1.5rem;
  padding: 3rem 2rem;
  text-align: center;
  background: linear-gradient(
    145deg,
    ${({theme:e})=>e.colors.palette.warmOrange},
    ${({theme:e})=>e.colors.palette.sunYellow}
  );
  color: white;
  box-shadow: ${({theme:e})=>e.colors.glowShadows.orange};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 70%
    );
    animation: pulse 4s ease-in-out infinite;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(251, 146, 60, 0.4), 0 0 60px rgba(251, 146, 60, 0.2);
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
`,h=i.ZP.h3`
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,f=i.ZP.p`
  font-size: 1.125rem;
  opacity: 0.95;
  margin-top: 1rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`,b=(0,i.ZP)(n.O)`
  background-color: #ffffff;
  color: ${({theme:e})=>e.colors.palette.warmOrange};
  font-weight: 700;
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f8fafc;
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`,y=i.ZP.div`
  background: ${({theme:e})=>e.colors.secondaryBg};
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: ${({theme:e})=>e.colors.glowShadows.blue};
  border: 1px solid ${({theme:e})=>e.colors.borders.secondary};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({theme:e})=>e.colors.glowShadows.blue},
      0 8px 30px rgba(0, 0, 0, 0.1);
  }
`,w=i.ZP.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.textPrimary};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,v=i.ZP.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 0.5rem;
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.palette.skyBlue},
    ${({theme:e})=>e.colors.palette.emeraldGreen}
  );
  color: white;
  font-size: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(10deg) scale(1.1);
  }
`,j=i.ZP.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,P=i.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,$=i.ZP.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.textPrimary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,q=i.ZP.input`
  padding: 0.875rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid ${({theme:e})=>e.colors.borders.secondary};
  background: ${({theme:e})=>e.colors.bg};
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: ${({theme:e})=>e.colors.glowShadows.blue};
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.textSecondary};
    opacity: 0.6;
  }
`,k=i.ZP.textarea`
  padding: 0.875rem 1rem;
  border-radius: 0.75rem;
  border: 2px solid ${({theme:e})=>e.colors.borders.secondary};
  background: ${({theme:e})=>e.colors.bg};
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: ${({theme:e})=>e.colors.glowShadows.blue};
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.textSecondary};
    opacity: 0.6;
  }
`,Z=(0,i.ZP)(n.O)`
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.palette.skyBlue},
    ${({theme:e})=>e.colors.palette.emeraldGreen}
  );
  color: white;
  font-weight: 700;
  padding: 1rem;
  font-size: 1.125rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.colors.glowShadows.green};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,z=i.ZP.div`
  padding: 1rem;
  border-radius: 0.75rem;
  background: ${({theme:e})=>e.colors.palette.emeraldGreen}20;
  border: 2px solid ${({theme:e})=>e.colors.palette.emeraldGreen};
  color: ${({theme:e})=>e.colors.palette.emeraldGreen};
  text-align: center;
  font-weight: 600;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;function _(){let[e,r]=(0,s.useState)(null),[t,i]=(0,s.useState)({name:"",email:"",phone:"",message:""}),[n,_]=(0,s.useState)(!1),[S,D]=(0,s.useState)(!1),{t:C}=(0,l.Z)(),G=e=>{let{name:r,value:t}=e.target;i(e=>({...e,[r]:t}))},A=async e=>{e.preventDefault(),_(!0),setTimeout(()=>{_(!1),D(!0),i({name:"",email:"",phone:"",message:""}),setTimeout(()=>D(!1),5e3)},1500)};return o.jsx(c,{children:(0,o.jsxs)(d,{children:[o.jsx(p,{children:C("contact.title")}),o.jsx(m,{children:C("contact.subtitle")}),(0,o.jsxs)(u,{children:[o.jsx(x,{children:(0,o.jsxs)(g,{children:[o.jsx(h,{children:C("contact.cta.title")}),o.jsx(f,{children:C("contact.cta.subtitle")}),o.jsx(a.default,{href:e?"/quotes":"/login",children:o.jsx(b,{children:C("contact.cta.button")})})]})}),o.jsx(x,{children:(0,o.jsxs)(y,{children:[(0,o.jsxs)(w,{children:[o.jsx(v,{children:"✉️"}),C("contact.form.title")]}),S&&o.jsx(z,{children:C("contact.form.success")}),(0,o.jsxs)(j,{onSubmit:A,children:[(0,o.jsxs)(P,{children:[(0,o.jsxs)($,{children:[o.jsx("span",{children:"\uD83D\uDC64"}),C("contact.form.name")]}),o.jsx(q,{type:"text",name:"name",value:t.name,onChange:G,placeholder:C("contact.form.namePlaceholder"),required:!0})]}),(0,o.jsxs)(P,{children:[(0,o.jsxs)($,{children:[o.jsx("span",{children:"\uD83D\uDCE7"}),C("contact.form.email")]}),o.jsx(q,{type:"email",name:"email",value:t.email,onChange:G,placeholder:C("contact.form.emailPlaceholder"),required:!0})]}),(0,o.jsxs)(P,{children:[(0,o.jsxs)($,{children:[o.jsx("span",{children:"\uD83D\uDCF1"}),C("contact.form.phone")]}),o.jsx(q,{type:"tel",name:"phone",value:t.phone,onChange:G,placeholder:C("contact.form.phonePlaceholder")})]}),(0,o.jsxs)(P,{children:[(0,o.jsxs)($,{children:[o.jsx("span",{children:"\uD83D\uDCAC"}),C("contact.form.message")]}),o.jsx(k,{name:"message",value:t.message,onChange:G,placeholder:C("contact.form.messagePlaceholder"),required:!0})]}),o.jsx(Z,{type:"submit",disabled:n,children:C(n?"contact.form.sending":"contact.form.submit")})]})]})})]})]})})}},33871:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>a,default:()=>n});var o=t(68570);let s=(0,o.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/contact/page.tsx`),{__esModule:a,$$typeof:i}=s;s.default;let n=(0,o.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/contact/page.tsx#default`)}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[948,788,736],()=>t(35197));module.exports=o})();