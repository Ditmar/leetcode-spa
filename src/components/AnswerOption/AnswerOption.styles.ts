import { styled } from '@mui/material/styles';

import { DESIGN_TOKENS } from './AnswerOption.constants';

import type { AnswerOptionProps } from './types/AnswerOption.types';

const GRADIENT_CSS = `linear-gradient(90deg, ${DESIGN_TOKENS.colors.gradientStart} 0%, ${DESIGN_TOKENS.colors.gradientEnd} 100%)`;

//FACTORIZACIÓN: SIZE_MAP movido desde AnswerOption.helpers.ts a estilos
const SIZE_MAP = {
  large: {
    padding: '2.5rem 3rem',
    fontSize: '1.75rem',
    mobile: {
      padding: '1.25rem 1.75rem',
      fontSize: '1.25rem',
      minWidth: '10rem',
    },
  },
  medium: {
    padding: '2rem 2.5rem',
    fontSize: '1.5rem',
    mobile: {
      padding: '1rem 1.25rem',
      fontSize: '1rem',
      minWidth: '10rem',
    },
  },
  small: {
    padding: '1.5rem 2rem',
    fontSize: '1.25rem',
    mobile: {
      padding: '0.75rem 1rem',
      fontSize: '0.9rem',
      minWidth: '8rem',
    },
  },
};

export const Container = styled('label', {
  shouldForwardProp: (prop) =>
    prop !== 'selected' && prop !== 'disabled' && prop !== 'variant' && prop !== 'size',
})<Pick<AnswerOptionProps, 'selected' | 'disabled' | 'variant' | 'size'>>(
  ({ theme, selected, disabled, variant, size = 'medium' }) => ({
    display: 'flex',
    flexDirection: variant === 'vertical' ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: variant === 'vertical' ? 'center' : 'flex-start',
    gap: theme.spacing(2),

    width: 'fit-content',
    minWidth: '15rem',
    maxWidth: '30rem',
    padding: SIZE_MAP[size].padding,

    //Lógica de Responsividad (ajuste de padding y min-width en móvil)
    [theme.breakpoints.down('sm')]: {
      padding: SIZE_MAP[size].mobile.padding,
      minWidth: SIZE_MAP[size].mobile.minWidth,
    },

    backgroundColor: DESIGN_TOKENS.colors.backgroundDefault,
    borderRadius: DESIGN_TOKENS.borders.radius,
    border: `${DESIGN_TOKENS.borders.width} dashed ${disabled ? DESIGN_TOKENS.colors.borderDisabled : DESIGN_TOKENS.colors.borderDefault}`,

    boxSizing: 'border-box',
    position: 'relative',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.9 : 1,
    transition: 'all 0.2s ease-in-out',

    ...(selected && {
      backgroundColor: DESIGN_TOKENS.colors.backgroundSelected,
      boxShadow: `0 0 10px 0 ${DESIGN_TOKENS.colors.gradientStart}AA, inset 0 0 2px 0 ${DESIGN_TOKENS.colors.gradientStart}50`,
      borderColor: DESIGN_TOKENS.colors.borderDefault,
    }),

    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',

    '&:hover': {
      backgroundColor: !disabled && DESIGN_TOKENS.colors.backgroundSelected,
      borderColor: !disabled && DESIGN_TOKENS.colors.gradientEnd,
    },
  })
);

// CORRECCIÓN: Input visualmente oculto (Accesibilidad/Semántica)
export const VisuallyHiddenInput = styled('input')({
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
});

// Lógica de texto y tamaño responsive
export const LabelText = styled('span')<{
  selected?: boolean;
  disabled?: boolean;
  size: AnswerOptionProps['size'];
}>(({ theme, selected, disabled, size = 'medium' }) => ({
  fontFamily: "'Syne', sans-serif",
  lineHeight: 1.2,
  fontWeight: selected ? 700 : 500,

  // Lógica de tamaño responsive
  fontSize: SIZE_MAP[size].fontSize,
  [theme.breakpoints.down('sm')]: {
    fontSize: SIZE_MAP[size].mobile.fontSize,
  },
  //CORRECCIÓN: Color de texto disabled (#4F4F4F)
  color: disabled ? DESIGN_TOKENS.colors.textDisabled : DESIGN_TOKENS.colors.textDefault,

  ...(selected && {
    background: GRADIENT_CSS,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  }),
}));

export const IconWrapper = styled('div')<{ size: string }>(({ size }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: size,
  height: size,
  flexShrink: 0,
}));
