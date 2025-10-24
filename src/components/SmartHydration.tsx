import { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';

export default function SmartHydration({ threshold = 1000 }) {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsHydrated(true), threshold);
        return () => clearTimeout(timer);
    }, [threshold]);

    return isHydrated ? (
        <Box sx={{ p: 2, bgcolor: 'primary.light' }}>
            <Typography variant="h6">✅ Componente Hidratado</Typography>
            <Button onClick={() => alert('¡Funcional!')}>Interactuar</Button>
        </Box>
    ) : (
        <Box sx={{ p: 2, bgcolor: 'grey.200' }}>
            <Typography>🔄 Preparando hidratación...</Typography>
        </Box>
    );
}
