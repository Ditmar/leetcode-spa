import { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';

interface SmartHydrationProps {
    threshold?: number; // Tiempo de espera en ms antes de decidir hidratar
}

/**
 * Demuestra la hidratación inteligente retrasada.
 * El componente se renderiza inicialmente sin interactividad.
 * Solo se hidrata (se hace interactivo) después de un tiempo de espera simulado (threshold).
 */
export default function SmartHydration({ threshold = 1000 }: SmartHydrationProps) {
    const [isHydrated, setIsHydrated] = useState(false);
    const [shouldHydrate, setShouldHydrate] = useState(false);

    // Paso 1: Decide si debe hidratarse después del umbral de tiempo
    useEffect(() => {
        // Simula lógica de hidratación inteligente (ej: espera a que el CPU esté libre)
        const timer = setTimeout(() => {
            setShouldHydrate(true);
        }, threshold);

        return () => clearTimeout(timer);
    }, [threshold]);

    // Paso 2: Ejecuta la hidratación (cambio de estado)
    useEffect(() => {
        if (shouldHydrate) {
            setIsHydrated(true);
        }
    }, [shouldHydrate]);

    // Renderizado inicial (antes de la hidratación)
    if (!isHydrated) {
        return (
            <Box sx={{ p: 2, bgcolor: 'grey.100', border: '1px dashed grey' }}>
                <Typography>🔄 Preparando hidratación... (Espera {threshold}ms)</Typography>
            </Box>
        );
    }

    // Renderizado después de la hidratación (interactivo)
    return (
        <Box sx={{ p: 2, bgcolor: 'success.light', border: '1px solid green' }}>
            <Typography variant="h6">✅ Componente **Hidratado**</Typography>
            <Button
                variant="contained"
                onClick={() => alert('¡Funcional! El componente se activó después de la carga.')}
                sx={{ mt: 1 }}
            >
                Interactuar
            </Button>
        </Box>
    );
}