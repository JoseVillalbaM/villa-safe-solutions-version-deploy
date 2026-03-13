exports.id=736,exports.ids=[736],exports.modules={37219:(e,r,o)=>{Promise.resolve().then(o.bind(o,86675)),Promise.resolve().then(o.bind(o,88483)),Promise.resolve().then(o.bind(o,2522)),Promise.resolve().then(o.bind(o,40283))},7143:(e,r,o)=>{Promise.resolve().then(o.t.bind(o,12994,23)),Promise.resolve().then(o.t.bind(o,96114,23)),Promise.resolve().then(o.t.bind(o,9727,23)),Promise.resolve().then(o.t.bind(o,79671,23)),Promise.resolve().then(o.t.bind(o,41868,23)),Promise.resolve().then(o.t.bind(o,84759,23))},86675:(e,r,o)=>{"use strict";o.d(r,{default:()=>em});var t=o(10326),a=o(17577),s=o(46791),i=o(20902),n=o(90434),l=o(35047),c=o(38437),d=o(99202),h=o(71045),u=o(56929),m=o(80380),g=o(56636),p=o(10418),f=o(80438),x=o(55971),b=o(57457);let v={deepBlue:"#1e3a8a",skyBlue:"#3b82f6",emeraldGreen:"#10b981",sunYellow:"#fbbf24",warmOrange:"#f97316"},y=b.ZP.svg`
  /* --- Estilos Base --- */
  width: ${e=>e.$width||40}px;
  height: ${e=>e.$height||40}px;
  transition: all 0.3s ease;
  cursor: pointer;

  /* --- Efecto HOVER: Sombra Iluminada (Glow Azul) --- */
  &:hover {
    /* El drop-shadow se mueve y se intensifica ligeramente */
    filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.8)); /* Glow con Sky Blue */
    transform: scale(1.1); /* Ligero levantamiento */
  }
`;function w({width:e=40,height:r=40,className:o}){return(0,t.jsxs)(y,{$width:e,$height:r,viewBox:"0 0 120 120",className:o,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsxs)("defs",{children:[(0,t.jsxs)("linearGradient",{id:"multi-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:v.deepBlue}),t.jsx("stop",{offset:"25%",stopColor:v.skyBlue}),t.jsx("stop",{offset:"50%",stopColor:v.emeraldGreen}),t.jsx("stop",{offset:"75%",stopColor:v.sunYellow}),t.jsx("stop",{offset:"100%",stopColor:v.warmOrange})]}),t.jsx("filter",{id:"base-shadow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:t.jsx("feDropShadow",{dx:"0",dy:"3",stdDeviation:"5",floodColor:v.skyBlue,floodOpacity:"0.4"})})]}),t.jsx("circle",{cx:"60",cy:"60",r:"55",fill:"url(#multi-gradient)",filter:"url(#base-shadow)"}),t.jsx("circle",{cx:"60",cy:"60",r:"48",fill:v.deepBlue,opacity:"0.85"}),t.jsx("text",{x:"60",y:"75",textAnchor:"middle",fill:"white",fontSize:"38",fontWeight:"extrabold",fontFamily:"Inter, sans-serif",style:{textShadow:"0 4px 6px rgba(0, 0, 0, 0.4)",filter:"drop-shadow(0 0 4px rgba(255, 255, 255, 0.7))"},children:"VSS"}),t.jsx("circle",{cx:"40",cy:"40",r:"12",fill:v.skyBlue,opacity:"0.4",style:{filter:"blur(6px)"}})]})}let j=b.ZP.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${({theme:e})=>e.colors.bg};
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary};
  padding: 0 1rem;
`,P=b.ZP.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  max-width: 80rem;
  margin: 0 auto;
`,S=(0,b.ZP)(n.default)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
`,k=b.ZP.span`
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary}, #F59E0B);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`,C=b.ZP.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`,$=(0,b.ZP)(n.default)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 500;
  transition: color 0.2s;
  &:hover { color: ${({theme:e})=>e.colors.primary}; }
`,B=b.ZP.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Z=b.ZP.button`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.primary};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  color: ${({theme:e})=>e.colors.textPrimary};
  
  &:hover { background: ${({theme:e})=>e.colors.primary}; }
