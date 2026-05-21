import { DRAWER_ANCHORS, DRAWER_DEFAULTS } from './Drawer.constants';

import type { DrawerProps } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

export const drawerPaperSx = (
  anchor: DrawerProps['anchor'],
  drawerSize?: string
): SxProps<Theme> => ({
  backgroundColor: 'var(--background)',

  color: 'var(--foreground)',

  boxShadow: 'var(--shadow-md)',

  overflow: 'auto',

  '& .MuiDivider-root': {
    display: 'none',
  },

  ...(anchor === DRAWER_ANCHORS.LEFT
    ? {
        borderRightWidth: 1,

        borderRightStyle: 'solid',

        borderRightColor: 'var(--border)',
      }
    : {}),

  ...(anchor === DRAWER_ANCHORS.RIGHT
    ? {
        borderLeftWidth: 1,

        borderLeftStyle: 'solid',

        borderLeftColor: 'var(--border)',
      }
    : {}),

  ...(anchor === DRAWER_ANCHORS.TOP
    ? {
        borderBottomWidth: 1,

        borderBottomStyle: 'solid',

        borderBottomColor: 'var(--border)',

        borderBottomLeftRadius: 'var(--radius-lg)',

        borderBottomRightRadius: 'var(--radius-lg)',
      }
    : {}),

  ...(anchor === DRAWER_ANCHORS.BOTTOM
    ? {
        borderTopWidth: 1,

        borderTopStyle: 'solid',

        borderTopColor: 'var(--border)',

        borderTopLeftRadius: 'var(--radius-lg)',

        borderTopRightRadius: 'var(--radius-lg)',
      }
    : {}),

  ...(anchor === DRAWER_ANCHORS.LEFT || anchor === DRAWER_ANCHORS.RIGHT
    ? {
        width: drawerSize ?? {
          xs: '85vw',

          sm: '60vw',

          md: '40vw',

          lg: '30%',
        },
      }
    : {
        height: drawerSize ?? {
          xs: '50vh',

          sm: '45vh',

          md: '40vh',
        },
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

  paddingTop: (theme) => theme.spacing(1),

  paddingBottom: (theme) => theme.spacing(0.5),
};

export const drawerDragIndicatorSx: SxProps<Theme> = {
  width: (theme) => theme.spacing(12.5),

  height: (theme) => theme.spacing(1),

  borderRadius: '999rem',

  backgroundColor: 'var(--muted)',

  flexShrink: 0,
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

export const storyBodyTextSx: SxProps<Theme> = {
  fontSize: '0.875rem',

  lineHeight: '1.25rem',

  color: 'var(--muted-foreground)',
};

export const drawerStoryContainerSx: SxProps<Theme> = {
  display: 'flex',

  justifyContent: 'center',

  alignItems: 'center',

  minHeight: '100vh',

  backgroundColor: 'var(--background)',
};
