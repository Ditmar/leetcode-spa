import { Favorite as FavoriteIcon, Share as ShareIcon, Add as AddIcon } from '@mui/icons-material';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Box,
  Stack,
  Chip,
  IconButton,
} from '@mui/material';
import { useState } from 'react';

export default function MuiExample() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ padding: 4, maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Material-UI con SSR en Astro
      </Typography>

      <Stack spacing={3}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Ejemplo de Componentes MUI
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Este es un ejemplo de Material-UI funcionando correctamente con SSR en Astro. Los
              estilos se renderizan del lado del servidor para evitar el flash de contenido sin
              estilo.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Chip label="React" color="primary" />
              <Chip label="Material-UI" color="secondary" />
              <Chip label="SSR" color="success" />
              <Chip label="Astro" variant="outlined" />
            </Stack>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Typography variant="h6">Counter: {count}</Typography>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setCount(count + 1)}
              >
                Incrementar
              </Button>
            </Box>
          </CardContent>

          <CardActions>
            <IconButton
              onClick={() => setLiked(!liked)}
              color={liked ? 'error' : 'default'}
              aria-label="like"
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <Button size="small" variant="outlined">
              Más info
            </Button>
          </CardActions>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Botones de Ejemplo
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="text">Text</Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
              <Button variant="contained" disabled>
                Disabled
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
