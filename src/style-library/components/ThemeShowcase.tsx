import { Box, Typography, Button, Card, CardContent, Chip, Stack } from '@mui/material';
import React from 'react';

import { useTheme } from '../hooks/useTheme';

export default function ThemeShowcase() {
  const theme = useTheme();

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h2" gutterBottom>
        🎨 Sistema de Temas Tipado
      </Typography>

      <Stack spacing={4}>
        {/* Sección de Colores */}
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Paleta de Colores
            </Typography>

            <Stack spacing={3}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  Colores Principales
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button variant="contained" color="primary">
                    Primary
                  </Button>
                  <Button variant="contained" color="secondary">
                    Secondary
                  </Button>
                  <Button variant="contained" color="error">
                    Error
                  </Button>
                  <Button variant="contained" color="warning">
                    Warning
                  </Button>
                  <Button variant="contained" color="info">
                    Info
                  </Button>
                  <Button variant="contained" color="success">
                    Success
                  </Button>
                </Stack>
              </Box>

              <Box>
                <Typography variant="h6" gutterBottom>
                  Chips con Estados
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Chip label="Success" color="success" />
                  <Chip label="Error" color="error" />
                  <Chip label="Warning" color="warning" />
                  <Chip label="Info" color="info" />
                  <Chip label="Primary" color="primary" />
                  <Chip label="Secondary" color="secondary" />
                </Stack>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        {/* Sección de Tipografía */}
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Tipografía
            </Typography>

            <Stack spacing={2}>
              <Box>
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="caption" color="text.secondary">
                  h1 - {theme.getTypography('h1')?.fontSize || '2.5rem'}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h2">Heading 2</Typography>
                <Typography variant="caption" color="text.secondary">
                  h2 - {theme.getTypography('h2')?.fontSize || '2rem'}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h3">Heading 3</Typography>
                <Typography variant="caption" color="text.secondary">
                  h3 - {theme.getTypography('h3')?.fontSize || '1.75rem'}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body1">
                  Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Este es el texto
                  principal para párrafos.
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  body1 - {theme.getTypography('body1')?.fontSize || '1rem'}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2">
                  Body 2 - Texto secundario más pequeño para descripciones.
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  body2 - {theme.getTypography('body2')?.fontSize || '0.875rem'}
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        {/* Sección de Spacing */}
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Sistema de Espaciado
            </Typography>

            <Box>
              <Typography variant="h6" gutterBottom>
                Espacios (theme.spacing)
              </Typography>
              <Stack spacing={1}>
                {[1, 2, 3, 4, 8].map((multiplier) => (
                  <Box key={multiplier} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="body2" sx={{ minWidth: 80 }}>
                      spacing({multiplier}):
                    </Typography>
                    <Box
                      sx={{
                        height: 24,
                        width: theme.getSpacing(multiplier),
                        backgroundColor: theme.getColor('primary', 'main'),
                        borderRadius: 1,
                        minWidth: 8,
                      }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {theme.getSpacing(multiplier)}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </CardContent>
        </Card>

        {/* Información del Tema */}
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Información del Tema
            </Typography>

            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="subtitle2" sx={{ minWidth: 120 }}>
                  Modo:
                </Typography>
                <Chip
                  label={theme.isDark ? 'Oscuro' : 'Claro'}
                  color={theme.isDark ? 'secondary' : 'primary'}
                  size="small"
                />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="subtitle2" sx={{ minWidth: 120 }}>
                  Fuente:
                </Typography>
                <Typography variant="body2">
                  {theme.typography.fontFamily?.split(',')[0]?.replace(/"/g, '') || 'Roboto'}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="subtitle2" sx={{ minWidth: 120 }}>
                  Border Radius:
                </Typography>
                <Typography variant="body2">{theme.shape.borderRadius}px</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="subtitle2" sx={{ minWidth: 120 }}>
                  Spacing Base:
                </Typography>
                <Typography variant="body2">{theme.getSpacing(1)}</Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        {/* Sombras Personalizadas */}
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Sombras Personalizadas
            </Typography>

            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              {Object.entries(theme.customShadows).map(([key, shadow]) => (
                <Box
                  key={key}
                  sx={{
                    width: 120,
                    height: 80,
                    backgroundColor: 'background.paper',
                    boxShadow: shadow as string,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="caption" fontWeight="bold">
                    {key}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
