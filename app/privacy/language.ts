// app/privacy/language.ts
export type PrivacyTranslationKey = 
  | 'pageTitle'
  | 'pageSubtitle'
  | 'effectiveDate'
  | 'section1.title'
  | 'section1.intro'
  | 'section1.infoIntro'
  | 'section1.info1'
  | 'section1.info2'
  | 'section1.info3'
  | 'section1.info4'
  | 'section1.info5'
  | 'section2.title'
  | 'section2.intro'
  | 'section2.use1'
  | 'section2.use2'
  | 'section2.use3'
  | 'section2.use4'
  | 'section2.use5'
  | 'section2.use6'
  | 'section2.use7'
  | 'section3.title'
  | 'section3.intro'
  | 'section3.share1'
  | 'section3.share2'
  | 'section3.share3'
  | 'section3.share4'
  | 'section4.title'
  | 'section4.text'
  | 'section5.title'
  | 'section5.text'
  | 'section6.title'
  | 'section6.text'
  | 'section7.title'
  | 'section7.intro'
  | 'section7.right1'
  | 'section7.right2'
  | 'section7.right3'
  | 'section7.right4'
  | 'section7.right5'
  | 'section8.title'
  | 'section8.text'
  | 'section9.title'
  | 'section9.text'
  | 'section10.title'
  | 'section10.text'
  | 'contactCard.company'
  | 'backToHome'
  | 'footerLinks.privacy'
  | 'footerLinks.terms'
  | 'footerLinks.refund'
  | 'footerLinks.contact';

interface PrivacyTranslations {
  es: Record<PrivacyTranslationKey, string>;
  en: Record<PrivacyTranslationKey, string>;
}

