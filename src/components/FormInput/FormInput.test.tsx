import { render, screen } from '../../test/test-utils';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { FormInput } from './FormInput';
import { useState } from 'react';

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

  it('renderiza con props por defecto', () => {
    render(<FormInputWrapper {...defaultProps} />);
    const inputContainer = screen.getByTestId('form-input');
    expect(inputContainer).toBeInTheDocument();
    expect(screen.getByLabelText('Mail Id')).toBeInTheDocument(); 
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('renderiza con placeholder y value correctos', () => {
    render(<FormInputWrapper {...defaultProps} placeholder="Enter email" value="test@example.com" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Enter email');
    expect(input).toHaveValue('test@example.com');
  });

  it('dispara onChange con un nuevo valor', async () => {
    render(<FormInputWrapper {...defaultProps} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'test@example.com');
    expect(input).toHaveValue('test@example.com');
    expect(defaultProps.onChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({ value: 'test@example.com' }),
    }));
  });

  it('no dispara onChange si está disabled', async () => {
    const handleChange = vi.fn();
    render(<FormInputWrapper {...defaultProps} onChange={handleChange} disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
    await userEvent.type(input, 'test');
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('muestra estado de error con errorMessage', () => {
    const errorMessage = 'Invalid input';
    render(<FormInputWrapper {...defaultProps} errorMessage={errorMessage} />);
    const input = screen.getByRole('textbox');
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('dispara onFocus cuando se enfoca', async () => {
    const handleFocus = vi.fn();
    render(<FormInputWrapper {...defaultProps} onFocus={handleFocus} />);
    const input = screen.getByRole('textbox');
    await userEvent.click(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('dispara onBlur cuando pierde el foco', async () => {
    const handleBlur = vi.fn();
    render(<FormInputWrapper {...defaultProps} onBlur={handleBlur} />);
    const input = screen.getByRole('textbox');
    await userEvent.click(input);
    await userEvent.tab();
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});