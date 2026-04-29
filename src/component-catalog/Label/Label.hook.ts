import { useState, useCallback } from 'react';

export function useLabelTooltip() {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleToggle = useCallback(() => setOpen((prev) => !prev), []);

  return { open, handleOpen, handleClose, handleToggle };
}
