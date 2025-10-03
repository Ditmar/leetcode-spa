import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import MuiThemeProvider from './provider/MuiThemeProvider';

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
