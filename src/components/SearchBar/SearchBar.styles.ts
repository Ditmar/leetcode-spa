
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import type { StyledSearchInputProps } from './SearchBar.types';
import { greyScale } from '../../style-library/types/theme.helpers';

const purpleScale = {
    400: '#9E88E5',
};

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    // Color con transparencia
    color: 'rgba(201, 68, 179, 0.7)',
    width: '3.5rem',
    height: '3.5rem',
    marginRight: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiSvgIcon-root': {
        fontSize: '3.5rem',
    }
}));

export const SearchBarContainer = styled('div')<StyledSearchInputProps>(({ theme, $fullWidth = false }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 4),
    borderRadius: '40px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    transition: theme.transitions.create(['box-shadow', 'background-color']),
    height: 150,
    minWidth: 700,
    width: $fullWidth ? '100%' : 'auto',
    border: '1px solid #E0E0E0',
}));

export const SearchInputBase = styled(InputBase)({
    flexGrow: 1,
    fontSize: '2rem',
    fontWeight: 400,
    '& .MuiInputBase-input::placeholder': {
        color: '#706c6cff',

        opacity: 1,
    },
});

