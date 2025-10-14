import { styled } from '@mui/material/styles';
import { Box, Tabs, Tab, TextField } from '@mui/material';

export const ConsoleContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: theme.spacing(32.5),
    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        padding: theme.spacing(1),
    },
}));

export const Frame = styled(Box)(({ theme }) => ({
    width: '100%',
    background: theme.palette.common.white,
    padding: 0,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    minHeight: theme.spacing(62.75),
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
        minHeight: theme.spacing(27.5),
    },
}));

export const TopTabs = styled(Tabs)(({ theme }) => ({
    minHeight: theme.spacing(5.25),
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
        minHeight: theme.spacing(5.25),
        padding: `${theme.spacing(1.25)} ${theme.spacing(3.75)}`,
        backgroundColor: ownerState?.selected
            ? theme.palette.grey[200]
            : theme.palette.common.white,
        borderRadius: 0,
    })
);

export const ConsoleContent = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
}));

export const ScrollableTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    flex: 1,
    backgroundColor: 'transparent',
    overflow: 'hidden',

    '& .MuiInputBase-root': {
        fontFamily: '"Montserrat", "Roboto", sans-serif',
        fontSize: theme.typography.pxToRem(14),
        fontWeight: 300,
        color: theme.palette.text.primary,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(1.25),
    },
    '& .MuiInputBase-input': {
        padding: theme.spacing(1),
        whiteSpace: 'pre-wrap',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
    },
    '& .MuiInputBase-input::-webkit-scrollbar': {
        display: 'none',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
}));
