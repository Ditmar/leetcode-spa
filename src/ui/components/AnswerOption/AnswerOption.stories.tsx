import AnswerOption from './AnswerOption';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Forms/AnswerOption',
  component: AnswerOption,
  tags: ['autodocs'],
} satisfies Meta<typeof AnswerOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {
  args: {
    label: 'Female',
    value: 'female',
    selected: true,
    onChange: () => {},
  },
};

export const Unselected: Story = {
  args: {
    label: 'Female',
    value: 'female',
    selected: false,
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: 'Female',
    value: 'female',
    selected: false,
    disabled: true,
    onChange: () => {},
  },
};
