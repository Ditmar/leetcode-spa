// src/pages/DashboardPage/DashboardPage.test.tsx

/* 
// FALTA: pruebas unitarias reales para DashboardPage
// Ejemplos de cosas a testear cuando tengas soporte de Vitest/Jest:

import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material";
import DashboardPage from "./DashboardPage";

const theme = createTheme();

render(
    <ThemeProvider theme={theme}>
        <DashboardPage />
    </ThemeProvider>
);

const welcomeMessage = screen.getByText(/Welcome Miguel!/i);
if (!welcomeMessage) throw new Error("No se renderizó el mensaje de bienvenida");
*/
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DashboardPage from './DashboardPage';

describe('DashboardPage', () => {
    it('renders the welcome message', () => {
        render(<DashboardPage />);
        expect(screen.getByText(/Welcome Miguel/i)).toBeInTheDocument();
    });

    it('renders recent tests cards', () => {
        render(<DashboardPage />);
        expect(screen.getByText(/C Programing/i)).toBeInTheDocument();
        expect(screen.getByText(/Python Programing/i)).toBeInTheDocument();
    });
});
