
'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';
import { CheckCircle, ArrowLeft } from 'lucide-react';
// Importaciones de Contexto para Theme y Language
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

// --- Base de Datos de Contenido (Bilingüe) ---

type Feature = { title: string; };

type ServiceContent = {
  title: string;
  tagline: string;
  includesTitle: string;
  features: Feature[];
  ctaButton: string;
};

type ServiceData = { [lang: string]: ServiceContent; };

// Base de datos de contenido para los servicios
const serviceDatabase: { [slug: string]: ServiceData } = {
  painting: {
    es: {
      title: "Pintura",
      tagline: "Servicios profesionales de pintura interior y exterior.",
      includesTitle: "¿Qué incluye?",
      features: [
        { title: "Pintura interior residencial" },
        { title: "Pintura exterior de casas" },
        { title: "Pintura comercial" },
        { title: "Acabados especiales" },
        { title: "Preparación de superficies" },
        { title: "Garantía de calidad" },
      ],
      ctaButton: "Solicitar Cotización",
    },
    en: {
      title: "Painting",
      tagline: "Professional interior and exterior painting services.",
      includesTitle: "What's included?",
      features: [
        { title: "Residential interior painting" },
        { title: "Exterior house painting" },
        { title: "Commercial painting" },
        { title: "Special finishes" },
        { title: "Surface preparation" },
        { title: "Quality guarantee" },
      ],
      ctaButton: "Request a Quote",
    },
  },
  cleaning: {
    es: {
      title: "Limpieza",
      tagline: "Limpieza profunda, mantenimiento regular y post-construcción.",
      includesTitle: "¿Qué incluye?",
      features: [
        { title: "Limpieza profunda de hogares" },
        { title: "Limpieza post-construcción" },
        { title: "Mantenimiento regular" },
        { title: "Limpieza de oficinas" },
        { title: "Desinfección completa" },
        { title: "Productos ecológicos" },
      ],
      ctaButton: "Solicitar Cotización",
    },
    en: {
      title: "Cleaning",
      tagline: "Deep cleaning, regular maintenance, and post-construction cleanup.",
      includesTitle: "What's included?",
      features: [
        { title: "Deep home cleaning" },
        { title: "Post-construction cleanup" },
        { title: "Regular maintenance" },
        { title: "Office cleaning" },
        { title: "Complete disinfection" },
        { title: "Eco-friendly products" },
      ],
      ctaButton: "Request a Quote",
    },
  },
  // CORRECCIÓN IMPORTANTE: Cambiamos 'remodeling' a 'water-filters'
  // Esto soluciona que la página salga vacía si el link es /water-filters
  'water-filter-installation': {
    es: {
      title: "Instalaciones de filtros de agua",
      tagline: "Instalación residencial y comercial de filtros de agua.",
      includesTitle: "¿Qué incluye?",
      features: [
        { title: "Instalación de filtros de agua" },
        { title: "Filtros de agua para la cocina" },
        { title: "Mantenimiento de filtros" },
        { title: "Reparación de filtros" },
        { title: "Tratamientos de agua" },
        { title: "Financiamiento para la instalación" },
      ],
      ctaButton: "Solicitar Cotización",
    },
    en: {
      title: "Water Filter Installations",
      tagline: "Installation of residential and commercial water filters.",
      includesTitle: "What's included?",
      features: [
        { title: "Water Filter Installation" },
        { title: "Kitchen Water Filters" },
        { title: "Filter maintenance" },
        { title: "Filter Repair" },
        { title: "Water treatments" },
        { title: "Financing for installation" },
      ],
      ctaButton: "Request a Quote",
    },
  },
  'tv-installation': {
    es: {
      title: "Instalación de TV",
      tagline: "Montaje en pared seguro y profesional para todo tipo de televisores.",
      includesTitle: "¿Qué incluye?",
      features: [
        { title: "Montaje en diferentes tipos de pared" },
        { title: "Ocultamiento de cables" },
        { title: "Nivelación perfecta" },
        { title: "Soporte para todos los tamaños" },
        { title: "Instalación de soundbar" },
        { title: "Configuración básica" },
      ],
      ctaButton: "Solicitar Cotización",
    },
    en: {
      title: "TV Installation",
      tagline: "Secure and professional wall mounting for all types of televisions.",
      includesTitle: "What's included?",
      features: [
        { title: "Mounting on different wall types" },
        { title: "Cable concealment" },
        { title: "Perfect leveling" },
        { title: "Support for all sizes" },
        { title: "Soundbar installation" },
        { title: "Basic setup" },
      ],
      ctaButton: "Request a Quote",
    },
  },
  other: {
    es: {
      title: "Otros Servicios",
      tagline: "Reparaciones menores, ensamblaje de muebles y más.",
      includesTitle: "¿Qué incluye?",
      features: [
        { title: "Reparaciones generales del hogar" },
        { title: "Ensamblaje de muebles" },
        { title: "Instalación de estantes" },
        { title: "Reparación de puertas y ventanas" },
        { title: "Instalación de accesorios" },
        { title: "Mantenimiento preventivo" },
      ],
      ctaButton: "Solicitar Cotización",
    },
    en: {
      title: "Other Services",
      tagline: "Handyman repairs, furniture assembly, and more.",
      includesTitle: "What's included?",
      features: [
        { title: "General home repairs" },
        { title: "Furniture assembly" },
        { title: "Shelf installation" },
        { title: "Door and window repair" },
        { title: "Fixture installation" },
        { title: "Preventive maintenance" },
      ],
      ctaButton: "Request a Quote",
    },
  },
};

