import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import AnswerOption from './AnswerOption';

import type { IProps } from './types/IProps';

describe('AnswerOption Component', () => {
  const baseProps: IProps = {
    label: 'Female',
    value: 'female',
    selected: false,
    onChange: vi.fn(),
  };

  it('renders the label', () => {
    render(<AnswerOption {...baseProps} />);
    expect(screen.getByText('Female')).toBeInTheDocument();
  });

  it('shows as not selected by default', () => {
    render(<AnswerOption {...baseProps} />);
    expect(screen.getByRole('radio')).not.toBeChecked();
  });

  it('shows selected state when selected is true', () => {
    render(<AnswerOption {...baseProps} selected />);
    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('calls onChange with value when clicked', () => {
    const handleChange = vi.fn();
    render(<AnswerOption {...baseProps} onChange={handleChange} />);
    fireEvent.click(screen.getByLabelText('Female'));
    expect(handleChange).toHaveBeenCalledWith('female');
  });

  it('is disabled when disabled=true', () => {
    render(<AnswerOption {...baseProps} disabled />);
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('is accessible with aria-label', () => {
    render(<AnswerOption {...baseProps} />);
    expect(screen.getByLabelText('Female')).toBeInTheDocument();
  });
});
