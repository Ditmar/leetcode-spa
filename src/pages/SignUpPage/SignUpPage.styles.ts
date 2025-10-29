// src/pages/SignUpPage/SignUpPage.styles.ts

// ✅ No importamos NINGÚN tipo de MUI (Theme, SxProps, etc.) para evitar el error de Storybook/Vite.

// Helper: Convierte px a la unidad numérica de theme.spacing (N/8)
const themeUnit = (px: number) => px / 8;

// --- 1. CONSTANTES DE GEOMETRÍA (UNIDADES NUMÉRICAS) ---
const GEOMETRY_UNITS = {
  // Contenedor principal
  PAGE_WIDTH: themeUnit(488.76),
  PAGE_HEIGHT: themeUnit(761),
  PAGE_BORDER_RADIUS: themeUnit(36.5426),

  // Posiciones TOP y X
  LOGO_TOP: themeUnit(36.54),
  EMAIL_INPUT_TOP: themeUnit(122.42),
  USERNAME_INPUT_TOP: themeUnit(225.65),
  PASSWORD_INPUT_TOP: themeUnit(328.88),
  BUTTON_TOP: themeUnit(432.12),
  LOGIN_LINK_TOP: themeUnit(517.08), 
  SIGNUP_WITH_TOP: themeUnit(570.98),
  ICONS_TOP: themeUnit(609.35),
  LEGAL_TEXT_TOP: themeUnit(689.74),

  INPUT_LEFT: themeUnit(41.11),
  INPUT_WIDTH: themeUnit(411.1),
  INPUT_HEIGHT: themeUnit(81.31),
  BUTTON_HEIGHT: themeUnit(62.54),
  LOGO_WIDTH: themeUnit(266.14),
  LOGO_HEIGHT: themeUnit(45.68),
  LOGO_LEFT: themeUnit(111.45),
  ICON_SIZE: themeUnit(42.02),
  ICON_SEPARATION: themeUnit(54), 
  GOOGLE_POS_X: themeUnit(119.68),
  LOGIN_LINK_LEFT: themeUnit(399),
  LEGAL_TEXT_WIDTH: themeUnit(405.62),
};


// -------------------------------------------------------------
// ✅ Funciones de estilo: Aceptan 'theme' (sin tipar) y devuelven el objeto de estilo
// -------------------------------------------------------------

// 2.1 Estilos del Contenedor Principal (Formulario Blanco)
// @ts-ignore: Omitimos el tipado explícito para evitar el error de Storybook
export const getPageContainerStyles = (theme: any) => ({
  position: "relative",
  width: theme.spacing(GEOMETRY_UNITS.PAGE_WIDTH),
  height: theme.spacing(GEOMETRY_UNITS.PAGE_HEIGHT),
  margin: "auto", 
  background: theme.palette.background.paper, 
  borderRadius: theme.spacing(GEOMETRY_UNITS.PAGE_BORDER_RADIUS),
  boxSizing: "border-box",
  zIndex: 1,
  overflow: 'hidden',
});

// 2.2 Estilos de Elementos Posicionados Absolutamente
const getAbsoluteElementBase = (topUnit: number, leftUnit: number, widthUnit: number, heightUnit: number, theme: any, zIndex: number = 2) => ({
  position: "absolute",
  left: theme.spacing(leftUnit),
  top: theme.spacing(topUnit),
  width: theme.spacing(widthUnit),
  height: theme.spacing(heightUnit),
  zIndex: zIndex,
  backgroundColor: theme.palette.grey[300], 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
});

// Estilos Específicos
export const getLogoStyles = (theme: any) => getAbsoluteElementBase(
    GEOMETRY_UNITS.LOGO_TOP,
    GEOMETRY_UNITS.LOGO_LEFT,
    GEOMETRY_UNITS.LOGO_WIDTH,
    GEOMETRY_UNITS.LOGO_HEIGHT,
    theme
);

