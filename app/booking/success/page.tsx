'use client'
// app/booking/success/page.tsx
// ============================================================================
// PÁGINA DE ÉXITO DESPUÉS DEL PAGO CON STRIPE - VERSION STYLED-COMPONENTS
// ============================================================================

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import styled, { keyframes } from 'styled-components';
import { db } from '@/lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

// ─── Animaciones ──────────────────────────────────────────────────────────────
const fadeIn = keyframes`from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); }`;
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

// ─── Styled Components ────────────────────────────────────────────────────────
const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #0d1b2a 50%, #0a0a0a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  max-width: 520px;
  width: 100%;
  text-align: center;
  animation: ${fadeIn} 0.6s ease forwards;
  backdrop-filter: blur(12px);
`;

const IconCircle = styled.div<{ status: 'loading' | 'success' | 'error' }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  animation: ${pulse} 2s ease infinite;
  background: ${({ status }) =>
    status === 'success' ? 'rgba(16, 185, 129, 0.15)' :
    status === 'error' ? 'rgba(239, 68, 68, 0.15)' :
    'rgba(99, 102, 241, 0.15)'
  };
  border: 2px solid ${({ status }) =>
    status === 'success' ? 'rgba(16, 185, 129, 0.4)' :
    status === 'error' ? 'rgba(239, 68, 68, 0.4)' :
    'rgba(99, 102, 241, 0.4)'
  };
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  letter-spacing: -0.5px;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 2rem;
`;

const DetailGrid = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 2rem;
  text-align: left;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  &:last-child { border-bottom: none; }
`;

const DetailLabel = styled.span`
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.85rem;
`;

const DetailValue = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 500;
`;

const AmountBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.15));
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  margin-bottom: 2rem;
  color: #10b981;
  font-size: 1.5rem;
  font-weight: 700;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const PrimaryButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.9; }
`;

const SecondaryButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
  }
`;

const BookingIdText = styled.p`
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.75rem;
  margin-top: 1.5rem;
  font-family: monospace;
`;

// ─── Interfaces ───────────────────────────────────────────────────────────────
interface BookingData {
  clientName?: string;
  clientEmail?: string;
  serviceName?: string;
  bookingDate?: string;
  bookingTime?: string;
  formattedDate?: string;
  depositAmount?: number;
  depositCurrency?: string;
  paymentStatus?: string;
  status?: string;
}

// ─── Componente Interno (Maneja useSearchParams) ─────────────────────────────
function BookingSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const bookingId = searchParams.get('booking_id');
  const cancelled = searchParams.get('cancelled');

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [booking, setBooking] = useState<BookingData | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (cancelled === 'true') {
      setStatus('error');
      setErrorMessage('El pago fue cancelado. Tu reserva fue guardada pero el depósito está pendiente.');
      return;
    }

    if (!bookingId) {
      setStatus('error');
      setErrorMessage('No se encontró el ID de la reserva.');
      return;
    }

    const bookingRef = doc(db, 'bookings', bookingId);
    const unsubscribe = onSnapshot(bookingRef, (snap) => {
      if (!snap.exists()) {
        setStatus('error');
        setErrorMessage('Reserva no encontrada en el sistema.');
        return;
      }

      const data = snap.data() as BookingData;
      setBooking(data);

      if (data.paymentStatus === 'paid' || data.status === 'confirmed') {
        setStatus('success');
      } else if (data.paymentStatus === 'failed') {
        setStatus('error');
        setErrorMessage('El pago falló. Por favor intenta nuevamente o contáctanos.');
      } else {
        const timeout = setTimeout(() => {
          setStatus('success'); 
        }, 5000);
        return () => clearTimeout(timeout);
      }
    });

    return () => unsubscribe();
  }, [bookingId, cancelled, router]);

  const formatAmount = (amount?: number, currency?: string) => {
    if (!amount) return '$50.00';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency?.toUpperCase() || 'USD',
    }).format(amount / 100);
  };

  if (status === 'loading') {
    return (
      <Card>
        <IconCircle status="loading">⏳</IconCircle>
        <Title>Verificando pago...</Title>
        <Subtitle>Estamos confirmando tu pago con Stripe. Esto tomará solo unos segundos.</Subtitle>
      </Card>
    );
  }

  if (status === 'error') {
    return (
      <Card>
        <IconCircle status="error">⚠️</IconCircle>
        <Title>Problema con el pago</Title>
        <Subtitle>{errorMessage || 'Ocurrió un problema al procesar tu pago.'}</Subtitle>
        <ButtonGroup>
          <PrimaryButton onClick={() => router.push('/booking')}>
            Intentar nuevamente
          </PrimaryButton>
          <SecondaryButton onClick={() => router.push('/')}>
            Volver al inicio
          </SecondaryButton>
        </ButtonGroup>
        {bookingId && (
          <BookingIdText>Booking ID: {bookingId}</BookingIdText>
        )}
      </Card>
    );
  }

  return (
    <Card>
      <IconCircle status="success">✅</IconCircle>
      <Title>¡Reserva confirmada!</Title>
      <Subtitle>
        Tu depósito fue recibido y tu cita está reservada. Te enviaremos un correo con los detalles.
      </Subtitle>

      <AmountBadge>
        💳 {formatAmount(booking?.depositAmount, booking?.depositCurrency)} pagado
      </AmountBadge>

      {booking && (
        <DetailGrid>
          {booking.serviceName && (
            <DetailRow>
              <DetailLabel>Servicio</DetailLabel>
              <DetailValue>{booking.serviceName}</DetailValue>
            </DetailRow>
          )}
          {(booking.formattedDate || booking.bookingDate) && (
            <DetailRow>
              <DetailLabel>Fecha</DetailLabel>
              <DetailValue>{booking.formattedDate || booking.bookingDate}</DetailValue>
            </DetailRow>
          )}
          {booking.bookingTime && (
            <DetailRow>
              <DetailLabel>Hora</DetailLabel>
              <DetailValue>{booking.bookingTime}</DetailValue>
            </DetailRow>
          )}
          {booking.clientName && (
            <DetailRow>
              <DetailLabel>Cliente</DetailLabel>
              <DetailValue>{booking.clientName}</DetailValue>
            </DetailRow>
          )}
          {booking.clientEmail && (
            <DetailRow>
              <DetailLabel>Confirmación enviada a</DetailLabel>
              <DetailValue>{booking.clientEmail}</DetailValue>
            </DetailRow>
          )}
        </DetailGrid>
      )}

      <ButtonGroup>
        <PrimaryButton onClick={() => router.push('/')}>
          Volver al inicio
        </PrimaryButton>
        <SecondaryButton onClick={() => router.push('/booking')}>
          Hacer otra reserva
        </SecondaryButton>
      </ButtonGroup>

      {bookingId && (
        <BookingIdText>Booking #{bookingId.slice(-8).toUpperCase()}</BookingIdText>
      )}
    </Card>
  );
}

// ─── Exportación Principal con Wrapper de Suspense ─────────────────────────────
export default function BookingSuccessPage() {
  return (
    <Page>
      <Suspense fallback={
        <Card>
          <IconCircle status="loading">⏳</IconCircle>
          <Title>Cargando...</Title>
        </Card>
      }>
        <BookingSuccessContent />
      </Suspense>
    </Page>
  );
}