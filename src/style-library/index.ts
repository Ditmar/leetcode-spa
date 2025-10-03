
export { default as theme, themeConfig, darkTheme, modernTheme, classicTheme } from './theme/theme';

export type * from './types/theme.types';

export * from './types/theme.helpers';

export * from './hooks/useTheme';

export {
    ThemeProvider,
    createTheme,
    useTheme as useMuiTheme,
    styled,
    alpha,
} from '@mui/material/styles';

export {
    CacheProvider,
} from '@emotion/react';

// ==========================================
// CONSTANTES ÚTILES
// ==========================================

export const THEME_MODES = {
    LIGHT: 'light' as const,
    DARK: 'dark' as const,
} as const;

export const BREAKPOINT_KEYS = {
    XS: 'xs' as const,
    SM: 'sm' as const,
    MD: 'md' as const,
    LG: 'lg' as const,
    XL: 'xl' as const,
} as const;

export const COLOR_KEYS = {
    PRIMARY: 'primary' as const,
    SECONDARY: 'secondary' as const,
    ERROR: 'error' as const,
    WARNING: 'warning' as const,
    INFO: 'info' as const,
    SUCCESS: 'success' as const,
} as const;

export const COLOR_SHADES = {
    LIGHT: 'light' as const,
    MAIN: 'main' as const,
    DARK: 'dark' as const,
    CONTRAST_TEXT: 'contrastText' as const,
} as const;

// ==========================================
// UTILIDADES
// ==========================================

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export function rgbToHex(r: number, g: number, b: number): string {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function addAlpha(color: string, alpha: number): string {
    const rgb = hexToRgb(color);
    if (!rgb) return color;

    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}