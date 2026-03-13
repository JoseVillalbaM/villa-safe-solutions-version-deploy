'use client';

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { 
  RotateCw, X, ArrowLeft, CheckCircle, Share2, Download, 
  CalendarCheck 
} from 'lucide-react'; 
import Link from 'next/link';

// Importa tus traducciones y contexto
import { cardTranslations, ServiceId } from './card-translations';
import { useLanguage } from '../../contexts/LanguageContext';
// AJUSTA ESTA RUTA A TU ARCHIVO REAL:
 

// --- ANIMACIONES ---

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

// Animación de fondo suave usando colores del tema
const gradientBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const slideUp = keyframes`
  from { transform: translateY(100px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const zoomIn = keyframes`
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

// --- ESTILOS RESPONSIVOS AL TEMA ---

const PageContainer = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Usamos los colores del tema para el fondo */
  background: linear-gradient(-45deg, 
    ${({ theme }) => theme.colors.bg}, 
    ${({ theme }) => theme.colors.secondaryBg}, 
    ${({ theme }) => theme.colors.palette.deepBlue}
  );
  background-size: 400% 400%;
  animation: ${gradientBg} 15s ease infinite;
  padding: 1rem;
  padding-bottom: 5rem;
  position: relative;
  overflow: hidden;
  transition: background 0.5s ease; /* Transición suave al cambiar tema */
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  opacity: 0.8;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors.secondaryBg}80; /* 80 hex alpha = 50% opacity */
  backdrop-filter: blur(5px);
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  transition: all 0.3s;
  z-index: 50;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateX(-3px);
    opacity: 1;
  }
`;

const CardContainer3D = styled.div`
  perspective: 2000px;
  width: 100%;
  max-width: 600px; 
  height: 380px; 
  z-index: 10;
  animation: ${zoomIn} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

const CardWrapper = styled.div<{ $isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  transform: ${({ $isFlipped }) => ($isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 1.5rem;
  display: flex;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); /* Sombra genérica */
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  overflow: hidden;
  /* Fondo dinámico basado en el tema */
  background-color: ${({ theme }) => theme.colors.secondaryBg};
`;

const CardFront = styled(CardFace)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  /* Gradiente sutil sobre el color de fondo del tema */
  background-image: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.05) 100%);
  backdrop-filter: blur(20px);
  transform: rotateY(0deg);
  z-index: 2;
  
  /* Textura de ruido sutil */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    pointer-events: none;
  }
`;

const CardBack = styled(CardFace)`
  transform: rotateY(180deg);
  flex-direction: column;
  padding: 1rem 1.5rem;
  /* AQUÍ ESTABA EL ERROR: Eliminado el fondo blanco forzado */
  /* Ahora usa el fondo del tema con un borde primario */
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  //border: 4px solid ${({ theme }) => theme.colors.primary};
`;

const FlipActionBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  /* Fondo dinámico para el botón */
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.15) rotate(180deg);
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ServiceColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  z-index: 10;
`;

const ServiceButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.7rem 0.5rem;
  /* Fondo semi-transparente que se adapta al tema */
  background: ${({ theme }) => theme.colors.secondaryBg}80; /* Alpha hex para transparencia */
  backdrop-filter: blur(10px);
  border-radius: 0.8rem;
  /* Color de texto dinámico */
  color: ${({ theme }) => theme.colors.textSecondary};
  //color: black;
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 15px ${({ theme }) => theme.colors.glowShadows.blue || 'rgba(59, 130, 246, 0.3)'};
    color: white; /* Al hacer hover siempre blanco por el fondo azul */
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1.2;
  text-align: center;
  z-index: 10;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  margin-bottom: 0.8rem;
  background-color: white; /* Logo siempre fondo blanco para contraste */
  padding: 2px;
`;

const CompanyName = styled.h2`

  background: linear-gradient(to right, ${({ theme }) => theme.colors.palette.sunYellow}, ${({ theme }) => theme.colors.palette.warmOrange});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
`;

const BackHeader = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 0.5rem;
  z-index: 10;
`;

const TitleBack = styled.h3`
  background: linear-gradient(to right,${({ theme }) => theme.colors.palette.sunYellow},${({theme}) => theme.colors.palette.skyBlue});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  //color: ${({ theme }) => theme.colors.textPrimary}; /* Título dinámico */
  font-size: 1.5rem;
  font-weight: 900;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const BackBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 28%;
`;

const SocialButton = styled.a`
  display: block;
  text-align: center;
  padding: 0.6rem 0.2rem;
  /* Fondo dinámico */
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 0.8rem;
  /* Texto dinámico */
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 700;
  font-size: 0.75rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  text-decoration: none;
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: scale(1.08);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 5px 15px rgba(59, 130, 246, 0.25);
  }
