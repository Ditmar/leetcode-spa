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

export const storyWorkspaceStyles = {
  workspaceRootStyles: {
    display: 'flex',
    width: '100%',
    height: '100%',
    bgcolor: 'var(--background)',
  } as SxProps<Theme>,

  leftWorkspaceStyles: {
    flex: 1,
    p: 3,
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px solid var(--sidebar-border)',
    bgcolor: 'var(--background)',
  } as SxProps<Theme>,

  rightWorkspaceStyles: {
    flex: 1,
    maxWidth: { xs: '100%', md: '50%' },
    bgcolor: 'var(--background)',
    display: 'flex',
    flexDirection: 'column',
    borderLeft: '1px solid var(--sidebar-border)',
  } as SxProps<Theme>,

  codeEditorAreaStyles: {
    flex: 1,
    p: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'var(--nav-bg)',
  } as SxProps<Theme>,

  consolePanelWrapperStyles: {
    bgcolor: 'var(--editor-panel-bg)',
    display: 'flex',
    flexDirection: 'column',
  } as SxProps<Theme>,

  consoleToolbarStyles: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: { xs: 1.5, sm: 0 },
    px: '14px',
    py: { xs: '12px', sm: 0 },
    height: { xs: 'auto', sm: '46px' },
    bgcolor: 'var(--nav-border)',
    userSelect: 'none',
    borderTop: '1px solid var(--editor-panel-border)',
  } as SxProps<Theme>,

  tabsCapsuleStyles: {
    display: 'flex',
    alignItems: 'center',
    bgcolor: 'var(--editor-panel)',
    borderRadius: '24px',
    p: '3px',
    width: { xs: '100%', sm: 'auto' },
  } as SxProps<Theme>,

  getTabItemStyles: (isActive: boolean): SxProps<Theme> => ({
    cursor: 'pointer',
    fontSize: '12.5px',
    fontWeight: 500,
    borderRadius: '20px',
    px: '14px',
    py: '4px',
    flex: { xs: 1, sm: 'none' },
    textAlign: 'center',
    whiteSpace: 'nowrap',
    transition: 'all 0.15s ease',
    color: 'var(--card)',
    bgcolor: isActive ? 'var(--editor-panel-bg)' : 'transparent',
  }),

  actionButtonsContainerStyles: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    width: { xs: '100%', sm: 'auto' },
  } as SxProps<Theme>,

  runButtonStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    bgcolor: 'var(--editor-panel-bg)',
    color: 'var(--secondary)',
    height: '32px',
    width: '77.06px',
    borderRadius: '6px',
    flex: { xs: 1, sm: 'none' },
    fontSize: '12.5px',
    fontWeight: 500,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.15s',
    '&:hover': { bgcolor: 'var(--nav-bg)' },
  } as SxProps<Theme>,

  submitButtonStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    bgcolor: 'var(--nav-accent-green)',
    color: 'var(--editor-text)',
    height: '32px',
    width: '95.34px',
    borderRadius: '6px',
    flex: { xs: 1, sm: 'none' },
    fontSize: '12.5px',
    fontWeight: 600,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.15s',
    '&:hover': { bgcolor: 'var(--success-foreground)' },
  } as SxProps<Theme>,

  lowerPanelContextStyles: {
    p: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    minHeight: 220,
    maxHeight: 220,
    overflowY: 'auto',
    bgcolor: 'var(--nav-border)',
  } as SxProps<Theme>,

  caseCardStyles: {
    width: '100%',
    backgroundColor: 'var(--editor-panel)',
    borderRadius: '5px',
    padding: '12px 16px',
    boxSizing: 'border-box',
    border: '1px solid var(--editor-panel-border)',
  } as SxProps<Theme>,

  noResultsWrapperStyles: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    pt: 4,
  } as SxProps<Theme>,
};
