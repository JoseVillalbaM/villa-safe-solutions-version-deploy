'use client'
import React, { useState, useMemo, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useBookingLanguage } from './language';
import { useAuth } from '@/contexts/Auth.Context';

// Firebase imports
import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocFromServer,
  serverTimestamp,
} from 'firebase/firestore';

// Interfaces
interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  subServices?: ServiceOption[];
}

interface ServiceOption {
  id: string;
  name: string;
  description: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

interface StyledComponentProps {
  selected?: boolean;
  disabled?: boolean;
  color?: string;
}

interface MaterialOption {
  id: string;
  name: string;
  images: string[];
  aforo: number;
}

// ============================================================================
// CONFIGURACIÓN — monto del depósito
// ============================================================================
const BOOKING_DEPOSIT_AMOUNT = 3000; // $30.00 USD
const BOOKING_DEPOSIT_DISPLAY = '$30.00';
const BOOKING_CURRENCY = 'usd';

// Función para formatear fecha en español
const formatDate = (date: Date): string => {
  return date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
};

// Función para crear URL de Google Calendar
const createGoogleCalendarUrl = (title: string, description: string, start: Date, end: Date): string => {
  const startTime = start.toISOString().replace(/-|:/g, '').split('.')[0] + 'Z';
  const endTime = end.toISOString().replace(/-|:/g, '').split('.')[0] + 'Z';
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description)}&dates=${startTime}/${endTime}`;
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

// ============================================================================
// ESTILOS — PASO 5 CHECKOUT
// ============================================================================

const StockBadge = styled.div<{ lowStock?: boolean }>`
  position: absolute;
  top: 8px;
  right: 8px;
  background: ${({ theme, lowStock }) => lowStock ? theme.colors.palette.coralRed : theme.colors.success};
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

const CheckoutCard = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ theme }) => theme.colors.borders.primary};
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
`;

const CheckoutTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CheckoutRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.6rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  
  &:last-child {
    border-bottom: none;
  }
`;

const CheckoutLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  font-weight: 500;
  flex-shrink: 0;
  margin-right: 1rem;
`;

const CheckoutValue = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.9rem;
  text-align: right;
  font-weight: 600;
`;

const DepositBox = styled.div`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.palette.skyBlue}15, 
    ${({ theme }) => theme.colors.palette.emeraldGreen}15
  );
  border: 2px solid ${({ theme }) => theme.colors.palette.skyBlue}40;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const DepositAmount = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.palette.skyBlue}, ${({ theme }) => theme.colors.palette.emeraldGreen});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.25rem;
`;

const DepositLabel = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const DepositNote = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;
  font-style: italic;
`;

const PaymentStatusBadge = styled.div.withConfig({ shouldForwardProp: (prop) => prop !== "enabled" })<{ enabled: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: ${({ enabled, theme }) => enabled 
    ? theme.colors.success + '20' 
    : theme.colors.palette.coralRed + '15'};
  color: ${({ enabled, theme }) => enabled 
    ? theme.colors.success 
    : theme.colors.palette.coralRed};
  border: 1px solid ${({ enabled, theme }) => enabled 
    ? theme.colors.success + '40' 
    : theme.colors.palette.coralRed + '30'};
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const PaymentButton = styled.button.withConfig({ shouldForwardProp: (prop) => prop !== "stripeEnabled" })<{ stripeEnabled: boolean }>`
  width: 100%;
  background: ${({ stripeEnabled, theme }) => stripeEnabled 
    ? 'linear-gradient(135deg, #635bff, #0073e6)'
    : `linear-gradient(135deg, ${theme.colors.palette.skyBlue}, ${theme.colors.palette.emeraldGreen})`
  };
  color: white;
  border: none;
  padding: 1.1rem 2rem;
  border-radius: 10px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  letter-spacing: 0.3px;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${({ stripeEnabled }) => stripeEnabled 
      ? '0 8px 25px rgba(99, 91, 255, 0.4)'
      : '0 8px 25px rgba(66, 153, 225, 0.4)'
    };
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ReservationPendingBox = styled.div`
  background: ${({ theme }) => theme.colors.secondaryBg};
  border: 1px dashed ${({ theme }) => theme.colors.borders.secondary};
  border-radius: 10px;
  padding: 1.25rem;
  margin-top: 1rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`;

const ReservationPendingText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
`;

// ============================================================================
// ESTILOS EXISTENTES
// ============================================================================

const ServiceCard = styled.div<StyledComponentProps>`
  background: ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.bg};
  border: 2px solid ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.borders.secondary};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 160px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    transform: translateY(-3px);
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: ${({ theme }) => theme.colors.glowShadows.blue};
  }
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 140px;
    justify-content: center;
    & > span:first-child { font-size: 2.5rem !important; margin-bottom: 0.75rem !important; }
    & > div { width: 100% !important; font-size: 0.85rem !important; }
  }
  & > span:first-child { font-size: 3rem; margin-bottom: 1rem; line-height: 1; display: block; }
  & > div:nth-of-type(1) { font-weight: 600; margin-bottom: 0.75rem; font-size: 1.2rem; line-height: 1.3; width: 100%; color: ${({ theme, selected }) => selected ? theme.colors.textPrimary : 'inherit'}; }
  & > div:nth-of-type(2) { font-size: 0.9rem; color: ${({ theme, selected }) => selected ? theme.colors.textPrimary : theme.colors.textSecondary}; line-height: 1.4; margin: 0; width: 100%; }
`;

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bg};
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.palette.skyBlue}, ${({ theme }) => theme.colors.palette.emeraldGreen});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const UserInfo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.secondaryBg};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
`;

const UserIcon = styled.span`font-size: 1.2rem;`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const ProgressStep = styled.div.withConfig({ shouldForwardProp: (prop) => prop !== "active" })<{ active: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ active, theme }) => active ? `linear-gradient(135deg, ${theme.colors.palette.skyBlue}, ${theme.colors.palette.emeraldGreen})` : theme.colors.secondaryBg};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  border: 2px solid ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.borders.secondary)};
  transition: all 0.3s ease;
`;

const Content = styled.div`max-width: 1200px; margin: 0 auto;`;

const Section = styled.section`
  background: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 16px;
  padding: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  box-shadow: ${({ theme }) => theme.colors.glowShadows.blue};
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const BookingTypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 1.5rem; }
`;

const BookingTypeCard = styled.div<StyledComponentProps>`
  background: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ selected, theme }) => (selected ? theme.colors.primary : theme.colors.borders.secondary)};
  border-radius: 12px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ selected, theme }) => (selected ? theme.colors.glowShadows.blue : 'none')};
  &:hover { transform: translateY(-5px); border-color: ${({ theme }) => theme.colors.primary}; box-shadow: ${({ theme }) => theme.colors.glowShadows.blue}; }
