import { Button, Stack, Typography } from '@mui/material';

/**
 * Componente React que demuestra la navegación programática usando JavaScript.
 * Nota: En un entorno de SPA completo, usarías un router como `react-router-dom` o `use:client` de Astro.
 * Aquí usamos una simple redirección de ventana para demostrar la interactividad.
 */
export default function Navigation() {
    const handleNavigation = (path: string) => {
        // Navegación simple que obliga a una recarga de página (útil para Astro)
        window.location.href = path;
    };

    return (
        <Stack direction="row" spacing={2} sx={{ p: 2, border: '1px solid #f0f0f0', bgcolor: '#fff' }}>
            <Typography variant="body1" component="span" sx={{ alignSelf: 'center', mr: 1 }}>
                Navegación JS:
            </Typography>
            <Button
                variant="outlined"
                onClick={() => handleNavigation('/')}
            >
                Home
            </Button>
            <Button
                variant="outlined"
                onClick={() => handleNavigation('/mui-example')}
            >
                MUI Example
            </Button>
            <Button
                variant="outlined"
                onClick={() => handleNavigation('/hydration-demo')}
            >
                Hydration Demo
            </Button>
        </Stack>
    );
}