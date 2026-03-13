import styled, { keyframes } from 'styled-components';

// Animación float para el logo
const float = keyframes`0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); }`;

export const FooterContainer = styled.footer`background-color: ${(props) => props.theme.colors.secondaryBg}; border-top: 1px solid ${(props) => props.theme.colors.borders.secondary};`;

export const FooterContent = styled.div`max-width: 1200px; margin: 0 auto; padding: 3rem 1rem;`;

export const FooterGrid = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 2rem;

@media (min-width: 768px) {
grid-template-columns: repeat(3, 1fr);
}
`;

export const FooterSection = styled.div`display: flex; flex-direction: column; gap: 1rem;`;

export const SectionTitle = styled.h3`font-size: 1.125rem; font-weight: bold; color: ${(props) => props.theme.colors.textPrimary};`;

export const ContactList = styled.div`display: flex; flex-direction: column; gap: 0.75rem;`;

export const ContactItem = styled.div`
display: flex;
align-items: center;
gap: 0.75rem;
color: ${(props) => props.theme.colors.textSecondary};
transition: color 0.3s ease;

&:hover {
color: ${(props) => props.theme.colors.primary};
}

svg {
flex-shrink: 0;
}
`;

export const ContactLink = styled.a`
color: inherit;
text-decoration: none;

&:hover {
text-decoration: underline;
}
`;

export const ContactText = styled.span`color: inherit;`;

export const SocialGrid = styled.div`display: flex; gap: 1rem; flex-wrap: wrap;`;

// --- AQUÍ ESTÁ EL CAMBIO LUMINOSO ---
export const SocialLink = styled.a`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  
  /* Gradiente vibrante usando tu paleta */
  background: linear-gradient(
    135deg, 
    ${(props) => props.theme.colors.palette.deepBlue}, 
    ${(props) => props.theme.colors.palette.skyBlue}
  );
  
  /* Sombra luminosa (Glow effect) */
  box-shadow: ${(props) => props.theme.colors.glowShadows.blue};
  
  /* Icono en blanco para que resalte sobre el fondo oscuro */
  color: white; 
  
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  /* Borde sutil para darle acabado de cristal */
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: scale(1.15) translateY(-2px);
    
    /* Al hacer hover, cambiamos a tonos verdes/esmeralda */
    background: linear-gradient(
      135deg, 
      ${(props) => props.theme.colors.palette.skyBlue}, 
      ${(props) => props.theme.colors.palette.emeraldGreen}
    );
    
    /* El brillo también cambia a verde */
    box-shadow: ${(props) => props.theme.colors.glowShadows.green};
    color: white;
  }

  svg {
    flex-shrink: 0;
  }
`;

export const BrandSection = styled.div`display: flex; flex-direction: column; gap: 1rem;`;

export const BrandSubtitle = styled.p`font-size: 0.875rem; color: ${(props) => props.theme.colors.textSecondary};`;

// LogoContainer original sin cambios
export const LogoContainer = styled.div`height: 3rem; width: 3rem; border-radius: 0.5rem; background: linear-gradient( to bottom right, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secondary} ); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.25rem; animation: ${float} 3s ease-in-out infinite;`;

export const Copyright = styled.div`border-top: 1px solid ${(props) => props.theme.colors.borders.secondary}; margin-top: 2rem; padding-top: 2rem; text-align: center;`;

export const CopyrightText = styled.p`font-size: 0.875rem; color: ${(props) => props.theme.colors.textSecondary};`;


