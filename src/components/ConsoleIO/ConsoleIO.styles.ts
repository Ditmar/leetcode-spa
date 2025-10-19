import { Box, Tabs, Tab, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

import { CONSOLE_DEFAULTS } from './ConsoleIO.constants';

export const ConsoleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: `${CONSOLE_DEFAULTS.CONTAINER_WIDTH_PX}px`,
  height: `${CONSOLE_DEFAULTS.CONTAINER_HEIGHT_PX}px`,
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
  overflow: 'hidden',

  [theme.breakpoints.down('sm')]: {
    maxWidth: '100vw',
    height: '100vh',
    padding: 0,

    '& > *': {
      transform: 'scale(0.5)',
      transformOrigin: 'center center',
    },
  },
}));

export const Frame = styled(Box)(({ theme }) => ({
  width: `${CONSOLE_DEFAULTS.CONTAINER_WIDTH_PX}px`,
  height: `${CONSOLE_DEFAULTS.CONTAINER_HEIGHT_PX}px`,
  background: theme.palette.common.white,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  margin: 0,
  gap: 0,
  overflow: 'hidden',

  [theme.breakpoints.down('sm')]: {
    width: `${CONSOLE_DEFAULTS.CONTAINER_WIDTH_PX}px`,
    height: `${CONSOLE_DEFAULTS.CONTAINER_HEIGHT_PX}px`,
    padding: 0,
  },
}));

export const TopTabs = styled(Tabs)({
  display: 'flex',
  width: '100%',
  minHeight: `${CONSOLE_DEFAULTS.FRAME_SAMPLE_AND_CUSTOM_HEIGHT_PX}px`,
  height: `${CONSOLE_DEFAULTS.FRAME_SAMPLE_AND_CUSTOM_HEIGHT_PX}px`,
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  overflow: 'hidden',

  '& .MuiTabs-indicator': {
    display: 'none',
  },

  '& .MuiTabs-flexContainer': {
    height: '100%',
    padding: 0,
    margin: 0,
  },
});

export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'capitalize',
  fontFamily: 'Montserrat, Roboto, sans-serif',
  fontWeight: 400,
  fontSize: theme.typography.pxToRem(18),
  minHeight: `${CONSOLE_DEFAULTS.FRAME_SAMPLE_AND_CUSTOM_HEIGHT_PX}px`,
  height: `${CONSOLE_DEFAULTS.FRAME_SAMPLE_AND_CUSTOM_HEIGHT_PX}px`,
  maxHeight: `${CONSOLE_DEFAULTS.FRAME_SAMPLE_AND_CUSTOM_HEIGHT_PX}px`,
  padding: 0,
  margin: 0,
  flex: 'none',
  boxSizing: 'border-box',

  '&[data-testid="tab-sample"]': {
    width: `${CONSOLE_DEFAULTS.FRAME_SAMPLE_WIDTH_PX}px`,
    minWidth: `${CONSOLE_DEFAULTS.FRAME_SAMPLE_WIDTH_PX}px`,
    maxWidth: `${CONSOLE_DEFAULTS.FRAME_SAMPLE_WIDTH_PX}px`,
  },
  '&[data-testid="tab-custom"]': {
    width: `${CONSOLE_DEFAULTS.FRAME_CUSTOM_WIDTH_PX}px`,
    minWidth: `${CONSOLE_DEFAULTS.FRAME_CUSTOM_WIDTH_PX}px`,
    maxWidth: `${CONSOLE_DEFAULTS.FRAME_CUSTOM_WIDTH_PX}px`,
  },

  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.common.white,

  '&.Mui-selected': {
    backgroundColor: theme.palette.grey[50],
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
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
  height: `calc(${CONSOLE_DEFAULTS.CONTAINER_HEIGHT_PX}px - ${CONSOLE_DEFAULTS.FRAME_SAMPLE_AND_CUSTOM_HEIGHT_PX}px)`,
});

export const ScrollableTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  height: '100%',
  flex: 1,
  backgroundColor: theme.palette.common.white,
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',

  '& .MuiInputBase-root': {
    fontFamily: 'Montserrat, Roboto, sans-serif',
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 300,
    color: theme.palette.text.disabled,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    margin: 10,
  },

  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
    whiteSpace: 'pre-wrap',
    overflowY: 'auto',
    height: '100%',
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
