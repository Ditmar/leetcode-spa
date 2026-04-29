import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';

import Label from './Label';

const theme = createTheme();
const INPUT_ID = 'test-input';

function renderLabel(props = {}) {
  return render(
    <ThemeProvider theme={theme}>
      <>
        <Label htmlFor={INPUT_ID} {...props}>
          Email address
        </Label>
        <input id={INPUT_ID} />
      </>
    </ThemeProvider>
  );
}

describe('Label — renderizado', () => {
  it('renderiza el texto del label', () => {
    renderLabel();

    expect(screen.getByText('Email address')).toBeInTheDocument();
  });

  it('renderiza un elemento label', () => {
    renderLabel();

    expect(screen.getByText('Email address').closest('label')).toBeInTheDocument();
  });

  it('asocia htmlFor con el input', () => {
    renderLabel();

    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  });
});

describe('Label — required y optional', () => {
  it('muestra asterisco cuando required=true', () => {
    renderLabel({ required: true });

    expect(screen.getByText('*', { exact: false })).toBeInTheDocument();
  });

  it('agrega aria-required=true cuando required=true', () => {
    renderLabel({ required: true });

    const label = screen.getByText('Email address').closest('label');

    expect(label).toHaveAttribute('aria-required', 'true');
  });

  it('muestra optional cuando optional=true', () => {
    renderLabel({ optional: true });

    expect(screen.getByText(/optional/i)).toBeInTheDocument();
  });

  it('required tiene prioridad sobre optional', () => {
    renderLabel({ required: true, optional: true });

    expect(screen.getByText('*', { exact: false })).toBeInTheDocument();
    expect(screen.queryByText(/optional/i)).not.toBeInTheDocument();
  });
});

describe('Label — estados visuales', () => {
  it('aplica clase de error', () => {
    renderLabel({ error: true });

    const label = screen.getByText('Email address').closest('label');

    expect(label?.className).toMatch(/Mui-error/);
  });

  it('aplica clase disabled', () => {
    renderLabel({ disabled: true });

    const label = screen.getByText('Email address').closest('label');

    expect(label?.className).toMatch(/Mui-disabled/);
  });
});

describe('Label — tooltip', () => {
  beforeEach(() => {
    renderLabel({ tooltip: 'Helpful information' });
  });

  it('renderiza botón de tooltip', () => {
    expect(screen.getByRole('button', { name: /more information/i })).toBeInTheDocument();
  });

  it('abre tooltip al hacer click', async () => {
    await userEvent.click(screen.getByRole('button', { name: /more information/i }));

    expect(await screen.findByText('Helpful information')).toBeInTheDocument();
  });

  it('cierra tooltip al segundo click', async () => {
    const button = screen.getByRole('button', { name: /more information/i });

    await userEvent.click(button);
    expect(await screen.findByText('Helpful information')).toBeInTheDocument();

    await userEvent.click(button);

    expect(button).toHaveFocus();
  });

  it('abre tooltip con teclado (tab + enter)', async () => {
    await userEvent.tab();

    const button = screen.getByRole('button', { name: /more information/i });

    expect(button).toHaveFocus();

    await userEvent.keyboard('{Enter}');

    expect(await screen.findByText('Helpful information')).toBeInTheDocument();
  });
});

describe('Label — accesibilidad', () => {
  it('el botón tooltip tiene role button', () => {
    renderLabel({ tooltip: 'Info' });

    expect(screen.getByRole('button', { name: /more information/i })).toBeInTheDocument();
  });

  it('el label sigue vinculado al input con required', () => {
    renderLabel({ required: true });

    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  });

  it('el label sigue vinculado al input con disabled', () => {
    renderLabel({ disabled: true });

    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  });
});
