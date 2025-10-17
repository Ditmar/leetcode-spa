import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { DonutProgress } from "./DonutProgress";

const theme = createTheme();

const meta: Meta<typeof DonutProgress> = {
  title: "Components/DonutProgress",
  component: DonutProgress,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box sx={{ padding: 4 }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    percentage: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    color: {
      control: { type: "select" },
      options: ["auto", "primary", "success", "error", "warning", "#ff00ff"],
    },
    strokeWidth: {
      control: { type: "range", min: 4, max: 20, step: 2 },
    },
    animated: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof DonutProgress>;

export const Default: Story = {
  args: {
    percentage: 0,
  },
};