`,z=(0,b.ZP)(Z)`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`,E=b.ZP.div`
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  background: ${({theme:e})=>e.colors.bg};
  border-top: 1px solid ${({theme:e})=>e.colors.secondary};
  padding: 1rem;
  display: ${e=>e.$open?"flex":"none"};
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 768px) {
    display: none;
  }
`,T=(0,b.ZP)(n.default)`
  color: ${({theme:e})=>e.colors.textSecondary};
  font-weight: 500;
  padding: 0.5rem 0;
  &:hover { color: ${({theme:e})=>e.colors.primary}; }
`,L=b.ZP.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: 0.5rem;
  }
`,q=b.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`,A=b.ZP.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: ${({theme:e})=>e.colors.secondaryBg};
  border: 1px solid ${({theme:e})=>e.colors.primary}20;
`,R=b.ZP.span`
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.palette.skyBlue},
    ${({theme:e})=>e.colors.palette.emeraldGreen}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,I=(0,b.ZP)(p.O)`
  background: linear-gradient(
    135deg,
    ${({theme:e})=>e.colors.palette.emeraldGreen},
    ${({theme:e})=>e.colors.palette.skyBlue}
  );
  box-shadow: 
    0 0 10px ${({theme:e})=>e.colors.palette.coralRed}40,
    0 0 20px ${({theme:e})=>e.colors.palette.warmOrange}30;
  border: 1px solid ${({theme:e})=>e.colors.palette.coralRed}40;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color:white;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 
      0 0 15px ${({theme:e})=>e.colors.palette.coralRed}60,
      0 0 25px ${({theme:e})=>e.colors.palette.warmOrange}40;
    transform: translateY(-2px);
  }
`;function N({user:e}){let[r,o]=(0,a.useState)(!1),{language:b,setLanguage:v,t:y}=(0,x.Z)(),{isDarkMode:N,toggleTheme:M}=(0,f.F)(),G=(0,l.useRouter)(),U=e?.name||e?.email?.split("@")[0]||y("header.user"),F=e=>{localStorage.setItem("language",e),window.dispatchEvent(new Event("languageChanged")),v(e)},O=async()=>{try{await (0,s.w7)(i.I),o(!1),G.push("/")}catch(e){console.error("Error al cerrar sesi\xf3n:",e)}};return(0,t.jsxs)(j,{children:[(0,t.jsxs)(P,{children:[(0,t.jsxs)(S,{href:"/",children:[t.jsx(w,{width:40,height:40}),t.jsx(k,{children:"Villa Safe Solutions Pro"})]}),(0,t.jsxs)(C,{children:[t.jsx($,{href:"/services",children:y("header.services")}),t.jsx($,{href:"/gallery",children:y("header.gallery")}),t.jsx($,{href:"/contact",children:y("header.contact")}),t.jsx($,{href:"/about",children:y("header.about")}),e&&t.jsx($,{href:"/quotes",children:y("header.quotes")}),e&&t.jsx($,{href:"/booking",children:y("header.booking")})]}),(0,t.jsxs)(B,{children:[t.jsx(Z,{onClick:M,title:y("header.changeTheme"),children:N?t.jsx(c.Z,{size:14}):t.jsx(d.Z,{size:14})}),(0,t.jsxs)(Z,{onClick:()=>F("es"===b?"en":"es"),title:y("header.changeLanguage"),children:[t.jsx(h.Z,{size:14}),t.jsx("span",{style:{fontSize:"0.75rem",marginLeft:2},children:b.toUpperCase()})]}),t.jsx(L,{children:e?(0,t.jsxs)(A,{children:[(0,t.jsxs)(R,{children:[t.jsx(u.Z,{size:16}),U]}),t.jsx(I,{onClick:O,children:y("header.logout")})]}):(0,t.jsxs)(t.Fragment,{children:[t.jsx(n.default,{href:"/login",passHref:!0,legacyBehavior:!0,children:t.jsx(p.O,{as:"a",$primary:!0,style:{marginLeft:8},children:y("header.login")})}),t.jsx(n.default,{href:"/register",passHref:!0,legacyBehavior:!0,children:t.jsx(p.O,{as:"a",style:{marginLeft:8},children:y("header.register")})})]})}),t.jsx(z,{onClick:()=>o(!r),title:y("header.toggleMenu"),children:r?t.jsx(m.Z,{size:20}):t.jsx(g.Z,{size:20})})]})]}),(0,t.jsxs)(E,{$open:r,children:[t.jsx(T,{href:"/services",onClick:()=>o(!1),children:y("header.services")}),t.jsx(T,{href:"/gallery",onClick:()=>o(!1),children:y("header.gallery")}),t.jsx(T,{href:"/contact",onClick:()=>o(!1),children:y("header.contact")}),e&&t.jsx(T,{href:"/quotes",onClick:()=>o(!1),children:y("header.quotes")}),e&&t.jsx(T,{href:"/booking",onClick:()=>o(!1),children:y("header.booking")}),t.jsx(q,{children:e?(0,t.jsxs)(A,{children:[(0,t.jsxs)(R,{children:[t.jsx(u.Z,{size:16}),U]}),t.jsx(I,{onClick:O,children:y("header.logout")})]}):(0,t.jsxs)(t.Fragment,{children:[t.jsx(n.default,{href:"/login",passHref:!0,legacyBehavior:!0,children:t.jsx(p.O,{as:"a",$primary:!0,onClick:()=>o(!1),children:y("header.login")})}),t.jsx(n.default,{href:"/register",passHref:!0,legacyBehavior:!0,children:t.jsx(p.O,{as:"a",onClick:()=>o(!1),children:y("header.register")})})]})})]})]})}var M=o(66001),G=o(30243),U=o(70402),F=o(41484),O=o(41335);let V=(0,b.F4)`0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); }`,H=b.ZP.footer`background-color: ${e=>e.theme.colors.secondaryBg}; border-top: 1px solid ${e=>e.theme.colors.borders.secondary};`,D=b.ZP.div`max-width: 1200px; margin: 0 auto; padding: 3rem 1rem;`,W=b.ZP.div`
display: grid;
grid-template-columns: 1fr;
gap: 2rem;

