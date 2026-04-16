import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { ReactNode } from 'react';

import { createEmotionCache } from '../utils/createEmotionCache';
import { theme } from '../theme';

export interface MyCustomProviderProps {
  children: ReactNode;
  mode?: 'ssr' | 'client-only';
}

export const MyCustomProvider = ({
  children,
  mode = 'ssr',
}: MyCustomProviderProps) => {
  const isClient = typeof window !== 'undefined';

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