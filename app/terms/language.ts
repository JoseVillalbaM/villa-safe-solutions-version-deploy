// app/terms/language.ts
export type TermsTranslationKey = 
  | 'pageTitle'
  | 'pageSubtitle'
  | 'effectiveDate'
  | 'section1.title'
  | 'section1.intro1'
  | 'section1.intro2'
  | 'section2.title'
  | 'section2.intro'
  | 'section2.service1'
  | 'section2.service2'
  | 'section2.service3'
  | 'section2.service4'
  | 'section2.disclaimer'
  | 'section3.title'
  | 'section3.text'
  | 'section4.title'
  | 'section4.bullet1'
  | 'section4.bullet2'
  | 'section4.bullet3'
  | 'section4.bullet4'
  | 'section4.bullet5'
  | 'section5.title'
  | 'section5.text'
  | 'section6.title'
  | 'section6.bullet1'
  | 'section6.bullet2'
  | 'section6.bullet3'
  | 'section6.bullet4'
  | 'section6.bullet5'
  | 'section7.title'
  | 'section7.text'
  | 'section8.title'
  | 'section8.text'
  | 'section9.title'
  | 'section9.text'
  | 'section10.title'
  | 'section10.text'
  | 'section11.title'
  | 'section11.text'
  | 'section13.text'
  | 'section12.title'
  | 'section13.title'
  | 'section12.text'
  | 'backToHome'
  | 'footerLinks.privacy'
  | 'footerLinks.terms'
  | 'footerLinks.refund'
  | 'footerLinks.contact'
  | 'contactCard.company'
  | 'welcomeMessage';

interface TermsTranslations {
  es: Record<TermsTranslationKey, string>;
  en: Record<TermsTranslationKey, string>;
}

