import { type Theme, type SxProps } from '@mui/material';

const BASE_FONT_SIZE_PX = 16.4442;
const INPUT_FONT_SIZE_PX = BASE_FONT_SIZE_PX * 1.05;
const VERTICAL_OFFSET = 6.43;

const BORDER_RADIUS_PX = 1.6;
const BORDER_SIZE_PX = 1.82;
const BORDER_COLOR_NORMAL = '#F1F1F1';

const BUTTON_BORDER_RADIUS_PX = 30;

const GEOMETRY_PX = {
  PAGE_WIDTH: 488.76,
  PAGE_HEIGHT: 655.86,
  PAGE_BORDER_RADIUS: 36.5426,

  LOGO_TOP: 36.54,
  EMAIL_USERNAME_INPUT_TOP: 122.42,
  PASSWORD_INPUT_TOP: 225.65,
  BUTTON_TOP: 328.88,
  NAVIGATION_LINKS_TOP: 401.42,
  OR_YOU_CAN_TOP: 450,
  ICONS_TOP: 499.89,
  LEGAL_TEXT_TOP: 588.144,

  INPUT_LEFT: 41.11,
  INPUT_WIDTH: 411.1,
  INPUT_HEIGHT: 81.31,
  BUTTON_HEIGHT: 62.54,
  LOGO_WIDTH: 266.14,
  LOGO_HEIGHT: 45.68,
  LOGO_LEFT: 111.45,
  ICON_SIZE: 42.02,
  ICON_SEPARATION: 54,
  GOOGLE_POS_X: 119.68,
  LEGAL_TEXT_WIDTH: 405.62,
};

const percentW = (px: number) => (px / GEOMETRY_PX.PAGE_WIDTH) * 100 + '%';
const percentH = (px: number) => (px / GEOMETRY_PX.PAGE_HEIGHT) * 100 + '%';
const fontVw = (px: number, capPx: number, theme: Theme) => {
  const vw = (px / GEOMETRY_PX.PAGE_WIDTH) * 100;
  const rem = theme.typography.pxToRem(capPx);

  return {
    fontSize: `clamp(${theme.typography.pxToRem(8)}, ${vw}vw, ${rem})`,
  };
};

const getAbsoluteElementBase = (
  topPx: number,
  leftPx: number,
  widthPx: number,
  heightPx: number,
  theme: Theme,
  zIndex: number = 2
): SxProps<Theme> => ({
  position: 'absolute',
  left: percentW(leftPx),
  top: percentH(topPx + VERTICAL_OFFSET),
  width: percentW(widthPx),
  height: percentH(heightPx),
  zIndex: zIndex,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
});

export const getPageContainerStyles = () => ({
  position: 'relative',
  width: '100%',
  maxWidth: GEOMETRY_PX.PAGE_WIDTH,
  aspectRatio: `${GEOMETRY_PX.PAGE_WIDTH} / ${GEOMETRY_PX.PAGE_HEIGHT}`,
  height: 'auto',
  margin: 'auto',
  boxSizing: 'border-box',
  zIndex: 1,
});

export const getFormStyles = (theme: Theme): SxProps<Theme> => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 1,
  textAlign: 'left',
  top: 0,
  left: 0,
  borderRadius: percentW(GEOMETRY_PX.PAGE_BORDER_RADIUS),
  background: theme.palette.background.paper,
  overflow: 'hidden',
});

export const getLogoStyles = (theme: Theme): SxProps<Theme> => ({
  ...getAbsoluteElementBase(
    GEOMETRY_PX.LOGO_TOP,
    GEOMETRY_PX.LOGO_LEFT,
    GEOMETRY_PX.LOGO_WIDTH,
    GEOMETRY_PX.LOGO_HEIGHT,
    theme
  ),
  backgroundColor: theme.palette.grey[200],
});

