# Configuración de Storybook

Este proyecto ahora incluye Storybook para desarrollar y documentar componentes React de forma aislada.

## ✨ Características

- **Storybook 9.1.10**: Última versión estable
- **React con Vite**: Optimizado para desarrollo rápido
- **TypeScript**: Soporte completo con tipos
- **Documentación automática**: Tags autodocs para generar documentación
- **Addons incluidos**:
  - `@storybook/addon-links`: Para navegar entre historias
  - `@storybook/addon-docs`: Para documentación automática
  - `@storybook/addon-onboarding`: Guía de inicio para nuevos usuarios

## 🚀 Comandos

### Iniciar servidor de desarrollo
```bash
yarn storybook
# o
npm run storybook
```
El servidor estará disponible en `http://localhost:6006`

### Construir para producción
```bash
yarn build-storybook
# o
npm run build-storybook
```
La salida estará en el directorio `storybook-static/`

## 📝 Crear historias (stories)

Las historias se colocan junto a sus componentes con la extensión `.stories.tsx`:

```typescript
// src/ui/components/MiComponente.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import MiComponente from './MiComponente';

const meta = {
  title: 'UI/MiComponente',
  component: MiComponente,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MiComponente>;

export default meta;
type Story = StoryObj<typeof meta>;

// Historia por defecto
export const Default: Story = {};

// Historia con propiedades
export const ConProps: Story = {
  args: {
    prop1: 'valor1',
    prop2: 'valor2',
  },
};
```

## 📁 Estructura

```
.storybook/
├── main.ts       # Configuración principal
└── preview.ts    # Configuración global de preview

src/
├── stories/      # Componentes de ejemplo
│   ├── Button.stories.ts
│   ├── Header.stories.ts
│   └── Page.stories.ts
└── ui/
    └── components/
        ├── Counter.tsx
        └── Counter.stories.tsx  # Historia del componente Counter
```

## 🎯 Componentes incluidos

- **Counter**: Componente de contador con estado (ejemplo)
- **Button**: Botón con variantes (demo)
- **Header**: Encabezado con autenticación (demo)
- **Page**: Página completa de ejemplo (demo)

## 🔧 Configuración

### `.storybook/main.ts`
Define los addons, framework y rutas de las historias.

### `.storybook/preview.ts`
Configuración global para todas las historias (temas, decoradores, etc.).

## 💡 Consejos

1. Usa el tag `'autodocs'` en tus historias para generar documentación automática
2. Organiza tus historias por módulos/features usando el campo `title`
3. Crea múltiples variantes de tus componentes como diferentes historias
4. Usa `args` para pasar props a tus componentes
5. Utiliza `parameters` para personalizar el layout y comportamiento

## 🌐 Recursos

- [Documentación oficial de Storybook](https://storybook.js.org/)
- [API de React con Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Escribir historias](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Addons](https://storybook.js.org/docs/react/addons/introduction)
