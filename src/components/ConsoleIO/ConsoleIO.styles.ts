import { styled } from '@mui/material/styles';
import { Box, Tabs, Tab, TextField } from '@mui/material';
import { CONSOLE_DEFAULTS } from './ConsoleIO.constants';

export const ConsoleContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: `${CONSOLE_DEFAULTS.WIDTH}px`,
    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        padding: theme.spacing(1),
    },
}));

export const Frame = styled(Box)(({ theme }) => ({
    width: '100%',
    background: CONSOLE_DEFAULTS.COLORS.background,
    padding: 0,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    minHeight: `${CONSOLE_DEFAULTS.FRAME_MIN_HEIGHT}px`,
    overflow: 'hidden', // El scroll se maneja solo en el TextField
    [theme.breakpoints.down('sm')]: {
        minHeight: '220px',
    },
}));

export const TopTabs = styled(Tabs)(({ theme }) => ({
    minHeight: 42,
    margin: 0,
    padding: 0,
    '& .MuiTabs-indicator': {
        display: 'none',
    },
}));

export const StyledTab = styled(Tab)<{ ownerState?: { selected?: boolean } }>(({ theme, ownerState }) => ({
    textTransform: 'capitalize',
    fontFamily: '"Montserrat", "Roboto", sans-serif',
    fontWeight: 400,
    fontSize: 18,
    color: CONSOLE_DEFAULTS.COLORS.text,
    minHeight: 42,
    padding: '10px 30px',
    backgroundColor: ownerState?.selected ? CONSOLE_DEFAULTS.COLORS.sampleTabBg : CONSOLE_DEFAULTS.COLORS.background,
}));

export const ConsoleContent = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden', // El scroll queda en el input
}));

export const ScrollableTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    flex: 1,
    backgroundColor: 'transparent',
    overflow: 'hidden',

    '& .MuiInputBase-root': {
        fontFamily: '"Montserrat", "Roboto", sans-serif',
        fontSize: 14,
        fontWeight: 300,
        color: CONSOLE_DEFAULTS.COLORS.text,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
    },
    '& .MuiInputBase-input': {
        padding: theme.spacing(1),
        whiteSpace: 'pre-wrap',
        overflowY: 'auto', // scroll solo aquí
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
    },
    '& .MuiInputBase-input::-webkit-scrollbar': {
        display: 'none', // scrollbar invisible
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
}));
