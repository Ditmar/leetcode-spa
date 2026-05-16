import { useCallback, useState } from 'react';

export function useLabelTooltip() {
  const [open, setOpen] = useState(false);

  /**
   * Opens the tooltip.
   */
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  /**
   * Closes the tooltip.
   */
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  /**
   * Toggles tooltip visibility.
   */
  const handleToggle = useCallback(() => {
    setOpen((previousOpen) => !previousOpen);
  }, []);

  return {
    open,
    handleOpen,
    handleClose,
    handleToggle,
  };
}
