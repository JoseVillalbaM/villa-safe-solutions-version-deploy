// app/api/n8n-webhook/route.ts
// ============================================================================
// Endpoint que tu app llama después de guardar una reserva en Firestore.
// Envía el payload a n8n para disparar automatizaciones de:
//   - Email (Resend via n8n o directo)
//   - WhatsApp (Twilio)
//   - SMS (Twilio)
//
// CÓMO USARLO desde create-checkout-session o send-booking-email:
//   await fetch('/api/n8n-webhook', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ event: 'booking.created', bookingId, bookingData }),
//   });
//
// VARIABLES DE ENTORNO requeridas en .env.local:
//   N8N_WEBHOOK_URL=https://tu-instancia.n8n.cloud/webhook/villa-safe-booking
//   N8N_WEBHOOK_SECRET=un_secreto_que_configuras_en_n8n
// ============================================================================

import { NextRequest, NextResponse } from 'next/server';

// Tipos de eventos que puedes disparar
type BookingEvent =
  | 'booking.created'      // Nueva reserva guardada (sin pago todavía)
  | 'booking.paid'         // Pago confirmado por Stripe webhook
  | 'booking.cancelled'    // Reserva cancelada
  | 'quotation.requested'  // Cliente pidió cotización
  | 'booking.reminder';    // Recordatorio (llamado desde un cron job)

interface N8nWebhookPayload {
  event: BookingEvent;
  bookingId: string;
  timestamp: string;
  booking: {
    // Datos del cliente
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    // Datos del servicio
    bookingType: 'work' | 'measurement-tv' | 'quotation';
    serviceName: string;
    selectedOptions: string;
    materialName?: string;
    // Fecha y hora
    formattedDate: string;
    bookingTime: string;
    // Pago
    paymentStatus: string;
    depositAmount: number;
    depositDisplay: string;
    depositCurrency: string;
  };
  // Metadata para lógica condicional en n8n
  meta: {
    isQuotation: boolean;
    isWork: boolean;
    isMeasurement: boolean;
    hasMaterial: boolean;
    requiresDeposit: boolean;
  };
}

export async function POST(request: NextRequest) {
  try {
    // ── Verificar que las variables de entorno estén configuradas ─────────────
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    const n8nSecret = process.env.N8N_WEBHOOK_SECRET;

    if (!n8nWebhookUrl) {
      console.warn('[n8n-webhook] N8N_WEBHOOK_URL no configurada — saltando notificación');
      // Retorna éxito silencioso para no bloquear el flujo principal
      return NextResponse.json({ success: true, skipped: true, reason: 'N8N_WEBHOOK_URL not set' });
    }

    // ── Leer el cuerpo de la petición ─────────────────────────────────────────
    const body = await request.json();
    const { event, bookingId, bookingData } = body;

    if (!event || !bookingId || !bookingData) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos: event, bookingId, bookingData' },
        { status: 400 }
      );
    }

    // ── Construir el payload limpio para n8n ──────────────────────────────────
    // n8n recibirá siempre la misma estructura, fácil de mapear en los nodos
    const payload: N8nWebhookPayload = {
      event,
      bookingId,
      timestamp: new Date().toISOString(),
      booking: {
        clientName: bookingData.clientName || '',
        clientEmail: bookingData.clientEmail || '',
        clientPhone: bookingData.clientPhone || '',
        bookingType: bookingData.bookingType,
        serviceName: bookingData.serviceName || '',
        selectedOptions: Array.isArray(bookingData.selectedOptions)
          ? bookingData.selectedOptions.map((o: any) => o.name || o).join(', ')
          : bookingData.selectedOptions || '',
        materialName: bookingData.materialName || undefined,
        formattedDate: bookingData.formattedDate || '',
        bookingTime: bookingData.bookingTime || '',
        paymentStatus: bookingData.paymentStatus || 'pending',
        depositAmount: bookingData.depositAmount || 0,
        depositDisplay: formatDepositDisplay(bookingData.depositAmount, bookingData.depositCurrency),
        depositCurrency: bookingData.depositCurrency || 'usd',
      },
      meta: {
        isQuotation: bookingData.bookingType === 'quotation',
        isWork: bookingData.bookingType === 'work',
        isMeasurement: bookingData.bookingType === 'measurement-tv',
        hasMaterial: !!bookingData.materialName,
        requiresDeposit: (bookingData.depositAmount || 0) > 0,
      },
    };

    // ── Llamar al webhook de n8n ───────────────────────────────────────────────
    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Header de seguridad — configura en n8n: Header Auth → "x-webhook-secret"
        ...(n8nSecret ? { 'x-webhook-secret': n8nSecret } : {}),
      },
      body: JSON.stringify(payload),
      // Timeout de 10 segundos — n8n puede tardar en responder
      signal: AbortSignal.timeout(10_000),
    });

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text();
      console.error('[n8n-webhook] n8n respondió con error:', n8nResponse.status, errorText);
      // No lanzamos error — la reserva ya está guardada, el webhook es secundario
      return NextResponse.json(
        { success: false, n8nStatus: n8nResponse.status, error: errorText },
        { status: 200 } // 200 para no romper el flujo principal
      );
    }

    console.log(`[n8n-webhook] Evento "${event}" enviado OK para reserva ${bookingId}`);

    return NextResponse.json({
      success: true,
      event,
      bookingId,
      n8nStatus: n8nResponse.status,
    });

  } catch (error: any) {
    // Timeout u otro error de red
    console.error('[n8n-webhook] Error al llamar a n8n:', error?.message);
    // Retorna 200 para no bloquear el flujo principal del cliente
    return NextResponse.json({
      success: false,
      error: error?.message || 'Error desconocido al contactar n8n',
    });
  }
}

// ── Helper ────────────────────────────────────────────────────────────────────
function formatDepositDisplay(amount: number, currency: string): string {
  if (!amount) return '$0.00';
  const value = amount / 100; // Stripe almacena en centavos
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency?.toUpperCase() || 'USD',
  }).format(value);
}