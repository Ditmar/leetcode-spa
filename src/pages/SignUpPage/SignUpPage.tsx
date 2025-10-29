import React, { useState } from "react";
import { Box, Typography, CircularProgress, useTheme, Link } from "@mui/material";

import type { SignUpPageProps } from "./SignUpPage.types";

//  Importación de componentes dependientes
// Estos componentes deben ser integrados cuando estén disponibles en el proyecto. 
// Mientras tanto, las líneas estarán comentadas para evitar errores de importación.
// Cuando los componentes estén listos, solo elimina el comentario y los placeholders

// import { Logo } from "../../components/Logo/Logo"; // Este es el componente Logo, asegúrate de importarlo cuando esté disponible
// import { FormInput } from "../../components/FormInput/FormInput"; // Este es el componente FormInput, reemplazar el placeholder por este componente real
// import { PrimaryButton } from "../../components/Primary-Button/Button"; // Este es el componente de botón, sustituir cuando esté listo

//  Importación de iconos de redes sociales
import GoogleIcon from "./assets/google.svg"; // Icono de Google
import FacebookIcon from "./assets/facebook.svg"; // Icono de Facebook
import GithubIcon from "./assets/github.svg"; // Icono de GitHub

//  Importación de estilos desde el archivo de estilos centralizado
import {
    getPageContainerStyles,
    getLogoStyles,
    getInputStyles,
    getButtonStyles,
    haveAccountTextStyles,
    loginLinkStyles,
    signupWithTextStyles,
    getSocialIconStyles,
    legalTextStyles,
    legalLinkStyles
} from "./SignUpPage.styles";

// Expresiones regulares y valores de validación
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Expresión regular para validar el correo electrónico
const PASSWORD_MIN_LENGTH = 6; // Mínimo de caracteres para la contraseña

