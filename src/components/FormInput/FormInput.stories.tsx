import type { Meta, StoryObj } from '@storybook/react';
import { FormInput } from './FormInput';
import { FORM_INPUT_VARIANTS, FORM_INPUT_SIZES, FORM_INPUT_TYPES } from './FormInput.constants';

const meta: Meta<typeof FormInput> = {
  title: 'Components/FormInput',
  component: FormInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Input estilizado para formularios, basado en MUI TextField con variantes y tamaños.',
      },
      page: './FormInput.docs.mdx',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(FORM_INPUT_VARIANTS),
    },
    size: {
      control: 'select',
      options: Object.keys(FORM_INPUT_SIZES),
    },
    type: {
      control: 'select',
      options: Object.keys(FORM_INPUT_TYPES),
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    errorMessage: { control: 'text' },
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
  args: {
    placeholder: 'Mail Id',
    value: '',
    variant: 'outlined',
    size: 'medium',
    type: 'text',
    disabled: false,
    errorMessage: '',
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: {
    placeholder: 'Username',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Password',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Mail Id',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Email',
    errorMessage: 'Invalid email format',
  },
};
