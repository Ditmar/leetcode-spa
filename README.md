# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run storybook`       | Starts Storybook at `localhost:6006`             |
| `npm run build-storybook` | Build Storybook for production to `storybook-static/` |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 📚 Storybook

This project includes Storybook for developing and documenting React components in isolation. Storybook provides an interactive UI development environment that allows you to browse components, view their different states, and develop them interactively.

### Running Storybook

```sh
npm run storybook
```

This will start Storybook at `http://localhost:6006`.

### Creating Stories

Stories are located in the same directory as the components, with the `.stories.tsx` extension. For example, the Counter component has its story at `src/ui/components/Counter.stories.tsx`.

To create a new story:

1. Create a file with the pattern `ComponentName.stories.tsx` next to your component
2. Define your stories using the Storybook API

Example:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import MyComponent from './MyComponent';

const meta = {
  title: 'UI/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
```

### Building Storybook

To build a static version of Storybook for deployment:

```sh
npm run build-storybook
```

This will generate a static site in the `storybook-static/` directory.