@media (min-width: 768px) {
grid-template-columns: repeat(3, 1fr);
}
`,Y=b.ZP.div`display: flex; flex-direction: column; gap: 1rem;`,_=b.ZP.h3`font-size: 1.125rem; font-weight: bold; color: ${e=>e.theme.colors.textPrimary};`,Q=b.ZP.div`display: flex; flex-direction: column; gap: 0.75rem;`,X=b.ZP.div`
display: flex;
align-items: center;
gap: 0.75rem;
color: ${e=>e.theme.colors.textSecondary};
transition: color 0.3s ease;

&:hover {
color: ${e=>e.theme.colors.primary};
}

svg {
flex-shrink: 0;
}
`,J=b.ZP.a`
color: inherit;
text-decoration: none;

&:hover {
text-decoration: underline;
}
`,K=b.ZP.span`color: inherit;`,ee=b.ZP.div`display: flex; gap: 1rem; flex-wrap: wrap;`,er=b.ZP.a`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  
  /* Gradiente vibrante usando tu paleta */
  background: linear-gradient(
    135deg, 
    ${e=>e.theme.colors.palette.deepBlue}, 
    ${e=>e.theme.colors.palette.skyBlue}
  );
  
  /* Sombra luminosa (Glow effect) */
  box-shadow: ${e=>e.theme.colors.glowShadows.blue};
  
  /* Icono en blanco para que resalte sobre el fondo oscuro */
  color: white; 
  
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  /* Borde sutil para darle acabado de cristal */
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: scale(1.15) translateY(-2px);
    
    /* Al hacer hover, cambiamos a tonos verdes/esmeralda */
    background: linear-gradient(
      135deg, 
      ${e=>e.theme.colors.palette.skyBlue}, 
      ${e=>e.theme.colors.palette.emeraldGreen}
    );
    
    /* El brillo también cambia a verde */
    box-shadow: ${e=>e.theme.colors.glowShadows.green};
    color: white;
  }

  svg {
    flex-shrink: 0;
  }
