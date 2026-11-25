import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import createEmotionCache from '../cache/createEmotionCache';
import theme, { darkTheme } from '../theme/theme';

import type { EmotionCache } from '@emotion/cache';
import type { ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeContextValue {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextValue>({
  mode: 'system',
  setMode: () => {},
  isDark: false,
});

export function useThemeMode(): ThemeContextValue {
  return useContext(ThemeContext);
}

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') return 'system';
  try {
    const cookieMatch = document.cookie.match(/(?:^|;\s*)theme=([^;]*)/);
    const cookieTheme = cookieMatch ? (decodeURIComponent(cookieMatch[1]) as ThemeMode) : null;
    if (cookieTheme === 'light' || cookieTheme === 'dark' || cookieTheme === 'system') {
      return cookieTheme;
    }
    const stored = localStorage.getItem('theme') as ThemeMode | null;
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }
  } catch {
    // Ignore storage/cookie access errors
  }
  return 'system';
}

function getSystemPrefersDark(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
}

const clientSideEmotionCache = createEmotionCache();

interface MuiThemeProviderProps {
  children: ReactNode;
  emotionCache?: EmotionCache;
  defaultMode?: ThemeMode;
}

export default function MuiThemeProvider({
  children,
  emotionCache = clientSideEmotionCache,
  defaultMode,
}: MuiThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(() => defaultMode ?? getInitialMode());
  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean>(getSystemPrefersDark);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      setSystemPrefersDark(e.matches);
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  const isDark = mode === 'dark' || (mode === 'system' && systemPrefersDark);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem('theme', mode);
      document.cookie = `theme=${mode};path=/;max-age=31536000;SameSite=Lax`;
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
      }
    } catch {
      // Ignore storage/cookie access errors
    }
  }, [mode, isDark]);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
  }, []);

  const currentTheme = useMemo(() => (isDark ? darkTheme : theme), [isDark]);

  const contextValue = useMemo(
    () => ({
      mode,
      setMode,
      isDark,
    }),
    [mode, setMode, isDark]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </ThemeContext.Provider>
  );
}