`;

const CardIcon = styled.div`font-size: 3rem; margin-bottom: 1rem;`;
const CardTitle = styled.h3`font-size: 1.5rem; margin-bottom: 0.5rem; color: ${({ theme }) => theme.colors.textPrimary};`;
const CardDescription = styled.p`color: ${({ theme }) => theme.colors.textSecondary}; line-height: 1.6;`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  @media (max-width: 768px) { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

const OptionsContainer = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ theme }) => theme.colors.borders.primary};
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
`;

const CheckboxList = styled.div`display: flex; flex-direction: column; gap: 0.75rem;`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s;
  background: ${({ theme }) => theme.colors.secondaryBg};
  &:hover { background: ${({ theme }) => theme.colors.bg}; }
`;

const Checkbox = styled.input`width: 20px; height: 20px; cursor: pointer; margin-top: 0.1rem; flex-shrink: 0;`;
const CheckboxLabel = styled.span`color: ${({ theme }) => theme.colors.textPrimary}; font-size: 0.95rem; font-weight: 500;`;
const CheckboxDescription = styled.span`color: ${({ theme }) => theme.colors.textSecondary}; font-size: 0.8rem; display: block; margin-top: 0.25rem;`;

const MaterialGalleryContainer = styled.div`margin-top: 2rem;`;
const MaterialOptionsGrid = styled.div`display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; width: 100%;`;

const MaterialOptionCard = styled.div<StyledComponentProps>`
  background: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.borders.secondary};
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  &:hover { transform: translateY(-3px); border-color: ${({ theme }) => theme.colors.secondary}; box-shadow: ${({ theme }) => theme.colors.glowShadows.blue}; }
`;

const MaterialOptionTitle = styled.h3`font-size: 1.1rem; margin-bottom: 1rem; color: ${({ theme }) => theme.colors.textPrimary}; text-align: center; margin-top: 1.5rem;`;

// ============================================================================
// CARRUSEL DE IMÁGENES — reemplaza ImageGallery de grid vertical
// ============================================================================

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`;

const CarouselTrack = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow: hidden;
  border-radius: 10px;
`;

const CarouselSlide = styled.div`
  flex: 0 0 calc(50% - 0.25rem);
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  flex-shrink: 0;
`;

const CarouselImage = styled.img<{ selected?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 3px solid ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.borders.secondary};
  transition: all 0.3s ease;
  display: block;
  &:hover { transform: scale(1.03); border-color: ${({ theme }) => theme.colors.primary}; }
`;

const CarouselCheckMark = styled.div<{ selected?: boolean }>`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  background: ${({ theme, selected }) => selected ? theme.colors.primary : 'transparent'};
  border: 2px solid ${({ theme }) => theme.colors.bg};
  border-radius: 50%;
  display: ${({ selected }) => selected ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 3;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  pointer-events: none;
`;

const SelectImageButton = styled.button<{ selected?: boolean }>`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  background: ${({ theme, selected }) => selected ? theme.colors.primary : 'rgba(0,0,0,0.6)'};
  border: 2px solid ${({ theme }) => theme.colors.bg};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.7rem;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 2;
  padding: 0;
  line-height: 1;
  &:hover { transform: scale(1.1); background: ${({ theme }) => theme.colors.secondary}; }
`;

const CarouselNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.6rem;
  padding: 0 0.25rem;
`;

const CarouselArrow = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.borders.secondary};
  background: ${({ theme }) => theme.colors.secondaryBg};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
  flex-shrink: 0;
  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const CarouselDots = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
  padding: 0 0.5rem;
`;

const CarouselDot = styled.button<{ active?: boolean }>`
  width: ${({ active }) => active ? '18px' : '7px'};
  height: 7px;
  border-radius: 4px;
  border: none;
  background: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.borders.secondary};
  cursor: pointer;
  transition: all 0.25s ease;
  padding: 0;
  &:hover { background: ${({ theme }) => theme.colors.primary}; opacity: 0.7; }
`;

// ============================================================================

const SubSection = styled.div`margin-bottom: 2rem;`;
const SubTitle = styled.h3`font-size: 1.3rem; margin-bottom: 1rem; color: ${({ theme }) => theme.colors.textPrimary};`;

const InfoMessage = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 8px; padding: 2rem;
  display: flex; align-items: center; gap: 1rem;
`;

const InfoIcon = styled.span`font-size: 2rem;`;

const DateTimeContainer = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const CalendarColumn = styled.div`display: flex; flex-direction: column;`;
const TimeSlotColumn = styled.div`display: flex; flex-direction: column;`;

const CalendarWrapper = styled.div`
  .react-calendar { background: ${({ theme }) => theme.colors.bg}; border: 1px solid ${({ theme }) => theme.colors.borders.secondary}; border-radius: 12px; padding: 1rem; width: 100%; color: ${({ theme }) => theme.colors.textPrimary}; }
  .react-calendar__tile--active { background: ${({ theme }) => theme.colors.primary} !important; }
  .react-calendar__tile:hover { background: ${({ theme }) => theme.colors.secondaryBg}; }
  .react-calendar__navigation button { color: ${({ theme }) => theme.colors.textPrimary}; }
  .react-calendar__month-view__days__day { color: ${({ theme }) => theme.colors.textPrimary}; }
  .react-calendar__month-view__days__day--weekend { color: ${({ theme }) => theme.colors.palette.coralRed}; }
  .react-calendar__tile--now { background: ${({ theme }) => theme.colors.secondaryBg}; }
`;

const SelectedDate = styled.div`color: ${({ theme }) => theme.colors.textSecondary}; margin-bottom: 1rem; text-transform: capitalize; font-size: 0.95rem;`;

const TimeSlotGrid = styled.div`display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem;`;

const TimeSlotButton = styled.button<StyledComponentProps>`
  background: ${({ selected, theme }) => (selected ? theme.colors.primary : theme.colors.bg)};
  border: 2px solid ${({ selected, theme }) => (selected ? theme.colors.primary : theme.colors.borders.secondary)};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0.75rem; border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: all 0.3s ease; font-size: 0.9rem;
  &:hover:not(:disabled) { background: ${({ theme }) => theme.colors.primary}; transform: translateY(-2px); }
