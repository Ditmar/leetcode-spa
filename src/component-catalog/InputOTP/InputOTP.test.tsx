import { render, screen, fireEvent } from '@testing-library/react';

import { InputOTP } from './InputOTP';

describe('InputOTP Component', () => {
  test('renders correct number of inputs', () => {
    render(<InputOTP length={6} />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(6);
  });

  test('allows typing a digit and moves focus forward', () => {
    render(<InputOTP length={4} />);
    const inputs = screen.getAllByRole('textbox');

    fireEvent.change(inputs[0], { target: { value: '1' } });

    expect(inputs[0]).toHaveValue('1');
    expect(inputs[1]).toHaveFocus();
  });

  test('backspace clears current input', () => {
    render(<InputOTP length={4} />);
    const inputs = screen.getAllByRole('textbox');

    fireEvent.change(inputs[1], { target: { value: '5' } });
    fireEvent.keyDown(inputs[1], { key: 'Backspace' });

    expect(inputs[1]).toHaveValue('');
  });

  test('backspace moves to previous input when empty', () => {
    render(<InputOTP length={4} />);
    const inputs = screen.getAllByRole('textbox');

    inputs[1].focus();
    fireEvent.keyDown(inputs[1], { key: 'Backspace' });

    expect(inputs[0]).toHaveFocus();
  });

  test('paste fills multiple inputs', () => {
    render(<InputOTP length={4} />);
    const inputs = screen.getAllByRole('textbox');

    fireEvent.paste(inputs[0], {
      clipboardData: {
        getData: () => '1234',
      },
    });

    expect(inputs[0]).toHaveValue('1');
    expect(inputs[1]).toHaveValue('2');
    expect(inputs[2]).toHaveValue('3');
    expect(inputs[3]).toHaveValue('4');
  });

  test('does not allow non-numeric input', () => {
    render(<InputOTP length={4} />);
    const inputs = screen.getAllByRole('textbox');

    fireEvent.change(inputs[0], { target: { value: 'a' } });

    expect(inputs[0]).toHaveValue('');
  });

  test('disabled inputs do not accept input', () => {
    render(<InputOTP length={4} disabled />);
    const inputs = screen.getAllByRole('textbox');

    fireEvent.change(inputs[0], { target: { value: '9' } });

    expect(inputs[0]).toHaveValue('');
  });

  test('renders with error state', () => {
    render(<InputOTP length={4} error />);
    const inputs = screen.getAllByRole('textbox');

    expect(inputs.length).toBe(4);
  });
});
