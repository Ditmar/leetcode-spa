import SyneRegular from '../../components/TestHeader/assets/fonts/Syne-Regular.woff2';
import SyneSemiBold from '../../components/TestHeader/assets/fonts/Syne-SemiBold.woff2';
import { createCustomTheme } from '../types/theme.helpers';

import type { ThemeConfig } from '../types/theme.types';
import type { CSSProperties } from 'react';

// Extend MUI typings to accept custom typography variants "question" and "option"
declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: CSSProperties;
    subtitle: CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: CSSProperties;
    subtitle?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    subtitle: true;
  }
}

const themeConfig: ThemeConfig = {
  mode: 'light',
  primaryColor: '#1976d2',
  secondaryColor: '#dc004e',
  fontFamily: `'Syne', "Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
  borderRadius: 12,
  spacing: 8,
};

const theme = createCustomTheme(themeConfig);

theme.typography = {
  ...theme.typography,
  fontFamily: '"Syne","Inter","Roboto","Helvetica","Arial",sans-serif',
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
    `,
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
