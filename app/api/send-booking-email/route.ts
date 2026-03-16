import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Inicializa Resend con la API key desde las variables de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const bookingData = await request.json();

    // LOG DE DEPURACIÓN: Útil para ver qué llega exactamente desde el frontend
    console.log("Datos recibidos en la API:", JSON.stringify(bookingData, null, 2));

    /**
     * MEJORA DE VALIDACIÓN DEFINITIVA:
     * El frontend envía 'clientEmail', así que lo agregamos a la búsqueda.
     */
    const userEmail = bookingData.clientEmail || bookingData.user?.email || bookingData.email || bookingData.to;
    const userName = bookingData.clientName || bookingData.user?.name || 'Cliente';

    if (!userEmail) {
      console.error("Error: No se encontró el email del destinatario en el body enviado.");
      return NextResponse.json(
        { error: 'Email del usuario no proporcionado', details: 'Asegúrate de enviar clientEmail o user.email' },
        { status: 400 }
      );
    }

    // Extracción de datos del cuerpo de la reserva
    const {
      type = 'No especificado',
      service = 'Servicio General',
      options = 'Ninguna',
      material = 'No seleccionado',
      date = 'Pendiente',
      time = 'Pendiente',
    } = bookingData;

    // --- CONFIGURACIÓN ESTÉTICA ---
    const primaryColor = '#1e3a8a'; 
    const accentColor = '#38bdf8';  
    const bgColor = '#f8fafc';      

    // Cuerpo del email en HTML con Diseño Premium
    const emailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: ${bgColor}; padding: 40px 20px; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
          
          <div style="background-color: ${primaryColor}; padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">Villa Safe Solutions</h1>
            <p style="color: ${accentColor}; margin: 10px 0 0 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Confirmación de Reserva</p>
          </div>

          <div style="padding: 40px 30px; color: #334155; line-height: 1.6;">
            <p style="font-size: 16px; margin-top: 0;">Hola <strong>${userName}</strong>,</p>
            <p style="font-size: 16px;">¡Gracias por tu confianza! Tu reserva ha sido procesada con éxito. Estos son los detalles:</p>
            
            <div style="background-color: #f1f5f9; border-left: 4px solid ${primaryColor}; border-radius: 0 8px 8px 0; padding: 25px; margin: 30px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b;"><strong>Servicio:</strong></td>
                  <td style="padding: 8px 0; color: #0f172a;">${service} (${type})</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;"><strong>Fecha y Hora:</strong></td>
                  <td style="padding: 8px 0; color: #0f172a;">${date} a las ${time}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;"><strong>Material:</strong></td>
                  <td style="padding: 8px 0; color: #0f172a;">${material}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;"><strong>Opciones:</strong></td>
                  <td style="padding: 8px 0; color: #0f172a;">${options}</td>
                </tr>
              </table>
            </div>

            <p style="font-size: 15px;">Nos pondremos en contacto contigo pronto para ultimar detalles adicionales si es necesario.</p>
          </div>

          <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; margin: 0; font-size: 12px;">© ${new Date().getFullYear()} Villa Safe Solutions. Todos los derechos reservados.</p>
          </div>
          
        </div>
      </div>
    `;

    // Envío del email mediante Resend con tu dominio verificado
    const { data, error } = await resend.emails.send({
      from: 'Villa Safe Solutions <info@villasafesolutions.com>',
      to: userEmail,
      subject: `Reserva Confirmada: ${service} - Villa Safe Solutions`,
      html: emailHtml,
      bcc: 'villasafesolutions2023@gmail.com',
    });

    if (error) {
      console.error('Error reportado por Resend:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });

  } catch (err: any) {
    console.error('Error crítico en el Servidor (API Route):', err);
    return NextResponse.json(
      { error: 'Error interno del servidor', details: err.message },
      { status: 500 }
    );
  }
}