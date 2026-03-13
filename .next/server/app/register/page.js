(()=>{var e={};e.id=11,e.ids=[11],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},83122:e=>{"use strict";e.exports=require("undici")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},94320:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>x,tree:()=>d}),t(7203),t(42476),t(35866);var s=t(23191),a=t(88716),o=t(37922),i=t.n(o),l=t(95231),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);t.d(r,n);let d=["",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,7203)),"/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/register/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,42476)),"/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"]}],u=["/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/register/page.tsx"],c="/register/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},305:(e,r,t)=>{Promise.resolve().then(t.bind(t,91472))},91472:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>$});var s=t(10326),a=t(17577),o=t(35047),i=t(57457),l=t(90434),n=t(20902),d=t(10418),u=t(82711),c=t(73712),p=t(26670),x=t(46791),h=t(55971);let m=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 2rem;
  background: ${({theme:e})=>e.colors.bg};
`,g=i.ZP.div`
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
  //text-fill-color: transparent;
`;function $(){let[e,r]=(0,a.useState)(""),[t,i]=(0,a.useState)(""),[l,d]=(0,a.useState)(""),[$,j]=(0,a.useState)(""),[w,k]=(0,a.useState)(null),Z=(0,o.useRouter)(),{t:_}=(0,h.Z)(),F=async r=>{if(r.preventDefault(),k(null),t.length<6){k(_("auth.error.shortPassword"));return}if(!l.trim()||!$.trim()){k(_("auth.error.nameRequired"));return}try{let r=await (0,x.Xb)(n.I,e,t);await (0,x.ck)(r.user,{displayName:`${l.trim()} ${$.trim()}`}),Z.push("/")}catch(e){switch(e.code){case"auth/email-already-in-use":k(_("auth.error.emailInUse"));break;case"auth/invalid-email":k(_("auth.error.invalidEmail"));break;case"auth/operation-not-allowed":k(_("auth.error.operationNotAllowed"));break;case"auth/weak-password":k(_("auth.error.weakPassword"));break;default:k(`${_("auth.error.generic")}: ${e.message}`)}}};return s.jsx(m,{children:(0,s.jsxs)(y,{style:{width:"100%",maxWidth:"400px"},children:[s.jsx(p.uq,{children:s.jsx(q,{children:_("auth.createAccount")})}),(0,s.jsxs)(p.eZ,{children:[s.jsx("form",{onSubmit:F,children:(0,s.jsxs)(g,{children:[(0,s.jsxs)("div",{children:[s.jsx(c.Z,{htmlFor:"firstName",children:_("auth.firstName")}),s.jsx(u.Z,{id:"firstName",type:"text",value:l,onChange:e=>d(e.target.value),placeholder:_("auth.firstNamePlaceholder"),required:!0})]}),(0,s.jsxs)("div",{children:[s.jsx(c.Z,{htmlFor:"lastName",children:_("auth.lastName")}),s.jsx(u.Z,{id:"lastName",type:"text",value:$,onChange:e=>j(e.target.value),placeholder:_("auth.lastNamePlaceholder"),required:!0})]}),(0,s.jsxs)("div",{children:[s.jsx(c.Z,{htmlFor:"email",children:_("auth.email")}),s.jsx(u.Z,{id:"email",type:"email",value:e,onChange:e=>r(e.target.value),placeholder:_("auth.emailPlaceholder"),required:!0})]}),(0,s.jsxs)("div",{children:[s.jsx(c.Z,{htmlFor:"password",children:_("auth.password")}),s.jsx(u.Z,{id:"password",type:"password",value:t,onChange:e=>i(e.target.value),placeholder:_("auth.passwordPlaceholder"),required:!0})]}),s.jsx(P,{type:"submit",style:{width:"100%",marginTop:"1rem"},children:_("auth.registerButton")})]})}),w&&s.jsx(b,{children:w})]}),s.jsx(p.H_,{children:(0,s.jsxs)(f,{children:[_("auth.alreadyHaveAccount")," ",s.jsx(v,{href:"/login",children:_("auth.login")})]})})]})})}},26670:(e,r,t)=>{"use strict";t.d(r,{H_:()=>d,OY:()=>l,eZ:()=>n,m4:()=>o,uq:()=>i});var s=t(57457);let a={border:"#E5E7EB",bg:"#FFFFFF",text:"#111827"},o=s.ZP.div`
  background-color: ${a.bg};
  color: ${a.text};
  border-radius: 0.75rem; // rounded-lg
  border: 1px solid ${a.border};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  
  /* Aquí puedes añadir estilos para .dark si tu ThemeProvider lo soporta */
  /* .dark & { ... } */
`,i=s.ZP.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${a.border};
`,l=s.ZP.h3`
  font-size: 1.25rem; // text-xl
  font-weight: 600;
  line-height: 1.75rem;
  margin: 0; // Quitar margen por defecto de h3
`,n=s.ZP.div`
  padding: 1.5rem;
`,d=s.ZP.div`
  padding: 1.5rem;
  border-top: 1px solid ${a.border};
  background-color: rgba(249, 250, 251, 0.5); // bg-gray-50/50
`},82711:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var s=t(57457);let a={border:"#D1D5DB",borderFocus:"#2563EB",placeholder:"#9CA3AF",text:"#111827",bg:"transparent",shadowFocus:"rgba(37, 99, 235, 0.2)"},o=s.ZP.input`
  display: flex;
  width: 100%;
  border: 1px solid ${a.border};
  background-color: ${a.bg};
  color: ${a.text};
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem; // rounded-md
  transition: all 0.2s ease-in-out;
  box-sizing: border-box; // Importante para que el padding no afecte el width

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: ${a.borderFocus};
    box-shadow: 0 0 0 3px ${a.shadowFocus};
  }

  &::placeholder {
    color: ${a.placeholder};
  }

  /* Aquí puedes añadir estilos para .dark si tu ThemeProvider lo soporta */
`},73712:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var s=t(57457);let a=s.ZP.label`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: '#111827'; // text-gray-900 (conecta a tu tema)
  margin-bottom: 0.5rem;
  display: block; // Para que el margen funcione
`},7203:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>o,default:()=>l});var s=t(68570);let a=(0,s.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/register/page.tsx`),{__esModule:o,$$typeof:i}=a;a.default;let l=(0,s.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/register/page.tsx#default`)}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,788,736],()=>t(94320));module.exports=s})();