import NavigationMenuLogo from '../../assets/NavigationMenu.svg?url';

import { NavigationMenu } from './NavigationMenu';

import type { NavSection, NavigationMenuProps } from './NavigationMenu.types';
import type { Meta, StoryObj } from '@storybook/react';

const defaultNavItems = ['Premium', 'Explore', 'Problems', 'Contest', 'Discuss'];

const meta: Meta<typeof NavigationMenu> = {
  title: 'component-catalog/NavigationMenu',
  component: NavigationMenu,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Navigation menu size variant',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Navigation menu color variant',
    },
    navSections: {
      table: { disable: true },
    },
    currentPath: {
      table: { disable: true },
    },
    onItemClick: {
      table: { disable: true },
    },
    useScrollHide: {
      table: { disable: true },
    },
    drawerProps: {
      table: { disable: true },
    },
    toolbarProps: {
      table: { disable: true },
    },
    onMobileMenuToggle: {
      table: { disable: true },
    },
    forceHamburger: {
      table: { disable: true },
    },
    logo: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

const createNavSections = (labels: string[]): NavSection[] => [
  {
    id: 'main',
    items: labels.map((label) => ({
      id: label.toLowerCase().replace(/\s+/g, '-'),
      label,
      href: `/${label.toLowerCase().replace(/\s+/g, '-')}`,
    })),
  },
];

const createStoryRender = () => {
  return (args: NavigationMenuProps) => {
    const navSections = args.navSections || createNavSections(defaultNavItems);
    return <NavigationMenu {...args} navSections={navSections} />;
  };
};

export const Default: Story = {
  args: {
    navSections: createNavSections(defaultNavItems),
    size: 'medium',
    variant: 'primary',
  },
  render: createStoryRender(),
};

export const WithLogo: Story = {
  args: {
    navSections: createNavSections(defaultNavItems),
    logo: NavigationMenuLogo,
    size: 'medium',
    variant: 'primary',
  },
};

export const Desktop: Story = {
  args: {
    navSections: createNavSections(defaultNavItems),
    logo: NavigationMenuLogo,
    size: 'medium',
    variant: 'primary',
  },
};

export const Mobile: Story = {
  args: {
    navSections: createNavSections(defaultNavItems),
    logo: undefined,
    size: 'medium',
    variant: 'primary',
  },
};

export const ActiveState: Story = {
  args: {
    navSections: createNavSections(defaultNavItems),
    currentPath: '/premium',
    size: 'medium',
    variant: 'primary',
  },
  render: createStoryRender(),
  parameters: {
    docs: {
      description: {
        story: 'Shows Premium as active. Active items display in white.',
      },
    },
  },
};

export const SizeSmall: Story = {
  args: {
    navSections: createNavSections(defaultNavItems),
    size: 'small',
    variant: 'primary',
  },
  render: createStoryRender(),
};

export const SizeLarge: Story = {
  args: {
    navSections: createNavSections(defaultNavItems),
    size: 'large',
    variant: 'primary',
  },
  render: createStoryRender(),
};

export const VariantSecondary: Story = {
  args: {
    navSections: createNavSections(defaultNavItems),
    size: 'medium',
    variant: 'secondary',
  },
  render: createStoryRender(),
};

export const CustomLabels: Story = {
  args: {
    navSections: createNavSections(['Premium2', 'Explore2', 'Problems2', 'Contest2', 'Discuss2']),
    size: 'medium',
    variant: 'primary',
  },
  render: createStoryRender(),
  parameters: {
    docs: {
      description: {
        story:
          'Example showing custom labels. Edit navSections in Controls to change the menu items.',
      },
    },
  },
};
