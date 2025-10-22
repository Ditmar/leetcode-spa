import SignUpPage from "./SignUpPage";

// Desactivado mientras sea "deb" para no romper CI sin alias/utilidades globales.
// Cuando integren dependencias reales, cambia a `describe(...)` y usa
// import { render, screen } from "@/test/test-utils";
describe.skip("<SignUpPage />", () => {
    it("renderiza el card y el formulario de registro", () => {
        // render(<SignUpPage />);
        // expect(screen.getByLabelText('signup-card')).toBeInTheDocument();
        // expect(screen.getByLabelText('signup-form')).toBeInTheDocument();
        // expect(screen.getByText(/Register/i)).toBeInTheDocument();
    });

    it("muestra inputs estructurales (email, username, password)", () => {
        // render(<SignUpPage />);
        // expect(screen.getByPlaceholderText(/Mail Id|Email|mail/i)).toBeTruthy();
        // expect(screen.getByPlaceholderText(/Username/i)).toBeTruthy();
        // expect(screen.getByPlaceholderText(/Password/i)).toBeTruthy();
    });

    it("botón submit está deshabilitado en el deb", () => {
        // render(<SignUpPage />);
        // const btn = screen.getByRole('button', { name: /Register/i });
        // expect(btn).toBeDisabled();
    });
});
