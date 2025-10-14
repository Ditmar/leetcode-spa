import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";
import type { LogoProps } from "./Logo.types";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  parameters: {
    docs: {
      description: {
        component:
          "El componente **Logo** muestra el logotipo principal de la aplicación, en orientación vertical u horizontal según la prop `orientation`.",
      },
    },
  },
  argTypes: {
    orientation: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
      description: "Define la orientación del logo mostrado.",
      table: {
        type: { summary: `"vertical" | "horizontal"` },
        defaultValue: { summary: "vertical" },
      },
    },
    width: {
      control: { type: "number" },
      description: "Ancho del logotipo en píxeles.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
    },
    height: {
      control: { type: "number" },
      description: "Altura del logotipo en píxeles.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
    },
  },
  args: {
    orientation: "vertical",
    width: 100,
    height: 100,
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;
export const Primary: Story = {
  args: {
    orientation: "vertical",
    width: 100,
    height: 100,
  },
  name: "Logo vertical",
};
export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    width: 150,
    height: 80,
  },
  name: "Logo horizontal",
};
