import { styled } from "@mui/material/styles";

export const DonutContainer = styled("div")<{ size: number }>(
  ({size}) => ({
    position: "relative",
    width: size,
    height: size,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);

export const DonutText = styled("div")({
  fontFamily: "Poppins, sans-serif",
  position: "absolute",
  fontWeight: "500",
  fontSize: "8px",
  color: "#ffffffff",
  userSelect: "none",
});
