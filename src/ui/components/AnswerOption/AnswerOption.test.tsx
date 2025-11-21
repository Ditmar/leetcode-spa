import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { AnswerOption } from './AnswerOption';

describe('AnswerOption Component', () => {
  it('renders with label "Female" and not selected', () => {
    render(<AnswerOption label="Female" value="female" selected={false} onChange={() => {}} />);
    expect(screen.getByText('Female')).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Female' })).not.toBeChecked();
  });

  it('renders as selected when selected=true', () => {
    render(<AnswerOption label="Female" value="female" selected={true} onChange={() => {}} />);
    expect(screen.getByText('Female')).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Female' })).toBeChecked();
  });

  it('calls onChange with value when clicked', () => {
    let changedValue = '';
    render(
      <AnswerOption
        label="Female"
        value="female"
        selected={false}
        onChange={(value) => {
          changedValue = value;
        }}
      />
    );
    const radio = screen.getByRole('radio', { name: 'Female' });
    fireEvent.click(radio);
    expect(changedValue).toBe('female');
  });

  it('renders as disabled when disabled=true', () => {
    render(
      <AnswerOption
        label="Female"
        value="female"
        selected={false}
        disabled={true}
        onChange={() => {}}
      />
    );
    expect(screen.getByText('Female')).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Female' })).toBeDisabled();
  });
});
