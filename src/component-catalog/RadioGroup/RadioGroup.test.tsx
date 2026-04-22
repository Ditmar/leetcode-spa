import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

import { RadioGroup } from './RadioGroup';

const options = [
  { label: 'Option One', value: '1' },
  { label: 'Option Two', value: '2' },
];

describe('RadioGroup', () => {
  it('renders all options', () => {
    render(<RadioGroup options={options} />);

    expect(screen.getByLabelText('Option One')).toBeInTheDocument();
    expect(screen.getByLabelText('Option Two')).toBeInTheDocument();
  });

  it('selects an option on click', async () => {
    const user = userEvent.setup();
    render(<RadioGroup options={options} />);

    const option = screen.getByLabelText('Option One') as HTMLInputElement;

    await user.click(option);

    expect(option).toBeChecked();
  });

  it('disables an individual option', () => {
    render(<RadioGroup options={[{ label: 'Option One', value: '1', disabled: true }]} />);

    expect(screen.getByLabelText('Option One')).toBeDisabled();
  });

  it('disables all options when group is disabled', () => {
    render(<RadioGroup disabled options={options} />);

    expect(screen.getByLabelText('Option One')).toBeDisabled();
    expect(screen.getByLabelText('Option Two')).toBeDisabled();
  });

  it('shows error state when error prop is true', () => {
    render(<RadioGroup error helperText="Something went wrong" options={options} />);

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('forwards aria-required to the radiogroup', () => {
    render(<RadioGroup required options={options} label="Pick one" />);

    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-required', 'true');
  });
});
