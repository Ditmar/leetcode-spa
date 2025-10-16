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
    layout: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Layout de la tarjeta',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TestCard>;

export const Basic: Story = {
  args: {
    title: 'Proyecto Básico',
    description: 'Tarjeta con imagen de fondo y texto.',
    logo: 'https://images.unsplash.com/photo-1538330496851-c475c75a7631?auto=format&fit=crop&w=800&q=80',
    layout: 'horizontal',
  },
};

export const HorizontalLayout: Story = {
  args: {
    title: 'Layout Horizontal',
    description: 'Esta tarjeta está en layout horizontal.',
    logo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    layout: 'vertical', // aquí demostramos la API
  },
  render: (args) => <TestCard {...args} />,
};

export const HoverEffect: Story = {
  args: {
    title: 'Hover Effect',
    description: 'Pasa el mouse para ver el efecto.',
    logo: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80',
    layout: 'vertical',
    sx: {
      '&:hover': { boxShadow: 12, transform: 'translateY(-5px)' },
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
  },
};

export const Interactive: Story = {
  args: {
    title: 'Tarjeta Interactiva',
    description: 'Haz click en la tarjeta para ver la acción simulada.',
    logo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    layout: 'vertical',
  },
};

export const LongText: Story = {
  args: {
    title: 'Título muy largo para probar overflow en la tarjeta',
    description:
      'Descripción extensa para validar overflow y wrapping en la tarjeta, garantizando que se vea correctamente.',
    logo: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80',
    layout: 'vertical',
  },
};

export const NoImage: Story = {
  args: {
    title: 'Sin Imagen',
    description: 'Esta tarjeta no tiene imagen de fondo.',
    layout: 'vertical',
  },
};

export const ShadowedCard: Story = {
  args: {
    title: 'Con Sombra',
    description: 'Esta tarjeta tiene sombra aplicada.',
    logo: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80',
    layout: 'vertical',
    sx: {
      boxShadow: 6,
    },
  },
};
