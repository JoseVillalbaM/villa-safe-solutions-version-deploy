import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Escapa entidades HTML para evitar XSS en el cuerpo del email
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const LIMITS = {
  name:    { min: 1, max: 100 },
  email:   { min: 5, max: 200 },
  phone:   { max: 30 },
  message: { min: 1, max: 2000 },
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // ── Server-side validation ───────────────────────────────────────────────
    if (
      typeof name    !== 'string' || name.trim().length    < LIMITS.name.min    || name.trim().length    > LIMITS.name.max    ||
      typeof email   !== 'string' || email.trim().length   < LIMITS.email.min   || email.trim().length   > LIMITS.email.max   ||
      typeof message !== 'string' || message.trim().length < LIMITS.message.min || message.trim().length > LIMITS.message.max
    ) {
      return NextResponse.json({ error: 'Datos inválidos.' }, { status: 400 });
    }

    if (phone && (typeof phone !== 'string' || phone.length > LIMITS.phone.max)) {
      return NextResponse.json({ error: 'Teléfono inválido.' }, { status: 400 });
    }

    // ── Escape all user input before embedding in HTML ───────────────────────
    const safeName    = escapeHtml(name.trim());
    const safeEmail   = escapeHtml(email.trim());
    const safePhone   = phone ? escapeHtml(phone.trim()) : 'No proporcionado';
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br/>');

    const primaryColor = '#1e3a8a';
    const accentColor  = '#38bdf8';
    const bgColor      = '#f8fafc';

    const emailHtml = `
      <div style="font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background-color:${bgColor};padding:40px 20px;margin:0;">
        <div style="max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1);">

          <div style="background-color:${primaryColor};padding:40px 30px;text-align:center;">
            <h1 style="color:#ffffff;margin:0;font-size:28px;font-weight:700;">Nuevo Mensaje Web</h1>
            <p style="color:${accentColor};margin:10px 0 0;font-size:16px;font-weight:500;text-transform:uppercase;letter-spacing:1px;">Formulario de Contacto</p>
          </div>

          <div style="padding:40px 30px;color:#334155;line-height:1.6;">
            <p style="font-size:16px;margin-top:0;">Hola, tienes un nuevo mensaje desde la página web:</p>

            <div style="background-color:#f1f5f9;border-left:4px solid ${primaryColor};border-radius:0 8px 8px 0;padding:25px;margin:30px 0;">
              <h2 style="margin:0 0 15px;font-size:18px;color:${primaryColor};border-bottom:1px solid #cbd5e1;padding-bottom:10px;">Datos del Cliente</h2>
              <p style="margin:0 0 6px;font-size:15px;"><strong>Nombre:</strong> ${safeName}</p>
              <p style="margin:0 0 6px;font-size:15px;"><strong>Email:</strong> ${safeEmail}</p>
              <p style="margin:0;font-size:15px;"><strong>Teléfono:</strong> ${safePhone}</p>
            </div>

            <h3 style="margin:0 0 12px;font-size:16px;color:${primaryColor};text-transform:uppercase;letter-spacing:0.5px;">Mensaje</h3>
            <div style="background-color:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:20px;margin-bottom:25px;font-style:italic;color:#475569;font-size:15px;">
              &ldquo;${safeMessage}&rdquo;
            </div>

            <div style="text-align:center;margin-top:35px;">
              <a href="mailto:${safeEmail}"
                 style="display:inline-block;background-color:${primaryColor};color:#ffffff;text-decoration:none;padding:12px 25px;border-radius:6px;font-size:15px;font-weight:600;">
                Responder al Cliente
              </a>
            </div>
          </div>

          <div style="background-color:#e2e8f0;padding:25px;text-align:center;">
            <p style="color:#64748b;margin:0;font-size:12px;">Enviado desde el formulario de contacto de Villa Safe Solutions.</p>
          </div>

        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from:    process.env.FROM_EMAIL    || 'Villa Safe Solutions <info@villasafesolutions.com>',
      to:      process.env.ADMIN_EMAIL   || 'villasafesolutions2023@gmail.com',
      replyTo: email.trim(),
      subject: `Nuevo mensaje de web: ${safeName}`,
      html:    emailHtml,
    });

    if (error) {
      return NextResponse.json({ error: 'Error al enviar el email.' }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });

  } catch {
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}