`,eo=b.ZP.div`display: flex; flex-direction: column; gap: 1rem;`,et=b.ZP.p`font-size: 0.875rem; color: ${e=>e.theme.colors.textSecondary};`,ea=b.ZP.div`height: 3rem; width: 3rem; border-radius: 0.5rem; background: linear-gradient( to bottom right, ${e=>e.theme.colors.primary}, ${e=>e.theme.colors.secondary} ); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.25rem; animation: ${V} 3s ease-in-out infinite;`,es=b.ZP.div`border-top: 1px solid ${e=>e.theme.colors.borders.secondary}; margin-top: 2rem; padding-top: 2rem; text-align: center;`,ei=b.ZP.p`font-size: 0.875rem; color: ${e=>e.theme.colors.textSecondary};`,en=({size:e=24,...r})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor",...r,children:t.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})}),el=({size:e=24,...r})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor",...r,children:t.jsx("path",{d:"M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.852-2.433-4.587 0-3.725 2.705-7.149 7.817-7.149 4.104 0 7.296 2.953 7.296 6.912 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z"})}),ec=({size:e=24,...r})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor",...r,children:t.jsx("path",{d:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.92 6.48-1.8 1.63-4.32 2.19-6.73 1.75-2.67-.48-5.05-2.47-5.96-5.05-.62-1.74-.46-3.74.45-5.35 1.4-2.47 4.1-3.96 6.94-3.83v4.21c-1.47-.11-2.91.8-3.52 2.15-.43.94-.38 2.05.15 2.95.73 1.25 2.22 1.96 3.65 1.76 1.42-.2 2.55-1.33 2.74-2.76.04-.32.03-.64.03-.97V.02z"})}),ed=({size:e=24,...r})=>t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor",...r,children:t.jsx("path",{d:"M11.5 23.5l-9-9c-.7-.7-.7-1.8 0-2.5l9-9c.3-.3.8-.5 1.3-.5h7.5c1.1 0 2 .9 2 2v7.5c0 .5-.2 1-.5 1.3l-9 9c-.7.7-1.8.7-2.5 0zM17.5 7c-.8 0-1.5.7-1.5 1.5S16.7 10 17.5 10s1.5-.7 1.5-1.5S18.3 7 17.5 7z"})});function eh(){let{t:e}=(0,x.Z)(),r=[{icon:M.Z,href:"https://www.facebook.com/share/18MScXxRv8/?mibextid=wwXIfr",label:"Facebook"},{icon:G.Z,href:"https://www.instagram.com/villasafesolutions?igsh=aTlvbXl4aWhjeXow&utm_source=qr",label:"Instagram"},{icon:en,href:"https://wa.me/17867346928",label:"WhatsApp"},{icon:el,href:"https://www.pinterest.com/villaSafeSolutions/",label:"Pinterest"},{icon:ec,href:"https://www.tiktok.com/@villasafesolution?_r=1&_t=ZT-94RTXdz7g3p",label:"TikTok"},{icon:ed,href:"https://offerup.co/profile/villasafesolutions",label:"OfferUp"}];return t.jsx(H,{children:(0,t.jsxs)(D,{children:[(0,t.jsxs)(W,{children:[(0,t.jsxs)(Y,{children:[t.jsx(_,{}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(X,{children:[t.jsx(U.Z,{size:20}),t.jsx(J,{href:"tel:+17867346928",children:"+1 (786) 734-6928"})]}),(0,t.jsxs)(X,{children:[t.jsx(F.Z,{size:20}),t.jsx(J,{href:"mailto:villasafesolutions2023@gmail.com",children:"villasafesolutions2023@gmail.com"})]}),(0,t.jsxs)(X,{children:[t.jsx(O.Z,{size:20}),t.jsx(K,{children:"1993 Carnostie Road 33884 fl Winter Haven"})]})]})]}),(0,t.jsxs)(Y,{children:[t.jsx(_,{}),t.jsx(ee,{children:r.map(e=>{let r=e.icon;return t.jsx(er,{href:e.href,target:"_blank",rel:"noopener noreferrer","aria-label":e.label,children:t.jsx(r,{size:20})},e.label)})})]}),(0,t.jsxs)(eo,{children:[t.jsx(_,{children:"Villa Safe Solutions."}),t.jsx(et,{}),t.jsx("div",{style:{paddingTop:"0.5rem"},children:t.jsx(ea,{children:"VS"})})]})]}),t.jsx(es,{children:(0,t.jsxs)(ei,{children:["\xa9 ",new Date().getFullYear()," ","Villa Safe Solutions."]})})]})})}var eu=o(88483);function em({children:e}){let[r,o]=(0,a.useState)(null),[s,i]=(0,a.useState)(!0);return t.jsx(x.i,{children:(0,t.jsxs)(f.T,{children:[t.jsx(eu.GlobalStyles,{}),t.jsx(N,{user:r}),t.jsx("main",{style:{flexGrow:1,minHeight:"80vh"},children:e}),t.jsx(eh,{})]})})}},88483:(e,r,o)=>{"use strict";o.d(r,{GlobalStyles:()=>a});var t=o(57457);let a=(0,t.vJ)`
  :root {
    --primary: #3b82f6;
    --accent: #f59e0b;
    --bg: #ffffff;
    --text: #1f2937;
    --card: #f9fafb;
    --border: #e5e7eb;
    --radius: 8px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }
