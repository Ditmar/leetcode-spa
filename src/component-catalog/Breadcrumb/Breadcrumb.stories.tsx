import { Breadcrumb } from './Breadcrumb';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [{ label: 'Components', href: '/components' }, { label: 'Breadcrumb' }],

    separator: '/',
  },
};
