import { useState, type Dispatch, type SetStateAction } from 'react';

export const useSectionNav = (
  initial?: string
): {
  focusedId: string | null;
  setFocusedId: Dispatch<SetStateAction<string | null>>;
} => {
  const [focusedId, setFocusedId] = useState<string | null>(initial ?? null);

  return {
    focusedId,
    setFocusedId,
  };
};
