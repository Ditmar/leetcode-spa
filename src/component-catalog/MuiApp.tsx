import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import React, { useState, useEffect } from 'react';

import createEmotionCache from '../style-library/cache/createEmotionCache';
import SimpleMuiExample from '../style-library/stories/SimpleMuiExample';

import type { EmotionCache } from '@emotion/react';

// Crear un tema básico
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

export interface MuiAppProps {
  emotionCache?: EmotionCache;
}

export default function MuiApp({ emotionCache }: MuiAppProps) {
  const [clientEmotionCache, setClientEmotionCache] = useState<EmotionCache | null>(null);

  useEffect(() => {
    if (!emotionCache) {
      setClientEmotionCache(createEmotionCache());
    }
  }, [emotionCache]);

  const cache = emotionCache || clientEmotionCache;

  if (!cache) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SimpleMuiExample />
      </ThemeProvider>
    );
  }

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SimpleMuiExample />
      </ThemeProvider>
    </CacheProvider>
  );
}
