import { LandingPage } from './LandingPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LandingPage> = {
  title: 'Components/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Página de inicio inspirada en LeetCode con diseño moderno y gradientes atractivos.',
      },
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof LandingPage>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Vista por defecto de la página de landing con todos los elementos principales.',
      },
    },
  },
};

export const MobileView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Vista adaptada para dispositivos móviles con diseño responsive.',
      },
    },
  },
};
