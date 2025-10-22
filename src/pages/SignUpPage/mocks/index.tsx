// mocks/index.tsx
// Placeholders para no depender de @/components mientras el “deb” está en curso.

export const FormInput = (props: any) => (
    <input
        placeholder={props.label || "mock"}
        defaultValue={props.defaultValue}
        type={props.type || "text"}
        style={{ width: "100%", padding: 10 }}
    />
);

export const PrimaryButton = (props: any) => (
    <button disabled={props.disabled} style={{ width: "100%", padding: 12 }}>
        {props.children}
    </button>
);

// Iconos simples de fallback (SVGs mínimos)
export const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 256 262" aria-hidden="true">
        <path d="M255.9 133.5c0-10.4-.9-20.8-2.7-30.8H130.7v58.3h70.2c-3 16.4-12.1 30.2-25.8 39.5v32.8h41.8c24.5-22.6 39-56 39-99.8z" fill="#4285F4" />
        <path d="M130.7 261.1c35.1 0 64.6-11.6 86.1-31.7l-41.8-32.8c-11.6 7.9-26.4 12.5-44.3 12.5-33.9 0-62.7-22.9-73-53.8h-43v33.7c21.3 42.3 65 72.1 115.9 72.1z" fill="#34A853" />
        <path d="M57.7 155.3c-5.4-16-5.4-33.3 0-49.3V72.3h-43c-18.4 36.7-18.4 80.1 0 116.8l43-33.8z" fill="#FBBC05" />
        <path d="M130.7 50.3c18.9-.3 37.2 6.7 51.1 19.4l38.2-38.2C198.7 10.5 166 0 130.7 0 79.8 0 36.1 29.8 14.8 72.3l43 33.7c10.3-31 39.1-55.7 73-55.7z" fill="#EA4335" />
    </svg>
);

export const GithubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.94c.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.35-3.87-1.35-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.11-.76.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.39-5.27 5.67.42.36.8 1.08.8 2.17v3.22c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
);

export const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#1877F2" d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.095 10.125 24v-8.427H7.078v-3.5h3.047V9.413c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.98h-1.514c-1.493 0-1.957.93-1.957 1.886v2.26h3.328l-.532 3.5h-2.796V24C19.612 23.095 24 18.1 24 12.073Z" />
    </svg>
);
