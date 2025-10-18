import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

import type { StyledSearchInputProps } from './SearchBar.types';

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  color: theme.palette.secondary.main,
  width: theme.spacing(8),
  height: theme.spacing(8),
  marginRight: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .MuiSvgIcon-root': {
    fontSize: theme.typography.h4.fontSize,
  },
}));

export const SearchBarContainer = styled('div')<StyledSearchInputProps>(
  ({ theme, $fullWidth = false }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 4),
    borderRadius: theme.spacing(2.5),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    transition: theme.transitions.create(['box-shadow', 'background-color']),
    height: theme.spacing(7),
    minWidth: $fullWidth ? '100%' : theme.spacing(25), // ~200px
    width: $fullWidth ? '100%' : 'auto',
    border: `1px solid ${theme.palette.divider}`,
  })
);

export const SearchInputBase = styled(InputBase)(({ theme }) => ({
  color: '#A259FF',
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.fontWeightRegular,
  padding: theme.spacing(1.5, 2),

  '& input': {
    color: '#000000ff',
    height: '100%',
    '&::placeholder': {
      color: '#1b191996',
      opacity: 1,
    },
  },
}));
