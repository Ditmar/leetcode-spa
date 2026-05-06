import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { Form } from './Form';

import type { FormField } from './Form.types';

const fields: FormField[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    span: 6,
    placeholder: 'email@example.com',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    span: 6,
  },
  {
    name: 'search',
    label: 'Search with icon',
    type: 'search',
    span: 6,
    placeholder: 'Search...',
  },
  {
    name: 'role',
    label: 'Role',
    type: 'select',
    span: 6,
    options: [
      { value: 'admin', label: 'Admin' },
      { value: 'user', label: 'User' },
    ],
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'radio',
    span: 4,
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ],
  },
  {
    name: 'terms',
    label: 'Accept Terms',
    type: 'checkbox',
    span: 12,
  },
  {
    name: 'bio',
    label: 'Bio',
    type: 'textarea',
    span: 12,
    rows: 4,
    placeholder: 'Tell us about yourself...',
  },
];

describe('Form Component', () => {
  let mockOnSubmit: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockOnSubmit = vi.fn();
  });

  describe('Field Rendering', () => {
    it('renders all fields', () => {
      render(<Form fields={fields} onSubmit={mockOnSubmit} />);

      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/search with icon/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/role/i)).toBeInTheDocument();

      expect(screen.getByText('Gender')).toBeInTheDocument();
      expect(screen.getByLabelText('Male')).toBeInTheDocument();
      expect(screen.getByLabelText('Female')).toBeInTheDocument();

      expect(screen.getByLabelText(/accept terms/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/bio/i)).toBeInTheDocument();
    });

    it('disables fields correctly', () => {
      render(<Form fields={fields} onSubmit={mockOnSubmit} disabled />);

      expect(screen.getByLabelText(/email/i)).toBeDisabled();
      expect(screen.getByLabelText(/password/i)).toBeDisabled();
      expect(screen.getByLabelText(/accept terms/i)).toBeDisabled();
    });
  });

  describe('Validation', () => {
    it('validates required select', async () => {
      const user = userEvent.setup();

      const selectFields: FormField[] = [
        {
          name: 'role',
          label: 'Role',
          type: 'select',
          required: true,
          options: [{ value: 'admin', label: 'Admin' }],
        },
      ];

      render(<Form fields={selectFields} onSubmit={mockOnSubmit} />);

      await user.click(screen.getByRole('button', { name: /submit/i }));

      expect(await screen.findByText(/required/i)).toBeInTheDocument();
    });

    it('validates checkbox required', async () => {
      const user = userEvent.setup();

      const checkboxFields: FormField[] = [
        {
          name: 'terms',
          label: 'Accept Terms',
          type: 'checkbox',
          required: true,
        },
      ];

      render(<Form fields={checkboxFields} onSubmit={mockOnSubmit} />);

      await user.click(screen.getByRole('button', { name: /submit/i }));

      expect(await screen.findByText(/accepted/i)).toBeInTheDocument();
    });
  });

  describe('Reset', () => {
    it('resets checkbox', async () => {
      const user = userEvent.setup();

      render(<Form fields={[fields[5]]} onSubmit={mockOnSubmit} showResetButton />);

      const checkbox = screen.getByLabelText(/accept terms/i);

      await user.click(checkbox);
      expect(checkbox).toBeChecked();

      await user.click(screen.getByRole('button', { name: /reset/i }));

      await waitFor(() => {
        expect(checkbox).not.toBeChecked();
      });
    });

    it('resets textarea', async () => {
      const user = userEvent.setup();

      render(<Form fields={[fields[6]]} onSubmit={mockOnSubmit} showResetButton />);

      const textarea = screen.getByLabelText(/bio/i);

      await user.type(textarea, 'test');
      expect(textarea).toHaveValue('test');

      await user.click(screen.getByRole('button', { name: /reset/i }));

      await waitFor(() => {
        expect(textarea).toHaveValue('');
      });
    });
  });
});
