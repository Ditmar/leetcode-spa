import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import type { ReactElement } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Crear un tema por defecto para los tests
const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  theme?: any;
}

// Wrapper personalizado con Material-UI providers
const AllTheProviders = ({
  children,
  theme = defaultTheme,
}: {
  children: React.ReactNode;
  theme?: any;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

// Función de render personalizada
const customRender = (ui: ReactElement, options: CustomRenderOptions = {}) => {
  const { theme, ...renderOptions } = options;

  return render(ui, {
    wrapper: ({ children }) => <AllTheProviders theme={theme}>{children}</AllTheProviders>,
    ...renderOptions,
  });
};

// Re-exportar todo desde testing-library
export * from '@testing-library/react';

// Sobrescribir render con nuestra versión personalizada
export { customRender as render };
