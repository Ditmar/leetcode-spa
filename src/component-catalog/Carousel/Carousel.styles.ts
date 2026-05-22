import { Box, IconButton, styled } from "@mui/material";

export const CarouselContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "900px",
  margin: "0 auto",
  backgroundColor: "#f5f5f5",
  borderRadius: "16px",
  padding: theme.spacing(6, 4),
  position: "relative",
  overflow: "hidden",
}));

export const CarouselTrack = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}));

export const CarouselSlide = styled(Box)(({ theme }) => ({
  width: "240px",
  height: "240px",
  borderRadius: "16px",
  backgroundColor: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  boxShadow: theme.shadows[1],
  transition: "all 0.3s ease",

  [theme.breakpoints.down("sm")]: {
    width: "180px",
    height: "180px",
  },
}));

export const CarouselButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "#ffffff",
  boxShadow: theme.shadows[2],
  zIndex: 2,

  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
}));

export const LeftButton = styled(CarouselButton)(() => ({
  left: "24%",
}));

export const RightButton = styled(CarouselButton)(() => ({
  right: "24%",
}));