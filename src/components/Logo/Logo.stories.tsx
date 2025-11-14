import { Logo } from './Logo';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component:
          'The **Logo** component displays the main application logo, either vertically or horizontally depending on the `orientation` prop.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['vertical', 'horizontal'],
      description: 'Defines the orientation of the displayed logo.',
      table: {
        type: { summary: `"vertical" | "horizontal"` },
        defaultValue: { summary: 'vertical' },
      },
    },
    width: {
      control: { type: 'number' },
      description: 'Logo width in pixels.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    height: {
      control: { type: 'number' },
      description: 'Logo height in pixels.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
  },
  args: {
    orientation: 'vertical',
    width: 100,
    height: 100,
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
  args: {
    orientation: 'vertical',
    width: 100,
    height: 100,
  },
  name: 'Vertical logo',
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    width: 150,
    height: 80,
  },
  name: 'Horizontal logo',
};
