"use strict";(()=>{var e={};e.id=386,e.ids=[386],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2188:e=>{e.exports=require("prettier/plugins/html")},87413:e=>{e.exports=require("prettier/standalone")},50852:e=>{e.exports=require("async_hooks")},6113:e=>{e.exports=require("crypto")},6005:e=>{e.exports=require("node:crypto")},84492:e=>{e.exports=require("node:stream")},12781:e=>{e.exports=require("stream")},73837:e=>{e.exports=require("util")},48345:(e,o,r)=>{r.r(o),r.d(o,{originalPathname:()=>g,patchFetch:()=>m,requestAsyncStorage:()=>x,routeModule:()=>c,serverHooks:()=>u,staticGenerationAsyncStorage:()=>f});var t={};r.r(t),r.d(t,{POST:()=>d});var n=r(49303),a=r(88716),i=r(60670),s=r(82591),p=r(87070);let l=new s.R(process.env.RESEND_API_KEY);async function d(e){try{let{name:o,email:r,phone:t,message:n}=await e.json();if(!o||!r||!n)return p.NextResponse.json({error:"Faltan campos obligatorios"},{status:400});let a="#1e3a8a",i=`
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; padding: 40px 20px; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
          
          <!-- Encabezado con Tema -->
          <div style="background-color: ${a}; padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 0.5px;">Nuevo Mensaje Web</h1>
            <p style="color: #38bdf8; margin: 10px 0 0 0; font-size: 16px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">Formulario de Contacto</p>
          </div>

          <!-- Contenido Principal -->
          <div style="padding: 40px 30px; color: #334155; line-height: 1.6;">
            <p style="font-size: 16px; margin-top: 0;">Hola, tienes un nuevo mensaje de un cliente potencial desde la p\xe1gina web:</p>
            
            <!-- Tarjeta de Detalles del Cliente -->
            <div style="background-color: #f1f5f9; border-left: 4px solid ${a}; border-radius: 0 8px 8px 0; padding: 25px; margin: 30px 0;">
              <h2 style="margin: 0 0 15px 0; font-size: 18px; color: ${a}; border-bottom: 1px solid #cbd5e1; padding-bottom: 10px;">Datos del Cliente</h2>
              <p style="margin: 0 0 6px 0; font-size: 15px;"><strong>Nombre:</strong> ${o}</p>
              <p style="margin: 0 0 6px 0; font-size: 15px;"><strong>Email:</strong> <a href="mailto:${r}" style="color: ${a}; text-decoration: none;">${r}</a></p>
              <p style="margin: 0; font-size: 15px;"><strong>Tel\xe9fono:</strong> ${t||"No proporcionado"}</p>
            </div>

            <!-- Mensaje -->
            <h3 style="margin: 0 0 12px 0; font-size: 16px; color: ${a}; text-transform: uppercase; letter-spacing: 0.5px;">Mensaje</h3>
            <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 25px; font-style: italic; color: #475569; font-size: 15px;">
              "${n.replace(/\n/g,"<br/>")}"
            </div>

            <!-- Bot\xf3n de Acci\xf3n -->
            <div style="text-align: center; margin-top: 35px; margin-bottom: 10px;">
              <a href="mailto:${r}" style="display: inline-block; background-color: ${a}; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 6px; font-size: 15px; font-weight: 600; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                Responder al Cliente
              </a>
            </div>

          </div>

          <!-- Pie de p\xe1gina (Footer) -->
          <div style="background-color: #e2e8f0; padding: 25px; text-align: center;">
            <p style="color: #64748b; margin: 0; font-size: 12px;">Este correo fue enviado desde el formulario de contacto de Villa Safe Solutions.</p>
          </div>
          
        </div>
      </div>
    `,{data:s,error:d}=await l.emails.send({from:process.env.FROM_EMAIL||"Villa Safe Solutions <info@villasafesolutions.com>",to:process.env.ADMIN_EMAIL||"villasafesolutions2023@gmail.com",replyTo:r,subject:`Nuevo mensaje de web: ${o}`,html:i});if(d)return console.error("Error al enviar email:",d),p.NextResponse.json({error:d},{status:400});return p.NextResponse.json({success:!0,data:s})}catch(e){return console.error("Error en la API route:",e),p.NextResponse.json({error:"Error interno del servidor"},{status:500})}}let c=new n.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:"app/api/contact/route"},resolvedPagePath:"/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/api/contact/route.ts",nextConfigOutput:"",userland:t}),{requestAsyncStorage:x,staticGenerationAsyncStorage:f,serverHooks:u}=c,g="/api/contact/route";function m(){return(0,i.patchFetch)({serverHooks:u,staticGenerationAsyncStorage:f})}}};var o=require("../../../webpack-runtime.js");o.C(e);var r=e=>o(o.s=e),t=o.X(0,[948,972,591],()=>r(48345));module.exports=t})();