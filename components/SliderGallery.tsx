'use client';

import React from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import { Brush, Sparkles, Tv, Wrench } from 'lucide-react';

// 1. CORRECCIÓN CLAVE: Importamos desde 'contexts' (plural) y usamos el hook 'useLanguage'
import { useLanguage } from '../contexts/LanguageContext';

// --- DATOS SEGUROS ---
const safeServicesData = [
  {
    id: 'painting',
    icon: Brush,
    image: '/assets/ai-images/img-sliderPaint.jpeg',
    colorKey: 'skyBlue',
    translations: {
      es: { title: 'Pintura Profesional', description: 'Interiores y exteriores con acabados premium y detallados.' },
      en: { title: 'Professional Painting', description: 'Interior and exterior painting with premium detailed finishes.' },
    },
  },
  {
    id: 'cleaning',
    icon: Sparkles,
    image: '/assets/ai-images/img-sliderCleaning.jpeg',
    colorKey: 'emeraldGreen',
    translations: {
      es: { title: 'Limpieza Profunda', description: 'Servicio especializado para comercios y residencias.' },
      en: { title: 'Deep Cleaning', description: 'Specialized service for commercial and residential spaces.' },
    },
  },
  {
    id: 'tv-install',
    icon: Tv,
    image: '/assets/ai-images/img-sliderTvwall.jpeg',
    colorKey: 'warmOrange',
    translations: {
      es: { title: 'Instalación TV', description: 'Paneles modernos tipo mármol y madera para tu entretenimiento.' },
      en: { title: 'TV Setup', description: 'Modern marble and wood style panels for your entertainment.' },
    },
  },
  {
    id: 'general',
    icon: Wrench,
    image: '/assets/ai-images/img-sliderGeneral.jpeg',
    colorKey: 'coralRed',
    translations: {
      es: { title: 'Servicios Generales', description: 'Instalación de ventiladores, cortinas, closets y reparaciones.' },
      en: { title: 'General Services', description: 'Installation of fans, curtains, closets, and general repairs.' },
    },
  },
];

// --- ANIMACIONES ---
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

// --- ESTILOS ---
const GallerySection = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme?.colors?.bg || '#111'};
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme?.colors?.headerPrimary || '#fff'};
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  z-index: 10;
  
  span {
    color: ${({ theme }) => theme?.colors?.primary || '#3b82f6'};
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
`;

const SliderTrack = styled.div`
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: ${scroll} 50s linear infinite;
  padding: 2rem 0;
  
  &:hover {
    animation-play-state: paused;
  }
`;

const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme?.colors?.secondaryBg || '#023859'};
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  width: 320px;
  min-width: 320px;
  height: 420px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: var(--card-color, #3b82f6);
    box-shadow: 0 20px 40px -10px var(--card-color, #3b82f6);
  }
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 55%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ServiceCard}:hover & img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, ${({ theme }) => theme?.colors?.secondaryBg || '#023859'}, transparent);
  }
`;

const FloatingIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme?.colors?.secondaryBg || '#023859'};
  border: 2px solid var(--card-color, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--card-color, #3b82f6);
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
  z-index: 5;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  
  svg {
    width: 30px;
    height: 30px;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 45%;
  justify-content: flex-start;
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme?.colors?.textPrimary || '#fff'};
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme?.colors?.textSecondary || '#d1d5db'};
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  opacity: 0.9;
`;

// --- COMPONENTE PRINCIPAL ---

const SliderGallery: React.FC = () => {
  const theme = useTheme();
  
  // 2. CORRECCIÓN CLAVE: Usamos el hook useLanguage()
  // Ya no usamos useContext(LanguageContext) porque ese no estaba exportado.
  // Al usar useLanguage(), TypeScript ya sabe automáticamente que devuelve { language, setLanguage, t }
  const { language } = useLanguage(); 
  
  const items = [...safeServicesData, ...safeServicesData, ...safeServicesData];

  return (
    <GallerySection>
      <SectionTitle>
        {language === 'es' ? 'Nuestros ' : 'Our '} 
        <span>{language === 'es' ? 'Servicios' : 'Services'}</span>
      </SectionTitle>

      <SliderContainer>
        <SliderTrack>
          {items.map((service, index) => {
            // "as any" es un truco temporal para evitar que TS se queje si el theme no es perfecto
            const palette = (theme?.colors?.palette as any) || {};
            const safeColor = palette[service.colorKey] || '#3b82f6';
            
            const cardStyle = {
              '--card-color': safeColor
            } as React.CSSProperties;

            return (
              <ServiceCard 
                key={`${service.id}-${index}`} 
                style={cardStyle}
              >
                <CardImageContainer>
                    <img src={service.image} alt={service.translations[language].title} />
                </CardImageContainer>

                <FloatingIcon style={cardStyle}>
                  <service.icon />
                </FloatingIcon>
                
                <CardContent>
                  <CardTitle>
                    {service.translations[language].title}
                  </CardTitle>
                  <CardDescription>
                    {service.translations[language].description}
                  </CardDescription>
                </CardContent>
              </ServiceCard>
            );
          })}
        </SliderTrack>
      </SliderContainer>
    </GallerySection>
  );
};

export default SliderGallery;



