'use client'

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { useLanguage } from '@/contexts/LanguageContext';
import { privacyTranslations, PrivacyTranslationKey } from './language';

// ─── Layout con tema global ────────────────────────────────────────────────
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.textPrimary};
  transition: all 0.3s ease;
`;

const Header = styled.header`
  background: ${(props) => props.theme.colors.secondaryBg};
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.borders.secondary};
`;

const Logo = styled(Link)`
  font-family: 'Georgia', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const BackLink = styled(Link)`
  font-family: 'Arial', sans-serif;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.textSecondary};
  text-decoration: none;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.2s;
  
  &:hover { 
    color: ${(props) => props.theme.colors.primary}; 
  }
`;

const HeroBand = styled.div`
  background: linear-gradient(135deg, 
    ${(props) => props.theme.colors.palette.deepBlue} 0%, 
    ${(props) => props.theme.colors.palette.skyBlue} 100%
  );
  padding: 3.5rem 2rem 3rem;
  text-align: center;
  border-bottom: 3px solid ${(props) => props.theme.colors.secondary};
`;

const PageTitle = styled.h1`
  font-family: 'Georgia', serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${(props) => props.theme.colors.textPrimary};
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;
`;

const PageSubtitle = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.textSecondary};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const GoldDivider = styled.div`
  width: 48px;
  height: 2px;
  background: ${(props) => props.theme.colors.secondary};
  margin: 1rem auto 0;
`;

const ContentWrapper = styled.main`
  flex: 1;
  max-width: 820px;
  width: 100%;
  margin: 0 auto;
  padding: 3.5rem 2rem 5rem;
`;

const Section = styled.section`
  margin-bottom: 2.8rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Georgia', serif;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  letter-spacing: 0.02em;
`;

const Paragraph = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 0.95rem;
  line-height: 1.85;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const BulletList = styled.ul`
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  
  li {
    font-family: 'Arial', sans-serif;
    font-size: 0.95rem;
    line-height: 1.85;
    color: ${(props) => props.theme.colors.textSecondary};
    margin-bottom: 0.4rem;
  }
`;

const ContactCard = styled.div`
  background: ${(props) => props.theme.colors.secondaryBg};
  border-left: 4px solid ${(props) => props.theme.colors.primary};
  padding: 1.5rem 2rem;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: ${(props) => props.theme.colors.glowShadows.blue};
  
  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover { 
      color: ${(props) => props.theme.colors.secondary};
      text-decoration: underline; 
    }
  }
  
  p {
    font-family: 'Arial', sans-serif;
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.textSecondary};
    line-height: 1.9;
    margin: 0;
  }
`;

// Componente Strong estilizado para evitar el error de tipo
const HighlightText = styled.strong`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
`;

const Footer = styled.footer`
  background: ${(props) => props.theme.colors.secondaryBg};
  text-align: center;
  padding: 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.borders.secondary};
  
  p {
    font-family: 'Arial', sans-serif;
    font-size: 0.78rem;
    color: ${(props) => props.theme.colors.textSecondary};
    letter-spacing: 0.05em;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;
  
  a {
    font-family: 'Arial', sans-serif;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.textSecondary};
    text-decoration: none;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: color 0.2s;
    
    &:hover { 
      color: ${(props) => props.theme.colors.primary}; 
    }
  }
`;

