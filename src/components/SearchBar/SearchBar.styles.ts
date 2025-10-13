// src/components/SearchBar/SearchBar.styles.ts

import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import type { StyledSearchInputProps } from './SearchBar.types';
// ASUMIENDO que esta ruta y el export 'greyScale' existen en tu proyecto
import { greyScale } from '../../style-library/types/theme.helpers';

// Colores base para la SearchBar (Puedes tomarlos de tu tema si existen)
// src/components/SearchBar/SearchBar.styles.ts

// ... (tus imports y definiciones de color)

const purpleScale = {
    400: '#9E88E5',
};

// ¡Usaremos un selector interno para asegurar el tamaño del SVG!
// NOTA: Si usaste la Opción 2 de la respuesta anterior, no estás usando este código.
// Si sigues usando styled-components para el wrapper, este es el código.
export const SearchIconWrapper = styled('div')(({ theme }) => ({
    // Color con transparencia
    color: 'rgba(201, 68, 179, 0.7)',

    // -------------------------------------------------------------------
    // CONFIGURACIÓN FINAL PARA LA LUPA GRANDE Y CENTRADA
    // -------------------------------------------------------------------

    // 1. Definir el tamaño del contenedor (para asegurar el espacio)
    width: '3.5rem',
    height: '3.5rem',

    marginRight: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    // 2. ¡EL SECTOR CLAVE! Asegura que el ícono SVG interno tome el tamaño.
    // MuiSvgIcon-root es la clase base que usa Material UI para sus iconos.
    '& .MuiSvgIcon-root': {
        fontSize: '3.5rem', // Forzamos el tamaño del icono SVG interno
        // Esto sobrescribe cualquier estilo por defecto que lo limite.
    }
    // -------------------------------------------------------------------
}));

// Contenedor principal del input (para el fondo blanco grande y bordes redondeados)
export const SearchBarContainer = styled('div')<StyledSearchInputProps>(({ theme, $fullWidth = false }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 4),
    borderRadius: '40px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    transition: theme.transitions.create(['box-shadow', 'background-color']),
    height: 150,
    minWidth: 700,
    width: $fullWidth ? '100%' : 'auto',
    border: '1px solid #E0E0E0',
}));

// El componente InputBase para el manejo de texto
export const SearchInputBase = styled(InputBase)({
    flexGrow: 1,
    fontSize: '2rem', // Tamaño de fuente grande como en la imagen
    fontWeight: 400,
    '& .MuiInputBase-input::placeholder': {
        // CAMBIA ESTE VALOR:
        // EJEMPLO 1: Gris oscuro (para que se vea más fuerte)
        color: '#706c6cff',

        // EJEMPLO 2: Tu color Lila (si quisieras que el placeholder fuera lila)
        // color: purpleScale[400], 

        // EJEMPLO 3: Tu gris original (asumiendo que era #BDBDBD)
        // color: greyScale[400], 

        opacity: 1, // Asegura que el color se vea bien
    },
});