`},10418:(e,r,o)=>{"use strict";o.d(r,{O:()=>n});var t=o(57457);let a={skyBlue:"#3b82f6"},s=(0,t.iv)`
  /* Gradiente Base: Azul más oscuro (40% Opacidad) para mejor visibilidad */
  background: linear-gradient(90deg, 
    rgba(30, 58, 138, 0.4) 0%, /* Deep Blue */
    rgba(59, 130, 246, 0.8) 100% /* Sky Blue */
  );
  /* Borde y color de texto para el estado base */
  border: 1px solid rgba(59, 130, 246, 0.5); /* Borde un poco más visible */
  color: #fff; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  /* Estilos Hover: Cambio de color, sombra luminosa y levantamiento */
  &:hover {
    transform: translateY(-3px); 
    /* Gradiente de Hover: Verde/Azul más visible (45% Opacidad) */
    background: linear-gradient(90deg, 
      rgba(16, 185, 129, 0.45) 0%, /* Emerald Green */
      rgba(59, 130, 246, 0.45) 100% /* Sky Blue */
    );
    border: 1px solid rgba(59, 130, 246, 0.6);
    /* Sombra Iluminada (Glow Azul Cielo) */
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5), 
                0 0 20px rgba(59, 130, 246, 0.2); 
  }
`,i=(0,t.iv)`
  /* Fondo transparente con un borde sutil para que se aprecie mejor en modo oscuro */
  background: rgba(30, 58, 138, 0.1); /* Ligero toque de azul transparente */
  color: ${a.skyBlue};
  border: 1px solid ${a.skyBlue};
  
  &:hover {
    color: #fff;
    /* Al hacer hover, se vuelve opaco con sombra luminosa */
    background-color: ${a.skyBlue}; 
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }
`,n=t.ZP.button`
  /* Estilos comunes */
  padding: 0.75rem 1.5rem;
  border-radius: 9999px; /* Píldora */
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-out; 

  /* Aplicación de estilos primarios o secundarios */
  ${e=>e.$primary?s:i}
