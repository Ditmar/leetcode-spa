import { createTheme } from '@mui/material/styles';

import baseTheme from './theme';

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

const signupTheme = createTheme(baseTheme, {
  palette: {
    link: {
      purple: '#B441EB',
      blue: '#4285F4',
    },
  },
  typography: {
    fontFamily: 'Syne, sans-serif',
  },
});

export default signupTheme;
