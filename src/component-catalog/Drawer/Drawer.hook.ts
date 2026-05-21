import { useMediaQuery, useTheme } from '@mui/material';
import { useState, useCallback } from 'react';

export const useDrawer = (initialOpen = false) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isOpen, setIsOpen] = useState(initialOpen);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);
  const handleToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isMobile,
    isOpen,
    handleOpen,
    handleClose,
    handleToggle,
  };
};