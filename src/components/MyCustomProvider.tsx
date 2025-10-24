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

/**
 * Un Provider de Material-UI personalizado que soporta modos SSR y Solo-Cliente.
 * @param mode 'ssr' para prerenderizado en el servidor, 'client-only' para solo renderizar en el navegador.
 */
export default function MyCustomProvider({
    children,
    mode = 'ssr'
}: MyCustomProviderProps) {
    // En SSR, mounted es true por defecto para que renderice en el servidor.
    // En client-only, espera al useEffect.
    const [mounted, setMounted] = useState(mode === 'ssr');

    useEffect(() => {
        // Si el modo es 'client-only', marcamos como montado después de la primera renderización
        if (mode === 'client-only') {
            setMounted(true);
        }
    }, [mode]);

    if (!mounted) {
        // Si no está montado y es 'ssr', renderiza sin el CacheProvider (para SSR inicial simple).
        // Si es 'client-only', retorna null para no renderizar nada en el servidor.
        return mode === 'ssr' ? (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        ) : null;
    }

    // Lógica para obtener el cache (llama a createEmotionCache que maneja Server/Client)
    const cache = createEmotionCache();

    // Renderización completa con CacheProvider para el manejo correcto de estilos y SSR/hidratación
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}