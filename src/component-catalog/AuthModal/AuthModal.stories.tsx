import type { Meta, StoryObj } from '@storybook/react';
import { within, fireEvent } from '@testing-library/react';

import { AuthModal } from './AuthModal';
import { AuthMode } from './AuthModal.types';

const meta: Meta<typeof AuthModal> = {
  title: 'Components/AuthModal',
  component: AuthModal,
  parameters: {
    layout: 'centered',
  },
  args: {
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof AuthModal>;

export const SignIn: Story = {
  args: {
    initialMode: AuthMode.SIGN_IN,
  },
};

export const SignUp: Story = {
  args: {
    initialMode: AuthMode.SIGN_UP,
  },
};

export const WithErrors: Story = {
  args: {
    initialMode: AuthMode.SIGN_IN,
  },
  play: async () => {
    const canvas = within(document.body);
    const submitButton = await canvas.findByRole('button', { name: 'Sign In' });
    
    fireEvent.click(submitButton);
  },
};

export const Loading: Story = {
  args: {
    initialMode: AuthMode.SIGN_IN,
  },
  play: async () => {
    const canvas = within(document.body);
    const emailInput = await canvas.findByLabelText(/email/i);
    const passwordInput = await canvas.findByLabelText(/password/i);
    const submitButton = await canvas.findByRole('button', { name: 'Sign In' });

    fireEvent.change(emailInput, { target: { value: 'dev@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidPassword123!' } });
    
    fireEvent.click(submitButton);
  },
};