import { Box, useTheme } from '@mui/material';

import { MCQQuestion } from './MCQQuestion';

import type { MCQQuestionProps } from './MCQQuestion.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MCQQuestion> = {
  title: 'Components/MCQQuestion',
  component: MCQQuestion,
  argTypes: {
    question: { control: 'text' },
    number: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof MCQQuestion>;

const options = [
  { label: 'Double', value: 'double' },
  { label: 'Float', value: 'float' },
  { label: 'Long Int', value: 'long' },
  { label: 'Int', value: 'int' },
];

export const Default: Story = {
  args: {
    number: 1,
    question:
      'Eesha works for ISRO where she is involved in a mission to intercept a comet that is likely to collide within 1 month.',
    options,
    disabled: false,
    onChange: () => {
      // Action when selecting an option (demo only in Storybook)
    },
  } as MCQQuestionProps,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const LongQuestion: Story = {
  args: {
    ...Default.args,
    question:
      'Eesha works for ISRO where she is involved in a mission to intercept a comet that is likely to collide within 1 month. She is developing a C program to calculate the trajectory of the missile to be launched to intercept and destroy the approaching comet. In order to achieve the highest accuracy of the missile trajectory, what data type should she use for the variables in her equation?',
  },
};

/**
 * MobileLayout story modified only for visualization in Storybook.
 * This decorator is for layout demonstration purposes and does not affect the component behavior.
 */
export const MobileLayout: Story = {
  args: {
    ...Default.args,
    question:
      'Which of the following data types provides the highest precision in numerical calculations?',
  },
  decorators: [
    (Story) => {
      const theme = useTheme();
      return (
        <Box
          sx={{
            maxWidth: 320,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(1.5),
            '& .MuiRadioGroup-root > div': {
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing(1.5),
            },
          }}
        >
          <Story />
        </Box>
      );
    },
  ],
};
