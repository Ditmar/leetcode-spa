import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import SimpleMuiExample from '../style-library/stories/SimpleMuiExample';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function MuiOnlyClient() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SimpleMuiExample />
    </ThemeProvider>
  );
}
