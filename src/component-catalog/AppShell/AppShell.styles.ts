import type { SxProps, Theme } from '@mui/material';

export const flexLayoutStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflow: 'hidden',
  color: 'var(--foreground)',
  bgcolor: 'var(--background)',
};

export const appBarStyles: SxProps<Theme> = {
  bgcolor: 'var(--nav-bg)',
  height: 50,
  justifyContent: 'center',
  boxShadow: 'none',
  borderBottom: '1px solid var(--nav-border)',
  zIndex: 1202,
};

export const toolbarStyles: SxProps<Theme> = {
  justifyContent: 'space-between',
  px: 2,
  minHeight: '50px !important',
};

export const logoTypographyStyles: SxProps<Theme> = {
  color: 'var(--primary-foreground)',
  textDecoration: 'none',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  gap: 0.5,
  fontSize: '16px',
};

export const workspaceContainerStyles: SxProps<Theme> = {
  display: 'flex',
  flex: 1,
  width: '100%',
  height: 'calc(100vh - 50px)',
  overflow: 'hidden',
  bgcolor: 'var(--background)',
};

export const sidebarDesktopStyles: SxProps<Theme> = {
  width: 260,
  minWidth: 260,
  maxWidth: 260,
  borderRight: '1px solid var(--border)',
  display: { xs: 'none', sm: 'flex' },
  flexDirection: 'column',
  bgcolor: 'var(--background)',
  color: 'var(--foreground)',
  flexShrink: 0,
  '& .MuiTypography-root': {
    color: 'inherit',
  },
};

export const mainContentSlotStyles: SxProps<Theme> = {
  flexGrow: 1,
  display: 'flex',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  bgcolor: 'var(--background)',
};

export const listContainerStyles: SxProps<Theme> = {
  p: 0,
  overflowY: 'auto',
  flex: 1,
  pt: '10px',
};

export const getListItemButtonStyles = (isSelected: boolean): SxProps<Theme> => ({
  px: '24px',
  py: '12px',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
  bgcolor: isSelected ? 'var(--sidebar-accent) !important' : 'transparent',
  borderLeft: isSelected ? '4px solid var(--sidebar-primary)' : '4px solid transparent',
  borderBottom: '1px solid var(--border)',
  '&:hover': {
    bgcolor: isSelected ? 'var(--sidebar-accent)' : 'var(--chart-6)',
  },
});

export const statusIconBoxStyles: SxProps<Theme> = {
  mt: '3px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const textMetaWrapperStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

export const getTitleTypographyStyles = (isSelected: boolean): SxProps<Theme> => ({
  fontSize: '14px',
  color: 'var(--foreground)',
  fontWeight: isSelected ? 600 : 400,
  lineHeight: 1.3,
});

export const diffLabelContainerStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};
