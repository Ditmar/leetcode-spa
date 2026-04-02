import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";

export const StyledCard = styled(MuiCard)(({ theme }) => ({
  width: "100%",

  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
  },
}));

export const VerticalCard = styled(MuiCard)(() => ({
  width: "100%",
}));