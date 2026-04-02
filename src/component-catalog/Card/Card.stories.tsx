import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "@mui/material/Avatar";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "ComponentCatalog/Card",
  component: Card,

  // 🔥 evita que Storybook meta {}
  argTypes: {
    avatar: { control: false },
    children: { control: false },
    actions: { control: false },
    expandedContent: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    subheader: "Subtitle",
    children: "This is a card",
  },
};

export const Horizontal: Story = {
  args: {
    layout: "horizontal",
    title: "Horizontal Card",
    media: "https://via.placeholder.com/400",
  },
};

export const Expandable: Story = {
  args: {
    title: "Expandable Card",
    expandable: true,
    expandedContent: "Hidden content",
  },
};

export const WithAvatar: Story = {
  args: {
    title: "User Card",
    subheader: "Developer",
    avatar: <Avatar>A</Avatar>,
  },
};