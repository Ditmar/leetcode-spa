import { useMediaQuery, useTheme } from '@mui/material';

export const useDrawer = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return {
    isMobile,
  };
};
