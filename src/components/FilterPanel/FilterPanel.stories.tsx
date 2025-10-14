import type { Meta, StoryObj } from "@storybook/react";
import { FilterPanel } from "./FilterPanel";
import { DEFAULT_FILTERS } from "./FilterPanel.constants";

const meta: Meta<typeof FilterPanel> = {
    title: "Components/FilterPanel",
    component: FilterPanel,
    argTypes: {
        variant: {
            control: { type: "radio" },
            options: ["primary", "secondary"], // 👈 agregas la opción
        },
        onSelect: { action: "onSelect" },
    },
};

export default meta;
type Story = StoryObj<typeof FilterPanel>;

export const Default: Story = {
    args: {
        filters: DEFAULT_FILTERS,
        selectedValue: "all",
        variant: "primary", // 👈 valor por defecto
    },
};

export const Secondary: Story = {
    args: {
        filters: DEFAULT_FILTERS,
        selectedValue: "all",
        variant: "secondary",
    },
};
