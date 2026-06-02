import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';

import Label from './Label';
import { OPTIONAL_INDICATOR, TOOLTIP_ICON_ARIA_LABEL } from './Label.constants';

import type { LabelComponentProps } from './Label.types';

const INPUT_ID = 'test-input';
const theme = createTheme();

interface RenderLabelProps {
  required?: boolean;
  optional?: boolean;
  error?: boolean;
  disabled?: boolean;
  tooltip?: string;
}

function renderLabel(props: RenderLabelProps = {}) {
  return render(
    <ThemeProvider theme={theme}>
      <>
        <Label htmlFor={INPUT_ID} {...(props as LabelComponentProps)}>
          Email address
        </Label>
        <input id={INPUT_ID} required={props.required} disabled={props.disabled} />
      </>
    </ThemeProvider>
  );
}

describe('Label — Rendering & Structural Integrity', () => {
  it('renders visual label content correctly', () => {
    renderLabel();
    expect(screen.getByText('Email address')).toBeInTheDocument();
  });

  it('renders a semantic html label element', () => {
    renderLabel();
    expect(screen.getByText('Email address').closest('label')).toBeInTheDocument();
  });

  it('strictly associates htmlFor with the target input ID', () => {
    renderLabel();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  });
});

describe('Label — Required and Optional Indicators', () => {
  it('shows required asterisk indicator when required=true', () => {
    renderLabel({ required: true });
    expect(screen.getByTestId('required-indicator')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('correctly propagates aria-required="true" to the parent element when required=true', () => {
    renderLabel({ required: true });
    const label = screen.getByText('Email address').closest('label');
    expect(label).toHaveAttribute('aria-required', 'true');
  });

  it('hides the visual asterisk from screen readers using aria-hidden="true"', () => {
    renderLabel({ required: true });
    expect(screen.getByTestId('required-indicator')).toHaveAttribute('aria-hidden', 'true');
  });

  it('shows formatting helper text when optional=true', () => {
    renderLabel({ optional: true });
    expect(screen.getByTestId('optional-hint')).toBeInTheDocument();
    expect(screen.getByText(OPTIONAL_INDICATOR)).toBeInTheDocument();
  });

  it('guarantees required indicator takes absolute precedence over optional indicator', () => {
    const conflictingProps = {
      required: true,
      optional: true,
    } as unknown as LabelComponentProps;

    renderLabel(conflictingProps);

    expect(screen.getByTestId('required-indicator')).toBeInTheDocument();
    expect(screen.queryByTestId('optional-hint')).not.toBeInTheDocument();
    expect(screen.queryByText(OPTIONAL_INDICATOR)).not.toBeInTheDocument();
  });
});

describe('Label — Operational and Theme States', () => {
  it('renders label with appropriate Material UI error classes', () => {
    renderLabel({ error: true });
    const label = screen.getByText('Email address').closest('label');
    expect(label).toHaveClass('Mui-error');
  });

  it('renders disabled state correctly and disables interaction', () => {
    renderLabel({ disabled: true });
    const input = screen.getByLabelText(/email address/i);
    expect(input).toBeDisabled();

    const label = screen.getByText('Email address').closest('label');
    expect(label).toHaveClass('Mui-disabled');
  });
});

describe('Label — Contextual Tooltip Interactions', () => {
  it('renders a compliant contextual button for the tooltip', () => {
    renderLabel({ tooltip: 'Helpful information' });
    expect(
      screen.getByRole('button', {
        name: TOOLTIP_ICON_ARIA_LABEL,
      })
    ).toBeInTheDocument();
  });

  it('opens tooltip content upon user click trigger', async () => {
    renderLabel({ tooltip: 'Helpful information' });
    const button = screen.getByRole('button', { name: TOOLTIP_ICON_ARIA_LABEL });

    await userEvent.click(button);
    expect(await screen.findByText('Helpful information')).toBeInTheDocument();
  });

  it('closes tooltip display gracefully upon secondary click trigger', async () => {
    renderLabel({ tooltip: 'Helpful information' });
    const button = screen.getByRole('button', { name: TOOLTIP_ICON_ARIA_LABEL });

    await userEvent.click(button);
    const tooltip = await screen.findByText('Helpful information');
    expect(tooltip).toBeVisible();

    await userEvent.click(button);
    await waitFor(() => {
      expect(tooltip).not.toBeVisible();
    });
    expect(button).toHaveFocus();
  });

  it('safely opens the tooltip using keyboard focus sequences (Enter)', async () => {
    renderLabel({ tooltip: 'Helpful information' });
    await userEvent.tab();

    const button = screen.getByRole('button', { name: TOOLTIP_ICON_ARIA_LABEL });
    expect(button).toHaveFocus();

    await userEvent.keyboard('{Enter}');
    expect(await screen.findByText('Helpful information')).toBeInTheDocument();
  });

  it('safely opens the tooltip using keyboard focus sequences (Space)', async () => {
    renderLabel({ tooltip: 'Helpful information' });
    await userEvent.tab();

    const button = screen.getByRole('button', { name: TOOLTIP_ICON_ARIA_LABEL });
    expect(button).toHaveFocus();

    await userEvent.keyboard(' ');
    expect(await screen.findByText('Helpful information')).toBeInTheDocument();
  });

  it('strictly isolates keyboard focus sequences when the component is disabled (Axe compliance)', () => {
    renderLabel({ disabled: true, tooltip: 'Helpful information' });
    const button = screen.getByRole('button', { name: TOOLTIP_ICON_ARIA_LABEL });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('tabindex', '-1');
  });
});
