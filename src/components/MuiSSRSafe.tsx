import { ThemeProvider, CssBaseline, createTheme, StyledEngineProvider } from '@mui/material';
import React from 'react';

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

export default function MuiSSRSafe() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SimpleMuiExample />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
