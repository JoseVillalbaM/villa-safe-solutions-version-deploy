import { useContext } from 'react';
import { es } from './es';
import { en } from './en';

import { useLanguage } from '@/contexts/LanguageContext';

export interface BookingLanguage {
  // Estados de carga y autenticación
  loadingMessage: string;
  authErrorMessage: string;

  // Header
  pageTitle: string;
  pageSubtitle: string;
  userInfo: string;

  // Barra de progreso
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string;

  // Paso 1: Tipos de reserva
  step1Title: string;
  workTypeTitle: string;
  workTypeDescription: string;
  measurementTvTypeTitle: string;
  measurementTvTypeDescription: string;
  quotationTypeTitle: string;
  quotationTypeDescription: string;

  // Paso 2: Servicios
  step2Title: string;

  // Paso 3: Opciones y materiales
  step3Title: string;
  optionsTitle: string;
  materialGalleryTitle: string;
  materialRequiredWarning: string;

  // Paso 4: Fecha y hora
  step4Title: string;
  selectDateTitle: string;
  availableTimesTitle: string;
  selectedDateLabel: string;
  closedDayMessage: string;

  // Paso 5: Checkout
  step5Title: string;
  checkoutSummaryTitle: string;
  checkoutTypeLabel: string;
  checkoutServiceLabel: string;
  checkoutOptionsLabel: string;
  checkoutMaterialLabel: string;
  checkoutDateLabel: string;
  checkoutTimeLabel: string;
  checkoutClientLabel: string;
  checkoutContactLabel: string;
  depositTitle: string;
  depositNote: string;
  verifyingPayment: string;
  stripeActiveLabel: string;
  stripeInactiveLabel: string;
  payButtonStripe: (amount: string) => string;
  payButtonPending: string;
  savingBooking: string;
  redirectingPayment: string;
  stripeSecureNote: string;
  pendingPaymentNote: (amount: string) => string;
  bookingIdLabel: string;
  checkoutToNextStep: string;

  // Botones
  backButton: string;
  continueButton: string;
  processingButton: string;
  confirmButton: string;

  // Éxito
  successTitle: string;
  successMessage: (name: string) => string;
  summaryTitle: string;
  typeLabel: string;
  workType: string;
  measurementTvType: string;
  quotationType: string;
  serviceLabel: string;
  optionsLabel: string;
  materialLabel: string;
  imagesSelectedLabel: string;
  dateLabel: string;
  timeLabel: string;
  paymentStatusLabel: string;
  paymentStatusPending: string;
  paymentStatusConfirmed: string;
  emailSentMessage: (email: string) => string;
  googleCalendarButton: string;
  anotherBookingButton: string;

  // Email
  emailServiceType: string;
  emailService: string;
  emailOptions: string;
  emailMaterial: string;
  emailImages: string;
  emailClient: string;
  emailEmail: string;
  emailPhone: string;
  emailNotAvailable: string;
  phoneNotAvailable: string;

  // Servicios específicos
  services: {
    'furniture-tv': { name: string; description: string };
    painting: { name: string; description: string };
    flooring: { name: string; description: string };
    cleaning: { name: string; description: string };
    'general-work': { name: string; description: string };
    'furniture-tv-measure': { name: string; description: string };
    'painting-quote': { name: string; description: string };
    'flooring-quote': { name: string; description: string };
    'cleaning-quote': { name: string; description: string };
    'general-work-quote': { name: string; description: string };
  };

  // Sub-servicios
  subServices: {
    'tv-mount': string;
    'marble-panel': string;
    'wood-panel': string;
    'elevated-furniture': string;
    'led-lights': string;
    'all-services': string;
    'interior-basic': string;
    'interior-premium': string;
    'exterior-basic': string;
    'exterior-weatherproof': string;
    ceiling: string;
    trim: string;
    'laminate-install': string;
    'subfloor-prep': string;
    baseboards: string;
    'post-construction': string;
    'deep-clean': string;
    maintenance: string;
    repairs: string;
    assembly: string;
    installation: string;
    'measure-tv': string;
    'measure-wall': string;
    'measure-space': string;
    'assess-area': string;
    'material-estimate': string;
    'floor-measure': string;
    'subfloor-check': string;
    'space-assessment': string;
    'cleaning-type': string;
    'work-assessment': string;
    'material-list': string;
  };

  // Descripciones de sub-servicios
  subServiceDescriptions: {
    'tv-mount': string;
    'marble-panel': string;
    'wood-panel': string;
    'elevated-furniture': string;
    'led-lights': string;
    'all-services': string;
    'interior-basic': string;
    'interior-premium': string;
    'exterior-basic': string;
    'exterior-weatherproof': string;
    ceiling: string;
    trim: string;
    'laminate-install': string;
    'subfloor-prep': string;
    baseboards: string;
    'post-construction': string;
    'deep-clean': string;
    maintenance: string;
    repairs: string;
    assembly: string;
    installation: string;
    'measure-tv': string;
    'measure-wall': string;
    'measure-space': string;
    'assess-area': string;
    'material-estimate': string;
    'floor-measure': string;
    'subfloor-check': string;
    'space-assessment': string;
    'cleaning-type': string;
    'work-assessment': string;
    'material-list': string;
  };

  // Materiales
  materials: {
    'marble-panels': string;
    'wood-panels': string;
    'led-lights': string;
  };

  // Time Slots — Lun-Sáb 8:00am a 6:00pm
  timeSlots: {
    '08:00': string;
    '09:00': string;
    '10:00': string;
    '11:00': string;
    '12:00': string;
    '13:00': string;
    '14:00': string;
    '15:00': string;
    '16:00': string;
    '17:00': string;
    '18:00': string;
  };
}

export type Language = 'es' | 'en';

export const useBookingLanguage = () => {
  const { language, setLanguage } = useLanguage();
  const t = language === 'es' ? es : en;

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return { language, t, toggleLanguage };
};