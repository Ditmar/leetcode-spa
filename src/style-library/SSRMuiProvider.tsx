import MuiThemeProvider from './provider/MuiThemeProvider';

import type { ReactNode } from 'react';

interface SSRMuiProviderProps {
  children: ReactNode;
}

export default function SSRMuiProvider({ children }: SSRMuiProviderProps) {
  return <MuiThemeProvider>{children}</MuiThemeProvider>;
}
