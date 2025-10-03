import type { ReactNode } from 'react';
import MuiThemeProvider from './provider/MuiThemeProvider';

interface SSRMuiProviderProps {
  children: ReactNode;
}

export default function SSRMuiProvider({ children }: SSRMuiProviderProps) {
  return <MuiThemeProvider>{children}</MuiThemeProvider>;
}
