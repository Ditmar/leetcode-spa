import React from 'react';

interface CalendarIconProps {
  day?: number | string; // Día a mostrar (opcional)
  fontSize?: 'small' | 'medium' | 'large';
  color?: string;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({
  day = new Date().getDate(),
  fontSize = 'medium',
  color = '#1976d2', // azul primario por defecto
}) => {
  const sizeMap = {
    small: 32,
    medium: 48,
    large: 64,
  };

  const size = sizeMap[fontSize] || 48;

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      {/* Fondo del calendario */}
      <rect
        x="4"
        y="8"
        width="56"
        height="52"
        rx="8"
        ry="8"
        fill="#f0f0f0"
        stroke="#ccc"
        strokeWidth="2"
      />
      {/* Anillos superiores */}
      <circle cx="20" cy="8" r="3" fill={color} />
      <circle cx="44" cy="8" r="3" fill={color} />
      {/* Línea divisoria */}
      <line x1="4" y1="20" x2="60" y2="20" stroke="#ccc" strokeWidth="2" />
      {/* Número del día */}
      <text
        x="32"
        y="46"
        textAnchor="middle"
        fontSize="24"
        fontWeight="bold"
        fill={color}
        fontFamily="Arial, sans-serif"
      >
        {day}
      </text>
    </svg>
  );
};

export default CalendarIcon;
