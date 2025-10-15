import type {
  PaletteOptions,
  PaletteColorOptions,
  TypographyVariantsOptions,
} from '@mui/material/styles';

// ==========================================
// TIPOS BASE PARA COLORES
// ==========================================
export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100?: string;
  A200?: string;
  A400?: string;
  A700?: string;
}

export interface ColorToken {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

// ==========================================
// TIPOS PARA PALETTE
// ==========================================

export interface ExtendedPaletteOptions extends PaletteOptions {
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
  error?: PaletteColorOptions;
  warning?: PaletteColorOptions;
  info?: PaletteColorOptions;
  success?: PaletteColorOptions;
  grey?: Partial<ColorScale>;
  text?: {
    primary?: string;
    secondary?: string;
    disabled?: string;
    hint?: string;
  };
  divider?: string;
  background?: {
    default?: string;
    paper?: string;
  };
  action?: {
    active?: string;
    hover?: string;
    hoverOpacity?: number;
    selected?: string;
    selectedOpacity?: number;
    disabled?: string;
    disabledBackground?: string;
    disabledOpacity?: number;
    focus?: string;
    focusOpacity?: number;
    activatedOpacity?: number;
  };
}

// ==========================================
// TIPOS PARA TYPOGRAPHY
// ==========================================

export interface TypographyVariant {
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string | number;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  color?: string;
}

export interface ExtendedTypographyOptions extends TypographyVariantsOptions {
  htmlFontSize?: number;
  pxToRem?: (px: number) => string;
  fontFamily?: string;
  fontSize?: number;
  fontWeightLight?: number;
  fontWeightRegular?: number;
  fontWeightMedium?: number;
  fontWeightBold?: number;
}

// ==========================================
// TIPOS PARA SPACING
// ==========================================

export type SpacingValue = number | string;
export type SpacingInput = SpacingValue | SpacingValue[];

export interface SpacingFunction {
  (): string;
  (value: SpacingValue): string;
  (topBottom: SpacingValue, rightLeft: SpacingValue): string;
  (top: SpacingValue, rightLeft: SpacingValue, bottom: SpacingValue): string;
  (top: SpacingValue, right: SpacingValue, bottom: SpacingValue, left: SpacingValue): string;
  (...values: SpacingValue[]): string;
}

// ==========================================
// TIPOS PARA BREAKPOINTS
// ==========================================

export interface BreakpointValues {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface BreakpointOverrides {
  // Permite extensión de breakpoints personalizados
  [key: string]: unknown;
}

export type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// ==========================================
// TIPOS PARA SHADOWS Y EFECTOS
// ==========================================

export type ShadowsArray = [
  'none',
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];

export interface ZIndexValues {
  mobileStepper: number;
  fab: number;
  speedDial: number;
  appBar: number;
  drawer: number;
  modal: number;
  snackbar: number;
  tooltip: number;
}

// ==========================================
// TIPOS PARA SHAPE
// ==========================================

export interface ShapeOptions {
  borderRadius: number | string;
}

// ==========================================
// TIPOS PARA TRANSICIONES
// ==========================================

export interface EasingOptions {
  easeInOut: string;
  easeOut: string;
  easeIn: string;
  sharp: string;
}

export interface DurationOptions {
  shortest: number;
  shorter: number;
  short: number;
  standard: number;
  complex: number;
  enteringScreen: number;
  leavingScreen: number;
}

// ==========================================
// TIPOS PRINCIPALES DEL TEMA
// ==========================================

export interface CustomThemeOptions {
  palette?: ExtendedPaletteOptions;
  typography?: ExtendedTypographyOptions;
  spacing?: number | SpacingFunction;
  breakpoints?: {
    values?: Partial<BreakpointValues>;
    unit?: string;
    step?: number;
  };
  shadows?: Partial<ShadowsArray>;
  zIndex?: Partial<ZIndexValues>;
  shape?: Partial<ShapeOptions>;
  mixins?: Record<string, unknown>;
  transitions?: Record<string, unknown>;
  components?: Record<string, unknown>;
}

// ==========================================
// TIPOS UTILITARIOS
// ==========================================

export type ThemeMode = 'light' | 'dark';

export type ColorKey = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

export type ColorShade = 'light' | 'main' | 'dark' | 'contrastText';

export type GreyShade = keyof ColorScale;

export type TypographyVariantKey =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';

export interface ButtonVariants {
  text: string;
  outlined: string;
  contained: string;
}

export interface ButtonSizes {
  small: string;
  medium: string;
  large: string;
}

export interface TextFieldVariants {
  standard: string;
  filled: string;
  outlined: string;
}

export interface ChipVariants {
  filled: string;
  outlined: string;
}

export interface ThemeConfig {
  mode: ThemeMode;
  primaryColor: string;
  secondaryColor: string;
  fontFamily?: string;
  borderRadius?: number;
  spacing?: number;
}

export interface ColorTokens {
  primary: ColorToken;
  secondary: ColorToken;
  error: ColorToken;
  warning: ColorToken;
  info: ColorToken;
  success: ColorToken;
  grey: ColorScale;
}

export interface CustomShadows {
  z1: string;
  z4: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
}

export interface CustomBreakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
  wide: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadows;
    customBreakpoints: CustomBreakpoints;
  }

  interface Palette {
    gradient: {
      primary: string;
      secondary: string;
    };
  }

  interface PaletteOptions {
    gradient?: {
      primary?: string;
      secondary?: string;
    };
  }
}
