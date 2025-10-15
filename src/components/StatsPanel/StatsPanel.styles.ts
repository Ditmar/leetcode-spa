
import { styled } from "@mui/material/styles";

export const CardContainer = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px",
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    width: "260px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
}));

export const StatItem = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: "14px",
});

export const IconWrapper = styled("div")(({ theme }) => ({
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.action.hover,
    opacity: 0.9,
}));

export const StatIcon = styled("div")<{ color: string }>(({ color }) => ({
    fontSize: "28px",
    color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const StatValue = styled("div")(({ theme }) => ({
    fontSize: "22px",
    fontWeight: 700,
    color: theme.palette.text.primary,
}));

export const StatText = styled("div")(({ theme }) => ({
    fontSize: "14px",
    color: theme.palette.text.secondary,
}));

