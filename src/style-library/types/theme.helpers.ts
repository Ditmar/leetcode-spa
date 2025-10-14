import { createTheme } from '@mui/material/styles';

import type {
  CustomThemeOptions,
  ThemeConfig,
  ColorScale,
  ColorToken,
  CustomShadows,
  CustomBreakpoints,
} from './theme.types';
import type { Theme } from '@mui/material/styles';
import type React from 'react';

// ==========================================
// PALETAS DE COLORES PREDEFINIDAS
// ==========================================

export const blueScale: ColorScale = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff',
};

export const redScale: ColorScale = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000',
};

export const greenScale: ColorScale = {
  50: '#e8f5e8',
  100: '#c8e6c8',
  200: '#a5d6a5',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853',
};

export const orangeScale: ColorScale = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00',
};

export const greyScale: ColorScale = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161',
};

// ==========================================
// GENERADORES DE TOKENS DE COLOR
// ==========================================

export function createColorToken(
  main: string,
  light?: string,
  dark?: string,
  contrastText?: string
): ColorToken {
  return {
    main,
    light: light || main,
    dark: dark || main,
    contrastText: contrastText || '#fff',
  };
}

export function generateColorFromScale(
  scale: ColorScale,
  mainShade: keyof ColorScale = 500
): ColorToken {
  return {
    main: scale[mainShade] || scale['500'],
    light: scale['300'] || scale['400'],
    dark: scale['700'] || scale['600'],
    contrastText: '#fff',
  };
}

// ==========================================
// SOMBRAS PERSONALIZADAS
// ==========================================

export const customShadows: CustomShadows = {
  z1: '0px 1px 3px rgba(0, 0, 0, 0.12)',
  z4: '0px 1px 8px rgba(0, 0, 0, 0.12)',
  z8: '0px 5px 5px -3px rgba(0, 0, 0, 0.06), 0px 8px 10px 1px rgba(0, 0, 0, 0.042)',
  z12: '0px 7px 8px -4px rgba(0, 0, 0, 0.06), 0px 12px 17px 2px rgba(0, 0, 0, 0.042)',
  z16: '0px 8px 10px -5px rgba(0, 0, 0, 0.06), 0px 16px 24px 2px rgba(0, 0, 0, 0.042)',
  z20: '0px 10px 13px -6px rgba(0, 0, 0, 0.06), 0px 20px 31px 3px rgba(0, 0, 0, 0.042)',
  z24: '0px 11px 15px -7px rgba(0, 0, 0, 0.06), 0px 24px 38px 3px rgba(0, 0, 0, 0.042)',
};

// ==========================================
// BREAKPOINTS PERSONALIZADOS
// ==========================================

export const customBreakpoints: CustomBreakpoints = {
  mobile: '@media (max-width: 767px)',
  tablet: '@media (min-width: 768px) and (max-width: 1023px)',
  desktop: '@media (min-width: 1024px)',
  wide: '@media (min-width: 1200px)',
};

// ==========================================
// CREADORES DE TEMA
// ==========================================

export function createLightTheme(config: Partial<ThemeConfig> = {}): CustomThemeOptions {
  const {
    primaryColor = blueScale['600'],
    secondaryColor = redScale['500'],
    fontFamily = '"Roboto", "Helvetica", "Arial", sans-serif',
    borderRadius = 8,
    spacing = 8,
  } = config;

  return {
    palette: {
      mode: 'light',
      primary: {
        main: primaryColor,
        light: blueScale['400'],
        dark: blueScale['800'],
        contrastText: '#fff',
      },
      secondary: {
        main: secondaryColor,
        light: redScale['300'],
        dark: redScale['700'],
        contrastText: '#fff',
      },
      error: generateColorFromScale(redScale),
      warning: generateColorFromScale(orangeScale),
      info: generateColorFromScale(blueScale),
      success: generateColorFromScale(greenScale),
      grey: greyScale,
      background: {
        default: '#fafafa',
        paper: '#ffffff',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
        disabled: 'rgba(0, 0, 0, 0.38)',
      },
      gradient: {
        primary: `linear-gradient(135deg, ${primaryColor} 0%, ${blueScale['800']} 100%)`,
        secondary: `linear-gradient(135deg, ${secondaryColor} 0%, ${redScale['700']} 100%)`,
      },
    },
    typography: {
      fontFamily,
      h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.43,
      },
      button: {
        fontSize: '0.875rem',
        fontWeight: 500,
        textTransform: 'uppercase' as const,
      },
    },
    spacing,
    shape: {
      borderRadius,
    },
    shadows: [
      'none',
      customShadows.z1,
      customShadows.z1,
      customShadows.z4,
      customShadows.z4,
      customShadows.z8,
      customShadows.z8,
      customShadows.z8,
      customShadows.z12,
      customShadows.z12,
      customShadows.z12,
      customShadows.z16,
      customShadows.z16,
      customShadows.z16,
      customShadows.z20,
      customShadows.z20,
      customShadows.z20,
      customShadows.z24,
      customShadows.z24,
      customShadows.z24,
      customShadows.z24,
      customShadows.z24,
      customShadows.z24,
      customShadows.z24,
      customShadows.z24,
    ],
  };
}

export function createDarkTheme(config: Partial<ThemeConfig> = {}): CustomThemeOptions {
  const lightTheme = createLightTheme(config);

  return {
    ...lightTheme,
    palette: {
      ...lightTheme.palette,
      mode: 'dark',
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
      text: {
        primary: 'rgba(255, 255, 255, 0.87)',
        secondary: 'rgba(255, 255, 255, 0.6)',
        disabled: 'rgba(255, 255, 255, 0.38)',
      },
    },
  };
}

// ==========================================
// HELPERS PARA USAR EN COMPONENTES
// ==========================================

export function getColorFromTheme(
  theme: Theme,
  colorKey: keyof ColorToken,
  colorName: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' = 'primary'
): string {
  return theme.palette[colorName][colorKey];
}

export function getTypographyFromTheme(
  theme: Theme,
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2'
): React.CSSProperties {
  return theme.typography[variant];
}

export function getSpacingFromTheme(theme: Theme, multiplier: number = 1): string {
  return theme.spacing(multiplier);
}

// ==========================================
// FACTORY PARA TEMAS COMPLETOS
// ==========================================

export function createCustomTheme(config: Partial<ThemeConfig> = {}) {
  const themeOptions = config.mode === 'dark' ? createDarkTheme(config) : createLightTheme(config);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme = createTheme(themeOptions as any);

  // Agregamos las extensiones personalizadas al tema creado
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (theme as any).customShadows = customShadows;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (theme as any).customBreakpoints = customBreakpoints;

  return theme;
}
