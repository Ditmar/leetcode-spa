import { StatsPanel } from './StatsPanel';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof StatsPanel> = {
    title: 'Dashboard/StatsPanel',
    component: StatsPanel,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof StatsPanel>;

export const Default: Story = {
    args: {
        totalTests: 32,
        passed: 12,
        failed: 19,
        waiting: 1,
    },
};

export const AllPassed: Story = {
    args: {
        totalTests: 20,
        passed: 20,
        failed: 0,
        waiting: 0,
    },
};

export const MixedResults: Story = {
    args: {
        totalTests: 40,
        passed: 25,
        failed: 10,
        waiting: 5,
    },
};
