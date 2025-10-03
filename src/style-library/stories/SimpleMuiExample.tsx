import { Button, Typography, Box, Paper } from '@mui/material';
import { useState } from 'react';

export default function SimpleMuiExample() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ p: 4, maxWidth: 400, mx: 'auto' }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          MUI + SSR Test
        </Typography>
        <Typography variant="body1" paragraph>
          Este componente usa Material-UI con soporte completo para SSR.
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Contador: {count}
        </Typography>
        <Button variant="contained" onClick={() => setCount(count + 1)} fullWidth>
          Incrementar
        </Button>
      </Paper>
    </Box>
  );
}