export const privacyTranslations: PrivacyTranslations = {
  es: {
    pageTitle: 'Política de Privacidad',
    pageSubtitle: 'Tu privacidad es importante para nosotros',
    effectiveDate: 'Fecha de entrada en vigor: 24 de marzo de 2026',
    'section1.title': '1. Información que Recopilamos',
    'section1.intro': 'Villa Safe Solutions ("nosotros", "nuestro") está comprometido con la protección de tu información personal. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando visitas nuestro sitio web o utilizas nuestros servicios.',
    'section1.infoIntro': 'Podemos recopilar los siguientes tipos de información:',
    'section1.info1': 'Identificación Personal: Nombre, dirección de correo electrónico, número de teléfono y dirección de facturación proporcionados al registrarse o solicitar una cotización.',
    'section1.info2': 'Información de Pago: Detalles de tarjeta de pago procesados de forma segura a través de Stripe. No almacenamos números completos de tarjeta en nuestros servidores.',
    'section1.info3': 'Detalles del Servicio: Información sobre los servicios que solicitas (ej. pintura, limpieza, instalación de TV, reparaciones generales).',
    'section1.info4': 'Datos de Uso: Tipo de navegador, dirección IP, páginas visitadas y tiempo de permanencia en nuestro sitio (a través de herramientas de análisis).',
    'section1.info5': 'Comunicaciones: Mensajes que nos envías a través de nuestro formulario de contacto o por correo electrónico.',
    'section2.title': '2. Cómo Usamos tu Información',
    'section2.intro': 'Usamos la información que recopilamos para:',
    'section2.use1': 'Procesar y completar tus solicitudes y reservas de servicios.',
    'section2.use2': 'Enviar confirmaciones, recibos y actualizaciones del servicio.',
    'section2.use3': 'Procesar pagos de forma segura a través de nuestro proveedor de pagos (Stripe).',
    'section2.use4': 'Responder a tus consultas y proporcionar atención al cliente.',
    'section2.use5': 'Mejorar nuestro sitio web y servicios basándonos en patrones de uso.',
    'section2.use6': 'Enviar comunicaciones promocionales, si has optado por recibirlas.',
    'section2.use7': 'Cumplir con las obligaciones legales aplicables.',
    'section3.title': '3. Compartir tu Información',
    'section3.intro': 'No vendemos, intercambiamos ni alquilamos tu información personal. Podemos compartirla con:',
    'section3.share1': 'Stripe: Para el procesamiento seguro de pagos. La política de privacidad de Stripe está disponible en stripe.com/privacy.',
    'section3.share2': 'Firebase / Google: Para autenticación y almacenamiento de datos (Firestore). Regido por la política de privacidad de Google.',
    'section3.share3': 'Proveedores de Servicios: Proveedores externos que nos ayudan a operar nuestro sitio web (ej. entrega de correo electrónico a través de Resend).',
    'section3.share4': 'Autoridades Legales: Cuando lo exija la ley o para proteger nuestros derechos legales.',
    'section4.title': '4. Cookies y Seguimiento',
    'section4.text': 'Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar tu experiencia. Estas pueden incluir cookies de sesión (eliminadas al cerrar el navegador) y cookies persistentes (almacenadas en tu dispositivo). Puedes controlar las cookies a través de la configuración de tu navegador, aunque deshabilitarlas puede afectar la funcionalidad del sitio.',
    'section5.title': '5. Seguridad de los Datos',
    'section5.text': 'Implementamos medidas de seguridad estándar de la industria para proteger tus datos personales, incluyendo cifrado HTTPS, Reglas de Seguridad de Firebase y la infraestructura de pago compatible con PCI de Stripe. Sin embargo, ningún método de transmisión por Internet es 100% seguro, y no podemos garantizar una seguridad absoluta.',
    'section6.title': '6. Retención de Datos',
    'section6.text': 'Conservamos tu información personal durante el tiempo necesario para proporcionar nuestros servicios y cumplir con las obligaciones legales. Puedes solicitar la eliminación de tus datos en cualquier momento contactándonos (ver Sección 10).',
    'section7.title': '7. Tus Derechos',
    'section7.intro': 'Dependiendo de tu ubicación, puedes tener derecho a:',
    'section7.right1': 'Acceder a la información personal que tenemos sobre ti.',
    'section7.right2': 'Solicitar la corrección de datos inexactos.',
    'section7.right3': 'Solicitar la eliminación de tus datos personales.',
    'section7.right4': 'Cancelar la suscripción a comunicaciones de marketing en cualquier momento.',
    'section7.right5': 'Presentar una queja ante una autoridad supervisora.',
    'section8.title': '8. Privacidad de los Menores',
    'section8.text': 'Nuestros servicios no están dirigidos a personas menores de 13 años. No recopilamos conscientemente información personal de niños. Si crees que hemos recopilado dicha información inadvertidamente, por favor contáctanos de inmediato.',
    'section9.title': '9. Cambios a Esta Política',
    'section9.text': 'Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos sobre cualquier cambio importante publicando la nueva política en esta página con una fecha de entrada en vigor actualizada. Te recomendamos revisar esta página periódicamente.',
    'section10.title': '10. Contáctanos',
    'section10.text': 'Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos:',
    'contactCard.company': 'Villa Safe Solutions',
    backToHome: '← Volver al Inicio',
    'footerLinks.privacy': 'Política de Privacidad',
    'footerLinks.terms': 'Términos de Servicio',
    'footerLinks.refund': 'Política de Reembolso',
    'footerLinks.contact': 'Contacto',
  },
  en: {
    pageTitle: 'Privacy Policy',
    pageSubtitle: 'Your privacy is important to us',
    effectiveDate: 'Effective Date: March 24, 2026',
    'section1.title': '1. Information We Collect',
    'section1.intro': 'Villa Safe Solutions ("we," "us," or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
    'section1.infoIntro': 'We may collect the following types of information:',
    'section1.info1': 'Personal Identification: Name, email address, phone number, and billing address provided when registering or requesting a quote.',
    'section1.info2': 'Payment Information: Payment card details processed securely through Stripe. We do not store full card numbers on our servers.',
    'section1.info3': 'Service Details: Information about the services you request (e.g., painting, cleaning, TV setup, general repairs).',
    'section1.info4': 'Usage Data: Browser type, IP address, pages visited, and time spent on our site (via analytics tools).',
    'section1.info5': 'Communications: Messages you send us through our contact form or by email.',
    'section2.title': '2. How We Use Your Information',
    'section2.intro': 'We use the information we collect to:',
    'section2.use1': 'Process and fulfill your service requests and bookings.',
    'section2.use2': 'Send confirmations, receipts, and service updates.',
    'section2.use3': 'Process payments securely through our payment provider (Stripe).',
    'section2.use4': 'Respond to your inquiries and provide customer support.',
    'section2.use5': 'Improve our website and services based on usage patterns.',
    'section2.use6': 'Send promotional communications, if you have opted in.',
    'section2.use7': 'Comply with applicable legal obligations.',
    'section3.title': '3. Sharing Your Information',
    'section3.intro': 'We do not sell, trade, or rent your personal information. We may share it with:',
    'section3.share1': 'Stripe: For secure payment processing. Stripe\'s privacy policy is available at stripe.com/privacy.',
    'section3.share2': 'Firebase / Google: For authentication and data storage (Firestore). Governed by Google\'s privacy policy.',
    'section3.share3': 'Service Providers: Third-party vendors who assist us in operating our website (e.g., email delivery via Resend).',
    'section3.share4': 'Legal Authorities: When required by law or to protect our legal rights.',
    'section4.title': '4. Cookies and Tracking',
    'section4.text': 'Our website may use cookies and similar technologies to enhance your experience. These may include session cookies (deleted when you close your browser) and persistent cookies (stored on your device). You can control cookies through your browser settings, though disabling them may affect site functionality.',
    'section5.title': '5. Data Security',
    'section5.text': 'We implement industry-standard security measures to protect your personal data, including HTTPS encryption, Firebase Security Rules, and Stripe\'s PCI-compliant payment infrastructure. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.',
    'section6.title': '6. Data Retention',
    'section6.text': 'We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us (see Section 10).',
    'section7.title': '7. Your Rights',
    'section7.intro': 'Depending on your location, you may have the right to:',
    'section7.right1': 'Access the personal information we hold about you.',
    'section7.right2': 'Request correction of inaccurate data.',
    'section7.right3': 'Request deletion of your personal data.',
    'section7.right4': 'Opt out of marketing communications at any time.',
    'section7.right5': 'Lodge a complaint with a supervisory authority.',
    'section8.title': '8. Children\'s Privacy',
    'section8.text': 'Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.',
    'section9.title': '9. Changes to This Policy',
    'section9.text': 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated effective date. We encourage you to review this page periodically.',
    'section10.title': '10. Contact Us',
    'section10.text': 'If you have any questions about this Privacy Policy, please contact us:',
    'contactCard.company': 'Villa Safe Solutions',
    backToHome: '← Back to Home',
    'footerLinks.privacy': 'Privacy Policy',
    'footerLinks.terms': 'Terms of Service',
    'footerLinks.refund': 'Refund Policy',
    'footerLinks.contact': 'Contact',
  },
};