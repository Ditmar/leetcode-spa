import { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';

interface SmartHydrationProps {
    threshold?: number;
}

export default function SmartHydration({ threshold = 500 }: SmartHydrationProps) {
    const [isHydrated, setIsHydrated] = useState(false);
    const [shouldHydrate, setShouldHydrate] = useState(false);

    // Lógica para activar la hidratación
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldHydrate(true); // Cambiar a true cuando el temporizador se cumpla
        }, threshold); // Usar threshold como el tiempo para esperar

        return () => clearTimeout(timer); // Limpiar temporizador cuando se desmonta
    }, [threshold]);

    // Al cambiar el estado `shouldHydrate`, actualizar `isHydrated`
    useEffect(() => {
        if (shouldHydrate) {
            setIsHydrated(true);
        }
    }, [shouldHydrate]);

    // Si aún no se ha hidratado, mostrar el mensaje de preparación
    if (!isHydrated) {
        return (
            <Box sx={{ p: 2, bgcolor: 'grey.100' }}>
                <Typography>🔄 Preparando hidratación...</Typography>
            </Box>
        );
    }

    // Si está hidratado, mostrar el mensaje de interactuar
    return (
        <Box sx={{ p: 2, bgcolor: 'primary.light' }}>
            <Typography variant="h6">✅ Componente Hidratado</Typography>
            <Button
                variant="contained"
                onClick={() => alert('¡Funcional!')}
                sx={{ mt: 1 }}
            >
                Interactuar
            </Button>
        </Box>
    );
}
