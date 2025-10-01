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
| `npm run storybook`       | Starts Storybook dev server at `localhost:6006`  |
| `npm run build-storybook` | Build Storybook static site to `./storybook-static/` |

## 📚 Storybook

This project includes Storybook for developing and documenting React components in isolation.

### Running Storybook

To start the Storybook development server:

```sh
yarn storybook
# or
npm run storybook
```

The Storybook interface will be available at `http://localhost:6006`.

### Creating Stories

Stories are located next to their components with the `.stories.tsx` extension. For example:

```typescript
// src/ui/components/Counter.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Counter from './Counter';

const meta = {
  title: 'UI/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
```

### Building Storybook

To build Storybook for production:

```sh
yarn build-storybook
# or
npm run build-storybook
```

The static site will be built to the `storybook-static/` directory.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