export const getInputStyles = (topUnit: number, theme: any) => getAbsoluteElementBase(
    topUnit,
    GEOMETRY_UNITS.INPUT_LEFT,
    GEOMETRY_UNITS.INPUT_WIDTH,
    GEOMETRY_UNITS.INPUT_HEIGHT,
    theme
);

export const getButtonStyles = (theme: any) => ({
    ...getAbsoluteElementBase(
        GEOMETRY_UNITS.BUTTON_TOP,
        GEOMETRY_UNITS.INPUT_LEFT,
        GEOMETRY_UNITS.INPUT_WIDTH,
        GEOMETRY_UNITS.BUTTON_HEIGHT,
        theme
    ),
    backgroundColor: theme.palette.grey[500],
    color: theme.palette.common.white,
    cursor: 'pointer',
    zIndex: 2,
});

// 2.3 Estilos de Texto y Enlaces Inferiores
export const haveAccountTextStyles = (theme: any) => ({
    position: "absolute",
    left: theme.spacing(GEOMETRY_UNITS.INPUT_LEFT), 
    top: theme.spacing(GEOMETRY_UNITS.LOGIN_LINK_TOP),
    fontFamily: "Syne, sans-serif",
    fontSize: theme.typography.pxToRem(16.4442), 
    color: theme.palette.text.secondary, 
    zIndex: 1,
});

export const loginLinkStyles = (theme: any) => ({
    position: "absolute",
    left: theme.spacing(GEOMETRY_UNITS.LOGIN_LINK_LEFT), 
    top: theme.spacing(GEOMETRY_UNITS.LOGIN_LINK_TOP),
    fontFamily: "Syne, sans-serif",
    fontSize: theme.typography.pxToRem(16.4442),
    color: "#B441EB", 
    cursor: "pointer",
    textDecoration: "none",
    '&:hover': {
        textDecoration: "underline",
    }
});

export const signupWithTextStyles = (theme: any) => ({
    position: "absolute",
    left: '50%',
    transform: 'translateX(-50%)', 
    top: theme.spacing(GEOMETRY_UNITS.SIGNUP_WITH_TOP),
    fontFamily: "Syne, sans-serif",
    fontSize: theme.typography.pxToRem(14.617),
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap'
});

// 2.4 Estilos de Iconos Sociales
const calculateIconPosX = (iconIndex: 0 | 1 | 2): number => {
    const { GOOGLE_POS_X, ICON_SIZE, ICON_SEPARATION } = GEOMETRY_UNITS;
    return GOOGLE_POS_X + (iconIndex * (ICON_SIZE + ICON_SEPARATION));
};

export const getSocialIconStyles = (iconIndex: 0 | 1 | 2, theme: any) => ({
    position: "absolute",
    left: theme.spacing(calculateIconPosX(iconIndex)),
    top: theme.spacing(GEOMETRY_UNITS.ICONS_TOP),
    width: theme.spacing(GEOMETRY_UNITS.ICON_SIZE),
    height: theme.spacing(GEOMETRY_UNITS.ICON_SIZE),
    cursor: "pointer",
    transition: "transform 0.2s ease",
    '&:hover': { transform: "scale(1.1)" }
});


// 2.5 Estilos de Texto Legal
export const legalTextStyles = (theme: any) => ({
    position: "absolute",
    left: theme.spacing(GEOMETRY_UNITS.INPUT_LEFT),
    top: theme.spacing(GEOMETRY_UNITS.LEGAL_TEXT_TOP),
    width: theme.spacing(GEOMETRY_UNITS.LEGAL_TEXT_WIDTH),
    fontFamily: "Syne, sans-serif",
    fontSize: theme.typography.pxToRem(14.617),
    lineHeight: theme.typography.pxToRem(18),
    textAlign: "center",
    color: theme.palette.text.secondary,
});

export const legalLinkStyles = { // No necesita 'theme'
    color: "#4285F4", 
    textDecoration: "underline",
};