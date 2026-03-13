"use client"

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext'; // Asegúrate de que esta ruta sea correcta
import { ArrowRight } from 'lucide-react';

// --- TIPOS DE DATOS ---
interface GalleryItem {
  src: string;
  alt: string;
}

interface ServiceSectionData {
  id: string;
  translationKey: string;
  hasSubcategories?: boolean;
  subcategories?: {
    key: string;
    images: GalleryItem[];
  }[];
  images?: GalleryItem[];
}

// --- DATOS DE LA GALERÍA (Imágenes Actualizadas y Probadas) ---
const galleryData: ServiceSectionData[] = [
  {
    id: 'tv-install',
    translationKey: 'tv',
    hasSubcategories: true,
    subcategories: [
      {
        key: 'luxury',
        images: [
          // Mármol y piedra
          { src: 'assets/gallery/tv-install/img-luxury/IMG_0349.jpg', alt: 'Luxury Marble TV Wall' },
          { src: 'assets/gallery/tv-install/img-luxury/IMG_1320.jpg', alt: "Stone Feature Wall TV" },
          { src: 'assets/gallery/tv-install/img-luxury/IMG_2239.jpg', alt: "Elegant White TV Setup" },
          { src: 'assets/gallery/tv-install/img-luxury/IMG_2365.jpg', alt: "Premium Living Room" },
          { src: 'assets/gallery/tv-install/img-luxury/IMG_2366.jpg', alt: 'Luxury Marble TV Wall' },
          { src: 'assets/gallery/tv-install/img-luxury/IMG_2612.jpg', alt: 'Luxury Marble TV Wall' },
          { src: 'assets/gallery/tv-install/img-luxury/IMG_2376.jpg', alt: 'Luxury Marble TV Wall' },
        ]
      },
      {
        key: 'modern',
        images: [
          // Madera y listones
          { src: 'assets/gallery/tv-install/img-modern/IMG_1324.jpg', alt: "Modern Wood Slats TV" },
          { src: 'assets/gallery/tv-install/img-modern/IMG_1325.jpg', alt: "Minimalist Wood Panel" },
          { src: 'assets/gallery/tv-install/img-modern/IMG_1326.jpg', alt: "Contemporary TV Stand" },
          { src: 'assets/gallery/tv-install/img-modern/IMG_1335.jpg', alt: "Modern Apartment TV" },
          { src: 'assets/gallery/tv-install/img-modern/IMG_1339.jpg', alt: "Modern Apartment TV" },
          { src: 'assets/gallery/tv-install/img-modern/IMG_1938.jpg', alt: "Modern Apartment TV" },
        ]

      },
      {
        key: 'standard',
        images: [
          // Soportes y montajes limpios
          { src: 'assets/gallery/tv-install/img-standard/IMG_0302.jpg', alt: "Standard Wall Mount White" },
          { src:  'assets/gallery/tv-install/img-standard/IMG_0301.jpg', alt: "Standard Wall Mount Gray" },
          { src:  'assets/gallery/tv-install/img-standard/IMG_2240.jpg', alt: "Standard Wall Mount Black" },
          { src:  'assets/gallery/tv-install/img-standard/IMG_2374.jpg', alt: "Standard Square Mount and Panel " },
          { src:  'assets/gallery/tv-install/img-standard/IMG_2644.jpg', alt: "Standard Panel Hall Mirror" },
          { src:  'assets/gallery/tv-install/img-standard/IMG_2791.jpg', alt: "Standard Panel Kitchen Island " },
        ]
      }
    ]
  },
  {
    id: 'painting',
    translationKey: 'painting',
    images: [
      { src: 'assets/gallery/painting/IMG_1955.jpg' , alt: "Painting Wall Green" },
      { src: 'assets/gallery/painting/IMG_2645.jpg' , alt: "Painting Wall Roll" },
      { src: 'assets/gallery/painting/IMG_2646.jpg' , alt: "Painting Wall Brush" },
      { src: 'assets/gallery/painting/IMG_2648.jpg' , alt: "Painting Wall Spray" },
    ]
  },
  {
    id: 'cleaning',
    translationKey: 'cleaning',
    images: [
      { src:  'assets/gallery/cleaning/IMG_2650.jpg', alt: "Cleaning Tools" },
      { src:  'assets/gallery/cleaning/IMG_2649.jpg', alt: "Clean Living Room" },
      { src:  'assets/gallery/cleaning/IMG_2652.jpg', alt: "Disinfection Service" },
      { src:  'assets/gallery/cleaning/IMG_2651.jpg', alt: "Sparkling Kitchen" },
    ]
  },
  {
    id: 'general',
    translationKey: 'general',
    images: [
      { src: 'assets/gallery/general/IMG_2671.jpg', alt: "Tools and Repair" },
      { src: 'assets/gallery/general/IMG_2668.jpg', alt: "Handyman Work" },
      { src: 'assets/gallery/general/IMG_2672.jpg', alt: "Curtain Installation" },
      { src: 'assets/gallery/general/IMG_2673.jpg', alt: "Home Repairs" },
    ]
  }
];

