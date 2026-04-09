import { Box, Typography, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';

type SmartHydrationProps = {
  threshold?: number; // 👈 opcional para no romper tests
};

const SmartHydration = ({ threshold = 1000 }: SmartHydrationProps) => {
  const [shouldHydrate, setShouldHydrate] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldHydrate(true), threshold);
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
      <Button variant="contained" onClick={() => alert('¡Funcional!')} sx={{ mt: 1 }}>
        Interactuar
      </Button>
    </Box>
  );
};

export default SmartHydration;
