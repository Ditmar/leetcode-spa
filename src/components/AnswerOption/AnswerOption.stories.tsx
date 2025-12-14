import { ThemeProvider, createTheme } from '@mui/material/styles';

import { AnswerOption } from './AnswerOption';

import type { Meta, StoryObj } from '@storybook/react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#1A1825' },
    text: { primary: '#FFFFFF' },
  },
  typography: { fontFamily: "'Syne', sans-serif" },
});

const meta: Meta<typeof AnswerOption> = {
  title: 'Components/AnswerOption',
  component: AnswerOption,

  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <div
          style={{
            padding: '2rem',
            display: 'flex',
            //CORRECCIÓN: Alineación al principio (flex-start)
            justifyContent: 'flex-start',
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    onChange: { action: 'option selected' },
    variant: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    //CORRECCIÓN: Usar función vacía para evitar el error 'no-console' del linter
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof AnswerOption>;

export const Default: Story = {
  args: {
    label: 'Female',
    value: 'female',
    selected: true,
  },
};

export const Selected: Story = {
  args: {
    label: 'Female',
    value: 'female',
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Female',
    value: 'disabled',
    disabled: true,
    selected: false,
  },
};

export const Small: Story = {
  args: {
    label: 'Female',
    value: 'small',
    size: 'small',
    selected: true,
  },
};

export const Large: Story = {
  args: {
    label: 'Female',
    value: 'large',
    size: 'large',
    selected: true,
  },
};
