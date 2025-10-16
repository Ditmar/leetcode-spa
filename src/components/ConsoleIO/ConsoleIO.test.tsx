import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import { ConsoleIO } from './ConsoleIO';

describe('ConsoleIO', () => {
  test('renders tabs and sample area initially', async () => {
    render(<ConsoleIO />);

    const sampleTab = screen.getByRole('tab', { name: /sample/i });
    expect(sampleTab).toBeInTheDocument();
    expect(sampleTab).toHaveAttribute('aria-selected', 'true');

    const sampleArea = screen.getByRole('textbox', { name: /sample-input/i });
    expect(sampleArea).toBeInTheDocument();
    expect(sampleArea).toHaveValue('');
  });

  test('switches to custom tab and shows custom textarea', async () => {
    const user = userEvent.setup();
    render(<ConsoleIO />);

    const customTab = screen.getByRole('tab', { name: /custom/i });

    await user.click(customTab);

    const customArea = await screen.findByRole('textbox', { name: /custom-input/i });
    expect(customArea).toBeInTheDocument();
    expect(customArea).toHaveValue('');
  });

  test('updates sample textarea and triggers callback', async () => {
    const onSampleChange = vi.fn();
    const user = userEvent.setup();

    render(<ConsoleIO onSampleChange={onSampleChange} />);

    const sampleArea = screen.getByRole('textbox', { name: /sample-input/i });

    await user.type(sampleArea, '1234');

    expect(sampleArea).toHaveValue('1234');
    expect(onSampleChange).toHaveBeenCalled();
  });

  test('updates custom textarea and triggers callback', async () => {
    const onCustomChange = vi.fn();
    const user = userEvent.setup();

    render(<ConsoleIO onCustomChange={onCustomChange} />);

    const customTab = screen.getByRole('tab', { name: /custom/i });
    await user.click(customTab);

    const customArea = await screen.findByRole('textbox', { name: /custom-input/i });
    await user.type(customArea, 'abcd');

    expect(customArea).toHaveValue('abcd');
    expect(onCustomChange).toHaveBeenCalled();
  });
});
