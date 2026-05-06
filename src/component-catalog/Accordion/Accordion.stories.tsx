import { Box, Typography, Button } from '@mui/material';
import React from 'react';

import { Accordion } from './Accordion';

import type { AccordionItem } from './Accordion.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '100%', maxWidth: 1216, mx: 'auto', p: 2 }}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.';

const defaultItems: AccordionItem[] = [
  {
    id: '1',
    summary: <Typography fontWeight="medium">Is it accessible?</Typography>,
    details: <Typography color="text.secondary">{lorem}</Typography>,
  },
  {
    id: '2',
    summary: <Typography fontWeight="medium">Is it styled?</Typography>,
    details: <Typography color="text.secondary">{lorem}</Typography>,
    defaultExpanded: true,
  },
  {
    id: '3',
    summary: <Typography fontWeight="medium">Is it animated?</Typography>,
    details: <Typography color="text.secondary">{lorem}</Typography>,
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    variant: 'multiple',
  },
};

export const SingleVariant: Story = {
  args: {
    items: defaultItems,
    variant: 'single',
  },
};

const manyItems: AccordionItem[] = [
  ...defaultItems,
  {
    id: '4',
    summary: <Typography fontWeight="medium">Fourth panel</Typography>,
    details: <Typography color="text.secondary">{lorem}</Typography>,
  },
  {
    id: '5',
    summary: <Typography fontWeight="medium">Fifth panel</Typography>,
    details: <Typography color="text.secondary">{lorem}</Typography>,
  },
];

export const WithManyItems: Story = {
  args: {
    items: manyItems,
    variant: 'multiple',
  },
};

export const SquareNoAnimation: Story = {
  args: {
    items: defaultItems,
    square: true,
    disableAnimation: true,
  },
};

export const DisabledItem: Story = {
  args: {
    items: [
      ...defaultItems,
      {
        id: 'disabled',
        summary: <Typography fontWeight="medium">Disabled panel</Typography>,
        details: <Typography color="text.secondary">You cannot expand this.</Typography>,
        disabled: true,
      },
    ],
  },
};

export const WithActions: Story = {
  args: {
    items: [
      defaultItems[0],
      defaultItems[1],
      {
        id: 'actions',
        summary: <Typography fontWeight="medium">Accordion Actions</Typography>,
        details: (
          <Box>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              {lorem}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
              <Button variant="outlined" size="small">
                Cancel
              </Button>
              <Button variant="contained" size="small">
                Agree
              </Button>
            </Box>
          </Box>
        ),
      },
    ],
  },
};
