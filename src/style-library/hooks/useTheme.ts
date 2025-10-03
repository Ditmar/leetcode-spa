import { useTheme as useMuiTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import type {
    ColorKey,
    ColorShade,
    TypographyVariantKey,
    BreakpointKey,
    CustomShadows,
    CustomBreakpoints
} from '../types/theme.types';

// Hook personalizado para usar el tema con tipos
export function useTheme() {
    const theme = useMuiTheme();

    return {
        ...theme,
        // Helpers tipados para acceder a colores
        getColor: (colorKey: ColorKey, shade: ColorShade = 'main') => {
            return (theme.palette as any)[colorKey][shade];
        },

        // Helper para obtener colores de texto
        getTextColor: (variant: 'primary' | 'secondary' | 'disabled' = 'primary') => {
            return theme.palette.text[variant];
        },

        // Helper para obtener colores de background
        getBackgroundColor: (variant: 'default' | 'paper' = 'default') => {
            return theme.palette.background[variant];
        },

        // Helper para obtener tipografía
        getTypography: (variant: TypographyVariantKey) => {
            return (theme.typography as any)[variant];
        },

        // Helper para spacing
        getSpacing: (...values: number[]) => {
            return theme.spacing.apply(null, values as any);
        },

        // Helper para breakpoints
        getBreakpoint: (key: BreakpointKey) => {
            return (theme.breakpoints.values as any)[key];
        },

        // Helper para media queries
        mediaQuery: {
            up: (key: BreakpointKey) => theme.breakpoints.up(key),
            down: (key: BreakpointKey) => theme.breakpoints.down(key),
            between: (start: BreakpointKey, end: BreakpointKey) =>
                theme.breakpoints.between(start, end),
            only: (key: BreakpointKey) => theme.breakpoints.only(key),
        },

        // Acceso a sombras personalizadas
        customShadows: (theme as any).customShadows as CustomShadows,

        // Acceso a breakpoints personalizados
        customBreakpoints: (theme as any).customBreakpoints as CustomBreakpoints,

        // Helper para verificar si es tema oscuro
        isDark: theme.palette.mode === 'dark',

        // Helper para obtener color inverso
        getInverseColor: (colorKey: ColorKey, shade: ColorShade = 'main') => {
            const color = (theme.palette as any)[colorKey][shade];
            return theme.palette.getContrastText(color);
        },
    };
}

// Hook para usar breakpoints de manera más fácil
export function useBreakpoint() {
    const theme = useMuiTheme();

    return {
        xs: theme.breakpoints.values.xs,
        sm: theme.breakpoints.values.sm,
        md: theme.breakpoints.values.md,
        lg: theme.breakpoints.values.lg,
        xl: theme.breakpoints.values.xl,

        // Media queries preparadas
        mobile: theme.breakpoints.down('sm'),
        tablet: theme.breakpoints.between('sm', 'md'),
        desktop: theme.breakpoints.up('md'),
        wide: theme.breakpoints.up('lg'),

        // Funciones de comparación
        isXs: () => window.matchMedia(theme.breakpoints.only('xs')).matches,
        isSm: () => window.matchMedia(theme.breakpoints.only('sm')).matches,
        isMd: () => window.matchMedia(theme.breakpoints.only('md')).matches,
        isLg: () => window.matchMedia(theme.breakpoints.only('lg')).matches,
        isXl: () => window.matchMedia(theme.breakpoints.only('xl')).matches,

        isMobile: () => window.matchMedia(theme.breakpoints.down('sm')).matches,
        isTablet: () => window.matchMedia(theme.breakpoints.between('sm', 'md')).matches,
        isDesktop: () => window.matchMedia(theme.breakpoints.up('md')).matches,
    };
}

// Hook para usar colores de manera tipada
export function useColors() {
    const theme = useMuiTheme();

    return {
        primary: theme.palette.primary,
        secondary: theme.palette.secondary,
        error: theme.palette.error,
        warning: theme.palette.warning,
        info: theme.palette.info,
        success: theme.palette.success,
        grey: theme.palette.grey,
        text: theme.palette.text,
        background: theme.palette.background,
        action: theme.palette.action,

        // Colores personalizados si existen
        gradient: (theme.palette as any).gradient || {
            primary: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            secondary: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
        },

        // Helper para obtener color con transparencia  
        withAlpha: (color: string, alpha: number) => {
            return `${color}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`;
        },
    };
}

// Hook para usar tipografía
export function useTypography() {
    const theme = useMuiTheme();

    return {
        ...theme.typography,

        // Helpers para crear estilos de texto comunes
        heading: (variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1') => ({
            ...theme.typography[variant],
            color: theme.palette.text.primary,
        }),

        body: (variant: 'body1' | 'body2' = 'body1') => ({
            ...theme.typography[variant],
            color: theme.palette.text.primary,
        }),

        caption: () => ({
            ...theme.typography.caption,
            color: theme.palette.text.secondary,
        }),

        button: () => ({
            ...theme.typography.button,
            color: theme.palette.text.primary,
        }),
    };
}