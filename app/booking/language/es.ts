import { BookingLanguage } from './index';

export const es: BookingLanguage = {
  // Estados de carga y autenticación
  loadingMessage: "Cargando información del usuario...",
  authErrorMessage: "Debes iniciar sesión para hacer una reserva.",

  // Header
  pageTitle: "Reserva de Servicios",
  pageSubtitle: "Selecciona las opciones para tu reserva",
  userInfo: "Usuario",

  // Barra de progreso
  step1: "1",
  step2: "2",
  step3: "3",
  step4: "4",
  step5: "💳",

  // Paso 1: Tipos de reserva
  step1Title: "Paso 1: Tipo de Reserva",
  workTypeTitle: "Instalación",
  workTypeDescription: "Quiero el trabajo de instalación directamente sin necesidad de medición previa",
  measurementTvTypeTitle: "Tomar Medidas - TV",
  measurementTvTypeDescription: "Necesito medición específica para muebles de televisión",
  quotationTypeTitle: "Mirar Trabajo para Cotización",
  quotationTypeDescription: "Evaluación previa para cotización de servicios",

  // Paso 2: Servicios
  step2Title: "Paso 2: Selecciona un Servicio",

  // Paso 3: Opciones y materiales
  step3Title: "Paso 3: Opciones del Servicio",
  optionsTitle: "Selecciona las opciones que necesitas:",
  materialGalleryTitle: "Selecciona Material (REQUERIDO)",
  materialRequiredWarning: "⚠️ Debes seleccionar una imagen de cada material para continuar",

  // Paso 4: Fecha y hora
  step4Title: "Paso 4: Fecha y Hora",
  selectDateTitle: "Selecciona una fecha",
  availableTimesTitle: "Hora disponible",
  selectedDateLabel: "Fecha seleccionada",
  closedDayMessage: "No atendemos los domingos. Por favor selecciona un día de lunes a sábado.",

  // Paso 5: Checkout
  step5Title: "Paso 5: Confirmación y Pago",
  checkoutSummaryTitle: "📋 Resumen de tu reserva",
  checkoutTypeLabel: "Tipo:",
  checkoutServiceLabel: "Servicio:",
  checkoutOptionsLabel: "Opciones:",
  checkoutMaterialLabel: "Material:",
  checkoutDateLabel: "Fecha:",
  checkoutTimeLabel: "Hora:",
  checkoutClientLabel: "Cliente:",
  checkoutContactLabel: "Contacto:",
  depositTitle: "Depósito para separar la fecha",
  depositNote: "Este monto se descuenta del total del servicio el día del trabajo",
  verifyingPayment: "Verificando sistema de pago...",
  stripeActiveLabel: "🟢 Pagos en línea activos",
  stripeInactiveLabel: "🟡 Pagos en línea próximamente",
  payButtonStripe: (amount: string) => `💳 Pagar ${amount} y confirmar reserva`,
  payButtonPending: "📋 Confirmar y guardar reserva",
  savingBooking: "Guardando reserva...",
  redirectingPayment: "Redirigiendo a pago seguro...",
  stripeSecureNote: "Pago seguro procesado por Stripe. Tu información de tarjeta nunca es almacenada en nuestros servidores. El depósito se descuenta del total del servicio.",
  pendingPaymentNote: (amount: string) => `Los pagos en línea estarán disponibles pronto. Tu reserva quedará guardada y te contactaremos para coordinar el pago del depósito de separación ${amount} por otro medio.`,
  bookingIdLabel: "ID de reserva:",
  checkoutToNextStep: "Continuar al checkout →",

  // Botones
  backButton: "Anterior",
  continueButton: "Continuar →",
  processingButton: "Procesando...",
  confirmButton: "Confirmar Reserva",

  // Éxito
  successTitle: "¡Reserva Confirmada!",
  successMessage: (name: string) => `Gracias ${name}, tu reserva ha sido creada exitosamente.`,
  summaryTitle: "Resumen de tu Reserva",
  typeLabel: "Tipo:",
  workType: "Instalación",
  measurementTvType: "Medición TV",
  quotationType: "Cotización",
  serviceLabel: "Servicio:",
  optionsLabel: "Opciones Seleccionadas:",
  materialLabel: "Material:",
  imagesSelectedLabel: "Imágenes Seleccionadas:",
  dateLabel: "Fecha:",
  timeLabel: "Hora:",
  paymentStatusLabel: "Estado:",
  paymentStatusPending: "📋 Reserva guardada — Pago pendiente",
  paymentStatusConfirmed: "✅ Reserva confirmada",
  emailSentMessage: (email: string) => `Se ha enviado un correo de confirmación a ${email}`,
  googleCalendarButton: "📅 Agregar a Google Calendar",
  anotherBookingButton: "Crear Nueva Reserva",

  // Email
  emailServiceType: "Tipo de servicio:",
  emailService: "Servicio:",
  emailOptions: "Opciones:",
  emailMaterial: "Material:",
  emailImages: "Imágenes Seleccionadas:",
  emailClient: "Cliente:",
  emailEmail: "Email:",
  emailPhone: "Teléfono:",
  emailNotAvailable: "No disponible",
  phoneNotAvailable: "No disponible",

  // Servicios específicos
  services: {
    'furniture-tv': {
      name: "Muebles para Televisión",
      description: "Instalación y montaje de muebles para TV - Servicio más demandado",
    },
    painting: {
      name: "Pintura",
      description: "Servicios profesionales de pintura interior y exterior",
    },
    flooring: {
      name: "Instalación de Pisos Laminados",
      description: "Instalación profesional de pisos laminados y cerámicos",
    },
    cleaning: {
      name: "Limpieza Profesional",
      description: "Servicios de limpieza post-construcción y mantenimiento",
    },
    'general-work': {
      name: "Trabajos Generales",
      description: "Reparaciones y mantenimiento general del hogar",
    },
    'furniture-tv-measure': {
      name: "Muebles para Televisión - Medición",
      description: "Toma de medidas para instalación de muebles TV",
    },
    'painting-quote': {
      name: "Pintura - Cotización",
      description: "Evaluación para servicios de pintura",
    },
    'flooring-quote': {
      name: "Pisos - Cotización",
      description: "Evaluación para instalación de pisos",
    },
    'cleaning-quote': {
      name: "Limpieza - Cotización",
      description: "Evaluación para servicios de limpieza",
    },
    'general-work-quote': {
      name: "Trabajos Generales - Cotización",
      description: "Evaluación para trabajos generales",
    },
  },

  // Sub-servicios
  subServices: {
    'tv-mount': "Montura para TV",
    'marble-panel': "Instalación panel tipo mármol",
    'wood-panel': "Instalación panel tipo madera",
    'elevated-furniture': "Instalación mueble elevado",
    'led-lights': "Instalación luces LED",
    'all-services': "Todas las anteriores",
    'interior-basic': "Pintura interior - Básica",
    'interior-premium': "Pintura interior - Premium",
    'exterior-basic': "Pintura exterior - Básica",
    'exterior-weatherproof': "Pintura exterior - Anticlimática",
    ceiling: "Pintura de cielo raso",
    trim: "Pintura de zócalos y molduras",
    'laminate-install': "Instalación de laminado",
    'subfloor-prep': "Preparación de subpiso",
    baseboards: "Instalación de zócalos",
    'post-construction': "Limpieza post-construcción",
    'deep-clean': "Limpieza profunda",
    maintenance: "Limpieza de mantenimiento",
    repairs: "Reparaciones varias",
    assembly: "Ensamblaje de muebles",
    installation: "Instalaciones varias",
    'measure-tv': "Medición para montura TV",
    'measure-wall': "Medición de pared",
    'measure-space': "Medición de espacio",
    'assess-area': "Evaluación del área",
    'material-estimate': "Estimado de materiales",
    'floor-measure': "Medición de área",
    'subfloor-check': "Evaluación de subpiso",
    'space-assessment': "Evaluación del espacio",
    'cleaning-type': "Tipo de limpieza",
    'work-assessment': "Evaluación de trabajos",
    'material-list': "Lista de materiales",
  },

  // Descripciones de sub-servicios
  subServiceDescriptions: {
    'tv-mount': 'Fijación segura de montura',
    'marble-panel': 'Panel decorativo tipo mármol',
    'wood-panel': 'Panel decorativo tipo madera',
    'elevated-furniture': 'Mueble elevado para TV',
    'led-lights': 'Iluminación LED ambiental',
    'all-services': 'Incluye todos los servicios de TV',
    'interior-basic': '2 manos de pintura en paredes interiores',
    'interior-premium': 'Capa base + acabado premium interior',
    'exterior-basic': 'Pintura de fachada estándar',
    'exterior-weatherproof': 'Protección climática avanzada',
    ceiling: 'Techos y cielos rasos',
    trim: 'Acabado en detalles y molduras',
    'laminate-install': 'Pisos laminados flotantes',
    'subfloor-prep': 'Nivelación y preparación',
    baseboards: 'Zócalos y terminaciones',
    'post-construction': 'Limpieza profunda después de obras',
    'deep-clean': 'Limpieza integral del hogar',
    maintenance: 'Limpieza regular y mantenimiento',
    repairs: 'Pequeñas reparaciones del hogar',
    assembly: 'Montaje de muebles y equipos',
    installation: 'Instalación de accesorios y equipos',
    'measure-tv': 'Medir espacio y soporte para TV',
    'measure-wall': 'Verificar tipo de pared y resistencia',
    'measure-space': 'Medir dimensiones del área',
    'assess-area': 'Medir superficie y estado de paredes',
    'material-estimate': 'Calcular tipo y cantidad de pintura',
    'floor-measure': 'Calcular metros cuadrados',
    'subfloor-check': 'Revisar estado del subpiso',
    'space-assessment': 'Tamaño y estado del área',
    'cleaning-type': 'Determinar nivel de limpieza',
    'work-assessment': 'Identificar trabajos a realizar',
    'material-list': 'Materiales necesarios',
  },

  // Materiales
  materials: {
    'marble-panels': "Panel Tipo Mármol",
    'wood-panels': "Panel Tipo Madera",
    'led-lights': "Luces LED",
  },

  // Time Slots — Lun-Sáb, 8:00am a 6:00pm
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