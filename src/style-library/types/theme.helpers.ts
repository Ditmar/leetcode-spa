import { createTheme } from '@mui/material/styles';

import type {
  CustomThemeOptions,
  ThemeConfig,
  ColorScale,
  ColorToken,
  CustomShadows,
  CustomBreakpoints,
  ComponentTokens,
  PillTagTokens,
} from './theme.types';
import type { Theme, ThemeOptions } from '@mui/material/styles';

// ==========================================
// PREDEFINED COLOR PALETTES
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
// COLOR TOKEN GENERATORS
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
    main: scale[mainShade] || scale[500],
    light: scale[300] || scale[400],
    dark: scale[700] || scale[600],
    contrastText: '#fff',
  };
}

// ==========================================
// CUSTOM SHADOWS
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
// CUSTOM BREAKPOINTS
// ==========================================

export const customBreakpoints: CustomBreakpoints = {
  mobile: '@media (max-width: 767px)',
  tablet: '@media (min-width: 768px) and (max-width: 1023px)',
  desktop: '@media (min-width: 1024px)',
  wide: '@media (min-width: 1200px)',
};

// ==========================================
// EXTENDED THEME TYPE
// ==========================================

export type ExtendedTheme = Theme & {
  customShadows: CustomShadows;
  customBreakpoints: CustomBreakpoints;
  componentTokens: ComponentTokens;
};

// ==========================================
// COMPONENT TOKENS - PILLTAG
// ==========================================

export const pillTagTokens: PillTagTokens = {
  colors: {
    background: '#FFFFFF',
    gradientStart: '#B23DEB',
    gradientEnd: '#DE8FFF',
  },
  typography: {
    fontFamily: '"Poppins",sans-serif',
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: '0',
  },
  dimensions: {
    primary: {
      desktop: {
        width: 251.51,
        height: 85.1,
        borderRadius: '42.55px',
        fontSize: 28.37,
        textAlign: 'center',
        padding: { vertical: 21.05, horizontal: 66.75 },
      },
      tablet: {
        width: 188.63,
        height: 63.83,
        borderRadius: '31.91px',
        fontSize: 21.28,
        textAlign: 'center',
        padding: { vertical: 16.42, horizontal: 52.31 },
      },
      mobile: {
        width: 94.75,
        height: 32.06,
        borderRadius: '16.03px',
        fontSize: 11.17,
        textAlign: 'center',
        padding: { vertical: 7.53, horizontal: 23.88 },
      },
    },
    secondary: {
      desktop: {
        width: 227.17,
        height: 76.86,
        borderRadius: '38.43px',
        fontSize: 25.62,
        textAlign: 'center',
        padding: { vertical: 19.43, horizontal: 86.585 },
      },
      tablet: {
        width: 170.38,
        height: 57.65,
        borderRadius: '28.82px',
        fontSize: 19.22,
        textAlign: 'center',
        padding: { vertical: 14.825, horizontal: 65.19 },
      },
      mobile: {
        width: 99.02,
        height: 33.5,
        borderRadius: '16.75px',
        fontSize: 11.17,
        textAlign: 'center',
        padding: { vertical: 8.25, horizontal: 37.51 },
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
    hover: { translateY: -2 },
    active: { scale: 0.98 },
    disabled: { opacity: 0.5 },
  },
  transitions: { duration: 200, easing: 'ease-in-out' },
};

export const componentTokens: ComponentTokens = { pillTag: pillTagTokens };

// ==========================================
// THEME CREATORS
// ==========================================

export function createLightTheme(config: Partial<ThemeConfig> = {}): CustomThemeOptions {
  const {
    primaryColor = blueScale[600],
    secondaryColor = redScale[500],
    fontFamily = '"Poppins", sans-serif',
    borderRadius = 8,
    spacing = 8,
  } = config;

  return {
    palette: {
      mode: 'light',
      primary: {
        main: primaryColor,
        light: blueScale[400],
        dark: blueScale[800],
        contrastText: '#fff',
      },
      secondary: {
        main: secondaryColor,
        light: redScale[300],
        dark: redScale[700],
        contrastText: '#fff',
      },
      error: generateColorFromScale(redScale),
      warning: generateColorFromScale(orangeScale),
      info: generateColorFromScale(blueScale),
      success: generateColorFromScale(greenScale),
      grey: greyScale,
      background: { default: '#fafafa', paper: '#ffffff' },
      text: {
        primary: 'rgba(0,0,0,0.87)',
        secondary: 'rgba(0,0,0,0.6)',
        disabled: 'rgba(0,0,0,0.38)',
      },
      gradient: {
        primary: `linear-gradient(135deg, ${primaryColor} 0%, ${blueScale[800]} 100%)`,
        secondary: `linear-gradient(135deg, ${secondaryColor} 0%, ${redScale[700]} 100%)`,
      },
    },
    typography: { fontFamily },
    spacing,
    shape: { borderRadius },
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
      background: { default: '#121212', paper: '#1e1e1e' },
      text: {
        primary: 'rgba(255,255,255,0.87)',
        secondary: 'rgba(255,255,255,0.6)',
        disabled: 'rgba(255,255,255,0.38)',
      },
    },
  };
}

// ==========================================
// FACTORY FOR COMPLETE THEMES
// ==========================================

export function createCustomTheme(config: Partial<ThemeConfig> = {}): ExtendedTheme {
  const themeOptions = config.mode === 'dark' ? createDarkTheme(config) : createLightTheme(config);
  const baseTheme = createTheme(themeOptions as ThemeOptions);

  const theme: ExtendedTheme = {
    ...baseTheme,
    customShadows,
    customBreakpoints,
    componentTokens,
  };

  return theme;
}

// ==========================================
// HELPERS FOR COMPONENT TOKENS
// ==========================================

export function getPillTagTokens(theme: ExtendedTheme): PillTagTokens {
  return theme.componentTokens?.pillTag || pillTagTokens;
}

export function getPillTagDimensions(
  theme: ExtendedTheme,
  variant: 'primary' | 'secondary' = 'primary',
  breakpoint: 'mobile' | 'tablet' | 'desktop' = 'desktop'
) {
  return getPillTagTokens(theme).dimensions[variant][breakpoint];
}
