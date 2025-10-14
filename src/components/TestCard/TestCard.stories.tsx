import type { Meta, StoryObj } from '@storybook/react';
import { TestCard } from './TestCard';
import { Card, CardMedia, Box, Typography } from '@mui/material';

const meta: Meta<typeof TestCard> = {
  title: 'Components/TestCard',
  component: TestCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    description: { control: 'text', description: 'Descripción de la tarjeta' },
    logo: { control: 'text', description: 'URL o nodo de imagen' },
    onSelect: { action: 'selected', description: 'Función al hacer click' },
    title: { control: 'text', description: 'Título de la tarjeta' },
  },
};
export default meta;

type Story = StoryObj<typeof TestCard>;

export const Basic: Story = {
  args: {
    title: 'Proyecto Básico',
    description: 'Tarjeta con imagen de fondo y texto.',
    logo: 'https://images.unsplash.com/photo-1538330496851-c475c75a7631?auto=format&fit=crop&w=800&q=80',
  },
};

export const HorizontalLayout: Story = {
  args: {
    title: 'Layout Horizontal',
    description: 'Esta tarjeta está en layout horizontal.',
    logo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  },
  render: (args) => (
    <Card
      sx={{
        borderRadius: 2,
        cursor: 'pointer',
        height: 300,
        mx: 'auto',
        overflow: 'hidden',
        position: 'relative',
        width: 500,
      }}
      onClick={args.onSelect}
    >
      {typeof args.logo === 'string' ? (
        <CardMedia
          component="img"
          image={args.logo}
          alt={args.title}
          sx={{ height: '100%', objectFit: 'cover', width: '100%' }}
        />
      ) : (
        <Box sx={{ height: '100%', width: '100%' }}>{args.logo}</Box>
      )}

      <Box
        sx={{
          backdropFilter: 'blur(6px)',
          background: 'linear-gradient(to left, rgba(0,0,0,0.75), transparent)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'flex-end',
          p: 3,
          position: 'absolute',
          right: 0,
          top: 0,
          width: '45%',
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {args.title}
        </Typography>
        <Typography variant="body2">{args.description}</Typography>
      </Box>
    </Card>
  ),
};

export const HoverEffect: Story = {
  args: {
    title: 'Hover Effect',
    description: 'Pasa el mouse para ver el efecto.',
    logo: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80',
  },
  render: (args) => (
    <TestCard
      {...args}
      sx={{
        '&:hover': { boxShadow: 12, transform: 'translateY(-5px)' },
        height: 420,
        mx: 'auto',
        transition: 'transform 0.3s, box-shadow 0.3s',
        width: 300,
      }}
    />
  ),
};

export const Interactive: Story = {
  args: {
    title: 'Tarjeta Interactiva',
    description: 'Haz click en la tarjeta para ver la acción simulada.',
    logo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    onSelect: () => alert('Tarjeta seleccionada'),
  },
};

export const LongText: Story = {
  args: {
    title: 'Título muy largo para probar overflow en la tarjeta',
    description:
      'Descripción extensa para validar overflow y wrapping en la tarjeta, garantizando que se vea correctamente.',
    logo: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80',
  },
};

export const NoImage: Story = {
  args: {
    title: 'Sin Imagen',
    description: 'Esta tarjeta no tiene imagen de fondo.',
  },
};

export const ShadowedCard: Story = {
  args: {
    title: 'Con Sombra',
    description: 'Esta tarjeta tiene sombra aplicada.',
    logo: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80',
  },
  render: (args) => (
    <TestCard
      {...args}
      sx={{
        borderRadius: 2,
        height: 420,
        mx: 'auto',
        width: 300,
        boxShadow: 6,
      }}
    />
  ),
};
