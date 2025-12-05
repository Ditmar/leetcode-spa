import { Box, TextField, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SearchContainer = styled(Box)(({ theme }) => ({
  width: '342px', // Specific design requirement
  height: '67px', // Specific design requirement
  borderRadius: '15px',
  background: '#FAFAFABF',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2), // Approx 16px padding
  boxSizing: 'border-box',
  border: `1px solid ${theme.palette.divider}`, // Optional: add border if needed for visibility on white
  '&:hover': {
    background: '#F0F0F0', // Slight hover effect
  },
  transition: theme.transitions.create(['background-color', 'box-shadow']),
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
  flex: 1,
  marginLeft: theme.spacing(1),
  '& .MuiInputBase-root': {
    fontFamily: "'Syne', sans-serif",
    fontSize: '16px', // Readable size
    color: theme.palette.text.primary,
    '&:before, &:after': {
      display: 'none', // Remove default MUI underline
    },
  },
  '& .MuiInputBase-input': {
    padding: 0,
    height: '19px', // Match design spec for text area height
    '&::placeholder': {
      color: theme.palette.text.secondary,
      opacity: 1,
      fontFamily: 'Syne',
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '100%',
      letterSpacing: '0%',
      width: '57px',
      height: '19px',
      transform: 'rotate(0deg)',
    },
  },
}));

export const SearchIconButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1),
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '& img': {
    width: '18.80204963684082px',
    height: '17.812532424926758px',
    opacity: 1,
    transform: 'rotate(0deg)',
    position: 'relative',
    top: '0.2px',
    left: '1.04px',
  },
}));