export const termsTranslations: TermsTranslations = {
  es: {
    pageTitle: 'Términos de Servicio',
    pageSubtitle: 'Términos y condiciones de uso',
    effectiveDate: 'Fecha de entrada en vigor: 24 de marzo de 2026',
    'section1.title': '1. Aceptación de los Términos',
    'section1.intro1': 'Bienvenido a Villa Safe Solutions. Al acceder o utilizar nuestro sitio web o contratar nuestros servicios, usted acepta quedar vinculado por estos Términos de Servicio. Por favor, léalos detenidamente antes de continuar.',
    'section1.intro2': 'Si no está de acuerdo con estos términos, por favor no utilice nuestro sitio web ni nuestros servicios.',
    'section2.title': '2. Servicios Ofrecidos',
    'section2.intro': 'Villa Safe Solutions proporciona servicios profesionales para el hogar y negocios en el área de Winter Haven, FL, incluyendo pero no limitado a:',
    'section2.service1': 'Pintura profesional interior y exterior',
    'section2.service2': 'Limpieza profunda para espacios residenciales y comerciales',
    'section2.service3': 'Instalación de TV y configuración de entretenimiento para el hogar',
    'section2.service4': 'Servicios generales: instalación de ventiladores, cortinas, closets y reparaciones generales',
    'section2.disclaimer': 'La disponibilidad, precios y alcance de los servicios pueden variar y están sujetos a cambios sin previo aviso.',
    'section3.title': '3. Registro de Cuenta',
    'section3.text': 'Para solicitar una cotización o reservar un servicio, es posible que deba crear una cuenta. Usted acepta proporcionar información precisa, actual y completa, y mantener la confidencialidad de sus credenciales de inicio de sesión. Usted es responsable de toda actividad que ocurra bajo su cuenta.',
    'section4.title': '4. Reservas y Pagos',
    'section4.bullet1': 'Todas las reservas de servicios están sujetas a disponibilidad y confirmación por parte de nuestro equipo.',
    'section4.bullet2': 'Puede requerirse un depósito o pago completo para confirmar su reserva.',
    'section4.bullet3': 'Los pagos se procesan de forma segura a través de Stripe. Al proporcionar información de pago, usted nos autoriza a cobrar el monto acordado.',
    'section4.bullet4': 'Los precios están listados en Dólares Estadounidenses (USD) y están sujetos a impuestos aplicables.',
    'section4.bullet5': 'Nos reservamos el derecho de modificar los precios en cualquier momento. Los cambios de precio no afectarán las reservas confirmadas.',
    'section5.title': '5. Cancelaciones y Reembolsos',
    'section5.text': 'Nuestros términos de cancelación y reembolso se detallan en nuestra Política de Reembolso. Al reservar un servicio, usted acepta los términos allí establecidos.',
    'section6.title': '6. Responsabilidades del Usuario',
    'section6.bullet1': 'Utilizar nuestro sitio web para cualquier propósito ilegal o en violación de estos Términos.',
    'section6.bullet2': 'Enviar información falsa, engañosa o fraudulenta.',
    'section6.bullet3': 'Interferir o interrumpir el funcionamiento de nuestro sitio web o servidores.',
    'section6.bullet4': 'Intentar obtener acceso no autorizado a cualquier parte de nuestros sistemas.',
    'section6.bullet5': 'Reproducir, duplicar o revender cualquier parte de nuestros servicios sin permiso por escrito.',
    'section7.title': '7. Propiedad Intelectual',
    'section7.text': 'Todo el contenido de este sitio web — incluyendo texto, imágenes, logotipos y diseño — es propiedad de Villa Safe Solutions y está protegido por las leyes de propiedad intelectual aplicables. No puede reproducir, distribuir o crear trabajos derivados sin nuestro consentimiento explícito por escrito.',
    'section8.title': '8. Limitación de Responsabilidad',
    'section8.text': 'En la máxima medida permitida por la ley, Villa Safe Solutions no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos que surjan del uso de nuestro sitio web o servicios. Nuestra responsabilidad total por cualquier reclamo relacionado con nuestros servicios no excederá el monto pagado por usted por el servicio específico en cuestión.',
    'section9.title': '9. Renuncia de Garantías',
    'section9.text': 'Nuestro sitio web y servicios se proporcionan "tal cual" y "según disponibilidad" sin garantías de ningún tipo, expresas o implícitas. No garantizamos que nuestro sitio web sea ininterrumpido, esté libre de errores o libre de virus u otros componentes dañinos.',
    'section10.title': '10. Enlaces a Terceros',
    'section10.text': 'Nuestro sitio web puede contener enlaces a sitios web de terceros (ej. Stripe para pagos). Estos enlaces se proporcionan para su conveniencia y no constituyen un respaldo. No somos responsables por el contenido o las prácticas de privacidad de sitios de terceros.',
    'section11.title': '11. Ley Aplicable',
    'section11.text': 'Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes del Estado de Florida, Estados Unidos, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa que surja bajo estos términos se resolverá en los tribunales del Condado de Polk, Florida.',
    'section12.title': '12. Cambios a Estos Términos',
    'section12.text': 'Nos reservamos el derecho de actualizar o modificar estos Términos de Servicio en cualquier momento. Los cambios importantes se publicarán en esta página con una fecha de entrada en vigor actualizada. Su uso continuado del sitio web después de dichos cambios constituye la aceptación de los nuevos términos.',
    'section13.title': '13. Contáctenos',
    'section13.text': 'Si tiene alguna pregunta sobre estos Términos de Servicio, por favor contáctenos:',
    backToHome: '← Volver al Inicio',
    'footerLinks.privacy': 'Política de Privacidad',
    'footerLinks.terms': 'Términos de Servicio',
    'footerLinks.refund': 'Política de Reembolso',
    'footerLinks.contact': 'Contacto',
    'contactCard.company': 'Villa Safe Solutions',
    welcomeMessage: 'Bienvenido a',
  },
  en: {
    pageTitle: 'Terms of Service',
    pageSubtitle: 'Terms and conditions of use',
    effectiveDate: 'Effective Date: March 24, 2026',
    'section1.title': '1. Acceptance of Terms',
    'section1.intro1': 'Welcome to Villa Safe Solutions. By accessing or using our website or engaging with our services, you agree to be bound by these Terms of Service. Please read them carefully before proceeding.',
    'section1.intro2': 'If you do not agree to these terms, please do not use our website or services.',
    'section2.title': '2. Services Offered',
    'section2.intro': 'Villa Safe Solutions provides professional home and business services in the Winter Haven, FL area, including but not limited to:',
    'section2.service1': 'Professional interior and exterior painting',
    'section2.service2': 'Deep cleaning for residential and commercial spaces',
    'section2.service3': 'TV mounting and home entertainment setup',
    'section2.service4': 'General services: fan installation, curtains, closets, and general repairs',
    'section2.disclaimer': 'The availability, pricing, and scope of services may vary and are subject to change without prior notice.',
    'section3.title': '3. Account Registration',
    'section3.text': 'To request a quote or book a service, you may be required to create an account. You agree to provide accurate, current, and complete information and to keep your login credentials confidential. You are responsible for all activity that occurs under your account.',
    'section4.title': '4. Bookings and Payments',
    'section4.bullet1': 'All service bookings are subject to availability and confirmation by our team.',
    'section4.bullet2': 'A deposit or full payment may be required to confirm your booking.',
    'section4.bullet3': 'Payments are processed securely through Stripe. By providing payment information, you authorize us to charge the agreed amount.',
    'section4.bullet4': 'Prices are listed in US Dollars (USD) and are subject to applicable taxes.',
    'section4.bullet5': 'We reserve the right to modify prices at any time. Any price changes will not affect confirmed bookings.',
    'section5.title': '5. Cancellations and Refunds',
    'section5.text': 'Our cancellation and refund terms are detailed in our Refund Policy. By booking a service, you agree to the terms outlined therein.',
    'section6.title': '6. User Responsibilities',
    'section6.bullet1': 'Use our website for any unlawful purpose or in violation of these Terms.',
    'section6.bullet2': 'Submit false, misleading, or fraudulent information.',
    'section6.bullet3': 'Interfere with or disrupt the operation of our website or servers.',
    'section6.bullet4': 'Attempt to gain unauthorized access to any part of our systems.',
    'section6.bullet5': 'Reproduce, duplicate, or resell any part of our services without written permission.',
    'section7.title': '7. Intellectual Property',
    'section7.text': 'All content on this website — including text, images, logos, and design — is the property of Villa Safe Solutions and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our explicit written consent.',
    'section8.title': '8. Limitation of Liability',
    'section8.text': 'To the fullest extent permitted by law, Villa Safe Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability for any claim related to our services shall not exceed the amount paid by you for the specific service in question.',
    'section9.title': '9. Disclaimer of Warranties',
    'section9.text': 'Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.',
    'section10.title': '10. Third-Party Links',
    'section10.text': 'Our website may contain links to third-party websites (e.g., Stripe for payments). These links are provided for your convenience and do not constitute an endorsement. We are not responsible for the content or privacy practices of third-party sites.',
    'section11.title': '11. Governing Law',
    'section11.text': 'These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of Polk County, Florida.',
    'section12.title': '12. Changes to These Terms',
    'section12.text': 'We reserve the right to update or modify these Terms of Service at any time. Material changes will be posted on this page with an updated effective date. Your continued use of the website after such changes constitutes acceptance of the new terms.',
    'section13.title': '13. Contact Us',
    'section13.text': 'If you have any questions about these Terms of Service, please contact us:',
    backToHome: '← Back to Home',
    'footerLinks.privacy': 'Privacy Policy',
    'footerLinks.terms': 'Terms of Service',
    'footerLinks.refund': 'Refund Policy',
    'footerLinks.contact': 'Contact',
    'contactCard.company': 'Villa Safe Solutions',
    welcomeMessage: 'Welcome to',
  },
};