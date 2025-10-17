import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import createEmotionCache from '../cache/createEmotionCache';
import theme from '../theme/theme';
import type { EmotionCache } from '@emotion/cache';
import type { ReactNode } from 'react';

const clientSideEmotionCache = createEmotionCache();

interface MuiThemeProviderProps {
  children: ReactNode;
  emotionCache?: EmotionCache;
}

export default function MuiThemeProvider({
  children,
  emotionCache = clientSideEmotionCache,
}: MuiThemeProviderProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
