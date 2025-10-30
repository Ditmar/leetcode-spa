import { ThemeProvider, createTheme } from '@mui/material/styles';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, it, expect, vi } from 'vitest';

import { render, screen } from '../../test/test-utils';

import { FormInput } from './FormInput';

import type { FormInputProps } from './FormInput.types';
import type { ChangeEvent } from 'react';

// Local theme: fixes `theme.typography.option` undefined error in styles
const testTheme = createTheme({
  typography: {
    option: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 500,
    },
  },
});

// Render with theme (required for MUI styled components)
const renderWithLocalTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={testTheme}>{ui}</ThemeProvider>);
};

// Controlled input wrapper for testing
const FormInputWrapper = ({
  value: initialValue = '',
  onChange,
  ...props
}: Omit<FormInputProps, 'value' | 'onChange'> & {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e);
  };
  return <FormInput {...props} value={value} onChange={handleChange} />;
};

describe('FormInput', () => {
  const defaultProps = {
    label: 'Mail Id',
    value: '',
    onChange: vi.fn(),
    'data-testid': 'form-input',
  } satisfies Partial<FormInputProps>;

  it('renders with default props', () => {
    renderWithLocalTheme(<FormInputWrapper {...defaultProps} />);
    const inputContainer = screen.getByTestId('form-input');
    expect(inputContainer).toBeInTheDocument();
    expect(screen.getByLabelText('Mail Id')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('renders with correct placeholder and value', () => {
    renderWithLocalTheme(
      <FormInputWrapper {...defaultProps} placeholder="Enter email" value="test@example.com" />
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Enter email');
    expect(input).toHaveValue('test@example.com');
  });

  it('fires onChange when typing a new value', async () => {
    const handleChange = vi.fn();
    renderWithLocalTheme(<FormInputWrapper {...defaultProps} onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'test@example.com');
    expect(input).toHaveValue('test@example.com');
    expect(handleChange).toHaveBeenCalledTimes(16);
  });

  it('does not call onChange when disabled', async () => {
    const handleChange = vi.fn();
    renderWithLocalTheme(<FormInputWrapper {...defaultProps} onChange={handleChange} disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
    await userEvent.type(input, 'test');
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('shows error state when errorMessage is provided', () => {
    const errorMessage = 'Invalid input';
    renderWithLocalTheme(<FormInputWrapper {...defaultProps} errorMessage={errorMessage} />);
    const input = screen.getByRole('textbox');
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('calls onFocus when focused', async () => {
    const handleFocus = vi.fn();
    renderWithLocalTheme(<FormInputWrapper {...defaultProps} onFocus={handleFocus} />);
    const input = screen.getByRole('textbox');
    await userEvent.click(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('calls onBlur when input loses focus', async () => {
    const handleBlur = vi.fn();
    renderWithLocalTheme(
      <>
        <FormInputWrapper {...defaultProps} onBlur={handleBlur} />
        <button>Next</button>
      </>
    );
    const input = screen.getByRole('textbox');
    await userEvent.click(input);
    await userEvent.tab();
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
