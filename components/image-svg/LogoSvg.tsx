import styled from 'styled-components';

// Definición de colores de tu paleta vibrante
const PALETTE = {
  deepBlue: '#1e3a8a', // Azul Profundo
  skyBlue: '#3b82f6',  // Azul Cielo
  emeraldGreen: '#10b981', // Verde Esmeralda
  sunYellow: '#fbbf24', // Amarillo Solar
  warmOrange: '#f97316', // Naranja Cálido
  // Usamos el Azul Cielo para el glow/sombra
};

const SvgContainer = styled.svg<{ $width?: number; $height?: number }>`
  /* --- Estilos Base --- */
  width: ${props => props.$width || 40}px;
  height: ${props => props.$height || 40}px;
  transition: all 0.3s ease;
  cursor: pointer;

  /* --- Efecto HOVER: Sombra Iluminada (Glow Azul) --- */
  &:hover {
    /* El drop-shadow se mueve y se intensifica ligeramente */
    filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.8)); /* Glow con Sky Blue */
    transform: scale(1.1); /* Ligero levantamiento */
  }
`;

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function LogoSvg({ width = 40, height = 40, className }: LogoProps) {
  return (
    <SvgContainer
      $width={width}
      $height={height}
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* --- DEFINICIONES (GRADIENTES Y FILTROS) --- */}
      <defs>
        {/* Gradiente principal con tu Opción A Multicolor */}
        <linearGradient id="multi-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={PALETTE.deepBlue} />
          <stop offset="25%" stopColor={PALETTE.skyBlue} />
          <stop offset="50%" stopColor={PALETTE.emeraldGreen} />
          <stop offset="75%" stopColor={PALETTE.sunYellow} />
          <stop offset="100%" stopColor={PALETTE.warmOrange} />
        </linearGradient>

        {/* Filtro de sombra suave para el estado base (Sky Blue sutil) */}
        <filter id="base-shadow" x="-20%" y="-20%" width="140%" height="140%">
          {/* El color de la sombra base es el Sky Blue para un brillo uniforme */}
          <feDropShadow 
            dx="0" 
            dy="3" 
            stdDeviation="5" 
            floodColor={PALETTE.skyBlue} 
            floodOpacity="0.4"
          />
        </filter>
      </defs>
      
      {/* --- ELEMENTOS SVG --- */}

      {/* Círculo de fondo con el gradiente vibrante y la sombra base */}
      <circle 
        cx="60" 
        cy="60" 
        r="55" 
        fill="url(#multi-gradient)" 
        filter="url(#base-shadow)"
      />
      
      {/* Círculo interior para darle profundidad o un borde más oscuro (usamos Deep Blue) */}
      <circle 
        cx="60" 
        cy="60" 
        r="48" 
        fill={PALETTE.deepBlue} 
        opacity="0.85"
      />
      
      {/* Letras "VSS" con efecto 3D y luminosidad interna */}
      <text
        x="60"
        y="75" /* Ajustado para centrar verticalmente */
        textAnchor="middle"
        fill="white"
        fontSize="38"
        fontWeight="extrabold"
        fontFamily="Inter, sans-serif"
        style={{
          /* Sombra en el texto para que parezca elevado */
          textShadow: '0 4px 6px rgba(0, 0, 0, 0.4)',
          /* Glow blanco para que resalte */
          filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.7))'
        }}
      >
        VSS
      </text>
      
      {/* Efecto de brillo de lente en la esquina superior izquierda (con Sky Blue) */}
      <circle 
        cx="40" 
        cy="40" 
        r="12" 
        fill={PALETTE.skyBlue} 
        opacity="0.4" 
        style={{ filter: 'blur(6px)' }}
      />
    </SvgContainer>
  );
}

