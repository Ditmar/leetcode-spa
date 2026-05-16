import { DRAWER_ANCHORS, DRAWER_DEFAULTS } from './Drawer.constants';

import type { DrawerProps } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

const DRAWER_BORDER = '1px solid var(--border)';

export const drawerPaperSx = (
  anchor: DrawerProps['anchor'],
  drawerSize?: string
): SxProps<Theme> => ({
  backgroundColor: 'var(--background)',

  color: 'var(--foreground)',

  boxShadow: 'var(--shadow-md)',

  overflow: 'hidden',

  ...(anchor === DRAWER_ANCHORS.LEFT
    ? {
        borderRight: DRAWER_BORDER,
      }
    : {}),

  ...(anchor === DRAWER_ANCHORS.RIGHT
    ? {
        borderLeft: DRAWER_BORDER,
      }
    : {}),

  ...(anchor === DRAWER_ANCHORS.TOP
    ? {
        borderBottom: DRAWER_BORDER,

        borderBottomLeftRadius: 'var(--radius-lg)',

        borderBottomRightRadius: 'var(--radius-lg)',
      }
    : {}),

  ...(anchor === DRAWER_ANCHORS.BOTTOM
    ? {
        borderTop: DRAWER_BORDER,

        borderTopLeftRadius: 'var(--radius-lg)',

        borderTopRightRadius: 'var(--radius-lg)',
      }
    : {}),

  ...(anchor === DRAWER_ANCHORS.LEFT || anchor === DRAWER_ANCHORS.RIGHT
    ? {
        width: drawerSize ?? DRAWER_DEFAULTS.DESKTOP_WIDTH,
      }
    : {
        height: drawerSize ?? DRAWER_DEFAULTS.MOBILE_BOTTOM_HEIGHT,
      }),
});

export const drawerHeaderSx: SxProps<Theme> = {
  display: 'flex',

  flexDirection: 'column',

  paddingTop: (theme) => theme.spacing(DRAWER_DEFAULTS.HEADER_PADDING),

  paddingBottom: (theme) => theme.spacing(DRAWER_DEFAULTS.HEADER_PADDING),

  paddingLeft: (theme) => theme.spacing(DRAWER_DEFAULTS.HEADER_PADDING),

  paddingRight: (theme) => theme.spacing(DRAWER_DEFAULTS.HEADER_PADDING),

  gap: (theme) => theme.spacing(DRAWER_DEFAULTS.HEADER_GAP),
};

export const drawerDragIndicatorContainerSx: SxProps<Theme> = {
  display: 'flex',

  justifyContent: 'center',

  width: '100%',
};

export const drawerDragIndicatorSx: SxProps<Theme> = {
  width: '6.25rem',

  height: '0.5rem',

  borderRadius: '999rem',

  backgroundColor: 'var(--muted)',

  opacity: 1,
};

export const drawerTitleSx: SxProps<Theme> = {
  fontSize: '1.25rem',

  lineHeight: '1.875rem',

  fontWeight: 600,

  color: 'var(--foreground)',
};

export const drawerDescriptionSx: SxProps<Theme> = {
  fontSize: '0.875rem',

  lineHeight: '1.25rem',

  fontWeight: 400,

  color: 'var(--muted-foreground)',
};

export const drawerContentSx: SxProps<Theme> = {
  paddingTop: (theme) => theme.spacing(DRAWER_DEFAULTS.CONTENT_PADDING),

  paddingBottom: (theme) => theme.spacing(DRAWER_DEFAULTS.CONTENT_PADDING),

  paddingLeft: (theme) => theme.spacing(DRAWER_DEFAULTS.CONTENT_PADDING),

  paddingRight: (theme) => theme.spacing(DRAWER_DEFAULTS.CONTENT_PADDING),
};

export const dragHandleContainerSx: SxProps<Theme> = {
  display: 'flex',

  justifyContent: 'center',

  paddingTop: 1,
};

export const dragHandleSx: SxProps<Theme> = {
  width: DRAWER_DEFAULTS.MOBILE_DRAG_HANDLE_WIDTH,

  height: DRAWER_DEFAULTS.MOBILE_DRAG_HANDLE_HEIGHT,

  borderRadius: 'var(--radius)',

  backgroundColor: 'var(--muted-foreground)',

  opacity: 0.4,
};

export const formContainerSx: SxProps<Theme> = {
  display: 'grid',

  gridTemplateColumns: '1fr',

  gap: (theme) => theme.spacing(DRAWER_DEFAULTS.FORM_GAP),
};

export const formRowSx: SxProps<Theme> = {
  display: 'grid',

  gridTemplateColumns: '5.25rem 1fr',

  alignItems: 'center',

  columnGap: (theme) => theme.spacing(2),
};

export const formLabelSx: SxProps<Theme> = {
  fontSize: '0.875rem',

  lineHeight: '0.875rem',

  fontWeight: 500,

  color: 'var(--foreground)',

  textAlign: 'left',
};

export const formFieldSx: SxProps<Theme> = {
  display: 'flex',

  alignItems: 'center',

  minHeight: '2.25rem',

  borderRadius: 'var(--radius-md)',

  backgroundColor: 'var(--input-background)',

  border: '1px solid transparent',

  paddingTop: 0.5,

  paddingBottom: 0.5,

  paddingLeft: 1.5,

  paddingRight: 1.5,

  fontSize: '0.875rem',

  lineHeight: '1.25rem',

  fontWeight: 400,

  color: 'var(--foreground)',
};
