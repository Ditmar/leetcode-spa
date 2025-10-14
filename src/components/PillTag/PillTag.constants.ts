import { pillTagTokens } from '../../style-library/theme/theme';

export const PILL_TAG_VARIANTS = ['primary', 'secondary'] as const;
export type PillTagVariant = (typeof PILL_TAG_VARIANTS)[number];

export const VALIDATION_MESSAGES = {
    EMPTY_LABEL: 'PillTag: label prop is required and cannot be empty',
    INVALID_VARIANT: (variant: string) =>
        `PillTag: invalid variant "${variant}". Using "primary" as fallback.`,
} as const;

// Re-exportar tokens para uso interno del componente
export { pillTagTokens };