import { useState } from 'react';

import { FormInput } from './FormInput';
import { FORM_INPUT_VARIANTS, FORM_INPUT_SIZES, FORM_INPUT_TYPES } from './FormInput.constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FormInput> = {
  title: 'Components/FormInput',
  component: FormInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(FORM_INPUT_VARIANTS),
    },
    size: {
      control: 'select',
      options: Object.values(FORM_INPUT_SIZES),
    },
    type: {
      control: 'select',
      options: Object.values(FORM_INPUT_TYPES),
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    errorMessage: { control: 'text' },
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
  args: {
    label: 'Mail Id',
    placeholder: 'Enter your mail',
    value: '',
    variant: 'outlined',
    size: 'medium',
    type: 'text',
    disabled: false,
    errorMessage: '',
  },
};

// Storybook requires a default export for CSF meta
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const PasswordInteractive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <FormInput
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Mail Id',
    placeholder: 'Enter your email',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: '',
    placeholder: 'Enter your email',
    errorMessage: 'Invalid email format',
  },
};
