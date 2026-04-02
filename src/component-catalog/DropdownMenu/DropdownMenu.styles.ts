
import type { SxProps, Theme } from "@mui/material/styles";

export const dropdownMenuPaperSx = (
  mobileFullWidth = false,
): SxProps<Theme> => ({
  mt: 1,
  minWidth: (theme) => theme.spacing(28),
  width: mobileFullWidth ? "min(calc(100vw - 2rem), 24rem)" : "auto",
  maxWidth: mobileFullWidth
    ? "min(calc(100vw - 2rem), 24rem)"
    : "min(calc(100vw - 2rem), 22rem)",
  maxHeight: "min(calc(100vh - 2rem), 24rem)",
  borderWidth: "0.0625rem",
  borderStyle: "solid",
  borderColor: "var(--border)",
  borderRadius: "var(--radius)",
  backgroundColor: "var(--popover)",
  color: "var(--popover-foreground)",
  boxShadow: (theme) => theme.shadows[3],
  overflow: "auto",
});

export const dropdownSubmenuPaperSx: SxProps<Theme> = {
  ml: 0.5,
  minWidth: (theme) => theme.spacing(26),
  maxWidth: "min(calc(100vw - 2rem), 20rem)",
  maxHeight: "min(calc(100vh - 2rem), 22rem)",
  borderWidth: "0.0625rem",
  borderStyle: "solid",
  borderColor: "var(--border)",
  borderRadius: "var(--radius)",
  backgroundColor: "var(--popover)",
  color: "var(--popover-foreground)",
  boxShadow: (theme) => theme.shadows[3],
  overflow: "auto",
};

export const dropdownMenuListSx: SxProps<Theme> = {
  py: 0.5,
};

export const dropdownDividerSx: SxProps<Theme> = {
  my: 0.5,
};

export const dropdownMenuItemSx: SxProps<Theme> = {
  minHeight: { xs: "2.75rem", sm: "2.5rem" },
  px: 1.5,
  py: 1,
  gap: 1,
  borderRadius: "var(--radius-sm)",
  mx: 0.5,
  my: 0.25,
  color: "var(--foreground)",
  "&:hover": {
    backgroundColor: "var(--accent)",
  },
  "&.Mui-selected": {
    backgroundColor: "var(--accent)",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "var(--accent)",
  },
  "&.Mui-disabled": {
    opacity: 0.5,
  },
};

export const dropdownListItemIconSx: SxProps<Theme> = {
  minWidth: (theme) => theme.spacing(4),
  color: "inherit",
};

export const dropdownLabelSx: SxProps<Theme> = {
  fontWeight: "var(--font-weight-medium)",
  color: "inherit",
};

export const dropdownShortcutSx: SxProps<Theme> = {
  ml: 2,
  color: "var(--muted-foreground)",
  whiteSpace: "nowrap",
};

export const dropdownIndicatorSx: SxProps<Theme> = {
  display: "inline-flex",
  alignItems: "center",
  color: "var(--muted-foreground)",
  ml: 1,
};

export const dropdownPlaceholderIconSx: SxProps<Theme> = {
  width: "1rem",
  height: "1rem",
};