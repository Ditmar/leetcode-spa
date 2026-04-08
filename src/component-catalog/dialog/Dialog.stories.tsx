import { Button, TextField, Typography, Box } from '@mui/material';
import React from 'react';

import { Dialog } from './Dialog';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dialog> = {
  title: 'component-catalog/Dialog',
  component: Dialog,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Base: Story = {
  name: '1. Estructura Base',
  args: {
    isOpen: true,
    title: 'Título del Diálogo',
    onClose: () => {},
  },
};

export const SoloContenido: Story = {
  name: '2. Espacio de Contenido',
  args: {
    isOpen: true,
    title: 'Diálogo con Contenido',
    description: 'Este es el espacio dedicado a la descripción o instrucciones del formulario.',
    children: (
      <Box sx={{ p: 2, border: '1px dashed #ccc', textAlign: 'center' }}>
        <Typography>Aquí va el cuerpo del mensaje o inputs</Typography>
      </Box>
    ),
    onClose: () => {},
  },
};

export const SoloBotones: Story = {
  name: '3. Espacio de Acciones',
  args: {
    isOpen: true,
    title: 'Diálogo con Botones',
    actions: (
      <>
        <Button fullWidth variant="contained" sx={{ bgcolor: '#000' }}>
          Acción Principal
        </Button>
        <Button fullWidth variant="outlined" sx={{ color: '#000', borderColor: '#ccc' }}>
          Cancelar
        </Button>
      </>
    ),
    onClose: () => {},
  },
};

export const Completo: Story = {
  name: '4. Implementación Final',
  args: {
    isOpen: true,
    title: 'Dialog Title',
    description: 'This is a dialog description. You can put any content here.',
    children: (
      <TextField
        fullWidth
        label="Name"
        placeholder="Enter your name"
        variant="outlined"
        margin="normal"
      />
    ),
    actions: (
      <>
        <Button fullWidth variant="contained" sx={{ bgcolor: '#000', color: '#fff', mb: 1 }}>
          Save changes
        </Button>
        <Button fullWidth variant="outlined" sx={{ color: '#000', borderColor: '#ccc' }}>
          Cancel
        </Button>
      </>
    ),
    onClose: () => {},
  },
};
