import { useState } from 'react';

export const useProblemList = () => {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleToggleMobileDrawer = () => {
    setIsMobileDrawerOpen((prev) => !prev);
  };

  const handleCloseMobileDrawer = () => {
    setIsMobileDrawerOpen(false);
  };

  return {
    isMobileDrawerOpen,
    handleToggleMobileDrawer,
    handleCloseMobileDrawer,
  };
};
