'use client';

import {  Sparkles, Tv, Wrench } from 'lucide-react';

// Interfaz para la estructura de un servicio
export interface ServiceItem {
  id: string;
  icon: any; // Tipo para el componente de icono
  colorKey: 'skyBlue' | 'emeraldGreen' | 'warmOrange' | 'coralRed'; // Claves de tu paleta
  translations: {
    es: {
      title: string;
      description: string;
    };
    en: { // Agrego inglés como ejemplo de estructura, aunque puedes usar solo 'es'
      title: string;
      description: string;
    };
  };
}

export const servicesData: ServiceItem[] = [
  {
    id: 'painting',
    icon:' Sparkles',
    colorKey: 'skyBlue',
    translations: {
      es: {
        title: 'Pintura Profesional',
        description: 'Servicio de pintura interior y exterior con acabados premium.',
      },
      en: {
        title: 'Professional Painting',
        description: 'Interior and exterior painting service with premium finishes.',
      },
    },
  },
  {
    id: 'cleaning',
    icon: Sparkles,
    colorKey: 'emeraldGreen',
    translations: {
      es: {
        title: 'Limpieza Profunda',
        description: 'Servicio especializado comercial y residencial.',
      },
      en: {
        title: 'Deep Cleaning',
        description: 'Specialized commercial and residential service.',
      },
    },
  },
  {
    id: 'tv-install',
    icon: Tv,
    colorKey: 'warmOrange',
    translations: {
      es: {
        title: 'Instalación TV y Entretenimiento',
        description: 'Instalación de panel tipo mármol y Panel tipo madera moderno.',
      },
      en: {
        title: 'TV & Entertainment Setup',
        description: 'Installation of marble-type and modern wood-type panels.',
      },
    },
  },
  {
    id: 'general',
    icon: Wrench,
    colorKey: 'coralRed',
    translations: {
      es: {
        title: 'Servicios Generales',
        description: 'Reparación e instalación de ventiladores, cortinas, closet y más.',
      },
      en: {
        title: 'General Services',
        description: 'Repair and installation of fans, curtains, closets, and more.',
      },
    },
  },
];
export default servicesData;

