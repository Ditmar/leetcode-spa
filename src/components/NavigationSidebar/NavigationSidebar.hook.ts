import { useState } from 'react';

export const useNavigationSidebar = (initialCollapsed = false) => {
  const [collapsed, setCollapsed] = useState(initialCollapsed);
  const toggle = () => setCollapsed((c) => !c);
  return { collapsed, toggle, setCollapsed };
};

export default useNavigationSidebar;
