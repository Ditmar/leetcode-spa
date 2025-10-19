import { Box, Tabs, Tab, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

import { CONSOLE_DEFAULTS } from './ConsoleIO.constants';

export const ConsoleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',

  maxWidth: `${CONSOLE_DEFAULTS.CONTAINER_WIDTH_PX}px`,
  height: `${CONSOLE_DEFAULTS.CONTAINER_HEIGHT_PX}px`,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    height: 'auto',
    padding: theme.spacing(1),
  },
}));

export const Frame = styled(Box)(({ theme }) => ({
  width: `${CONSOLE_DEFAULTS.CONTAINER_WIDTH_PX}px`,

  background: theme.palette.common.white,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',

  height: `${CONSOLE_DEFAULTS.FRAME_HEIGHT_PX}px`,
  padding: theme.spacing(CONSOLE_DEFAULTS.PADDING_SP),
  gap: theme.spacing(CONSOLE_DEFAULTS.GAP_SP),
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    height: `calc(${CONSOLE_DEFAULTS.FRAME_HEIGHT_PX}px - ${theme.spacing(8)})`,
    padding: theme.spacing(1),
  },
}));
export const TopTabs = styled(Tabs)({
  display: 'flex',
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  minHeight: 20,
});

export const StyledTab = styled(Tab)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  textTransform: 'capitalize',
  fontFamily: 'Montserrat, Roboto, sans-serif',
  fontWeight: 400,
  fontSize: theme.typography.pxToRem(18),
  minHeight: 42,
  paddingTop: theme.spacing(1.25),
  paddingBottom: theme.spacing(1.25),
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.common.white,
  '&.Mui-selected': {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.text.secondary,
  },
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
  },
}));

export const ConsoleContent = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const ScrollableTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  flex: 1,
  backgroundColor: theme.palette.common.white,
  '& .MuiInputBase-root': {
    fontFamily: 'Montserrat, Roboto, sans-serif',
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 300,
    color: theme.palette.text.disabled,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
    whiteSpace: 'pre-wrap',
    overflowY: 'auto',
    maxHeight: '100%',
    boxSizing: 'border-box',
  },
  '& .MuiInputBase-input::-webkit-scrollbar': {
    width: '6px',
  },
  '& .MuiInputBase-input::-webkit-scrollbar-track': {
    background: theme.palette.grey[400],
    borderRadius: 4,
  },
  '& .MuiInputBase-input::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.grey[400],
    borderRadius: 4,
  },
  scrollbarWidth: 'thin',
  scrollbarColor: `${theme.palette.grey[400]} ${theme.palette.grey[400]}`,
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiInputBase-input::placeholder': {
    color: theme.palette.grey[500],
    opacity: 1,
  },
}));