`},2522:(e,r,o)=>{"use strict";o.d(r,{AuthProvider:()=>d,a:()=>c});var t=o(10326),a=o(17577),s=o(46791),i=o(20902),n=o(35047);let l=(0,a.createContext)({user:null,loading:!0,logout:async()=>{}}),c=()=>(0,a.useContext)(l);function d({children:e}){let[r,o]=(0,a.useState)(null),[c,d]=(0,a.useState)(!0),h=(0,n.useRouter)(),u=async()=>{try{await (0,s.w7)(i.I),h.push("/login")}catch(e){console.error("Error al cerrar sesi\xf3n:",e)}};return t.jsx(l.Provider,{value:{user:r,loading:c,logout:u},children:e})}},55971:(e,r,o)=>{"use strict";o.d(r,{Z:()=>l,i:()=>n});var t=o(10326),a=o(17577);let s={es:{"header.services":"Servicios","header.about":"Acerca de Nosotros","header.gallery":"Galer\xeda","header.contact":"Contacto","header.quotes":"Cotizaciones","header.logout":"Cerrar Sesi\xf3n","header.login":"Iniciar Sesi\xf3n","header.register":"Registrarse","header.booking":"Reservar","header.changeTheme":"Cambiar tema","header.changeLanguage":"Cambiar idioma","header.toggleMenu":"Abrir/Cerrar men\xfa","header.user":"Usuario","home.hero.title":"Villa Safe Solutions","home.hero.subtitle":"Soluciones profesionales para tu hogar y negocio","home.hero.quoteButton":"Solicitar Cotizaci\xf3n","home.hero.contactButton":"Contacto","home.hero.digitalCardButton":"ver Tarjeta Digital","home.services.title":"Servicios","home.services.subtitle":"Soluciones profesionales para todas tus necesidades","home.contact.title":"Cont\xe1ctanos","home.contact.subtitle":"Estamos listos para ayudarte con tu pr\xf3ximo proyecto.","home.contact.qualityTitle":"Calidad y Confianza","home.contact.description":"Con a\xf1os de experiencia en la industria, nuestro equipo se dedica a proveer soluciones confiables y de alta calidad. Nos enorgullecemos de nuestro trabajo y de la satisfacci\xf3n de nuestros clientes.","home.contact.contactText":"Puedes contactarnos directamente o llenar nuestro formulario de contacto.","home.contact.formButton":"Ver formulario de contacto","home.contact.businessCardTitle":"Tarjeta de Negocios","home.reviews.title":"Testimonios y Rese\xf1as","home.reviews.subtitle":"Lo que nuestros clientes dicen sobre nuestro trabajo","home.reviews.emptyState":"A\xfan no hay rese\xf1as. \xa1S\xe9 el primero en compartir tu experiencia!","home.reviews.formTitle":"Deja tu opini\xf3n","home.reviews.nameLabel":"Nombre","home.reviews.namePlaceholder":"Tu nombre","home.reviews.ratingLabel":"Calificaci\xf3n","home.reviews.commentLabel":"Comentario","home.reviews.commentPlaceholder":"Comparte tu experiencia...","home.reviews.submitButton":"Publicar Rese\xf1a","home.reviews.loginRequired":"Inicia sesi\xf3n para dejar una rese\xf1a","home.reviews.loginButton":"Iniciar Sesi\xf3n","home.reviews.loginMessage":"Solo los clientes registrados pueden dejar rese\xf1as sobre nuestros servicios.","auth.firstName":"Nombre","auth.lastName":"Apellido","auth.firstNamePlaceholder":"Ingresa tu nombre","auth.lastNamePlaceholder":"Ingresa tu apellido","auth.login":"Iniciar sesi\xf3n","auth.register":"Registrarse","auth.email":"Email","auth.password":"Contrase\xf1a","auth.createAccount":"Crear una cuenta","auth.alreadyHaveAccount":"\xbfYa tienes cuenta?","auth.noAccount":"\xbfNo tienes cuenta?","auth.loginButton":"Iniciar sesi\xf3n","auth.registerButton":"Registrarse","auth.emailPlaceholder":"tu@email.com","auth.passwordPlaceholder":"••••••••","auth.error.emailInUse":"Este correo electr\xf3nico ya est\xe1 en uso.","auth.error.invalidEmail":"El correo electr\xf3nico no es v\xe1lido.","auth.error.weakPassword":"La contrase\xf1a es muy d\xe9bil.","auth.error.userNotFound":"Usuario no encontrado.","auth.error.wrongPassword":"Contrase\xf1a incorrecta.","auth.error.generic":"Error al procesar la solicitud.","auth.error.shortPassword":"La contrase\xf1a debe tener al menos 6 caracteres.","auth.error.operationNotAllowed":"El registro con email/contrase\xf1a no est\xe1 habilitado.","auth.error.nameRequired":"El nombre y apellido son requeridos.","contact.title":"Cont\xe1ctanos","contact.subtitle":"Estamos aqu\xed para ayudarte. Env\xedanos un mensaje y te responderemos lo antes posible.","contact.cta.title":"\xbfListo para empezar tu proyecto?","contact.cta.subtitle":"Solicita una cotizaci\xf3n gratuita y descubre c\xf3mo podemos transformar tus espacios","contact.cta.button":"Solicitar Cotizaci\xf3n","contact.form.title":"Env\xedanos un mensaje","contact.form.name":"Nombre completo","contact.form.email":"Correo electr\xf3nico","contact.form.phone":"Tel\xe9fono","contact.form.message":"Mensaje","contact.form.submit":"Enviar Mensaje","contact.form.sending":"Enviando...","contact.form.success":"\xa1Mensaje enviado con \xe9xito! Te contactaremos pronto.","contact.form.namePlaceholder":"Juan P\xe9rez","contact.form.emailPlaceholder":"juan@ejemplo.com","contact.form.phonePlaceholder":"+1 (555) 123-4567","contact.form.messagePlaceholder":"Cu\xe9ntanos sobre tu proyecto..."},en:{"header.services":"Services","header.gallery":"Gallery","header.contact":"Contact","header.about":"About Us","header.quotes":"Quotes","header.logout":"Logout","header.login":"Login","header.register":"Register","header.booking":"Booking","header.changeTheme":"Change theme","header.changeLanguage":"Change language","header.toggleMenu":"Toggle menu","header.user":"User","home.hero.title":"Villa Safe Solutions","home.hero.subtitle":"Professional solutions for your home and business","home.hero.quoteButton":"Request Quote","home.hero.contactButton":"Contact","home.hero.digitalCardButton":" View Digital Card","home.services.title":"Services","home.services.subtitle":"Professional solutions for all your needs","home.contact.title":"Contact Us","home.contact.subtitle":"We are ready to help you with your next project.","home.contact.qualityTitle":"Quality and Trust","home.contact.description":"With years of experience in the industry, our team is dedicated to providing reliable and high-quality solutions. We take pride in our work and customer satisfaction.","home.contact.contactText":"You can contact us directly or fill out our contact form.","home.contact.formButton":"View contact form","home.contact.businessCardTitle":"Business Card","home.reviews.title":"Testimonials and Reviews","home.reviews.subtitle":"What our clients say about our work","home.reviews.emptyState":"No reviews yet. Be the first to share your experience!","home.reviews.formTitle":"Leave your review","home.reviews.nameLabel":"Name","home.reviews.namePlaceholder":"Your name","home.reviews.ratingLabel":"Rating","home.reviews.commentLabel":"Comment","home.reviews.commentPlaceholder":"Share your experience...","home.reviews.submitButton":"Submit Review","home.reviews.loginRequired":"Log in to leave a review","home.reviews.loginButton":"Log In","home.reviews.loginMessage":"Only registered customers can leave reviews about our services.","auth.firstName":"First Name","auth.lastName":"Last Name","auth.firstNamePlaceholder":"Enter your first name","auth.lastNamePlaceholder":"Enter your last name","auth.login":"Login","auth.register":"Register","auth.email":"Email","auth.password":"Password","auth.createAccount":"Create an account","auth.alreadyHaveAccount":"Already have an account?","auth.noAccount":"Don't have an account?","auth.loginButton":"Login","auth.registerButton":"Register","auth.emailPlaceholder":"you@email.com","auth.passwordPlaceholder":"••••••••","auth.error.emailInUse":"This email is already in use.","auth.error.invalidEmail":"The email is invalid.","auth.error.weakPassword":"The password is too weak.","auth.error.userNotFound":"User not found.","auth.error.wrongPassword":"Incorrect password.","auth.error.generic":"Error processing request.","auth.error.shortPassword":"Password must be at least 6 characters.","auth.error.operationNotAllowed":"Email/password registration is not enabled.","auth.error.nameRequired":"First and last name are required.","contact.title":"Contact Us","contact.subtitle":"We're here to help. Send us a message and we'll get back to you as soon as possible.","contact.cta.title":"Ready to start your project?","contact.cta.subtitle":"Request a free quote and discover how we can transform your spaces","contact.cta.button":"Request Quote","contact.form.title":"Send us a message","contact.form.name":"Full name","contact.form.email":"Email address","contact.form.phone":"Phone","contact.form.message":"Message","contact.form.submit":"Send Message","contact.form.sending":"Sending...","contact.form.success":"Message sent successfully! We'll contact you soon.","contact.form.namePlaceholder":"John Doe","contact.form.emailPlaceholder":"john@example.com","contact.form.phonePlaceholder":"+1 (555) 123-4567","contact.form.messagePlaceholder":"Tell us about your project..."}},i=(0,a.createContext)(void 0),n=({children:e})=>{let[r,o]=(0,a.useState)("en");return t.jsx(i.Provider,{value:{language:r,setLanguage:o,t:e=>s[r][e]||e},children:e})},l=()=>{let e=(0,a.useContext)(i);if(void 0===e)throw Error("useLanguage debe usarse dentro de un LanguageProvider");return e}},80438:(e,r,o)=>{"use strict";o.d(r,{T:()=>c,F:()=>d});var t=o(10326),a=o(17577),s=o(57457);let i={colors:{primary:"#3b82f6",secondary:"#10b981",headerPrimary:"#d1d5db",bg:"#000712ed",secondaryBg:"#023859",success:"#10b777",textPrimary:"#ffffff",textSecondary:"#d1d5db",borders:{primary:"#3b82f6",secondary:"#4b5563"},glowShadows:{blue:"0 0 10px rgba(59, 130, 246, 0.1), 0 0 40px rgba(59, 130, 246, 0.1)",green:"0 0 0.5px rgba(16, 185, 129, 0.1), 0 0 40px rgba(16, 185, 129, 0.1)",orange:"0 0 20px rgba(249, 115, 22, 0.1), 0 0 40px rgba(249, 115, 22, 0.1)",red:"0 0 20px rgba(239, 68, 68, 0.1), 0 0 40px rgba(239, 68, 68, 0.1)"},palette:{deepBlue:"#1e3a8a",skyBlue:"#3b82f6",emeraldGreen:"#10b981",sunYellow:"#fbbf24",warmOrange:"#f97316",coralRed:"#ef4444"}}},n={colors:{...i.colors,bg:"#f3f4f6",secondaryBg:"#ffffff",textPrimary:"#1f2937",textSecondary:"#6b7280",borders:{primary:"#3b82f6",secondary:"#d1d5db"}}},l=(0,a.createContext)(void 0),c=({children:e})=>{let[r,o]=(0,a.useState)(!0),c=r?i:n;return t.jsx(l.Provider,{value:{isDarkMode:r,toggleTheme:()=>{o(e=>!e)},theme:c},children:t.jsx(s.f6,{theme:c,children:e})})},d=()=>{let e=(0,a.useContext)(l);if(void 0===e)throw Error("useTheme debe usarse dentro de ThemeProviderComponent");return e}},20902:(e,r,o)=>{"use strict";o.d(r,{I:()=>n,db:()=>l});var t=o(42585),a=o(46791),s=o(76);let i=(0,t.C6)().length?(0,t.Mq)():(0,t.ZF)({apiKey:"AIzaSyDS2-pytolwFeJQIZ9Mn2EwDqV6mdvUPzE",authDomain:"villa-safe-solutions.firebaseapp.com",projectId:"villa-safe-solutions",storageBucket:"villa-safe-solutions.firebasestorage.app",messagingSenderId:"769860850555",appId:"1:769860850555:web:fe5b7147a23e2bdbed63de"}),n=(0,a.v0)(i),l=(0,s.ad)(i)},40283:(e,r,o)=>{"use strict";o.d(r,{default:()=>n});var t=o(10326),a=o(17577),s=o(35047),i=o(57457);function n({children:e}){let[r]=(0,a.useState)(()=>new i.qH);return(0,s.useServerInsertedHTML)(()=>{let e=r.getStyleElement();return r.instance.clearTag(),t.jsx(t.Fragment,{children:e})}),t.jsx(i.LC,{sheet:r.instance,children:e})}},42476:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>j,metadata:()=>w});var t=o(19510),a=o(68570);let s=(0,a.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/contexts/Auth.Context.tsx`),{__esModule:i,$$typeof:n}=s;s.default,(0,a.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/contexts/Auth.Context.tsx#useAuth`);let l=(0,a.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/contexts/Auth.Context.tsx#AuthProvider`),c=(0,a.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/lib/registry.tsx`),{__esModule:d,$$typeof:h}=c;c.default;let u=(0,a.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/lib/registry.tsx#default`),m=(0,a.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/globalsStyled.ts`),{__esModule:g,$$typeof:p}=m;m.default;let f=(0,a.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/globalsStyled.ts#GlobalStyles`),x=(0,a.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/ClientLayoutWrapper.tsx`),{__esModule:b,$$typeof:v}=x;x.default;let y=(0,a.createProxy)(String.raw`/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/ClientLayoutWrapper.tsx#default`),w={title:"Villa Safe Solutions Pro",description:"Professional Services",icons:{icon:[{url:"/favicon.svg",type:"image/svg+xml"}]}};function j({children:e}){return t.jsx("html",{lang:"en",children:t.jsx("body",{children:(0,t.jsxs)(u,{children:[t.jsx(f,{}),t.jsx(l,{children:t.jsx(y,{children:e})})]})})})}}};