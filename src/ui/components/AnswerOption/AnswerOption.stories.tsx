import { type Meta, type StoryObj } from '@storybook/react';

import { AnswerOption } from './AnswerOption';

const meta: Meta<typeof AnswerOption> = {
  title: 'Forms/AnswerOption',
  component: AnswerOption,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

const handleChange = () => {};

export const Selected: Story = {
  args: {
    label: 'Female',
    value: 'female',
    selected: true,
    onChange: handleChange,
  },
};

export const Unselected: Story = {
  args: {
    label: 'Female',
    value: 'female',
    selected: false,
    onChange: handleChange,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Female',
    value: 'female',
    selected: false,
    disabled: true,
    onChange: handleChange,
  },
};
