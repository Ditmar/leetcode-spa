import { styled } from "@mui/material/styles";
import { Box, FormControlLabel, Radio, Typography, FormControl } from "@mui/material";

/**
 * Contenedor principal de la pregunta.
 * Usa el fondo y espaciado definidos en el theme.
 */
export const QuestionContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    padding: theme.spacing(5),
    backgroundColor: theme.palette.background.paper, // ✅ usa el color del theme
    width: "100%",
    margin: 0,
    boxSizing: "border-box",
}));

/**
 * Texto de la pregunta (legend).
 * Usa la tipografía del theme para mantener coherencia global.
 */
export const QuestionText = styled(Typography)(({ theme }) => ({
    ...theme.typography.subtitle1, // ✅ usa variante del theme
    fontWeight: 600,
    color: theme.palette.text.primary,
    lineHeight: 1.3,
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(1),
    textAlign: "left",
    whiteSpace: "pre-wrap",
}));

/**
 * Etiqueta de cada opción.
 * Aplica estilos coherentes con body1 desde el theme.
 */
export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    margin: 0,
    alignItems: "center",
    padding: theme.spacing(1, 1.5),
    cursor: "pointer",
    transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shortest,
    }),
    "& .MuiFormControlLabel-label": {
        ...theme.typography.body1, // ✅ usa fuente del theme
        fontWeight: 600,
        color: theme.palette.text.secondary,
    },
}));

/**
 * Radio personalizado para las opciones.
 * Usa tokens del theme y tamaños consistentes.
 */
export const StyledRadio = styled(Radio)(({ theme }) => ({
    color: theme.palette.text.secondary,
    "&.Mui-checked": {
        color: theme.palette.primary.main,
    },
    "& .MuiSvgIcon-root": {
        width: theme.spacing(4), // ✅ valor entero
        height: theme.spacing(4),
    },
}));

/**
 * Contenedor de opciones.
 * Pasa a dos columnas en pantallas medianas.
 */
export const OptionsGrid = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
}));

/**
 * Número de pregunta.
 * Separa visualmente el índice de la pregunta.
 */
export const QuestionNumber = styled("span")(({ theme }) => ({
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

/**
 * FormControl estilizado.
 * Mantiene padding y márgenes controlados por el theme.
 */
export const StyledFormControl = styled(FormControl)(({ theme }) => ({
    width: "100%",
    margin: 0,
    padding: 0,
}));