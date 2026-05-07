import { useState, useCallback } from 'react';

interface UseLabelTooltipReturn {
  open: boolean;
  handleToggle: () => void;
}

export function useLabelTooltip(): UseLabelTooltipReturn {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return {
    open,
    handleToggle,
  };
}