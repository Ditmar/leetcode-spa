import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { ProblemWorkspaceView } from './ProblemWorkspace';

import type { ProblemDetail } from '../../../services/problems/problemsService.types';

const mockProblem: ProblemDetail = {
  id: 1,
  title: 'Two Sum',
  difficulty: 'Easy',
  tags: ['Array', 'Hash Table'],
  description: 'Given an array of integers `nums` and an integer `target`, return indices.',
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'nums[0] + nums[1] == 9',
    },
  ],
  constraints: ['2 <= nums.length <= 10^4'],
  starterCode: 'function twoSum(nums, target) {\n  // Code\n}',
  acceptance: 49.5,
};

describe('ProblemWorkspaceView', () => {
  it('renders problem header with title, difficulty, and navigation links', () => {
    render(
      <ProblemWorkspaceView problem={mockProblem} prevProblemId={undefined} nextProblemId={2} />
    );

    expect(screen.getAllByText('1. Two Sum').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Easy').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByTestId('back-to-problems')).toHaveAttribute('href', '/problems');
    expect(screen.getByTestId('next-problem-link')).toHaveAttribute('href', '/problems/2');
  });

  it('renders previous problem link when prevProblemId is provided', () => {
    render(
      <ProblemWorkspaceView
        problem={{ ...mockProblem, id: 2 }}
        prevProblemId={1}
        nextProblemId={3}
      />
    );

    expect(screen.getByTestId('prev-problem-link')).toHaveAttribute('href', '/problems/1');
    expect(screen.getByTestId('next-problem-link')).toHaveAttribute('href', '/problems/3');
  });

  it('allows switching between Description and Submissions tabs', async () => {
    const actor = userEvent.setup();
    render(<ProblemWorkspaceView problem={mockProblem} />);

    expect(screen.getByText(/Given an array of integers/)).toBeInTheDocument();

    const submissionsTab = screen.getByTestId('tab-submissions');
    await actor.click(submissionsTab);

    expect(screen.getByText('No Submissions Yet')).toBeInTheDocument();

    const descriptionTab = screen.getByTestId('tab-description');
    await actor.click(descriptionTab);

    expect(screen.getByText(/Given an array of integers/)).toBeInTheDocument();
  });

  it('renders code editor area with language selector, starter code, and action buttons', () => {
    render(<ProblemWorkspaceView problem={mockProblem} />);

    expect(screen.getByTestId('language-select')).toBeInTheDocument();
    expect(screen.getByText(/function twoSum\(nums, target\)/)).toBeInTheDocument();
    expect(screen.getByTestId('run-code-button')).toBeInTheDocument();
    expect(screen.getByTestId('submit-code-button')).toBeInTheDocument();
  });
});
