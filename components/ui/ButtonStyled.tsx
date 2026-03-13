import styled, { css } from "styled-components";

// Definición de colores base (deberías importarlos de un archivo de tema en un proyecto real)
const PALETTE = {
  deepBlue: '#1e3a8a',
  skyBlue: '#3b82f6',
  emeraldGreen: '#f59e0b',
};

// Estilos base para el gradiente primario
const primaryStyles = css`
  /* Gradiente Base: Azul más oscuro (40% Opacidad) para mejor visibilidad */
  background: linear-gradient(90deg, 
    rgba(30, 58, 138, 0.4) 0%, /* Deep Blue */
    rgba(59, 130, 246, 0.8) 100% /* Sky Blue */
  );
  /* Borde y color de texto para el estado base */
  border: 1px solid rgba(59, 130, 246, 0.5); /* Borde un poco más visible */
  color: #fff; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  /* Estilos Hover: Cambio de color, sombra luminosa y levantamiento */
  &:hover {
    transform: translateY(-3px); 
    /* Gradiente de Hover: Verde/Azul más visible (45% Opacidad) */
    background: linear-gradient(90deg, 
      rgba(16, 185, 129, 0.45) 0%, /* Emerald Green */
      rgba(59, 130, 246, 0.45) 100% /* Sky Blue */
    );
    border: 1px solid rgba(59, 130, 246, 0.6);
    /* Sombra Iluminada (Glow Azul Cielo) */
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5), 
                0 0 20px rgba(59, 130, 246, 0.2); 
  }
`;

// Estilos para el botón secundario (manteniendo un look minimalista transparente)
const secondaryStyles = css`
  /* Fondo transparente con un borde sutil para que se aprecie mejor en modo oscuro */
  background: rgba(30, 58, 138, 0.1); /* Ligero toque de azul transparente */
  color: ${PALETTE.skyBlue};
  border: 1px solid ${PALETTE.skyBlue};
  
  &:hover {
    color: #fff;
    /* Al hacer hover, se vuelve opaco con sombra luminosa */
    background-color: ${PALETTE.skyBlue}; 
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }
`;

export const ButtonStyled = styled.button<{ $primary?: boolean }>`
  /* Estilos comunes */
  padding: 0.75rem 1.5rem;
  border-radius: 9999px; /* Píldora */
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-out; 

  /* Aplicación de estilos primarios o secundarios */
  ${p => (p.$primary ? primaryStyles : secondaryStyles)}
`;