export const getInputStyles = (topPx: number, theme: Theme): SxProps<Theme> => ({
  ...getAbsoluteElementBase(
    topPx,
    GEOMETRY_PX.INPUT_LEFT,
    GEOMETRY_PX.INPUT_WIDTH,
    GEOMETRY_PX.INPUT_HEIGHT,
    theme
  ),

  color: theme.palette.common.black,

  backgroundColor: '#FFFFFF',
  borderRadius: BORDER_RADIUS_PX,
  border: `${BORDER_SIZE_PX}px solid ${BORDER_COLOR_NORMAL}`,

  caretColor: theme.palette.link.purple,

  ...fontVw(INPUT_FONT_SIZE_PX, INPUT_FONT_SIZE_PX, theme),

  '::placeholder': {
    color: theme.palette.text.secondary,
    ...fontVw(INPUT_FONT_SIZE_PX, INPUT_FONT_SIZE_PX, theme),
  },

  '&:focus-within': {
    outline: 'none',
    border: `${BORDER_SIZE_PX}px solid ${theme.palette.custom.inputBorderFocus}`,
    backgroundColor: '#FFFFFF',

    '::placeholder': {
      color: `${theme.palette.custom.inputFocus} !important`,
    },
  },
});

export const getButtonStyles = (theme: Theme): SxProps<Theme> => ({
  ...getAbsoluteElementBase(
    GEOMETRY_PX.BUTTON_TOP,
    GEOMETRY_PX.INPUT_LEFT,
    GEOMETRY_PX.INPUT_WIDTH,
    GEOMETRY_PX.BUTTON_HEIGHT,
    theme
  ),
  backgroundColor: theme.palette.grey[500],
  color: theme.palette.common.white,
  cursor: 'pointer',
  zIndex: 2,
  ...fontVw(BASE_FONT_SIZE_PX, BASE_FONT_SIZE_PX, theme),

  borderRadius: BUTTON_BORDER_RADIUS_PX,
});

export const forgotPasswordLinkStyles = (theme: Theme): SxProps<Theme> => ({
  position: 'absolute',
  left: percentW(GEOMETRY_PX.INPUT_LEFT),
  top: percentH(GEOMETRY_PX.NAVIGATION_LINKS_TOP + VERTICAL_OFFSET),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.secondary,
  zIndex: 1,
  textDecoration: 'none',
  cursor: 'pointer',
  ...fontVw(BASE_FONT_SIZE_PX, BASE_FONT_SIZE_PX, theme),
});

export const signUpLinkStyles = (theme: Theme): SxProps<Theme> => ({
  position: 'absolute',
  right: percentW(GEOMETRY_PX.INPUT_LEFT),
  top: percentH(GEOMETRY_PX.NAVIGATION_LINKS_TOP + VERTICAL_OFFSET),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.link.purple,
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
    textDecorationColor: theme.palette.link.purple,
  },
  ...fontVw(BASE_FONT_SIZE_PX, BASE_FONT_SIZE_PX, theme),
  textAlign: 'right',
});

export const orYouCanTextStyles = (theme: Theme): SxProps<Theme> => ({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  top: percentH(GEOMETRY_PX.OR_YOU_CAN_TOP + VERTICAL_OFFSET),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.secondary,
  whiteSpace: 'nowrap',
  ...fontVw(14.617, 14.617, theme),
});

const calculateIconPosXPx = (iconIndex: 0 | 1 | 2): number => {
  const { GOOGLE_POS_X, ICON_SIZE, ICON_SEPARATION } = GEOMETRY_PX;
  return GOOGLE_POS_X + iconIndex * (ICON_SIZE + ICON_SEPARATION);
};

export const getSocialIconStyles = (iconIndex: 0 | 1 | 2) => ({
  position: 'absolute',
  left: percentW(calculateIconPosXPx(iconIndex)),
  top: percentH(GEOMETRY_PX.ICONS_TOP + VERTICAL_OFFSET),
  width: percentW(GEOMETRY_PX.ICON_SIZE),
  height: percentH(GEOMETRY_PX.ICON_SIZE),
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': { transform: 'scale(1.1)' },
});

export const legalTextStyles = (theme: Theme): SxProps<Theme> => ({
  position: 'absolute',
  left: percentW(GEOMETRY_PX.INPUT_LEFT),
  top: percentH(GEOMETRY_PX.LEGAL_TEXT_TOP + VERTICAL_OFFSET),
  width: percentW(GEOMETRY_PX.LEGAL_TEXT_WIDTH),
  fontFamily: theme.typography.fontFamily,
  lineHeight: 1.2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...fontVw(14.617, 14.617, theme),
});

export const legalLinkStyles = (theme: Theme) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'underline',
  textDecorationColor: theme.palette.text.secondary,
});