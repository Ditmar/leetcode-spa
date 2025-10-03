import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import type { ReactNode } from 'react';
import type { EmotionCache } from '@emotion/cache';
import theme from '../theme/theme';
import createEmotionCache from '../cache/createEmotionCache';

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
