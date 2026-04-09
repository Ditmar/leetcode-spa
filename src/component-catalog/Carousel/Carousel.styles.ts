import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const CarouselContainer = styled(Box)({
  width: "100%",
  overflow: "hidden",
  position: "relative",
});

export const SlidesContainer = styled(Box)({
  display: "flex",
  transition: "transform 0.3s ease",
});

export const Slide = styled(Box)({
  minWidth: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});