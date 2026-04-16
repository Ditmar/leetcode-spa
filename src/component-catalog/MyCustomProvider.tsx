import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '../theme/index.ts';
import { createEmotionCache } from '../utils/createEmotionCache.ts';

import type { ReactNode } from 'react';

export interface MyCustomProviderProps {
  children: ReactNode;
  mode?: 'ssr' | 'client';
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