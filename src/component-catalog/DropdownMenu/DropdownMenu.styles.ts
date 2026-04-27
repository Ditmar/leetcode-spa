import type { SxProps, Theme } from '@mui/material/styles';

const VIEWPORT_OFFSET_SPACING = 4;
const MENU_MAX_WIDTH_SPACING = 48;
const MENU_DEFAULT_MAX_WIDTH_SPACING = 44;
const MENU_MAX_HEIGHT_SPACING = 48;
const SUBMENU_MAX_WIDTH_SPACING = 40;
const SUBMENU_MAX_HEIGHT_SPACING = 44;
const BORDER_WIDTH = 1;

export const dropdownMenuPaperSx = (mobileFullWidth = false): SxProps<Theme> => ({
  mt: 1,
  minWidth: (theme) => theme.spacing(28),
  width: mobileFullWidth
    ? (theme) => `min(calc(100vw - ${theme.spacing(VIEWPORT_OFFSET_SPACING)}), ${theme.spacing(MENU_MAX_WIDTH_SPACING)})`
    : 'auto',
  maxWidth: (theme) =>
    mobileFullWidth
      ? `min(calc(100vw - ${theme.spacing(VIEWPORT_OFFSET_SPACING)}), ${theme.spacing(MENU_MAX_WIDTH_SPACING)})`
      : `min(calc(100vw - ${theme.spacing(VIEWPORT_OFFSET_SPACING)}), ${theme.spacing(MENU_DEFAULT_MAX_WIDTH_SPACING)})`,
  maxHeight: (theme) =>
    `min(calc(100vh - ${theme.spacing(VIEWPORT_OFFSET_SPACING)}), ${theme.spacing(MENU_MAX_HEIGHT_SPACING)})`,
  borderWidth: BORDER_WIDTH,
  borderStyle: 'solid',
  borderColor: 'var(--border)',
  borderRadius: 'var(--radius)',
  backgroundColor: 'var(--popover)',
  color: 'var(--popover-foreground)',
  boxShadow: (theme) => theme.shadows[3],
  overflow: 'auto',
});

export const dropdownSubmenuPaperSx: SxProps<Theme> = {
  ml: 0.5,
  minWidth: (theme) => theme.spacing(26),
  maxWidth: (theme) =>
    `min(calc(100vw - ${theme.spacing(VIEWPORT_OFFSET_SPACING)}), ${theme.spacing(SUBMENU_MAX_WIDTH_SPACING)})`,
  maxHeight: (theme) =>
    `min(calc(100vh - ${theme.spacing(VIEWPORT_OFFSET_SPACING)}), ${theme.spacing(SUBMENU_MAX_HEIGHT_SPACING)})`,
  borderWidth: BORDER_WIDTH,
  borderStyle: 'solid',
  borderColor: 'var(--border)',
  borderRadius: 'var(--radius)',
  backgroundColor: 'var(--popover)',
  color: 'var(--popover-foreground)',
  boxShadow: (theme) => theme.shadows[3],
  overflow: 'auto',
};

export const dropdownMenuListSx: SxProps<Theme> = {
  py: 0.5,
};

export const dropdownDividerSx: SxProps<Theme> = {
  my: 0.5,
};

export const dropdownMenuItemSx: SxProps<Theme> = {
  minHeight: {
    xs: (theme) => theme.spacing(5.5),
    sm: (theme) => theme.spacing(5),
  },
  px: 1.5,
  py: 1,
  gap: 1,
  borderRadius: 'var(--radius-sm)',
  mx: 0.5,
  my: 0.25,
  color: 'var(--foreground)',
  '&:hover, &.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: 'var(--accent)',
  },
  '&.Mui-disabled': {
    opacity: 0.5,
  },
};

export const dropdownListItemIconSx: SxProps<Theme> = {
  minWidth: (theme) => theme.spacing(4),
  color: 'inherit',
};

export const dropdownLabelSx: SxProps<Theme> = {
  fontWeight: 'var(--font-weight-medium)',
  color: 'inherit',
};

export const dropdownShortcutSx: SxProps<Theme> = {
  ml: 2,
  color: 'var(--muted-foreground)',
  whiteSpace: 'nowrap',
};

export const dropdownIndicatorSx: SxProps<Theme> = {
  display: 'inline-flex',
  alignItems: 'center',
  color: 'var(--muted-foreground)',
  ml: 1,
};

export const dropdownPlaceholderIconSx: SxProps<Theme> = {
  width: (theme) => theme.typography.pxToRem(20),
  height: (theme) => theme.typography.pxToRem(20),
};
