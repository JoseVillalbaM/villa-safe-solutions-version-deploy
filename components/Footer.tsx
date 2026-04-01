'use client'

import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link'; // ← IMPORTAR Link de Next.js
import { useLanguage } from '@/contexts/LanguageContext';
import {
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterSection,
  SectionTitle,
  ContactList,
  ContactItem,
  ContactLink,
  ContactText,
  SocialGrid,
  SocialLink,
  BrandSection,
  BrandSubtitle,
  LogoContainer,
  Copyright,
  CopyrightText,
} from '@/components/ui/Footer.styles';

// --- Iconos Personalizados ---

const WhatsAppIcon = ({ size = 24, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const PinterestIcon = ({ size = 24, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.852-2.433-4.587 0-3.725 2.705-7.149 7.817-7.149 4.104 0 7.296 2.953 7.296 6.912 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z"/>
  </svg>
);

const TikTokIcon = ({ size = 24, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.92 6.48-1.8 1.63-4.32 2.19-6.73 1.75-2.67-.48-5.05-2.47-5.96-5.05-.62-1.74-.46-3.74.45-5.35 1.4-2.47 4.1-3.96 6.94-3.83v4.21c-1.47-.11-2.91.8-3.52 2.15-.43.94-.38 2.05.15 2.95.73 1.25 2.22 1.96 3.65 1.76 1.42-.2 2.55-1.33 2.74-2.76.04-.32.03-.64.03-.97V.02z"/>
  </svg>
);

const OfferUpIcon = ({ size = 24, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.5 23.5l-9-9c-.7-.7-.7-1.8 0-2.5l9-9c.3-.3.8-.5 1.3-.5h7.5c1.1 0 2 .9 2 2v7.5c0 .5-.2 1-.5 1.3l-9 9c-.7.7-1.8.7-2.5 0zM17.5 7c-.8 0-1.5.7-1.5 1.5S16.7 10 17.5 10s1.5-.7 1.5-1.5S18.3 7 17.5 7z" />
  </svg>
);

// --- Componente Principal ---

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/18MScXxRv8/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/villasafesolutions?igsh=aTlvbXl4aWhjeXow&utm_source=qr', label: 'Instagram' },
    { icon: WhatsAppIcon, href: 'https://wa.me/17867346928', label: 'WhatsApp' },
    { icon: PinterestIcon, href: 'https://www.pinterest.com/villaSafeSolutions/', label: 'Pinterest' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@villasafesolution?_r=1&_t=ZT-94RTXdz7g3p', label: 'TikTok' },
    { icon: OfferUpIcon, href: 'https://offerup.co/profile/villasafesolutions', label: 'OfferUp' },
  ];

  // ← NUEVO: Array de políticas manteniendo la misma lógica de mapeo
  const policyLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/refund-policy', label: 'Refund Policy' },
  ];

  // ... (resto del código igual hasta el return)

return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          {/* Sección 1: Contacto */}
          <FooterSection>
            <SectionTitle>{t('footer.contact')}</SectionTitle>
            <ContactList>
              <ContactItem>
                <Phone size={20} />
                <ContactLink href='tel:+17867346928'>+1 (786) 734-6928</ContactLink>
              </ContactItem>
              <ContactItem>
                <Mail size={20} />
                <ContactLink href='mailto:villasafesolutions2023@gmail.com'>villasafesolutions2023@gmail.com</ContactLink>
              </ContactItem>
              <ContactItem>
                <MapPin size={20} />
                <ContactText>1993 Carnostie Road 33884 fl Winter Haven</ContactText>
              </ContactItem>
            </ContactList>
          </FooterSection>

          {/* Sección 2: Redes Sociales */}
          <FooterSection>
            <SectionTitle>{t('footer.followUs')}</SectionTitle>
            <SocialGrid>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <SocialLink
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </SocialLink>
                );
              })}
            </SocialGrid>
          </FooterSection>

          {/* Sección 3: Marca */}
          <BrandSection>
            <SectionTitle>Villa Safe Solutions</SectionTitle>
            <BrandSubtitle>{t('footer.tagline')}</BrandSubtitle>
            <div style={{ paddingTop: '0.5rem' }}>
              <LogoContainer>VS</LogoContainer>
            </div>
          </BrandSection>
        </FooterGrid>

        {/* Sección de Políticas integrada en el footer */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          marginTop: '2rem',
          marginBottom: '1rem',
          flexWrap: 'wrap'
        }}>
          <Link 
            href="/privacy"
            style={{
              color: 'grey',
              textDecoration: 'none',
              fontSize: '0.875rem',
              opacity: 0.8,
              transition: 'opacity 0.2s',
              
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
          >
            {t('footer.privacyPolicy')}
          </Link>
          <Link 
            href="/terms"
            style={{
              color: 'grey',
              textDecoration: 'none',
              fontSize: '0.875rem',
              opacity: 0.8,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
          >
            {t('footer.termsOfService')}
          </Link>
          <Link 
            href="/refund-policy"
            style={{
              color: 'grey',
              textDecoration: 'none',
              fontSize: '0.875rem',
              opacity: 0.8,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
          >
            {t('footer.refundPolicy')}
          </Link>
        </div>

        <Copyright>
          <CopyrightText>
            © {new Date().getFullYear()} Villa Safe Solutions - {t('footer.copyright')}
          </CopyrightText>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}