import { LandingPage } from './LandingPage';

import type { Meta, StoryObj } from '@storybook/react';

/* 
  ESLint rule exception:
  Storybook requires a default export for CSF (Component Story Format) files.
  This default export defines story metadata (title, component, etc.)
  and is mandatory for Storybook to index stories correctly.
  Disable 'import/no-default-export' for this file only.
*/
const meta: Meta<typeof LandingPage> = {
  title: 'Components/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export default meta; // ✅ requerido por Storybook
type Story = StoryObj<typeof LandingPage>;

export const Default: Story = {
  args: {},
};

export const MobileView: Story = {
  args: {},
};
