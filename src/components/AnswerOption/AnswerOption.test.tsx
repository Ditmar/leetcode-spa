import { useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { AnswerOption } from './AnswerOption';

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<typeof import('@mui/material')>('@mui/material');
  return {
    ...actual,
    useMediaQuery: vi.fn(),
  };
});

const mockedUseMediaQuery = useMediaQuery as unknown as {
  mockReturnValue: (value: boolean) => void;
};

const renderWithTheme = (component: React.ReactNode) => {
  const theme = createTheme();
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('AnswerOption Component', () => {
  const defaultProps = {
    label: 'Test Option',
    value: 'test',
    selected: false,
    onChange: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockedUseMediaQuery.mockReturnValue(false);
  });

  it('renders label correctly', () => {
    renderWithTheme(<AnswerOption {...defaultProps} />);
    expect(screen.getByText('Test Option')).toBeInTheDocument();
  });

  it('is accessible via radio role', () => {
    renderWithTheme(<AnswerOption {...defaultProps} />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('shows checked state correctly', () => {
    renderWithTheme(<AnswerOption {...defaultProps} selected={true} />);
    expect(screen.getByRole('radio')).toBeChecked();
  });

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn();
    renderWithTheme(<AnswerOption {...defaultProps} onChange={handleChange} />);
    fireEvent.click(screen.getByText('Test Option'));
    expect(handleChange).toHaveBeenCalledWith('test');
  });

  it('does not call onChange when disabled', () => {
    const handleChange = vi.fn();
    renderWithTheme(<AnswerOption {...defaultProps} disabled={true} onChange={handleChange} />);
    fireEvent.click(screen.getByText('Test Option'));
    expect(handleChange).not.toHaveBeenCalled();
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('renders skeletons when isLoading is true', () => {
    renderWithTheme(<AnswerOption {...defaultProps} isLoading={true} />);
    const skeletons = document.querySelectorAll('.MuiSkeleton-root');
    expect(skeletons.length).toBeGreaterThan(0);
    expect(screen.queryByText('Test Option')).not.toBeInTheDocument();
  });

  it('renders horizontal layout by default (desktop)', () => {
    renderWithTheme(<AnswerOption {...defaultProps} />);
    const container = screen.getByTestId(`answer-option-container-${defaultProps.value}`);
    expect(container).toBeInTheDocument();
  });

  it('renders vertical layout when variant="vertical"', () => {
    renderWithTheme(<AnswerOption {...defaultProps} variant="vertical" />);
    const container = screen.getByTestId(`answer-option-container-${defaultProps.value}`);
    expect(container).toBeInTheDocument();
  });

  it('adapts to vertical layout when on mobile (useMediaQuery is true)', () => {
    mockedUseMediaQuery.mockReturnValue(true);
    renderWithTheme(<AnswerOption {...defaultProps} variant="horizontal" />);
    const container = screen.getByTestId(`answer-option-container-${defaultProps.value}`);
    expect(container).toBeInTheDocument();
  });

  it('applies the disabled text color when disabled', () => {
    renderWithTheme(<AnswerOption {...defaultProps} disabled={true} />);
    const labelElement = screen.getByText('Test Option');
    expect(labelElement).toBeInTheDocument();
  });
});
