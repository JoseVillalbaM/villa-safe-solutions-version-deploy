"use strict";(()=>{var e={};e.id=151,e.ids=[151],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2188:e=>{e.exports=require("prettier/plugins/html")},87413:e=>{e.exports=require("prettier/standalone")},50852:e=>{e.exports=require("async_hooks")},6113:e=>{e.exports=require("crypto")},6005:e=>{e.exports=require("node:crypto")},84492:e=>{e.exports=require("node:stream")},12781:e=>{e.exports=require("stream")},73837:e=>{e.exports=require("util")},41412:(e,o,t)=>{t.r(o),t.d(o,{originalPathname:()=>u,patchFetch:()=>m,requestAsyncStorage:()=>c,routeModule:()=>x,serverHooks:()=>f,staticGenerationAsyncStorage:()=>g});var r={};t.r(r),t.d(r,{POST:()=>d});var s=t(49303),a=t(88716),n=t(60670),i=t(82591),p=t(87070);let l=new i.R(process.env.RESEND_API_KEY);async function d(e){try{let o=await e.json();if(!o.user?.email)return p.NextResponse.json({error:"Email del usuario no proporcionado"},{status:400});let{user:t,type:r,service:s,options:a,material:n,date:i,time:d,materialImages:x}=o,c="#1e3a8a",g=`
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; padding: 40px 20px; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
          
          <!-- Encabezado con Tema -->
          <div style="background-color: ${c}; padding: 40px 30px; text-align: center;">
            <!-- Descomenta la siguiente l\xednea y pon la URL de tu logo si quieres que aparezca -->
            <!-- <img src="URL_DE_TU_LOGO_AQUI" alt="Logo Villa Safe" style="max-height: 60px; margin-bottom: 15px;" /> -->
            
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 0.5px;">Villa Safe Solutions</h1>
            <p style="color: #38bdf8; margin: 10px 0 0 0; font-size: 16px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">Confirmaci\xf3n de Reserva</p>
          </div>

          <!-- Contenido Principal -->
          <div style="padding: 40px 30px; color: #334155; line-height: 1.6;">
            <p style="font-size: 16px; margin-top: 0;">Hola <strong>${t.name}</strong>,</p>
            <p style="font-size: 16px;">\xa1Gracias por confiar en nosotros! Tu reserva ha sido procesada con \xe9xito. Aqu\xed tienes los detalles de tu solicitud:</p>
            
            <!-- Tarjeta de Detalles del Servicio -->
            <div style="background-color: #f1f5f9; border-left: 4px solid ${c}; border-radius: 0 8px 8px 0; padding: 25px; margin: 30px 0;">
              <h2 style="margin: 0 0 15px 0; font-size: 18px; color: ${c}; border-bottom: 1px solid #cbd5e1; padding-bottom: 10px;">Detalles del Servicio</h2>
              
              <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 35%;"><strong>Servicio:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><strong>${s}</strong> <span style="color: #64748b; font-size: 13px;">(${r})</span></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;"><strong>Fecha:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${i}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;"><strong>Hora:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${d}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;"><strong>Material:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${n||"No seleccionado"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #64748b;"><strong>Opciones:</strong></td>
                  <td style="padding: 10px 0; color: #0f172a;">${a||"Ninguna"}</td>
                </tr>
              </table>
            </div>

            <!-- Datos del Cliente -->
            <h3 style="margin: 0 0 12px 0; font-size: 16px; color: ${c}; text-transform: uppercase; letter-spacing: 0.5px;">Tus Datos de Contacto</h3>
            <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; margin-bottom: 25px;">
              <p style="margin: 0 0 6px 0; font-size: 15px;"><strong>Nombre:</strong> ${t.name}</p>
              <p style="margin: 0 0 6px 0; font-size: 15px;"><strong>Email:</strong> ${t.email}</p>
              <p style="margin: 0; font-size: 15px;"><strong>Tel\xe9fono:</strong> ${t.phone}</p>
            </div>

            <!-- Im\xe1genes Adjuntas (Si existen) -->
            ${Object.keys(x||{}).length>0?`
              <h3 style="margin: 0 0 12px 0; font-size: 16px; color: ${c}; text-transform: uppercase; letter-spacing: 0.5px;">Im\xe1genes Adjuntas</h3>
              <div style="margin-bottom: 10px;">
                ${Object.entries(x).map(([e,o])=>`<a href="${o}" target="_blank" style="display: inline-block; background-color: ${c}; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 500; margin: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">🖼️ Ver imagen ${e}</a>`).join("")}
              </div>
            `:""}

          </div>

          <!-- Pie de p\xe1gina (Footer) -->
          <div style="background-color: #e2e8f0; padding: 25px; text-align: center;">
            <p style="color: #475569; margin: 0 0 10px 0; font-size: 14px;">Si tienes alguna pregunta, simplemente responde a este correo o cont\xe1ctanos.</p>
            <p style="color: #64748b; margin: 0; font-size: 12px;">\xa9 ${new Date().getFullYear()} Villa Safe Solutions. Todos los derechos reservados.</p>
          </div>
          
        </div>
      </div>
    `,{data:f,error:u}=await l.emails.send({from:process.env.FROM_EMAIL||"Villa Safe Solutions <info@villasafesolutions.com>",to:t.email,subject:`Reserva Confirmada: ${s} - Villa Safe Solutions`,html:g,bcc:process.env.ADMIN_EMAIL||"villasafesolutions2023@gmail.com"});if(u)return console.error("Error al enviar email:",u),p.NextResponse.json({error:u},{status:400});return p.NextResponse.json({success:!0,data:f})}catch(e){return console.error("Error en la API route:",e),p.NextResponse.json({error:"Error interno del servidor"},{status:500})}}let x=new s.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/send-booking-email/route",pathname:"/api/send-booking-email",filename:"route",bundlePath:"app/api/send-booking-email/route"},resolvedPagePath:"/Users/villasafesolutions/villa-safe-next.js-firebase-demo/app/api/send-booking-email/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:c,staticGenerationAsyncStorage:g,serverHooks:f}=x,u="/api/send-booking-email/route";function m(){return(0,n.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:g})}}};var o=require("../../../webpack-runtime.js");o.C(e);var t=e=>o(o.s=e),r=o.X(0,[948,972,591],()=>t(41412));module.exports=r})();