// app/refund-policy/language.ts
export type RefundTranslationKey = 
  | 'pageTitle'
  | 'pageSubtitle'
  | 'effectiveDate'
  | 'section1.title'
  | 'section1.intro'
  | 'section2.title'
  | 'section2.depositsTable.header.cancellation'
  | 'section2.depositsTable.header.refund'
  | 'section2.depositsTable.row1.time'
  | 'section2.depositsTable.row1.refund'
  | 'section2.depositsTable.row2.time'
  | 'section2.depositsTable.row2.refund'
  | 'section2.depositsTable.row3.time'
  | 'section2.depositsTable.row3.refund'
  | 'section2.depositsTable.row4.time'
  | 'section2.depositsTable.row4.refund'
  | 'section3.title'
  | 'section3.intro'
  | 'section3.cancellation1'
  | 'section3.cancellation2'
  | 'section3.cancellation3'
  | 'section4.title'
  | 'section4.intro'
  | 'section4.option1'
  | 'section4.option2'
  | 'section4.highlight'
  | 'section5.title'
  | 'section5.intro'
  | 'section5.item1'
  | 'section5.item2'
  | 'section5.item3'
  | 'section6.title'
  | 'section6.text'
  | 'section7.title'
  | 'section7.intro'
  | 'section7.item1'
  | 'section7.item2'
  | 'section7.item3'
  | 'section8.title'
  | 'section8.intro'
  | 'section8.item1'
  | 'section8.item2'
  | 'section8.item3'
  | 'section9.title'
  | 'section9.text'
  | 'backToHome'
  | 'footerLinks.privacy'
  | 'footerLinks.terms'
  | 'footerLinks.refund'
  | 'footerLinks.contact'
  | 'contactCard.company'
  | 'importantNote'
  | 'refundTimeline'
  | 'nonRefundableItems'
  | 'cancellationNotice';

interface RefundTranslations {
  es: Record<RefundTranslationKey, string>;
  en: Record<RefundTranslationKey, string>;
}

