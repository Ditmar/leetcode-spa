import { useState } from "react";

export const useCardExpand = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return {
    expanded,
    toggleExpand,
  };
};