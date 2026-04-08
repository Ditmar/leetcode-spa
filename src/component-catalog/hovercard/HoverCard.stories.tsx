import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { HoverCard } from "./HoverCard";
import {
  DemoPageRoot,
  DemoPageTitle,
  DemoPageSubtitle,
  DemoTriggerContainer,
} from "./HoverCard.styles";

// ---------------------------------------------------------------------------
// Shared rich card content
// ---------------------------------------------------------------------------

function UserCard() {
  return (
    <Stack spacing={1.5} sx={{ minWidth: 220 }}>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Avatar sx={{ width: 44, height: 44, bgcolor: "primary.main" }}>
          JD
        </Avatar>
        <Box>
          <Typography variant="subtitle2" fontWeight={700}>
            Jane Doe
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Senior Product Designer
          </Typography>
        </Box>
      </Stack>

      <Divider />

      <Typography variant="body2" color="text.secondary">
        Passionate about accessible, user-centred interfaces. Based in Berlin.
      </Typography>

      <Stack direction="row" spacing={0.5} flexWrap="wrap">
        <Chip label="UX" size="small" />
        <Chip label="Figma" size="small" />
        <Chip label="A11y" size="small" />
      </Stack>
    </Stack>
  );
}

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<typeof HoverCard> = {
  title: "ComponentCatalog/HoverCard",
  component: HoverCard,
  argTypes: {
    trigger: { control: false },
    children: { control: false },
    PaperProps: { control: false },
    openDelay: {
      control: { type: "number", min: 0, max: 2000, step: 50 },
    },
    closeDelay: {
      control: { type: "number", min: 0, max: 2000, step: 50 },
    },
    placement: {
      control: "select",
      options: [
        "bottom-start", "bottom", "bottom-end",
        "top-start",    "top",    "top-end",
        "left-start",   "left",   "left-end",
        "right-start",  "right",  "right-end",
      ],
    },
    disabled: { control: "boolean" },
    maxWidth: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

// ---------------------------------------------------------------------------
// FigmaDemo — reproduces the exact Figma screen
//
// Title:    "Tooltips & Hover Cards"
// Subtitle: "Contextual information on hover"
// Container: white rounded card with two outlined buttons stacked vertically
//   • "Hover for Tooltip"  → MUI Tooltip
//   • "Hover for Card"     → HoverCard with rich user preview
// ---------------------------------------------------------------------------

export const FigmaDemo: Story = {
  render: () => (
    <DemoPageRoot>
      <DemoPageTitle>Tooltips &amp; Hover Cards</DemoPageTitle>
      <DemoPageSubtitle>Contextual information on hover</DemoPageSubtitle>

      <DemoTriggerContainer>
        {/* Trigger 1: plain MUI Tooltip */}
        <Tooltip title="This is a tooltip" placement="right" arrow>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 500,
              justifyContent: "flex-start",
              minWidth: 180,
            }}
          >
            Hover for Tooltip
          </Button>
        </Tooltip>

        {/* Trigger 2: HoverCard with rich user preview */}
        <HoverCard
          trigger={
            <Button
              variant="outlined"
              sx={{
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 500,
                justifyContent: "flex-start",
                minWidth: 180,
              }}
            >
              Hover for Card
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

// ---------------------------------------------------------------------------
// Default — single hover card with user preview
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    openDelay: 200,
    closeDelay: 300,
    placement: "bottom-start",
    disabled: false,
    maxWidth: 280,
    trigger: (
      <Button variant="outlined" sx={{ textTransform: "none", borderRadius: 2 }}>
        Hover for Card
      </Button>
    ),
    children: <UserCard />,
  },
};

// ---------------------------------------------------------------------------
// PlacementTop
// ---------------------------------------------------------------------------

export const PlacementTop: Story = {
  args: {
    ...Default.args,
    placement: "top-start",
    trigger: (
      <Button variant="outlined" sx={{ textTransform: "none", borderRadius: 2 }}>
        Hover (top-start)
      </Button>
    ),
    children: (
      <Typography variant="body2">Card positioned above the trigger.</Typography>
    ),
  },
};

// ---------------------------------------------------------------------------
// NoDelay
// ---------------------------------------------------------------------------

export const NoDelay: Story = {
  args: {
    ...Default.args,
    openDelay: 0,
    closeDelay: 0,
    trigger: (
      <Button variant="outlined" sx={{ textTransform: "none", borderRadius: 2 }}>
        Instant open
      </Button>
    ),
    children: (
      <Typography variant="body2">Opens and closes without delay.</Typography>
    ),
  },
};

// ---------------------------------------------------------------------------
// Disabled
// ---------------------------------------------------------------------------

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    trigger: (
      <Button variant="outlined" sx={{ textTransform: "none", borderRadius: 2 }}>
        Disabled trigger
      </Button>
    ),
    children: (
      <Typography variant="body2">This card will never open.</Typography>
    ),
  },
};

// ---------------------------------------------------------------------------
// ControlledOpen
// ---------------------------------------------------------------------------

export const ControlledOpen: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);

    return (
      <Stack spacing={2} alignItems="flex-start">
        <Button
          variant="contained"
          onClick={() => setOpen((v) => !v)}
          sx={{ textTransform: "none" }}
        >
          Toggle card ({open ? "open" : "closed"})
        </Button>

        <HoverCard
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          trigger={
            <Typography sx={{ cursor: "pointer", textDecoration: "underline" }}>
              Controlled card
            </Typography>
          }
        >
          <Typography variant="body2">
            Visibility is controlled externally via the <code>open</code> prop.
          </Typography>
        </HoverCard>
      </Stack>
    );
  },
};