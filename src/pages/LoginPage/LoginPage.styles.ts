import { type Theme, type SxProps } from '@mui/material';

export const GEOMETRY_PX = {
  PAGE_WIDTH: 488.77,
  PAGE_HEIGHT: 761.02,
  PAGE_BORDER_RADIUS: 36.54,

  LOGO_TOP: 78.53,
  EMAIL_USERNAME_INPUT_TOP: 161.46,
  PASSWORD_INPUT_TOP: 264.68,

  EMAIL_USERNAME_ERROR_TOP: 245,
  PASSWORD_ERROR_TOP: 348.27,

  BUTTON_TOP: 373.65,
  NAVIGATION_LINKS_TOP: 473.61,
  OR_YOU_CAN_TOP: 520.51,
  ICONS_TOP: 557.88,
  LEGAL_TEXT_TOP: 643.27,

  INPUT_LEFT: 35,
  INPUT_WIDTH: 411.1,
  INPUT_HEIGHT: 81.31,
  INPUT_PADDING_LEFT_PX: 25,
  INPUT_BORDER_RADIUS_PX: 12.79,
  BUTTON_LEFT: 36,
  BUTTON_WIDTH: 411.11,
  BUTTON_HEIGHT: 62.54,
  LOGO_WIDTH: 266.15,
  LOGO_HEIGHT: 45.68,
  LOGO_LEFT: 111.45,
  NAVIGATION_LINK_HEIGHT: 20.01,
  SIGN_RIGHT: 46,
  OR_YOU_CAN_EIGHT: 18.01,
  ICON_SIZE: 58,
  ICON_SEPARATION: 45,
  GOOGLE_POS_X: 107.88,
  LEGAL_LEFT: 43.11,
  LEGAL_TEXT_WIDTH: 405.63,
  LEGAL_TEXT_HEIGHT: 35.01,
};

const INPUT_FONT_SIZE_RAW = 18.27;
const ERROR_FONT_SIZE_RAW = 12;
const BASE_FONT_SIZE_RAW = 17.78;
const SMALL_TEXT_FONT_SIZE_RAW = 15.78;
const BORDER_SIZE_PX = 0.91;

const percentW = (px: number): string => (px / GEOMETRY_PX.PAGE_WIDTH) * 100 + '%';
const percentH = (px: number): string => (px / GEOMETRY_PX.PAGE_HEIGHT) * 100 + '%';

const fontVw = (px: number, theme: Theme) => {
  const capPx = px;
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
  top: percentH(topPx),
  width: `${percentW(widthPx)} !important`,
  height: `${percentH(heightPx)} !important`,
  zIndex: zIndex,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
});

export const getInputStyles = (topPx: number, theme: Theme): SxProps<Theme> => ({
  ...getAbsoluteElementBase(
    topPx,
    GEOMETRY_PX.INPUT_LEFT,
    GEOMETRY_PX.INPUT_WIDTH,
    GEOMETRY_PX.INPUT_HEIGHT,
    theme
  ),

  borderRadius: theme.typography.pxToRem(GEOMETRY_PX.INPUT_BORDER_RADIUS_PX),
  paddingLeft: percentW(GEOMETRY_PX.INPUT_PADDING_LEFT_PX),

  border: `${BORDER_SIZE_PX}px solid ${theme.palette.grey[300]}`,
  caretColor: theme.palette.link.purple,
  fontFamily: theme.typography.fontFamily,

  ...fontVw(INPUT_FONT_SIZE_RAW, theme),

  '::placeholder': {
    color: theme.palette.text.secondary,
    ...fontVw(INPUT_FONT_SIZE_RAW, theme),
  },

  '&:focus-within': {
    outline: 'none',
    border: `${BORDER_SIZE_PX}px solid ${theme.palette.custom.inputBorderFocus}`,
    backgroundColor: theme.palette.common.white,

    '::placeholder': {
      color: `${theme.palette.custom.inputFocus} !important`,
    },
  },
});

