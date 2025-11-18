import { type Theme } from '@mui/material';

// --- DESKTOP GEOMETRY ---
const GEOMETRY_PX_DESKTOP = {
  PAGE_WIDTH: 488.76,
  PAGE_HEIGHT: 761,
  BORDER_RADIUS_REM: '2.28375rem',
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
  ICON_SEPARATION: 54,
  GOOGLE_POS_X: 119.68,
  LOGIN_LINK_LEFT: 399,
  LEGAL_TEXT_WIDTH: 405.62,
  TEXT_HAVE_ACCOUNT_HEIGHT: 20,
  TEXT_LOGIN_HEIGHT: 20,
  TEXT_SIGNUP_WITH_HEIGHT: 18,
  TEXT_LEGAL_HEIGHT: 36,
  TEXT_HAVE_ACCOUNT_WIDTH: 148,
  TEXT_LOGIN_WIDTH: 48,
  TEXT_SIGNUP_WITH_WIDTH: 159,
};

// --- MOBILE GEOMETRY ---
const GEOMETRY_PX_MOBILE = {
  PAGE_WIDTH: 342,
  PAGE_HEIGHT: 526,
  BORDER_RADIUS_REM: '1.5794rem',
  LOGO_TOP: 32.14,
  LOGO_LEFT: 77.99,
  LOGO_WIDTH: 186.7,
  LOGO_HEIGHT: 31.59,
  EMAIL_INPUT_TOP: 91.52,
  USERNAME_INPUT_TOP: 162.91,
  PASSWORD_INPUT_TOP: 234.3,
  INPUT_LEFT: 28.77,
  INPUT_WIDTH: 287.66,
  INPUT_HEIGHT: 56.23,
  BUTTON_TOP: 306,
  BUTTON_LEFT: 28.77,
  BUTTON_WIDTH: 287,
  BUTTON_HEIGHT: 43.27,
  LOGIN_LINK_TOP: 364,
  SIGNUP_WITH_TOP: 402,
  ICONS_TOP: 428,
  LEGAL_TEXT_TOP: 484,
  ICON_SIZE: 29,
  ICON_SEPARATION: 43.23,
  GOOGLE_POS_X: 84,
  TEXT_HAVE_ACCOUNT_LEFT: 29,
  LOGIN_LINK_LEFT: 279,
  LEGAL_TEXT_LEFT: 29,
  LEGAL_TEXT_WIDTH: 284,
  TEXT_HAVE_ACCOUNT_HEIGHT: 14,
  TEXT_LOGIN_HEIGHT: 14,
  TEXT_SIGNUP_WITH_HEIGHT: 12,
  TEXT_LEGAL_HEIGHT: 24,
  TEXT_HAVE_ACCOUNT_WIDTH: 103,
  TEXT_LOGIN_WIDTH: 34,
  TEXT_SIGNUP_WITH_WIDTH: 111,
};

// --- Helper Functions ---
const percentW = (px: number, pageWidth: number) => (px / pageWidth) * 100 + '%';
const percentH = (px: number, pageHeight: number) => (px / pageHeight) * 100 + '%';

// --- RESPONSIVE STYLES ---

export const getPageContainerStyles = (theme: Theme) => ({
  // --- Base Styles (Mobile) ---
  position: 'relative',
  width: '100%',
  maxWidth: GEOMETRY_PX_MOBILE.PAGE_WIDTH,
  aspectRatio: `${GEOMETRY_PX_MOBILE.PAGE_WIDTH} / ${GEOMETRY_PX_MOBILE.PAGE_HEIGHT}`,
  height: 'auto',
  margin: 'auto',
  boxSizing: 'border-box',
  zIndex: 1,
  borderRadius: GEOMETRY_PX_MOBILE.BORDER_RADIUS_REM,
  overflow: 'hidden',
  background: theme.palette.background.paper,

  // --- Override for Desktop ---
  [theme.breakpoints.up('sm')]: {
    maxWidth: GEOMETRY_PX_DESKTOP.PAGE_WIDTH,
    aspectRatio: `${GEOMETRY_PX_DESKTOP.PAGE_WIDTH} / ${GEOMETRY_PX_DESKTOP.PAGE_HEIGHT}`,
    borderRadius: GEOMETRY_PX_DESKTOP.BORDER_RADIUS_REM,
  },
});

