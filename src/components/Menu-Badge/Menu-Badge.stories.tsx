import * as React from 'react';

import MenuBadge from './Menu-Badge';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuBadge> = {
  title: 'Components/Menu-Badge',
  component: MenuBadge,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '16px', backgroundColor: 'transparent' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MenuBadge>;

export const PrimaryText: Story = {
  args: {
    label: 'Dashboard',
    variant: 'primaryText',
  },
};

export const SecondaryText: Story = {
  args: {
    label: 'Dashboard',
    variant: 'secondaryText',
  },

};
