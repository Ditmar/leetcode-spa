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

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: CSSProperties;
    subtitle: CSSProperties;
    question: CSSProperties;
    option: CSSProperties;
    input: CSSProperties; // AGREGADO PARA SEARCHBAR
  }

  interface TypographyVariantsOptions {
    title?: CSSProperties;
    subtitle?: CSSProperties;
    question?: CSSProperties;
    option?: CSSProperties;
    input?: CSSProperties; // AGREGADO PARA SEARCHBAR
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
    input: true; // AGREGADO PARA SEARCHBAR
  }
}

// ========================================
// ProfileCard Component Spacing Tokens
// ========================================
export const PROFILE_CARD_SPACING = {
  small: {
    // DIMENSIONES FIJAS - NO CAMBIAN (igual que medium)
    outerContainerWidth: 685, // ← MISMO que medium
    outerContainerHeight: 527, // ← MISMO que medium
    outerContainerPadding: 0,
    userCardWidth: 282, // ← MISMO que medium
    userCardHeight: 316, // ← MISMO que medium
    userCardPadding: 20,
    userCardBorderRadius: 0,
    avatarSize: 100, // ← Solo cambia el avatar (más pequeño)
    avatarBorder: 2,
    infoGap: 12,
    textGap: 8,
    userToStatsGap: 45,
    statsContainerWidth: 685, // ← MISMO que medium
    statsContainerHeight: 166, // ← MISMO que medium
    statsGap: 39,
    statCardWidth: 195, // ← MISMO que medium
    statCardHeight: 166, // ← MISMO que medium
    statPadding: 14,
    statCardBorderRadius: 8,
    statCardBorderWidth: 1,
    mobileBreakpoint: 768,
    tabletBreakpoint: 1024,
    mobile: {
      outerContainerWidth: 350, // ← Ancho fijo para mobile
      userCardWidth: 200, // ← Ancho fijo user card mobile
      userCardHeight: 220, // ← Alto fijo user card mobile
      userCardPadding: 16,
      avatarSize: 80,
      gap: 24,
      statsContainerWidth: 350, // ← Ancho fijo stats mobile
      statsGap: 8,
      statMinWidth: 100,
      statMaxWidth: 110,
      statHeight: 110,
      statPadding: 12,
    },
    tablet: {
      outerContainerWidth: 685, // ← Mantener tamaño desktop
      userCardWidth: 282, // ← Mantener tamaño desktop
      userCardHeight: 316, // ← Mantener tamaño desktop
      userCardPadding: 20,
      avatarSize: 110,
      gap: 45,
      statsContainerWidth: 685, // ← Mantener tamaño desktop
      statsContainerHeight: 166,
      statsGap: 39,
      statCardWidth: 195,
      statCardHeight: 166,
      statPadding: 16,
    },
  },
  medium: {
    // BASE - DIMENSIONES EXACTAS DE FIGMA
    outerContainerWidth: 685,
    outerContainerHeight: 527,
    outerContainerPadding: 0,
    userCardWidth: 282,
    userCardHeight: 316,
    userCardPadding: 20,
    userCardBorderRadius: 0,
    avatarSize: 140,
    avatarBorder: 3,
    infoGap: 16,
    textGap: 12,
    userToStatsGap: 45,
    statsContainerWidth: 685,
    statsContainerHeight: 166,
    statsGap: 39,
    statCardWidth: 195,
    statCardHeight: 166,
    statPadding: 16,
    statCardBorderRadius: 8,
    statCardBorderWidth: 1,
    mobileBreakpoint: 768,
    tabletBreakpoint: 1024,
    mobile: {
      outerContainerWidth: 280, // ← Ancho fijo para mobile
      userCardWidth: 180, // ← Ancho fijo user card mobile
      userCardHeight: 200, // ← Alto fijo user card mobile
      userCardPadding: 16,
      avatarSize: 80,
      gap: 24,
      statsContainerWidth: 280, // ← Ancho fijo stats mobile
      statsGap: 8,
      statMinWidth: 50,
      statMaxWidth: 100,
      statHeight: 90,
      statPadding: 12,
    },
    tablet: {
      outerContainerWidth: 685, // ← Mantener tamaño desktop
      userCardWidth: 282, // ← Mantener tamaño desktop
      userCardHeight: 316, // ← Mantener tamaño desktop
      userCardPadding: 20,
      avatarSize: 130,
      gap: 45,
      statsContainerWidth: 685, // ← Mantener tamaño desktop
      statsContainerHeight: 166,
      statsGap: 39,
      statCardWidth: 195,
      statCardHeight: 166,
      statPadding: 16,
    },
  },
  large: {
    outerContainerWidth: 685, // ← MISMO que medium
    outerContainerHeight: 527, // ← MISMO que medium
    outerContainerPadding: 0,
    userCardWidth: 282, // ← MISMO que medium
    userCardHeight: 316, // ← MISMO que medium
    userCardPadding: 20,
    userCardBorderRadius: 0,
    avatarSize: 145,
    avatarBorder: 4,
    infoGap: 20,
    textGap: 16,
    userToStatsGap: 45,
    statsContainerWidth: 685,
    statsContainerHeight: 166,
    statsGap: 39,
    statCardWidth: 195,
    statCardHeight: 166,
    statPadding: 18,
    statCardBorderRadius: 8,
    statCardBorderWidth: 1,
    mobileBreakpoint: 768,
    tabletBreakpoint: 1024,
    mobile: {
      outerContainerWidth: 350, // ← Ancho fijo para mobile
      userCardWidth: 200, // ← Ancho fijo user card mobile
      userCardHeight: 220,
      userCardPadding: 16,
      avatarSize: 80,
      gap: 24,
      statsContainerWidth: 350, // ← Ancho fijo stats mobile
      statsGap: 8,
      statMinWidth: 100,
      statMaxWidth: 110,
      statHeight: 110,
      statPadding: 12,
    },
    tablet: {
      outerContainerWidth: 685, // ← Mantener tamaño desktop
      userCardWidth: 282, // ← Mantener tamaño desktop
      userCardHeight: 316, // ← Mantener tamaño desktop
      userCardPadding: 20,
      avatarSize: 160,
      gap: 45,
      statsContainerWidth: 685, // ← Mantener tamaño desktop
      statsContainerHeight: 166,
      statsGap: 39,
      statCardWidth: 195,
      statCardHeight: 166,
      statPadding: 18,
    },
  },
} as const;

