import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { type ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';

const emotionCache = createCache({ key: 'css' });

interface SSRMuiProviderProps {
  children: ReactNode;
}

export default function SSRMuiProvider({ children }: SSRMuiProviderProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

