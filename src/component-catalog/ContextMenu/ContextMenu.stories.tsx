import type { Meta, StoryObj } from '@storybook/react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import DeleteIcon from '@mui/icons-material/Delete';
import { ContextMenu } from './ContextMenu';

const meta: Meta<typeof ContextMenu> = {
  title: 'component-catalog/ContextMenu',
  component: ContextMenu,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  args: {
    groups: [
      {
        id: 'group-1',
        items: [
          { id: 'copy', label: 'Copy', icon: <ContentCopyIcon fontSize="small" /> },
          { id: 'paste', label: 'Paste', icon: <ContentPasteIcon fontSize="small" /> },
        ],
      },
    ],
  },
  render: (args) => (
    <ContextMenu {...args}>
      <div style={{ padding: 40, border: '2px dashed #ccc', borderRadius: 8, color: '#888' }}>
        Click derecho aquí
      </div>
    </ContextMenu>
  ),
};

export const WithGroups: Story = {
  args: {
    groups: [
      {
        id: 'group-1',
        items: [
          { id: 'copy', label: 'Copy', icon: <ContentCopyIcon fontSize="small" /> },
          { id: 'paste', label: 'Paste', icon: <ContentPasteIcon fontSize="small" /> },
        ],
      },
      {
        id: 'group-2',
        items: [
          { id: 'delete', label: 'Delete', icon: <DeleteIcon fontSize="small" /> },
        ],
      },
    ],
  },
  render: (args) => (
    <ContextMenu {...args}>
      <div style={{ padding: 40, border: '2px dashed #ccc', borderRadius: 8, color: '#888' }}>
        Click derecho aquí
      </div>
    </ContextMenu>
  ),
};

export const WithDisabled: Story = {
  args: {
    groups: [
      {
        id: 'group-1',
        items: [
          { id: 'copy', label: 'Copy' },
          { id: 'paste', label: 'Paste (no disponible)', disabled: true },
        ],
      },
    ],
  },
  render: (args) => (
    <ContextMenu {...args}>
      <div style={{ padding: 40, border: '2px dashed #ccc', borderRadius: 8, color: '#888' }}>
        Click derecho aquí
      </div>
    </ContextMenu>
  ),
};