export const getFormStyles = (theme: Theme) => ({
  // --- Base Styles (Mobile) ---
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 1,
  textAlign: 'left',
  top: 0,
  left: 0,
  borderRadius: GEOMETRY_PX_MOBILE.BORDER_RADIUS_REM,
  overflow: 'hidden',

  // --- Override for Desktop ---
  [theme.breakpoints.up('sm')]: {
    borderRadius: GEOMETRY_PX_DESKTOP.BORDER_RADIUS_REM,
  },
});

const getAbsoluteElementBase = (
  mobileStyles: object,
  desktopStyles: object,
  theme: Theme,
  zIndex: number = 2
) => ({
  // --- Base Styles (Mobile) ---
  position: 'absolute',
  zIndex: zIndex,
  backgroundColor: theme.palette.grey[300],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  ...mobileStyles,

  // --- Override for Desktop ---
  [theme.breakpoints.up('sm')]: {
    ...desktopStyles,
  },
});

// --- Components (Logo, Input, Button) ---
export const getLogoStyles = (theme: Theme) =>
  getAbsoluteElementBase(
    {
      // Mobile
      left: percentW(GEOMETRY_PX_MOBILE.LOGO_LEFT, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
      top: percentH(GEOMETRY_PX_MOBILE.LOGO_TOP, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
      width: percentW(GEOMETRY_PX_MOBILE.LOGO_WIDTH, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
      height: percentH(GEOMETRY_PX_MOBILE.LOGO_HEIGHT, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
      backgroundColor: theme.palette.grey[200],
    },
    {
      // Desktop
      left: percentW(GEOMETRY_PX_DESKTOP.LOGO_LEFT, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
      top: percentH(GEOMETRY_PX_DESKTOP.LOGO_TOP, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
      width: percentW(GEOMETRY_PX_DESKTOP.LOGO_WIDTH, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
      height: percentH(GEOMETRY_PX_DESKTOP.LOGO_HEIGHT, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
    },
    theme
  );

const createInputStyles = (mobileTop: number, desktopTop: number) => (theme: Theme) =>
  getAbsoluteElementBase(
    {
      // Mobile
      left: percentW(GEOMETRY_PX_MOBILE.INPUT_LEFT, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
      top: percentH(mobileTop, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
      width: percentW(GEOMETRY_PX_MOBILE.INPUT_WIDTH, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
      height: percentH(GEOMETRY_PX_MOBILE.INPUT_HEIGHT, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
    },
    {
      // Desktop
      left: percentW(GEOMETRY_PX_DESKTOP.INPUT_LEFT, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
      top: percentH(desktopTop, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
      width: percentW(GEOMETRY_PX_DESKTOP.INPUT_WIDTH, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
      height: percentH(GEOMETRY_PX_DESKTOP.INPUT_HEIGHT, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
    },
    theme
  );

export const getEmailInputStyles = createInputStyles(
  GEOMETRY_PX_MOBILE.EMAIL_INPUT_TOP,
  GEOMETRY_PX_DESKTOP.EMAIL_INPUT_TOP
);
export const getUsernameInputStyles = createInputStyles(
  GEOMETRY_PX_MOBILE.USERNAME_INPUT_TOP,
  GEOMETRY_PX_DESKTOP.USERNAME_INPUT_TOP
);
export const getPasswordInputStyles = createInputStyles(
  GEOMETRY_PX_MOBILE.PASSWORD_INPUT_TOP,
  GEOMETRY_PX_DESKTOP.PASSWORD_INPUT_TOP
);

export const getButtonStyles = (theme: Theme) =>
  getAbsoluteElementBase(
    {
      // Mobile
      left: percentW(GEOMETRY_PX_MOBILE.BUTTON_LEFT, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
      top: percentH(GEOMETRY_PX_MOBILE.BUTTON_TOP, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
      width: percentW(GEOMETRY_PX_MOBILE.BUTTON_WIDTH, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
      height: percentH(GEOMETRY_PX_MOBILE.BUTTON_HEIGHT, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
      textTransform: 'none',
      fontSize: theme.typography.pxToRem(15.1626),
      fontWeight: 400,
      backgroundColor: theme.palette.grey[500],
      color: theme.palette.common.white,
      cursor: 'pointer',
    },
    {
      // Desktop
      left: percentW(GEOMETRY_PX_DESKTOP.INPUT_LEFT, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
      top: percentH(GEOMETRY_PX_DESKTOP.BUTTON_TOP, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
      width: percentW(GEOMETRY_PX_DESKTOP.INPUT_WIDTH, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
      height: percentH(GEOMETRY_PX_DESKTOP.BUTTON_HEIGHT, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
      textTransform: 'none',
      fontSize: theme.typography.pxToRem(21.93),
      fontWeight: 400,
    },
    theme
  );

// --- Text Styles (Responsive) ---

export const haveAccountTextStyles = (theme: Theme) => ({
  // --- Base (Mobile) ---
  position: 'absolute',
  left: percentW(GEOMETRY_PX_MOBILE.TEXT_HAVE_ACCOUNT_LEFT, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
  top: percentH(GEOMETRY_PX_MOBILE.LOGIN_LINK_TOP, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.secondary,
  zIndex: 1,
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(11.372),
  height: percentH(GEOMETRY_PX_MOBILE.TEXT_HAVE_ACCOUNT_HEIGHT, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
  width: percentW(GEOMETRY_PX_MOBILE.TEXT_HAVE_ACCOUNT_WIDTH, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  whiteSpace: 'nowrap',

  // --- Override (Desktop) ---
  [theme.breakpoints.up('sm')]: {
    left: percentW(GEOMETRY_PX_DESKTOP.INPUT_LEFT, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
    top: percentH(GEOMETRY_PX_DESKTOP.LOGIN_LINK_TOP, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
    fontSize: theme.typography.pxToRem(16.4442),
    height: percentH(GEOMETRY_PX_DESKTOP.TEXT_HAVE_ACCOUNT_HEIGHT, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
    width: percentW(GEOMETRY_PX_DESKTOP.TEXT_HAVE_ACCOUNT_WIDTH, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
  },
});

export const loginLinkStyles = (theme: Theme) => ({
  // --- Base (Mobile) ---
  position: 'absolute',
  left: percentW(GEOMETRY_PX_MOBILE.LOGIN_LINK_LEFT, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
  top: percentH(GEOMETRY_PX_MOBILE.LOGIN_LINK_TOP, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.link.purple,
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': { textDecoration: 'underline' },
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(11.372),
  height: percentH(GEOMETRY_PX_MOBILE.TEXT_LOGIN_HEIGHT, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
  width: percentW(GEOMETRY_PX_MOBILE.TEXT_LOGIN_WIDTH, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  whiteSpace: 'nowrap',

  // --- Override (Desktop) ---
  [theme.breakpoints.up('sm')]: {
    left: percentW(GEOMETRY_PX_DESKTOP.LOGIN_LINK_LEFT, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
    top: percentH(GEOMETRY_PX_DESKTOP.LOGIN_LINK_TOP, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
    fontSize: theme.typography.pxToRem(16.4442),
    height: percentH(GEOMETRY_PX_DESKTOP.TEXT_LOGIN_HEIGHT, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
    width: percentW(GEOMETRY_PX_DESKTOP.TEXT_LOGIN_WIDTH, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
  },
});

export const signupWithTextStyles = (theme: Theme) => ({
  // --- Base (Mobile) ---
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  top: percentH(GEOMETRY_PX_MOBILE.SIGNUP_WITH_TOP, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.secondary,
  whiteSpace: 'nowrap',
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(10.1084),
  height: percentH(GEOMETRY_PX_MOBILE.TEXT_SIGNUP_WITH_HEIGHT, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
  width: percentW(GEOMETRY_PX_MOBILE.TEXT_SIGNUP_WITH_WIDTH, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  // --- Override (Desktop) ---
  [theme.breakpoints.up('sm')]: {
    top: percentH(GEOMETRY_PX_DESKTOP.SIGNUP_WITH_TOP, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
    fontSize: theme.typography.pxToRem(14.617),
    height: percentH(GEOMETRY_PX_DESKTOP.TEXT_SIGNUP_WITH_HEIGHT, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
    width: percentW(GEOMETRY_PX_DESKTOP.TEXT_SIGNUP_WITH_WIDTH, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
  },
});

type IconGeometry = {
  GOOGLE_POS_X: number;
  ICON_SIZE: number;
  ICON_SEPARATION: number;
};

const calculateIconPosXPx = (iconIndex: 0 | 1 | 2, geometry: IconGeometry) => {
  const { GOOGLE_POS_X, ICON_SIZE, ICON_SEPARATION } = geometry;
  return GOOGLE_POS_X + iconIndex * (ICON_SIZE + ICON_SEPARATION);
};

export const getSocialIconStyles = (iconIndex: 0 | 1 | 2, theme: Theme) => ({
  // --- Base (Mobile) ---
  position: 'absolute',
  left: percentW(calculateIconPosXPx(iconIndex, GEOMETRY_PX_MOBILE), GEOMETRY_PX_MOBILE.PAGE_WIDTH),
  top: percentH(GEOMETRY_PX_MOBILE.ICONS_TOP, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
  width: percentW(GEOMETRY_PX_MOBILE.ICON_SIZE, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
  height: percentH(GEOMETRY_PX_MOBILE.ICON_SIZE, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': { transform: 'scale(1.1)' },

  // --- Override (Desktop) ---
  [theme.breakpoints.up('sm')]: {
    left: percentW(
      calculateIconPosXPx(iconIndex, GEOMETRY_PX_DESKTOP),
      GEOMETRY_PX_DESKTOP.PAGE_WIDTH
    ),
    top: percentH(GEOMETRY_PX_DESKTOP.ICONS_TOP, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
    width: percentW(GEOMETRY_PX_DESKTOP.ICON_SIZE, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
    height: percentH(GEOMETRY_PX_DESKTOP.ICON_SIZE, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
  },
});

export const legalTextStyles = (theme: Theme) => ({
  // --- Base (Mobile) ---
  position: 'absolute',
  left: percentW(GEOMETRY_PX_MOBILE.LEGAL_TEXT_LEFT, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
  top: percentH(GEOMETRY_PX_MOBILE.LEGAL_TEXT_TOP, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
  width: percentW(GEOMETRY_PX_MOBILE.LEGAL_TEXT_WIDTH, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
  fontFamily: theme.typography.fontFamily,
  lineHeight: 1.2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(10.1084),
  height: percentH(GEOMETRY_PX_MOBILE.TEXT_LEGAL_HEIGHT, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),

  // --- Override (Desktop) ---
  [theme.breakpoints.up('sm')]: {
    left: percentW(GEOMETRY_PX_DESKTOP.INPUT_LEFT, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
    top: percentH(GEOMETRY_PX_DESKTOP.LEGAL_TEXT_TOP, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
    width: percentW(GEOMETRY_PX_DESKTOP.LEGAL_TEXT_WIDTH, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
    fontSize: theme.typography.pxToRem(14.617),
    height: percentH(GEOMETRY_PX_DESKTOP.TEXT_LEGAL_HEIGHT, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
  },
});

export const legalLinkStyles = (theme: Theme) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'underline',
});

const getErrorTextStyles = (mobileTopPx: number, desktopTopPx: number) => (theme: Theme) => ({
  position: 'absolute',
  // Base position (Mobile)
  top: percentH(mobileTopPx, GEOMETRY_PX_MOBILE.PAGE_HEIGHT),
  left: percentW(GEOMETRY_PX_MOBILE.INPUT_LEFT, GEOMETRY_PX_MOBILE.PAGE_WIDTH),
  color: theme.palette.error.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(10),
  lineHeight: 1.2,

  // Override for Desktop
  [theme.breakpoints.up('sm')]: {
    top: percentH(desktopTopPx, GEOMETRY_PX_DESKTOP.PAGE_HEIGHT),
    left: percentW(GEOMETRY_PX_DESKTOP.INPUT_LEFT, GEOMETRY_PX_DESKTOP.PAGE_WIDTH),
    fontSize: theme.typography.pxToRem(12),
  },
});

const MOBILE_GAP = 4;
const DESKTOP_GAP = 6;

export const getEmailErrorStyles = getErrorTextStyles(
  GEOMETRY_PX_MOBILE.EMAIL_INPUT_TOP + GEOMETRY_PX_MOBILE.INPUT_HEIGHT + MOBILE_GAP,
  GEOMETRY_PX_DESKTOP.EMAIL_INPUT_TOP + GEOMETRY_PX_DESKTOP.INPUT_HEIGHT + DESKTOP_GAP
);

export const getUsernameErrorStyles = getErrorTextStyles(
  GEOMETRY_PX_MOBILE.USERNAME_INPUT_TOP + GEOMETRY_PX_MOBILE.INPUT_HEIGHT + MOBILE_GAP,
  GEOMETRY_PX_DESKTOP.USERNAME_INPUT_TOP + GEOMETRY_PX_DESKTOP.INPUT_HEIGHT + DESKTOP_GAP
);

export const getPasswordErrorStyles = getErrorTextStyles(
  GEOMETRY_PX_MOBILE.PASSWORD_INPUT_TOP + GEOMETRY_PX_MOBILE.INPUT_HEIGHT + MOBILE_GAP,
  GEOMETRY_PX_DESKTOP.PASSWORD_INPUT_TOP + GEOMETRY_PX_DESKTOP.INPUT_HEIGHT + DESKTOP_GAP
);
