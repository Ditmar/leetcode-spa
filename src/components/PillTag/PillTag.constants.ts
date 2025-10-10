import { colors, typography, radii } from '../../globals';

export const PILL_TAG_VARIANTS = ['primary', 'secondary'] as const;
export type PillTagVariant = (typeof PILL_TAG_VARIANTS)[number];
export const VALIDATION_MESSAGES = {
    EMPTY_LABEL: 'PillTag: label prop is required and cannot be empty',
    INVALID_VARIANT: (variant: string) =>
        `PillTag: invalid variant "${variant}". Using "primary" as fallback.`,
} as const;
export const pillTagTokens = {
    dimensions: {
        primary: {
            width: 251.51,
            height: 85.1,
            borderRadius: radii.pillTag.primary,
            fontSize: 28.37,
            padding: {
                vertical: 2.5,
                horizontal: 4,
            },
        },
        secondary: {
            width: 227.17,
            height: 76.86,
            borderRadius: radii.pillTag.secondary,
            fontSize: 25.62,
            padding: {
                vertical: 2.2,
                horizontal: 3.5,
            },
        },
    },
    colors: {
        background: colors.background.paper,
        gradientStart: colors.primary.main,
        gradientEnd: colors.primary.light,
    },
    shadows: {
        primary: {
            default: `0px 18.91px 66.19px 0px ${colors.shadows.black15}`,
            hover: `0px 20.91px 71.19px 0px ${colors.shadows.black20}`,
            active: `0px 16.91px 56.19px 0px ${colors.shadows.black18}`,
        },
        secondary: {
            default: `0px 17.08px 59.78px 0px ${colors.shadows.black15}`,
            hover: `0px 19.08px 64.78px 0px ${colors.shadows.black20}`,
            active: `0px 15.08px 49.78px 0px ${colors.shadows.black18}`,
        },
    },
    typography: {
        fontFamily: typography.fontFamily.primary,
        fontWeight: typography.fontWeight.medium,
        lineHeight: typography.lineHeight.none,
        letterSpacing: typography.letterSpacing.normal,
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