// ─── Page ──────────────────────────────────────────────────────────────────
const PrivacyPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const t = (key: PrivacyTranslationKey): string => {
    return privacyTranslations[language][key] || key;
  };

  const EFFECTIVE_DATE = 'March 24, 2026';
  const COMPANY = 'Villa Safe Solutions';
  const EMAIL = 'villasafesolutions2023@gmail.com';
  const PHONE = '+1 (786) 734-6928';
  const ADDRESS = '1993 Carnostie Road, Winter Haven, FL 33884';

  // Evita la hidratación hasta que el componente esté montado
  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{t('pageTitle')} | Villa Safe Solutions</title>
        <meta name="description" content={t('section1.intro')} />
      </Head>

      <PageWrapper>
        <Header>
          <Logo href="/">Villa Safe Solutions</Logo>
          <BackLink href="/">{t('backToHome')}</BackLink>
        </Header>

        <HeroBand>
          <PageTitle>{t('pageTitle')}</PageTitle>
          <GoldDivider />
          <PageSubtitle style={{ marginTop: '1rem' }}>
            {t('effectiveDate')}
          </PageSubtitle>
        </HeroBand>

        <ContentWrapper>
          <Section>
            <Paragraph>
              {t('section1.intro')}
            </Paragraph>
            <Paragraph>
              {language === 'es' 
                ? 'Por favor, lea esta política detenidamente. Al utilizar nuestro sitio web o servicios, acepta los términos descritos a continuación.'
                : 'Please read this policy carefully. By using our website or services, you agree to the terms described below.'}
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>{t('section1.title')}</SectionTitle>
            <Paragraph>{t('section1.infoIntro')}</Paragraph>
            <BulletList>
              <li>{t('section1.info1')}</li>
              <li>{t('section1.info2')}</li>
              <li>{t('section1.info3')}</li>
              <li>{t('section1.info4')}</li>
              <li>{t('section1.info5')}</li>
            </BulletList>
          </Section>

          <Section>
            <SectionTitle>{t('section2.title')}</SectionTitle>
            <Paragraph>{t('section2.intro')}</Paragraph>
            <BulletList>
              <li>{t('section2.use1')}</li>
              <li>{t('section2.use2')}</li>
              <li>{t('section2.use3')}</li>
              <li>{t('section2.use4')}</li>
              <li>{t('section2.use5')}</li>
              <li>{t('section2.use6')}</li>
              <li>{t('section2.use7')}</li>
            </BulletList>
          </Section>

          <Section>
            <SectionTitle>{t('section3.title')}</SectionTitle>
            <Paragraph>{t('section3.intro')}</Paragraph>
            <BulletList>
              <li dangerouslySetInnerHTML={{ __html: t('section3.share1') }} />
              <li>{t('section3.share2')}</li>
              <li>{t('section3.share3')}</li>
              <li>{t('section3.share4')}</li>
            </BulletList>
          </Section>

          <Section>
            <SectionTitle>{t('section4.title')}</SectionTitle>
            <Paragraph>{t('section4.text')}</Paragraph>
          </Section>

          <Section>
            <SectionTitle>{t('section5.title')}</SectionTitle>
            <Paragraph>{t('section5.text')}</Paragraph>
          </Section>

          <Section>
            <SectionTitle>{t('section6.title')}</SectionTitle>
            <Paragraph>{t('section6.text')}</Paragraph>
          </Section>

          <Section>
            <SectionTitle>{t('section7.title')}</SectionTitle>
            <Paragraph>{t('section7.intro')}</Paragraph>
            <BulletList>
              <li>{t('section7.right1')}</li>
              <li>{t('section7.right2')}</li>
              <li>{t('section7.right3')}</li>
              <li>{t('section7.right4')}</li>
              <li>{t('section7.right5')}</li>
            </BulletList>
          </Section>

          <Section>
            <SectionTitle>{t('section8.title')}</SectionTitle>
            <Paragraph>{t('section8.text')}</Paragraph>
          </Section>

          <Section>
            <SectionTitle>{t('section9.title')}</SectionTitle>
            <Paragraph>{t('section9.text')}</Paragraph>
          </Section>

          <Section>
            <SectionTitle>{t('section10.title')}</SectionTitle>
            <Paragraph>{t('section10.text')}</Paragraph>
            <ContactCard>
              <p>
                <HighlightText>
                  {t('contactCard.company')}
                </HighlightText>
                <br />
                {ADDRESS}<br />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
                <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
              </p>
            </ContactCard>
          </Section>
        </ContentWrapper>

        <Footer>
          <p>© {new Date().getFullYear()} {COMPANY}. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <FooterLinks>
            <Link href="/privacy">{t('footerLinks.privacy')}</Link>
            <Link href="/terms">{t('footerLinks.terms')}</Link>
            <Link href="/refund-policy">{t('footerLinks.refund')}</Link>
            <Link href="/contact">{t('footerLinks.contact')}</Link>
          </FooterLinks>
        </Footer>
      </PageWrapper>
    </>
  );
};

export default PrivacyPage;