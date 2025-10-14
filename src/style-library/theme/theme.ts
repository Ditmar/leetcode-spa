import { createCustomTheme } from '../types/theme.helpers';

import type { ThemeConfig } from '../types/theme.types';

/**
 * PillTag Component Tokens
 * Dimensiones exactas desde Figma siguiendo la estructura:
 * - Rectangle (contenedor): dimensiones del chip completo
 * - Text (label): auto-ajustable dentro del contenedor
 */
export const pillTagTokens = {
    colors: {
        background: '#FFFFFF',
        gradientStart: '#B23DEB',
        gradientEnd: '#DE8FFF',
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        lineHeight: 1, // 100%
        letterSpacing: '0',
    },
    dimensions: {
        primary: {
            // Rectangle 2 dimensions (contenedor completo)
            width: 251.51,
            height: 85.1,
            borderRadius: '42.55px',
            // Text dimensions (para referencia, pero se auto-ajusta)
            fontSize: 28.37,
            textAlign: 'center',
            padding: {
                vertical: 2.5,
                horizontal: 4,
            },
        },
        secondary: {
            // Rectangle 1 dimensions (contenedor completo)
            width: 227.17,
            height: 76.86,
            borderRadius: '38.43px',
            // Text dimensions (para referencia, pero se auto-ajusta)
            fontSize: 25.62,
            textAlign: 'center',
            padding: {
                vertical: 2.2,
                horizontal: 3.5,
            },
        },
    },
    shadows: {
        primary: {
            // Rectangle 2 shadow specs
            default: '0px 18.91px 66.19px 0px rgba(0, 0, 0, 0.15)',
            hover: '0px 20.91px 71.19px 0px rgba(0, 0, 0, 0.20)',
            active: '0px 16.91px 56.19px 0px rgba(0, 0, 0, 0.18)',
        },
        secondary: {
            // Rectangle 1 shadow specs
            default: '0px 17.08px 59.78px 0px rgba(0, 0, 0, 0.15)',
            hover: '0px 19.08px 64.78px 0px rgba(0, 0, 0, 0.20)',
            active: '0px 15.08px 49.78px 0px rgba(0, 0, 0, 0.18)',
        },
    },
    states: {
        hover: {
            translateY: -2,
        },
        active: {
            scale: 0.98,
        },
        disabled: {
            opacity: 0.5,
        },
    },
    transitions: {
        duration: 200,
        easing: 'ease-in-out',
    },
} as const;

const themeConfig: ThemeConfig = {
  mode: 'light',
  primaryColor: '#1976d2',
  secondaryColor: '#dc004e',
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  borderRadius: 12,
  spacing: 8,
};

const theme = createCustomTheme(themeConfig);

export default theme;
export { themeConfig };

export const darkTheme = createCustomTheme({
  ...themeConfig,
  mode: 'dark',
});

export const modernTheme = createCustomTheme({
  mode: 'light',
  primaryColor: '#6366f1',
  secondaryColor: '#ec4899',
  fontFamily: '"Inter", sans-serif',
  borderRadius: 16,
  spacing: 8,
});

export const classicTheme = createCustomTheme({
  mode: 'light',
  primaryColor: '#2563eb',
  secondaryColor: '#dc2626',
  fontFamily: '"Georgia", serif',
  borderRadius: 4,
  spacing: 8,
});
