import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import React from 'react';
import { vi, describe, it, expect, afterEach } from 'vitest';

import { ProblemsPage } from './ProblemsPage';

import type { Problem } from './ProblemsPage.types';

const FIXTURE: Problem[] = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    acceptance: 49.2,
    status: 'solved',
    tags: ['Array'],
  },
  {
    id: 2,
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    acceptance: 41.8,
    status: 'attempted',
    tags: ['Linked List'],
  },
  {
    id: 3,
    title: 'Longest Substring',
    difficulty: 'Medium',
    acceptance: 33.9,
    status: 'unsolved',
    tags: ['Sliding Window'],
  },
  {
    id: 4,
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    acceptance: 38.2,
    status: 'unsolved',
    tags: ['Binary Search'],
  },
  {
    id: 5,
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    acceptance: 40.1,
    status: 'unsolved',
    tags: ['Stack'],
  },
];

const theme = createTheme();
afterEach(cleanup);

function setup(problems: Problem[] = FIXTURE) {
  const props = { problems, onSelectProblem: vi.fn(), onNavigateToCode: vi.fn() };
  render(
    <ThemeProvider theme={theme}>
      <ProblemsPage {...props} />
    </ThemeProvider>
  );
  return props;
}

function pick(labelRx: RegExp, option: string) {
  fireEvent.mouseDown(screen.getAllByLabelText(labelRx)[0]);
  fireEvent.click(screen.getByRole('option', { name: option }));
}

describe('ProblemsPage', () => {
  it('renders all problems by default', () => {
    setup();
    FIXTURE.forEach((p) => expect(screen.getByText(p.title)).toBeInTheDocument());
  });

  it('shows solved / total counter', () => {
    setup();
    expect(screen.getByLabelText('1 of 5 problems solved')).toBeInTheDocument();
  });

  it('filters by difficulty', () => {
    setup();
    pick(/difficulty filter/i, 'Hard');
    expect(screen.getByText('Median of Two Sorted Arrays')).toBeInTheDocument();
    expect(screen.queryByText('Two Sum')).not.toBeInTheDocument();
  });

  it('filters by status', () => {
    setup();
    pick(/status filter/i, 'Solved');
    expect(screen.getByText('Two Sum')).toBeInTheDocument();
    expect(screen.queryByText('Add Two Numbers')).not.toBeInTheDocument();
  });

  it('applies multiple filters simultaneously', () => {
    setup();
    pick(/difficulty filter/i, 'Easy');
    pick(/status filter/i, 'Unsolved');
    expect(screen.getByText('Valid Parentheses')).toBeInTheDocument();
    expect(screen.queryByText('Two Sum')).not.toBeInTheDocument();
  });

  it('calls onSelectProblem when Solve is clicked', () => {
    const { onSelectProblem } = setup();
    pick(/status filter/i, 'Unsolved');
    fireEvent.click(screen.getAllByRole('button', { name: /solve/i })[0]);
    expect(onSelectProblem).toHaveBeenCalledWith(expect.any(Number));
  });

  it('calls onNavigateToCode when Review is clicked', () => {
    const { onNavigateToCode } = setup();
    pick(/status filter/i, 'Solved');
    fireEvent.click(screen.getAllByRole('button', { name: /review/i })[0]);
    expect(onNavigateToCode).toHaveBeenCalled();
  });

  it('resets all filters when Clear is clicked', () => {
    setup();
    pick(/difficulty filter/i, 'Hard');
    expect(screen.queryByText('Two Sum')).not.toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('button', { name: /clear/i })[0]);
    expect(screen.getByText('Two Sum')).toBeInTheDocument();
  });

  it('accepts an external problems array (API / prop-injection scenario)', () => {
    const apiData: Problem[] = [
      {
        id: 99,
        title: 'API Problem',
        difficulty: 'Hard',
        acceptance: 10,
        status: 'unsolved',
        tags: [],
      },
    ];
    setup(apiData);
    expect(screen.getByText('API Problem')).toBeInTheDocument();
    expect(screen.queryByText('Two Sum')).not.toBeInTheDocument();
  });
});
