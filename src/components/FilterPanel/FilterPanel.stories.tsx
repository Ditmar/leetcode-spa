import { FilterPanel } from './FilterPanel';
import { DEFAULT_FILTERS } from './FilterPanel.constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FilterPanel> = {
  title: 'Components/FilterPanel',
  component: FilterPanel,
  argTypes: {
    panelVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    onSelect: { action: 'onSelect' },
  },
};

export default meta;
type Story = StoryObj<typeof FilterPanel>;

export const Primary: Story = {
  args: {
    filters: DEFAULT_FILTERS,
    selectedValue: 'all',
    panelVariant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    filters: DEFAULT_FILTERS,
    selectedValue: 'all',
    panelVariant: 'secondary',
    size: 'medium',
  },
};
