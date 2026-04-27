describe('RadioGroup', () => {
  it('renders all options', () => {
    render(<RadioGroup options={options} />);

    expect(screen.getByRole('radio', { name: /option one/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /option two/i })).toBeInTheDocument();
  });

  it('selects an option on click', async () => {
    const user = userEvent.setup();
    render(<RadioGroup options={options} />);

    const option = screen.getByRole('radio', { name: /option one/i });

    expect(option).not.toBeChecked();

    await user.click(option);

    expect(option).toBeChecked();
  });

  it('calls onChange when selecting an option', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<RadioGroup options={options} onChange={handleChange} />);

    const option = screen.getByRole('radio', { name: /option one/i });

    await user.click(option);

    expect(handleChange).toHaveBeenCalled();
  });

  it('disables an individual option', () => {
    render(<RadioGroup options={[{ label: 'Option One', value: '1', disabled: true }]} />);

    expect(screen.getByRole('radio', { name: /option one/i })).toBeDisabled();
  });

  it('disables all options when group is disabled', () => {
    render(<RadioGroup disabled options={options} />);

    expect(screen.getByRole('radio', { name: /option one/i })).toBeDisabled();
    expect(screen.getByRole('radio', { name: /option two/i })).toBeDisabled();
  });

  it('shows error state when error prop is true', () => {
    render(<RadioGroup error helperText="Something went wrong" options={options} />);

    expect(screen.getByText(/something went wrong/i)).toBeVisible();
  });

  it('forwards aria-required to the radiogroup', () => {
    render(<RadioGroup required options={options} label="Pick one" />);

    const group = screen.getByRole('radiogroup', { name: /pick one/i });

    expect(group).toHaveAttribute('aria-required', 'true');
  });
});
