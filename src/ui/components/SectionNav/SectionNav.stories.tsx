import React from 'react';

import { SectionNav } from './SectionNav';

import type { Meta, StoryObj, Decorator } from '@storybook/react';

const meta = {
  title: 'Components/SectionNav',
  component: SectionNav,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: { type: 'radio' }, options: ['vertical', 'horizontal'] },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Componente para navegar entre secciones de una prueba (ej. MCQ y Programming).\n\nProps:\n- sections: { id: string; label: string }[]\n- activeSectionId: string\n- onSelect: (id: string) => void\n- orientation?: "vertical" | "horizontal"\n- itemSize?: number | string\n- width?: string | number\n- height?: string | number\n- maxCrossAxis?: string\n- className?: string',
      },
    },
  },
} satisfies Meta<typeof SectionNav>;

export default meta;

type Story = StoryObj<typeof meta>;

const sections = [
  { id: 'mcq', label: 'MCQ' },
  { id: 'programming', label: 'Programming' },
  { id: 'debugging', label: 'Debugging' },
  { id: 'review', label: 'Review' },
];

const manySections = Array.from({ length: 20 }, (_, i) => ({
  id: `sec${i + 1}`,
  label: `Section ${i + 1}`,
}));
export const ManyHorizontal: Story = {
  args: {
    sections: manySections,
    activeSectionId: 'sec1',
    orientation: 'horizontal',
    itemSize: 48,
    width: '100%',
    height: 56,
    maxCrossAxis: '100vw',
    onSelect: () => {},
  },
};

export const ManyVertical: Story = {
  args: {
    sections: manySections,
    activeSectionId: 'sec1',
    orientation: 'vertical',
    itemSize: 48,
    maxCrossAxis: '320px',
    onSelect: () => {},
  },
};
ManyHorizontal.argTypes = {
  activeSectionId: { control: { type: 'select' }, options: manySections.map((s) => s.id) },
  itemSize: { control: { type: 'number' } },
  width: { control: { type: 'text' } },
  height: { control: { type: 'number' } },
  maxCrossAxis: { control: { type: 'text' } },
};
ManyVertical.argTypes = {
  activeSectionId: { control: { type: 'select' }, options: manySections.map((s) => s.id) },
  itemSize: { control: { type: 'number' } },
  maxCrossAxis: { control: { type: 'text' } },
};

export const Vertical: Story = {
  args: {
    sections,
    activeSectionId: 'mcq',
    orientation: 'vertical',
    onSelect: () => {},
  },
};

export const Horizontal: Story = {
  args: {
    sections: sections.slice(0, 2),
    activeSectionId: 'programming',
    orientation: 'horizontal',
    onSelect: () => {},
  },
};

export const Sizes: Story = {
  args: {
    sections: sections.slice(0, 3),
    activeSectionId: 'debugging',
    orientation: 'vertical',
    onSelect: () => {},
    itemSize: 56,
    maxCrossAxis: '300px',
  },
};

export const LargeVertical: Story = {
  args: {
    sections,
    activeSectionId: 'programming',
    orientation: 'vertical',
    itemSize: 72,
    maxCrossAxis: '400px',
    onSelect: () => {},
  },
};

export const SmallHorizontal: Story = {
  args: {
    sections,
    activeSectionId: 'review',
    orientation: 'horizontal',
    itemSize: 28,
    width: '100%',
    height: 36,
    maxCrossAxis: '100vw',
    onSelect: () => {},
  },
};

Vertical.args = Vertical.args || {};
Vertical.argTypes = {
  activeSectionId: { control: { type: 'select' }, options: sections.map((s) => s.id) },
  itemSize: { control: { type: 'number' } },
  maxCrossAxis: { control: { type: 'text' } },
};

Horizontal.argTypes = {
  activeSectionId: { control: { type: 'select' }, options: sections.slice(0, 2).map((s) => s.id) },
  itemSize: { control: { type: 'number' } },
  maxCrossAxis: { control: { type: 'text' } },
};

Sizes.argTypes = {
  activeSectionId: { control: { type: 'select' }, options: sections.slice(0, 3).map((s) => s.id) },
  itemSize: { control: { type: 'number' } },
  maxCrossAxis: { control: { type: 'text' } },
};

LargeVertical.argTypes = {
  activeSectionId: { control: { type: 'select' }, options: sections.map((s) => s.id) },
  itemSize: { control: { type: 'number' } },
  maxCrossAxis: { control: { type: 'text' } },
};
SmallHorizontal.argTypes = {
  activeSectionId: { control: { type: 'select' }, options: sections.map((s) => s.id) },
  itemSize: { control: { type: 'number' } },
  width: { control: { type: 'text' } },
  height: { control: { type: 'number' } },
  maxCrossAxis: { control: { type: 'text' } },
};

const withUpdateArgs: Decorator = (Story, context) => {
  const updateArgs = context.updateArgs ?? null;
  const props = {
    ...context.args,
    onSelect: (id: string) => {
      if (updateArgs) updateArgs({ activeSectionId: id });
      if (typeof context.args?.onSelect === 'function') context.args.onSelect(id);
    },
  };
  return <Story {...context} args={props} />;
};

Vertical.decorators = [withUpdateArgs];
Horizontal.decorators = [withUpdateArgs];
Sizes.decorators = [withUpdateArgs];

LargeVertical.decorators = [withUpdateArgs];
SmallHorizontal.decorators = [withUpdateArgs];
ManyHorizontal.decorators = [withUpdateArgs];
ManyVertical.decorators = [withUpdateArgs];

export const WidthVariants: Story = {
  render: (args) => (
    <div style={{ width: '180px', overflow: 'hidden' }}>
      <SectionNav {...args} width="100%" />
    </div>
  ),
  args: {
    sections: manySections,
    activeSectionId: 'sec1',
    orientation: 'horizontal',
    itemSize: 48,
    width: '100%',
    height: 56,
    maxCrossAxis: '100vw',
    onSelect: () => {},
  },
};

WidthVariants.argTypes = {
  width: {
    control: { type: 'text' },
    description: 'Ancho del contenedor (ej: 100%, 600px, 300px)',
  },
  activeSectionId: { control: { type: 'select' }, options: manySections.map((s) => s.id) },
  itemSize: { control: { type: 'number' } },
  height: { control: { type: 'number' } },
  maxCrossAxis: { control: { type: 'text' } },
};
WidthVariants.decorators = [withUpdateArgs];
