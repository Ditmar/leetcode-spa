import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import { ProblemList } from './ProblemList';
import { MOCK_PROBLEMS } from './ProblemList.constants';

const defaultProps = {
  problems: MOCK_PROBLEMS,
  selectedProblemId: 1,
  onSelectProblem: vi.fn(),
};

describe('ProblemList', () => {
  it('renders all problems', () => {
    render(<ProblemList {...defaultProps} />);
    MOCK_PROBLEMS.forEach((problem) => {
      expect(screen.getByText(problem.title)).toBeInTheDocument();
    });
  });

  it('renders the Problems header', () => {
    render(<ProblemList {...defaultProps} />);
    expect(screen.getByText('Problems')).toBeInTheDocument();
  });

  it('calls onSelectProblem with the correct id on click', async () => {
    const user = userEvent.setup();
    const onSelectProblem = vi.fn();
    render(<ProblemList {...defaultProps} onSelectProblem={onSelectProblem} />);

    await user.click(screen.getByTestId('problem-item-2'));

    expect(onSelectProblem).toHaveBeenCalledTimes(1);
    expect(onSelectProblem).toHaveBeenCalledWith(2);
  });

  it('marks the selected item with aria-current="true"', () => {
    render(<ProblemList {...defaultProps} selectedProblemId={3} />);
    expect(screen.getByTestId('problem-item-3')).toHaveAttribute('aria-current', 'true');
  });

  it('does not set aria-current on non-selected items', () => {
    render(<ProblemList {...defaultProps} selectedProblemId={1} />);
    expect(screen.getByTestId('problem-item-2')).not.toHaveAttribute('aria-current');
  });

  it('renders correct status icon — solved', () => {
    render(<ProblemList {...defaultProps} />);
    expect(screen.getByLabelText('Solved')).toBeInTheDocument();
  });

  it('renders correct status icon — attempted', () => {
    render(<ProblemList {...defaultProps} />);
    expect(screen.getByLabelText('Attempted')).toBeInTheDocument();
  });

  it('renders correct status icons — unsolved (4 items)', () => {
    render(<ProblemList {...defaultProps} />);
    expect(screen.getAllByLabelText('Unsolved')).toHaveLength(4);
  });

  it('renders acceptance rates for all problems', () => {
    render(<ProblemList {...defaultProps} />);
    expect(screen.getByText('49.2%')).toBeInTheDocument();
    expect(screen.getByText('41.8%')).toBeInTheDocument();
    expect(screen.getByText('33.9%')).toBeInTheDocument();
  });

  it('renders the empty state when problems array is empty', () => {
    render(<ProblemList problems={[]} selectedProblemId={-1} onSelectProblem={vi.fn()} />);
    expect(screen.getByText('No problems found.')).toBeInTheDocument();
  });

  it('items are keyboard-focusable', () => {
    render(<ProblemList {...defaultProps} />);
    const firstItem = screen.getByTestId('problem-item-1');
    firstItem.focus();
    expect(firstItem).toHaveFocus();
  });
});
