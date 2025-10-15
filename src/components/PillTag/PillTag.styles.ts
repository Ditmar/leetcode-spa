import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import type { ChipProps } from '@mui/material/Chip';
import type { PillTagVariant } from './PillTag.constants';
import { getPillTagTokens } from './PillTag.constants';

interface PillTagStyledProps extends ChipProps {
    pillVariant?: PillTagVariant;
}

export const PillTagStyled = styled(Chip, {
    shouldForwardProp: (prop) => prop !== 'pillVariant',
})<PillTagStyledProps>(({ theme, pillVariant = 'primary' }) => {
    const tokens = getPillTagTokens(theme);
    const dimensions = tokens.dimensions[pillVariant];
    const shadows = tokens.shadows[pillVariant];

    return {
        fontFamily: tokens.typography.fontFamily,
        fontWeight: tokens.typography.fontWeight,
        fontStyle: 'normal',
        lineHeight: tokens.typography.lineHeight,
        fontSize: `${dimensions.fontSize}px`,
        letterSpacing: tokens.typography.letterSpacing,
        textAlign: 'center',
        textTransform: 'none',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        border: 'none',
        boxSizing: 'border-box',
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,

        backgroundColor: tokens.colors.background,

        borderRadius:
            pillVariant === 'primary'
                ? `${dimensions.borderRadius} 0px ${dimensions.borderRadius} ${dimensions.borderRadius}`
                : `${dimensions.borderRadius} ${dimensions.borderRadius} ${dimensions.borderRadius} 0px`,

        boxShadow: shadows.default,
        padding: theme.spacing(
            dimensions.padding.vertical,
            dimensions.padding.horizontal
        ),

        transition: theme.transitions.create(
            ['box-shadow', 'transform'],
            {
                duration: tokens.transitions.duration,
                easing: tokens.transitions.easing,
            }
        ),

        '& .MuiChip-label': {
            display: 'block',
            width: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            padding: 0,
            background: `linear-gradient(180deg, ${tokens.colors.gradientStart} 0%, ${tokens.colors.gradientEnd} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
        },

        '&:hover': {
            boxShadow: shadows.hover,
            transform: `translateY(${tokens.states.hover.translateY}px)`,
        },

        '&:active': {
            boxShadow: shadows.active,
            transform: `scale(${tokens.states.active.scale})`,
        },

        '&.Mui-disabled': {
            opacity: tokens.states.disabled.opacity,
            pointerEvents: 'none',
            boxShadow: 'none',
        },

        '&:focus-visible': {
            outline: `2px solid ${tokens.colors.gradientStart}`,
            outlineOffset: '2px',
        },
    };
});