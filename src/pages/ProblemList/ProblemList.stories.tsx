import { useState } from 'react';

import { ProblemList } from './ProblemList';
import { MOCK_PROBLEMS } from './ProblemList.constants';

import type { Problem, ProblemListProps } from './ProblemList.types';
import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react/jsx-runtime';

const meta: Meta<typeof ProblemList> = {
  title: 'pages/ProblemList',
  component: ProblemList,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Sidebar organism that renders a scrollable list of coding problems with status icons, difficulty labels, and acceptance rates.',
      },
    },
  },
  argTypes: {
    problems: { table: { disable: true } },
    onSelectProblem: { table: { disable: true } },
    selectedProblemId: {
      control: 'number',
      description: 'ID of the currently selected problem',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProblemList>;

/** Keeps selection state interactive inside Storybook */
const InteractiveWrapper = (args: ProblemListProps) => {
  const [selected, setSelected] = useState(args.selectedProblemId);
  return <ProblemList {...args} selectedProblemId={selected} onSelectProblem={setSelected} />;
};

export const Default: Story = {
  args: {
    problems: MOCK_PROBLEMS,
    selectedProblemId: 1,
  },
  render: (args: JSX.IntrinsicAttributes & ProblemListProps) => <InteractiveWrapper {...args} />,
};

export const AllStatuses: Story = {
  args: {
    problems: [
      {
        id: 1,
        title: 'Solved Problem',
        difficulty: 'Easy',
        acceptanceRate: 60.0,
        status: 'solved',
      },
      {
        id: 2,
        title: 'Attempted Problem',
        difficulty: 'Medium',
        acceptanceRate: 45.0,
        status: 'attempted',
      },
      {
        id: 3,
        title: 'Unsolved Problem',
        difficulty: 'Hard',
        acceptanceRate: 30.0,
        status: 'unsolved',
      },
    ] satisfies Problem[],
    selectedProblemId: -1,
  },
  render: (args: JSX.IntrinsicAttributes & ProblemListProps) => <InteractiveWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Displays all three status icon states: solved (green check), attempted (amber minus), unsolved (grey circle).',
      },
    },
  },
};

export const SelectedItem: Story = {
  args: {
    problems: MOCK_PROBLEMS,
    selectedProblemId: 3,
  },
  render: (args: JSX.IntrinsicAttributes & ProblemListProps) => <InteractiveWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Problem 3 is pre-selected — highlighted with a blue 3.52 px left border and a light blue background (#EFF6FF).',
      },
    },
  },
};

export const MobileDrawer: Story = {
  args: {
    problems: MOCK_PROBLEMS,
    selectedProblemId: 1,
  },
  render: (args: JSX.IntrinsicAttributes & ProblemListProps) => <InteractiveWrapper {...args} />,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story:
          'On mobile (< 768 px) the list is hidden inside a Drawer toggled by the floating Fab button.',
      },
    },
  },
};

export const EmptyList: Story = {
  args: {
    problems: [],
    selectedProblemId: -1,
  },
  render: (args: JSX.IntrinsicAttributes & ProblemListProps) => <InteractiveWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Empty state — rendered when the problems array is empty.',
      },
    },
  },
};
