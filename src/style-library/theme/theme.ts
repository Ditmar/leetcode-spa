import { createCustomTheme } from '../types/theme.helpers';
import type { ThemeConfig } from '../types/theme.types';

// Configuración del tema principal
const themeConfig: ThemeConfig = {
    mode: 'light',
    primaryColor: '#1976d2',
    secondaryColor: '#dc004e',
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    borderRadius: 12,
    spacing: 8,
};

// Crear tema con tipos completos
const theme = createCustomTheme(themeConfig);

// Exportar tema y configuración
export default theme;
export { themeConfig };

// Tema oscuro alternativo
export const darkTheme = createCustomTheme({
    ...themeConfig,
    mode: 'dark',
});

// Temas predefinidos adicionales
export const modernTheme = createCustomTheme({
    mode: 'light',
    primaryColor: '#6366f1',
    secondaryColor: '#ec4899',
    fontFamily: '"Inter", sans-serif',
    borderRadius: 16,
    spacing: 8,
});

export const classicTheme = createCustomTheme({
    mode: 'light',
    primaryColor: '#2563eb',
    secondaryColor: '#dc2626',
    fontFamily: '"Georgia", serif',
    borderRadius: 4,
    spacing: 8,
});