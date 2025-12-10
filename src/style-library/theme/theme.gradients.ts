import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    gradients: {
      primary: string;
      primaryHover: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    gradients?: {
      primary?: string;
      primaryHover?: string;
    };
  }
}

export const theme = createTheme({
  gradients: {
    primary: 'linear-gradient(60deg, #B23DEB 13.4%, #DE8FFF 86.6%)',
    primaryHover: 'linear-gradient(60deg, #B23DEB 13.4%, #DE8FFF 86.6%)',
  },
});
