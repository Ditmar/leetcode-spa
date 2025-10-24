import { Button, Stack } from '@mui/material';

export default function Navigation() {
    const handleNavigation = (path: string) => {
        window.location.href = path;
    };

    return (
        <Stack direction="row" spacing={2} sx={{ p: 2 }}>
            <Button variant="outlined" onClick={() => handleNavigation('/')}>
                Home
            </Button>
            <Button variant="outlined" onClick={() => handleNavigation('/mui-example')}>
                MUI Example
            </Button>
            <Button variant="outlined" onClick={() => handleNavigation('/hydration-demo')}>
                Hydration Demo
            </Button>
        </Stack>
    );
}
