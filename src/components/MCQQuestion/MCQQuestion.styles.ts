import { styled } from "@mui/material/styles";
import { Box, FormControlLabel, Radio, Typography, FormControl } from "@mui/material";
import type { FormControlProps } from "@mui/material";

export const QuestionContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    padding: theme.spacing(5),
    backgroundColor: "#F1F3F9",
    width: "100%",
    margin: 0,
    boxSizing: "border-box",
}));

export const QuestionText = styled(Typography)(({ theme }) => ({
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    color: theme.palette.text.primary,
    lineHeight: 1.3,
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(1),
    textAlign: "left",
    whiteSpace: "pre-wrap",
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    margin: 0,
    alignItems: "center",
    padding: theme.spacing(0.5, 1),
    transition: "background-color 0.2s ease",
    "& .MuiFormControlLabel-label": {
        fontFamily: "'Syne', sans-serif",
        fontWeight: 600,
        color: theme.palette.text.secondary,
    },
}));

export const StyledRadio = styled(Radio)(({ theme }) => ({
    color: theme.palette.text.secondary,
    "&.Mui-checked": {
        color: theme.palette.text.secondary,
    },
    "& .MuiSvgIcon-root": {
        width: theme.spacing(3.75),
        height: theme.spacing(3.75),
    },
}));

export const OptionsGrid = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(1.5),
    [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
}));

export const QuestionNumber = styled("span")(({ theme }) => ({
    marginRight: theme.spacing(0.5),
}));

export const StyledFormControl = styled(FormControl)<FormControlProps>(() => ({
    width: "100%",
    margin: 0,
    padding: 0,
}));
