import MontserratLight from '../../assets/fonts/Montserrat-Light.woff2';
import MontserratRegular from '../../assets/fonts/Montserrat-Regular.woff2';
import Syne700 from '../../assets/fonts/Syne-700.woff2';
import MontserratSemiBold from '../../components/MCQQuestion/assets/fonts/Montserrat-SemiBold.woff2';
import SyneRegular from '../../components/MCQQuestion/assets/fonts/Syne-Regular.woff2';
import SyneSemiBold from '../../components/TestHeader/assets/fonts/Syne-SemiBold.woff2';
import { createCustomTheme } from '../types/theme.helpers';

import type { ThemeConfig } from '../types/theme.types';
import type { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: CSSProperties;
    subtitle: CSSProperties;
    question: CSSProperties;
    option: CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: CSSProperties;
    subtitle?: CSSProperties;
    question?: CSSProperties;
    option?: CSSProperties;
  }

  interface Palette {
    backgroundQuestion: string;
  }

  interface PaletteOptions {
    backgroundQuestion?: string;
  }
  interface Theme {
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
  }
}

// ========================================
// ProfileCard Component Spacing Tokens
// ========================================
// All values are in spacing units (multiplied by base spacing: 8px)
// Example: avatarSpacing: 6 = 6 * 8px = 48px

export const PROFILE_CARD_SPACING = {
  small: {
    // Proporcional ~80% de medium
    outerContainerWidth: 548, // 685 * 0.8
    outerContainerHeight: 422, // 527 * 0.8
    outerContainerPadding: 0, // Sin padding, invisible
    userCardWidth: 226, // 282 * 0.8
    userCardHeight: 253, // 316 * 0.8
    userCardPadding: 2,
    avatarSize: 96, // 120 * 0.8
    avatarBorder: 2,
    infoGap: 1,
    textGap: 0.5,
    userToStatsGap: 36, // 45 * 0.8 (gap entre usuario y stats)
    statsContainerWidth: 548, // 685 * 0.8
    statsContainerHeight: 133, // 166 * 0.8
    statsGap: 31, // 39 * 0.8 (gap entre stat cards)
    statCardWidth: 156, // 195 * 0.8
    statCardHeight: 133, // 166 * 0.8
    statPadding: 1.5,
  },
  medium: {
    // DIMENSIONES EXACTAS DE FIGMA
    outerContainerWidth: 685, // Container invisible total
    outerContainerHeight: 527, // Container invisible total
    outerContainerPadding: 0, // Sin padding en container externo
    userCardWidth: 282, // Card de usuario
    userCardHeight: 316, // Card de usuario
    userCardPadding: 2.5, // Padding interno de la card usuario
    avatarSize: 120, // Avatar 120×120px
    avatarBorder: 3,
    infoGap: 1.5,
    textGap: 0.75,
    userToStatsGap: 45, // GAP CRÍTICO: entre card usuario y stats
    statsContainerWidth: 685, // Ancho total de stats
    statsContainerHeight: 166, // Alto de stats
    statsGap: 39, // GAP entre las 3 stat cards
    statCardWidth: 195, // Ancho de cada stat card individual
    statCardHeight: 166, // Alto de cada stat card
    statPadding: 2,
  },
  large: {
    // Proporcional ~120% de medium
    outerContainerWidth: 822, // 685 * 1.2
    outerContainerHeight: 632, // 527 * 1.2
    outerContainerPadding: 0,
    userCardWidth: 338, // 282 * 1.2
    userCardHeight: 379, // 316 * 1.2
    userCardPadding: 3,
    avatarSize: 144, // 120 * 1.2
    avatarBorder: 4,
    infoGap: 2,
    textGap: 1,
    userToStatsGap: 54, // 45 * 1.2
    statsContainerWidth: 822, // 685 * 1.2
    statsContainerHeight: 199, // 166 * 1.2
    statsGap: 47, // 39 * 1.2
    statCardWidth: 234, // 195 * 1.2
    statCardHeight: 199, // 166 * 1.2
    statPadding: 2.5,
  },
} as const;

// ========================================
// ProfileCard Component Typography Tokens
// ========================================
export const PROFILE_CARD_TYPOGRAPHY = {
  small: {
    nameSize: '1rem',
    usernameSize: '0.8125rem',
    roleSize: '0.75rem',
  },
  medium: {
    nameSize: '1.25rem',
    usernameSize: '0.875rem',
    roleSize: '0.875rem',
  },
  large: {
    nameSize: '1.5rem',
    usernameSize: '1rem',
    roleSize: '1rem',
  },
} as const;

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
  secondaryColor: '#dc004e',
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
    `,
  },
};

theme.typography = {
  ...theme.typography,
  fontFamily: '"Montserrat", "Syne","Inter","Roboto","Helvetica","Arial",sans-serif',
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
};

theme.palette = {
  ...theme.palette,
  text: {
    primary: '#000000',
    secondary: '#4F4F4F',
    disabled: '',
  },
  backgroundQuestion: '#F1F3F9',
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

export { theme };
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
