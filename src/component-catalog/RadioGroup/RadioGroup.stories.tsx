import { RadioGroup } from './RadioGroup';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Component Catalog/RadioGroup',
  component: RadioGroup,
  args: {
    options: [
      { label: 'Option One', value: '1' },
      { label: 'Option Two', value: '2' },
      { label: 'Option Three', value: '3' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    label: 'Radio Group',
    direction: 'column',
  },
};

export const Row: Story = {
  args: {
    label: 'Row Layout',
    direction: 'row',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Pick an option',
    helperText: 'Select the option that best applies.',
    direction: 'column',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Pick an option',
    helperText: 'This field is required.',
    error: true,
    direction: 'column',
  },
};

export const WithDisabledOption: Story = {
  args: {
    label: 'Some options disabled',
    options: [
      { label: 'Option One', value: '1' },
      { label: 'Option Two (unavailable)', value: '2', disabled: true },
      { label: 'Option Three', value: '3' },
    ],
    direction: 'column',
  },
};

export const GroupDisabled: Story = {
  args: {
    label: 'Entire group disabled',
    disabled: true,
    direction: 'column',
  },
};