// --- TRADUCCIONES ---
const galleryTranslations: any = {
  es: {
    "page.title": "Nuestra Galería",
    "page.subtitle": "Explora la calidad y dedicación que ponemos en cada proyecto.",
    "tv.title": "Instalación de TV y Entretenimiento",
    "tv.subtitle": "Transformamos tu sala en un cine en casa.",
    "tv.luxury": "Instalación de Lujo (Mármol/Piedra)",
    "tv.modern": "Diseño Moderno (Paneles de Madera)",
    "tv.standard": "Instalación Estándar y Soportes",
    "tv.cta": "¿Te imaginas tu sala así? Agenda tu instalación hoy.",
    "tv.btn": "Reservar Instalación TV",
    "painting.title": "Pintura Interior y Exterior",
    "painting.subtitle": "Colores que dan vida a tus espacios.",
    "painting.cta": "Renueva el ambiente de tu hogar con nuestros expertos.",
    "painting.btn": "Cotizar Pintura",
    "cleaning.title": "Limpieza Profesional",
    "cleaning.subtitle": "Brillo y desinfección garantizada.",
    "cleaning.cta": "Disfruta de un espacio impecable sin mover un dedo.",
    "cleaning.btn": "Agendar Limpieza",
    "general.title": "Servicios Generales",
    "general.subtitle": "Reparaciones e instalaciones varias.",
    "general.cta": "¿Necesitas ayuda con reparaciones en casa?",
    "general.btn": "Solicitar Servicio",
  },
  en: {
    "page.title": "Our Gallery",
    "page.subtitle": "Explore the quality and dedication we put into every project.",
    "tv.title": "TV & Entertainment Installation",
    "tv.subtitle": "Transform your living room into a home theater.",
    "tv.luxury": "Luxury Installation (Marble/Stone)",
    "tv.modern": "Modern Design (Wood Panels)",
    "tv.standard": "Standard Installation & Mounts",
    "tv.cta": "Can you imagine your living room like this? Book today.",
    "tv.btn": "Book TV Installation",
    "painting.title": "Interior & Exterior Painting",
    "painting.subtitle": "Colors that bring your spaces to life.",
    "painting.cta": "Renew your home's atmosphere with our experts.",
    "painting.btn": "Get Painting Quote",
    "cleaning.title": "Professional Cleaning",
    "cleaning.subtitle": "Guaranteed shine and disinfection.",
    "cleaning.cta": "Enjoy a spotless space without lifting a finger.",
    "cleaning.btn": "Schedule Cleaning",
    "general.title": "General Services",
    "general.subtitle": "Various repairs and installations.",
    "general.cta": "Need help with home repairs?",
    "general.btn": "Request Service",
  }
};

// --- ESTILOS ---
const GalleryContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.bg};
  min-height: 100vh;
  gap: 6rem;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.textPrimary}, ${({ theme }) => theme.colors.primary});
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const ServiceSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3rem;
    left: 10%;
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.borders.secondary}, transparent);
  }

  &:last-child::after {
    display: none;
  }
`;

const ServiceHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  padding-left: 1.5rem;
`;

const ServiceTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

const ServiceSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const SubCategoryContainer = styled.div`
  margin-top: 1rem;
`;

const SubCategoryTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const ImageCard = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

// --- CAMBIO CLAVE: Usamos 'img' estándar en lugar de 'Image' de Next.js ---
// Esto soluciona el error de "hostname not configured" inmediatamente.
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ImageCard}:hover & {
    transform: scale(1.1);
  }
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    padding: 2rem 3rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  max-width: 600px;
  margin: 0;
`;

const BookButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.palette.deepBlue});
  color: white;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.39);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.23);
    filter: brightness(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

// --- COMPONENTE PRINCIPAL ---
export default function GalleryPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const t = (key: string) => (galleryTranslations[language] as any)[key] || key;

  // CORRECCIÓN 1: Pasar el ID a la ruta
  // Antes el ID se recibía pero no se usaba. Ahora se pasa como query param.
  const handleBooking = (serviceId: string) => {
    // Usamos encodeURIComponent para seguridad, aunque los IDs actuales son seguros
    router.push(`/booking?service=${encodeURIComponent(serviceId)}`);
  };

  return (
    <GalleryContainer>
      <HeaderSection>
        <PageTitle>{t("page.title")}</PageTitle>
        <PageSubtitle>{t("page.subtitle")}</PageSubtitle>
      </HeaderSection>
      
      {galleryData.map((section) => (
        <ServiceSection key={section.id}>
          <ServiceHeader>
            <ServiceTitle>{t(`${section.translationKey}.title`)}</ServiceTitle>
            <ServiceSubtitle>{t(`${section.translationKey}.subtitle`)}</ServiceSubtitle>
          </ServiceHeader>

          {section.hasSubcategories && section.subcategories ? (
            <>
              {section.subcategories.map((sub) => (
                <SubCategoryContainer key={sub.key}>
                  <SubCategoryTitle>{t(`${section.translationKey}.${sub.key}`)}</SubCategoryTitle>
                  <ImageGrid>
                    {sub.images.map((img, idx) => (
                      <ImageCard key={idx}>
                        <StyledImage
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                        />
                      </ImageCard>
                    ))}
                  </ImageGrid>
                </SubCategoryContainer>
              ))}
            </>
          ) : (
            <ImageGrid>
              {section.images?.map((img, idx) => (
                <ImageCard key={idx}>
                  <StyledImage
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                  />
                </ImageCard>
              ))}
            </ImageGrid>
          )}

          <CTAContainer>
            <CTAText>{t(`${section.translationKey}.cta`)}</CTAText>
            {/* CORRECCIÓN 2: Añadido type="button" */}
            <BookButton 
              type="button" 
              onClick={() => handleBooking(section.id)}
            >
              {t(`${section.translationKey}.btn`)}
              <ArrowRight />
            </BookButton>
          </CTAContainer>

        </ServiceSection>
      ))}
    </GalleryContainer>
  );
}

