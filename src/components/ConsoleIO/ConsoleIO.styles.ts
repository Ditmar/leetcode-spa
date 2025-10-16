import { Box, Tabs, Tab, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

import { CONSOLE_DEFAULTS } from './ConsoleIO.constants';

export const ConsoleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  maxWidth: theme.spacing(CONSOLE_DEFAULTS.WIDTH_SP), // usa token entero
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    padding: theme.spacing(CONSOLE_DEFAULTS.PADDING_SP),
  },
}));

export const Frame = styled(Box)(({ theme }) => ({
  width: '100%',
  background: theme.palette.common.white,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  minHeight: theme.spacing(CONSOLE_DEFAULTS.FRAME_MIN_HEIGHT_SP),
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    minHeight: theme.spacing(27),
  },
}));

export const TopTabs = styled(Tabs)(({ theme }) => ({
  minHeight: theme.spacing(5),
  margin: 0,
  padding: 0,
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}));

export const StyledTab = styled(Tab)<{ ownerState?: { selected?: boolean } }>(
  ({ theme, ownerState }) => ({
    textTransform: 'capitalize',
    fontFamily: '"Montserrat", "Roboto", sans-serif',
    fontWeight: 400,
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.text.primary,
    minHeight: theme.spacing(5),
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    backgroundColor: ownerState?.selected ? theme.palette.grey[200] : theme.palette.common.white,
    borderRadius: 0,
  })
);

export const ConsoleContent = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden', // contenido interno manejará scroll
}));

export const ScrollableTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  flex: 1,
  backgroundColor: 'transparent',
  overflow: 'auto', // scroll interno visible
  '& .MuiInputBase-root': {
    fontFamily: '"Montserrat", "Roboto", sans-serif',
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 300,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(CONSOLE_DEFAULTS.PADDING_SP),
    height: '100%',
  },
  '& .MuiInputBase-input': {
    whiteSpace: 'pre-wrap',
    overflowY: 'auto',
  },
  // Scrollbar fino y visible
  '& .MuiInputBase-input::-webkit-scrollbar': {
    width: '6px',
  },
  '& .MuiInputBase-input::-webkit-scrollbar-track': {
    background: theme.palette.grey[100],
    borderRadius: '4px',
  },
  '& .MuiInputBase-input::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.grey[400],
    borderRadius: '4px',
  },
  scrollbarWidth: 'thin', // Firefox
  scrollbarColor: `${theme.palette.grey[400]} ${theme.palette.grey[100]}`,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));