`;

const NavigationButtons = styled.div`
  display: flex; justify-content: space-between; max-width: 1200px;
  margin: 2rem auto 0; gap: 1rem;
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.palette.skyBlue}, ${({ theme }) => theme.colors.palette.emeraldGreen});
  color: white; border: none; padding: 1rem 2rem; border-radius: 8px; font-size: 1rem;
  font-weight: 600; cursor: pointer; transition: all 0.3s ease; flex: 1;
  &:hover:not(:disabled) { transform: translateY(-2px); box-shadow: ${({ theme }) => theme.colors.glowShadows.blue}; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const SecondaryButton = styled.button`
  background: transparent; color: ${({ theme }) => theme.colors.textPrimary};
  border: 2px solid ${({ theme }) => theme.colors.borders.secondary};
  padding: 1rem 2rem; border-radius: 8px; font-size: 1rem; font-weight: 600;
  cursor: pointer; transition: all 0.3s ease; flex: 1;
  &:hover { border-color: ${({ theme }) => theme.colors.primary}; transform: translateY(-2px); }
`;

const SuccessCard = styled.div`
  max-width: 600px; margin: 4rem auto;
  background: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 16px; padding: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  box-shadow: ${({ theme }) => theme.colors.glowShadows.green};
  text-align: center;
`;

const SuccessIcon = styled.div`font-size: 4rem; margin-bottom: 1rem;`;
const SuccessTitle = styled.h2`font-size: 2rem; color: ${({ theme }) => theme.colors.secondary}; margin-bottom: 1rem;`;
const SuccessMessage = styled.p`color: ${({ theme }) => theme.colors.textSecondary}; font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.6;`;

const SummaryBox = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ theme }) => theme.colors.borders.primary};
  border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; text-align: left;
`;

const SummaryTitle = styled.h3`font-size: 1.3rem; margin-bottom: 1rem; color: ${({ theme }) => theme.colors.primary};`;
const SummaryItem = styled.div`display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0; color: ${({ theme }) => theme.colors.textSecondary};`;

const InfoBox = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 8px; padding: 1rem;
  display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2rem;
  p { margin: 0; color: ${({ theme }) => theme.colors.textSecondary}; font-size: 0.95rem; }
`;

const ButtonGroup = styled.div`display: flex; flex-direction: column; gap: 1rem;`;

const GoogleCalendarButton = styled.a`
  background: linear-gradient(135deg, #4285f4, #34a853); color: white; border: none;
  padding: 1rem 2rem; border-radius: 8px; font-size: 1rem; font-weight: 600;
  cursor: pointer; text-decoration: none; transition: all 0.3s ease; text-align: center;
  &:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(66, 133, 244, 0.3); }
`;

const LoadingMessage = styled.div`
  display: flex; justify-content: center; align-items: center;
  min-height: 60vh; font-size: 1.2rem; color: ${({ theme }) => theme.colors.textSecondary}; gap: 1rem;
`;

const LoadingSpinner = styled.div`
  width: 24px; height: 24px;
  border: 3px solid ${({ theme }) => theme.colors.borders.secondary};
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
`;

const ErrorMessage = styled.div`
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  min-height: 60vh; gap: 1rem;
  background: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 16px; padding: 3rem; max-width: 500px; margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
`;

const ErrorIcon = styled.span`font-size: 3rem;`;

const ModalOverlay = styled.div`
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.9); z-index: 9999;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; backdrop-filter: blur(10px);
  animation: fadeIn 0.2s ease-in-out;
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`;

const ModalContent = styled.div`
  max-width: 90vw; max-height: 90vh; position: relative;
  border-radius: 12px; overflow: hidden; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  transform: scale(0.95); animation: scaleIn 0.2s ease-out forwards;
  @keyframes scaleIn { to { transform: scale(1); } }
`;

const ModalImage = styled.img`width: 100%; height: 100%; object-fit: contain; display: block; pointer-events: none; border-radius: 8px;`;

const CloseModalButton = styled.button`
  position: absolute; top: 20px; right: 20px; width: 40px; height: 40px;
  background: rgba(0, 0, 0, 0.6); border: 2px solid white; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: white; font-size: 1.5rem; cursor: pointer; transition: all 0.2s;
  z-index: 10; padding: 0; line-height: 1;
  &:hover { background: rgba(0, 0, 0, 0.9); transform: scale(1.1); }
`;

// ============================================================================
// COMPONENTE DE GALERÍA — ahora con carrusel
// ============================================================================
interface ImageGalleryProps {
  material: MaterialOption;
  selected: boolean;
  onSelect: (id: string) => void;
  selectedImage: string | null;
  onSelectImage: (materialId: string, imageUrl: string) => void;
}

