// app/api/stripe-webhook/route.ts
// ============================================================================
// STRIPE WEBHOOK — Confirmación automática de pagos
// ============================================================================
// Configura el webhook en Stripe Dashboard:
//   1. Ve a https://dashboard.stripe.com/webhooks
//   2. Clic en "Add endpoint"
//   3. URL: https://tudominio.com/api/stripe-webhook
//   4. Eventos a escuchar:
//        ✅ checkout.session.completed
//        ✅ checkout.session.expired
//        ✅ payment_intent.payment_failed
//   5. Copia el "Signing secret" → STRIPE_WEBHOOK_SECRET en .env.local
//
// Para pruebas locales con Stripe CLI:
//   stripe listen --forward-to localhost:3000/api/stripe-webhook
// ============================================================================

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { db } from '@/lib/firebase';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! as string);

// IMPORTANTE: Next.js debe leer el body como raw buffer para verificar la firma
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    console.error('[webhook] Falta header stripe-signature');
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error('[webhook] Firma inválida:', err.message);
    return NextResponse.json(
      { error: `Webhook signature verification failed: ${err.message}` },
      { status: 400 }
    );
  }

  console.log('[webhook] Evento recibido:', event.type);

  // ============================================================================
  // MANEJO DE EVENTOS
  // ============================================================================

  switch (event.type) {

    // ─── PAGO COMPLETADO ───────────────────────────────────────────────────────
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const bookingId = session.metadata?.bookingId;

      if (!bookingId) {
        console.error('[webhook] checkout.session.completed sin bookingId en metadata');
        break;
      }

      console.log('[webhook] Pago completado para booking:', bookingId);
      console.log('[webhook] Session ID:', session.id);
      console.log('[webhook] Payment Intent:', session.payment_intent);
      console.log('[webhook] Amount total:', session.amount_total);

      try {
        const bookingRef = doc(db, 'bookings', bookingId);
        await updateDoc(bookingRef, {
          paymentStatus: 'paid',
          stripeSessionId: session.id,
          stripePaymentIntentId: session.payment_intent,
          stripeAmountPaid: session.amount_total,          // en centavos
          stripeCustomerEmail: session.customer_details?.email,
          status: 'confirmed',                             // ← reserva confirmada
          paidAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
        console.log('[webhook] ✅ Firestore actualizado — reserva confirmada:', bookingId);
      } catch (firestoreError) {
        console.error('[webhook] ❌ Error actualizando Firestore:', firestoreError);
        // Retornar 500 para que Stripe reintente el webhook
        return NextResponse.json({ error: 'Firestore update failed' }, { status: 500 });
      }
      break;
    }

    // ─── SESIÓN EXPIRADA (cliente no completó el pago) ────────────────────────
    case 'checkout.session.expired': {
      const session = event.data.object as Stripe.Checkout.Session;
      const bookingId = session.metadata?.bookingId;

      if (bookingId) {
        try {
          const bookingRef = doc(db, 'bookings', bookingId);
          await updateDoc(bookingRef, {
            paymentStatus: 'expired',
            status: 'payment_expired',
            updatedAt: serverTimestamp(),
          });
          console.log('[webhook] Sesión expirada para booking:', bookingId);
        } catch (error) {
          console.error('[webhook] Error actualizando sesión expirada:', error);
        }
      }
      break;
    }

    // ─── PAGO FALLIDO ─────────────────────────────────────────────────────────
    case 'payment_intent.payment_failed': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const bookingId = paymentIntent.metadata?.bookingId;

      if (bookingId) {
        try {
          const bookingRef = doc(db, 'bookings', bookingId);
          await updateDoc(bookingRef, {
            paymentStatus: 'failed',
            stripeFailureMessage: paymentIntent.last_payment_error?.message || 'Unknown error',
            updatedAt: serverTimestamp(),
          });
          console.log('[webhook] Pago fallido para booking:', bookingId);
        } catch (error) {
          console.error('[webhook] Error actualizando pago fallido:', error);
        }
      }
      break;
    }

    default:
      console.log('[webhook] Evento no manejado:', event.type);
  }

  // Siempre responder 200 a Stripe para confirmar recepción
  return NextResponse.json({ received: true });
}