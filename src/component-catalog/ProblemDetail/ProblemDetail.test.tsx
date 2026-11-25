import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ProblemDetail } from './ProblemDetail';

import type { Problem } from './ProblemDetail.types';

const baseProblem: Problem = {
  id: 1,
  title: 'Two Sum',
  difficulty: 'Easy',
  tags: ['Array', 'Hash Table', 'Prefix Sum'],
  description:
    'Given an array of integers `nums` and an integer `target`, return indices of the two numbers.\n\n- Time complexity: O(n)\n- Space complexity: O(n)',
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'Because nums[0] + nums[1] == 9.',
    },
    {
      input: 'nums = [3,2,4], target = 6',
      output: '[1,2]',
    },
  ],
  constraints: ['`2 <= nums.length <= 10^4`', 'Only one valid answer exists.'],
  acceptance: 49.2,
  status: 'unsolved',
};

const getCodeBlockByText = (text: string) =>
  screen.getByText((_content, element) => {
    const normalizedText = element?.textContent?.replace(/\s+/g, ' ').trim();

    return element?.tagName.toLowerCase() === 'pre' && normalizedText?.includes(text) === true;
  });

describe('ProblemDetail', () => {
  it('renders the problem title, difficulty, all tags, and acceptance rate', () => {
    render(<ProblemDetail problem={baseProblem} />);

    expect(screen.getByRole('heading', { name: '1. Two Sum' })).toBeInTheDocument();
    expect(screen.getByText('Easy')).toBeInTheDocument();
    expect(screen.getByText('Array')).toBeInTheDocument();
    expect(screen.getByText('Hash Table')).toBeInTheDocument();
    expect(screen.getByText('Prefix Sum')).toBeInTheDocument();
    expect(screen.getByText('Acceptance: 49.2%')).toBeInTheDocument();
  });

  it('renders examples with and without explanation', () => {
    render(<ProblemDetail problem={baseProblem} />);

    expect(screen.getByRole('heading', { name: 'Example 1:' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Example 2:' })).toBeInTheDocument();

    expect(getCodeBlockByText('nums = [2,7,11,15], target = 9')).toBeInTheDocument();
    expect(getCodeBlockByText('[0,1]')).toBeInTheDocument();
    expect(getCodeBlockByText('Because nums[0] + nums[1] == 9.')).toBeInTheDocument();
    expect(getCodeBlockByText('nums = [3,2,4], target = 6')).toBeInTheDocument();
    expect(getCodeBlockByText('[1,2]')).toBeInTheDocument();
  });

  it('renders string format examples cleanly', () => {
    const problemWithStringExamples: Problem = {
      ...baseProblem,
      examples: ['Input: s = "hello"\nOutput: "olleh"\nExplanation: Reversed string.'],
    };

    render(<ProblemDetail problem={problemWithStringExamples} />);

    expect(screen.getByRole('heading', { name: 'Example 1:' })).toBeInTheDocument();
    expect(getCodeBlockByText('s = "hello"')).toBeInTheDocument();
    expect(getCodeBlockByText('"olleh"')).toBeInTheDocument();
    expect(getCodeBlockByText('Reversed string.')).toBeInTheDocument();
  });

  it('renders the constraints list and markdown description', () => {
    render(<ProblemDetail problem={baseProblem} />);

    expect(screen.getByRole('heading', { name: 'Constraints' })).toBeInTheDocument();
    expect(screen.getByText('2 <= nums.length <= 10^4')).toBeInTheDocument();
    expect(screen.getByText('Only one valid answer exists.')).toBeInTheDocument();
    expect(screen.getByText('Time complexity: O(n)')).toBeInTheDocument();
  });

  it.each([
    ['Easy', 'MuiChip-colorSuccess'],
    ['Medium', 'MuiChip-colorWarning'],
    ['Hard', 'MuiChip-colorError'],
  ] as const)('applies the correct chip color for %s difficulty', (difficulty, expectedClass) => {
    render(<ProblemDetail problem={{ ...baseProblem, difficulty }} />);

    const chip = screen.getByLabelText(`Difficulty: ${difficulty}`).closest('.MuiChip-root');

    expect(chip).toHaveClass(expectedClass);
  });
});
