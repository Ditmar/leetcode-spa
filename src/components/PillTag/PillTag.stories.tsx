import { Box } from '@mui/material';

import { PillTag } from './PillTag';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PillTag> = {
  title: 'Components/PillTag',
  component: PillTag,
  argTypes: {
    label: {
      control: 'text',
      description: 'Text to display in the tag',
      table: { type: { summary: 'string' } },
    },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Visual variant of the tag (defined in constants)',
      table: {
        type: { summary: "'primary' | 'secondary'" },
        defaultValue: { summary: "'primary'" },
      },
    },
    clickable: {
      control: 'boolean',
      description: 'Makes the tag clickable',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the tag',
    },
    onDelete: {
      description: 'Callback fired when delete icon is clicked',
    },
    onClick: {
      description: 'Callback fired when tag is clicked',
    },
  },
};
export default meta;

type Story = StoryObj<typeof PillTag>;

export const Primary: Story = { args: { label: 'Courses', variant: 'primary' } };
export const Secondary: Story = { args: { label: 'Test', variant: 'secondary' } };
export const LongLabel: Story = {
  args: {
    label: 'This is an extremely long label that will be truncated with ellipsis',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: { story: 'Long labels are automatically truncated with ellipsis (...).' },
    },
  },
};

export const Clickable: Story = {
  args: { label: 'Click me', variant: 'primary', clickable: true },
  parameters: {
    docs: {
      description: { story: 'Clickable tag with hover effect. Press Enter or Space when focused.' },
    },
  },
};
export const Deleteable: Story = {
  args: { label: 'Delete me', variant: 'secondary' },
  parameters: {
    docs: { description: { story: 'Tag with delete functionality. Click the X icon to delete.' } },
  },
};
export const Disabled: Story = {
  args: { label: 'Disabled', variant: 'primary', disabled: true },
  parameters: {
    docs: { description: { story: 'Disabled state with reduced opacity. Not interactive.' } },
  },
};
export const MultipleTags: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <PillTag label="React" variant="primary" />
      <PillTag label="TypeScript" variant="secondary" />
      <PillTag label="Astro" variant="primary" />
      <PillTag label="MUI" variant="secondary" />
    </Box>
  ),
  parameters: {
    docs: { description: { story: 'Multiple tags displayed together with gap spacing.' } },
  },
};
export const VariantComparison: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 7.5 }}>
      <Box>
        <PillTag label="Courses" variant="primary" />
      </Box>
      <Box>
        <PillTag label="Test" variant="secondary" />
      </Box>
    </Box>
  ),
  parameters: {
    docs: { description: { story: 'Comparison between primary and secondary variants.' } },
  },
};
export const KeyboardAccessible: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <p style={{ color: '#666', marginBottom: '8px' }}>
        <strong>Keyboard Navigation:</strong> Tab to focus, Enter/Space to click
      </p>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <PillTag label="Press Enter" variant="primary" clickable />
        <PillTag label="Press Space" variant="secondary" clickable />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: { story: 'Demonstrates full keyboard accessibility (Tab, Enter, Space keys).' },
    },
  },
};
