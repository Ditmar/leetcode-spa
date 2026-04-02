import { Form } from './Form';

import type { FormField } from './Form.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Form> = {
  title: 'component-catalog/Form',
  component: Form,
  parameters: {
    docs: {
      description: {
        component:
          'A flexible, schema-driven form builder built with React Hook Form and Material-UI.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Form> = {
  args: {
    fields: [
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        span: 6,
        placeholder: 'email@example.com',
        required: true,
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        span: 6,
        placeholder: '********',
        required: true,
      },
      {
        name: 'search',
        label: 'Search with icon',
        type: 'search',
        span: 6,
        placeholder: 'Search...',
        required: true,
      },
      {
        name: 'disabled',
        label: 'Disabled Input',
        type: 'text',
        span: 6,
        disabled: true,
        placeholder: 'Disabled',
      },
      {
        name: 'bio',
        label: 'Bio',
        type: 'textarea',
        span: 12,
        rows: 4,
        placeholder: 'Tell us about yourself...',
      },
    ] as FormField[],
    onSubmit: () => {
      alert('Form submitted!');
    },
    submitButtonText: 'Submit',
    resetButtonText: 'Reset',
    showResetButton: true,
  },
};

export const AllFieldTypes: StoryObj<typeof Form> = {
  args: {
    fields: [
      {
        name: 'username',
        label: 'Username',
        type: 'text',
        span: 6,
        placeholder: 'Enter username',
        required: true,
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        span: 6,
        placeholder: 'email@example.com',
        required: true,
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        span: 6,
        placeholder: '••••••••',
        required: true,
      },
      {
        name: 'search',
        label: 'Search with icon',
        type: 'search',
        span: 6,
        placeholder: 'Search...',
        required: true,
      },
      {
        name: 'role',
        label: 'Role',
        type: 'select',
        span: 6,
        options: [
          { label: 'Admin', value: 'admin' },
          { label: 'User', value: 'user' },
          { label: 'Guest', value: 'guest' },
        ],
        required: true,
      } as FormField,
      {
        name: 'gender',
        label: 'Gender',
        type: 'radio',
        span: 4,
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Other', value: 'other' },
        ],
      },
      {
        name: 'terms',
        label: 'Accept Terms',
        type: 'checkbox',
        span: 12,
        required: true,
      },
      {
        name: 'disabled',
        label: 'Disabled Input',
        type: 'text',
        span: 6,
        placeholder: 'Disabled',
        disabled: true,
      },
      {
        name: 'bio',
        label: 'Bio',
        type: 'textarea',
        span: 12,
        rows: 4,
        placeholder: 'Tell us about yourself...',
      },
    ] as FormField[],
    onSubmit: () => {
      alert('Form submitted!');
    },
    submitButtonText: 'Submit Form',
    resetButtonText: 'Clear Form',
    showResetButton: true,
  },
};
