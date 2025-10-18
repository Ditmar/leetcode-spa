import { useState } from 'react';

export const useFilterPanel = (initialValue: string) => {
  const [selected, setSelected] = useState(initialValue);

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return { selected, handleSelect };
};