// Componente principal de la página de registro
export const SignUpPage: React.FC<SignUpPageProps> = ({
    loading = false,
    buttonText = "(DEV) Placeholder: PrimaryButton - Register",
    disabled = false,
    onSubmit = () => console.log('Simulando envío del formulario...'),

    loginText = "Log In",
    signupWithText = "Or you can Signup with",

    showSocialIcons = true,
    showLegalText = true,

    googleLoginUrl = "https://accounts.google.com/signin",
    githubLoginUrl = "https://github.com/login",
    facebookLoginUrl = "https://www.facebook.com/login",
    privacyPolicyUrl = "https://policies.google.com/privacy",
    termsOfServiceUrl = "https://policies.google.com/terms",
}) => {
    //  Estados locales para manejar los campos de entrada
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Estado para manejar los errores de validación
    const [errors, setErrors] = useState<{ email: string; username: string; password: string }>({
        email: "",
        username: "",
        password: "",
    });

    // Usar el tema de Material UI para aplicar estilos
    const theme = useTheme();

    // Función para manejar el envío del formulario y validar los campos
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Evitar recarga de la página

        // Validación de los campos de entrada
        const newErrors = { email: "", username: "", password: "" };

        // Validar Email con regex
        if (!EMAIL_REGEX.test(email)) {
            newErrors.email = "Por favor, ingresa un correo electrónico válido.";
        }

        // Validar Nombre de usuario
        if (!username) {
            newErrors.username = "El nombre de usuario es obligatorio.";
        }

        // Validar Contraseña
        if (password.length < PASSWORD_MIN_LENGTH) {
            newErrors.password = `La contraseña debe tener al menos ${PASSWORD_MIN_LENGTH} caracteres.`;
        }

        // Si hay errores, actualizamos el estado de los errores y retornamos
        if (newErrors.email || newErrors.username || newErrors.password) {
            setErrors(newErrors);
            return;
        }

        // Si no hay errores, actualizamos el estado de errores y llamamos a la función onSubmit
        setErrors(newErrors);
        onSubmit({ email, username, password });
    };

    // Lógica para calcular el tamaño del spinner de carga
    const spinnerSize = theme.spacing(22 / 8);

    // Lógica para habilitar/deshabilitar el botón de registro
    const isDisabled = disabled || loading || !email || !username || !password || !!errors.email || !!errors.username || !!errors.password;

    return (
        <Box sx={getPageContainerStyles(theme)}>
            <Box
                component="form"
                onSubmit={handleSubmit} // Enviar formulario al hacer clic
                sx={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }}
            >
                {/* 1. Logo - Componente de logo que debe ser implementado cuando esté disponible */}
                {/* Placeholder, eliminar cuando se integre el logo real */}
                <Box sx={getLogoStyles(theme)}>
                    {/* Aquí va el componente Logo */}
                    {/* <Logo orientation="horizontal" width="266.14" height="45.68" alt="Logo" /> */}
                    (DEV) Placeholder: Logo
                </Box>

                {/* 2. Input de Email */}
                {/* El input para email está aquí. Se debe reemplazar el Placeholder con el componente real */}
                {/* <FormInput
                    label="Email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: "" }); }}
                    placeholder="Ingrese su email"
                    errorMessage={errors.email}
                    variant="outlined"
                    size="medium"
                    sx={getInputStyles(122.42 / 8, theme)}
                /> */}
                <Box sx={getInputStyles(122.42 / 8, theme)}>
                    (DEV) Placeholder: FormInput - Email
                </Box>

                {/* 3. Input de Nombre de Usuario */}
                {/* Similar al email, reemplazar con el componente real de 'FormInput' cuando esté listo */}
                <Box sx={getInputStyles(225.65 / 8, theme)}>
                    (DEV) Placeholder: FormInput - Username
                </Box>

                {/* 4. Input de Contraseña */}
                {/* Aquí también debe ir el input real para la contraseña */}
                <Box sx={getInputStyles(328.88 / 8, theme)}>
                    (DEV) Placeholder: FormInput - Password
                </Box>

                {/* 5. Botón de Registro */}
                {/* El botón se desactiva cuando el formulario está vacío o en estado de carga */}
                <Box
                    sx={{
                        ...getButtonStyles(theme),
                        opacity: isDisabled ? 0.6 : 1, // Cambia la opacidad cuando el botón está deshabilitado
                        pointerEvents: isDisabled ? 'none' : 'auto', // Desactiva los eventos de clic cuando está deshabilitado
                    }}
                    onClick={handleSubmit} // Al hacer clic en el botón, se llama al método handleSubmit
                >
                    {/* Spinner de carga o texto del botón según el estado de carga */}
                    {loading ? <CircularProgress size={spinnerSize} color="inherit" /> : buttonText}
                </Box>

                {/* 6. Texto: "¿Tienes una cuenta?" */}
                <Typography sx={haveAccountTextStyles(theme)}>
                    Have an Account?
                </Typography>

                {/* 7. Enlace para Login */}
                {/* El enlace para redirigir al login usa el texto de la prop 'loginText' */}
                <Link href="/login" sx={loginLinkStyles(theme)}>
                    {loginText}
                </Link>

                {/* 8. Texto para registrarse con redes sociales */}
                <Typography sx={signupWithTextStyles(theme)}>
                    {signupWithText}
                </Typography>

                {/* 9. Iconos de redes sociales */}
                {/* Mostrar u ocultar los iconos según la prop 'showSocialIcons' */}
                {showSocialIcons && (
                    <>
                        {/* Google Login */}
                        <Box
                            component="img"
                            src={GoogleIcon}
                            alt="Google"
                            sx={getSocialIconStyles(0, theme)}
                            onClick={() => window.open(googleLoginUrl, "_blank")} // Abrir la URL de Google en una nueva pestaña
                        />

                        {/* GitHub Login */}
                        <Box
                            component="img"
                            src={GithubIcon}
                            alt="GitHub"
                            sx={getSocialIconStyles(1, theme)}
                            onClick={() => window.open(githubLoginUrl, "_blank")}
                        />

                        {/* Facebook Login */}
                        <Box
                            component="img"
                            src={FacebookIcon}
                            alt="Facebook"
                            sx={getSocialIconStyles(2, theme)}
                            onClick={() => window.open(facebookLoginUrl, "_blank")}
                        />
                    </>
                )}

                {/* 10. Texto Legal */}
                {showLegalText && (
                    <Typography sx={legalTextStyles(theme)}>
                        This site is protected by reCAPTCHA and the Google{" "}
                        <Link href={privacyPolicyUrl} target="_blank" sx={legalLinkStyles}>
                            Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href={termsOfServiceUrl} target="_blank" sx={legalLinkStyles}>
                            Terms of Service
                        </Link>{" "}
                        apply.
                    </Typography>
                )}
            </Box>
        </Box>
    );
};
