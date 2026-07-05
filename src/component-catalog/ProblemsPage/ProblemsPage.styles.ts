import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import type { SxProps, Theme } from '@mui/material/styles';

export const PageWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3, 2),
  [theme.breakpoints.up('sm')]: { padding: theme.spacing(4, 3) },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5, 4),
    maxWidth: theme.breakpoints.values.xl,
    margin: '0 auto',
  },
}));

export const headerSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  mb: { xs: 2, md: 3 },
  flexWrap: 'wrap',
  gap: 1,
};

export const FilterBarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1.5),
  alignItems: 'center',
  marginBottom: theme.spacing(2.5),
}));

export const filterSelectSx: SxProps<Theme> = {
  minWidth: 120,
  minHeight: (t: Theme) => t.spacing(5.5),
  '& .MuiSelect-select': { py: 1 },
};

export const searchFieldSx: SxProps<Theme> = {
  flex: 1,
  minWidth: 180,
  '& .MuiInputBase-root': { minHeight: (t: Theme) => t.spacing(5.5) },
};

export const filterButtonSx: SxProps<Theme> = {
  minHeight: (t: Theme) => t.spacing(5.5),
  minWidth: (t: Theme) => t.spacing(5.5),
};

export const StickyHeaderCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  fontWeight: 600,
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: theme.palette.text.secondary,
  borderBottom: `2px solid ${theme.palette.divider}`,
  whiteSpace: 'nowrap',
  padding: theme.spacing(1.5, 2),
}));

export const StyledTableRow = styled(TableRow, {
  shouldForwardProp: (p) => p !== 'isSolved',
})<{ isSolved?: boolean }>(({ theme, isSolved }) => ({
  cursor: 'pointer',
  borderLeft: isSolved ? `4px solid ${theme.palette.success.main}` : '4px solid transparent',
  transition: 'background-color 150ms ease',
  '&:hover': { backgroundColor: theme.palette.action.hover },
  '& td': { padding: theme.spacing(1.5, 2), verticalAlign: 'middle' },
}));

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (p) => p !== 'isSolved',
})<{ isSolved?: boolean }>(({ theme, isSolved }) => ({
  borderLeft: isSolved ? `4px solid ${theme.palette.success.main}` : '4px solid transparent',
  backgroundColor: isSolved ? theme.palette.action.selected : 'transparent',
  minHeight: theme.spacing(7),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  gap: theme.spacing(1.5),
  transition: 'background-color 150ms ease',
  '&:hover': { backgroundColor: theme.palette.action.hover },
}));

export const actionButtonSx: SxProps<Theme> = {
  minHeight: (t: Theme) => t.spacing(5.5),
  minWidth: (t: Theme) => t.spacing(10),
  textTransform: 'none',
  fontWeight: 600,
  whiteSpace: 'nowrap',
};

export const drawerContentSx: SxProps<Theme> = {
  width: (t: Theme) => t.spacing(36),
  p: 2.5,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

export const emptyStateSx: SxProps<Theme> = {
  py: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2,
  color: 'text.secondary',
};

export const visuallyHiddenSx: SxProps<Theme> = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
};
