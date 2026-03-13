// app/api/send-booking-email/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Inicializa Resend con tu API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const bookingData = await request.json();

    // Validación básica
    if (!bookingData.user?.email) {
      return NextResponse.json(
        { error: 'Email del usuario no proporcionado' },
        { status: 400 }
      );
    }

    // Configuración del email
    const {
      user,
      type,
      service,
      options,
      material,
      date,
      time,
      materialImages
    } = bookingData;

    // --- CONFIGURACIÓN DE COLORES DEL TEMA ---
    // Cambia estos códigos hexadecimales por los colores exactos de tu página web
    const primaryColor = '#1e3a8a'; // Color principal (Fondo del encabezado y botones)
    const accentColor = '#38bdf8';  // Color secundario (Textos resaltados)
    const bgColor = '#f8fafc';      // Color de fondo fuera de la tarjeta

    // Cuerpo del email en HTML con Diseño Premium
    const emailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: ${bgColor}; padding: 40px 20px; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
          
          <!-- Encabezado con Tema -->
          <div style="background-color: ${primaryColor}; padding: 40px 30px; text-align: center;">
            <!-- Descomenta la siguiente línea y pon la URL de tu logo si quieres que aparezca -->
            <!-- <img src="URL_DE_TU_LOGO_AQUI" alt="Logo Villa Safe" style="max-height: 60px; margin-bottom: 15px;" /> -->
            
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 0.5px;">Villa Safe Solutions</h1>
            <p style="color: ${accentColor}; margin: 10px 0 0 0; font-size: 16px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">Confirmación de Reserva</p>
          </div>

          <!-- Contenido Principal -->
          <div style="padding: 40px 30px; color: #334155; line-height: 1.6;">
            <p style="font-size: 16px; margin-top: 0;">Hola <strong>${user.name}</strong>,</p>
            <p style="font-size: 16px;">¡Gracias por confiar en nosotros! Tu reserva ha sido procesada con éxito. Aquí tienes los detalles de tu solicitud:</p>
            
            <!-- Tarjeta de Detalles del Servicio -->
            <div style="background-color: #f1f5f9; border-left: 4px solid ${primaryColor}; border-radius: 0 8px 8px 0; padding: 25px; margin: 30px 0;">
              <h2 style="margin: 0 0 15px 0; font-size: 18px; color: ${primaryColor}; border-bottom: 1px solid #cbd5e1; padding-bottom: 10px;">Detalles del Servicio</h2>
              
              <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 35%;"><strong>Servicio:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><strong>${service}</strong> <span style="color: #64748b; font-size: 13px;">(${type})</span></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;"><strong>Fecha:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${date}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;"><strong>Hora:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${time}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;"><strong>Material:</strong></td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${material || 'No seleccionado'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #64748b;"><strong>Opciones:</strong></td>
                  <td style="padding: 10px 0; color: #0f172a;">${options || 'Ninguna'}</td>
                </tr>
              </table>
            </div>

            <!-- Datos del Cliente -->
            <h3 style="margin: 0 0 12px 0; font-size: 16px; color: ${primaryColor}; text-transform: uppercase; letter-spacing: 0.5px;">Tus Datos de Contacto</h3>
            <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; margin-bottom: 25px;">
              <p style="margin: 0 0 6px 0; font-size: 15px;"><strong>Nombre:</strong> ${user.name}</p>
              <p style="margin: 0 0 6px 0; font-size: 15px;"><strong>Email:</strong> ${user.email}</p>
              <p style="margin: 0; font-size: 15px;"><strong>Teléfono:</strong> ${user.phone}</p>
            </div>

            <!-- Imágenes Adjuntas (Si existen) -->
            ${Object.keys(materialImages || {}).length > 0 ? `
              <h3 style="margin: 0 0 12px 0; font-size: 16px; color: ${primaryColor}; text-transform: uppercase; letter-spacing: 0.5px;">Imágenes Adjuntas</h3>
              <div style="margin-bottom: 10px;">
                ${Object.entries(materialImages).map(([materialId, url]) => 
                  `<a href="${url}" target="_blank" style="display: inline-block; background-color: ${primaryColor}; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 500; margin: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">🖼️ Ver imagen ${materialId}</a>`
                ).join('')}
              </div>
            ` : ''}

          </div>

          <!-- Pie de página (Footer) -->
          <div style="background-color: #e2e8f0; padding: 25px; text-align: center;">
            <p style="color: #475569; margin: 0 0 10px 0; font-size: 14px;">Si tienes alguna pregunta, simplemente responde a este correo o contáctanos.</p>
            <p style="color: #64748b; margin: 0; font-size: 12px;">© ${new Date().getFullYear()} Villa Safe Solutions. Todos los derechos reservados.</p>
          </div>
          
        </div>
      </div>
    `;

    // Envía el email
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Villa Safe Solutions <info@villasafesolutions.com>',
      to: user.email,
      subject: `Reserva Confirmada: ${service} - Villa Safe Solutions`,
      html: emailHtml,
      bcc: process.env.ADMIN_EMAIL || 'villasafesolutions2023@gmail.com',
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