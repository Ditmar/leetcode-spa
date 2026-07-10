import { AppProvider } from './AppConfigContext';
import { useAppConfig } from './useAppConfig';

import type { Meta, StoryObj } from '@storybook/react';

function PublicConfigPreview() {
  const config = useAppConfig();

  return (
    <div style={{ display: 'grid', gap: '0.75rem', fontFamily: 'sans-serif' }}>
      <strong>Safe public config defaults</strong>
      <div>
        This story renders AppProvider without passing a config prop, so it demonstrates the default
        public values exposed to consumers.
      </div>
      <pre
        style={{
          padding: '1rem',
          borderRadius: '0.5rem',
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          overflowX: 'auto',
        }}
      >
        {JSON.stringify(config, null, 2)}
      </pre>
    </div>
  );
}

const meta = {
  title: 'Context/AppConfigContext',
  component: PublicConfigPreview,
  decorators: [
    (Story) => (
      <AppProvider user={null}>
        <Story />
      </AppProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Shows that AppProvider exposes only public config defaults and filters non-public fields when Storybook omits config props.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PublicConfigPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithoutConfigProps: Story = {};
