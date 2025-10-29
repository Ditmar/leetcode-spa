// src/pages/SignUpPage/SignUpPage.test.tsx

import { render, screen } from "@testing-library/react";
import { SignUpPage } from "./SignUpPage";
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Mocks de los SVGs (Necesarios para Jest)
// ✅ LÍNEAS CORREGIDAS PARA VITEST

// Mocks de los SVGs (Necesarios para Vitest)
import { vi } from 'vitest'; // Asegúrate de importar 'vi' si no está importado
// ✅ CORRECCIÓN: Los mocks deben devolver un objeto con la propiedad 'default'

vi.mock('./assets/google.svg', () => ({ default: 'google.svg' }));
vi.mock('./assets/github.svg', () => ({ default: 'github.svg' }));
vi.mock('./assets/facebook.svg', () => ({ default: 'facebook.svg' }));
const theme = createTheme();
const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("SignUpPage (Skeleton - Figma Layout)", () => {
  
  it("renders all skeleton placeholders", () => {
    renderWithTheme(<SignUpPage />);
    
    expect(screen.getByText("(DEV) Placeholder: Logo")).toBeInTheDocument();
    expect(screen.getByText("(DEV) Placeholder: FormInput - Email")).toBeInTheDocument();
    expect(screen.getByText("(DEV) Placeholder: FormInput - Username")).toBeInTheDocument();
    expect(screen.getByText("(DEV) Placeholder: PrimaryButton - Register")).toBeInTheDocument();
  });

  it("renders login link and social icons", () => {
    renderWithTheme(<SignUpPage />);
    
    // Links de navegación y legales
    expect(screen.getByText("Log In")).toBeInTheDocument();
    expect(screen.getByText(/Privacy Policy/)).toBeInTheDocument(); 
    expect(screen.getByText(/Terms of Service/)).toBeInTheDocument(); 

    // Iconos sociales por su alt text
    expect(screen.getByAltText("Google")).toBeInTheDocument();
  });
});