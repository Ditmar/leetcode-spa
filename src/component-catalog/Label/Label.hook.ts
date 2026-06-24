import { useCallback, useState } from 'react';

export function useLabelTooltip() {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

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
