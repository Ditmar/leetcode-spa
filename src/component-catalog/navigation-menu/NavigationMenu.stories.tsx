import { useMediaQuery, useTheme } from '@mui/material';
import { useMemo } from 'react';

import NavigationLogo from '../../assets/NavigationMenu.svg';
import NavigationLogo2 from '../../assets/NavigationMenu2.svg';

import { NavigationMenu } from './NavigationMenu';

import type { NavSection } from './NavigationMenu.types';
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
    navLabels: {
      control: 'object',
      description: `Custom labels for the\n       5 navigation items (Premium, Explore, Problems, Contest, Discuss)`,
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
    themeColor: {
      table: { disable: true },
    },
    elevation: {
      table: { disable: true },
    },
    ariaLabel: {
      table: { disable: true },
    },
    rightContent: {
      table: { disable: true },
    },
    appBarHeight: {
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
  return ({ navLabels = defaultNavItems, size, variant, ...args }: Record<string, unknown>) => (
    <NavigationMenu
      {...args}
      navSections={createNavSections(navLabels)}
      size={size}
      variant={variant}
    />
  );
};

const ResponsiveLogoWrapper = ({
  navLabels = defaultNavItems,
  size,
  variant,
  ...args
}: Record<string, unknown>) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const logo = useMemo(() => {
    if (isMobile) {
      return <img src={NavigationLogo2} alt="LeetCode" style={{ height: 24 }} />;
    }
    return <img src={NavigationLogo} alt="LeetCode" style={{ height: 24 }} />;
  }, [isMobile]);

  return (
    <NavigationMenu
      {...args}
      navSections={createNavSections(navLabels)}
      size={size}
      variant={variant}
      logo={logo}
    />
  );
};

export const Default: Story = {
  args: {
    navSections: createNavSections(defaultNavItems),
    navLabels: defaultNavItems,
    size: 'medium',
    variant: 'primary',
  },
  render: createStoryRender(defaultNavItems),
};

export const WithLogo: Story = {
  args: {
    navSections: createNavSections(defaultNavItems),
    navLabels: defaultNavItems,
    size: 'medium',
    variant: 'primary',
  },
  render: ResponsiveLogoWrapper,
};

export const ActiveState: Story = {
  args: {
    navSections: createNavSections(defaultNavItems),
    navLabels: defaultNavItems,
    currentPath: '/premium',
    size: 'medium',
    variant: 'primary',
  },
  render: createStoryRender(defaultNavItems),
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
    navLabels: defaultNavItems,
    size: 'small',
    variant: 'primary',
  },
  render: createStoryRender(defaultNavItems),
};

export const SizeLarge: Story = {
  args: {
    navSections: createNavSections(defaultNavItems),
    navLabels: defaultNavItems,
    size: 'large',
    variant: 'primary',
  },
  render: createStoryRender(defaultNavItems),
};

export const VariantSecondary: Story = {
  args: {
    navSections: createNavSections(defaultNavItems),
    navLabels: defaultNavItems,
    size: 'medium',
    variant: 'secondary',
  },
  render: createStoryRender(defaultNavItems),
};

export const CustomLabels: Story = {
  args: {
    navSections: createNavSections(['Premium2', 'Explore2', 'Problems2', 'Contest2', 'Discuss2']),
    navLabels: ['Premium2', 'Explore2', 'Problems2', 'Contest2', 'Discuss2'],
    size: 'medium',
    variant: 'primary',
  },
  render: ({ navLabels, size, variant, ...args }: Record<string, unknown>) => (
    <NavigationMenu
      {...args}
      navSections={createNavSections(navLabels)}
      size={size}
      variant={variant}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Example showing custom labels. Edit navLabels in Controls to change the menu items.',
      },
    },
  },
};
