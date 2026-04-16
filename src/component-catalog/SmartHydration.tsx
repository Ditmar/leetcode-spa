import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

export interface SmartHydrationProps {
  threshold?: number;
}

export const SmartHydration = ({ threshold = 1000 }: SmartHydrationProps) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHydrated(true);
    }, threshold);

    return () => clearTimeout(timer);
  }, [threshold]);

  if (!hydrated) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box>
      <Typography>Hydrated after {threshold}ms</Typography>
    </Box>
  );
};