import { DefaultTheme } from 'styled-components';

// 1. Interfaz de Tipos para la Paleta de Colores
// Define la estructura que TypeScript espera cuando llamas a 'theme.colors'
export interface ThemeColors {
  // Colores primarios y de acento basados en tu paleta
  primary: string; // Sky Blue para acciones principales
  secondary: string; // Emerald Green para acentos
  
  // Colores del fondo
  bg: string; // Fondo principal (para Modo Oscuro)
  secondaryBg: string; // Fondo de tarjetas/contenedores (para Modo Oscuro)
  headerPrimary: string;
  // Colores del texto
  textPrimary: string;
  textSecondary: string;
  success: string;
  
  // Colores de borde
  borders: {
    primary: string; // Para bordes principales o separadores
    secondary: string; // Para bordes sutiles en tarjetas
  };
  
  // Tu paleta de colores vibrantes para gradientes
  palette: {
    deepBlue: string;
    skyBlue: string;
    emeraldGreen: string;
    sunYellow: string;
    warmOrange: string;
    coralRed: string;
  };

  glowShadows: {
    blue: string;
    green: string;
    orange: string;
    red: string;
  };

}

// 2. Definición del Objeto de Tema (Modo Oscuro como ejemplo inicial)
// Esto es lo que se pasa al ThemeProvider
export const darkTheme: DefaultTheme = {
  colors: {
    // Colores principales de la aplicación
    primary: '#3b82f6', // Sky Blue
    secondary: '#10b981', // Emerald Green
    headerPrimary:'#d1d5db',

    
    // Fondos (Modo Oscuro)
    bg: '#000712ed', // Fondo general muy oscuro
    secondaryBg: '#023859', // Fondo de tarjetas/contenedores
    success: '#10b777',
    
    // Texto
    textPrimary: '#ffffff',
    textSecondary: '#d1d5db', // Gris claro
    
    // Bordes
    borders: {
      primary: '#3b82f6', // Sky Blue para bordes
      secondary: '#4b5563', // Gris más oscuro para bordes sutiles
      
    },

    glowShadows: {
      blue: '0 0 10px rgba(59, 130, 246, 0.1), 0 0 40px rgba(59, 130, 246, 0.1)',
      green: '0 0 0.5px rgba(16, 185, 129, 0.1), 0 0 40px rgba(16, 185, 129, 0.1)',
      orange: '0 0 20px rgba(249, 115, 22, 0.1), 0 0 40px rgba(249, 115, 22, 0.1)',
      red: '0 0 20px rgba(239, 68, 68, 0.1), 0 0 40px rgba(239, 68, 68, 0.1)',
    },
    // Paleta completa
    palette: {
      deepBlue: '#1e3a8a',
      skyBlue: '#3b82f6',
      emeraldGreen: '#10b981',
      sunYellow: '#fbbf24',
      warmOrange: '#f97316',
      coralRed: '#ef4444',
    },
  },
};


// Opcional: Define un tema claro
export const lightTheme: DefaultTheme = {
    colors: {
        ...darkTheme.colors,
        bg: '#f3f4f6', // Gris muy claro
        secondaryBg: '#ffffff', // Blanco para tarjetas
        textPrimary: '#1f2937', // Gris oscuro
        textSecondary: '#6b7280', // Gris medio
        
        // Bordes ajustados para tema claro
        borders: {
          primary: '#3b82f6', // Mismo azul
          secondary: '#d1d5db', // Gris claro para bordes sutiles
        },
    }
}
