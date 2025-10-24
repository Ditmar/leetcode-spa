import { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';

interface SmartHydrationProps {
    threshold?: number;
}

export default function SmartHydration({ threshold = 1000 }: SmartHydrationProps) {
    const [isHydrated, setIsHydrated] = useState(false);
    const [shouldHydrate, setShouldHydrate] = useState(false);

    useEffect(() => {
        // Simula lógica de hidratación inteligente
        const timer = setTimeout(() => {
            setShouldHydrate(true);
        }, threshold);

        return () => clearTimeout(timer);
    }, [threshold]);

    useEffect(() => {
        if (shouldHydrate) {
            setIsHydrated(true);
        }
    }, [shouldHydrate]);

    if (!isHydrated) {
        return (
            <Box sx={{ p: 2, bgcolor: 'grey.100' }}>
                <Typography>🔄 Preparando hidratación...</Typography>
            </Box>
        );
    }

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
