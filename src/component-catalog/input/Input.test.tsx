import '@testing-library/jest-dom';
import SearchIcon from '@mui/icons-material/Search';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Input } from './Input';

describe('Input', () => {
  it('renders input', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders adornment', () => {
    render(<Input label="Search" startAdornment={<SearchIcon data-testid="icon" />} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('toggles password', () => {
    render(<Input label="Password" type="password" />);
    const input = screen.getByLabelText('Password');

    fireEvent.click(screen.getByRole('button'));
    expect(input).toHaveAttribute('type', 'text');
  });

  it('renders error state', () => {
    render(<Input label="Email" error helperText="Required" />);
    expect(screen.getByText('Required')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows character count', () => {
    render(<Input label="Bio" maxLength={20} showCharacterCount defaultValue="Hello" />);
    expect(screen.getByText('5/20')).toBeInTheDocument();
  });

  it('supports readOnly state', () => {
    render(<Input label="Read only" readOnly defaultValue="Locked value" />);
    expect(screen.getByLabelText('Read only')).toHaveAttribute('readonly');
  });
});
