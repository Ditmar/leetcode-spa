import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import i18n, { LANGUAGE_STORAGE_KEY } from '../../i18n';

import { LanguageSelector } from './LanguageSelector';

describe('LanguageSelector', () => {
  beforeEach(async () => {
    localStorage.clear();
    await i18n.changeLanguage('en');
    document.documentElement.lang = 'en';
  });

  it('renders the available languages', async () => {
    const user = userEvent.setup();

    render(<LanguageSelector />);

    await user.click(screen.getByRole('combobox', { name: /language/i }));

    expect(screen.getByRole('option', { name: /english/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /spanish/i })).toBeInTheDocument();
  });

  it('changes and persists the selected language', async () => {
    const user = userEvent.setup();

    render(<LanguageSelector />);

    await user.click(screen.getByRole('combobox', { name: /language/i }));
    await user.click(screen.getByRole('option', { name: /spanish/i }));

    await waitFor(() => {
      expect(i18n.language).toBe('es');
    });

    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('es');
    expect(document.documentElement.lang).toBe('es');
  });

  it('calls onChange with the selected language', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<LanguageSelector onChange={onChange} />);

    await user.click(screen.getByRole('combobox', { name: /language/i }));
    await user.click(screen.getByRole('option', { name: /spanish/i }));

    expect(onChange).toHaveBeenCalledWith('es');
  });

  it('renders compact labels', () => {
    render(<LanguageSelector compact />);

    expect(screen.getByRole('combobox', { name: /language/i })).toHaveTextContent('EN');
  });
});
