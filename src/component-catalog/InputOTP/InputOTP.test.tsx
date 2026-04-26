import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { InputOTP } from './InputOTP';

describe('InputOTP Component', () => {
  test('renders correct number of inputs', () => {
    render(<InputOTP length={6} />);

    expect(screen.getAllByRole('textbox')).toHaveLength(6);
  });

  test('allows typing a digit and moves focus forward', async () => {
    const user = userEvent.setup();

    render(<InputOTP length={4} />);
    const inputs = screen.getAllByRole('textbox');

    await user.type(inputs[0], '1');

    expect(inputs[0]).toHaveValue('1');
    expect(inputs[1]).toHaveFocus();
  });

  test('backspace clears current input', async () => {
    const user = userEvent.setup();

    render(<InputOTP length={4} />);
    const inputs = screen.getAllByRole('textbox');

    await user.click(inputs[3]);
    await user.type(inputs[3], '5');
    await user.keyboard('{Backspace}');

    expect(inputs[3]).toHaveValue('');
  });

  test('backspace moves to previous input when empty', async () => {
    const user = userEvent.setup();

    render(<InputOTP length={4} />);
    const inputs = screen.getAllByRole('textbox');

    await user.click(inputs[1]);
    await user.keyboard('{Backspace}');

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

  test('paste starts from selected input', () => {
    render(<InputOTP length={4} />);
    const inputs = screen.getAllByRole('textbox');

    fireEvent.paste(inputs[2], {
      clipboardData: {
        getData: () => '89',
      },
    });

    expect(inputs[0]).toHaveValue('');
    expect(inputs[1]).toHaveValue('');
    expect(inputs[2]).toHaveValue('8');
    expect(inputs[3]).toHaveValue('9');
  });

  test('calls onComplete when all digits are typed', async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn();

    render(<InputOTP length={4} onComplete={onComplete} />);
    const inputs = screen.getAllByRole('textbox');

    await user.type(inputs[0], '1');
    await user.type(inputs[1], '2');
    await user.type(inputs[2], '3');
    await user.type(inputs[3], '4');

    expect(onComplete).toHaveBeenCalledWith('1234');
  });

  test('calls onComplete when full OTP is pasted', () => {
    const onComplete = vi.fn();

    render(<InputOTP length={4} onComplete={onComplete} />);
    const inputs = screen.getAllByRole('textbox');

    fireEvent.paste(inputs[0], {
      clipboardData: {
        getData: () => '1234',
      },
    });

    expect(onComplete).toHaveBeenCalledWith('1234');
  });

  test('does not allow non-numeric input', async () => {
    const user = userEvent.setup();

    render(<InputOTP length={4} />);
    const inputs = screen.getAllByRole('textbox');

    await user.type(inputs[0], 'a');

    expect(inputs[0]).toHaveValue('');
  });

  test('disabled inputs do not accept input', async () => {
    const user = userEvent.setup();

    render(<InputOTP length={4} disabled />);
    const inputs = screen.getAllByRole('textbox');

    await user.type(inputs[0], '9');

    expect(inputs[0]).toHaveValue('');
  });

  test('renders with error state', () => {
    render(<InputOTP length={4} error />);

    expect(screen.getAllByRole('textbox')).toHaveLength(4);
  });
});