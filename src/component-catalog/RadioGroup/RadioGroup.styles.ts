import type { SxProps, Theme } from "@mui/material";

/** Minimum tap target height for accessibility (44px = 2.75rem) */
export const radioOptionStyles: SxProps<Theme> = {
  minHeight: "2.75rem",
  "& .MuiTypography-root": {
    color: "text.primary",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1,
  },
};


export const formControlStyles: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 2,
};

export const formLabelStyles: SxProps<Theme> = {
  color: "text.primary",
  fontFamily: "Inter, sans-serif",
  fontSize: "1.125rem",
  fontWeight: 500,
  lineHeight: 1.5,
  "&.Mui-focused": {
    color: "text.primary",
  },
};

export const radioGroupStyles = (
  direction: "row" | "column"
): SxProps<Theme> => ({
  flexDirection: {
    xs: "column",
    sm: direction,
  },
  flexWrap: "wrap",
  gap: 0,
});

/** Custom unchecked radio icon */
export const customIconStyles: React.CSSProperties = {
  width: 16,
  height: 16,
  borderRadius: "50%",
  border: "0px solid rgba(0, 0, 0, 0.25)",

  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

/** Custom checked radio icon outer ring */
export const customCheckedIconStyles: React.CSSProperties = {
  width: 16,
  height: 16,
  borderRadius: "50%",
  border: "0px solid #030213",
  background: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

/** Inner dot for checked icon */
export const customCheckedDotStyles: React.CSSProperties = {
  width: 8,
  height: 8,
  borderRadius: "50%",
  backgroundColor: "#030213",
};