`;

// Contenedor del personaje sin fondo
const CharacterContainer = styled.div`
  width: 44%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 10px;
  position: relative;
  z-index: 20; /* Asegura que esté por encima */
`;

const CharacterImg = styled.img`
  width: 100%;
  max-width: 160px;
  height: auto;
  object-fit: contain;
  /* Sombra para efecto flotante, sin caja blanca */
  filter: drop-shadow(0 15px 15px rgba(0,0,0,0.4));
  animation: ${float} 5s ease-in-out infinite;
`;

const ServiceModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8); /* Fondo oscuro siempre para modal */
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalCard = styled.div`
  /* Fondo sólido del modal usando tema */
  background: ${({ theme }) => theme.colors.secondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.borders.primary};
  width: 100%;
  max-width: 450px;
  border-radius: 2rem;
  padding: 2rem;
  position: relative;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  animation: ${zoomIn} 0.3s ease-out;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  padding-bottom: 1rem;
`;

const ServiceIconBox = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.palette.sunYellow};
  margin: 0;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
`;

const QuoteButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.secondary}; 
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  border-radius: 1rem;
  margin-top: 1.5rem;
  transition: all 0.2s;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(16, 185, 129, 0.5);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: rotate(90deg);
  }
`;

const ActionsBar = styled.div`
  position: fixed;
  bottom: 1.5rem;
  left: 25%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.secondaryBg};
  padding: 0.5rem;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  display: flex;
  gap: 0.5rem;
  z-index: 100;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  animation: ${slideUp} 0.5s ease-out 0.5s both;
`;

const ActionButton = styled.button<{ $primary?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 1.5rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
  white-space: nowrap;

  ${props => props.$primary ? css`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    &:hover { background: ${({ theme }) => theme.colors.palette.deepBlue}; }
  ` : css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    &:hover { background: ${({ theme }) => theme.colors.bg}; }
  `}

  &:active { transform: scale(0.95); }
