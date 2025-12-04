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
        defaultValue: { summary: '192' },
      },
    },
    height: {
      control: { type: 'number' },
      description: 'Logo height in pixels.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '88' },
      },
    },
  },
  args: {
    orientation: 'vertical',
    width: 192,
    height: 88,
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    width: 266,
    height: 45,
  },
  name: 'Default',
};
export const Primary: Story = {
  args: {
    orientation: 'vertical',
    width: 192,
    height: 88,
  },
  name: 'Vertical',
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    width: 266,
    height: 45,
  },
  name: 'Horizontal',
};
