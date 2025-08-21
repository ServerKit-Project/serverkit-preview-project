import type { Meta, StoryObj } from "@storybook/react";
import { getIconForVariant, VariantType } from ".";

const meta = {
  title: "components/VariantIcons",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "info", "error"],
      description: "The variant type to display",
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col items-center gap-2">
      {getIconForVariant("default")}
    </div>
  ),
};

export const Success: Story = {
  args: {},
  render: ({}) => (
    <div className="flex flex-col items-center gap-2">
      {getIconForVariant("success")}
    </div>
  ),
};

export const Warning: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col items-center gap-2">
      {getIconForVariant("warning")}
    </div>
  ),
};

export const Info: Story = {
  args: {},
  render: ({}) => (
    <div className="flex flex-col items-center gap-2">
      {getIconForVariant("info")}
    </div>
  ),
};

export const Error: Story = {
  args: {},
  render: ({}) => (
    <div className="flex flex-col items-center gap-2">
      {getIconForVariant("error")}
    </div>
  ),
};

export const AllIcons: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      {(
        ["default", "success", "warning", "info", "error"] as VariantType[]
      ).map((variant) => (
        <div key={variant} className="flex flex-col items-center gap-2">
          {getIconForVariant(variant)}
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All variant icons showing their different colors",
      },
    },
  },
};
