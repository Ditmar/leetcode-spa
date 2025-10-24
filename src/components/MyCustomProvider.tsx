import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { useEffect, useState } from 'react';

import createEmotionCache from '../style-library/cache/createEmotionCache';

import type { ReactNode } from 'react';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#90caf9' },
        secondary: { main: '#f48fb1' },
    },
});

interface MyCustomProviderProps {
    children: ReactNode;
    mode?: 'ssr' | 'client-only';
}

export default function MyCustomProvider({ children, mode = 'ssr' }: MyCustomProviderProps) {
    const [mounted, setMounted] = useState(mode === 'ssr');

    useEffect(() => {
        if (mode === 'client-only') {
            setMounted(true);
        }
    }, [mode]);

    if (!mounted) {
        return mode === 'ssr' ? (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        ) : null;
    }

    const cache = createEmotionCache();

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}
