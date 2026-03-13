// app/api/create-checkout-session/route.ts
// ============================================================================
// Hace DOS cosas en una sola llamada:
//   1. Guarda la reserva en Firestore (desde servidor — sin error offline)
//   2. Crea la sesión de Stripe Checkout (si stripeEnabled = true)
// ============================================================================

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// ─── Firebase Admin (funciona en servidor, sin error "client is offline") ────
function getAdminDb() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  }
  return getFirestore();
}

// ─── Stripe ───────────────────────────────────────────────────────────────────
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! as string);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      bookingData,
      amount,
      currency,
      customerEmail,
      customerName,
      serviceName,
      bookingDate,
      bookingTime,
      stripeEnabled,
      successUrl,
      cancelUrl,
    } = body;

    if (!bookingData || !customerEmail) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // ── 1. Guardar en Firestore desde el servidor ─────────────────────────────
    let bookingId: string;
    try {
      const adminDb = getAdminDb();
      const docRef = await adminDb.collection('bookings').add({
        ...bookingData,
        paymentStatus: stripeEnabled ? 'initiated' : 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      bookingId = docRef.id;
      console.log('[checkout] Reserva guardada en Firestore:', bookingId);
    } catch (firestoreError: any) {
      console.error('[checkout] Error Firestore:', firestoreError?.message);
      return NextResponse.json(
        { error: 'Error al guardar la reserva: ' + firestoreError?.message },
        { status: 500 }
      );
    }

    // ── 2. Si Stripe no está activo, retornar solo el bookingId ───────────────
    if (!stripeEnabled) {
      return NextResponse.json({ bookingId, stripeEnabled: false });
    }

    // ── 3. Crear sesión de Stripe Checkout ────────────────────────────────────
    const finalSuccessUrl = successUrl?.replace('BOOKING_ID', bookingId)
      || `${process.env.NEXT_PUBLIC_APP_URL}/booking/success?booking_id=${bookingId}&session_id={CHECKOUT_SESSION_ID}`;
    const finalCancelUrl = cancelUrl
      || `${process.env.NEXT_PUBLIC_APP_URL}/booking?cancelled=true`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: customerEmail,
      line_items: [
        {
          price_data: {
            currency: currency || 'usd',
            product_data: {
              name: `Depósito de reserva — ${serviceName || 'Servicio'}`,
              description: `${bookingDate} a las ${bookingTime} | Reserva #${bookingId.slice(-6).toUpperCase()}`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      metadata: {
        bookingId,
        customerName: customerName || '',
        serviceName: serviceName || '',
        bookingDate: bookingDate || '',
        bookingTime: bookingTime || '',
      },
      payment_intent_data: {
        metadata: { bookingId, customerEmail },
      },
      success_url: finalSuccessUrl,
      cancel_url: finalCancelUrl,
      expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
    });

    // Actualizar Firestore con el stripeSessionId
    try {
      const adminDb = getAdminDb();
      await adminDb.collection('bookings').doc(bookingId).update({
        stripeSessionId: session.id,
        stripePaymentUrl: session.url,
        updatedAt: new Date(),
      });
    } catch (updateError) {
      console.warn('[checkout] No se pudo actualizar stripeSessionId:', updateError);
    }

    console.log('[checkout] Sesión Stripe creada:', session.id);

    return NextResponse.json({
      bookingId,
      sessionId: session.id,
      url: session.url,
    });

  } catch (error: any) {
    console.error('[checkout] Error:', error?.message);
    if (error?.type === 'StripeAuthenticationError') {
      return NextResponse.json(
        { error: 'Clave de Stripe inválida. Verifica STRIPE_SECRET_KEY en .env.local' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: error?.message || 'Error interno' },
      { status: 500 }
    );
  }
}