const ImageGalleryComponent: React.FC<ImageGalleryProps> = ({
  material, selected, onSelect, selectedImage, onSelectImage
}) => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  // Mostramos 2 imágenes a la vez; el índice indica el primer visible
  const [startIndex, setStartIndex] = useState(0);

  const lowStock = material.aforo <= 5;
  const totalImages = material.images.length;
  // Número de "páginas" de 2 imágenes
  const totalPages = Math.ceil(totalImages / 2);
  const currentPage = Math.floor(startIndex / 2);

  const canPrev = startIndex > 0;
  const canNext = startIndex + 2 < totalImages;

  const visibleImages = material.images.slice(startIndex, startIndex + 2);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStartIndex(prev => Math.max(0, prev - 2));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStartIndex(prev => Math.min(totalImages - 2, prev + 2));
  };

  const handleDotClick = (e: React.MouseEvent, pageIndex: number) => {
    e.stopPropagation();
    setStartIndex(pageIndex * 2);
  };

  return (
    <>
      <MaterialOptionCard selected={selected} onClick={() => onSelect(material.id)}>
        <StockBadge lowStock={lowStock}>{material.aforo} unid.</StockBadge>
        <MaterialOptionTitle>{material.name}</MaterialOptionTitle>

        <CarouselContainer>
          <CarouselTrack>
            {visibleImages.map((image, idx) => {
              const realIndex = startIndex + idx;
              const isSelected = selectedImage === image;
              return (
                <CarouselSlide key={realIndex}>
                  <CarouselImage
                    src={image}
                    alt={`${material.name} ${realIndex + 1}`}
                    selected={isSelected}
                    onClick={(e) => { e.stopPropagation(); setModalImage(image); }}
                  />
                  <CarouselCheckMark selected={isSelected}>✓</CarouselCheckMark>
                  <SelectImageButton
                    selected={isSelected}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectImage(material.id, image);
                    }}
                  >
                    {isSelected ? '✓' : '○'}
                  </SelectImageButton>
                </CarouselSlide>
              );
            })}
          </CarouselTrack>

          {/* Navegación del carrusel */}
          <CarouselNav onClick={(e) => e.stopPropagation()}>
            <CarouselArrow onClick={handlePrev} disabled={!canPrev} title="Anterior">
              ‹
            </CarouselArrow>

            <CarouselDots>
              {Array.from({ length: totalPages }).map((_, pageIdx) => (
                <CarouselDot
                  key={pageIdx}
                  active={pageIdx === currentPage}
                  onClick={(e) => handleDotClick(e, pageIdx)}
                  title={`Página ${pageIdx + 1}`}
                />
              ))}
            </CarouselDots>

            <CarouselArrow onClick={handleNext} disabled={!canNext} title="Siguiente">
              ›
            </CarouselArrow>
          </CarouselNav>
        </CarouselContainer>
      </MaterialOptionCard>

      {modalImage && (
        <ModalOverlay onClick={() => setModalImage(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseModalButton onClick={(e) => { e.stopPropagation(); setModalImage(null); }}>✕</CloseModalButton>
            <ModalImage src={modalImage} alt="Ampliada" />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

// ============================================================================
// GENERADOR DE TIME SLOTS
// ============================================================================
const generateTimeSlots = (date: Date, bookingType: 'work' | 'measurement-tv' | 'quotation' | null, t: any): TimeSlot[] => {
  if (!bookingType) return [];
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0) return [];
  const baseSlots: string[] = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  return baseSlots.map(hour => ({
    time: t.timeSlots[hour as keyof typeof t.timeSlots],
    available: Math.random() > 0.3
  }));
};

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================
const BookingPage = () => {
  const { user, loading } = useAuth();
  const { t } = useBookingLanguage();

  const [bookingType, setBookingType] = useState<'work' | 'measurement-tv' | 'quotation' | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 2);
    return minDate;
  });
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [googleCalendarUrl, setGoogleCalendarUrl] = useState<string>('');
  const [serviceCheckboxes, setServiceCheckboxes] = useState<Record<string, string[]>>({});
  const [selectedMaterialImages, setSelectedMaterialImages] = useState<Record<string, string>>({});

  // Checkout state
  const [stripeEnabled, setStripeEnabled] = useState<boolean>(false);
  const [loadingPaymentConfig, setLoadingPaymentConfig] = useState<boolean>(true);
  const [savedBookingId, setSavedBookingId] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'saving' | 'redirecting' | 'pending'>('idle');

  useEffect(() => {
    if (step !== 5) return;

    const checkPaymentConfig = async () => {
      setLoadingPaymentConfig(true);
      try {
        const response = await fetch('/api/payment-config');
        if (!response.ok) throw new Error('API response: ' + response.status);
        const data = await response.json();
        setStripeEnabled(data.enableFinancing === true);
      } catch (error: any) {
        try {
          const configRef = doc(db, 'Config', 'app_settings');
          const configSnap = await getDoc(configRef);
          if (configSnap.exists()) {
            const data = configSnap.data();
            setStripeEnabled(data.enableFinancing === true);
          }
        } catch (fbError: any) {
          setStripeEnabled(false);
        }
      } finally {
        setLoadingPaymentConfig(false);
      }
    };

    checkPaymentConfig();
  }, [step]);

  const minDate = useMemo(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
  }, []);

  const timeSlots = useMemo(() =>
    generateTimeSlots(selectedDate, bookingType, t),
    [selectedDate, bookingType, t]
  );

  const workDirectServices: Service[] = useMemo(() => [
    {
      id: 'furniture-tv',
      name: t.services['furniture-tv'].name,
      description: t.services['furniture-tv'].description,
      icon: <span>📺</span>,
      subServices: [
        { id: 'tv-mount', name: t.subServices['tv-mount'], description: t.subServiceDescriptions['tv-mount'] },
        { id: 'marble-panel', name: t.subServices['marble-panel'], description: t.subServiceDescriptions['marble-panel'] },
        { id: 'wood-panel', name: t.subServices['wood-panel'], description: t.subServiceDescriptions['wood-panel'] },
        { id: 'elevated-furniture', name: t.subServices['elevated-furniture'], description: t.subServiceDescriptions['elevated-furniture'] },
        { id: 'led-lights', name: t.subServices['led-lights'], description: t.subServiceDescriptions['led-lights'] },
        { id: 'all-services', name: t.subServices['all-services'], description: t.subServiceDescriptions['all-services'] },
      ],
    },
    {
      id: 'painting',
      name: t.services['painting'].name,
      description: t.services['painting'].description,
      icon: <span>🎨</span>,
      subServices: [
        { id: 'interior-basic', name: t.subServices['interior-basic'], description: t.subServiceDescriptions['interior-basic'] },
        { id: 'interior-premium', name: t.subServices['interior-premium'], description: t.subServiceDescriptions['interior-premium'] },
        { id: 'exterior-basic', name: t.subServices['exterior-basic'], description: t.subServiceDescriptions['exterior-basic'] },
        { id: 'exterior-weatherproof', name: t.subServices['exterior-weatherproof'], description: t.subServiceDescriptions['exterior-weatherproof'] },
        { id: 'ceiling', name: t.subServices['ceiling'], description: t.subServiceDescriptions['ceiling'] },
        { id: 'trim', name: t.subServices['trim'], description: t.subServiceDescriptions['trim'] },
      ],
    },
    {
      id: 'flooring',
      name: t.services['flooring'].name,
      description: t.services['flooring'].description,
      icon: <span>🔲</span>,
      subServices: [
        { id: 'laminate-install', name: t.subServices['laminate-install'], description: t.subServiceDescriptions['laminate-install'] },
        { id: 'subfloor-prep', name: t.subServices['subfloor-prep'], description: t.subServiceDescriptions['subfloor-prep'] },
        { id: 'baseboards', name: t.subServices['baseboards'], description: t.subServiceDescriptions['baseboards'] },
      ],
    },
    {
      id: 'cleaning',
      name: t.services['cleaning'].name,
      description: t.services['cleaning'].description,
      icon: <span>🧹</span>,
      subServices: [
        { id: 'post-construction', name: t.subServices['post-construction'], description: t.subServiceDescriptions['post-construction'] },
        { id: 'deep-clean', name: t.subServices['deep-clean'], description: t.subServiceDescriptions['deep-clean'] },
        { id: 'maintenance', name: t.subServices['maintenance'], description: t.subServiceDescriptions['maintenance'] },
      ],
    },
    {
      id: 'general-work',
      name: t.services['general-work'].name,
      description: t.services['general-work'].description,
      icon: <span>🔧</span>,
      subServices: [
        { id: 'repairs', name: t.subServices['repairs'], description: t.subServiceDescriptions['repairs'] },
        { id: 'assembly', name: t.subServices['assembly'], description: t.subServiceDescriptions['assembly'] },
        { id: 'installation', name: t.subServices['installation'], description: t.subServiceDescriptions['installation'] },
      ],
    },
  ], [t]);

  const measurementTvServices: Service[] = useMemo(() => [
    {
      id: 'furniture-tv-measure',
      name: t.services['furniture-tv-measure'].name,
      description: t.services['furniture-tv-measure'].description,
      icon: <span>📺</span>,
      subServices: [
        { id: 'measure-tv', name: t.subServices['measure-tv'], description: t.subServiceDescriptions['measure-tv'] },
        { id: 'measure-wall', name: t.subServices['measure-wall'], description: t.subServiceDescriptions['measure-wall'] },
        { id: 'measure-space', name: t.subServices['measure-space'], description: t.subServiceDescriptions['measure-space'] },
      ],
    },
  ], [t]);

  const quotationServices: Service[] = useMemo(() => [
    {
      id: 'painting-quote',
      name: t.services['painting-quote'].name,
      description: t.services['painting-quote'].description,
      icon: <span>🎨</span>,
      subServices: [
        { id: 'assess-area', name: t.subServices['assess-area'], description: t.subServiceDescriptions['assess-area'] },
        { id: 'material-estimate', name: t.subServices['material-estimate'], description: t.subServiceDescriptions['material-estimate'] },
      ],
    },
    {
      id: 'flooring-quote',
      name: t.services['flooring-quote'].name,
      description: t.services['flooring-quote'].description,
      icon: <span>🔲</span>,
      subServices: [
        { id: 'floor-measure', name: t.subServices['floor-measure'], description: t.subServiceDescriptions['floor-measure'] },
        { id: 'subfloor-check', name: t.subServices['subfloor-check'], description: t.subServiceDescriptions['subfloor-check'] },
      ],
    },
    {
      id: 'cleaning-quote',
      name: t.services['cleaning-quote'].name,
      description: t.services['cleaning-quote'].description,
      icon: <span>🧹</span>,
      subServices: [
        { id: 'space-assessment', name: t.subServices['space-assessment'], description: t.subServiceDescriptions['space-assessment'] },
        { id: 'cleaning-type', name: t.subServices['cleaning-type'], description: t.subServiceDescriptions['cleaning-type'] },
      ],
    },
    {
      id: 'general-work-quote',
      name: t.services['general-work-quote'].name,
      description: t.services['general-work-quote'].description,
      icon: <span>🔧</span>,
      subServices: [
        { id: 'work-assessment', name: t.subServices['work-assessment'], description: t.subServiceDescriptions['work-assessment'] },
        { id: 'material-list', name: t.subServices['material-list'], description: t.subServiceDescriptions['material-list'] },
      ],
    },
  ], [t]);

  const materialOptions: MaterialOption[] = useMemo(() => [
    {
      id: 'marble-panels',
      name: t.materials['marble-panels'],
      images: [
        'assets/materials/panel-Marmol/marmol-Gold.jpeg',
        'assets/materials/panel-Marmol/m-BlackLines.jpeg',
        'assets/materials/panel-Marmol/m-GranitoHard.jpeg',
        'assets/materials/panel-Marmol/m-linesDark.jpeg',
        'assets/materials/panel-Marmol/m-GranitoSimple.jpeg',
        'assets/materials/panel-Marmol/m-GrayTexture.jpeg',
        'assets/materials/panel-Marmol/m-LinesGold.jpeg',
        'assets/materials/panel-Marmol/m-WhiteSafe.jpeg',
      ],
      aforo: 100,
    },
    {
      id: 'wood-panels',
      name: t.materials['wood-panels'],
      images: [
        'assets/materials/panel-Wood/p-032.jpeg',
        'assets/materials/panel-Wood/p-168.jpeg',
        'assets/materials/panel-Wood/p-069.jpeg',
        'assets/materials/panel-Wood/p-067.jpeg',
        'assets/materials/panel-Wood/p-065.jpeg',
        'assets/materials/panel-Wood/p-070.jpeg',
        'assets/materials/panel-Wood/p-097.jpeg',
        'assets/materials/panel-Wood/p-104.jpeg',
        'assets/materials/panel-Wood/p-120.jpeg',
        'assets/materials/panel-Wood/p-131.jpeg',
        'assets/materials/panel-Wood/p-154.jpeg',
        'assets/materials/panel-Wood/p-157.jpeg',
        'assets/materials/panel-Wood/p-158.jpeg',
        'assets/materials/panel-Wood/p-175.jpeg',
      ],
      aforo: 100,
    },
    {
      id: 'led-lights',
      name: t.materials['led-lights'],
      images: [
        'assets/materials/lights/led-10ft.jpeg',
        'assets/materials/lights/ledTV-cam.jpeg',
        'assets/materials/lights/ledTV.jpeg',
        'assets/materials/lights/light-6Pack.jpeg',
      ],
      aforo: 25,
    },
  ], [t]);

  const getAvailableServices = (): Service[] => {
    if (bookingType === 'work') return workDirectServices;
    if (bookingType === 'measurement-tv') return measurementTvServices;
    if (bookingType === 'quotation') return quotationServices;
    return [];
  };

  if (loading) {
    return (
      <Container>
        <LoadingMessage>
          <LoadingSpinner />
          {t.loadingMessage}
        </LoadingMessage>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container>
        <ErrorMessage>
          <ErrorIcon>⚠️</ErrorIcon>
          <p>{t.authErrorMessage}</p>
        </ErrorMessage>
      </Container>
    );
  }

  const getUserDisplayName = (firebaseUser: any): string => {
    if (firebaseUser.displayName) return firebaseUser.displayName;
    if (firebaseUser.email) return firebaseUser.email.split('@')[0];
    return 'Usuario';
  };

  const currentUser = {
    name: getUserDisplayName(user),
    email: user.email || t.emailNotAvailable || 'No disponible',
    phone: user.phoneNumber || t.phoneNotAvailable || 'No disponible',
    uid: user.uid,
  };

  const handleCheckboxChange = (serviceId: string, optionId: string) => {
    setServiceCheckboxes(prev => {
      const current = prev[serviceId] || [];
      const isSelected = current.includes(optionId);

      if (optionId === 'all-services') {
        const service = workDirectServices.find(s => s.id === serviceId);
        if (!service) return prev;
        if (isSelected) return { ...prev, [serviceId]: [] };
        const allIds = service.subServices?.map(opt => opt.id) || [];
        return { ...prev, [serviceId]: allIds };
      }

      const newSelection = isSelected
        ? current.filter(id => id !== optionId)
        : [...current, optionId];

      const service = workDirectServices.find(s => s.id === serviceId);
      if (service && service.subServices) {
        const allOptionIds = service.subServices.map(opt => opt.id);
        const selectedCount = newSelection.filter(id => id !== 'all-services').length;
        const totalCount = allOptionIds.filter(id => id !== 'all-services').length;
        if (selectedCount === totalCount && allOptionIds.includes('all-services')) {
          return { ...prev, [serviceId]: allOptionIds };
        }
      }

      return { ...prev, [serviceId]: newSelection };
    });
  };

  const handleSelectMaterialImage = (materialId: string, imageUrl: string) => {
    setSelectedMaterialImages(prev => ({ ...prev, [materialId]: imageUrl }));
    setSelectedMaterial(materialId);
  };

  const handleCheckoutPayment = async () => {
    setPaymentStatus('saving');

    const availableServices = getAvailableServices();
    const selectedServiceData = availableServices.find(s => s.id === selectedService);
    const selectedCheckboxes = serviceCheckboxes[selectedService] || [];
    const selectedOptionsData = selectedServiceData?.subServices?.filter(opt =>
      selectedCheckboxes.includes(opt.id)
    ) || [];

    const [hours, minutes] = selectedTime.split(':');
    const startDateTime = new Date(selectedDate);
    startDateTime.setHours(parseInt(hours), parseInt(minutes), 0);
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(startDateTime.getHours() + 2);

    const bookingData = {
      userId: currentUser.uid,
      clientName: currentUser.name,
      clientEmail: currentUser.email,
      clientPhone: currentUser.phone,
      bookingType: bookingType,
      serviceId: selectedService,
      serviceName: selectedServiceData?.name || '',
      selectedOptions: selectedOptionsData.map(opt => ({ id: opt.id, name: opt.name })),
      materialId: selectedMaterial || null,
      materialName: selectedMaterial
        ? materialOptions.find(m => m.id === selectedMaterial)?.name || null
        : null,
      materialImages: selectedMaterialImages,
      bookingDate: selectedDate.toISOString(),
      bookingTime: selectedTime,
      bookingStartDateTime: startDateTime.toISOString(),
      bookingEndDateTime: endDateTime.toISOString(),
      formattedDate: formatDate(selectedDate),
      paymentStatus: stripeEnabled ? 'initiated' : 'pending',
      depositAmount: BOOKING_DEPOSIT_AMOUNT,
      depositCurrency: BOOKING_CURRENCY,
      stripeSessionId: null,
      stripePaymentIntentId: null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      status: 'pending_confirmation',
    };

    try {
      const checkoutResponse = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookingData,
          amount: BOOKING_DEPOSIT_AMOUNT,
          currency: BOOKING_CURRENCY,
          customerEmail: currentUser.email,
          customerName: currentUser.name,
          serviceName: selectedServiceData?.name,
          bookingDate: formatDate(selectedDate),
          bookingTime: selectedTime,
          stripeEnabled,
          successUrl: `${window.location.origin}/booking/success?booking_id=BOOKING_ID&session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/booking?cancelled=true`,
        }),
      });

      const result = await checkoutResponse.json();
      if (result.error) throw new Error(result.error);

      const bookingId = result.bookingId;
      setSavedBookingId(bookingId);

      if (stripeEnabled) {
        setPaymentStatus('redirecting');
        window.location.href = result.url;
      } else {
        setPaymentStatus('pending');

        await fetch('/api/send-booking-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...bookingData,
            bookingId: bookingId,
            type: bookingType === 'work' ? t.workType :
              bookingType === 'measurement-tv' ? t.measurementTvType : t.quotationType,
            service: selectedServiceData?.name,
            options: selectedOptionsData.map(opt => opt.name).join(', '),
            material: selectedMaterial
              ? materialOptions.find(m => m.id === selectedMaterial)?.name
              : '',
            date: formatDate(selectedDate),
            time: selectedTime,
          }),
        }).catch(emailError => {
          console.warn('Email no enviado:', emailError);
        });

        const calendarTitle = `${bookingType === 'work' ? t.workType : bookingType === 'measurement-tv' ? t.measurementTvType : t.quotationType} - ${selectedServiceData?.name}`;
        const calendarDescription = `Servicio: ${selectedServiceData?.name}\nFecha: ${formatDate(selectedDate)}\nHora: ${selectedTime}\nCliente: ${currentUser.name}`;
        const gcalUrl = createGoogleCalendarUrl(calendarTitle, calendarDescription, startDateTime, endDateTime);
        setGoogleCalendarUrl(gcalUrl);
        setShowSuccess(true);
      }

    } catch (error) {
      console.error('Error en checkout:', error);
      setPaymentStatus('idle');
      alert(`Error al procesar la reserva: ${error instanceof Error ? error.message : 'Error desconocido'}. Por favor intenta nuevamente.`);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setIsSubmitting(false);
  };

  const canProceedToNextStep = () => {
    if (step === 1) return bookingType !== null;
    if (step === 2) return selectedService !== '';
    if (step === 3) {
      const checkboxes = serviceCheckboxes[selectedService] || [];
      if (checkboxes.length === 0) return false;

      if (bookingType === 'work' && selectedService === 'furniture-tv') {
        const hasMaterialOption = checkboxes.some(id =>
          id === 'marble-panel' || id === 'wood-panel' || id === 'led-lights'
        );
        if (!hasMaterialOption) return true;

        const requiredMaterialIds: string[] = [];
        if (checkboxes.includes('marble-panel')) requiredMaterialIds.push('marble-panels');
        if (checkboxes.includes('wood-panel')) requiredMaterialIds.push('wood-panels');
        if (checkboxes.includes('led-lights')) requiredMaterialIds.push('led-lights');

        return requiredMaterialIds.every(materialId =>
          selectedMaterialImages[materialId] !== undefined
        );
      }
      return true;
    }
    if (step === 4) return selectedTime !== '';
    if (step === 5) return true;
    return true;
  };

  const resetBooking = () => {
    setBookingType(null);
    setSelectedDate(minDate);
    setSelectedTime('');
    setSelectedService('');
    setSelectedMaterial('');
    setStep(1);
    setShowSuccess(false);
    setGoogleCalendarUrl('');
    setServiceCheckboxes({});
    setSelectedMaterialImages({});
    setSavedBookingId(null);
    setPaymentStatus('idle');
  };

  const availableServices = getAvailableServices();
  const selectedServiceData = availableServices.find(s => s.id === selectedService);
  const selectedCheckboxesForSummary = serviceCheckboxes[selectedService] || [];
  const selectedOptionsForSummary = selectedServiceData?.subServices?.filter(opt =>
    selectedCheckboxesForSummary.includes(opt.id)
  ) || [];

  if (showSuccess) {
    return (
      <Container>
        <GlobalStyle />
        <SuccessCard>
          <SuccessIcon>{stripeEnabled ? '✅' : '📋'}</SuccessIcon>
          <SuccessTitle>{t.successTitle}</SuccessTitle>
          <SuccessMessage>{t.successMessage(currentUser.name)}</SuccessMessage>

          {savedBookingId && (
            <div style={{ marginBottom: '1rem', fontSize: '0.8rem', color: 'gray', opacity: 0.7 }}>
              {t.bookingIdLabel} {savedBookingId}
            </div>
          )}

          <SummaryBox>
            <SummaryTitle>{t.summaryTitle}</SummaryTitle>
            <SummaryItem>
              <strong>{t.typeLabel}</strong>{' '}
              {bookingType === 'work' ? t.workType :
                bookingType === 'measurement-tv' ? t.measurementTvType : t.quotationType}
            </SummaryItem>
            <SummaryItem>
              <strong>{t.serviceLabel}</strong> {selectedServiceData?.name}
            </SummaryItem>
            <SummaryItem>
              <strong>{t.optionsLabel}</strong>{' '}
              {selectedOptionsForSummary.length > 0
                ? selectedOptionsForSummary.map(opt => opt.name).join(', ')
                : 'Ninguna'}
            </SummaryItem>
            {selectedMaterial && (
              <SummaryItem>
                <strong>{t.materialLabel}</strong>{' '}
                {materialOptions.find(m => m.id === selectedMaterial)?.name}
              </SummaryItem>
            )}
            <SummaryItem>
              <strong>{t.dateLabel}</strong> {formatDate(selectedDate)}
            </SummaryItem>
            <SummaryItem>
              <strong>{t.timeLabel}</strong> {selectedTime}
            </SummaryItem>
            <SummaryItem>
              <strong>{t.paymentStatusLabel}</strong>{' '}
              {paymentStatus === 'pending'
                ? t.paymentStatusPending
                : t.paymentStatusConfirmed}
            </SummaryItem>
          </SummaryBox>

          <InfoBox>
            <InfoIcon>📧</InfoIcon>
            <p>{t.emailSentMessage(currentUser.email)}</p>
          </InfoBox>

          <ButtonGroup>
            <GoogleCalendarButton href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
              {t.googleCalendarButton}
            </GoogleCalendarButton>
            <PrimaryButton onClick={resetBooking}>
              {t.anotherBookingButton}
            </PrimaryButton>
          </ButtonGroup>
        </SuccessCard>
      </Container>
    );
  }

  const requiredMaterialIds: string[] = [];
  if (bookingType === 'work' && selectedService === 'furniture-tv') {
    const checkboxes = serviceCheckboxes[selectedService] || [];
    if (checkboxes.includes('marble-panel')) requiredMaterialIds.push('marble-panels');
    if (checkboxes.includes('wood-panel')) requiredMaterialIds.push('wood-panels');
    if (checkboxes.includes('led-lights')) requiredMaterialIds.push('led-lights');
  }

  return (
    <Container>
      <GlobalStyle />
      <Header>
        <Title>{t.pageTitle}</Title>
        <Subtitle>{t.pageSubtitle}</Subtitle>
        <UserInfo>
          <UserIcon>👤</UserIcon>
          <span>{currentUser.name}</span>
        </UserInfo>
      </Header>

      <ProgressBar>
        {[1, 2, 3, 4, 5].map((s) => (
          <ProgressStep key={s} active={step >= s}>
            {s === 5 ? '💳' : s}
          </ProgressStep>
        ))}
      </ProgressBar>

      <Content>
        {/* Paso 1 */}
        {step === 1 && (
          <Section>
            <SectionTitle>{t.step1Title}</SectionTitle>
            <BookingTypeGrid>
              <BookingTypeCard
                selected={bookingType === 'work'}
                onClick={() => {
                  setBookingType('work');
                  setSelectedService(''); setServiceCheckboxes({});
                  setSelectedMaterial(''); setSelectedMaterialImages({}); setSelectedTime('');
                }}
              >
                <CardIcon>🔨</CardIcon>
                <CardTitle>{t.workTypeTitle}</CardTitle>
                <CardDescription>{t.workTypeDescription}</CardDescription>
              </BookingTypeCard>

              <BookingTypeCard
                selected={bookingType === 'measurement-tv'}
                onClick={() => {
                  setBookingType('measurement-tv');
                  setSelectedService(''); setServiceCheckboxes({});
                  setSelectedMaterial(''); setSelectedMaterialImages({}); setSelectedTime('');
                }}
              >
                <CardIcon>📏</CardIcon>
                <CardTitle>{t.measurementTvTypeTitle}</CardTitle>
                <CardDescription>{t.measurementTvTypeDescription}</CardDescription>
              </BookingTypeCard>

              <BookingTypeCard
                selected={bookingType === 'quotation'}
                onClick={() => {
                  setBookingType('quotation');
                  setSelectedService(''); setServiceCheckboxes({});
                  setSelectedMaterial(''); setSelectedMaterialImages({}); setSelectedTime('');
                }}
              >
                <CardIcon>📋</CardIcon>
                <CardTitle>{t.quotationTypeTitle}</CardTitle>
                <CardDescription>{t.quotationTypeDescription}</CardDescription>
              </BookingTypeCard>
            </BookingTypeGrid>
          </Section>
        )}

        {/* Paso 2 */}
        {step === 2 && (
          <Section>
            <SectionTitle>{t.step2Title}</SectionTitle>
            <ServicesGrid>
              {getAvailableServices().map((service) => (
                <ServiceCard
                  key={service.id}
                  selected={selectedService === service.id}
                  onClick={() => setSelectedService(service.id)}
                >
                  {service.icon}
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{service.name}</div>
                  <div style={{ fontSize: '0.9rem', color: 'inherit' }}>{service.description}</div>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </Section>
        )}

        {/* Paso 3 */}
        {step === 3 && (
          <Section>
            <SectionTitle>{t.step3Title}</SectionTitle>
            <OptionsContainer>
              <SubTitle>{t.optionsTitle}</SubTitle>
              <CheckboxList>
                {getAvailableServices()
                  .find(s => s.id === selectedService)
                  ?.subServices?.map(option => {
                    const checkboxes = serviceCheckboxes[selectedService] || [];
                    const isSelected = checkboxes.includes(option.id);
                    return (
                      <CheckboxItem key={option.id}>
                        <Checkbox
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleCheckboxChange(selectedService, option.id)}
                        />
                        <div>
                          <CheckboxLabel>{option.name}</CheckboxLabel>
                          <CheckboxDescription>{option.description}</CheckboxDescription>
                        </div>
                      </CheckboxItem>
                    );
                  })}
              </CheckboxList>
            </OptionsContainer>

            {bookingType === 'work' && selectedService === 'furniture-tv' && requiredMaterialIds.length > 0 && (
              <MaterialGalleryContainer>
                <SubTitle>{t.materialGalleryTitle}</SubTitle>
                <MaterialOptionsGrid>
                  {materialOptions
                    .filter(option => requiredMaterialIds.includes(option.id))
                    .map(option => (
                      <ImageGalleryComponent
                        key={option.id}
                        material={option}
                        selected={selectedMaterial === option.id}
                        onSelect={setSelectedMaterial}
                        selectedImage={selectedMaterialImages[option.id] || null}
                        onSelectImage={handleSelectMaterialImage}
                      />
                    ))}
                </MaterialOptionsGrid>

                {!canProceedToNextStep() && requiredMaterialIds.length > 0 && (
                  <p style={{
                    color: '#e74c3c', marginTop: '1rem', fontSize: '0.95rem',
                    textAlign: 'center', fontWeight: 'bold', padding: '10px',
                    background: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px'
                  }}>
                    {t.materialRequiredWarning || "⚠️ Por favor, selecciona una imagen para cada material elegido."}
                  </p>
                )}
              </MaterialGalleryContainer>
            )}
          </Section>
        )}

        {/* Paso 4 */}
        {step === 4 && (
          <Section>
            <SectionTitle>{t.step4Title}</SectionTitle>
            <DateTimeContainer>
              <CalendarColumn>
                <SubTitle>{t.selectDateTitle}</SubTitle>
                <CalendarWrapper>
                  <Calendar
                    onChange={(value) => { setSelectedDate(value as Date); setSelectedTime(''); }}
                    value={selectedDate}
                    minDate={minDate}
                    locale="es-ES"
                  />
                </CalendarWrapper>
              </CalendarColumn>

              <TimeSlotColumn>
                <SubTitle>{t.availableTimesTitle}</SubTitle>
                <SelectedDate>{formatDate(selectedDate)}</SelectedDate>
                {timeSlots.length === 0 ? (
                  <InfoBox>
                    <InfoIcon>ℹ️</InfoIcon>
                    <p>{t.closedDayMessage}</p>
                  </InfoBox>
                ) : (
                  <TimeSlotGrid>
                    {timeSlots.map((slot) => (
                      <TimeSlotButton
                        key={slot.time}
                        selected={selectedTime === slot.time}
                        disabled={!slot.available}
                        onClick={() => slot.available && setSelectedTime(slot.time)}
                      >
                        {slot.time}
                      </TimeSlotButton>
                    ))}
                  </TimeSlotGrid>
                )}
              </TimeSlotColumn>
            </DateTimeContainer>
          </Section>
        )}

        {/* Paso 5 */}
        {step === 5 && (
          <Section>
            <SectionTitle>{t.step5Title}</SectionTitle>

            <CheckoutCard>
              <CheckoutTitle>{t.checkoutSummaryTitle}</CheckoutTitle>

              <CheckoutRow>
                <CheckoutLabel>{t.checkoutTypeLabel}</CheckoutLabel>
                <CheckoutValue>
                  {bookingType === 'work' ? t.workType :
                    bookingType === 'measurement-tv' ? t.measurementTvType : t.quotationType}
                </CheckoutValue>
              </CheckoutRow>

              <CheckoutRow>
                <CheckoutLabel>{t.checkoutServiceLabel}</CheckoutLabel>
                <CheckoutValue>{selectedServiceData?.name}</CheckoutValue>
              </CheckoutRow>

              {selectedOptionsForSummary.length > 0 && (
                <CheckoutRow>
                  <CheckoutLabel>{t.checkoutOptionsLabel}</CheckoutLabel>
                  <CheckoutValue>
                    {selectedOptionsForSummary.map(opt => opt.name).join(', ')}
                  </CheckoutValue>
                </CheckoutRow>
              )}

              {selectedMaterial && (
                <CheckoutRow>
                  <CheckoutLabel>{t.checkoutMaterialLabel}</CheckoutLabel>
                  <CheckoutValue>
                    {materialOptions.find(m => m.id === selectedMaterial)?.name}
                    {selectedMaterialImages[selectedMaterial] && ' ✓'}
                  </CheckoutValue>
                </CheckoutRow>
              )}

              <CheckoutRow>
                <CheckoutLabel>{t.checkoutDateLabel}</CheckoutLabel>
                <CheckoutValue style={{ textTransform: 'capitalize' }}>
                  {formatDate(selectedDate)}
                </CheckoutValue>
              </CheckoutRow>

              <CheckoutRow>
                <CheckoutLabel>{t.checkoutTimeLabel}</CheckoutLabel>
                <CheckoutValue>{selectedTime}</CheckoutValue>
              </CheckoutRow>

              <CheckoutRow>
                <CheckoutLabel>{t.checkoutClientLabel}</CheckoutLabel>
                <CheckoutValue>{currentUser.name}</CheckoutValue>
              </CheckoutRow>

              <CheckoutRow>
                <CheckoutLabel>{t.checkoutContactLabel}</CheckoutLabel>
                <CheckoutValue>{currentUser.email}</CheckoutValue>
              </CheckoutRow>
            </CheckoutCard>

            <DepositBox>
              <DepositAmount>{BOOKING_DEPOSIT_DISPLAY}</DepositAmount>
              <DepositLabel>{t.depositTitle}</DepositLabel>
              <DepositNote>{t.depositNote}</DepositNote>
            </DepositBox>

            {loadingPaymentConfig ? (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem', gap: '0.5rem', alignItems: 'center' }}>
                <LoadingSpinner />
                <span style={{ color: 'gray', fontSize: '0.9rem' }}>{t.verifyingPayment}</span>
              </div>
            ) : (
              <>
                <PaymentStatusBadge enabled={stripeEnabled}>
                  {stripeEnabled ? t.stripeActiveLabel : t.stripeInactiveLabel}
                </PaymentStatusBadge>

                <PaymentButton
                  stripeEnabled={stripeEnabled}
                  onClick={handleCheckoutPayment}
                  disabled={paymentStatus === 'saving' || paymentStatus === 'redirecting'}
                >
                  {paymentStatus === 'saving' && (
                    <><LoadingSpinner /> {t.savingBooking}</>
                  )}
                  {paymentStatus === 'redirecting' && (
                    <><LoadingSpinner /> {t.redirectingPayment}</>
                  )}
                  {(paymentStatus === 'idle' || paymentStatus === 'pending') && (
                    stripeEnabled
                      ? <>{t.payButtonStripe(BOOKING_DEPOSIT_DISPLAY)}</>
                      : <>{t.payButtonPending}</>
                  )}
                </PaymentButton>

                {!stripeEnabled && (
                  <ReservationPendingBox>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>ℹ️</span>
                    <ReservationPendingText>
                      {t.pendingPaymentNote(BOOKING_DEPOSIT_DISPLAY)}
                    </ReservationPendingText>
                  </ReservationPendingBox>
                )}

                {stripeEnabled && (
                  <ReservationPendingBox>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🔒</span>
                    <ReservationPendingText>
                      {t.stripeSecureNote}
                    </ReservationPendingText>
                  </ReservationPendingBox>
                )}
              </>
            )}
          </Section>
        )}
      </Content>

      <NavigationButtons>
        {step > 1 && (
          <SecondaryButton onClick={() => setStep(step - 1)}>
            {t.backButton}
          </SecondaryButton>
        )}

        {step < 4 && (
          <PrimaryButton
            onClick={() => setStep(step + 1)}
            disabled={!canProceedToNextStep()}
          >
            {t.continueButton}
          </PrimaryButton>
        )}

        {step === 4 && (
          <PrimaryButton
            onClick={() => setStep(5)}
            disabled={!canProceedToNextStep()}
          >
            {t.checkoutToNextStep}
          </PrimaryButton>
        )}
      </NavigationButtons>
    </Container>
  );
};

export default BookingPage;