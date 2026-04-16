import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useState, useEffect, type ReactNode } from 'react';

import { theme } from '../theme';
import { createEmotionCache } from '../utils/createEmotionCache';

interface SSRMuiProviderProps {
  children: ReactNode;
}

export const SSRMuiProvider = ({ children }: SSRMuiProviderProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const cache = createEmotionCache();

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};