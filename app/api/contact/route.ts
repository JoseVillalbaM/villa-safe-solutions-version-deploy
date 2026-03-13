// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    // --- CONFIGURACIÓN DE COLORES DEL TEMA ---
    const primaryColor = '#1e3a8a'; 
    const accentColor = '#38bdf8';  
    const bgColor = '#f8fafc';      

    // Cuerpo del email en HTML con Diseño Premium
    const emailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: ${bgColor}; padding: 40px 20px; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
          
          <!-- Encabezado con Tema -->
          <div style="background-color: ${primaryColor}; padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 0.5px;">Nuevo Mensaje Web</h1>
            <p style="color: ${accentColor}; margin: 10px 0 0 0; font-size: 16px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">Formulario de Contacto</p>
          </div>

          <!-- Contenido Principal -->
          <div style="padding: 40px 30px; color: #334155; line-height: 1.6;">
            <p style="font-size: 16px; margin-top: 0;">Hola, tienes un nuevo mensaje de un cliente potencial desde la página web:</p>
            
            <!-- Tarjeta de Detalles del Cliente -->
            <div style="background-color: #f1f5f9; border-left: 4px solid ${primaryColor}; border-radius: 0 8px 8px 0; padding: 25px; margin: 30px 0;">
              <h2 style="margin: 0 0 15px 0; font-size: 18px; color: ${primaryColor}; border-bottom: 1px solid #cbd5e1; padding-bottom: 10px;">Datos del Cliente</h2>
              <p style="margin: 0 0 6px 0; font-size: 15px;"><strong>Nombre:</strong> ${name}</p>
              <p style="margin: 0 0 6px 0; font-size: 15px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: ${primaryColor}; text-decoration: none;">${email}</a></p>
              <p style="margin: 0; font-size: 15px;"><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
            </div>

            <!-- Mensaje -->
            <h3 style="margin: 0 0 12px 0; font-size: 16px; color: ${primaryColor}; text-transform: uppercase; letter-spacing: 0.5px;">Mensaje</h3>
            <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 25px; font-style: italic; color: #475569; font-size: 15px;">
              "${message.replace(/\n/g, '<br/>')}"
            </div>

            <!-- Botón de Acción -->
            <div style="text-align: center; margin-top: 35px; margin-bottom: 10px;">
              <a href="mailto:${email}" style="display: inline-block; background-color: ${primaryColor}; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 6px; font-size: 15px; font-weight: 600; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                Responder al Cliente
              </a>
            </div>

          </div>

          <!-- Pie de página (Footer) -->
          <div style="background-color: #e2e8f0; padding: 25px; text-align: center;">
            <p style="color: #64748b; margin: 0; font-size: 12px;">Este correo fue enviado desde el formulario de contacto de Villa Safe Solutions.</p>
          </div>
          
        </div>
      </div>
    `;

    // Envía el email
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Villa Safe Solutions <info@villasafesolutions.com>',
      to: process.env.ADMIN_EMAIL || 'villasafesolutions2023@gmail.com', // Te llega directo a tu Gmail
      replyTo: email, // Permite que le des a "Responder" y le contestes al cliente directamente
      subject: `Nuevo mensaje de web: ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Error al enviar email:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Error en la API route:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}