`;

// --- COMPONENTE PRINCIPAL ---

export default function DigitalCardPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceId | null>(null);

  const { language } = useLanguage(); 
  
  const t = cardTranslations[language as 'en' | 'es'] || cardTranslations.en;

  const leftServices: ServiceId[] = ['cleaning', 'painting', 'epoxy'];
  const rightServices: ServiceId[] = ['tv', 'backsplash', 'washing'];
  
  const socialLeft = [
    { name: 'Facebook', url: ' https://www.facebook.com/share/1Aa4Yiq373/?mibextid=wwXIfr' },
    { name: 'WhatsApp', url: 'https://wa.me/17867346928?text=Hola,%20me%20interesa%20más%20información'},
    { name: 'Instagram', url: ' https://www.instagram.com/villasafesolutions?igsh=aTlvbXl4aWhjeXow&utm_source=qr' },
  ];
  
  const socialRight = [
    { name: 'Tik Tok', url: 'https://www.tiktok.com/@villasafesolution?_r=1&_t=ZT-925CCsSNagp ' },
    { name: 'Pinterest', url: ' https://pin.it/2vj0F0now' },
    { name: 'OfferUp', url: 'https://offerup.co/profile/villasafesolutions' }
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t.ui.shareTitle,
          text: t.ui.shareText,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(t.ui.copyAlert);
    }
  };

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Villa Safe Solutions
ORG:Villa Safe Solutions
TEL;TYPE=WORK,VOICE:+17867346928
EMAIL:villasafesolutions2023@gmail.com
URL:${window.location.href}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'VillaSafeSolutions.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const currentServiceData = selectedService ? t.services[selectedService] : null;

  return (
    <PageContainer>
      <BackButton href="/">
        <ArrowLeft size={18} /> {t.ui.back}
      </BackButton>

      <CardContainer3D>
        <CardWrapper $isFlipped={isFlipped}>
          
          {/* FRENTE */}
          <CardFront>
            <FlipActionBtn onClick={() => setIsFlipped(true)}>
              <RotateCw size={22} />
            </FlipActionBtn>

            <ServiceColumn>
              {leftServices.map((id) => (
                <ServiceButton key={id} onClick={() => setSelectedService(id)}>
                  {t.services[id].title}
                </ServiceButton>
              ))}
            </ServiceColumn>

            <LogoSection>
              <LogoImage src="/assets/ai-images/logoName.jpeg" alt="Logo" />
              <CompanyName>Villa Safe Solutions</CompanyName>
            </LogoSection>

            <ServiceColumn>
              {rightServices.map((id) => (
                <ServiceButton key={id} onClick={() => setSelectedService(id)}>
                  {t.services[id].title}
                </ServiceButton>
              ))}
            </ServiceColumn>
          </CardFront>

          {/* REVERSO */}
          <CardBack>
            <FlipActionBtn onClick={() => setIsFlipped(false)}>
                <RotateCw size={22} />
            </FlipActionBtn>
            
            <BackHeader>
              <TitleBack>{t.ui.contactUs}</TitleBack>
            </BackHeader>

            <BackBody>
              <SocialColumn>
                {socialLeft.map((s, i) => (
                  <SocialButton key={i} href={s.url} target="_blank">
                    {s.name}
                  </SocialButton>
                ))}
              </SocialColumn>

              <CharacterContainer>
                {/* Asegúrate que esta imagen sea PNG transparente */}
                <CharacterImg 
                  src="/assets/ai-images/joseCharacter.png" 
                  alt="Constructor" 
                />
              </CharacterContainer>

              <SocialColumn>
                {socialRight.map((s, i) => (
                  <SocialButton key={i} href={s.url} target="_blank">
                    {s.name}
                  </SocialButton>
                ))}
              </SocialColumn>
            </BackBody>
          </CardBack>

        </CardWrapper>
      </CardContainer3D>

      <ActionsBar>
        <ActionButton onClick={handleShare}>
          <Share2 size={18} /> {t.ui.share}
        </ActionButton>
        <ActionButton $primary onClick={handleDownloadVCard}>
          <Download size={18} /> {t.ui.saveContact}
        </ActionButton>
      </ActionsBar>

      {selectedService && currentServiceData && (
        <ServiceModalOverlay onClick={() => setSelectedService(null)}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedService(null)}>
              <X size={20} />
            </CloseButton>
            
            <ModalHeader>
              <ServiceIconBox>
                {currentServiceData.icon}
              </ServiceIconBox>
              <div>
                <ModalTitle>{currentServiceData.title}</ModalTitle>
                <div style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '4px' }}>
                  {t.ui.professionalService}
                </div>
              </div>
            </ModalHeader>

            <p style={{ lineHeight: '1.6', opacity: 0.9 }}>
              {currentServiceData.description}
            </p>
            
            <FeatureList>
              {currentServiceData.features.map((feature, idx) => (
                <FeatureItem key={idx}>
                  <CheckCircle size={18} color="#10b981" style={{ minWidth: '18px' }} />
                  {feature}
                </FeatureItem>
              ))}
            </FeatureList>

            <QuoteButton href="/booking">
              <CalendarCheck size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} />
              {t.ui.quoteButton}
            </QuoteButton>

          </ModalCard>
        </ServiceModalOverlay>
      )}

    </PageContainer>
  );
}


