'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { Paintbrush, Sparkles, Droplets, Tv, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import React, { useState, useEffect } from 'react';
// Importaciones necesarias para la lógica de redirección correcta
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';

// --- Lista de Servicios ---
const servicesList = [
  {
    icon: Paintbrush,
    titleKey: "services.painting.title",
    descriptionKey: "services.painting.description",
    slug: "painting",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)", // Azul a Verde
    glowColor: "rgba(59, 130, 246, 0.4)"
  },
  {
    icon: Sparkles,
    titleKey: "services.cleaning.title",
    descriptionKey: "services.cleaning.description",
    slug: "cleaning",
    gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(251, 191, 36, 0.15) 100%)", // Verde a Amarillo
    glowColor: "rgba(16, 185, 129, 0.4)"
  },
  {
    icon: Droplets,
    titleKey: "services.water.filter.installation.title",
    descriptionKey: "services.water.filter.installation.description",
    slug: "water-filter-installation",
    gradient: "linear-gradient(135deg, rgba(9, 103, 244, 0.203) 0%, rgba(239, 68, 68, 0.15) 100%)", // Naranja a Rojo
    glowColor: "rgba(22, 151, 249, 0.4)"
  },
  {
    icon: Tv,
    titleKey: "services.tv.title",
    descriptionKey: "services.tv.description",
    slug: "tv-installation",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(249, 115, 22, 0.15) 100%)", // Azul a Naranja
    glowColor: "rgba(59, 130, 246, 0.4)"
  },
  {
    icon: Wrench,
    titleKey: "services.other.title",
    descriptionKey: "services.other.description",
    slug: "other",
    gradient: "linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(239, 68, 68, 0.15) 100%)", // Amarillo a Rojo
    glowColor: "rgba(251, 191, 36, 0.4)"
  }
];

// --- Traducciones ---
const serviceTranslations: any = {
  es: {
    "page.title": "Nuestros Servicios",
    "page.subtitle": "Soluciones profesionales para todas tus necesidades.",
    "services.painting.title": "Pintura",
    "services.painting.description": "Servicios de pintura interior y exterior para hogares y negocios.",
    "services.cleaning.title": "Limpieza",
    "services.cleaning.description": "Limpieza profunda, mantenimiento regular y limpieza post-construcción.",
    "services.water.filter.installation.title": "Instalacion de Filtros de Agua",
    "services.water.filter.installation.description": "Instalacion profesional de filtros de agua para mejoras en la calidad del agua en tu hogar o negocio. ",
    "services.tv.title": "Instalación de TV",
    "services.tv.description": "Montaje en pared seguro y profesional para todo tipo de televisores.",
    "services.other.title": "Otros Servicios",
    "services.other.description": "Reparaciones menores, ensamblaje de muebles y más. ¡Pregúntanos!",
    // Nuevas claves para el botón de CTA
    "cta.title": "¿Listo para empezar tu proyecto?",
    "cta.button": "Solicitar Cotización",
  },
  en: {
    "page.title": "Our Services",
    "page.subtitle": "Professional solutions for all your needs.",
    "services.painting.title": "Painting",
    "services.painting.description": "Interior and exterior painting services for homes and businesses.",
    "services.cleaning.title": "Cleaning",
    "services.cleaning.description": "Deep cleaning, regular maintenance, and post-construction cleanup.",
    "services.water.filter.installation.title": "Water filter Installations",
    "services.water.filter.installation.description": "Professional water filter installations to inprove water quality in your home or business.",
    "services.tv.title": "TV Installation",
    "services.tv.description": "Secure and professional wall mounting for all types of televisions.",
    "services.other.title": "Other Services",
    "services.other.description": "Handyman repairs, furniture assembly, and more. Just ask!",
    // Nuevas claves para el botón de CTA
    "cta.title": "Ready to start your project?",
    "cta.button": "Request a Quote",
  }
};

// --- Estilos con Gradientes Vibrantes ---
const ServicesContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem ;
  max-width: 1280px;
  margin: 1rem auto;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.bg}; 
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.palette.skyBlue},
    ${({ theme }) => theme.colors.palette.emeraldGreen},
    ${({ theme }) => theme.colors.palette.warmOrange}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 6s ease infinite;
  background-size: 200% 200%;

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 300;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

interface CardProps {
  $gradient: string;
  $glowColor: string;
}

const StyledServiceCard = styled(Link)<CardProps>`
  position: relative;
  background: ${props => props.$gradient};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  display: flex; 
  flex-direction: column;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.$gradient.replace('0.15', '1')};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      ${props => props.$glowColor} 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 20px 60px ${props => props.$glowColor},
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover::after {
    opacity: 0.3;
  }

  &:active {
    transform: translateY(-4px) scale(1.01);
  }
`;

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.palette.skyBlue},
    ${({ theme }) => theme.colors.palette.warmOrange}
  );
  color: white;
  margin-bottom: 1.5rem;
  box-shadow: 
    0 8px 24px rgba(249, 115, 22, 0.3),
    0 0 0 3px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  ${StyledServiceCard}:hover & {
    transform: rotate(360deg) scale(1.1);
    box-shadow: 
      0 12px 32px rgba(249, 115, 22, 0.5),
      0 0 0 3px rgba(255, 255, 255, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;

  ${StyledServiceCard}:hover & {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.palette.skyBlue},
      ${({ theme }) => theme.colors.palette.warmOrange}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const CardDescription = styled.p`
  font-size: 1.0625rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;

  ${StyledServiceCard}:hover & {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

// --- Nuevos Estilos para el botón CTA (Agregado para solucionar el problema) ---
const CTAContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding: 3rem;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

// Usamos un div estilizado para que el Link de Next.js funcione correctamente (SPA)
const CTAButton = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.palette.warmOrange},
    ${({ theme }) => theme.colors.palette.sunYellow}
  );
  color: white;
  padding: 1rem 3rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.colors.glowShadows?.orange || '0 4px 15px rgba(251, 146, 60, 0.4)'};
  display: inline-block;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 30px rgba(251, 146, 60, 0.6);
  }
`;

// --- Componente ---
export default function ServicesPage() {
  const { language } = useLanguage(); 
  const t = (key: string) => (serviceTranslations[language] as any)[key] || key;

  // Estado del usuario para la lógica de redirección
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <ServicesContainer>
      <Title>{t("page.title")}</Title>
      <Subtitle>{t("page.subtitle")}</Subtitle>
      <ServicesGrid>
        {servicesList.map((service, index) => (
          <StyledServiceCard 
            href={`/servicespage/${service.slug}`} 
            key={index}
            $gradient={service.gradient}
            $glowColor={service.glowColor}
          >
            <IconWrapper>
              <service.icon size={32} /> 
            </IconWrapper>
            <CardTitle>{t(service.titleKey)}</CardTitle>
            <CardDescription>{t(service.descriptionKey)}</CardDescription>
          </StyledServiceCard>
        ))}
      </ServicesGrid>

      {/* Botón CTA Corregido: Redirige a Quotes (o Login) sin recargar la página */}
      <CTAContainer>
        <CTATitle>{t("cta.title")}</CTATitle>
        <Link href={user ? '/quotes' : '/login'} style={{ textDecoration: 'none' }}>
          <CTAButton>
            {t("cta.button")}
          </CTAButton>
        </Link>
      </CTAContainer>

    </ServicesContainer>
  );
}

