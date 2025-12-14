import MontserratLight from '../../assets/fonts/Montserrat-Light.woff2';
import MontserratRegular from '../../assets/fonts/Montserrat-Regular.woff2';
import Syne700 from '../../assets/fonts/Syne-700.woff2';
import MontserratSemiBold from '../../components/MCQQuestion/assets/fonts/Montserrat-SemiBold.woff2';
import SyneRegular from '../../components/MCQQuestion/assets/fonts/Syne-Regular.woff2';
import PoppinsSemiBold from '../../components/StatsPanel/assets/fonts/Poppins-SemiBold.woff2';
import SyneSemiBold from '../../components/TestHeader/assets/fonts/Syne-SemiBold.woff2';
import { createCustomTheme } from '../types/theme.helpers';

import type { ThemeConfig } from '../types/theme.types';
import type { CSSProperties } from 'react';

// Extend MUI typings to accept custom typography variants "question" and "option"
declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: CSSProperties;
    subtitle: CSSProperties;
    question: CSSProperties;
    option: CSSProperties;
    numbers: CSSProperties;
    texts: CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: CSSProperties;
    subtitle?: CSSProperties;
    question?: CSSProperties;
    option?: CSSProperties;
    numbers?: CSSProperties;
    texts?: CSSProperties;
  }

  interface Palette {
    backgroundQuestion: string;

    customAccent1: { main: string };
    customAccent2: { main: string };
    customAccent3: { main: string };
    customAccent4: { main: string };
    gradientStart: { main: string };
    gradientEnd: { main: string };

    neutralBg: { main: string };
  }

  interface PaletteOptions {
    backgroundQuestion?: string;

    customAccent1?: { main: string };
    customAccent2?: { main: string };
    customAccent3?: { main: string };
    customAccent4?: { main: string };
    gradientStart?: { main: string };
    gradientEnd?: { main: string };

    neutralBg?: { main: string };
  }
  interface Theme {
    gradients?: {
      background: (palette: Palette) => string;
    };

    consoleIO?: {
      dimensions: {
        containerWidth: number;
        containerHeight: number;
        frameHeight: number;
        tabSampleWidth: number;
        tabCustomWidth: number;
        tabHeight: number;
      };
    };
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    subtitle: true;
    question: true;
    option: true;
    numbers: true;
    texts: true;
  }
}

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
    lineHeight: 1,
    letterSpacing: '0',
  },
  dimensions: {
    primary: {
      width: 251.51,
      height: 85.1,
      borderRadius: '42.55px',
      fontSize: 28.37,
      textAlign: 'center',
      padding: {
        vertical: 2.5,
        horizontal: 4,
      },
    },
    secondary: {
      width: 227.17,
      height: 76.86,
      borderRadius: '38.43px',
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
      default: '0px 18.91px 66.19px 0px rgba(0, 0, 0, 0.15)',
      hover: '0px 20.91px 71.19px 0px rgba(0, 0, 0, 0.20)',
      active: '0px 16.91px 56.19px 0px rgba(0, 0, 0, 0.18)',
    },
    secondary: {
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
  secondaryColor: '#DC93FF', //added secondary color accord with figma style
  fontFamily: `"Montserrat", "Syne", "Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
  borderRadius: 12,
  spacing: 8,
};

const theme = createCustomTheme(themeConfig);

theme.components = {
  ...theme.components,
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: 'Syne';
        src: url(${Syne700}) format('woff2');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
    `,
  },
};

theme.typography = {
  ...theme.typography,
  fontFamily: '"Poppins", "Montserrat", "Syne","Inter","Roboto","Helvetica","Arial",sans-serif',
  title: {
    fontFamily: '"Syne","Inter","Roboto","Helvetica","Arial",sans-serif',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '1.125rem',
    lineHeight: '100%',
    letterSpacing: '0%',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: '"Syne","Inter","Roboto","Helvetica","Arial",sans-serif',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '1rem',
    lineHeight: '100%',
    letterSpacing: '0%',
    textAlign: 'center',
  },
  question: {
    fontFamily: '"Montserrat","Inter","Roboto","Helvetica","Arial",sans-serif',
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: 1.3,
    textTransform: 'capitalize',
  },

  option: {
    fontFamily: '"Syne","Montserrat","Inter","Roboto","Helvetica","Arial",sans-serif',
    fontWeight: 500,
    fontSize: '1.19rem',
    lineHeight: 1.2,
  },
  numbers: {
    fontFamily:
      '"Poppins", "Syne", "Montserrat", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '0%',
  },
  texts: {
    fontFamily: '"Syne","Montserrat","Inter","Roboto","Helvetica","Arial",sans-serif',
    fontSize: '0.625rem',
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '0%',
  },
};

theme.palette = {
  ...theme.palette,
  customAccent1: { main: '#FBFF49' },
  customAccent2: { main: '#8E49FF' },
  customAccent3: { main: '#8CBCFE' },
  customAccent4: { main: '#FFE4C4' },
  gradientStart: { main: '#B23DEB' },
  gradientEnd: { main: '#DE8FFF' },

  neutralBg: { main: '#F5F5F5' },

  text: {
    primary: '#000000',
    secondary: '#4F4F4F',
    disabled: '',
  },
  backgroundQuestion: '#F1F3F9',
  backgroundIcon: '#F8F6FF',
  backgroundCard: '#FAFAFA',
  statsNumbers: '#0D0D0DCC',
  statsLabel: '#0D0D0D80',
};

theme.components = {
  ...theme.components,
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: 'Syne';
        src: url(${SyneRegular}) format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Syne';
        src: url(${SyneSemiBold}) format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratSemiBold}) format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratLight}) format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Montserrat';
        src: url(${MontserratRegular}) format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
        @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsSemiBold}) format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
    `,
  },
};
theme.consoleIO = {
  dimensions: {
    containerWidth: 260,
    containerHeight: 502,
    frameHeight: 460,
    tabSampleWidth: 129,
    tabCustomWidth: 131,
    tabHeight: 42,
  },
};

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
  fontFamily: `'Syne', "Inter", sans-serif`,
  borderRadius: 16,
  spacing: 8,
});

export const classicTheme = createCustomTheme({
  mode: 'light',
  primaryColor: '#2563eb',
  secondaryColor: '#dc2626',
  fontFamily: `'Syne', "Georgia", serif`,
  borderRadius: 4,
  spacing: 8,
});