export const getButtonStyles = (theme: Theme): SxProps<Theme> => ({
  ...getAbsoluteElementBase(
    GEOMETRY_PX.BUTTON_TOP,
    GEOMETRY_PX.BUTTON_LEFT,
    GEOMETRY_PX.BUTTON_WIDTH,
    GEOMETRY_PX.BUTTON_HEIGHT,
    theme
  ),

  zIndex: 2,
});

export const forgotPasswordLinkStyles = (theme: Theme): SxProps<Theme> => ({
  position: 'absolute',
  left: percentW(GEOMETRY_PX.INPUT_LEFT),
  top: percentH(GEOMETRY_PX.NAVIGATION_LINKS_TOP),
  height: percentH(GEOMETRY_PX.NAVIGATION_LINK_HEIGHT),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.secondary,
  zIndex: 1,
  textDecoration: 'none',
  cursor: 'pointer',
  ...fontVw(BASE_FONT_SIZE_RAW, theme),
});

export const signUpLinkStyles = (theme: Theme): SxProps<Theme> => ({
  position: 'absolute',
  right: percentW(GEOMETRY_PX.SIGN_RIGHT),
  top: percentH(GEOMETRY_PX.NAVIGATION_LINKS_TOP),
  height: percentH(GEOMETRY_PX.NAVIGATION_LINK_HEIGHT),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.link.purple,
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
    textDecorationColor: theme.palette.link.purple,
  },
  ...fontVw(BASE_FONT_SIZE_RAW, theme),
  textAlign: 'right',
});

export const orYouCanTextStyles = (theme: Theme): SxProps<Theme> => ({
  position: 'absolute',
  left: '48%',
  transform: 'translateX(-50%)',
  top: percentH(GEOMETRY_PX.OR_YOU_CAN_TOP),
  height: percentH(GEOMETRY_PX.OR_YOU_CAN_EIGHT),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.secondary,
  whiteSpace: 'nowrap',
  ...fontVw(SMALL_TEXT_FONT_SIZE_RAW, theme),
});

const calculateIconPosXPx = (iconIndex: 0 | 1 | 2): number => {
  const { GOOGLE_POS_X, ICON_SIZE, ICON_SEPARATION } = GEOMETRY_PX;
  return GOOGLE_POS_X + iconIndex * (ICON_SIZE + ICON_SEPARATION);
};

export const getSocialIconStyles = (iconIndex: 0 | 1 | 2): SxProps<Theme> => ({
  position: 'absolute',
  left: percentW(calculateIconPosXPx(iconIndex)),
  top: percentH(GEOMETRY_PX.ICONS_TOP),
  width: percentW(GEOMETRY_PX.ICON_SIZE),
  height: percentH(GEOMETRY_PX.ICON_SIZE),
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': { transform: 'scale(1.1)' },
});

export const getErrorTextStyles = (topPx: number, theme: Theme): SxProps<Theme> => ({
  position: 'absolute',
  left: percentW(GEOMETRY_PX.INPUT_LEFT),
  top: percentH(topPx),
  color: theme.palette.error.main,
  textAlign: 'left',
  width: percentW(GEOMETRY_PX.INPUT_WIDTH),
  whiteSpace: 'normal',
  ...fontVw(ERROR_FONT_SIZE_RAW, theme),
});

export const legalTextStyles = (theme: Theme): SxProps<Theme> => ({
  position: 'absolute',
  left: percentW(GEOMETRY_PX.LEGAL_LEFT),
  top: percentH(GEOMETRY_PX.LEGAL_TEXT_TOP),
  width: percentW(GEOMETRY_PX.LEGAL_TEXT_WIDTH),
  height: percentH(GEOMETRY_PX.LEGAL_TEXT_HEIGHT),
  fontFamily: theme.typography.fontFamily,
  lineHeight: 1.2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...fontVw(SMALL_TEXT_FONT_SIZE_RAW, theme),
});

export const legalLinkStyles = (theme: Theme): SxProps<Theme> => ({
  color: theme.palette.text.secondary,
  textDecoration: 'underline',
  textDecorationColor: theme.palette.text.secondary,
});