export const refundTranslations: RefundTranslations = {
  es: {
    pageTitle: 'Política de Reembolso',
    pageSubtitle: 'Política de cancelación y reembolso',
    effectiveDate: 'Fecha de entrada en vigor: 24 de marzo de 2026',
    'section1.title': '1. Depósitos',
    'section1.intro': 'En Villa Safe Solutions, estamos comprometidos a brindar servicios profesionales de alta calidad. Entendemos que los planes pueden cambiar, y hemos establecido esta Política de Reembolso para ser justos y transparentes tanto para nuestros clientes como para nuestro equipo.',
    'section2.title': '2. Tabla de Reembolsos',
    'section2.depositsTable.header.cancellation': 'Momento de Cancelación',
    'section2.depositsTable.header.refund': 'Reembolso del Depósito',
    'section2.depositsTable.row1.time': 'Más de 48 horas antes de la cita',
    'section2.depositsTable.row1.refund': 'Reembolso completo',
    'section2.depositsTable.row2.time': '24–48 horas antes de la cita',
    'section2.depositsTable.row2.refund': '50% de reembolso',
    'section2.depositsTable.row3.time': 'Menos de 24 horas antes de la cita',
    'section2.depositsTable.row3.refund': 'Sin reembolso',
    'section2.depositsTable.row4.time': 'No se presentó (sin aviso previo)',
    'section2.depositsTable.row4.refund': 'Sin reembolso',
    'section3.title': '3. Cancelaciones del Servicio',
    'section3.intro': 'Puede ser requerido un depósito para confirmar y programar su cita de servicio. Este depósito asegura su horario y cubre los costos de preparación inicial.',
    'section3.cancellation1': 'Las cancelaciones deben enviarse por escrito a través de correo electrónico o llamando por teléfono.',
    'section3.cancellation2': 'La fecha y hora de cancelación es el momento en que recibimos su notificación por escrito o confirmamos su llamada.',
    'section3.cancellation3': 'Reprogramar con más de 48 horas de anticipación es gratuito y no implica la pérdida de su depósito.',
    'section4.title': '4. Reembolsos por Servicios Completados',
    'section4.intro': 'Una vez que un servicio se ha completado completamente, generalmente no se emiten reembolsos. Sin embargo, si no está satisfecho con el trabajo realizado, contáctenos dentro de las 48 horas posteriores a la finalización del servicio.',
    'section4.option1': 'Una visita de regreso para abordar el problema sin costo adicional.',
    'section4.option2': 'Un reembolso parcial si determinamos que el trabajo no cumplió con el alcance acordado.',
    'section4.highlight': 'Importante: Los reclamos de reembolso deben presentarse dentro de las 48 horas posteriores a la finalización del servicio. Los reclamos presentados después de este período pueden no ser elegibles para un reembolso o corrección del servicio.',
    'section5.title': '5. Cancelaciones por Villa Safe Solutions',
    'section5.intro': 'En el raro caso de que necesitemos cancelar una cita confirmada debido a circunstancias imprevistas (ej. clima severo, emergencia), haremos lo siguiente:',
    'section5.item1': 'Notificarle lo antes posible por teléfono o correo electrónico.',
    'section5.item2': 'Ofrecer reprogramar en el momento que más le convenga.',
    'section5.item3': 'Emitir un reembolso completo de su depósito si prefiere no reprogramar.',
    'section6.title': '6. Procesamiento de Pagos y Plazo de Reembolso',
    'section6.text': 'Todos los pagos se procesan a través de Stripe. Los reembolsos aprobados se devolverán a su método de pago original. Por favor, permita de 5 a 10 días hábiles para que el reembolso aparezca en su estado de cuenta de tarjeta de crédito/débito. Los tiempos de procesamiento pueden variar según su banco o emisor de la tarjeta.',
    'section7.title': '7. Artículos No Reembolsables',
    'section7.intro': 'Los siguientes no son reembolsables bajo ninguna circunstancia:',
    'section7.item1': 'Depósitos perdidos debido a cancelación tardía (menos de 24 horas).',
    'section7.item2': 'Tarifas de servicio por trabajo ya completado y aceptado por el cliente.',
    'section7.item3': 'Cualquier material o suministro comprado específicamente para su proyecto a su solicitud.',
    'section8.title': '8. Información Adicional',
    'section8.intro': 'Información importante sobre cancelaciones:',
    'section8.item1': 'Las cancelaciones deben realizarse con al menos 24 horas de anticipación para ser elegibles para un reembolso completo.',
    'section8.item2': 'Las cancelaciones con menos de 24 horas de anticipación pueden estar sujetas a una tarifa por cancelación.',
    'section8.item3': 'Los reembolsos se procesarán dentro de 5-10 días hábiles.',
    'section9.title': '9. Contáctenos',
    'section9.text': 'Si tiene alguna pregunta sobre esta Política de Reembolso o para enviar una solicitud de reembolso, por favor contáctenos:',
    backToHome: '← Volver al Inicio',
    'footerLinks.privacy': 'Política de Privacidad',
    'footerLinks.terms': 'Términos de Servicio',
    'footerLinks.refund': 'Política de Reembolso',
    'footerLinks.contact': 'Contacto',
    'contactCard.company': 'Villa Safe Solutions',
    'importantNote': 'Importante',
    'refundTimeline': '5–10 días hábiles',
    'nonRefundableItems': 'Artículos No Reembolsables',
    'cancellationNotice': 'Aviso de Cancelación',
  },
  en: {
    pageTitle: 'Refund Policy',
    pageSubtitle: 'Cancellation and refund policy',
    effectiveDate: 'Effective Date: March 24, 2026',
    'section1.title': '1. Deposits',
    'section1.intro': 'At Villa Safe Solutions, we are committed to delivering high-quality professional services. We understand that plans can change, and we have established this Refund Policy to be fair and transparent for both our clients and our team.',
    'section2.title': '2. Refund Table',
    'section2.depositsTable.header.cancellation': 'Cancellation Timing',
    'section2.depositsTable.header.refund': 'Deposit Refund',
    'section2.depositsTable.row1.time': 'More than 48 hours before appointment',
    'section2.depositsTable.row1.refund': 'Full refund',
    'section2.depositsTable.row2.time': '24–48 hours before appointment',
    'section2.depositsTable.row2.refund': '50% refund',
    'section2.depositsTable.row3.time': 'Less than 24 hours before appointment',
    'section2.depositsTable.row3.refund': 'No refund',
    'section2.depositsTable.row4.time': 'No-show (no prior notice)',
    'section2.depositsTable.row4.refund': 'No refund',
    'section3.title': '3. Service Cancellations',
    'section3.intro': 'A deposit may be required to confirm and schedule your service appointment. This deposit secures your time slot and covers initial preparation costs.',
    'section3.cancellation1': 'Cancellations must be submitted in writing via email or by calling.',
    'section3.cancellation2': 'The cancellation date and time is the moment we receive your written notice or confirm your call.',
    'section3.cancellation3': 'Rescheduling more than 48 hours in advance is free of charge and does not forfeit your deposit.',
    'section4.title': '4. Refunds for Completed Services',
    'section4.intro': 'Once a service has been fully completed, refunds are generally not issued. However, if you are unsatisfied with the work performed, please contact us within 48 hours of service completion.',
    'section4.option1': 'A return visit to address the issue at no additional charge.',
    'section4.option2': 'A partial refund if we determine the work did not meet the agreed-upon scope.',
    'section4.highlight': 'Important: Refund claims must be submitted within 48 hours of service completion. Claims submitted after this window may not be eligible for a refund or service correction.',
    'section5.title': '5. Cancellations by Villa Safe Solutions',
    'section5.intro': 'In the rare event that we need to cancel a confirmed appointment due to unforeseen circumstances (e.g., severe weather, emergency), we will:',
    'section5.item1': 'Notify you as soon as possible via phone or email.',
    'section5.item2': 'Offer to reschedule at your earliest convenience.',
    'section5.item3': 'Issue a full refund of your deposit if you prefer not to reschedule.',
    'section6.title': '6. Payment Processing & Refund Timeline',
    'section6.text': 'All payments are processed through Stripe. Approved refunds will be returned to your original payment method. Please allow 5–10 business days for the refund to appear on your credit/debit card statement. Processing times may vary depending on your bank or card issuer.',
    'section7.title': '7. Non-Refundable Items',
    'section7.intro': 'The following are non-refundable under any circumstances:',
    'section7.item1': 'Deposits forfeited due to late cancellation (less than 24 hours).',
    'section7.item2': 'Service fees for work already completed and accepted by the client.',
    'section7.item3': 'Any materials or supplies purchased specifically for your project at your request.',
    'section8.title': '8. Additional Information',
    'section8.intro': 'Important information about cancellations:',
    'section8.item1': 'Cancellations must be made with at least 24 hours notice to be eligible for a full refund.',
    'section8.item2': 'Cancellations with less than 24 hours notice may be subject to a cancellation fee.',
    'section8.item3': 'Refunds will be processed within 5-10 business days.',
    'section9.title': '9. Contact Us',
    'section9.text': 'For any questions about this Refund Policy or to submit a refund request, please reach out to us:',
    backToHome: '← Back to Home',
    'footerLinks.privacy': 'Privacy Policy',
    'footerLinks.terms': 'Terms of Service',
    'footerLinks.refund': 'Refund Policy',
    'footerLinks.contact': 'Contact',
    'contactCard.company': 'Villa Safe Solutions',
    'importantNote': 'Important',
    'refundTimeline': '5–10 business days',
    'nonRefundableItems': 'Non-Refundable Items',
    'cancellationNotice': 'Cancellation Notice',
  },
};