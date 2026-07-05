import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import createEmotionCache from '../cache/createEmotionCache';
import { darkTheme, lightTheme } from '../theme/theme';

import type { EmotionCache } from '@emotion/cache';
import type { ReactNode } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeModeContextValue {
  mode: ThemeMode;
  resolvedMode: 'light' | 'dark';
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const THEME_MODE_KEY = 'theme-mode';

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

const clientSideEmotionCache = createEmotionCache();

function getSystemMode(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') return 'system';

  const storedMode = localStorage.getItem(THEME_MODE_KEY);

  if (storedMode === 'light' || storedMode === 'dark' || storedMode === 'system') {
    return storedMode;
  }

  return 'system';
}

interface MuiThemeProviderProps {
  children: ReactNode;
  emotionCache?: EmotionCache;
}

export default function MuiThemeProvider({
  children,
  emotionCache = clientSideEmotionCache,
}: MuiThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(getInitialMode);
  const [systemMode, setSystemMode] = useState<'light' | 'dark'>(getSystemMode);

  const resolvedMode = mode === 'system' ? systemMode : mode;

  const selectedTheme = useMemo(() => {
    return resolvedMode === 'dark' ? darkTheme : lightTheme;
  }, [resolvedMode]);

  const setMode = (nextMode: ThemeMode) => {
    setModeState(nextMode);
    localStorage.setItem(THEME_MODE_KEY, nextMode);
  };

  const toggleMode = () => {
    setMode(resolvedMode === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = () => {
      setSystemMode(mediaQuery.matches ? 'dark' : 'light');
    };

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key !== THEME_MODE_KEY) return;

      const nextMode = event.newValue;

      if (nextMode === 'light' || nextMode === 'dark' || nextMode === 'system') {
        setModeState(nextMode);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeModeContext.Provider value={{ mode, resolvedMode, setMode, toggleMode }}>
        <ThemeProvider theme={selectedTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </CacheProvider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error('useThemeMode must be used inside MuiThemeProvider');
  }

  return context;
}
