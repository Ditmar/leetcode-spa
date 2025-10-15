import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/material/styles';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import theme from '../../style-library/theme/theme';
import { PillTag } from './PillTag';

// Helper to render with theme
const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('PillTag Component', () => {
  let originalEnv: string | undefined;

  beforeEach(() => {
    originalEnv = process.env.NODE_ENV;
  });

  afterEach(() => {
    if (originalEnv !== undefined) {
      process.env.NODE_ENV = originalEnv;
    }
  });

  it('should render with label correctly', () => {
    renderWithTheme(<PillTag label="Courses" />);
    expect(screen.getByText('Courses')).toBeInTheDocument();
  });

  it('should render primary variant by default', () => {
    renderWithTheme(<PillTag label="Test" />);
    const element = screen.getByTestId('pill-tag');
    expect(element).toBeInTheDocument();
  });

  it('should render secondary variant when specified', () => {
    renderWithTheme(<PillTag label="Test" variant="secondary" />);
    const element = screen.getByTestId('pill-tag');
    expect(element).toBeInTheDocument();
  });

  it('should not render when label is empty', () => {
    const { container } = renderWithTheme(<PillTag label="" />);
    expect(container.firstChild).toBeNull();
  });

  it('should fallback to primary with invalid variant', () => {
    process.env.NODE_ENV = 'development';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => { });

    renderWithTheme(<PillTag label="Test" variant={'invalid' as any} />);
    expect(screen.getByTestId('pill-tag')).toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

  it('should handle onClick when clickable', () => {
    const handleClick = vi.fn();
    renderWithTheme(<PillTag label="Click me" clickable onClick={handleClick} />);

    const element = screen.getByTestId('pill-tag');
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should handle onDelete when provided', () => {
    const handleDelete = vi.fn();
    renderWithTheme(<PillTag label="Delete me" onDelete={handleDelete} />);

    const deleteButton = screen.getByTestId('CancelIcon');
    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it('should apply disabled state correctly', () => {
    renderWithTheme(<PillTag label="Disabled" disabled />);
    const element = screen.getByTestId('pill-tag');
    expect(element).toHaveClass('Mui-disabled');
  });

  it('should be keyboard accessible when clickable', () => {
    const handleClick = vi.fn();
    renderWithTheme(<PillTag label="Keyboard test" clickable onClick={handleClick} />);

    const element = screen.getByRole('button');
    fireEvent.keyDown(element, { key: 'Enter', code: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should use custom data-testid when provided', () => {
    renderWithTheme(<PillTag label="Test" data-testid="custom-pill" />);
    expect(screen.getByTestId('custom-pill')).toBeInTheDocument();
  });
});
