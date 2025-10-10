import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import type { ChipProps } from '@mui/material/Chip';
import type { PillTagVariant } from './PillTag.constants';
import { pillTagTokens } from './PillTag.constants';

interface PillTagStyledProps extends ChipProps {
    pillVariant?: PillTagVariant;
}
export const PillTagStyled = styled(Chip, {
    shouldForwardProp: (prop) => prop !== 'pillVariant',
})<PillTagStyledProps>(({ theme, pillVariant = 'primary' }) => {
    const dimensions = pillTagTokens.dimensions[pillVariant];
    const shadows = pillTagTokens.shadows[pillVariant];

    return {
        fontFamily: pillTagTokens.typography.fontFamily,
        fontWeight: pillTagTokens.typography.fontWeight,
        fontStyle: 'normal',
        lineHeight: pillTagTokens.typography.lineHeight,
        fontSize: `${dimensions.fontSize}px`,
        letterSpacing: pillTagTokens.typography.letterSpacing,
        textAlign: 'center',
        textTransform: 'none',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        border: 'none',
        boxSizing: 'border-box',
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        backgroundColor: pillTagTokens.colors.background,
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
                duration: pillTagTokens.transitions.duration,
                easing: pillTagTokens.transitions.easing,
            }
        ),
        '& .MuiChip-label': {
            display: 'block',
            width: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            padding: 0,
            background: `linear-gradient(180deg, ${pillTagTokens.colors.gradientStart} 0%, ${pillTagTokens.colors.gradientEnd} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
        },
        '&:hover': {
            boxShadow: shadows.hover,
            transform: `translateY(${pillTagTokens.states.hover.translateY}px)`,
        },
        '&:active': {
            boxShadow: shadows.active,
            transform: `scale(${pillTagTokens.states.active.scale})`,
        },
        '&.Mui-disabled': {
            opacity: pillTagTokens.states.disabled.opacity,
            pointerEvents: 'none',
            boxShadow: 'none',
        },
        '&:focus-visible': {
            outline: `2px solid ${pillTagTokens.colors.gradientStart}`,
            outlineOffset: '2px',
        },
    };
});