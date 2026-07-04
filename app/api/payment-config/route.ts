// app/api/payment-config/route.ts
// Lee la configuración de pagos desde variables de entorno
// Para activar Stripe: cambia PAYMENTS_ENABLED=true en .env.local y reinicia el servidor

import { NextResponse } from 'next/server';

export async function GET() {
  // Lee desde variable de entorno del servidor (nunca expuesta al cliente)
  const enableFinancing = process.env.PAYMENTS_ENABLED === 'true';
  
  return NextResponse.json({ enableFinancing });
}
