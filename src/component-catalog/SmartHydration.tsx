import { Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';

export interface SmartHydrationProps {
  threshold?: number;
}

export const SmartHydration = ({ threshold = 1000 }: SmartHydrationProps) => {
  const [shouldHydrate, setShouldHydrate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldHydrate(true);
    }, threshold);

    return () => clearTimeout(timer);
  }, [threshold]);

  if (!shouldHydrate) {
    return (
      <Box>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography>Content hydrated</Typography>
      <Button variant="contained">Action</Button>
    </Box>
  );
};
