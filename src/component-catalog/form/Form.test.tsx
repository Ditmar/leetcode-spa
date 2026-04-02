import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import Form from './Form';

// Test fields
const fields = [
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

  // TEST 1: FIELD RENDERING
  describe('Field Rendering', () => {
    it('renders all field types correctly with proper labels and attributes', () => {
      render(<Form fields={fields} onSubmit={mockOnSubmit} />);

      // Check text/email/password fields
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Password')).toBeInTheDocument();
      expect(screen.getByLabelText('Search with icon')).toBeInTheDocument();

      // Check select field
      const selectField = screen.getByLabelText('Role');
      expect(selectField).toBeInTheDocument();

      // Check radio group
      expect(screen.getByText('Gender')).toBeInTheDocument();
      expect(screen.getByLabelText('Male')).toBeInTheDocument();
      expect(screen.getByLabelText('Female')).toBeInTheDocument();

      // Check checkbox
      expect(screen.getByLabelText('Accept Terms')).toBeInTheDocument();

      // Check textarea
      const textarea = screen.getByLabelText('Bio');
      expect(textarea).toBeInTheDocument();
      expect(textarea.tagName).toBe('TEXTAREA');
      expect(textarea).toHaveAttribute('rows', '4');
      expect(textarea).toHaveAttribute('placeholder', 'Tell us about yourself...');
    });

    it('renders search field with search icon', () => {
      render(<Form fields={[fields[2]]} onSubmit={mockOnSubmit} />);

      const searchInput = screen.getByLabelText('Search with icon');
      expect(searchInput).toBeInTheDocument();
      expect(searchInput).toHaveAttribute('placeholder', 'Search...');

      // Check if icon is present (Material-UI adds SVG)
      const svgIcon = document.querySelector('svg');
      expect(svgIcon).toBeInTheDocument();
    });

    it('renders select field with options', () => {
      render(<Form fields={[fields[3]]} onSubmit={mockOnSubmit} />);

      const select = screen.getByLabelText('Role');
      expect(select).toBeInTheDocument();

      // Open select dropdown
      fireEvent.mouseDown(select);

      // Check options
      expect(screen.getByText('Admin')).toBeInTheDocument();
      expect(screen.getByText('User')).toBeInTheDocument();
    });

    it('renders radio group with correct options', () => {
      render(<Form fields={[fields[4]]} onSubmit={mockOnSubmit} />);

      expect(screen.getByText('Gender')).toBeInTheDocument();
      expect(screen.getByLabelText('Male')).toBeInTheDocument();
      expect(screen.getByLabelText('Female')).toBeInTheDocument();
    });

    it('disables fields when disabled prop is true', () => {
      render(<Form fields={fields} onSubmit={mockOnSubmit} disabled={true} />);

      expect(screen.getByLabelText('Email')).toBeDisabled();
      expect(screen.getByLabelText('Password')).toBeDisabled();
      expect(screen.getByLabelText('Search with icon')).toBeDisabled();
      expect(screen.getByLabelText('Accept Terms')).toBeDisabled();
      expect(screen.getByLabelText('Bio')).toBeDisabled();
    });
  });

  // TEST 2: VALIDATION ERRORS
  describe('Validation Errors', () => {
    it('displays validation errors when submitting empty required fields', async () => {
      render(<Form fields={fields} onSubmit={mockOnSubmit} />);

      const submitButton = screen.getByText('Submit');
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText('Email is required')).toBeInTheDocument();
        expect(screen.getByText('Password must be at least 6 characters')).toBeInTheDocument();
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('validates email format correctly', async () => {
      const user = userEvent.setup();
      render(<Form fields={[fields[0]]} onSubmit={mockOnSubmit} />);

      const emailInput = screen.getByLabelText('Email');
      await user.type(emailInput, 'invalid-email');
      await user.tab(); // Trigger blur validation

      await waitFor(() => {
        expect(screen.getByText('Invalid email')).toBeInTheDocument();
      });
    });

    it('validates password minimum length', async () => {
      const user = userEvent.setup();
      render(<Form fields={[fields[1]]} onSubmit={mockOnSubmit} />);

      const passwordInput = screen.getByLabelText('Password');
      await user.type(passwordInput, '123');
      await user.tab();

      await waitFor(() => {
        expect(screen.getByText('Password must be at least 6 characters')).toBeInTheDocument();
      });
    });

    it('validates select field when required', async () => {
      const user = userEvent.setup();
      const selectFields = [
        {
          name: 'role',
          label: 'Role',
          type: 'select',
          required: true,
          options: [
            { value: 'admin', label: 'Admin' },
            { value: 'user', label: 'User' },
          ],
        },
      ];

      render(<Form fields={selectFields} onSubmit={mockOnSubmit} />);

      const submitButton = screen.getByText('Submit');
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText('Role is required')).toBeInTheDocument();
      });
    });

    it('validates checkbox when required', async () => {
      const user = userEvent.setup();
      const checkboxFields = [
        {
          name: 'terms',
          label: 'Accept Terms',
          type: 'checkbox',
          required: true,
        },
      ];

      render(<Form fields={checkboxFields} onSubmit={mockOnSubmit} />);

      const submitButton = screen.getByText('Submit');
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText('Accept Terms must be accepted')).toBeInTheDocument();
      });
    });

    it('clears validation error when field is corrected', async () => {
      const user = userEvent.setup();
      render(<Form fields={[fields[0]]} onSubmit={mockOnSubmit} />);

      const emailInput = screen.getByLabelText('Email');

      // Trigger validation error
      await user.type(emailInput, 'invalid-email');
      await user.tab();

      await waitFor(() => {
        expect(screen.getByText('Invalid email')).toBeInTheDocument();
      });

      // Correct the error
      await user.clear(emailInput);
      await user.type(emailInput, 'valid@example.com');
      await user.tab();

      await waitFor(() => {
        expect(screen.queryByText('Invalid email')).not.toBeInTheDocument();
      });
    });
  });

  // TEST 3: FORM SUBMIT
  describe('Form Submit', () => {
    // TEST 4: FORM RESET
    describe('Form Reset', () => {
      it('resets radio group correctly', async () => {
        const user = userEvent.setup();
        render(<Form fields={[fields[4]]} onSubmit={mockOnSubmit} showResetButton={true} />);

        // Select radio option
        await user.click(screen.getByLabelText('Male'));
        expect(screen.getByLabelText('Male')).toBeChecked();

        // Reset
        const resetButton = screen.getByText('Reset');
        await user.click(resetButton);

        await waitFor(() => {
          expect(screen.getByLabelText('Male')).not.toBeChecked();
          expect(screen.getByLabelText('Female')).not.toBeChecked();
        });
      });

      it('resets checkbox correctly', async () => {
        const user = userEvent.setup();
        render(<Form fields={[fields[5]]} onSubmit={mockOnSubmit} showResetButton={true} />);

        // Check checkbox
        const checkbox = screen.getByLabelText('Accept Terms');
        await user.click(checkbox);
        expect(checkbox).toBeChecked();

        // Reset
        const resetButton = screen.getByText('Reset');
        await user.click(resetButton);

        await waitFor(() => {
          expect(checkbox).not.toBeChecked();
        });
      });

      it('resets textarea correctly', async () => {
        const user = userEvent.setup();
        render(<Form fields={[fields[6]]} onSubmit={mockOnSubmit} showResetButton={true} />);

        const textarea = screen.getByLabelText('Bio');
        await user.type(textarea, 'Some bio text');
        expect(textarea).toHaveValue('Some bio text');

        // Reset
        const resetButton = screen.getByText('Reset');
        await user.click(resetButton);

        await waitFor(() => {
          expect(textarea).toHaveValue('');
        });
      });

      it('clears validation errors after reset', async () => {
        const user = userEvent.setup();
        render(<Form fields={[fields[0]]} onSubmit={mockOnSubmit} showResetButton={true} />);

        // Trigger validation error
        const submitButton = screen.getByText('Submit');
        await user.click(submitButton);

        await waitFor(() => {
          expect(screen.getByText('Email is required')).toBeInTheDocument();
        });

        // Reset form
        const resetButton = screen.getByText('Reset');
        await user.click(resetButton);

        await waitFor(() => {
          expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
        });
      });
    });
  });
});
