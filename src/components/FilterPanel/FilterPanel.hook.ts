import { useState, useCallback } from 'react';

export const useFilterPanel = (initialValue?: string) => {
  const [selected, setSelected] = useState<string | undefined>(initialValue);
  const handleSelect = useCallback((value: string) => {
    setSelected(value);
  }, []);

  return { selected, handleSelect } as const;
};
