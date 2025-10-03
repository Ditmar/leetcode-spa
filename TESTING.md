# Testing con Vitest y React Testing Library

Este proyecto está configurado con **Vitest** y **React Testing Library** para realizar unit testing de componentes React.

## 🚀 Scripts de Testing

```bash
# Ejecutar tests en modo watch (recomendado para desarrollo)
yarn test

# Ejecutar tests una sola vez
yarn test:run

# Ejecutar tests con interfaz UI
yarn test:ui

# Ejecutar tests con coverage
yarn test:coverage

# Ejecutar tests en modo watch
yarn test:watch
```

## 📁 Estructura de Testing

```
src/
├── test/
│   ├── setup.ts          # Configuración global de tests
│   └── test-utils.tsx    # Utilidades para testing con MUI
├── ui/components/
│   ├── Counter.tsx
│   └── Counter.test.tsx  # Tests del componente Counter
└── style-library/stories/
    ├── SimpleMuiExample.tsx
    ├── SimpleMuiExample.test.tsx
    └── SimpleMuiExample.userEvent.test.tsx
```

## 🛠️ Configuración

### Vitest Config (`vitest.config.ts`)
- ✅ Entorno jsdom para simular el DOM
- ✅ Plugin de React para JSX
- ✅ Globals habilitadas (describe, it, expect)
- ✅ Setup automático con jest-dom

### Setup de Testing (`src/test/setup.ts`)
- ✅ jest-dom matchers
- ✅ Mocks para ResizeObserver
- ✅ Mocks para window.matchMedia
- ✅ Mocks para getComputedStyle

### Test Utils (`src/test/test-utils.tsx`)
- ✅ Render personalizado con ThemeProvider
- ✅ CssBaseline incluido
- ✅ Re-exporta todo de @testing-library/react

## 📝 Escribiendo Tests

### Test Básico
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
```

### Test con Material-UI
```tsx
import { render, screen } from '../../test/test-utils'; // Usar nuestros utils
import { describe, it, expect } from 'vitest';
import MyMuiComponent from './MyMuiComponent';

describe('MyMuiComponent', () => {
  it('renders with MUI theme', () => {
    render(<MyMuiComponent />);
    // El componente ya tiene ThemeProvider automáticamente
  });
});
```

### Test con User Events
```tsx
import { render, screen } from '../../test/test-utils';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import MyInteractiveComponent from './MyInteractiveComponent';

describe('MyInteractiveComponent', () => {
  it('handles user interactions', async () => {
    const user = userEvent.setup();
    render(<MyInteractiveComponent />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(screen.getByText('Clicked!')).toBeInTheDocument();
  });
});
```

## 🧪 Matchers Disponibles

Gracias a `@testing-library/jest-dom`:

- `toBeInTheDocument()`
- `toHaveTextContent()`
- `toHaveClass()`
- `toBeVisible()`
- `toBeDisabled()`
- `toHaveFocus()`
- Y muchos más...

## 📊 Coverage

Para generar un reporte de cobertura:

```bash
yarn test:coverage
```

Esto generará un reporte en `coverage/` con información detallada sobre qué líneas de código están cubiertas por tests.

## 🎯 Mejores Prácticas

1. **Usar `screen` queries**: Prefiere `screen.getByRole()` sobre `getByTestId()`
2. **Tests de comportamiento**: Testa lo que hace el usuario, no la implementación
3. **User Events**: Usa `@testing-library/user-event` para interacciones más realistas
4. **Async/Await**: Siempre usa `await` con user events
5. **Descriptivos**: Nombres de tests claros y descriptivos

## 🔗 Recursos

- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
- [User Event](https://testing-library.com/docs/user-event/intro)