import { LanguageSelector } from './LanguageSelector';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LanguageSelector> = {
  title: 'component-catalog/LanguageSelector',
  component: LanguageSelector,
  args: {
    compact: false,
  },
};

export default meta;

type Story = StoryObj<typeof LanguageSelector>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    compact: true,
  },
};
