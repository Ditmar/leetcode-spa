import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';

import Label from './Label';

import {
  OPTIONAL_INDICATOR,
  TOOLTIP_ICON_ARIA_LABEL,
} from './Label.constants';

const INPUT_ID = 'test-input';

interface RenderLabelProps {
  required?: boolean;
  optional?: boolean;
  error?: boolean;
  disabled?: boolean;
  tooltip?: string;
}

/**
 * Creates a fresh theme instance per render
 * to avoid shared-state coupling between tests.
 */
function renderLabel(props: RenderLabelProps = {}) {
  const theme = createTheme();

  return render(
    <ThemeProvider theme={theme}>
      <>
        <Label htmlFor={INPUT_ID} {...props}>
          Email address
        </Label>

        <input
          id={INPUT_ID}
          required={props.required}
          disabled={props.disabled}
        />
      </>
    </ThemeProvider>
  );
}

describe('Label — rendering', () => {
  it('renders label text', () => {
    renderLabel();

    expect(
      screen.getByText('Email address')
    ).toBeInTheDocument();
  });

  it('renders a label element', () => {
    renderLabel();

    expect(
      screen.getByText('Email address').closest('label')
    ).toBeInTheDocument();
  });

  it('associates htmlFor with the input', () => {
    renderLabel();

    expect(
      screen.getByLabelText(/email address/i)
    ).toBeInTheDocument();
  });
});

describe('Label — required and optional states', () => {
  it('shows required asterisk when required=true', () => {
    renderLabel({ required: true });

    expect(
      screen.getByText('*', { exact: false })
    ).toBeInTheDocument();
  });

  it('adds aria-required=true when required=true', () => {
    renderLabel({ required: true });

    const label =
      screen.getByText('Email address').closest('label');

    expect(label).toHaveAttribute(
      'aria-required',
      'true'
    );
  });

  it('shows optional text when optional=true', () => {
    renderLabel({ optional: true });

    expect(
      screen.getByText(OPTIONAL_INDICATOR)
    ).toBeInTheDocument();
  });

  it('required takes precedence over optional', () => {
    renderLabel({
      required: true,
      optional: true,
    });

    expect(
      screen.getByText('*', { exact: false })
    ).toBeInTheDocument();

    expect(
      screen.queryByText(OPTIONAL_INDICATOR)
    ).not.toBeInTheDocument();
  });
});

describe('Label — visual states', () => {
  it('renders label in error state', () => {
    renderLabel({ error: true });

    const label =
      screen.getByText('Email address').closest('label');

    expect(label).toBeInTheDocument();
  });

  it('renders disabled state correctly', () => {
    renderLabel({ disabled: true });

    const input =
      screen.getByLabelText(/email address/i);

    expect(input).toBeDisabled();
  });
});

describe('Label — tooltip', () => {
  beforeEach(() => {
    renderLabel({
      tooltip: 'Helpful information',
    });
  });

  it('renders tooltip button', () => {
    expect(
      screen.getByRole('button', {
        name: TOOLTIP_ICON_ARIA_LABEL,
      })
    ).toBeInTheDocument();
  });

  it('opens tooltip on click', async () => {
    await userEvent.click(
      screen.getByRole('button', {
        name: TOOLTIP_ICON_ARIA_LABEL,
      })
    );

    expect(
      await screen.findByText('Helpful information')
    ).toBeInTheDocument();
  });

  it('closes tooltip on second click', async () => {
    const button = screen.getByRole('button', {
      name: TOOLTIP_ICON_ARIA_LABEL,
    });

    await userEvent.click(button);

    expect(
      await screen.findByText('Helpful information')
    ).toBeInTheDocument();

    await userEvent.click(button);

    expect(button).toHaveFocus();
  });

  it('opens tooltip with keyboard (Enter)', async () => {
    await userEvent.tab();

    const button = screen.getByRole('button', {
      name: TOOLTIP_ICON_ARIA_LABEL,
    });

    expect(button).toHaveFocus();

    await userEvent.keyboard('{Enter}');

    expect(
      await screen.findByText('Helpful information')
    ).toBeInTheDocument();
  });

  it('opens tooltip with keyboard (Space)', async () => {
    await userEvent.tab();

    const button = screen.getByRole('button', {
      name: TOOLTIP_ICON_ARIA_LABEL,
    });

    expect(button).toHaveFocus();

    await userEvent.keyboard(' ');

    expect(
      await screen.findByText('Helpful information')
    ).toBeInTheDocument();
  });
});

describe('Label — accessibility', () => {
  it('tooltip button has role="button"', () => {
    renderLabel({ tooltip: 'Info' });

    expect(
      screen.getByRole('button', {
        name: TOOLTIP_ICON_ARIA_LABEL,
      })
    ).toBeInTheDocument();
  });

  it('label remains associated with input when required', () => {
    renderLabel({ required: true });

    expect(
      screen.getByLabelText(/email address/i)
    ).toBeInTheDocument();
  });

  it('label remains associated with input when disabled', () => {
    renderLabel({ disabled: true });

    expect(
      screen.getByLabelText(/email address/i)
    ).toBeInTheDocument();
  });
});