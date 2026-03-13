
'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Paintbrush, Hammer, Sparkles, Tv, Layers, Star, Home } from 'lucide-react';

// IMPORTANTE: Verifica que esta ruta apunta correctamente a tu contexto
import { useLanguage } from '@/contexts/LanguageContext'; 
import { aboutTranslations } from '@/app/about/translations';

// --- ANIMACIONES ---

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = (color: string) => keyframes`
  0% { box-shadow: 0 0 0 0 ${color}33; }
  70% { box-shadow: 0 0 0 10px ${color}00; }
  100% { box-shadow: 0 0 0 0 ${color}00; }
`;

// --- STYLED COMPONENTS ---

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  min-height: 100vh;
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  overflow-x: hidden;
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 800px;
  animation: ${fadeInUp} 0.8s ease-out;

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.palette.skyBlue} 0%,
      ${({ theme }) => theme.colors.palette.emeraldGreen} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
`;

const InfoCard = styled.div<{ $glowType: 'blue' | 'green' | 'orange' }>`
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary};
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  opacity: 0;

  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.4s; }
  &:nth-child(3) { animation-delay: 0.6s; }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: ${({ theme, $glowType }) => 
      $glowType === 'blue' ? theme.colors.primary : 
      $glowType === 'green' ? theme.colors.secondary : 
      theme.colors.palette.warmOrange};
    
    box-shadow: ${({ theme, $glowType }) => theme.colors.glowShadows[$glowType]};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${({ theme, $glowType }) => 
      $glowType === 'blue' ? theme.colors.primary : 
      $glowType === 'green' ? theme.colors.secondary : 
      theme.colors.palette.warmOrange};
  }
`;

const IconWrapper = styled.div<{ $color: string }>`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${({ $color }) => `${$color}15`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: ${({ $color }) => $color};
  animation: ${float} 4s ease-in-out infinite;
  
  ${InfoCard}:hover & {
    animation: ${props => css`${pulseGlow(props.$color)} 1.5s infinite`};
  }
`;

const CardTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  font-size: 1rem;
`;

const ServicesTagContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  max-width: 800px;
`;

const ServiceTag = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 50px;
  background-color: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255,255,255,0.1);
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  margin-top: 2rem;
  gap: 2rem;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  h3 {
    font-size: 2.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.palette.sunYellow};
    margin-bottom: 0.5rem;
  }
  
  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
  }
`;

export default function AboutPage() {
  const { language } = useLanguage(); 
  const t = aboutTranslations[language as keyof typeof aboutTranslations] || aboutTranslations.es;

  return (
    <PageContainer>
      <HeaderSection>
        <h1>{t.header.title}</h1>
        <p>{t.header.description}</p>
      </HeaderSection>

      <GridContainer>
        {/* Tarjeta: Quiénes Somos */}
        <InfoCard $glowType="blue">
          <IconWrapper $color="#3b82f6">
            <Hammer size={32} strokeWidth={2.5} />
          </IconWrapper>
          <CardTitle>{t.cards.whoWeAre.title}</CardTitle>
          <CardText>{t.cards.whoWeAre.text}</CardText>
        </InfoCard>

        {/* Tarjeta: Misión */}
        <InfoCard $glowType="green">
          <IconWrapper $color="#10b981">
            <Paintbrush size={32} strokeWidth={2.5} />
          </IconWrapper>
          <CardTitle>{t.cards.mission.title}</CardTitle>
          <CardText>{t.cards.mission.text}</CardText>
        </InfoCard>

        {/* Tarjeta: Visión */}
        <InfoCard $glowType="orange">
          <IconWrapper $color="#f97316">
            <Sparkles size={32} strokeWidth={2.5} />
          </IconWrapper>
          <CardTitle>{t.cards.vision.title}</CardTitle>
          <CardText>{t.cards.vision.text}</CardText>
        </InfoCard>
      </GridContainer>

      <ServicesTagContainer>
        <ServiceTag><Tv size={18} /> {t.tags.tv}</ServiceTag>
        <ServiceTag><Layers size={18} /> {t.tags.backsplash}</ServiceTag>
        <ServiceTag><Home size={18} /> {t.tags.residential}</ServiceTag>
        <ServiceTag><Sparkles size={18} /> {t.tags.commercial}</ServiceTag>
      </ServicesTagContainer>

      <StatsSection>
        <StatItem>
          <Star size={40} color="#fbbf24" style={{marginBottom: 10}} />
          <h3>100%</h3>
          <span>{t.stats.satisfaction}</span>
        </StatItem>
        <StatItem>
          <Tv size={40} color="#3b82f6" style={{marginBottom: 10}} />
          <h3>+50</h3>
          <span>{t.stats.projects}</span>
        </StatItem>
        <StatItem>
          <Sparkles size={40} color="#10b981" style={{marginBottom: 10}} />
          <h3>Impecable</h3>
          <span>{t.stats.cleaning}</span>
        </StatItem>
      </StatsSection>
    </PageContainer>
  );
}