// ========================================
// ProfileCard Component Typography Tokens
// ========================================
export const PROFILE_CARD_TYPOGRAPHY = {
  small: {
    nameSize: '1.5rem',
    nameWeight: 600,
    nameFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    usernameSize: '1rem',
    usernameWeight: 400,
    usernameFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    roleSize: '1.1rem',
    roleWeight: 400,
    roleFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    statValueSize: '2.4rem',
    statValueWeight: 600,
    statValueLineHeight: 1.2,
    statValueFont: '"Syne", "Roboto", "Helvetica", "Arial", sans-serif',
    statLabelSize: '0.8rem',
    statLabelWeight: 400,
    statLabelPadding: '4px',
    statLabelLineHeight: 1,
    statLabelFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    // Responsive typography
    mobile: {
      nameSize: '1.125rem',
      usernameSize: '0.875rem',
      roleSize: '0.75rem',
      statValueSize: '1.5rem',
      statLabelSize: '0.75rem',
    },
    tablet: {
      nameSize: '1.25rem',
      usernameSize: '0.9rem',
      roleSize: '0.8rem',
      statValueSize: '2.25rem',
      statLabelSize: '0.875rem',
    },
  },
  medium: {
    nameSize: '2.3rem',
    nameWeight: 600,
    nameFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    usernameSize: '1.2rem',
    usernameWeight: 400,
    usernameFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    roleSize: '1.3rem',
    roleWeight: 400,
    roleFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    statValueSize: '48.3px',
    statValueWeight: 600,
    statValueLineHeight: 1.2,
    statValueFont: '"Syne", "Roboto", "Helvetica", "Arial", sans-serif',
    statLabelSize: '17.3px',
    statLabelWeight: 400,
    statLabelPadding: '3.5px 0px',
    statLabelLineHeight: 1,
    statLabelFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    // Responsive typography
    mobile: {
      nameSize: '1.125rem',
      usernameSize: '0.875rem',
      roleSize: '0.75rem',
      statValueSize: '1.5rem',
      statLabelSize: '0.6rem',
    },
    tablet: {
      nameSize: '1.25rem',
      usernameSize: '0.9rem',
      roleSize: '0.8rem',
      statValueSize: '2.25rem',
      statLabelSize: '0.875rem',
    },
  },
  large: {
    nameSize: '2.2rem',
    nameWeight: 600,
    nameFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    usernameSize: '1.3rem',
    usernameWeight: 400,
    usernameFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    roleSize: '1.4rem',
    roleWeight: 400,
    roleFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    statValueSize: '3.6rem',
    statValueWeight: 600,
    statValueLineHeight: 1.2,
    statValueFont: '"Syne", "Roboto", "Helvetica", "Arial", sans-serif',
    statLabelSize: '1.2rem',
    statLabelWeight: 400,
    statLabelPadding: '4px',
    statLabelLineHeight: 1,
    statLabelFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    // Responsive typography
    mobile: {
      nameSize: '1.125rem',
      usernameSize: '0.875rem',
      roleSize: '0.75rem',
      statValueSize: '1.5rem',
      statLabelSize: '0.75rem',
    },
    tablet: {
      nameSize: '1.25rem',
      usernameSize: '0.9rem',
      roleSize: '0.8rem',
      statValueSize: '2.25rem',
      statLabelSize: '0.875rem',
    },
  },
} as const;

