import { createTheme } from '@mui/material/styles';

import baseTheme from './theme';

declare module '@mui/material/styles' {
  interface Palette {
    link: {
      purple: string;
      blue: string;
      gray: string;
    };
    custom: {
      inputFocus: string;
      inputBorderFocus: string;
    };
  }
  interface PaletteOptions {
    link?: {
      purple?: string;
      blue?: string;
      gray?: string;
    };
    custom?: {
      inputFocus?: string;
      inputBorderFocus?: string;
    };
  }
}

export const loginTheme = createTheme(baseTheme, {
  palette: {
    link: {
      purple: '#B441EB',
      blue: '#3366FF',
      gray: '#BCBCBC',
    },
    text: {
      secondary: '#BCBCBC',
    },
    custom: {
      inputFocus: '#CCCCCC',
      inputBorderFocus: '#B23DEA',
    },
    grey: {
      500: '#555555',
    },
  },
  typography: {
    fontFamily: 'Syne, sans-serif',
  },
});
