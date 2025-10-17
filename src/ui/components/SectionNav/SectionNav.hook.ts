import { useState } from 'react';
export const useSectionNav = (initial?: string) => {
  const [focusedId, setFocusedId] = useState<string | null>(initial ?? null);

  return {
    focusedId,
    setFocusedId,
  };
};