// ========================================
// ProfileCard Component Color Tokens
// ========================================
export const PROFILE_CARD_COLORS = {
  statLabelColor: 'rgba(169, 169, 169, 1)',
  statValueColor: '#565656ff',
  statCardBackground: '#F1F3F9',
  statCardBorder: 'none',
  userCardBackground: '#F1F3F9',
  avatarBackground: 'blue',
  textPrimary: '#0a0a0aff',
  textSecondary: '#666666',
  textTertiary: '#999999',
} as const;

// ========================================
// ProfileCard Component Shadow Tokens
// ========================================
export const PROFILE_CARD_SHADOWS = {
  card: {
    default: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    hover: '0px 4px 8px rgba(0, 0, 0, 0.15)',
  },
  avatar: '0px 2px 4px rgba(0, 0, 0, 0.1)',
} as const;

// ========================================
// ProfileCard Component Transition Tokens
// ========================================
export const PROFILE_CARD_TRANSITIONS = {
  duration: '200ms',
  easing: 'ease-in-out',
  properties: ['box-shadow', 'transform'],
  hover: {
    translateY: '-2px',
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

/**
 * FormInput Component Tokens
 * Colors for input states, sourced from Figma:
 * - focusBorder: Used for input border on focus state
 */
export const formInputTokens = {
  typography: {
    fontFamily: 'Syne',
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: '0',
  },
  colors: {
    focusBorder: '#B23DEA',
    defaultBorder: '#C4C4C4',
    placeholder: '#CCCCCC',
    label: '#BCBCBC',
    eye: {
      icon: '#BCBCBC',
      hover: '#A0A0A0',
      disabled: '#E0E0E0',
    },
  },
  eye: {
    sizeBox: {
      small: { width: 15.34, height: 15.16 },
      medium: { width: 18.5, height: 18.5 },
      large: { width: 21.93, height: 21.93 },
    },
    sizeEye: {
      small: { width: 13.74, height: 11.06 },
      medium: { width: 16.6, height: 13.55 },
      large: { width: 19.64, height: 15.99 },
    },
    padding: {
      small: 0,
      medium: 0,
      large: 0,
    },
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
        font-family: 'Syne';
        src: url(${Syne700}) format('woff2');
        font-weight: 700;
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
  input: {
    fontFamily: '"Syne","Montserrat","Inter","Roboto","Helvetica","Arial",sans-serif',
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '19px',
    color: 'rgba(0, 0, 0, 0.5)',
  }, // AGREGADO PARA SEARCHBAR
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
export const typographyTokens = {
  menuBadge: {
    fontFamily: '"Syne", "Montserrat", sans-serif',
    fontWeight: 500 as const,
    fontSize: '18px' as const,
    lineHeight: 1 as const,
    letterSpacing: 0 as const,
    minWidth: '96px' as const,
    minHeight: '22px' as const,
  },
} as const;

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
