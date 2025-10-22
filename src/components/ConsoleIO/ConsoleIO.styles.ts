import { Box, Tabs, Tab, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ConsoleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: `${theme.consoleIO?.dimensions.containerWidth ?? 260}px`,
  height: `${theme.consoleIO?.dimensions.containerHeight ?? 502}px`,
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
  overflow: 'hidden',

  [theme.breakpoints.down('sm')]: {
    maxWidth: '100vw',
    height: 'auto',
    padding: 0,
    overflow: 'hidden',

    '& > *': {
      transform: 'scale(1)',
      transformOrigin: 'center center',
    },
  },
}));

export const Frame = styled(Box)(({ theme }) => ({
  width: `${theme.consoleIO?.dimensions.containerWidth ?? 260}px`,
  height: `${theme.consoleIO?.dimensions.containerHeight ?? 502}px`,
  background: theme.palette.common.white,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  margin: 0,
  gap: 0,
  overflow: 'hidden',

  [theme.breakpoints.down('sm')]: {
    width: `${theme.consoleIO?.dimensions.containerWidth ?? 260}px`,
    height: `${theme.consoleIO?.dimensions.containerHeight ?? 502}px`,
    padding: 0,
    overflow: 'hidden',
  },
}));

export const TopTabs = styled(Tabs)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  minHeight: `${theme.consoleIO?.dimensions.tabHeight ?? 42}px`,
  height: `${theme.consoleIO?.dimensions.tabHeight ?? 42}px`,
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  overflow: 'hidden',
  flexShrink: 0,

  '& .MuiTabs-indicator': {
    display: 'none',
  },

  '& .MuiTabs-flexContainer': {
    height: '100%',
    padding: 0,
    margin: 0,
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'capitalize',
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: theme.typography.pxToRem(18),
  minHeight: `${theme.consoleIO?.dimensions.tabHeight ?? 42}px`,
  height: `${theme.consoleIO?.dimensions.tabHeight ?? 42}px`,
  maxHeight: `${theme.consoleIO?.dimensions.tabHeight ?? 42}px`,
  padding: 0,
  margin: 0,
  flex: 'none',
  boxSizing: 'border-box',

  '&[data-testid="tab-sample"]': {
    width: `${theme.consoleIO?.dimensions.tabSampleWidth ?? 129}px`,
    minWidth: `${theme.consoleIO?.dimensions.tabSampleWidth ?? 129}px`,
    maxWidth: `${theme.consoleIO?.dimensions.tabSampleWidth ?? 129}px`,
  },
  '&[data-testid="tab-custom"]': {
    width: `${theme.consoleIO?.dimensions.tabCustomWidth ?? 131}px`,
    minWidth: `${theme.consoleIO?.dimensions.tabCustomWidth ?? 131}px`,
    maxWidth: `${theme.consoleIO?.dimensions.tabCustomWidth ?? 131}px`,
  },

  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.common.white,

  '&.Mui-selected': {
    backgroundColor: theme.palette.backgroundQuestion,
    color: theme.palette.text.secondary,
  },

  '&:hover': {
    backgroundColor: theme.palette.backgroundQuestion,
  },
}));

export const ConsoleContent = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
  Height: `calc (${theme.consoleIO?.dimensions.containerHeight ?? 502}px - ${theme.consoleIO?.dimensions.tabHeight ?? 42}px)`,
}));

export const ScrollableTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  height: '100%',
  flex: 1,
  backgroundColor: theme.palette.common.white,
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',

  '& .MuiInputBase-root': {
    fontFamily: 'Montserrat',
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 300,
    color: theme.palette.text.secondary,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    margin: 0,
  },

  '& .MuiInputBase-input': {
    padding: theme.spacing(0.8),
    whiteSpace: 'pre-wrap',
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '100%',
    maxHeight: '100%',
    boxSizing: 'border-box',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },

  '& .MuiInputBase-input::placeholder': {
    color: theme.palette.text.secondary,
    opacity: 1,
  },
}));
