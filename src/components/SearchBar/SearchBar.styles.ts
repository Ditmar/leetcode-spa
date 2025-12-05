// SearchBar.styles.ts - Cambio 1
import { TextField, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(1, 2),
  backgroundColor: theme.palette.background.paper,
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.primary.light}40`,
  },
  '&:focus-within': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 3px ${theme.palette.primary.light}60`,
  },
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
  flex: 1,
  marginLeft: theme.spacing(1.5), // Cambiado: valor específico
  '& .MuiInputBase-root': {
    '&:before, &:after': {
      display: 'none',
    },
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.75, 0),
    fontSize: '0.95rem', // Cambiado: tamaño de fuente
  },
}));

export const SearchIconButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0.875), // Cambiado: padding específico
  color: theme.palette.grey[700],
  '&:hover': {
    backgroundColor: theme.palette.primary.light + '20',
    color: theme.palette.primary.main,
  },
  '&:disabled': {
    color: theme.palette.grey[400],
  },
}));
