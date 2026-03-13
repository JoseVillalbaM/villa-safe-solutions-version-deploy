// Definimos los tipos para TypeScript
export type ServiceId = 'cleaning' | 'painting' | 'epoxy' | 'tv' | 'backsplash' | 'washing';

interface ServiceContent {
  title: string;
  icon: string;
  description: string;
  features: string[];
}

interface Translation {
  ui: {
    back: string;
    contactUs: string;
    share: string;
    saveContact: string;
    professionalService: string;
    quoteButton: string;
    shareTitle: string;
    shareText: string;
    copyAlert: string;
  };
  services: Record<ServiceId, ServiceContent>;
}

export const cardTranslations: Record<'en' | 'es', Translation> = {
  en: {
    ui: {
      back: 'Home',
      contactUs: 'Contact Us',
      share: 'Share',
      saveContact: 'Save Contact',
      professionalService: 'Professional Service',
      quoteButton: 'Quote or Reserve Now',
      shareTitle: 'Villa Safe Solutions - Digital Card',
      shareText: 'Check out our services and contact info!',
      copyAlert: 'Link copied to clipboard!'
    },
    services: {
      cleaning: {
        title: 'Home Cleaning',
        icon: '✨',
        description: 'Premium deep cleaning service. We bring back the shine and freshness to every corner of your home with safe products and qualified staff.',
        features: ['Deep dust cleaning', 'Bathroom & kitchen disinfection', 'Vacuuming & mopping', 'Eco-Friendly products']
      },
      painting: {
        title: 'Professional Painting',
        icon: '🎨',
        description: 'We transform your spaces with perfect finishes. Specialists in interiors and exteriors, taking care of every detail and protecting your furniture.',
        features: ['Surface preparation', 'Furniture protection', 'High durability paint', 'Post-job cleanup']
      },
      epoxy: {
        title: 'Epoxy Garage Floor',
        icon: '🛡️',
        description: 'Turn your garage into a showroom. High-resistance coating, easy to clean, and aesthetically impressive.',
        features: ['Stain & chemical resistant', 'Durable glossy finish', 'Variety of colors & textures', 'Anti-slip']
      },
      tv: {
        title: 'TV Wall Mount',
        icon: '📺',
        description: 'Safe and aesthetic TV installation. We ensure your entertainment setup looks perfect with no visible cables.',
        features: ['Fixed or articulating mounts', 'Cable concealment', 'Precise laser leveling', 'Initial setup']
      },
      backsplash: {
        title: 'Backsplash Installation',
        icon: '🧱',
        description: 'The modern touch your kitchen needs. Expert installation of ceramic, glass, or stone to renovate your space.',
        features: ['Custom designs', 'Precise cuts', 'High-quality materials', 'Fast & clean installation']
      },
      washing: {
        title: 'Pressure Washing',
        icon: '💦',
        description: 'We restore the look of your exteriors. We eliminate mold, dirt, and stubborn stains on driveways and facades.',
        features: ['Driveway cleaning', 'Sidewalk & patio washing', 'Care for delicate surfaces', 'Immediate results']
      }
    }
  },
  es: {
    ui: {
      back: 'Inicio',
      contactUs: 'Contáctanos',
      share: 'Compartir',
      saveContact: 'Guardar Contacto',
      professionalService: 'Servicio Profesional',
      quoteButton: 'Cotizar o Reservar Ahora',
      shareTitle: 'Villa Safe Solutions - Tarjeta Digital',
      shareText: '¡Mira nuestros servicios e información de contacto!',
      copyAlert: '¡Enlace copiado al portapapeles!'
    },
    services: {
      cleaning: {
        title: 'Limpieza de Hogar',
        icon: '✨',
        description: 'Servicio premium de limpieza profunda. Devolvemos el brillo y la frescura a cada rincón de tu hogar con productos seguros y personal calificado.',
        features: ['Limpieza profunda de polvo', 'Desinfección de baños y cocina', 'Aspirado y fregado de pisos', 'Productos Eco-Friendly']
      },
      painting: {
        title: 'Pintura Profesional',
        icon: '🎨',
        description: 'Transformamos tus ambientes con acabados perfectos. Especialistas en interiores y exteriores, cuidando cada detalle y protegiendo tus muebles.',
        features: ['Preparación de superficies', 'Protección de mobiliario', 'Pintura de alta durabilidad', 'Limpieza post-trabajo']
      },
      epoxy: {
        title: 'Pisos Epóxicos',
        icon: '🛡️',
        description: 'Convierte tu garaje en un showroom. Recubrimiento de alta resistencia, fácil limpieza y estética impresionante.',
        features: ['Resistencia a manchas y químicos', 'Acabado brillante duradero', 'Variedad de colores y texturas', 'Antideslizante']
      },
      tv: {
        title: 'Montaje de TV',
        icon: '📺',
        description: 'Instalación segura y estética de televisores. Nos encargamos de que tu entretenimiento luzca perfecto y sin cables visibles.',
        features: ['Soportes fijos o articulados', 'Ocultamiento de cableado', 'Nivelación láser precisa', 'Configuración inicial']
      },
      backsplash: {
        title: 'Instalación Backsplash',
        icon: '🧱',
        description: 'El toque moderno que tu cocina necesita. Instalación experta de cerámica, vidrio o piedra para renovar tu espacio.',
        features: ['Diseños personalizados', 'Cortes precisos', 'Materiales de alta calidad', 'Instalación rápida y limpia']
      },
      washing: {
        title: 'Lavado a Presión',
        icon: '💦',
        description: 'Restauramos la apariencia de tus exteriores. Eliminamos moho, suciedad y manchas difíciles en driveways y fachadas.',
        features: ['Limpieza de Driveways', 'Lavado de aceras y patios', 'Cuidado de superficies delicadas', 'Resultados inmediatos']
      }
    }
  }
};

