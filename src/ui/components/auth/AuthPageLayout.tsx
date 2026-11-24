import { Box, Container, CssBaseline, ThemeProvider, Typography } from '@mui/material';

import AppProvider from '../../../context/AppConfigContext';
import ClientOnlyMuiProvider from '../../../style-library/ClientOnlyMuiProvider';

import type { Theme } from '@mui/material';
import type { ReactNode } from 'react';

interface AuthPageLayoutProps {
  /** Theme for the page (login or signup). It replaces the base theme inside the page. */
  theme: Theme;
  title: string;
  children: ReactNode;
}

export default function AuthPageLayout({ theme, title, children }: AuthPageLayoutProps) {
  return (
    <ClientOnlyMuiProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppProvider>
          <Container component="main" maxWidth="sm" sx={{ py: { xs: 4, sm: 8 } }}>
            <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
              {title}
            </Typography>
            <Box>{children}</Box>
          </Container>
        </AppProvider>
      </ThemeProvider>
    </ClientOnlyMuiProvider>
  );
}
