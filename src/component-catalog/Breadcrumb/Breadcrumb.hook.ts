import { useState } from 'react';

export const useBreadcrumb = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => setExpanded(true);

  return { expanded, handleExpand };
};
