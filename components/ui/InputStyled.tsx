'use client';

import styled from 'styled-components';

// Define los colores (puedes conectarlos a tu Tema de Context)
const colors = {
  border: '#D1D5DB', // gray-300
  borderFocus: '#2563EB', // blue-600
  placeholder: '#9CA3AF', // gray-400
  text: '#111827', // gray-900
  bg: 'transparent',
  shadowFocus: 'rgba(37, 99, 235, 0.2)',
};

const InputStyled = styled.input`
  display: flex;
  width: 100%;
  border: 1px solid ${colors.border};
  background-color: ${colors.bg};
  color: ${colors.text};
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem; // rounded-md
  transition: all 0.2s ease-in-out;
  box-sizing: border-box; // Importante para que el padding no afecte el width

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: ${colors.borderFocus};
    box-shadow: 0 0 0 3px ${colors.shadowFocus};
  }

  &::placeholder {
    color: ${colors.placeholder};
  }

  /* Aquí puedes añadir estilos para .dark si tu ThemeProvider lo soporta */
`;

export default InputStyled;

