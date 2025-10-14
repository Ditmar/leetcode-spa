import { useEffect, useState } from 'react';

import MuiThemeProvider from './provider/MuiThemeProvider';

import type { ReactNode } from 'react';

interface ClientOnlyMuiProviderProps {
  children: ReactNode;
}

export default function ClientOnlyMuiProvider({ children }: ClientOnlyMuiProviderProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <MuiThemeProvider>{children}</MuiThemeProvider>;
}
