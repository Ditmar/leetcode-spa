import { type Theme } from '@mui/material';

const GEOMETRY_PX = {
  PAGE_WIDTH: 488.76,
  PAGE_HEIGHT: 761,
  PAGE_BORDER_RADIUS: 36.5426,

  LOGO_TOP: 36.54,
  EMAIL_INPUT_TOP: 122.42,
  USERNAME_INPUT_TOP: 225.65,
  PASSWORD_INPUT_TOP: 328.88,
  BUTTON_TOP: 432.12,
  LOGIN_LINK_TOP: 517.08,
  SIGNUP_WITH_TOP: 570.98,
  ICONS_TOP: 609.35,
  LEGAL_TEXT_TOP: 689.74,

  INPUT_LEFT: 41.11,
  INPUT_WIDTH: 411.1,
  INPUT_HEIGHT: 81.31,
  BUTTON_HEIGHT: 62.54,
  LOGO_WIDTH: 266.14,
  LOGO_HEIGHT: 45.68,
  LOGO_LEFT: 111.45,
  ICON_SIZE: 42.02,
  ICON_SEPARATION: 54, // Separation (space) between icons
  GOOGLE_POS_X: 119.68,
  LOGIN_LINK_LEFT: 399,
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

export const getFormStyles = (theme: Theme) => ({
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

const getAbsoluteElementBase = (
  topPx: number,
  leftPx: number,
  widthPx: number,
  heightPx: number,
  theme: Theme,
  zIndex: number = 2
) => ({
  position: 'absolute',
  left: percentW(leftPx),
  top: percentH(topPx),
  width: percentW(widthPx),
  height: percentH(heightPx),
  zIndex: zIndex,
  backgroundColor: theme.palette.grey[300],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
});

export const getLogoStyles = (theme: Theme) => ({
  ...getAbsoluteElementBase(
    GEOMETRY_PX.LOGO_TOP,
    GEOMETRY_PX.LOGO_LEFT,
    GEOMETRY_PX.LOGO_WIDTH,
    GEOMETRY_PX.LOGO_HEIGHT,
    theme
  ),
  backgroundColor: theme.palette.grey[200],
});

export const getInputStyles = (topPx: number, theme: Theme) => ({
  ...getAbsoluteElementBase(
    topPx,
    GEOMETRY_PX.INPUT_LEFT,
    GEOMETRY_PX.INPUT_WIDTH,
    GEOMETRY_PX.INPUT_HEIGHT,
    theme
  ),
});

export const getButtonStyles = (theme: Theme) => ({
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
  ...fontVw(16.44, 16.44, theme),
});

export const haveAccountTextStyles = (theme: Theme) => ({
  position: 'absolute',
  left: percentW(GEOMETRY_PX.INPUT_LEFT),
  top: percentH(GEOMETRY_PX.LOGIN_LINK_TOP),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.secondary,
  zIndex: 1,
  ...fontVw(16.4442, 16.4442, theme), // Scaled
});

export const loginLinkStyles = (theme: Theme) => ({
  position: 'absolute',
  left: percentW(GEOMETRY_PX.LOGIN_LINK_LEFT),
  top: percentH(GEOMETRY_PX.LOGIN_LINK_TOP),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.link.purple,
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  ...fontVw(16.4442, 16.4442, theme),
});

export const signupWithTextStyles = (theme: Theme) => ({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  top: percentH(GEOMETRY_PX.SIGNUP_WITH_TOP),
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
  top: percentH(GEOMETRY_PX.ICONS_TOP),
  width: percentW(GEOMETRY_PX.ICON_SIZE),
  height: percentH(GEOMETRY_PX.ICON_SIZE),
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': { transform: 'scale(1.1)' },
});

export const legalTextStyles = (theme: Theme) => ({
  position: 'absolute',
  left: percentW(GEOMETRY_PX.INPUT_LEFT),
  top: percentH(GEOMETRY_PX.LEGAL_TEXT_TOP),
  width: percentW(GEOMETRY_PX.LEGAL_TEXT_WIDTH),
  fontFamily: theme.typography.fontFamily,
  lineHeight: 1.2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...fontVw(14.617, 14.617, theme),
});

export const legalLinkStyles = (theme: Theme) => ({
  color: theme.palette.link.blue,
  textDecoration: 'underline',
});
