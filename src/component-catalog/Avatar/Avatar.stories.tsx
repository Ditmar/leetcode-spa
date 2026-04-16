import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'component-catalog/Avatar',
  component: Avatar,
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', width: '100%', boxSizing: 'border-box' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Defines the dimensions of the avatar',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success'],
      description: 'Defines the color scheme based on the design system',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

// 1. Historia principal que replica el diseño de Figma al 100%
export const Showcase: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
        width: '100%',
        maxWidth: '1216px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 600, color: '#1A1D20', lineHeight: '32px' }}>
          Avatar
        </h2>
        <p style={{ margin: 0, fontSize: '14px', color: '#6C757D', lineHeight: '20px' }}>
          User profile pictures
        </p>
      </div>

      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '24px 0px 24px 24px',
          width: '100%',
          background: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '14px',
          overflowX: 'auto', // Asegura que no se desborde en móvil
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', minWidth: 'max-content' }}>
          <Avatar size="sm">SM</Avatar>
          <Avatar size="md">MD</Avatar>
          <Avatar size="lg">LG</Avatar>
          <Avatar size="xl">XL</Avatar>
          <Avatar size="lg" variant="primary">JD</Avatar>
          <Avatar size="lg" variant="success">AB</Avatar>
        </div>
      </div>
    </div>
  ),
};

// 2. Historias individuales para probar estados aislados en la pestaña "Controls"
export const Default: Story = {
  args: {
    children: 'MD',
    size: 'md',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: 'JD',
    size: 'lg',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: 'AB',
    size: 'xl',
    variant: 'success',
  },
};