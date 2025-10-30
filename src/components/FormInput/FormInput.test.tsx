import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, it, expect, vi } from 'vitest';

import { render, screen } from '../../test/test-utils';

import { FormInput } from './FormInput';

describe('FormInput', () => {
  const defaultProps = {
    label: 'Mail Id',
    value: '',
    onChange: vi.fn(),
    'data-testid': 'form-input',
  };

  const FormInputWrapper = ({ value: initialValue = '', onChange, ...props }) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
      setValue(e.target.value);
      if (onChange) onChange(e);
    };
    return <FormInput {...props} value={value} onChange={handleChange} />;
  };

  it('renders with default props', () => {
    render(<FormInputWrapper {...defaultProps} />);
    const inputContainer = screen.getByTestId('form-input');
    expect(inputContainer).toBeInTheDocument();
    expect(screen.getByLabelText('Mail Id')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('renders with correct placeholder and value', () => {
    render(
      <FormInputWrapper {...defaultProps} placeholder="Enter email" value="test@example.com" />
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Enter email');
    expect(input).toHaveValue('test@example.com');
  });

  it('fires onChange when typing a new value', async () => {
    const handleChange = vi.fn();
    render(<FormInputWrapper {...defaultProps} onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'test@example.com');
    expect(input).toHaveValue('test@example.com');
    expect(handleChange).toHaveBeenCalledTimes(16);
  });

  it('does not call onChange when disabled', async () => {
    const handleChange = vi.fn();
    render(<FormInputWrapper {...defaultProps} onChange={handleChange} disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
    await userEvent.type(input, 'test');
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('shows error state when errorMessage is provided', () => {
    const errorMessage = 'Invalid input';
    render(<FormInputWrapper {...defaultProps} errorMessage={errorMessage} />);
    const input = screen.getByRole('textbox');
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('calls onFocus when focused', async () => {
    const handleFocus = vi.fn();
    render(<FormInputWrapper {...defaultProps} onFocus={handleFocus} />);
    const input = screen.getByRole('textbox');
    await userEvent.click(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('calls onBlur when input loses focus', async () => {
    const handleBlur = vi.fn();
    render(
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
