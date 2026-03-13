import { BookingLanguage } from './index';

export const en: BookingLanguage = {
  // Estados de carga y autenticación
  loadingMessage: "Loading user information...",
  authErrorMessage: "You must be logged in to make a booking.",

  // Header
  pageTitle: "Book Your Appointment",
  pageSubtitle: "Select the options for your booking",
  userInfo: "User",

  // Barra de progreso
  step1: "1",
  step2: "2",
  step3: "3",
  step4: "4",
  step5: "💳",

  // Paso 1: Tipos de reserva
  step1Title: "Step 1: Booking Type",
  workTypeTitle: "Installation",
  workTypeDescription: "I want the installation work directly without prior measurement",
  measurementTvTypeTitle: "Take Measurements - TV",
  measurementTvTypeDescription: "I need specific measurements for TV furniture",
  quotationTypeTitle: "View Work for Quotation",
  quotationTypeDescription: "Prior evaluation for service quotation",

  // Paso 2: Servicios
  step2Title: "Step 2: Select a Service",

  // Paso 3: Opciones y materiales
  step3Title: "Step 3: Service Options",
  optionsTitle: "Select the options you need:",
  materialGalleryTitle: "Select Material (REQUIRED)",
  materialRequiredWarning: "⚠️ You must select an image for each material to continue",

  // Paso 4: Fecha y hora
  step4Title: "Step 4: Date and Time",
  selectDateTitle: "Select a date",
  availableTimesTitle: "Available time",
  selectedDateLabel: "Selected date",
  closedDayMessage: "We are closed on Sundays. Please select a day from Monday to Saturday.",

  // Paso 5: Checkout
  step5Title: "Step 5: Confirmation & Payment",
  checkoutSummaryTitle: "📋 Booking Summary",
  checkoutTypeLabel: "Type:",
  checkoutServiceLabel: "Service:",
  checkoutOptionsLabel: "Options:",
  checkoutMaterialLabel: "Material:",
  checkoutDateLabel: "Date:",
  checkoutTimeLabel: "Time:",
  checkoutClientLabel: "Client:",
  checkoutContactLabel: "Contact:",
  depositTitle: "Deposit to hold your date",
  depositNote: "This amount is deducted from the total service cost on the day of work",
  verifyingPayment: "Verifying payment system...",
  stripeActiveLabel: "🟢 Online payments active",
  stripeInactiveLabel: "🟡 Online payments coming soon",
  payButtonStripe: (amount: string) => `💳 Pay ${amount} and confirm booking`,
  payButtonPending: "📋 Confirm and save booking",
  savingBooking: "Saving booking...",
  redirectingPayment: "Redirecting to secure payment...",
  stripeSecureNote: "Secure payment processed by Stripe. Your card information is never stored on our servers. The deposit is deducted from the total service cost.",
  pendingPaymentNote: (amount: string) => `Online payments will be available soon. Your booking will be saved and we will contact you to coordinate the ${amount} deposit payment through another method.`,
  bookingIdLabel: "Booking ID:",
  checkoutToNextStep: "Continue to checkout →",

  // Botones
  backButton: "Back",
  continueButton: "Continue →",
  processingButton: "Processing...",
  confirmButton: "Confirm Booking",

  // Éxito
  successTitle: "Booking Confirmed!",
  successMessage: (name: string) => `Thank you ${name}, your booking has been created successfully.`,
  summaryTitle: "Booking Summary",
  typeLabel: "Type:",
  workType: "Installation",
  measurementTvType: "TV Measurement",
  quotationType: "Quotation",
  serviceLabel: "Service:",
  optionsLabel: "Selected Options:",
  materialLabel: "Material:",
  imagesSelectedLabel: "Images Selected:",
  dateLabel: "Date:",
  timeLabel: "Time:",
  paymentStatusLabel: "Status:",
  paymentStatusPending: "📋 Booking saved — Payment pending",
  paymentStatusConfirmed: "✅ Booking confirmed",
  emailSentMessage: (email: string) => `A confirmation email has been sent to ${email}`,
  googleCalendarButton: "📅 Add to Google Calendar",
  anotherBookingButton: "Create New Booking",

  // Email
  emailServiceType: "Service type:",
  emailService: "Service:",
  emailOptions: "Options:",
  emailMaterial: "Material:",
  emailImages: "Images Selected:",
  emailClient: "Client:",
  emailEmail: "Email:",
  emailPhone: "Phone:",
  emailNotAvailable: "Not available",
  phoneNotAvailable: "Not available",

  // Servicios específicos
  services: {
    'furniture-tv': {
      name: "TV Furniture",
      description: "Installation and assembly of TV furniture - Most requested service",
    },
    painting: {
      name: "Painting",
      description: "Professional interior and exterior painting services",
    },
    flooring: {
      name: "Laminate Flooring Installation",
      description: "Professional installation of laminate and ceramic floors",
    },
    cleaning: {
      name: "Professional Cleaning",
      description: "Post-construction cleaning and maintenance services",
    },
    'general-work': {
      name: "General Work",
      description: "Home repairs and general maintenance",
    },
    'furniture-tv-measure': {
      name: "TV Furniture - Measurement",
      description: "Taking measurements for TV furniture installation",
    },
    'painting-quote': {
      name: "Painting - Quotation",
      description: "Evaluation for painting services",
    },
    'flooring-quote': {
      name: "Flooring - Quotation",
      description: "Evaluation for flooring installation",
    },
    'cleaning-quote': {
      name: "Cleaning - Quotation",
      description: "Evaluation for cleaning services",
    },
    'general-work-quote': {
      name: "General Work - Quotation",
      description: "Evaluation for general work",
    },
  },

  // Sub-servicios
  subServices: {
    'tv-mount': "TV Mount",
    'marble-panel': "Marble Panel Installation",
    'wood-panel': "Wood Panel Installation",
    'elevated-furniture': "Elevated Furniture Installation",
    'led-lights': "LED Lights Installation",
    'all-services': "All of the above",
    'interior-basic': "Interior Painting - Basic",
    'interior-premium': "Interior Painting - Premium",
    'exterior-basic': "Exterior Painting - Basic",
    'exterior-weatherproof': "Exterior Painting - Weatherproof",
    ceiling: "Ceiling Painting",
    trim: "Baseboards and Trim Painting",
    'laminate-install': "Laminate Installation",
    'subfloor-prep': "Subfloor Preparation",
    baseboards: "Baseboards Installation",
    'post-construction': "Post-Construction Cleaning",
    'deep-clean': "Deep Cleaning",
    maintenance: "Maintenance Cleaning",
    repairs: "Various Repairs",
    assembly: "Furniture Assembly",
    installation: "Various Installations",
    'measure-tv': "TV Mount Measurement",
    'measure-wall': "Wall Measurement",
    'measure-space': "Space Measurement",
    'assess-area': "Area Assessment",
    'material-estimate': "Material Estimate",
    'floor-measure': "Floor Measurement",
    'subfloor-check': "Subfloor Check",
    'space-assessment': "Space Assessment",
    'cleaning-type': "Cleaning Type",
    'work-assessment': "Work Assessment",
    'material-list': "Material List",
  },

  // Sub-service descriptions
  subServiceDescriptions: {
    'tv-mount': 'Secure TV mount installation',
    'marble-panel': 'Decorative marble-style panel',
    'wood-panel': 'Decorative wood-style panel',
    'elevated-furniture': 'Elevated TV furniture installation',
    'led-lights': 'Ambient LED lighting',
    'all-services': 'Includes all TV services',
    'interior-basic': '2 coats of paint on interior walls',
    'interior-premium': 'Base coat + premium interior finish',
    'exterior-basic': 'Standard facade painting',
    'exterior-weatherproof': 'Advanced weather protection',
    ceiling: 'Ceilings and false ceilings',
    trim: 'Finish on details and moldings',
    'laminate-install': 'Floating laminate floors',
    'subfloor-prep': 'Leveling and preparation',
    baseboards: 'Baseboards and finishings',
    'post-construction': 'Deep cleaning after construction work',
    'deep-clean': 'Comprehensive home cleaning',
    maintenance: 'Regular cleaning and maintenance',
    repairs: 'Small home repairs',
    assembly: 'Furniture and equipment assembly',
    installation: 'Accessories and equipment installation',
    'measure-tv': 'Measure space and TV support',
    'measure-wall': 'Check wall type and resistance',
    'measure-space': 'Measure area dimensions',
    'assess-area': 'Measure surface and wall condition',
    'material-estimate': 'Calculate paint type and quantity',
    'floor-measure': 'Calculate square meters',
    'subfloor-check': 'Check subfloor condition',
    'space-assessment': 'Size and condition of the area',
    'cleaning-type': 'Determine cleaning level',
    'work-assessment': 'Identify work to be done',
    'material-list': 'Required materials',
  },

  // Materiales
  materials: {
    'marble-panels': "Marble Panel",
    'wood-panels': "Wood Panel",
    'led-lights': "LED Lights",
  },

  // Time Slots — Mon-Sat, 8:00am to 6:00pm
  timeSlots: {
    '08:00': "08:00",
    '09:00': "09:00",
    '10:00': "10:00",
    '11:00': "11:00",
    '12:00': "12:00",
    '13:00': "13:00",
    '14:00': "14:00",
    '15:00': "15:00",
    '16:00': "16:00",
    '17:00': "17:00",
    '18:00': "18:00",
  },
};