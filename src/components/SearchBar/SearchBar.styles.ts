import { Box, TextField, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SearchContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '324px',
  height: '67px',
  left: '929px',
  top: '91px',
  background: 'rgba(250, 250, 250, 0.75)', // Fondo con opacidad
  backdropFilter: 'blur(10px)', // Añadir blur para efecto vidrio
  borderRadius: '15px',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  border: '1px solid rgba(255, 255, 255, 0.2)', // Borde sutil

  [theme.breakpoints.down('sm')]: {
    width: '342px',
    height: '67px',
    left: '24px',
    top: '231.87px',
  },
}));

export const SearchIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  width: '19px',
  height: '19px',
  left: '31px', // 960 - 929 = 31px desde el contenedor
  top: '24px', // 115 - 91 = 24px desde el contenedor
  padding: 0,
  minWidth: 0,
  minHeight: 0,

  '&.MuiIconButton-root': {
    padding: 0,
    margin: 0,
    borderRadius: 0,
  },

  '& .MuiTouchRipple-root': {
    display: 'none',
  },

  '&:hover': {
    backgroundColor: 'transparent',
  },

  '& img': {
    width: '17.81px',
    height: '17.81px',
    display: 'block',
  },

  [theme.breakpoints.down('sm')]: {
    width: '20.06px',
    height: '19px',
    left: '32.72px', // 56.72 - 24 = 32.72px desde el contenedor
    top: '24px', // 255.87 - 231.87 = 24px desde el contenedor

    '& img': {
      width: '18.8px',
      height: '17.81px',
    },
  },
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
  position: 'absolute',
  left: '61.84px', // 990.84 - 929 = 61.84px desde el contenedor
  top: '24px', // 115 - 91 = 24px desde el contenedor
  width: '200px', // Ancho más amplio para que se vea bien
  height: '19px',

  '& .MuiInputBase-root': {
    fontFamily: "'Syne', sans-serif",
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '19px',
    color: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'transparent',
    width: '100%',

    '&:before, &:after, &:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
    },
  },

  '& .MuiInputBase-input': {
    padding: 0,
    height: '19px',
    width: '100%',

    '&::placeholder': {
      color: 'rgba(0, 0, 0, 0.5)',
      opacity: 1,
      fontFamily: "'Syne', sans-serif",
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '19px',
    },
  },

  [theme.breakpoints.down('sm')]: {
    left: '65.27px', // 89.27 - 24 = 65.27px desde el contenedor
    top: '24px', // 255.87 - 231.87 = 24px desde el contenedor
    width: '200px',
    height: '19px',

    '& .MuiInputBase-root': {
      fontSize: '16px',
      lineHeight: '19px',
    },

    '& .MuiInputBase-input': {
      height: '19px',
      width: '100%',

      '&::placeholder': {
        fontSize: '16px',
        lineHeight: '19px',
      },
    },
  },
}));
