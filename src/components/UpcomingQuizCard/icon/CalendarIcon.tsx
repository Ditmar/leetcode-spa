import { Box, type SxProps, type Theme, useTheme } from '@mui/material';
import React from 'react';

export interface CalendarIconProps {
  day?: number | string;
  fontSize?: 'small' | 'medium' | 'large';
  color?: string;
  sx?: SxProps<Theme>;
  'aria-label'?: string;
}

export const CalendarIcon: React.FC<CalendarIconProps> = ({
  day = new Date().getDate(),
  fontSize = 'medium',
  color,
  sx,
  'aria-label': ariaLabel,
}) => {
  const theme = useTheme();
  const sizeMap = {
    small: 32,
    medium: 48,
    large: 64,
  };

  const fontSizeMap = {
    small: theme.typography.body2.fontSize,
    medium: theme.typography.h6.fontSize,
    large: theme.typography.h4.fontSize,
  };

  const size = sizeMap[fontSize] || 48;
  const resolvedFontSize = fontSizeMap[fontSize] || theme.typography.h6.fontSize;
  const resolvedColor = color || theme.palette.primary.main;

  return (
    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', ...sx }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={ariaLabel || `Calendar day ${day}`}
      >
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
        <circle cx="20" cy="8" r="3" fill={resolvedColor} />
        <circle cx="44" cy="8" r="3" fill={resolvedColor} />
        <line x1="4" y1="20" x2="60" y2="20" stroke="#ccc" strokeWidth="2" />
        <text
          x="32"
          y="46"
          textAnchor="middle"
          fontSize={resolvedFontSize}
          fontWeight="bold"
          fill={resolvedColor}
          fontFamily={theme.typography.fontFamily}
        >
          {day}
        </text>
      </svg>
    </Box>
  );
};
