import { createTheme } from '@mui/material/styles';

// Esta es tu importación original, está perfecta
import baseTheme from './theme';

// Tus declaraciones, perfectas
declare module '@mui/material/styles' {
  interface Palette {
    link: {
      purple: string;
      blue: string;
    };
  }
  interface PaletteOptions {
    link?: {
      purple?: string;
      blue?: string;
    };
  }
}

// Esta es la forma SEGURA de fusionar tu tema base con las propiedades de signup
const signupTheme = createTheme(baseTheme, {
  palette: {
    // 1. Mantenemos la paleta del 'baseTheme' para no perderla
    ...(baseTheme.palette || {}),

    // 2. AÑADIMOS el color de QA (Figma) que tus estilos necesitan
    text: {
      ...(baseTheme.palette?.text || {}), // Mantiene 'primary'
      secondary: '#BCBCBC', // Este es el color de QA
    },

    // 3. MANTENEMOS los links de tu tema original
    link: {
      purple: '#B441EB',
      blue: '#4285F4',
    },
  },
  typography: {
    // Mantenemos la tipografía de tu tema original
    fontFamily: 'Syne, sans-serif',
  },
});

export default signupTheme;
