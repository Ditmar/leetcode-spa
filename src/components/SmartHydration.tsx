import React, { useState, useEffect } from 'react';

interface Props {
  threshold?: number;
  children: React.ReactNode;
}

const SmartHydration: React.FC<Props> = ({ threshold = 1500, children }) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHydrated(true), threshold);
    return () => clearTimeout(timer);
  }, [threshold]);

  return hydrated ? <>{children}</> : null;
};

export default SmartHydration;
