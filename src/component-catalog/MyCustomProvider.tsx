import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState, type ReactNode } from 'react';

import { theme } from '../theme';
import { createEmotionCache } from '../utils/createEmotionCache';

interface MyCustomProviderProps {
  children: ReactNode;
  mode?: 'ssr' | 'client';
}

export const MyCustomProvider = ({ children, mode = 'ssr' }: MyCustomProviderProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const shouldRender = mode === 'ssr' || isClient;

  if (!shouldRender) return null;

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
