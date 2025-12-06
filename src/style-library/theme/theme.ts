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
// DIMENSIONES EXACTAS DE FIGMA con spacing exacto del ticket
// Container: 282×316px
// Stats: 685×166px
// Stat card: 195×166px
// Label: 133×24px
// Value: 28×58px
// Spacing: 8px grid, 4px texts, 16px avatar-right, 24px text-stats

export const PROFILE_CARD_SPACING = {
  small: {
    outerContainerWidth: 548,
    outerContainerHeight: 422,
    outerContainerPadding: 0,
    userCardWidth: 226,
    userCardHeight: 253,
    userCardPadding: 16, // 2 * 8 = 16px
    userCardBorderRadius: 0,
    avatarSize: 120,
    avatarBorder: 0,
    infoGap: 8, // 8px spacing del ticket
    textGap: 4, // 4px entre textos del ticket
    userToStatsGap: 36,
    statsContainerWidth: 548,
    statsContainerHeight: 133,
    statsGap: 31,
    statCardWidth: 156,
    statCardHeight: 133,
    statPadding: 12,
    statCardBorderRadius: 8, // 8px border-radius
    statCardBorderWidth: 1, // 1px border
  },
  medium: {
    outerContainerWidth: 685, // Figma exact
    outerContainerHeight: 527, // Figma exact
    outerContainerPadding: 0,
    userCardWidth: 282, // Figma exact
    userCardHeight: 316, // Figma exact
    userCardPadding: 20,
    userCardBorderRadius: 0, // Padding interno calculado
    avatarSize: 140, // Figma exact
    avatarBorder: 3,
    infoGap: 16, // 16px avatar-right spacing del ticket
    textGap: 12, // 4px vertical texts del ticket
    userToStatsGap: 45, // 45px gap entre usuario y stats
    statsContainerWidth: 685, // Figma exact
    statsContainerHeight: 166, // Figma exact
    statsGap: 39, // Gap entre stat cards
    statCardWidth: 195, // Figma exact: 195×166px
    statCardHeight: 166, // Figma exact: 195×166px
    statPadding: 16, // Padding interno
    statCardBorderRadius: 8, // 8px border-radius del ticket
    statCardBorderWidth: 1, // 1px border del ticket
  },
  large: {
    outerContainerWidth: 822,
    outerContainerHeight: 632,
    outerContainerPadding: 0,
    userCardWidth: 338,
    userCardHeight: 379,
    userCardPadding: 24,
    userCardBorderRadius: 0,
    avatarSize: 164,
    avatarBorder: 4,
    infoGap: 20,
    textGap: 16,
    userToStatsGap: 54,
    statsContainerWidth: 822,
    statsContainerHeight: 199,
    statsGap: 47,
    statCardWidth: 234,
    statCardHeight: 199,
    statPadding: 20,
    statCardBorderRadius: 10,
    statCardBorderWidth: 1,
  },
} as const;

// ========================================
// ProfileCard Component Typography Tokens
// ========================================

export const PROFILE_CARD_TYPOGRAPHY = {
  small: {
    nameSize: '1.5rem', // ~19.2px
    nameWeight: 600,
    nameFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    usernameSize: '1rem', // ~12px
    usernameWeight: 400,
    usernameFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    roleSize: '1.1rem', // ~11.2px
    roleWeight: 400,
    roleFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    statValueSize: '2.4rem', // ~38.4px
    statValueWeight: 600,
    statValueLineHeight: 1.2,
    statValueFont: '"Syne", "Roboto", "Helvetica", "Arial", sans-serif',
    statLabelSize: '0.8rem', // ~12.8px
    statLabelWeight: 400,
    statLabelLineHeight: 1,
    statLabelFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  medium: {
    nameSize: '2.3rem',
    nameWeight: 600, // Bold del ticket
    nameFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    usernameSize: '1.2rem',
    usernameWeight: 400,
    usernameFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    roleSize: '1.3rem',
    roleWeight: 400,
    roleFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    statValueSize: '3rem', // 48px EXACTO (28×58px del ticket)
    statValueWeight: 600, // SemiBold del ticket
    statValueLineHeight: 1.2, // Para alcanzar 58px height
    statValueFont: '"Syne", "Roboto", "Helvetica", "Arial", sans-serif',
    statLabelSize: '1rem', // 16px EXACTO (133×24px del ticket)
    statLabelWeight: 400, // Regular del ticket
    statLabelLineHeight: 1, // 100% line-height
    statLabelFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  large: {
    nameSize: '2.5rem',
    nameWeight: 600,
    nameFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    usernameSize: '1.3rem',
    usernameWeight: 400,
    usernameFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    roleSize: '1.4rem',
    roleWeight: 400,
    roleFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    statValueSize: '3.6rem', // ~57.6px
    statValueWeight: 600,
    statValueLineHeight: 1.2,
    statValueFont: '"Syne", "Roboto", "Helvetica", "Arial", sans-serif',
    statLabelSize: '1.2rem', // ~19.2px
    statLabelWeight: 400,
    statLabelLineHeight: 1,
    statLabelFont: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
} as const;

// ========================================
// ProfileCard Component Color Tokens
// ========================================
// COLORES EXACTOS DE FIGMA del ticket:
// - Labels "Points": rgba(169,169,169,1)
// - Numbers/Values: rgba(241,243,249,1)
// - Stats background: #FFF (puro, sin tinte azul)
// - Border: #2196F3 1px
// - Text base: #000

export const PROFILE_CARD_COLORS = {
  statLabelColor: 'rgba(169, 169, 169, 1)', // Gray exacto del ticket
  statValueColor: '#565656', // Light gray/blueish del ticket
  statCardBackground: '#F1F3F9', // Puro sin tinte
  statCardBorder: 'none', // Blue border del ticket
  textPrimary: '#000000', // Black
  textSecondary: '#666666', // Gray
  textTertiary: '#999999', // Light gray
} as const;

/**
 * PillTag Component Tokens
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
