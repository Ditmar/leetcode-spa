import type { Meta, StoryObj } from '@storybook/react';
import { TestCard } from './TestCard';

const meta: Meta<typeof TestCard> = {
  title: 'Components/TestCard',
  component: TestCard,
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
    description: 'Tarjeta con imagen de fondo y texto.',
    layout: 'vertical',
    logo: 'https://images.unsplash.com/photo-1538330496851-c475c75a7631?auto=format&fit=crop&w=800&q=80',
    sx: {},
    title: 'Proyecto Básico',
  },
};

export const HoverEffect: Story = {
  args: {
    description: 'Pasa el mouse para ver el efecto.',
    layout: 'vertical',
    logo: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80',
    sx: {
      boxShadow: 1,
      transition: 'box-shadow 0.3s',
      '&:hover': {
        boxShadow: 12,
      },
      '& img': {
        transition: 'transform 0.3s',
      },
      '&:hover img': {
        transform: 'scale(1.1)',
      },
    },
    title: 'Hover Effect',
  },
};

export const NoImage: Story = {
  args: {
    description: 'Esta tarjeta no tiene imagen de fondo.',
    layout: 'vertical',
    title: 'Sin Imagen',
  },
};

export const ShadowedCard: Story = {
  args: {
    description: 'Esta tarjeta tiene sombra aplicada.',
    layout: 'vertical',
    logo: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80',
    title: 'Con Sombra',
  },
};