// Agrego una referencia extra por seguridad, por si el link viene como 'remodeling'
serviceDatabase['remodeling'] = serviceDatabase['water-filters'];


// --- Estilos de la Página de Servicio con Gradientes ---

const ServicePageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.textPrimary};
  min-height: 100vh;
  padding: 2rem 1rem;
`;

const ContentWrapper = styled.div`
  max-width: 650px;
  margin: 0 auto;
`;

const BackButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  padding: 0.5rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.palette.skyBlue};
    transform: translateX(-4px);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.palette.skyBlue},
    ${({ theme }) => theme.colors.palette.emeraldGreen}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const Tagline = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const IncludesCard = styled.div`
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.1) 0%,
    rgba(16, 185, 129, 0.1) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 
    0 8px 32px rgba(59, 130, 246, 0.15),
    0 0 0 1px rgba(59, 130, 246, 0.1) inset;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 12px 48px rgba(59, 130, 246, 0.25),
      0 0 0 1px rgba(59, 130, 246, 0.2) inset;
    border-color: rgba(59, 130, 246, 0.5);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.palette.skyBlue},
      ${({ theme }) => theme.colors.palette.emeraldGreen},
      ${({ theme }) => theme.colors.palette.skyBlue}
    );
    border-radius: 16px 16px 0 0;
  }
`;

const IncludesTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '✨';
    font-size: 1.25rem;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: 8px;
  background: rgba(59, 130, 246, 0.05);
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all 0.2s ease;

  &:hover {
    background: rgba(59, 130, 246, 0.1);
    transform: translateX(4px);
  }

  svg {
    color: ${({ theme }) => theme.colors.palette.emeraldGreen};
    margin-right: 0.75rem;
    min-width: 20px;
    filter: drop-shadow(0 0 4px rgba(16, 185, 129, 0.5));
  }
`;

const ButtonStyled = styled.button`
  position: relative;
  padding: 1rem 2rem;
  border-radius: 12px;
  border: none;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.palette.skyBlue} 0%,
    ${({ theme }) => theme.colors.palette.emeraldGreen} 100%
  );
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  overflow: hidden;
  box-shadow: 
    0 8px 24px rgba(59, 130, 246, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 12px 32px rgba(59, 130, 246, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.2) inset;
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

// --- El Componente de la Página ---

export default function ServicePage() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const params = useParams();
  const router = useRouter(); 

  // CORRECCIÓN: Captura robusta del slug (ya sea singular o plural)
  const rawSlug = params.servicesSlug || params.serviceSlug;
  const slug = typeof rawSlug === 'string' ? rawSlug : '';

  // Log para depuración: Mira la consola del navegador (F12) si falla
  useEffect(() => {
    console.log("Slug detectado:", slug);
    console.log("Servicio encontrado:", !!serviceDatabase[slug]);
  }, [slug]);

  const service = serviceDatabase[slug];

  // Función para manejar la cotización
  const handleQuoteRequest = () => {
    // CORRECCIÓN FINAL: Cambiado a '/contact' porque '/quote' no existe
    router.push('/quotes');
  };

  // Manejo de servicio no encontrado
  if (!service) {
    return (
      <ServicePageContainer>
        <ContentWrapper>
          <BackButton href="/services">
            <ArrowLeft size={20} />
            {language === 'es' ? 'Volver a servicios' : 'Back to services'}
          </BackButton>
          <ErrorContainer>
            <Title>404</Title>
            <Tagline>
              {language === 'es' 
                ? `Servicio no encontrado: "${slug}"` 
                : `Service not found: "${slug}"`}
            </Tagline>
            <p style={{marginBottom: '1rem', color: '#666'}}>
             (Verifica que el nombre en la URL coincida con la base de datos)
            </p>
            <ButtonStyled 
              as="a" 
              href="/services"
              style={{ maxWidth: '300px', margin: '2rem auto 0', display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}
            >
              {language === 'es' ? 'Volver a Servicios' : 'Back to Services'}
            </ButtonStyled>
          </ErrorContainer>
        </ContentWrapper>
      </ServicePageContainer>
    );
  }

  const content = service[language] || service['es'];

  return (
    <ServicePageContainer>
      <ContentWrapper>
        <BackButton href="/services">
          <ArrowLeft size={20} />
          {language === 'es' ? 'Volver a servicios' : 'Back to services'}
        </BackButton>

        <Title>{content.title}</Title>
        <Tagline>{content.tagline}</Tagline>

        <IncludesCard>
          <IncludesTitle>{content.includesTitle}</IncludesTitle>
          {content.features.map((feature, index) => (
            <FeatureItem key={`${feature.title}-${index}`}>
              <CheckCircle size={20} />
              <span>{feature.title}</span>
            </FeatureItem>
          ))}
        </IncludesCard>

        <ButtonStyled onClick={handleQuoteRequest}>
          {content.ctaButton}
        </ButtonStyled>
      </ContentWrapper>
    </ServicePageContainer>
  );
}