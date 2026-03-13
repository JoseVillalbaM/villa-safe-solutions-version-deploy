'use client';
import styled from 'styled-components';

// Define los colores (puedes conectarlos a tu Tema de Context)
const colors = {
  border: '#E5E7EB', // gray-200
  bg: '#FFFFFF', // white
  text: '#111827', // gray-900
};

// El componente principal que ya tenías
export const CardStyled = styled.div`
  background-color: ${colors.bg};
  color: ${colors.text};
  border-radius: 0.75rem; // rounded-lg
  border: 1px solid ${colors.border};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  
  /* Aquí puedes añadir estilos para .dark si tu ThemeProvider lo soporta */
  /* .dark & { ... } */
`;

// --- Componentes Adicionales (Nuevos) ---

export const CardHeaderStyled = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${colors.border};
`;

export const CardTitleStyled = styled.h3`
  font-size: 1.25rem; // text-xl
  font-weight: 600;
  line-height: 1.75rem;
  margin: 0; // Quitar margen por defecto de h3
`;

export const CardContentStyled = styled.div`
  padding: 1.5rem;
`;

export const CardFooterStyled = styled.div`
  padding: 1.5rem;
  border-top: 1px solid ${colors.border};
  background-color: rgba(249, 250, 251, 0.5); // bg-gray-50/50
`;

