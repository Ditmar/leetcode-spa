import NavigationSidebar from './NavigationSidebar';
import { DEFAULT_NAV_ITEMS } from './NavigationSidebar.constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavigationSidebar> = {
  title: 'Components/NavigationSidebar',
  component: NavigationSidebar,
};

export default meta;

type Story = StoryObj<typeof NavigationSidebar>;

export const Default: Story = {
  args: {
    items: DEFAULT_NAV_ITEMS,
    currentPath: '/dashboard',
  },
};

export const ActiveTests: Story = {
  args: {
    items: DEFAULT_NAV_ITEMS,
    currentPath: '/tests',
  },
};
