import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { HoverCard } from './HoverCard';
import {
  DemoPageRoot,
  DemoPageTitle,
  DemoPageSubtitle,
  DemoTriggerContainer,
} from './HoverCard.styles';

import type { Meta, StoryObj } from '@storybook/react';
function UserCard() {
  return (
    <Stack spacing={1.5} sx={{ minWidth: 220 }}>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Box>
          <Typography variant="subtitle2" fontWeight={700}>
            This is a Hover Card
          </Typography>
          <Typography variant="caption" color="text.secondary">
            This is a Hover Card from my PR
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

const meta: Meta<typeof HoverCard> = {
  title: 'component-catalog/HoverCard',
  component: HoverCard,
  argTypes: {
    trigger: { control: false },
    children: { control: false },
    PaperProps: { control: false },
    openDelay: {
      control: { type: 'number', min: 0, max: 2000, step: 50 },
    },
    closeDelay: {
      control: { type: 'number', min: 0, max: 2000, step: 50 },
    },
    placement: {
      control: 'select',
      options: [
        'bottom-start',
        'bottom',
        'bottom-end',
        'top-start',
        'top',
        'top-end',
        'left-start',
        'left',
        'left-end',
        'right-start',
        'right',
        'right-end',
      ],
    },
    disabled: { control: 'boolean' },
    maxWidth: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const FigmaDemo: Story = {
  render: () => (
    <DemoPageRoot>
      <DemoPageTitle>Tooltips &amp; Hover Cards</DemoPageTitle>
      <DemoPageSubtitle>Contextual information on hover</DemoPageSubtitle>

      <DemoTriggerContainer>
        {}
        <Tooltip title="This is a Tooltip from my PR" placement="right" arrow>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 500,
              justifyContent: 'flex-start',
              minWidth: 180,
            }}
          >
            Hover Tooltip
          </Button>
        </Tooltip>

        {}
        <HoverCard
          trigger={
            <Button
              variant="outlined"
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500,
                justifyContent: 'flex-start',
                minWidth: 180,
              }}
            >
              Hover Card
            </Button>
          }
          openDelay={200}
          closeDelay={300}
          placement="bottom-start"
          maxWidth={280}
        >
          <UserCard />
        </HoverCard>
      </DemoTriggerContainer>
    </DemoPageRoot>
  ),
};

export const Default: Story = {
  args: {
    openDelay: 200,
    closeDelay: 300,
    placement: 'bottom-start',
    disabled: false,
    maxWidth: 280,
    trigger: (
      <Button variant="outlined" sx={{ textTransform: 'none', borderRadius: 2 }}>
        Hover Card
      </Button>
    ),
    children: <UserCard />,
  },
};
export const NoDelay: Story = {
  args: {
    ...Default.args,
    openDelay: 0,
    closeDelay: 0,
    trigger: (
      <Button variant="outlined" sx={{ textTransform: 'none', borderRadius: 2 }}>
        Hover Card
      </Button>
    ),
    children: <Typography variant="body2">Opens and closes without delay.</Typography>,
  },
};
