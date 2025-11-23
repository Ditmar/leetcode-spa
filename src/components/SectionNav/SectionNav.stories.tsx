import React from 'react';

import { SectionNav } from './SectionNav';

import type { Meta, StoryObj, Decorator } from '@storybook/react';

const meta = {
  title: 'Components/SectionNav',
  component: SectionNav,
  argTypes: {
    bottomSpacing: { control: { type: 'text' } },
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
export const Default: Story = {
  args: {
    sections,
    activeSectionId: 'mcq',
    title: 'Section',
    onSelect: () => {},
  },
};

Default.args = Default.args || {};
Default.argTypes = {
  activeSectionId: { control: { type: 'select' }, options: sections.map((s) => s.id) },
};

export const ManyItems: Story = {
  args: {
    sections: manySections,
    activeSectionId: 'sec1',
    title: 'Section',
    onSelect: () => {},
  },
};

ManyItems.argTypes = {
  activeSectionId: { control: { type: 'select' }, options: manySections.map((s) => s.id) },
  height: { control: { type: 'number' } },
};

export const Sizes: Story = {
  args: {
    sections: sections.slice(0, 3),
    activeSectionId: 'debugging',
    title: 'Section',
    bottomSpacing: '1000px',
    onSelect: () => {},
  },
};

Sizes.argTypes = {
  activeSectionId: { control: { type: 'select' }, options: sections.slice(0, 3).map((s) => s.id) },
  bottomSpacing: { control: { type: 'text' } },
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
  return <Story args={props} />;
};

Default.decorators = [withUpdateArgs];
Sizes.decorators = [withUpdateArgs];
ManyItems.decorators = [withUpdateArgs];
